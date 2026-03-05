# Agent Data Source Quality Upgrade — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace generic web search queries in all agent files with specific, authoritative data source references (URLs, FRED series IDs, BarChart endpoints) so agents fetch accurate, current data instead of relying on vague searches that return stale or wrong numbers.

**Architecture:** Each agent's "Current Data Requirement" section gets rewritten to specify exact sources with fetchable URLs or precise search patterns. Agents that don't fetch external data (Bookkeeper, Investor Relations) are unchanged.

**Tech Stack:** Markdown agent files in `.claude/agents/`. No code changes — pure content edits.

---

## Context

The risk-manager got VIX wrong in the 2026-03-04 risk report because it relied on a generic `"VIX level today"` web search. The fix: point every agent at the most reliable, specific data sources for the data they need. This applies to all agents that fetch market data.

## Source Reference Table

These are the authoritative sources each agent should use. Tasks below reference this table.

### Volatility & Options Data
| Data Point | Source | URL / Fetch Target |
|---|---|---|
| VIX current level | CBOE | `https://www.cboe.com/tradable_products/vix/` |
| VIX current level (alt) | BarChart | `https://www.barchart.com/stocks/quotes/$VIX/overview` |
| VIX current level (alt) | StockAnalysis | `https://stockanalysis.com/quote/cboe/VIX` |
| IV Rank / IV Percentile per ticker | BarChart | `https://www.barchart.com/stocks/quotes/{TICKER}/volatility-greeks` |
| Options overview per ticker | BarChart | `https://www.barchart.com/stocks/quotes/{TICKER}/options` |
| Options flow & unusual activity | Unusual Whales | `https://unusualwhales.com/stock/{TICKER}` |
| IV charts & analytics | MarketChameleon | `https://marketchameleon.com/Overview/{TICKER}/IV/` |

### Credit & Fixed Income
| Data Point | Source | URL / Fetch Target |
|---|---|---|
| HY OAS (ICE BofA) | FRED | `https://fred.stlouisfed.org/series/BAMLH0A0HYM2` |
| IG OAS (ICE BofA) | FRED | `https://fred.stlouisfed.org/series/BAMLC0A0CM` |
| 10Y Treasury yield | FRED | `https://fred.stlouisfed.org/series/DGS10` |
| 2Y Treasury yield | FRED | `https://fred.stlouisfed.org/series/DGS2` |
| Fed Funds rate | FRED | `https://fred.stlouisfed.org/series/DFEDTARU` |
| 10Y-2Y spread | FRED | `https://fred.stlouisfed.org/series/T10Y2Y` |
| Fed rate probabilities | CME FedWatch | `https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html` |

### Macro / Economic Indicators
| Data Point | Source | URL / Fetch Target |
|---|---|---|
| GDP (advance estimate) | BEA / FRED | `https://fred.stlouisfed.org/series/GDP` |
| Real-time GDP estimate | Atlanta Fed GDPNow | `https://www.atlantafed.org/cqer/research/gdpnow` |
| CPI (all items) | BLS / FRED | `https://fred.stlouisfed.org/series/CPIAUCSL` |
| Core PCE | FRED | `https://fred.stlouisfed.org/series/PCEPILFE` |
| Unemployment rate | BLS / FRED | `https://fred.stlouisfed.org/series/UNRATE` |
| ISM Manufacturing PMI | FRED | `https://fred.stlouisfed.org/series/MANEMP` |
| Initial jobless claims | FRED | `https://fred.stlouisfed.org/series/ICSA` |
| Global macro dashboard | TradingEconomics | `https://tradingeconomics.com/united-states/indicators` |
| Market fear/greed sentiment | CNN | `https://www.cnn.com/markets/fear-and-greed` |

