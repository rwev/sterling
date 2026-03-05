# Performance Feedback Loop — Design Document

## Goal

Close the loop between thesis predictions and realized outcomes. When positions are closed, automatically generate structured post-mortem analysis and aggregate analyst-level performance scorecards.

## Architecture

A new **post-mortem agent** runs as a pipeline stage after the PM final memo. It reads closed theses and IC memos, fetches realized price data via WebSearch, and produces two outputs: individual post-mortem documents and an aggregated analyst scorecard.

## Components

### 1. Post-Mortem Agent

**Role**: Independent evaluator of closed positions. Avoids self-evaluation bias by being separate from the PM and analysts.

**Agent file**: `.claude/agents/post-mortem.md`

**Inputs**:
- `artifacts/portfolio-manager/theses/closed/` — archived thesis for each exited position
- `artifacts/portfolio-manager/` — IC memos containing the Close decision (reason, entry price, exit level)
- WebSearch — realized exit price, price history during holding period, catalyst outcomes

**Output directory**: `artifacts/post-mortems/`

**Trigger**: Runs when new files appear in `theses/closed/` that haven't been processed yet (tracked via `artifacts/post-mortems/.processed` manifest, same pattern as other agents).

**Pipeline integration**: New stage after PM final memo, before Bookkeeper/IR. Runs in both the exploration pipeline and portfolio review command. Short-circuits if no new closed positions.

### 2. Post-Mortem Document Template

Each post-mortem: `artifacts/post-mortems/YYYY-MM-DD_<TICKER>-post-mortem.md`

Sections:

1. **Position Summary** — Ticker, analyst, thesis date, entry date (IC memo approval), exit date, holding period in days
2. **Thesis Recap** — Original bull case (2-3 sentences), entry range, target, stop-loss, predicted R/R, key catalysts
3. **Exit Recap** — PM's stated reason for closing, exit price level
4. **Outcome Analysis**:
   - Predicted vs Realized R/R — did the R/R play out? Was the target realistic?
   - Catalyst Scorecard — for each catalyst in the original thesis: Hit / Missed / Pending / Irrelevant
   - Price Action — entry-to-exit return (%), max drawdown during hold, max gain during hold
   - Time Analysis — days held vs catalyst timeline expectations
5. **Verdict** — one of: Target Hit, Stop Hit, Displaced (exited for better opportunity, thesis intact), Thesis Broken (fundamental deterioration), Partial Win (exited between entry and target with positive return)
6. **Lessons Learned** — 2-3 sentences on what the thesis got right, what it missed, and what to watch for in similar setups

### 3. Analyst Scorecard

After writing individual post-mortems, the agent regenerates an aggregated scorecard from all existing post-mortems.

**Output**: `artifacts/post-mortems/YYYY-MM-DD_analyst-scorecard.md` (overwrites previous scorecard)

**Metrics per analyst**:
- Positions closed (count)
- Win rate (% of exits with positive return)
- Average predicted R/R vs average realized R/R
- Catalyst hit rate (% of named catalysts that played out)
- Average holding period (days)
- Best and worst exits (ticker + return %)
- Verdict breakdown (Target Hit / Stop Hit / Displaced / Thesis Broken / Partial Win)

Also available on-demand via a `/scorecard` command.

## Data Flow

```
PM closes position
  → thesis moved to theses/closed/
  → post-mortem agent detects new file in closed/
  → reads thesis + IC memo + WebSearch for price data
  → writes artifacts/post-mortems/YYYY-MM-DD_<TICKER>-post-mortem.md
  → regenerates artifacts/post-mortems/YYYY-MM-DD_analyst-scorecard.md
```

## Pipeline Stage Order

Exploration pipeline:
1. Macro Research
2. Analysts (parallel)
3. PM Draft
4. Risk Manager
5. PM Final
6. **Post-Mortem Agent** (new — only fires if positions were closed)
7. Bookkeeper + IR (parallel)

Portfolio review:
1. PM Draft (existing positions only)
2. Risk Manager
3. PM Final
4. **Post-Mortem Agent** (new — only fires if positions were closed)
5. Bookkeeper + IR (parallel)

## Folder Structure Addition

```
artifacts/
  post-mortems/           # Post-mortem docs and scorecard
    .processed            # Manifest of processed closed thesis files
```

## What This Does NOT Include

- No structured data (JSON/CSV) — all markdown, consistent with Sterling
- No backtesting against historical prices — post-mortems evaluate realized outcomes only
- No automated alerts or triggers — runs as part of existing pipeline cadence
