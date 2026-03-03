# Changelog

All notable changes to Sterling's agent system are documented here.

## 2026-03-02 — Aggressive Risk-Tolerant Mentality for PM and Risk Manager

Rewrote the Mentality sections for both the Portfolio Manager and Risk Manager to favor calculated aggression and conviction-weighted sizing over conservative, limit-driven risk management.

**Agents modified:**
- `portfolio-manager.md` — replaced cautious Sharpe-ratio-minded mentality with calculated aggression philosophy: concentration over diversification, 7–8% minimum position sizing floor, 5–15% cash target, opportunity-cost-first framework, preference for 5 positions at 15–20% over 10 at 5–10%, decisive conviction-driven sizing on asymmetric setups
- `risk-manager.md` — replaced rigid limit-enforcement mentality with risk-contextualization approach: no hardcoded limits (thresholds are reference points, not walls), three-tier severity system (Informational/Advisory/Critical) where only Critical flags recommend reducing, symmetric stress tests showing upside and expected-case alongside tail risk, philosophy that uncompensated risk is the enemy rather than risk itself

## 2026-03-02 — Rename Work Command to Exploration Pipeline

Renamed the full pipeline command from `work` to `exploration-pipeline` for clarity.

**Files renamed:**
- `.claude/commands/work.md` → `.claude/commands/exploration-pipeline.md` — no content changes, filename only

## 2026-03-02 — Add Portfolio Review Command

Added a standalone portfolio review command that evaluates current holdings and conditional theses without requiring new analyst research, using the PM–Risk collaboration loop.

**Files added:**
- `.claude/commands/portfolio-review.md` — new command that runs a 3-stage pipeline: (1) PM drafts an IC memo with Existing Position Review and Conditional Thesis Review only (no new pitches), (2) Risk Manager assesses the draft, (3) PM incorporates risk feedback into a final IC memo. Short-circuits if all positions are Hold with no changes. Includes commit & push and a summary report.

## 2026-03-02 — Remove Social Media Agent

Removed the social-media agent and all references to it across the project.

**Files deleted:**
- `.claude/agents/social-media.md` — agent definition removed entirely

**Files modified:**
- `CLAUDE.md` — removed Social Media row from Team Roles table, removed `social-media/` from folder structure tree, removed Social Media row from Agent Data Flow table
- `.claude/commands/work.md` — removed Stage 7 (Social Media), renumbered Stage 8 → Stage 7, updated short-circuit reference from Stages 3–7 to 3–6, removed tweet posting from Pipeline Complete report items

## 2026-03-02 — Reorder Sections by Execution Sequence & Remove Redundant Relationships

Reordered sections in all agent files to match the actual sequence of steps each agent performs: identity → mentality → skills → inputs → current data → responsibilities → output → conventions → discord posting. Removed the Relationships section from all agents since read/write paths are already fully specified in Inputs and Output.

**Agents modified (all 10):**
- `macro-research.md` — moved Skills from near-end to after Mentality; moved Conventions from last to after Output; removed Relationships
- `long-analyst.md` — moved Skills from near-end to after Mentality; moved Conventions from last to after Output; removed Relationships
- `contrarian-analyst.md` — moved Skills from near-end to after Mentality; moved Conventions from last to after Output; removed Relationships
- `growth-analyst.md` — moved Skills from near-end to after Mentality; moved Conventions from last to after Output; removed Relationships
- `smallcap-analyst.md` — moved Skills from near-end to after Mentality; moved Conventions from last to after Output; removed Relationships
- `portfolio-manager.md` — moved Skills from near-end to after Mentality; moved Conventions from last to after Output; removed Relationships
- `risk-manager.md` — moved Skills from near-end to after Mentality; moved Conventions from last to after Output; removed Relationships
- `bookkeeper.md` — moved Conventions from last to after Output; removed Relationships (no Skills section)
- `investor-relations.md` — moved Conventions from last to after Output; removed Relationships (no Skills section)
- `social-media.md` — moved Conventions from last to after Output; removed Relationships (no Skills section)

## 2026-03-02 — Skill Awareness Across All Research, Analysis, and Decision Agents

Added a "Skills" section to every agent that performs research, analysis, or portfolio decisions, instructing each to check for and invoke installed equity-research skills (from the `equity-research` plugin) before starting work. Each agent lists only the skills relevant to its duties.

