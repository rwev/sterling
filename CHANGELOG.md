# Changelog

All notable changes to Sterling's agent system are documented here.

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
