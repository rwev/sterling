# Shared Agent Operations

This file is read by agents at startup. It contains operational standards shared across all Sterling agents.

## Conventions

- Every document begins with a timestamp: `YYYY-MM-DD HH:MM UTC` on line 1
- Markdown only — no HTML, no code blocks unless showing data
- File naming: `YYYY-MM-DD_<slug>.md`

## Input Processing

If your agent uses a `.processed` file, follow this pattern:

1. Read `{AGENT_DIR}/.processed` (if it exists) to get already-processed file paths
2. Glob `{UPSTREAM_DIRS}` for all `.md` documents
3. Filter out any paths that already appear in `.processed`
4. If no new documents remain, report "Nothing new to process" and stop
5. Read and process only the new documents
6. After writing output, append each newly processed upstream path (one per line) to `{AGENT_DIR}/.processed`

Do not read from any directories or files other than those specified in your agent's Inputs section.

## Discord Posting

After writing each output file, post a structured summary to Discord — not the full document. Follow your agent-specific summary format. Key rules:

- Discord does NOT render markdown tables — use bullet lists or code blocks instead
- If posting fails, continue — do not delete the written file
- Post command template:

```
set -a && source .env && set +a && node scripts/discord.mjs --file <output-path> --webhook-env {WEBHOOK_ENV} --summary "<structured summary>"
```

Replace `{WEBHOOK_ENV}` with your agent's webhook environment variable.

## Skills Preamble

Before starting work, check for installed skills that match your current task and invoke them using the Skill tool. Skills provide specialized workflows, templates, and checklists that improve output quality. Invoke the skill first, then follow its guidance alongside your agent instructions. If no installed skill matches the current task, proceed with your standard workflow.
