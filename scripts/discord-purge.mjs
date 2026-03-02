#!/usr/bin/env node

// Purge all bot/webhook messages from Discord channels linked to Sterling webhooks.
//
// Usage:
//   set -a && source .env && set +a && node scripts/discord-purge.mjs
//
// Requires DISCORD_BOT_TOKEN and DISCORD_WEBHOOK_* env vars.

const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
if (!BOT_TOKEN) {
  console.error("DISCORD_BOT_TOKEN is not set");
  process.exit(1);
}

const WEBHOOK_ENVS = [
  "DISCORD_WEBHOOK_MACRO",
  "DISCORD_WEBHOOK_LONG",
  "DISCORD_WEBHOOK_CONTRARIAN",
  "DISCORD_WEBHOOK_GROWTH",
  "DISCORD_WEBHOOK_SMALLCAP",
  "DISCORD_WEBHOOK_PM",
  "DISCORD_WEBHOOK_RISK",
  "DISCORD_WEBHOOK_BOOKKEEPER",
  "DISCORD_WEBHOOK_IR",
  "DISCORD_WEBHOOK_SOCIAL",
];

const API = "https://discord.com/api/v10";
const RATE_LIMIT_BUFFER_MS = 500;

async function api(path, method = "GET") {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: { Authorization: `Bot ${BOT_TOKEN}` },
  });

  if (res.status === 429) {
    const body = await res.json();
    const wait = (body.retry_after || 1) * 1000 + RATE_LIMIT_BUFFER_MS;
    console.log(`  Rate limited, waiting ${Math.round(wait / 1000)}s...`);
    await new Promise((r) => setTimeout(r, wait));
    return api(path, method);
  }

  if (res.status === 204) return null;

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Discord ${res.status}: ${err}`);
  }

  return res.json();
}

async function getChannelIdFromWebhook(webhookUrl) {
  const match = webhookUrl.match(
    /\/webhooks\/(\d+)\/([A-Za-z0-9_-]+)/
  );
  if (!match) return null;

  const [, id, token] = match;
  try {
    const info = await fetch(`${API}/webhooks/${id}/${token}`, {
      headers: { Authorization: `Bot ${BOT_TOKEN}` },
    }).then((r) => r.json());
    return info.channel_id;
  } catch {
    return null;
  }
}

async function purgeChannel(channelId, label) {
  let deleted = 0;
  let before = undefined;

  while (true) {
    const query = before ? `?limit=100&before=${before}` : "?limit=100";
    const messages = await api(`/channels/${channelId}/messages${query}`);

    if (!messages || messages.length === 0) break;

    for (const msg of messages) {
      try {
        await api(`/channels/${channelId}/messages/${msg.id}`, "DELETE");
        deleted++;
      } catch (err) {
        console.error(`  Failed to delete ${msg.id}: ${err.message}`);
      }
    }

    before = messages[messages.length - 1].id;

    if (messages.length < 100) break;
  }

  return deleted;
}

async function main() {
  const seen = new Set();

  for (const envName of WEBHOOK_ENVS) {
    const url = process.env[envName];
    if (!url) {
      console.log(`${envName}: not set, skipping`);
      continue;
    }

    const channelId = await getChannelIdFromWebhook(url);
    if (!channelId) {
      console.log(`${envName}: could not resolve channel ID, skipping`);
      continue;
    }

    if (seen.has(channelId)) {
      console.log(`${envName}: channel ${channelId} already purged, skipping`);
      continue;
    }
    seen.add(channelId);

    console.log(`${envName}: purging channel ${channelId}...`);
    const count = await purgeChannel(channelId, envName);
    console.log(`${envName}: deleted ${count} messages`);
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
