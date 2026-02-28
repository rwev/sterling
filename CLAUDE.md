# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sterling is a simulated hedge fund knowledge base. All team members — analysts (long and short), bookkeepers, risk managers, and portfolio managers — produce and share documents in this repository.

## Document Conventions

- **Format**: Markdown only. Use simple headers (`#`, `##`, `###`), paragraphs, bullet lists, and tables. No HTML, no code blocks unless showing actual data.
- **Timestamps**: Every document must begin with a timestamp in ISO 8601 format: `YYYY-MM-DD HH:MM UTC`.
- **Audience**: Documents are addressed to the team and/or directors. Write in the voice of the relevant team member role.
- **Tone**: Professional, concise, factual. Avoid hedging language unless the content itself is a risk assessment.
- **Market Data**: All agents must use current market prices and data as of today's date. Use web search to fetch live quotes, yields, index levels, and any other market data before writing. Never rely on stale or memorized prices. If a price cannot be confirmed as current, state the source and date explicitly.

## Folder Structure

Work is sorted by team function:

```
sterling/
  research/
    macro/            # Macro outlooks, idea briefs
    long/             # Long-side thesis documents, due diligence
    short/            # Short-side thesis documents, due diligence
  portfolio-manager/  # Investment committee memos, strategic decisions
  bookkeeping/        # P&L summaries, NAV calculations, ledger entries
  risk/               # Risk reports, exposure analysis
  investor-relations/ # Portfolio updates for investors
  social-media/       # Tweets and threads for public channels
```

## Team Roles and Responsibilities

| Role | Folder | Primary Output |
|---|---|---|
| Macro Research | `research/macro/` | Macro outlooks, idea briefs |
| Long Analyst | `research/long/` | Long thesis, entry rationale |
| Short Analyst | `research/short/` | Short thesis, entry rationale |
| Portfolio Manager | `portfolio-manager/` | IC memos, directives |
| Bookkeeper | `bookkeeping/` | P&L, NAV, ledger |
| Risk Manager | `risk/` | Risk reports, exposure analysis |
| Investor Relations | `investor-relations/` | Portfolio updates for investors |
| Social Media | `social-media/` | Tweets, threads |

## Agent Data Flow

Agents communicate through documents, not directly. Each agent reads from upstream directories and writes to its own.

| Agent | Reads from | Writes to |
|---|---|---|
| Macro Research | *(none — external data only)* | `research/macro/` |
| Long Analyst | `research/macro/` | `research/long/` |
| Short Analyst | `research/macro/` | `research/short/` |
| Portfolio Manager | `research/long/`, `research/short/` | `portfolio-manager/` |
| Bookkeeper | `portfolio-manager/` | `bookkeeping/` |
| Risk Manager | `bookkeeping/` | `risk/` |
| Investor Relations | `portfolio-manager/` | `investor-relations/` |
| Social Media | `investor-relations/` | `social-media/` |

## File Naming

Use the pattern: `YYYY-MM-DD_<brief-slug>.md`

Examples:
- `2026-02-27_aapl-long-thesis.md`
- `2026-02-27_weekly-pnl-summary.md`
- `2026-02-27_ic-meeting-minutes.md`
