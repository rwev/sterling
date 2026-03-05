# Performance Feedback Loop — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a post-mortem agent that automatically evaluates closed positions and generates analyst scorecards, closing the prediction-to-outcome feedback loop.

**Architecture:** New agent (`.claude/agents/post-mortem.md`) reads from `artifacts/portfolio-manager/theses/closed/` and IC memos, fetches realized price data via WebSearch, and writes post-mortem docs + an aggregated scorecard to `artifacts/post-mortems/`. Integrated into both pipeline commands as a new stage after PM Final. Uses the same `.processed` manifest pattern as all other agents.

**Tech Stack:** Markdown agent definition, pipeline command edits — no code, no dependencies.

---

### Task 1: Create the post-mortem agent definition

**Files:**
- Create: `.claude/agents/post-mortem.md`

**Step 1: Write the agent file**

Create `.claude/agents/post-mortem.md` with the following content:

```markdown
---
name: post-mortem
description: Invoke after positions are closed to generate structured post-mortem analysis and update analyst scorecards. Reads closed theses and IC memos, fetches realized price data, produces independent evaluation of thesis accuracy.
tools: [Read, Write, Glob, Grep, WebSearch, WebFetch, Bash]
model: sonnet
---

You are Sterling's post-mortem analyst. You independently evaluate closed positions — comparing original thesis predictions against realized outcomes. You are not the PM, not the analyst who wrote the thesis, and not the risk manager. Your job is honest, dispassionate assessment of what went right, what went wrong, and what the team should learn.

## Mentality

Forensic objectivity. You do not defend theses or justify exits. You measure: was the thesis right? Did catalysts play out? Was the R/R estimate realistic? You are Sterling's institutional memory — every exit teaches something, but only if someone writes it down honestly.

## Inputs

1. Read `artifacts/post-mortems/.processed` (if it exists) to get the list of already-processed file paths
2. Glob `artifacts/portfolio-manager/theses/closed/` for all `.md` documents
3. Filter out any paths that already appear in `.processed`
4. If no new documents remain, report "Nothing new to process" and stop
5. For each new closed thesis:
   a. Read the thesis from `artifacts/portfolio-manager/theses/closed/<filename>`
   b. Glob `artifacts/portfolio-manager/` for IC memos (both draft and final) to find the Close decision — search for the ticker in IC memo content to locate the entry approval date and exit decision
6. After writing output, append each newly processed closed thesis path (one per line) to `artifacts/post-mortems/.processed`

Do not read from any directories or files other than those specified above.

## Current Data Requirement

Before writing any post-mortem, you MUST use WebSearch to collect realized price and catalyst data. Never rely on memorized or training-data prices.

**Mandatory searches per closed position:**
1. **Current/exit price**: Search `"<TICKER> stock price"` — confirm the exit price level stated in the IC memo
2. **Price history during hold**: Search `"<TICKER> stock price history <entry month> to <exit month> <year>"` — identify max drawdown and max gain during the holding period
3. **Catalyst outcomes**: For each catalyst named in the original thesis, search to determine if it Hit, Missed, is still Pending, or became Irrelevant
4. **Post-exit price action**: Search `"<TICKER> stock price"` — note where the stock traded after exit (was the exit well-timed or premature?)

## Output

All output → `artifacts/post-mortems/YYYY-MM-DD_<slug>.md`

### Post-Mortem Document

One document per closed position: `artifacts/post-mortems/YYYY-MM-DD_<TICKER>-post-mortem.md`

```
YYYY-MM-DD HH:MM UTC
# Post-Mortem: <TICKER>

## Position Summary

| Field | Value |
| Ticker | |
| Analyst | [analyst type: Long / Contrarian / Growth / Small-Cap] |
| Thesis Date | |
| Entry Date | [IC memo approval date] |
| Exit Date | [IC memo close date] |
| Holding Period | [X days] |

## Thesis Recap

[2-3 sentence summary of the original bull case]

- **Entry Range**: $X – $Y
- **Target**: $Z (X% upside)
- **Stop-Loss**: $W (X% downside)
- **Predicted R/R**: X:1
- **Key Catalysts**: [numbered list from original thesis]

## Exit Recap

- **Exit Price**: ~$X
- **PM Reason**: [stated reason from IC memo Close decision]
- **Verdict**: [one of: Target Hit / Stop Hit / Displaced / Thesis Broken / Partial Win]

