# Changelog

All notable changes to Sterling's agent system are documented here.

## 2026-03-04 — Post-Mortem Agent: Switch Discord Channel to Bookkeeping

Changed the post-mortem agent's Discord posting target from the portfolio-manager channel to the bookkeeping channel.

**Agents modified:**
- `post-mortem.md` — changed `--webhook-env DISCORD_WEBHOOK_PM` to `--webhook-env DISCORD_WEBHOOK_BOOKKEEPING` in the Discord posting command

## 2026-03-04 — Small-Cap Analyst: Remove Position-Sizing & Liquidity Constraints

Sterling is a small shop with no meaningful liquidity constraints. Removed all position-sizing, days-to-liquidate, and maximum allocation language from the small-cap analyst so it focuses purely on thesis quality.

**Agents modified:**
- `smallcap-analyst.md` — removed "liquidity-aware" and position-sizing constraint language from Mentality; removed Liquidity data item from Current Data Requirement (renumbered remaining items 12–15); removed "Assess liquidity and position-sizing constraints" from Responsibilities; removed entire "Liquidity & Position Sizing" table from thesis template; removed liquidity sentence from output requirements; removed "Liquidity" line from Discord summary template

## 2026-03-04 — PM: Broader Drop Criteria for Conditional Theses

Expanded the Drop decision in the Conditional Thesis Review to prevent the conditional pipeline from becoming a stale parking lot.

**Agents modified:**
- `portfolio-manager.md` — broadened Drop criteria to include macro narrative invalidation and pipeline crowding, not just thesis-broken or catalyst-failed. Added guidance that the conditional list is a ranked queue of deployment-ready ideas, and that theses held 3+ cycles without approaching entry conditions should be dropped.

## 2026-03-04 — Replace Generic Data Searches with Authoritative Source URLs

Replaced vague `Search "VIX level today"` style instructions across all 7 data-fetching agents with specific, fetchable URLs pointing to authoritative sources. This fixes the bug where the risk-manager got VIX wrong by relying on a generic web search that returned stale data.

**Agents modified:**
- `risk-manager.md` — rewrote Current Data Requirement from 5 generic searches to 11 specific WebFetch sources: BarChart for VIX and per-position IV Rank/Percentile, StockAnalysis VIX cross-reference, FRED for HY/IG credit spreads, CME FedWatch for rate probabilities, Unusual Whales for options flow, MarketChameleon for IV analytics, CNN Fear & Greed for sentiment, Yahoo Finance and Finviz for prices, x.com SpotGamma for vol commentary and cashtag searches for Advisory/Critical flagged positions
- `macro-research.md` — rewrote Current Data Requirement from 5 generic searches to 7 categories with specific URLs: Yahoo Finance for index levels, FRED series for yields/credit/economic indicators (DGS10, DGS2, DFEDTARU, BAMLH0A0HYM2, BAMLC0A0CM, T10Y2Y, GDP, CPIAUCSL, PCEPILFE, UNRATE, ICSA), Atlanta Fed GDPNow for real-time GDP, CME FedWatch for rate probabilities, BarChart/Finviz for sector performance, TradingEconomics for macro dashboard, x.com feeds for NickTimiraos (Fed), LizAnnSonders (macro), MacroAlf (rates/credit)
- `long-analyst.md` — rewrote Current Data Requirement from 6 generic searches to 11 specific WebFetch sources: Yahoo Finance (quote, key-statistics, analysis), Finviz snapshot, Seeking Alpha earnings transcripts, Earnings Whispers beat/miss history, StockAnalysis headlines, TipRanks analyst consensus, Macrotrends historical financials, SEC EDGAR filings, BarChart IV/volatility-greeks, WhaleWisdom 13F institutional ownership, x.com cashtag and company handles
- `contrarian-analyst.md` — rewrote Current Data Requirement from 7 generic searches to 14 specific sources: same 11 as long-analyst base plus BarChart short interest (days to cover, short % of float), Dataroma superinvestor portfolios, x.com bear case pulse search
- `growth-analyst.md` — rewrote Current Data Requirement from 7 generic searches to 13 specific sources: same 11 as long-analyst base plus Unusual Whales options flow around catalysts, StockAnalysis quarterly financials for sequential growth, x.com product/growth signal searches
- `smallcap-analyst.md` — rewrote Current Data Requirement from 8 generic searches to 16 specific sources: same 11 as long-analyst base plus OpenInsider for insider transactions, BarChart short interest, Dataroma superinvestor screening, x.com MicroCapClub feed, cashtag volume as discovery signal, company/CEO x.com handles
- `portfolio-manager.md` — rewrote Current Data Requirement with 3 tiers of specific sources: portfolio-wide (BarChart VIX as primary source with explicit warning against generic searches, StockAnalysis VIX cross-ref, Yahoo Finance S&P 500, FRED 10Y yield, CME FedWatch, BarChart/Finviz sector data, CNN Fear & Greed, x.com LizAnnSonders and NickTimiraos), per-position (Yahoo Finance quote, Finviz snapshot, Seeking Alpha earnings, TipRanks consensus, x.com cashtag), per-pitch (Yahoo Finance quote, x.com sentiment). Also updated Existing Position Review and Conditional Thesis Review templates to reference the new data collection steps instead of duplicating old generic Search patterns.

## 2026-03-04 — Performance Feedback Loop: Post-Mortem Agent & Analyst Scorecards

Added a post-mortem agent and scorecard command to close the prediction-to-outcome feedback loop. When positions are closed, the post-mortem agent automatically evaluates thesis accuracy and regenerates analyst performance scorecards.

**Agents added:**
- `post-mortem.md` — new agent that reads closed theses from `theses/closed/`, fetches realized price data via WebSearch, produces structured post-mortem documents (predicted vs realized R/R, catalyst scorecard, verdict) and regenerates an aggregated analyst scorecard

**Commands modified:**
- `exploration-pipeline.md` — added Stage 6 (Post-Mortem Analysis) between PM Final and Bookkeeper/IR; renumbered Stages 7-8
- `portfolio-review.md` — added Stage 4 (Post-Mortem Analysis) between PM Final and Commit & Push; renumbered Stage 5

**Commands added:**
- `scorecard.md` — on-demand command to regenerate the analyst scorecard from all existing post-mortem documents

**Other changes:**
- `CLAUDE.md` — added Post-Mortem role to folder structure, team roles table, and agent data flow table
- `artifacts/post-mortems/` — new output directory for post-mortem docs and scorecards

## 2026-03-04 — PM: Willingness to Exit Intact Positions for Better Opportunities

Reinforced that the PM's goal is returns, not thesis defense. Positions with intact theses should still be exited when a materially superior risk/reward opportunity arises — but without overtrading or chasing.

**Agents modified:**
- `portfolio-manager.md` — added "Thesis completion is not the goal — returns are" paragraph to Mentality: PM should exit weaker positions to fund higher-conviction pitches even if the original thesis is technically intact, while avoiding churn. Updated Hold criteria in Existing Position Review to require R/R competitiveness vs alternatives (not just thesis intact). Updated Close criteria to explicitly include displacement by a superior pitch (e.g., 1.5:1 R/R giving way to 3:1 R/R).

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

