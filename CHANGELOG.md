# Changelog

All notable changes to Sterling's agent system are documented here.

## 2026-02-28 — PM–Risk Manager Collaborative Loop

Restructured the pipeline so the Portfolio Manager and Risk Manager collaborate to formulate the final portfolio, replacing the previous linear flow where Risk reported after the fact.

**Agents modified:**
- `portfolio-manager.md` — added `risk/` as input source; added two-round IC process (draft memo → risk review → final memo); updated relationships to describe collaborative loop with Risk Manager
- `risk-manager.md` — changed inputs from `bookkeeping/` only to `portfolio-manager/`, `research/long/`, `research/short/`, and `bookkeeping/`; updated role description to reflect collaborative (not downstream) relationship with PM; incremental processing now globs `portfolio-manager/` in addition to `bookkeeping/`

**Commands modified:**
- `work.md` — replaced single PM stage with two PM stages (Stage 3: draft IC memo, Stage 5: final IC memo incorporating risk feedback); Risk assessment (Stage 4) now sits between the two PM rounds; Bookkeeping and IR merged into a single parallel stage (Stage 6); final report now includes how PM addressed risk flags

**Project docs modified:**
- `CLAUDE.md` — updated Agent Data Flow table (PM now reads from `risk/`, Risk Manager now reads from `portfolio-manager/` and `research/`); added PM–Risk Collaboration Loop section describing the draft → assess → finalize three-step process

## 2026-02-28 — Social Media Agent: Tweet Posting and Cashtags

**Agents modified:**
- `social-media.md` — added `Bash` tool, cashtag requirement for stock references (e.g. `$AAPL`), and `## Posting` section instructing the agent to run `scripts/tweet.mjs --file` after writing each output file

## 2026-02-28 — Social Media Agent

Added a new social media agent that reads investor relations updates and produces tweet-length posts and threads for public channels.

**Files created:**
- `social-media.md` — new agent; reads from `investor-relations/`, writes tweets and threads to `social-media/`, includes incremental `.processed` tracking

**Files modified:**
- `CLAUDE.md` — added Social Media role, `social-media/` folder, and data flow entry (`investor-relations/` → `social-media/`)

## 2026-02-28 — WebSearch and WebFetch Tools for Market-Facing Agents

Added `WebSearch` and `WebFetch` to all agents that need live market data, per CLAUDE.md's requirement to fetch current prices, yields, and index levels. Internal-only agents (`bookkeeper`, `investor-relations`) left unchanged.

**Agents modified:**
- `macro-research.md` — added WebSearch, WebFetch for live macro data, yields, and index levels
- `long-analyst.md` — added WebSearch, WebFetch for live prices, financial statements, and SEC filings
- `short-analyst.md` — added WebSearch, WebFetch for live prices, short interest data, and forensic accounting sources
- `portfolio-manager.md` — added WebSearch, WebFetch for current prices to validate analyst entry ranges
- `risk-manager.md` — added WebSearch, WebFetch for current volatility, correlations, and market data

## 2026-02-28 — Incremental Processing for Downstream Agents

Added `.processed` manifest tracking to all downstream agents so the pipeline can run repeatedly without duplicating work.

**Agents modified:**
- `long-analyst.md` — tracks processed files from `research/macro/` via `research/long/.processed`
- `short-analyst.md` — tracks processed files from `research/macro/` via `research/short/.processed`
- `portfolio-manager.md` — tracks processed files from `research/long/` and `research/short/` via `portfolio-manager/.processed`
- `bookkeeper.md` — tracks processed files from `portfolio-manager/` via `bookkeeping/.processed`
- `risk-manager.md` — tracks processed files from `bookkeeping/` via `risk/.processed`
- `investor-relations.md` — tracks processed files from `portfolio-manager/` via `investor-relations/.processed`

**Orchestrator modified:**
- `work.md` — added incremental-run awareness; orchestrator now short-circuits gracefully when agents report nothing new
