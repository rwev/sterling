# Discord → Claude CLI Bot Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** A Discord bot that listens for messages in a designated channel and executes them as Claude CLI prompts in the Sterling project directory, posting responses back to the channel.

**Architecture:** Node.js script using discord.js to listen for messages. On each message, spawns `claude -p` as a child process in the project root, captures stdout, and posts the result back as Discord embeds. Consistent with existing `scripts/discord.mjs` style. Supports configurable channel allowlisting and an optional command prefix.

**Tech Stack:** Node.js (v24), discord.js v14, node:child_process (spawn)

---

### Task 1: Install discord.js dependency

**Files:**
- Create: `package.json` (at project root)

**Step 1: Initialize package.json and install discord.js**

```bash
cd /mnt/c/Users/ryan/Desktop/sterling
npm init -y
npm install discord.js
```

**Step 2: Verify installation**

Run: `node -e "require('discord.js'); console.log('ok')"`
Expected: `ok`

**Step 3: Add .gitignore entry for node_modules**

Check that `node_modules/` is already in `.gitignore`. If not, add it.

**Step 4: Commit**

```bash
git add package.json package-lock.json .gitignore
git commit -m "chore: add discord.js dependency"
```

---

### Task 2: Create the bot script — Discord connection and message listener

**Files:**
- Create: `scripts/discord-bot.mjs`
- Modify: `.env` (add `DISCORD_BOT_TOKEN` and `DISCORD_CHANNEL_ID`)

**Step 1: Add bot config to .env**

Append to `.env`:

```
# Discord bot (for discord-bot.mjs — listens for messages and runs claude CLI)
DISCORD_BOT_TOKEN=
DISCORD_CHANNEL_IDS=
```

`DISCORD_CHANNEL_IDS` is a comma-separated list of channel IDs the bot should listen in. Empty = listen in all channels (not recommended for production).

**Step 2: Write the bot script with Discord connection**

Create `scripts/discord-bot.mjs`:

```javascript
#!/usr/bin/env node

// Discord bot that listens for messages and runs them through Claude CLI.
//
// Required environment variables (in .env):
//   DISCORD_BOT_TOKEN    — Bot token from Discord Developer Portal
//   DISCORD_CHANNEL_IDS  — Comma-separated channel IDs to listen in (optional)
//
// Usage:
//   node scripts/discord-bot.mjs
//
// The bot ignores its own messages and other bots. Each user message in an
// allowed channel is passed to `claude -p` as a prompt. The CLI runs in the
// project root directory. The response is posted back as a Discord embed.

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
const MAX_MESSAGE_CONTENT = 2000;

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
      "--verbose",
      "--dangerously-skip-permissions",
      prompt,
    ];

    const proc = spawn("claude", args, {
      cwd: PROJECT_ROOT,
      env: { ...process.env },
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";

    proc.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    proc.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    proc.on("close", (code) => {
      if (code === 0) {
        resolve(stdout.trim() || "(no output)");
      } else {
        reject(new Error(`claude exited with code ${code}: ${stderr.trim()}`));
      }
    });

    proc.on("error", (err) => {
      reject(new Error(`Failed to spawn claude: ${err.message}`));
    });
  });
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

client.on("messageCreate", async (message) => {
  // Ignore bots (including self)
  if (message.author.bot) return;

  // Channel allowlist
  if (ALLOWED_CHANNELS.length > 0 && !ALLOWED_CHANNELS.includes(message.channelId)) {
    return;
  }

  const prompt = message.content.trim();
  if (!prompt) return;

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
});

client.login(BOT_TOKEN);
```

**Step 3: Verify the script parses without errors**

Run: `node --check scripts/discord-bot.mjs`
Expected: no output (success)

**Step 4: Commit**

```bash
git add scripts/discord-bot.mjs .env
git commit -m "feat: add Discord bot that runs claude CLI from channel messages"
```

---

### Task 3: Add concurrency guard (one claude process at a time)

**Files:**
- Modify: `scripts/discord-bot.mjs`

**Step 1: Add a queue to serialize claude invocations**

Claude CLI runs are expensive. Add a simple queue so only one runs at a time — additional messages are queued and processed in order. Users who send a message while one is running get a reaction (⏳) to indicate their request is queued.

Add after the `runClaude` function:

```javascript
// ── concurrency queue ───────────────────────────────────────────────

const queue = [];
let running = false;

async function enqueue(message) {
  queue.push(message);
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
  processQueue();
}
```

Then refactor the `messageCreate` handler: move the try/catch logic into a `handleMessage(message)` async function and have the event listener call `enqueue(message)` instead. Add a ⏳ reaction when queued (queue.length > 1 when enqueuing).

**Step 2: Verify script parses**

Run: `node --check scripts/discord-bot.mjs`
Expected: no output (success)

**Step 3: Commit**

```bash
git add scripts/discord-bot.mjs
git commit -m "feat: add concurrency queue for claude CLI invocations"
```

---

### Task 4: Add timeout and max prompt length safeguards

**Files:**
- Modify: `scripts/discord-bot.mjs`

**Step 1: Add safety constants and enforce them**

Add near the top config section:

```javascript
const MAX_PROMPT_LENGTH = 4000;  // characters
const CLAUDE_TIMEOUT_MS = 5 * 60 * 1000;  // 5 minutes
```

In `runClaude`, add a timeout that kills the child process:

```javascript
const timer = setTimeout(() => {
  proc.kill("SIGTERM");
  reject(new Error("Claude CLI timed out after 5 minutes"));
}, CLAUDE_TIMEOUT_MS);

proc.on("close", (code) => {
  clearTimeout(timer);
  // ... existing logic
});
```

In `handleMessage`, before calling `runClaude`, check prompt length:

```javascript
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
```

**Step 2: Verify script parses**

Run: `node --check scripts/discord-bot.mjs`
Expected: no output (success)

**Step 3: Commit**

```bash
git add scripts/discord-bot.mjs
git commit -m "feat: add timeout and prompt length limits"
```

---

### Task 5: Add setup documentation and run instructions

**Files:**
- Modify: `scripts/discord-bot.mjs` (update header comment)

**Step 1: Update the header comment with full setup instructions**

Update the header comment at the top of `scripts/discord-bot.mjs` to include:

```javascript
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
```

**Step 2: Verify script parses**

Run: `node --check scripts/discord-bot.mjs`
Expected: no output (success)

**Step 3: Commit**

```bash
git add scripts/discord-bot.mjs
git commit -m "docs: add setup instructions to discord bot script"
```

---

### Task 6: Manual integration test

**Step 1: Verify .env has bot token and channel IDs set**

Check that `DISCORD_BOT_TOKEN` and `DISCORD_CHANNEL_IDS` are populated in `.env`.

**Step 2: Start the bot**

Run: `node scripts/discord-bot.mjs`
Expected: `Logged in as <bot-name>#<discriminator>`

**Step 3: Post a test message in the configured Discord channel**

Post: `What is 2 + 2?`
Expected: Bot replies with an embed containing Claude's response.

**Step 4: Test queue behavior**

Post two messages rapidly. First should process; second should get ⏳ reaction then process after.

**Step 5: Test error handling**

Post a message longer than 4000 characters.
Expected: Bot replies with "Prompt too long" error embed.
