#!/usr/bin/env node

// Discord bot that listens for messages and runs them through Claude CLI.
//
// ── Setup ───────────────────────────────────────────────────────────
//
// 1. Create a Discord Application at https://discord.com/developers/applications
// 2. Under "Bot", click "Add Bot" and copy the token
// 3. Enable these Privileged Gateway Intents:
//    - MESSAGE CONTENT INTENT
//    - SERVER MEMBERS INTENT (optional)
// 4. Generate an invite URL under OAuth2 → URL Generator:
//    - Scopes: bot
//    - Permissions: Send Messages, Read Messages/View Channels, Read Message History
// 5. Set environment variables in .env:
//    DISCORD_BOT_TOKEN=your-bot-token-here
//    DISCORD_CHANNEL_IDS=channel-id-1,channel-id-2
// 6. Run: node scripts/discord-bot.mjs
//
// ── Notes ───────────────────────────────────────────────────────────
//
// - Only one claude process runs at a time; additional messages are queued
// - Prompts longer than 4000 chars are rejected
// - Claude CLI has a 5-minute timeout per invocation
// - The bot uses --dangerously-skip-permissions since it cannot prompt interactively

import { Client, GatewayIntentBits, EmbedBuilder } from "discord.js";
import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// ── config ──────────────────────────────────────────────────────────

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, "..");

// Load .env manually (no dotenv dependency)
function loadEnv(path) {
  try {
    const content = readFileSync(path, "utf-8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx === -1) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim();
      if (!process.env[key]) process.env[key] = val;
    }
  } catch {
    // .env is optional
  }
}

loadEnv(resolve(PROJECT_ROOT, ".env"));

const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
if (!BOT_TOKEN) {
  console.error("DISCORD_BOT_TOKEN is not set in .env");
  process.exit(1);
}

const ALLOWED_CHANNELS = process.env.DISCORD_CHANNEL_IDS
  ? process.env.DISCORD_CHANNEL_IDS.split(",").map((s) => s.trim()).filter(Boolean)
  : [];

const EMBED_COLOR = 0x2f3136;
const MAX_EMBED_DESC = 4096;
const MAX_PROMPT_LENGTH = 4000;
const CLAUDE_TIMEOUT_MS = 5 * 60 * 1000; // 5 minutes

// ── helpers ─────────────────────────────────────────────────────────

function splitText(text, limit) {
  if (text.length <= limit) return [text];
  const chunks = [];
  let remaining = text;
  while (remaining.length > 0) {
    if (remaining.length <= limit) {
      chunks.push(remaining);
      break;
    }
    let splitAt = remaining.lastIndexOf("\n\n", limit);
    if (splitAt <= 0) splitAt = remaining.lastIndexOf("\n", limit);
    if (splitAt <= 0) splitAt = limit;
    chunks.push(remaining.slice(0, splitAt));
    remaining = remaining.slice(splitAt).replace(/^\n+/, "");
  }
  return chunks;
}

// ── claude CLI runner ───────────────────────────────────────────────

function runClaude(prompt) {
  return new Promise((resolve, reject) => {
    const args = [
      "-p",
      "--dangerously-skip-permissions",
    ];

    const proc = spawn("claude", args, {
      cwd: PROJECT_ROOT,
      env: { ...process.env },
      stdio: ["pipe", "pipe", "pipe"],
    });

    proc.stdin.write(prompt);
    proc.stdin.end();

    let stdout = "";
    let stderr = "";

    proc.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    proc.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    const timer = setTimeout(() => {
      proc.kill("SIGTERM");
      reject(new Error("Claude CLI timed out after 5 minutes"));
    }, CLAUDE_TIMEOUT_MS);

    proc.on("close", (code) => {
      clearTimeout(timer);
      if (code === 0) {
        resolve(stdout.trim() || "(no output)");
      } else {
        reject(new Error(`claude exited with code ${code}: ${stderr.trim()}`));
      }
    });

    proc.on("error", (err) => {
      clearTimeout(timer);
      reject(new Error(`Failed to spawn claude: ${err.message}`));
    });
  });
}

// ── concurrency queue ───────────────────────────────────────────────

const queue = [];
let running = false;

async function enqueue(message) {
  queue.push(message);
  if (queue.length > 1) {
    await message.react("⏳").catch(() => {});
  }
  if (!running) processQueue();
}

async function processQueue() {
  if (queue.length === 0) {
    running = false;
    return;
  }
  running = true;
  const message = queue.shift();
  await handleMessage(message);
  await processQueue();
}

// ── Discord bot ─────────────────────────────────────────────────────

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  if (ALLOWED_CHANNELS.length > 0) {
    console.log(`Listening in channels: ${ALLOWED_CHANNELS.join(", ")}`);
  } else {
    console.log("Listening in ALL channels (no DISCORD_CHANNEL_IDS set)");
  }
});

async function handleMessage(message) {
  const prompt = message.content.trim();

  // Check prompt length
  if (prompt.length > MAX_PROMPT_LENGTH) {
    await message.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(0xff0000)
          .setDescription(`Prompt too long (${prompt.length}/${MAX_PROMPT_LENGTH} chars). Please shorten it.`),
      ],
    });
    return;
  }

  // Show typing indicator while claude runs
  await message.channel.sendTyping();
  const typingInterval = setInterval(() => {
    message.channel.sendTyping().catch(() => {});
  }, 8000);

  try {
    console.log(`[${message.author.tag}] ${prompt.slice(0, 80)}${prompt.length > 80 ? "..." : ""}`);
    const response = await runClaude(prompt);

    clearInterval(typingInterval);

    // Send response as embed(s)
    const chunks = splitText(response, MAX_EMBED_DESC);
    for (const [i, chunk] of chunks.entries()) {
      const embed = new EmbedBuilder()
        .setColor(EMBED_COLOR)
        .setDescription(chunk);

      if (chunks.length > 1) {
        embed.setFooter({ text: `Part ${i + 1}/${chunks.length}` });
      }

      await message.reply({ embeds: [embed] });
    }
  } catch (err) {
    clearInterval(typingInterval);
    console.error(`Error: ${err.message}`);
    await message.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(0xff0000)
          .setTitle("Error")
          .setDescription(err.message.slice(0, MAX_EMBED_DESC)),
      ],
    });
  }
}

client.on("messageCreate", async (message) => {
  // Ignore bots (including self)
  if (message.author.bot) return;

  // Channel allowlist
  if (ALLOWED_CHANNELS.length > 0 && !ALLOWED_CHANNELS.includes(message.channelId)) {
    return;
  }

  const prompt = message.content.trim();
  if (!prompt) return;

  await enqueue(message);
});

client.login(BOT_TOKEN);