### Equity Market Indices
| Data Point | Source | URL / Fetch Target |
|---|---|---|
| S&P 500 | Yahoo Finance | `https://finance.yahoo.com/quote/%5EGSPC/` |
| Nasdaq Composite | Yahoo Finance | `https://finance.yahoo.com/quote/%5EIXIC/` |
| Russell 2000 | Yahoo Finance | `https://finance.yahoo.com/quote/%5ERUT/` |
| Dow Jones | Yahoo Finance | `https://finance.yahoo.com/quote/%5EDJI/` |
| Market heatmap & overview | Finviz | `https://finviz.com/map.ashx` |

### Per-Ticker Equity Data
| Data Point | Source | URL / Fetch Target |
|---|---|---|
| Current price & quote | Yahoo Finance | `https://finance.yahoo.com/quote/{TICKER}/` |
| Key statistics & multiples | Yahoo Finance | `https://finance.yahoo.com/quote/{TICKER}/key-statistics/` |
| Financials (IS/BS/CF) | Yahoo Finance | `https://finance.yahoo.com/quote/{TICKER}/financials/` |
| Analyst estimates | Yahoo Finance | `https://finance.yahoo.com/quote/{TICKER}/analysis/` |
| Profile & overview | StockAnalysis | `https://stockanalysis.com/stocks/{ticker}/` |
| Financials (alt) | StockAnalysis | `https://stockanalysis.com/stocks/{ticker}/financials/` |
| Snapshot (multiples, perf, technicals) | Finviz | `https://finviz.com/quote.ashx?t={TICKER}` |
| Historical financials (long-term) | Macrotrends | `https://www.macrotrends.net/stocks/charts/{TICKER}/{name}/revenue` |
| Analyst consensus & price targets | TipRanks | `https://www.tipranks.com/stocks/{ticker}/forecast` |
| Earnings transcripts & analysis | Seeking Alpha | `https://seekingalpha.com/symbol/{TICKER}/earnings` |
| Earnings calendar & whisper numbers | Earnings Whispers | `https://www.earningswhispers.com/stocks/{ticker}` |
| SEC filings (EDGAR) | SEC | `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK={TICKER}&type=10-&dateb=&owner=include&count=10` |
| Short interest | BarChart | `https://www.barchart.com/stocks/quotes/{TICKER}/short-interest` |
| Insider transactions | OpenInsider | `http://openinsider.com/search?q={TICKER}` |
| 13F institutional ownership | WhaleWisdom | `https://whalewisdom.com/stock/{ticker}` |
| Superinvestor portfolios | Dataroma | `https://www.dataroma.com/m/stock.php?sym={TICKER}` |

### Sector ETF Performance
| Data Point | Source | URL / Fetch Target |
|---|---|---|
| Sector performance overview | BarChart | `https://www.barchart.com/stocks/sectors/performance` |
| Individual sector ETF | Yahoo Finance | `https://finance.yahoo.com/quote/{ETF}/` (XLK, XLE, XLF, XLV, XLI, XLU, XLB, XLC, XLY, XLP, XLRE) |
| Sector heatmap | Finviz | `https://finviz.com/groups.ashx?g=sector&v=210&o=name` |

### Real-Time Sentiment & Breaking News (x.com)
| Data Point | Search / URL |
|---|---|
| Per-ticker real-time sentiment | `https://x.com/search?q=%24{TICKER}&src=typed_query&f=live` (cashtag search, sorted by latest) |
| Per-ticker top posts | `https://x.com/search?q=%24{TICKER}&src=typed_query` (cashtag search, sorted by top/relevance) |
| Breaking macro/Fed news | `https://x.com/search?q=from%3ANickTimiraos&src=typed_query&f=live` — Nick Timiraos (WSJ Fed reporter) |
| Options/vol commentary | `https://x.com/search?q=from%3Aspotgamma&src=typed_query&f=live` — SpotGamma (options flow) |
| Macro/rates commentary | `https://x.com/search?q=from%3AMacroAlf&src=typed_query&f=live` — Alfonso Peccatiello (macro) |
| Market sentiment | `https://x.com/search?q=from%3ALizAnnSonders&src=typed_query&f=live` — Liz Ann Sonders (Schwab chief strategist) |
| Earnings/catalyst buzz | `https://x.com/search?q=%24{TICKER}%20earnings&src=typed_query&f=live` (cashtag + "earnings", latest) |
| Geopolitical/defense news | `https://x.com/search?q=from%3ASentDefVic&src=typed_query&f=live` — Sentinel Defense (defense/geopolitics) |
| Small-cap / micro-cap ideas | `https://x.com/search?q=from%3AMicroCapClub&src=typed_query&f=live` — MicroCapClub |
| Company IR announcements | `https://x.com/{COMPANY_HANDLE}` — check official company/IR Twitter handle for press releases |