**Agents modified:**
- `macro-research.md` — added Skills section listing `equity-research:sector`, `equity-research:screen`, `equity-research:catalysts`, `equity-research:morning-note`
- `long-analyst.md` — added Skills section listing `equity-research:thesis`, `equity-research:initiating-coverage`, `equity-research:earnings-analysis`, `equity-research:earnings-preview`, `equity-research:model-update`, `equity-research:screen`, `equity-research:catalysts`
- `contrarian-analyst.md` — added Skills section listing same 7 skills as long-analyst, with contrarian-specific trigger descriptions (forensic divergences, bear/bull scenarios, beaten-down screens, re-rating catalysts)
- `growth-analyst.md` — added Skills section listing same 7 skills as long-analyst, with growth-specific trigger descriptions (acceleration signals, upside/downside scenarios, inflection screens)
- `smallcap-analyst.md` — added Skills section listing same 7 skills as long-analyst, with small-cap-specific trigger descriptions (under-covered earnings, under-followed screens, discovery catalysts)
- `portfolio-manager.md` — added Skills section listing `equity-research:catalysts`, `equity-research:morning-note`, `equity-research:earnings-analysis`
- `risk-manager.md` — added Skills section listing `equity-research:model-update`, `equity-research:catalysts`

## 2026-03-02 — Current-Data Enforcement for Portfolio Manager

Extended current-data requirements to the Portfolio Manager so IC decisions are made on live market information — enabling swift reaction as theses confirm or deteriorate.

**Agents modified:**
- `portfolio-manager.md` — added Current Data Requirement section with three search tiers: portfolio-wide market context (S&P 500, VIX, 10Y yield, sector ETFs), per-position checks for active and conditional holdings (current price vs. stop/target, latest earnings & guidance, catalyst status, material news, analyst sentiment shifts), and per-new-pitch verification (live price vs. analyst entry parameters, recent developments since thesis was written, earnings check for stale financials)

## 2026-03-02 — Mandatory Current-Data Enforcement Across All Research and Analysis Agents

Added a "Current Data Requirement" section to every agent that produces research or analysis, requiring mandatory WebSearch calls for live market data before writing any output. No agent may rely on memorized or training-data prices, financials, or news — every data point must be sourced from a web search performed during the current session.

**Agents modified:**
- `macro-research.md` — added Current Data Requirement section with 5 mandatory search categories (market levels, rates & credit, economic indicators, sector performance, recent macro news); added two new responsibilities (analyze technological breakthroughs, maintain awareness of asset rotations)
- `long-analyst.md` — added Current Data Requirement section with 6 mandatory per-ticker searches (current price, latest earnings, recent news, analyst estimates, valuation multiples, SEC filings)
- `contrarian-analyst.md` — added Current Data Requirement section with 7 mandatory per-ticker searches (current price, latest earnings, recent news, analyst sentiment, valuation multiples, SEC filings, short interest)
- `growth-analyst.md` — added Current Data Requirement section with 7 mandatory per-ticker searches (current price, latest earnings, revenue acceleration signals, recent news, analyst estimate revisions, valuation multiples, SEC filings)
- `smallcap-analyst.md` — added Current Data Requirement section with 8 mandatory per-ticker searches (current price & market cap, latest earnings, recent news, analyst coverage count, insider activity, valuation multiples, liquidity data, SEC filings)
- `risk-manager.md` — added Current Data Requirement section with 5 mandatory searches (current prices for all portfolio tickers, VIX and implied volatility, sector correlations, credit spreads, recent drawdown investigation)

**Other files modified:**
- `CLAUDE.md` — strengthened the Market Data convention to explicitly require web searches during the current session and mandate checking latest news, catalyst events, and earnings for any company or sector covered

## 2026-03-02 — Conditional Thesis Acceptance for Portfolio Manager

Added a formal "Conditionally Approved" decision tier between Approve and Reject. Pitches with merit that aren't allocated capital (portfolio full, price above entry range, pending catalyst) are now tracked in a `.conditional` manifest and re-evaluated each IC cycle with Promote/Hold/Drop decisions.

**Agents modified:**
- `portfolio-manager.md` — added `.conditional` to Inputs as a read source alongside `.active`; added "Conditionally Approved" decision outcome to Constraints; added `.conditional` manifest to Library Structure; added "On Conditionally Approving a Pitch" section with file-copy and manifest-update steps mirroring the approval flow; added "Conditional Thesis Review (Draft Round)" section with Promote/Hold/Drop lifecycle and WebSearch catalyst checks; added "Conditional Thesis Review" to required IC memo sections in Output

