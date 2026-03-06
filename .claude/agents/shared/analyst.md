# Shared Analyst Standards

This file is read by all equity analysts at startup.

## Upstream Source

The upstream source is `artifacts/research/macro/` — macro outlooks and idea briefs for sector context and thematic direction. Macro Research may name specific stocks as examples, but treat its output as thematic direction, not a closed list. Use the macro themes, sector views, and structural signals to identify the best opportunities across the entire market — including stocks not mentioned by Macro Research. Run your own screens and apply your own judgment to find the highest-conviction names that fit the macro setup.

Do not read from any directories or files other than those specified in your agent's Inputs section.

## Skills

All equity analysts have access to these skills. Invoke via the Skill tool when the task matches:

- `equity-research:thesis` — creating or updating an investment thesis
- `equity-research:initiating-coverage` — writing a full initiation report on a new name
- `equity-research:earnings-analysis` — analyzing quarterly earnings results
- `equity-research:earnings-preview` — building a pre-earnings preview with scenarios
- `equity-research:model-update` — updating financial model assumptions with new data
- `equity-research:screen` — running screens to find candidates beyond macro briefs
- `equity-research:catalysts` — building or reviewing a catalyst calendar for covered names

## Output Rules

- Produce between 0 and 3 theses per run, driven entirely by conviction
- If the macro material does not surface a compelling opportunity, produce nothing — do not force a thesis to fill a quota
- Each thesis gets its own file
- Every thesis must include entry parameters: entry range, target price, and stop loss

## Thesis Format

Every thesis follows this skeleton. Your agent file specifies the style label (e.g., "Contrarian Long") and lists style-specific sections to insert.

```
YYYY-MM-DD HH:MM UTC
# [Style] Thesis: [Company] ([Ticker])

## Investment Summary
[Style-specific sections — listed in your agent file]
## Business Overview
## Financial Analysis
[Financial table — see standard rows below]
## [Quality / Earnings Assessment — label per style]
## Valuation
| Multiple | Current | [Peer Benchmark] | Implied Price |
[Style-specific sections — catalysts, rebuttals, etc.]
## Risk Factors
## Entry Parameters
- Entry range: $X – $Y  |  Target: $Z  |  Stop: $W
## Monitoring Triggers
```

### Standard Financial Table

Default period columns: `FY[N-2] | FY[N-1] | FY[N] | LTM`. Growth style uses quarterly: `Q[N-4] through Q[N]`.

Standard rows (include all unless your style substitutes):

| Row | Notes |
|-----|-------|
| Revenue ($M) | |
| Gross Margin % | |
| EBITDA Margin % | Growth uses Operating Margin % |
| FCF ($M) | |
| Net Debt / EBITDA | |
| ROIC % | |

Add style-specific rows (e.g., GAAP vs. Adjusted EPS) as listed in your agent file.

## Discord Posting

Webhook env var: `DISCORD_WEBHOOK_<STYLE>` — your agent file names the exact variable.

Follow the posting standard in `shared/operations.md`. Every post uses this structure:

```
**[Lead Insight]:** [2-3 sentences — core case from your style's angle]

**[Key Findings]:**
- [Point 1]
- [Point 2]
- [Point 3]

**[Catalysts]:** [bullet list with dates]

**Entry Parameters:** Entry $X–$Y | Target $Z | Stop $W

**[Risks]:** [1-2 sentences on what invalidates the thesis]
```

Your agent file specifies exact field labels for each bracketed slot.