---

## Task 1: Update Risk Manager — Volatility, Credit & Sentiment Sources

**Files:**
- Modify: `.claude/agents/risk-manager.md:53-63`

**Step 1: Edit the Current Data Requirement section**

Replace the existing "Current Data Requirement" section (lines 52-63) with specific source references. The new section should:

1. **VIX**: Replace `Search "VIX level today"` with: **WebFetch** `https://www.barchart.com/stocks/quotes/$VIX/overview` for current VIX level. Cross-reference with **WebFetch** `https://stockanalysis.com/quote/cboe/VIX/`. If values disagree, use the CBOE-sourced figure.
2. **IV per position**: Replace `Search "<TICKER> implied volatility"` with: **WebFetch** `https://www.barchart.com/stocks/quotes/{TICKER}/volatility-greeks` for each position — extract IV Rank, IV Percentile, and current IV. These are the authoritative implied vol inputs for VaR calculations.
3. **Options flow**: **WebFetch** `https://unusualwhales.com/stock/{TICKER}` for positions with elevated IV rank — check for unusual options activity that may signal informed positioning or event risk.
4. **Credit spreads**: Replace generic credit spread search with: **WebFetch** `https://fred.stlouisfed.org/series/BAMLH0A0HYM2` (HY OAS) and **WebFetch** `https://fred.stlouisfed.org/series/BAMLC0A0CM` (IG OAS).
5. **Fed rate expectations**: **WebFetch** `https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html` — rate probabilities feed stress test calibration.
6. **Current prices**: **WebFetch** `https://finance.yahoo.com/quote/{TICKER}/` for each position.
7. **Sector ETF performance**: **WebFetch** `https://www.barchart.com/stocks/sectors/performance` for sector performance and rotation signals.
8. **Market sentiment**: **WebFetch** `https://www.cnn.com/markets/fear-and-greed` — Fear & Greed Index provides a sentiment cross-check for VaR regime assessment.
9. **x.com vol/options commentary**: **WebFetch** `https://x.com/search?q=from%3Aspotgamma&src=typed_query&f=live` (SpotGamma options flow). Also check `https://x.com/search?q=%24VIX&src=typed_query&f=live` for real-time VIX commentary during elevated-vol regimes.
10. **x.com per-position sentiment**: For any position flagged Advisory or Critical, **WebFetch** `https://x.com/search?q=%24{TICKER}&src=typed_query&f=live` to gauge real-time trader sentiment and detect breaking developments not yet in news.

**Step 2: Verify the edit reads correctly**

Read the file and confirm the new section flows naturally and all URLs are present.

**Step 3: Commit**

```bash
git add .claude/agents/risk-manager.md
git commit -m "risk-manager: replace generic vol/credit searches with BarChart IV, FRED spreads, x.com sentiment"
```

---

## Task 2: Update Macro Research — Economic, Market & News Sources

**Files:**
- Modify: `.claude/agents/macro-research.md:39-48`

**Step 1: Edit the Current Data Requirement section**

Replace the existing section with specific source references:

1. **Market levels**: Replace generic index searches with **WebFetch** for each:
   - `https://finance.yahoo.com/quote/%5EGSPC/` (S&P 500)
   - `https://finance.yahoo.com/quote/%5EIXIC/` (Nasdaq)
   - `https://finance.yahoo.com/quote/%5ERUT/` (Russell 2000)
   - `https://finance.yahoo.com/quote/%5EDJI/` (Dow Jones)
   - `https://finviz.com/map.ashx` (visual market heatmap — quick read on sector rotation)