## Outcome Analysis

### Predicted vs Realized R/R

- **Predicted**: X:1 (target $Z vs stop $W from entry $X)
- **Realized**: entry ~$X → exit ~$Y = X% return
- **Assessment**: [Was the R/R estimate realistic? Over/under-estimated?]

### Catalyst Scorecard

| Catalyst | Status | Notes |
| [catalyst 1 from thesis] | Hit / Missed / Pending / Irrelevant | [brief explanation] |
| [catalyst 2 from thesis] | Hit / Missed / Pending / Irrelevant | [brief explanation] |

### Price Action During Hold

- **Entry-to-Exit Return**: X%
- **Max Drawdown**: X% (date)
- **Max Gain**: X% (date)
- **Post-Exit Price**: $X (X% since exit) — [well-timed / premature / late]

### Time Analysis

- **Holding Period**: X days
- **Catalyst Timeline**: [were catalysts expected in X months? Did they arrive on schedule?]

## Lessons Learned

[2-3 sentences on what the thesis got right, what it missed, and what to watch for in similar setups going forward]
```

### Analyst Scorecard

After writing all individual post-mortems for this cycle, regenerate the scorecard from ALL post-mortem documents in `artifacts/post-mortems/` (not just the new ones).

Output: `artifacts/post-mortems/YYYY-MM-DD_analyst-scorecard.md`

Read every `*-post-mortem.md` file in `artifacts/post-mortems/` and aggregate:

```
YYYY-MM-DD HH:MM UTC
# Analyst Scorecard

## Fund-Wide Summary

- **Total Positions Closed**: X
- **Win Rate**: X% (X/Y with positive return)
- **Average Holding Period**: X days
- **Average Predicted R/R**: X:1
- **Average Realized Return**: X%
- **Catalyst Hit Rate**: X% (X/Y catalysts played out)

## Verdict Breakdown

- Target Hit: X
- Partial Win: X
- Displaced: X
- Stop Hit: X
- Thesis Broken: X

## By Analyst

### Long Analyst
- Positions closed: X
- Win rate: X%
- Avg predicted R/R: X:1 | Avg realized return: X%
- Catalyst hit rate: X%
- Best exit: TICKER (+X%)
- Worst exit: TICKER (X%)

### Contrarian Analyst
[same structure]

### Growth Analyst
[same structure]

### Small-Cap Analyst
[same structure]

## Position Log

| Ticker | Analyst | Entry | Exit | Return | Verdict | Holding Period |
| ... |
```

If only one post-mortem exists, the scorecard will be sparse — that is fine. The scorecard grows over time.

## Conventions

Every document: `YYYY-MM-DD HH:MM UTC` on line 1. Markdown only. File naming: `YYYY-MM-DD_<slug>.md`.

## Discord Posting

After writing post-mortem(s) and the scorecard, post a summary to Discord. Example structure:

```
**Post-Mortems This Cycle:**
- TICKER: [Verdict] — entry $X → exit $Y (X% return, X days held)

**Scorecard Update:**
- Fund win rate: X% (X exits total)
- Catalyst hit rate: X%

**Lessons:** [1-sentence highlight from most notable post-mortem]
```

Post using:
```
set -a && source .env && set +a && node scripts/discord.mjs --file <scorecard-path> --webhook-env DISCORD_WEBHOOK_PM --summary "<structured summary>"
```

If posting fails, continue — do not delete the written file.
```

**Step 2: Verify the file was created correctly**

Run: `cat .claude/agents/post-mortem.md | head -5`
Expected: The YAML frontmatter with `name: post-mortem`

**Step 3: Commit**

```bash
git add .claude/agents/post-mortem.md
git commit -m "feat: add post-mortem agent for thesis accuracy tracking"
```

---

### Task 2: Create the artifacts directory

**Files:**
- Create: `artifacts/post-mortems/.gitkeep`

**Step 1: Create the directory with a gitkeep**

```bash
mkdir -p artifacts/post-mortems
touch artifacts/post-mortems/.gitkeep
```

**Step 2: Commit**

```bash
git add artifacts/post-mortems/.gitkeep
git commit -m "chore: add post-mortems artifact directory"
```

---

### Task 3: Add post-mortem stage to the exploration pipeline

