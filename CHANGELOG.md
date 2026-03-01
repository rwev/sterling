# Changelog

All notable changes to Sterling's agent system are documented here.

## 2026-02-28 — Add Growth and Small-Cap Analyst Agents

Expanded the analyst team from 2 (long, contrarian) to 4 by adding growth/momentum and small-cap/discovery perspectives. Updated all downstream agents and the pipeline orchestrator to consume research from the new directories.

**Files created:**
- `growth-analyst.md` — new agent; growth/momentum analyst focused on revenue acceleration, TAM expansion, and margin inflection points; writes to `research/growth/`; reads from `research/macro/`; includes `.processed` tracking
- `smallcap-analyst.md` — new agent; small-cap/discovery analyst specializing in under-followed names under $5B market cap; writes to `research/smallcap/`; reads from `research/macro/`; every thesis must address liquidity and position-sizing constraints; includes `.processed` tracking

**Agents modified:**
- `macro-research.md` — replaced Short Analyst references with full 4-analyst roster (Long, Contrarian, Growth, Small-Cap) in outlook structure themes, idea brief audience, and relationships
- `portfolio-manager.md` — added `research/growth/` and `research/smallcap/` to inputs, relationships, incremental processing glob, thesis library approval sources, draft round reads, and first-run backfill; replaced `research/short/` with `research/contrarian/`; added thesis library system with `.active` manifest, existing position review, and close/backfill operations; removed "long and short combined" constraint language
- `risk-manager.md` — added `research/growth/` and `research/smallcap/` to inputs; replaced `research/short/` with `research/contrarian/`; updated drawdown monitoring from "long book and short book" to "by analyst source"; simplified exposure table to long-only format

**Commands modified:**
- `work.md` — added `growth-analyst` and `smallcap-analyst` to Stage 2 parallel block with per-agent instructions; updated macro routing to mention all 4 analyst types; changed "both" to "all four" in wait instruction; added thesis library operations to Stage 3 and Stage 5; added Stage 8 (Commit & Push)

**Project docs modified:**
- `CLAUDE.md` — added `research/growth/` and `research/smallcap/` to folder structure; added Growth Analyst and Small-Cap Analyst rows to team roles and data flow tables; updated PM and Risk Manager reads-from columns to include all 4 research directories; updated project overview to list all 4 analyst types

## 2026-02-28 — Add Social Media Stage to Pipeline

Extended the work pipeline to include the social-media agent as the final stage, ensuring tweets are posted after every run.

**Commands modified:**
- `work.md` — added Stage 7 (Social Media) after Stage 6 (Bookkeeping & IR); social-media agent reads the IR update, writes tweets, and posts via `scripts/tweet.mjs` with `.env` sourced; final report now includes tweet posting status

## 2026-02-28 — Align Skill References to Actual Plugin Names

Updated all analyst agent skill references to match the actual installed plugin skill names. Added missing skills to short analyst for parity with long analyst.

**Agents modified:**
- `long-analyst.md` — renamed `equity-research:initiate` → `initiating-coverage`, `earnings` → `earnings-analysis`, `financial-analysis:dcf` → `dcf-model`, `comps` → `comps-analysis`; removed `model-update`; added `equity-research:screen`; reordered `thesis` below `initiating-coverage`
- `short-analyst.md` — same renames as long analyst; added `equity-research:initiating-coverage`, `equity-research:screen`, and `financial-analysis:dcf-model` (previously missing)
- `macro-research.md` — removed `equity-research:morning-note` (not an installed skill)

## 2026-02-28 — Integrate Equity Research Plugin Skills into Agents

Simplified agent files by adding `Skill` tool and delegating core research work to `equity-research` and `financial-analysis` plugin skills. Removed verbose inline output templates in favor of skill-driven workflows. All inter-agent plumbing (inputs, relationships, incremental processing, conventions) preserved unchanged.

**Agents modified:**
- `macro-research.md` — added `Skill` tool; added Skills section referencing `equity-research:sector`, `equity-research:screen`; condensed output templates to brief structural guidance
- `long-analyst.md` — added `Skill` tool; added Skills section referencing `equity-research:initiating-coverage`, `equity-research:earnings-analysis`, `equity-research:earnings-preview`, `equity-research:thesis`, `equity-research:catalysts`, `equity-research:screen`, `financial-analysis:dcf-model`, `financial-analysis:comps-analysis`; removed inline financial table and thesis templates
- `short-analyst.md` — added `Skill` tool; added Skills section referencing `equity-research:initiating-coverage`, `equity-research:earnings-analysis`, `equity-research:earnings-preview`, `equity-research:thesis`, `equity-research:catalysts`, `equity-research:screen`, `financial-analysis:dcf-model`, `financial-analysis:comps-analysis`; removed inline red-flag table and thesis templates
- `portfolio-manager.md` — added `Skill` tool; added Skills section referencing `equity-research:catalysts`, `equity-research:morning-note`; removed inline IC memo template (kept structural requirements in prose)

**Agents unchanged:**
- `risk-manager.md` — quantitative risk reporting has no equity-research skill equivalent; left as-is

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