2. **Rates & credit**: Replace with FRED series fetches:
   - `https://fred.stlouisfed.org/series/DGS10` (10Y yield)
   - `https://fred.stlouisfed.org/series/DGS2` (2Y yield)
   - `https://fred.stlouisfed.org/series/DFEDTARU` (Fed Funds)
   - `https://fred.stlouisfed.org/series/BAMLH0A0HYM2` (HY OAS)
   - `https://fred.stlouisfed.org/series/BAMLC0A0CM` (IG OAS)
   - `https://fred.stlouisfed.org/series/T10Y2Y` (10Y-2Y spread)
   - `https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html` (Fed rate probabilities)

3. **Economic indicators**: Replace with FRED series fetches:
   - `https://fred.stlouisfed.org/series/GDP` (GDP)
   - `https://www.atlantafed.org/cqer/research/gdpnow` (Atlanta Fed GDPNow — real-time GDP tracking estimate)
   - `https://fred.stlouisfed.org/series/CPIAUCSL` (CPI)
   - `https://fred.stlouisfed.org/series/PCEPILFE` (Core PCE)
   - `https://fred.stlouisfed.org/series/UNRATE` (Unemployment)
   - `https://fred.stlouisfed.org/series/ICSA` (Jobless claims)
   - `https://tradingeconomics.com/united-states/indicators` (comprehensive macro dashboard — useful for quickly scanning all indicators)

4. **VIX & sentiment**:
   - `https://www.barchart.com/stocks/quotes/$VIX/overview` — current VIX level
   - `https://www.cnn.com/markets/fear-and-greed` — Fear & Greed Index for aggregate sentiment

5. **Sector performance**: Replace with:
   - `https://www.barchart.com/stocks/sectors/performance` (sector overview)
   - `https://finviz.com/groups.ashx?g=sector&v=210&o=name` (sector heatmap with performance)
   - Individual sector ETFs via Yahoo Finance: XLK, XLE, XLF, XLV, XLI, XLU, XLB, XLC, XLY, XLP, XLRE

6. **x.com macro/Fed news** (critical for breaking developments):
   - `https://x.com/search?q=from%3ANickTimiraos&src=typed_query&f=live` — Nick Timiraos (WSJ Fed reporter, the definitive source for Fed leaks/commentary)
   - `https://x.com/search?q=from%3ALizAnnSonders&src=typed_query&f=live` — Liz Ann Sonders (Schwab chief strategist — macro/market data)
   - `https://x.com/search?q=from%3AMacroAlf&src=typed_query&f=live` — Alfonso Peccatiello (macro/rates/credit)
   - For geopolitical events, search: `https://x.com/search?q={TOPIC}&src=typed_query&f=live` (e.g., "Iran Hormuz", "FOMC", "tariffs")

7. **Recent macro news**: Keep WebSearch for broad news, but add specific sources to check: FOMC calendar, Treasury.gov auction schedule, BLS release calendar.

**Step 2: Verify the edit**

Read the file and confirm.

**Step 3: Commit**

```bash
git add .claude/agents/macro-research.md
git commit -m "macro-research: add FRED series, GDPNow, FedWatch, Finviz, TradingEconomics, x.com macro sources"
```

---

## Task 3: Update Long Analyst — Equity, Earnings & Sentiment Sources

**Files:**
- Modify: `.claude/agents/long-analyst.md:42-52`

**Step 1: Edit the Current Data Requirement section**

Replace with specific sources per mandatory search:

1. **Current stock price**: **WebFetch** `https://finance.yahoo.com/quote/{TICKER}/` — use the live quote.
2. **Snapshot (quick overview)**: **WebFetch** `https://finviz.com/quote.ashx?t={TICKER}` — one-page snapshot with current multiples, technicals, performance, sector, and analyst target. Good starting point before deep-diving.
3. **Latest earnings**: **WebFetch** `https://seekingalpha.com/symbol/{TICKER}/earnings` for earnings transcripts and post-earnings analysis. Cross-check with **WebFetch** `https://www.earningswhispers.com/stocks/{ticker}` for whisper numbers and beat/miss history.
4. **Recent news & catalysts**: **WebSearch** `"{TICKER} news {month year}"` (keep — news aggregation requires search). Also check `https://stockanalysis.com/stocks/{ticker}/` for recent headlines.
5. **x.com real-time sentiment**: **WebFetch** `https://x.com/search?q=%24{TICKER}&src=typed_query&f=live` — cashtag search for breaking developments, trader sentiment, and earnings reactions not yet in news. Also check the company's official x.com handle for IR announcements.
6. **Analyst estimates & price targets**: **WebFetch** `https://finance.yahoo.com/quote/{TICKER}/analysis/` — consensus revenue, EPS, and revision trends. Cross-reference with **WebFetch** `https://www.tipranks.com/stocks/{ticker}/forecast` for analyst consensus, price target range, and buy/hold/sell breakdown.
7. **Valuation multiples**: **WebFetch** `https://finance.yahoo.com/quote/{TICKER}/key-statistics/` — P/E, EV/EBITDA, P/S, P/B. Cross-reference with Finviz snapshot (item 2).
8. **Historical financials**: **WebFetch** `https://www.macrotrends.net/stocks/charts/{TICKER}/{name}/revenue` — long-term revenue, margin, and return trends for context on current financial trajectory.
9. **Recent SEC filings**: **WebFetch** `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK={TICKER}&type=10-&dateb=&owner=include&count=10` — most recent 10-K/10-Q.
10. **IV and options data**: **WebFetch** `https://www.barchart.com/stocks/quotes/{TICKER}/volatility-greeks` — IV rank and percentile help gauge market sentiment and risk around catalysts.
11. **Institutional ownership**: **WebFetch** `https://whalewisdom.com/stock/{ticker}` — 13F filings showing which funds own the stock, recent additions/reductions.

**Step 2: Verify the edit**

Read the file and confirm.

**Step 3: Commit**

```bash
git add .claude/agents/long-analyst.md
git commit -m "long-analyst: add Finviz, Seeking Alpha, TipRanks, Macrotrends, WhaleWisdom, x.com sources"
```

---

## Task 4: Update Contrarian Analyst — Equity, Short Interest & Positioning Sources

**Files:**
- Modify: `.claude/agents/contrarian-analyst.md:44-55`

**Step 1: Edit the Current Data Requirement section**

Same base sources as Long Analyst (Task 3), plus contrarian-specific additions:

1-11. Same as Long Analyst (Yahoo Finance quote/stats/analysis, Finviz snapshot, Seeking Alpha earnings, Earnings Whispers, x.com cashtag, TipRanks, Macrotrends, SEC EDGAR, BarChart volatility-greeks, WhaleWisdom).

**Additional contrarian-specific sources:**

12. **Short interest**: **WebFetch** `https://www.barchart.com/stocks/quotes/{TICKER}/short-interest` — days to cover, short % of float, short interest trend. High short interest in a name with improving fundamentals is the contrarian signal.
13. **Superinvestor positioning**: **WebFetch** `https://www.dataroma.com/m/stock.php?sym={TICKER}` — check if known value investors (Buffett, Klarman, Einhorn, etc.) have positions. Superinvestor accumulation in a beaten-down name confirms the contrarian thesis.
14. **Institutional ownership changes**: **WebFetch** `https://whalewisdom.com/stock/{ticker}` — focus on recent 13F additions vs. reductions. Are institutions capitulating (selling into the decline) or accumulating (building positions while consensus is negative)?
15. **Analyst ratings & sentiment direction**: **WebFetch** `https://finance.yahoo.com/quote/{TICKER}/analysis/` — focus on estimate revision direction. Are estimates still falling or stabilizing? A stabilizing revision trend in a beaten-down name is a contrarian buy signal.
16. **x.com bear case pulse**: **WebFetch** `https://x.com/search?q=%24{TICKER}%20short%20OR%20bearish%20OR%20sell&src=typed_query&f=live` — scan for the consensus bear case being expressed in real-time. Understanding what bears are saying helps sharpen the rebuttal.