**Files:**
- Modify: `.claude/commands/exploration-pipeline.md`

**Step 1: Add Stage 5.5 (post-mortem) between PM Final and Bookkeeper/IR**

Insert a new stage after the current Stage 5 (Final IC Memo) and before the current Stage 6 (Bookkeeping & Investor Relations). Renumber Stage 6 → Stage 7 and Stage 7 → Stage 8.

The new stage to insert after Stage 5:

```markdown
---

## Stage 6 — Post-Mortem Analysis (sequential)

If any positions were closed in Stage 3 or Stage 5 (thesis files moved to `artifacts/portfolio-manager/theses/closed/`), invoke `post-mortem`. Otherwise, skip this stage.

**post-mortem** should:
- Read `artifacts/post-mortems/.processed` and filter to only new files in `artifacts/portfolio-manager/theses/closed/`
- For each newly closed position: read the archived thesis, find the relevant IC memos, run WebSearch for realized price/catalyst data, and write a post-mortem document to `artifacts/post-mortems/YYYY-MM-DD_<TICKER>-post-mortem.md`
- After all individual post-mortems are written, regenerate the analyst scorecard from ALL post-mortem documents: `artifacts/post-mortems/YYYY-MM-DD_analyst-scorecard.md`
- Update `artifacts/post-mortems/.processed` with the processed closed thesis paths

If the agent reports "Nothing new to process", note it and continue.

Wait for completion. Collect all output file paths.

---
```

Then renumber the existing Stage 6 (Bookkeeping & IR) to Stage 7, and Stage 7 (Commit & Push) to Stage 8. Update the Pipeline Complete report to include post-mortem results.

In the Pipeline Complete section, add a new bullet between the existing items:

```
3. Post-mortem verdicts for any closed positions and scorecard highlights (if applicable)
```

And renumber the subsequent bullets (3→4, 4→5, 5→6, 6→7).

**Step 2: Verify the file reads correctly**

Run: `grep -n "Stage" .claude/commands/exploration-pipeline.md`
Expected: Stages numbered 1 through 8, with Stage 6 being Post-Mortem Analysis

**Step 3: Commit**

```bash
git add .claude/commands/exploration-pipeline.md
git commit -m "feat: add post-mortem stage to exploration pipeline"
```

---

### Task 4: Add post-mortem stage to the portfolio review command

**Files:**
- Modify: `.claude/commands/portfolio-review.md`

**Step 1: Add Stage 3.5 (post-mortem) between PM Final and Commit & Push**

Insert a new stage after Stage 3 (Final IC Memo) and before Stage 4 (Commit & Push). Renumber Stage 4 → Stage 5.

The new stage to insert after Stage 3:

```markdown
---

## Stage 4 — Post-Mortem Analysis (sequential)

If any positions were closed or dropped in Stage 1 or Stage 3 (thesis files moved to `artifacts/portfolio-manager/theses/closed/`), invoke `post-mortem`. Otherwise, skip this stage.

**post-mortem** should:
- Read `artifacts/post-mortems/.processed` and filter to only new files in `artifacts/portfolio-manager/theses/closed/`
- For each newly closed position: read the archived thesis, find the relevant IC memos, run WebSearch for realized price/catalyst data, and write a post-mortem document to `artifacts/post-mortems/YYYY-MM-DD_<TICKER>-post-mortem.md`
- After all individual post-mortems are written, regenerate the analyst scorecard from ALL post-mortem documents: `artifacts/post-mortems/YYYY-MM-DD_analyst-scorecard.md`
- Update `artifacts/post-mortems/.processed` with the processed closed thesis paths

If the agent reports "Nothing new to process", note it and continue.

Wait for completion. Collect all output file paths.

---
```

Renumber the existing Stage 4 (Commit & Push) to Stage 5.

In the Pipeline Complete section, add a new bullet:

```
4. Post-mortem verdicts for any closed positions and scorecard highlights (if applicable)
```

And renumber the subsequent bullets (4→5, 5→6, 6→7).

**Step 2: Verify the file reads correctly**

Run: `grep -n "Stage" .claude/commands/portfolio-review.md`
Expected: Stages numbered 1 through 5, with Stage 4 being Post-Mortem Analysis

**Step 3: Commit**

```bash
git add .claude/commands/portfolio-review.md
git commit -m "feat: add post-mortem stage to portfolio review pipeline"
```

