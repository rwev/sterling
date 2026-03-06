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