**Step 2: Verify the edit**

Read the file and confirm.

**Step 3: Commit**

```bash
git add .claude/agents/contrarian-analyst.md
git commit -m "contrarian-analyst: add Dataroma, WhaleWisdom, BarChart short interest, x.com bear sentiment"
```

---

## Task 5: Update Growth Analyst — Equity, Revisions & Momentum Sources

**Files:**
- Modify: `.claude/agents/growth-analyst.md:44-55`

**Step 1: Edit the Current Data Requirement section**

Same base sources as Long Analyst (Task 3), plus growth-specific additions:

1-11. Same as Long Analyst (Yahoo Finance quote/stats/analysis, Finviz snapshot, Seeking Alpha earnings, Earnings Whispers, x.com cashtag, TipRanks, Macrotrends, SEC EDGAR, BarChart volatility-greeks, WhaleWisdom).

**Additional growth-specific sources:**

12. **Revenue growth & estimate revisions (deep)**: **WebFetch** `https://finance.yahoo.com/quote/{TICKER}/analysis/` — focus specifically on revenue estimate revisions (up/down last 7/30/90 days) and EPS revision trends. Upward revisions across multiple timeframes confirm the acceleration thesis.
13. **Quarterly financials for sequential growth**: **WebFetch** `https://finance.yahoo.com/quote/{TICKER}/financials/` — quarterly income statement for QoQ and YoY revenue growth rate calculations. Also **WebFetch** `https://stockanalysis.com/stocks/{ticker}/financials/?p=quarterly` for a cleaner quarterly view.
14. **Earnings calendar & upcoming reports**: **WebFetch** `https://www.earningswhispers.com/stocks/{ticker}` — next earnings date, whisper number, and beat rate history. Growth names around earnings dates require heightened attention.
15. **x.com growth/product signals**: **WebFetch** `https://x.com/search?q=%24{TICKER}%20growth%20OR%20revenue%20OR%20launch%20OR%20product&src=typed_query&f=live` — scan for product launch announcements, partnership deals, and growth commentary from industry insiders.
16. **x.com company official**: Check the company's official x.com handle for product announcements, customer wins, and expansion news that may not appear in financial news yet.
17. **Options activity around catalysts**: **WebFetch** `https://unusualwhales.com/stock/{TICKER}` — unusual call buying ahead of earnings or product events can signal institutional positioning on the growth inflection.

**Step 2: Verify the edit**

Read the file and confirm.

**Step 3: Commit**

```bash
git add .claude/agents/growth-analyst.md
git commit -m "growth-analyst: add quarterly financials, Earnings Whispers, Unusual Whales, x.com product signals"
```

---

## Task 6: Update Small-Cap Analyst — Equity, Insider, Liquidity & Discovery Sources

**Files:**
- Modify: `.claude/agents/smallcap-analyst.md:44-56`

**Step 1: Edit the Current Data Requirement section**

Same base sources as Long Analyst (Task 3), plus small-cap-specific additions:

1-11. Same as Long Analyst (Yahoo Finance quote/stats/analysis, Finviz snapshot, Seeking Alpha earnings, Earnings Whispers, x.com cashtag, TipRanks, Macrotrends, SEC EDGAR, BarChart volatility-greeks, WhaleWisdom).

**Additional small-cap-specific sources:**

