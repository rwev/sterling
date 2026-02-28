# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sterling is a simulated hedge fund knowledge base. All team members — traders, researchers (long and short), auditors, bookkeepers, executors, and executive decision makers — produce and share documents in this repository.

## Document Conventions

- **Format**: Markdown only. Use simple headers (`#`, `##`, `###`), paragraphs, bullet lists, and tables. No HTML, no code blocks unless showing actual data.
- **Timestamps**: Every document must begin with a timestamp in ISO 8601 format: `YYYY-MM-DD HH:MM UTC`.
- **Audience**: Documents are addressed to the team and/or directors. Write in the voice of the relevant team member role.
- **Tone**: Professional, concise, factual. Avoid hedging language unless the content itself is a risk assessment.

## Folder Structure

Work is sorted by team function:

```
sterling/
  traders/          # Trade logs, position updates, execution notes
  research/
    long/           # Long-side thesis documents, due diligence
    short/          # Short-side thesis documents, due diligence
  audit/            # Compliance and audit reports
  bookkeeping/      # P&L summaries, NAV calculations, ledger entries
  execution/        # Order execution logs, broker communications
  executive/        # Investment committee memos, strategic decisions
  shared/           # Cross-team communications, meeting minutes
```

## Team Roles and Responsibilities

| Role | Folder | Primary Output |
|---|---|---|
| Trader | `traders/` | Trade logs, position notes |
| Long Research | `research/long/` | Long thesis, entry rationale |
| Short Research | `research/short/` | Short thesis, entry rationale |
| Auditor | `audit/` | Compliance reviews, position audits |
| Bookkeeper | `bookkeeping/` | P&L, NAV, ledger |
| Executor | `execution/` | Order logs, fill confirmations |
| Executive | `executive/` | IC memos, directives |

## File Naming

Use the pattern: `YYYY-MM-DD_<brief-slug>.md`

Examples:
- `2026-02-27_aapl-long-thesis.md`
- `2026-02-27_weekly-pnl-summary.md`
- `2026-02-27_ic-meeting-minutes.md`

## Cross-Team Communication

When one role's work references or responds to another's:
- Link to the original document by relative path.
- Quote relevant sections using `>` blockquotes.
- State the responding role explicitly at the top of the document.

Example header:

```
# Response to Short Research: TSLA Bear Case
Date: 2026-02-27 14:30 UTC
From: Long Research
To: Investment Committee, Traders
```
