# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sterling is a simulated long-only hedge fund knowledge base. All team members — analysts (long, contrarian, growth, and small-cap), bookkeepers, risk managers, and portfolio managers — produce and share documents in this repository.

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
    contrarian/       # Contrarian/value long thesis documents, due diligence
    growth/           # Growth/momentum long thesis documents, due diligence
    smallcap/         # Small-cap/discovery long thesis documents, due diligence
  portfolio-manager/  # Investment committee memos, strategic decisions
    theses/           # Accepted thesis library (active positions)
      closed/         # Archived theses for exited positions
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
| Contrarian Analyst | `research/contrarian/` | Contrarian long thesis, entry rationale |
| Growth Analyst | `research/growth/` | Growth long thesis, entry rationale |
| Small-Cap Analyst | `research/smallcap/` | Small-cap long thesis, entry rationale |
| Portfolio Manager | `portfolio-manager/` | IC memos, directives |
| Bookkeeper | `bookkeeping/` | P&L, NAV, ledger |
| Risk Manager | `risk/` | Risk reports, exposure analysis |
| Investor Relations | `investor-relations/` | Portfolio updates for investors |
| Social Media | `social-media/` | Tweets, threads |

## Agent Data Flow

Agents communicate through documents, not directly. Each agent reads from upstream directories and writes to its own. The Portfolio Manager and Risk Manager collaborate in a two-round loop to formulate the final portfolio before downstream agents execute.

| Agent | Reads from | Writes to |
|---|---|---|
| Macro Research | *(none — external data only)* | `research/macro/` |
| Long Analyst | `research/macro/` | `research/long/` |
| Contrarian Analyst | `research/macro/` | `research/contrarian/` |
| Growth Analyst | `research/macro/` | `research/growth/` |
| Small-Cap Analyst | `research/macro/` | `research/smallcap/` |
| Portfolio Manager | `research/long/`, `research/contrarian/`, `research/growth/`, `research/smallcap/`, `risk/` | `portfolio-manager/` |
| Risk Manager | `portfolio-manager/`, `research/long/`, `research/contrarian/`, `research/growth/`, `research/smallcap/` | `risk/` |
| Bookkeeper | `portfolio-manager/` | `bookkeeping/` |
| Investor Relations | `portfolio-manager/` | `investor-relations/` |
| Social Media | `investor-relations/` | `social-media/` |

### PM–Risk Collaboration Loop

The Portfolio Manager and Risk Manager work together before the portfolio is finalized:

1. **PM drafts** proposed positions → `portfolio-manager/YYYY-MM-DD_ic-memo-draft.md`
2. **Risk Manager assesses** the draft → `risk/YYYY-MM-DD_risk-report.md`
3. **PM finalizes** incorporating risk feedback → `portfolio-manager/YYYY-MM-DD_ic-memo.md`

Only the final IC memo flows to Bookkeeper, Investor Relations, and downstream agents.

## File Naming

Use the pattern: `YYYY-MM-DD_<brief-slug>.md`

Examples:
- `2026-02-27_aapl-long-thesis.md`
- `2026-02-27_weekly-pnl-summary.md`
- `2026-02-27_ic-meeting-minutes.md`
