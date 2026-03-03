# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sterling is a simulated long-only hedge fund knowledge base. All team members — analysts (long, contrarian, growth, and small-cap), bookkeepers, risk managers, and portfolio managers — produce and share documents in this repository.

## Document Conventions

- **Format**: Markdown only. Use simple headers (`#`, `##`, `###`), paragraphs, bullet lists, and tables. No HTML, no code blocks unless showing actual data.
- **Timestamps**: Every document must begin with a timestamp in ISO 8601 format: `YYYY-MM-DD HH:MM UTC`.
- **Audience**: Documents are addressed to the team and/or directors. Write in the voice of the relevant team member role.
- **Tone**: Professional, concise, factual. Avoid hedging language unless the content itself is a risk assessment.
- **Market Data**: All agents must use current market prices and data as of today's date. Use web search to fetch live quotes, yields, index levels, and any other market data before writing. Never rely on stale, memorized, or training-data prices — every price, yield, and financial figure must come from a web search performed during the current session. If a data point cannot be confirmed as current (within the past 1–2 trading days for prices, or the most recent release for economic data), state the source and date explicitly. Agents must also search for the latest news, recent catalyst events, and earnings results for any company or sector they cover — do not write about a company without first checking what has happened since the upstream document was written.

## Folder Structure

Work is sorted by team function:

```
sterling/
  artifacts/
    research/
      macro/              # Macro outlooks, idea briefs
    analysis/
      long/               # Long-side thesis documents, due diligence
      contrarian/         # Contrarian/value long thesis documents, due diligence
      growth/             # Growth/momentum long thesis documents, due diligence
      smallcap/           # Small-cap/discovery long thesis documents, due diligence
    portfolio-manager/    # Investment committee memos, strategic decisions
      theses/             # Accepted thesis library (active positions)
        closed/           # Archived theses for exited positions
    bookkeeping/          # P&L summaries, NAV calculations, ledger entries
    risk/                 # Risk reports, exposure analysis
    investor-relations/   # Portfolio updates for investors
```

## Team Roles and Responsibilities

| Role               | Folder                           | Primary Output                          |
| ------------------ | -------------------------------- | --------------------------------------- |
| Macro Research     | `artifacts/research/macro/`      | Macro outlooks, idea briefs             |
| Long Analyst       | `artifacts/analysis/long/`       | Long thesis, entry rationale            |
| Contrarian Analyst | `artifacts/analysis/contrarian/` | Contrarian long thesis, entry rationale |
| Growth Analyst     | `artifacts/analysis/growth/`     | Growth long thesis, entry rationale     |
| Small-Cap Analyst  | `artifacts/analysis/smallcap/`   | Small-cap long thesis, entry rationale  |
| Portfolio Manager  | `artifacts/portfolio-manager/`   | IC memos, directives                    |
| Bookkeeper         | `artifacts/bookkeeping/`         | P&L, NAV, ledger                        |
| Risk Manager       | `artifacts/risk/`                | Risk reports, exposure analysis         |
| Investor Relations | `artifacts/investor-relations/`  | Portfolio updates for investors         |

## Agent Data Flow

Agents communicate through documents, not directly. Each agent reads from upstream directories and writes to its own. The Portfolio Manager and Risk Manager collaborate in a two-round loop to formulate the final portfolio before downstream agents execute.

| Agent              | Reads from                                                                                                                                       | Writes to                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| Macro Research     | *(none — external data only)*                                                                                                                    | `artifacts/research/macro/`      |
| Long Analyst       | `artifacts/research/macro/`                                                                                                                      | `artifacts/analysis/long/`       |
| Contrarian Analyst | `artifacts/research/macro/`                                                                                                                      | `artifacts/analysis/contrarian/` |
| Growth Analyst     | `artifacts/research/macro/`                                                                                                                      | `artifacts/analysis/growth/`     |
| Small-Cap Analyst  | `artifacts/research/macro/`                                                                                                                      | `artifacts/analysis/smallcap/`   |
| Portfolio Manager  | `artifacts/analysis/long/`, `artifacts/analysis/contrarian/`, `artifacts/analysis/growth/`, `artifacts/analysis/smallcap/`, `artifacts/risk/`     | `artifacts/portfolio-manager/`   |
| Risk Manager       | `artifacts/portfolio-manager/`                                                                                                                   | `artifacts/risk/`                |
| Bookkeeper         | `artifacts/portfolio-manager/`                                                                                                                   | `artifacts/bookkeeping/`         |
| Investor Relations | `artifacts/portfolio-manager/`                                                                                                                   | `artifacts/investor-relations/`  |

### PM–Risk Collaboration Loop

The Portfolio Manager and Risk Manager work together before the portfolio is finalized:

1. **PM drafts** proposed positions → `artifacts/portfolio-manager/YYYY-MM-DD_ic-memo-draft.md`
2. **Risk Manager assesses** the draft → `artifacts/risk/YYYY-MM-DD_risk-report.md`
3. **PM finalizes** incorporating risk feedback → `artifacts/portfolio-manager/YYYY-MM-DD_ic-memo.md`

Only the final IC memo flows to Bookkeeper, Investor Relations, and downstream agents.

## Commit Rules

- **Agent/command changes require a changelog entry.** Before committing any changes to files under `.claude/agents/` or `.claude/commands/`, always run `/changelog` first. This is mandatory — never skip it, even if the agent change seems minor.

## File Naming

Use the pattern: `YYYY-MM-DD_<brief-slug>.md`

Examples:
- `2026-02-27_aapl-long-thesis.md`
- `2026-02-27_weekly-pnl-summary.md`
- `2026-02-27_ic-meeting-minutes.md`
