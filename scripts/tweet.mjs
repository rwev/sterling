#!/usr/bin/env node

// Post a tweet or thread to X (Twitter) using API v2 with OAuth 1.0a.
//
// Usage:
//   node scripts/tweet.mjs "Your tweet text here"
//   node scripts/tweet.mjs --thread "First tweet" "Second tweet" "Third tweet"
//   node scripts/tweet.mjs --file social-media/2026-02-28_weekly-update.md
//
// Environment variables (required):
//   X_API_KEY          — API key (consumer key)
//   X_API_SECRET       — API secret (consumer secret)
//   X_ACCESS_TOKEN     — OAuth 1.0a access token
//   X_ACCESS_SECRET    — OAuth 1.0a access token secret
//
// Optional:
//   X_DRY_RUN=1        — print tweets without posting

import crypto from "node:crypto";
import fs from "node:fs";

const API_BASE = "https://api.x.com/2/tweets";

// --- config ---

function loadConfig() {
  const required = {
    apiKey: process.env.X_API_KEY,
    apiSecret: process.env.X_API_SECRET,
    accessToken: process.env.X_ACCESS_TOKEN,
    accessSecret: process.env.X_ACCESS_SECRET,
  };
  const missing = Object.entries(required)
    .filter(([, v]) => !v)
    .map(([k]) => k);
  if (missing.length) {
    console.error(`Missing environment variables: ${missing.join(", ")}`);
    console.error(
      "Set X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_SECRET"
    );
    process.exit(1);
  }
  return required;
}

// --- OAuth 1.0a signing ---

function percentEncode(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`
  );
}

function buildOAuthHeader(method, url, config) {
  const oauthParams = {
    oauth_consumer_key: config.apiKey,
    oauth_nonce: crypto.randomBytes(16).toString("hex"),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_token: config.accessToken,
    oauth_version: "1.0",
  };

  const sigParams = Object.entries(oauthParams)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${percentEncode(k)}=${percentEncode(v)}`)
    .join("&");

  const sigBase = [method, percentEncode(url), percentEncode(sigParams)].join(
    "&"
  );

  const sigKey = `${percentEncode(config.apiSecret)}&${percentEncode(config.accessSecret)}`;
  oauthParams.oauth_signature = crypto
    .createHmac("sha1", sigKey)
    .update(sigBase)
    .digest("base64");

  const header = Object.entries(oauthParams)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${percentEncode(k)}="${percentEncode(v)}"`)
    .join(", ");

  return `OAuth ${header}`;
}

// --- API call ---

async function postTweet(text, config, replyToId = null) {
  const body = { text };
  if (replyToId) {
    body.reply = { in_reply_to_tweet_id: replyToId };
  }

  if (process.env.X_DRY_RUN === "1") {
    const prefix = replyToId ? `  reply to ${replyToId}` : "  tweet";
    console.log(`[dry-run]${prefix}: ${text}`);
    return { id: `dry-run-${Date.now()}` };
  }

  const auth = buildOAuthHeader("POST", API_BASE, config);
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`X API ${res.status}: ${err}`);
  }

  const { data } = await res.json();
  return data;
}

// --- parse markdown file into tweets ---

function parseTweetsFromFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const tweets = [];

  // Thread format: lines starting with **N/**
  const threadPattern = /^\*\*\d+\/\*\*\s*(.+)/gm;
  let match;
  while ((match = threadPattern.exec(content)) !== null) {
    tweets.push(match[1].trim());
  }
  if (tweets.length) return tweets;

  // Single tweet: grab the line after "# Tweet" header, skipping blank lines
  const lines = content.split("\n");
  const headerIdx = lines.findIndex((l) => /^#\s+Tweet/.test(l));
  if (headerIdx !== -1) {
    for (let i = headerIdx + 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line && !line.startsWith("#") && !line.startsWith("---")) {
        tweets.push(line);
        break;
      }
    }
  }

  if (!tweets.length) {
    console.error(`No tweets found in ${filePath}`);
    process.exit(1);
  }
  return tweets;
}

// --- main ---

async function main() {
  const args = process.argv.slice(2);
  if (!args.length) {
    console.error(
      'Usage:\n  tweet.mjs "text"\n  tweet.mjs --thread "1" "2" "3"\n  tweet.mjs --file path/to/file.md'
    );
    process.exit(1);
  }

  const config = loadConfig();
  let tweets;

  if (args[0] === "--file") {
    const filePath = args[1];
    if (!filePath || !fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      process.exit(1);
    }
    tweets = parseTweetsFromFile(filePath);
  } else if (args[0] === "--thread") {
    tweets = args.slice(1);
  } else {
    tweets = [args[0]];
  }

  // validate lengths
  for (const [i, t] of tweets.entries()) {
    if (t.length > 280) {
      console.error(
        `Tweet ${i + 1} is ${t.length} chars (max 280): "${t.slice(0, 50)}..."`
      );
      process.exit(1);
    }
  }

  let replyToId = null;
  for (const [i, text] of tweets.entries()) {
    const data = await postTweet(text, config, replyToId);
    const label = tweets.length > 1 ? `[${i + 1}/${tweets.length}]` : "";
    console.log(`${label} Posted: ${data.id}`.trim());
    replyToId = data.id;
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