12. **Analyst coverage confirmation**: **WebFetch** `https://finance.yahoo.com/quote/{TICKER}/analysis/` — if no estimates shown or only 1-2 analysts, confirms under-coverage. Cross-check with **WebFetch** `https://www.tipranks.com/stocks/{ticker}/forecast` for coverage count and target range.
13. **Insider activity**: **WebFetch** `http://openinsider.com/search?q={TICKER}` — recent insider buys/sells with amounts and roles. This is the authoritative source for insider transaction data. Cluster buys by multiple insiders at similar prices are the strongest signal for under-followed names.
14. **Liquidity data**: **WebFetch** `https://finance.yahoo.com/quote/{TICKER}/key-statistics/` — average daily volume (shares and dollar), shares outstanding, float, institutional ownership %. All are critical for position-sizing.
15. **Short interest**: **WebFetch** `https://www.barchart.com/stocks/quotes/{TICKER}/short-interest` — relevant for small-caps where short squeezes can be catalysts. Also check days to cover — >5 days in a small-cap is significant.
16. **Institutional ownership / 13F changes**: **WebFetch** `https://whalewisdom.com/stock/{ticker}` — focus on whether institutional ownership is increasing (discovery in progress) or stagnant (still undiscovered). New 13F positions from quality funds are a discovery catalyst.
17. **Superinvestor screening**: **WebFetch** `https://www.dataroma.com/m/stock.php?sym={TICKER}` — check if any known value/small-cap investors own the name.
18. **x.com small-cap community**: **WebFetch** `https://x.com/search?q=from%3AMicroCapClub&src=typed_query&f=live` — MicroCapClub for under-followed ideas. Also search `https://x.com/search?q=%24{TICKER}&src=typed_query&f=live` — low tweet volume on the cashtag itself confirms the name is undiscovered (information edge).
19. **x.com company/CEO handle**: Check for the company's official x.com account and CEO's personal account — small-cap management teams often announce customer wins, contract awards, and strategic updates on x.com before filing 8-Ks.

**Step 2: Verify the edit**

Read the file and confirm.

**Step 3: Commit**

```bash
git add .claude/agents/smallcap-analyst.md
git commit -m "smallcap-analyst: add OpenInsider, Dataroma, WhaleWisdom, MicroCapClub x.com, BarChart short interest"
```

---

## Task 7: Update Portfolio Manager — Market Context, Sentiment & Decision Sources

**Files:**
- Modify: `.claude/agents/portfolio-manager.md:61-79`

**Step 1: Edit the Current Data Requirement section**

Update portfolio-wide and per-ticker searches with specific sources:

**Portfolio-wide (run once per IC cycle):**
1. **Market context**:
   - **WebFetch** `https://finance.yahoo.com/quote/%5EGSPC/` (S&P 500)
   - **WebFetch** `https://www.barchart.com/stocks/quotes/$VIX/overview` (VIX — **primary VIX source**, do not use generic search)
   - **WebFetch** `https://stockanalysis.com/quote/cboe/VIX` (VIX cross-reference)
   - **WebFetch** `https://fred.stlouisfed.org/series/DGS10` (10Y Treasury)
   - **WebFetch** `https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html` (Fed rate expectations — informs risk appetite assessment)
