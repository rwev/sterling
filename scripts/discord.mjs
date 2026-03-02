#!/usr/bin/env node

// Post a markdown document (or summary) to a Discord channel via webhook.
//
// Usage:
//   node scripts/discord.mjs --file research/macro/2026-02-28_outlook.md --webhook-env DISCORD_WEBHOOK_MACRO --summary "Brief summary text"
//
// --summary is REQUIRED. The summary text is posted to Discord. The full file
// is never posted — it is only read to extract the title for the embed.
//
// Environment variables:
//   <webhook-env>      — Discord webhook URL (e.g. DISCORD_WEBHOOK_MACRO)
//
// Optional:
//   DISCORD_DRY_RUN=1  — print embed payload without posting

import fs from "node:fs";

const EMBED_DESC_LIMIT = 4096;
const USERNAME = "Sterling";

// --- arg parsing ---

function parseArgs() {
  const args = process.argv.slice(2);
  let file = null;
  let webhookEnv = null;
  let summary = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--file" && args[i + 1]) {
      file = args[++i];
    } else if (args[i] === "--webhook-env" && args[i + 1]) {
      webhookEnv = args[++i];
    } else if (args[i] === "--summary" && args[i + 1]) {
      summary = args[++i];
    }
  }

  if (!file || !webhookEnv) {
    console.error(
      "Usage: discord.mjs --file <path> --webhook-env <ENV_VAR_NAME> --summary <text>"
    );
    process.exit(1);
  }

  if (!summary) {
    console.error(
      "Error: --summary is required. Never post full file contents to Discord."
    );
    process.exit(1);
  }

  return { file, webhookEnv, summary };
}

// --- markdown parsing ---

function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "Sterling Update";
}

function splitContent(content, limit) {
  if (content.length <= limit) return [content];

  const chunks = [];
  let remaining = content;

  while (remaining.length > 0) {
    if (remaining.length <= limit) {
      chunks.push(remaining);
      break;
    }

    // find a good split point: prefer paragraph break, then line break
    let splitAt = remaining.lastIndexOf("\n\n", limit);
    if (splitAt <= 0) splitAt = remaining.lastIndexOf("\n", limit);
    if (splitAt <= 0) splitAt = limit;

    chunks.push(remaining.slice(0, splitAt));
    remaining = remaining.slice(splitAt).replace(/^\n+/, "");
  }

  return chunks;
}

// --- Discord API ---

async function postToWebhook(webhookUrl, payload) {
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Discord webhook ${res.status}: ${err}`);
  }
}

// --- main ---

async function main() {
  const { file, webhookEnv, summary } = parseArgs();

  if (!fs.existsSync(file)) {
    console.error(`File not found: ${file}`);
    process.exit(1);
  }

  const webhookUrl = process.env[webhookEnv];
  if (!webhookUrl && process.env.DISCORD_DRY_RUN !== "1") {
    console.error(`Environment variable ${webhookEnv} is not set`);
    process.exit(1);
  }

  const fileContent = fs.readFileSync(file, "utf-8");
  const title = extractTitle(fileContent);
  const content = summary;
  const chunks = splitContent(content, EMBED_DESC_LIMIT);

  for (const [i, chunk] of chunks.entries()) {
    const embedTitle =
      chunks.length > 1 ? `${title} (${i + 1}/${chunks.length})` : title;

    const payload = {
      username: USERNAME,
      embeds: [
        {
          title: embedTitle,
          description: chunk,
          color: 0x2f3136,
        },
      ],
    };

    if (process.env.DISCORD_DRY_RUN === "1") {
      console.log(
        `[dry-run] embed ${i + 1}/${chunks.length}: ${embedTitle} (${chunk.length} chars)`
      );
      continue;
    }

    await postToWebhook(webhookUrl, payload);
    const label =
      chunks.length > 1 ? `[${i + 1}/${chunks.length}]` : "";
    console.log(`${label} Posted: ${embedTitle}`.trim());
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