---

### Task 5: Update CLAUDE.md with post-mortem role and data flow

**Files:**
- Modify: `CLAUDE.md`

**Step 1: Add post-mortems to the folder structure**

In the `## Folder Structure` section, add after the `investor-relations/` line:

```
    post-mortems/         # Post-mortem analysis, analyst scorecards
```

**Step 2: Add post-mortem to the Team Roles table**

In the `## Team Roles and Responsibilities` table, add a new row:

```
| Post-Mortem      | `artifacts/post-mortems/`        | Post-mortem analysis, scorecards          |
```

**Step 3: Add post-mortem to the Agent Data Flow table**

Add a new row:

```
| Post-Mortem      | `artifacts/portfolio-manager/theses/closed/`, `artifacts/portfolio-manager/`                                                                      | `artifacts/post-mortems/`        |
```

**Step 4: Verify the tables render correctly**

Read `CLAUDE.md` and visually confirm the new rows are properly aligned in both tables.

**Step 5: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: add post-mortem agent to project documentation"
```

---

### Task 6: Create the scorecard command

**Files:**
- Create: `.claude/commands/scorecard.md`

**Step 1: Write the command file**

Create `.claude/commands/scorecard.md`:

```markdown
You are generating an on-demand analyst scorecard from Sterling's post-mortem archive.

Today's date is available in your context. Use it for all timestamps and file names.

---

## Step 1 — Read All Post-Mortems

Glob `artifacts/post-mortems/` for all `*-post-mortem.md` files. If none exist, report "No post-mortems available yet — no positions have been closed" and stop.

Read every post-mortem document.

---

## Step 2 — Generate Scorecard

Invoke `post-mortem` with the instruction to skip individual post-mortem generation and only regenerate the analyst scorecard from all existing post-mortem documents.

The agent should:
- Read every `*-post-mortem.md` file in `artifacts/post-mortems/`
- Aggregate metrics per analyst type (Long, Contrarian, Growth, Small-Cap)
- Write the scorecard to `artifacts/post-mortems/YYYY-MM-DD_analyst-scorecard.md`

---

## Step 3 — Report

Report back to the user with:
1. Fund-wide summary (win rate, catalyst hit rate, avg return)
2. Per-analyst breakdown highlights
3. Notable patterns or biases detected
4. File path to the scorecard
```

**Step 2: Verify the file was created**

Run: `cat .claude/commands/scorecard.md | head -3`
Expected: First line of the command content

**Step 3: Commit**

```bash
git add .claude/commands/scorecard.md
git commit -m "feat: add /scorecard command for on-demand analyst performance summary"
```

---

### Task 7: Add Discord webhook for post-mortems and add .env entry

**Files:**
- Modify: `.env`

**Step 1: Add webhook placeholder to .env**

Append to `.env`:

```
DISCORD_WEBHOOK_POSTMORTEM=
```

Note: The post-mortem agent currently posts to `DISCORD_WEBHOOK_PM` (sharing the PM channel). If the user creates a dedicated post-mortems channel later, they can set this variable and update the agent's Discord posting command to use `DISCORD_WEBHOOK_POSTMORTEM` instead.

**Step 2: No commit needed** — `.env` is in `.gitignore`

---

### Task 8: Run the changelog and commit all agent/command changes

**Files:**
- Modify: `CHANGELOG.md`

**Step 1: Run /changelog**

Per CLAUDE.md commit rules, agent and command changes require a changelog entry. Run `/changelog` to generate entries for all the agent and command files modified in Tasks 1, 3, 4, and 6.

The changelog entry should summarize:
- New agent: `post-mortem.md` — evaluates closed positions, generates post-mortem docs and analyst scorecards
- Modified command: `exploration-pipeline.md` — added Stage 6 (Post-Mortem Analysis) between PM Final and Bookkeeper/IR
- Modified command: `portfolio-review.md` — added Stage 4 (Post-Mortem Analysis) between PM Final and Commit & Push
- New command: `scorecard.md` — on-demand analyst scorecard generation
- Modified: `CLAUDE.md` — added Post-Mortem role to team tables and data flow

**Step 2: Commit the changelog**

```bash
git add CHANGELOG.md
git commit -m "docs: add changelog entry for performance feedback loop"
```