2. **Sector moves**:
   - **WebFetch** `https://www.barchart.com/stocks/sectors/performance`
   - **WebFetch** `https://finviz.com/map.ashx` (visual heatmap — quick read on what's working)
3. **Market sentiment**:
   - **WebFetch** `https://www.cnn.com/markets/fear-and-greed` (Fear & Greed Index)
   - **WebFetch** `https://x.com/search?q=from%3ALizAnnSonders&src=typed_query&f=live` — Liz Ann Sonders for market-level commentary
   - **WebFetch** `https://x.com/search?q=from%3ANickTimiraos&src=typed_query&f=live` — Nick Timiraos for any breaking Fed developments

**Per active/conditional position:**
1. **Current stock price**: **WebFetch** `https://finance.yahoo.com/quote/{TICKER}/`
2. **Quick snapshot**: **WebFetch** `https://finviz.com/quote.ashx?t={TICKER}` — multiples, target, performance at a glance
3. **Latest earnings & guidance**: **WebSearch** `"{TICKER} earnings results {quarter}"` (keep search — recency matters). Also **WebFetch** `https://seekingalpha.com/symbol/{TICKER}/earnings` for earnings transcript highlights.
4. **Catalyst status**: **WebSearch** for each specific catalyst (keep — catalysts are idiosyncratic)
5. **Material developments**: **WebSearch** `"{TICKER} news {month year}"` (keep)
6. **Analyst sentiment shift**: **WebFetch** `https://finance.yahoo.com/quote/{TICKER}/analysis/` — check estimate revision direction. Cross-check with **WebFetch** `https://www.tipranks.com/stocks/{ticker}/forecast` for consensus shifts.
7. **x.com real-time pulse**: **WebFetch** `https://x.com/search?q=%24{TICKER}&src=typed_query&f=live` — for any position where a catalyst is imminent or where the existing position review reveals a significant development, check x.com cashtag for breaking color.

**Per new pitch:**
1. **Current stock price**: **WebFetch** `https://finance.yahoo.com/quote/{TICKER}/`
2. **Recent developments**: **WebSearch** (keep)
3. **Earnings check**: **WebSearch** (keep)
4. **x.com sentiment check**: **WebFetch** `https://x.com/search?q=%24{TICKER}&src=typed_query&f=live` — for pitches in volatile or event-driven names, check x.com for real-time sentiment before making allocation decisions.

**Step 2: Verify the edit**

Read the file and confirm.

**Step 3: Commit**

```bash
git add .claude/agents/portfolio-manager.md
git commit -m "portfolio-manager: add BarChart VIX, Finviz, FedWatch, TipRanks, x.com sentiment sources"
```

---

## Task 8: Verify all agents are consistent

**Step 1: Review all agent files**

Glob `.claude/agents/*.md` and verify each modified agent has:
- Specific URLs (not generic search patterns) for every fetchable data point
- WebFetch used for structured data sources (Yahoo Finance, FRED, BarChart, SEC EDGAR)
- WebSearch reserved only for unstructured/news queries where no single URL works
- Consistent source choices across agents (same URL patterns for same data types)

**Step 2: Verify Bookkeeper and IR are unchanged**

Confirm `bookkeeper.md` and `investor-relations.md` have no "Current Data Requirement" section (they don't fetch external data).

**Step 3: Final commit**

If any inconsistencies were found and fixed:
```bash
git add .claude/agents/
git commit -m "agents: fix data source consistency across all agent files"
```

---

## Notes

- **Bookkeeper** (`bookkeeper.md`): No changes needed — reads only from `artifacts/portfolio-manager/`, no external data.
- **Investor Relations** (`investor-relations.md`): No changes needed — reads only from `artifacts/portfolio-manager/`, no external data.
- **WebFetch vs. WebSearch**: Use WebFetch when there's a known, stable URL for the data. Use WebSearch only for news, events, and other unstructured information where no single URL reliably has the answer.
- **Fallback pattern**: Each critical data point should have a primary source and at least one fallback. If WebFetch fails on the primary URL, the agent should fall back to a WebSearch with a specific site qualifier (e.g., `site:finance.yahoo.com {TICKER} quote`).
- **x.com usage guidelines**: x.com is for real-time sentiment, breaking developments, and color — not for authoritative financial data. Never use a tweet as the sole source for a price, earnings figure, or financial metric. Use x.com to supplement structured data sources, not replace them. Cashtag searches (`$TICKER`) are more signal-rich than plain-text ticker searches.
- **Source hierarchy**: For any quantitative data point, the priority is: (1) official source (FRED, SEC EDGAR, CBOE), (2) structured financial data provider (Yahoo Finance, BarChart, StockAnalysis), (3) financial media (Seeking Alpha, TipRanks), (4) real-time social (x.com). Never skip level 1/2 and rely on level 3/4 alone.
- **New sources added in this plan**: Finviz (snapshot/heatmap), Macrotrends (historical financials), TipRanks (analyst consensus), Seeking Alpha (earnings transcripts), Earnings Whispers (whisper numbers), WhaleWisdom (13F filings), Dataroma (superinvestor portfolios), OpenInsider (insider transactions), Unusual Whales (options flow), MarketChameleon (IV analytics), CNN Fear & Greed (sentiment), CME FedWatch (rate probabilities), Atlanta Fed GDPNow (real-time GDP), TradingEconomics (macro dashboard), x.com (real-time sentiment & breaking news).
