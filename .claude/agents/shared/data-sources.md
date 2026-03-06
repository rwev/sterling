# Shared Data Sources

This file is read by agents at startup. Apply only the tiers listed in your agent's Startup section.

## Preamble

Before writing any output, you MUST use WebFetch and WebSearch to collect current data. Never rely on memorized or training-data prices, financials, or news. Every data point must be sourced from a fetch or search performed during this session. If any data point cannot be confirmed as current (within 1–2 trading days), state the source date explicitly.

## Core Equity Sources

Used by: long-analyst, contrarian-analyst, growth-analyst, smallcap-analyst, thesis-reviewer

Per ticker, collect:

1. **Current stock price**: WebFetch `https://finance.yahoo.com/quote/{TICKER}/`
2. **Snapshot**: WebFetch `https://finviz.com/quote.ashx?t={TICKER}` — multiples, technicals, performance, analyst target.
3. **Latest earnings**: WebFetch `https://seekingalpha.com/symbol/{TICKER}/earnings` for transcripts and analysis. Cross-check with WebFetch `https://www.earningswhispers.com/stocks/{ticker}` for whisper numbers and beat/miss history.
4. **Recent news & catalysts**: WebSearch `"{TICKER} news {current month and year}"` for material developments (2–4 weeks). Also WebFetch `https://stockanalysis.com/stocks/{ticker}/` for headlines.
5. **x.com cashtag**: WebFetch `https://x.com/search?q=%24{TICKER}&src=typed_query&f=live` — breaking developments, sentiment, earnings reactions. Also check the company's official x.com handle.
6. **Analyst estimates**: WebFetch `https://finance.yahoo.com/quote/{TICKER}/analysis/` — consensus revenue, EPS, revision trends. Cross-reference with WebFetch `https://www.tipranks.com/stocks/{ticker}/forecast`.
7. **Valuation multiples**: WebFetch `https://finance.yahoo.com/quote/{TICKER}/key-statistics/` — P/E, EV/EBITDA, P/S, P/B.
8. **Historical financials**: WebFetch `https://www.macrotrends.net/stocks/charts/{TICKER}/{name}/revenue` — long-term revenue, margin, return trends.
9. **SEC filings**: WebFetch `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK={TICKER}&type=10-&dateb=&owner=include&count=10` — most recent 10-K/10-Q.
10. **IV and options**: WebFetch `https://www.barchart.com/stocks/quotes/{TICKER}/volatility-greeks` — IV rank, IV percentile.
11. **Institutional ownership**: WebFetch `https://whalewisdom.com/stock/{ticker}` — 13F filings, recent additions/reductions.

## Contrarian Extras

Used by: contrarian-analyst (in addition to Core Equity Sources)

12. **Short interest**: WebFetch `https://www.barchart.com/stocks/quotes/{TICKER}/short-interest` — days to cover, short % of float, trend. High short interest with improving fundamentals is the contrarian signal.
13. **Superinvestor positioning**: WebFetch `https://www.dataroma.com/m/stock.php?sym={TICKER}` — check if known value investors (Buffett, Klarman, Einhorn, etc.) have positions.
14. **x.com bear case pulse**: WebFetch `https://x.com/search?q=%24{TICKER}%20short%20OR%20bearish%20OR%20sell&src=typed_query&f=live` — understand the consensus bear case to sharpen the rebuttal.

## Growth Extras

Used by: growth-analyst (in addition to Core Equity Sources)

12. **Quarterly financials for sequential growth**: WebFetch `https://finance.yahoo.com/quote/{TICKER}/financials/` and WebFetch `https://stockanalysis.com/stocks/{ticker}/financials/?p=quarterly` — QoQ and YoY revenue growth rates.
13. **Options flow around catalysts**: WebFetch `https://unusualwhales.com/stock/{TICKER}` — unusual call buying ahead of earnings or product events.

## Small-Cap Extras

Used by: smallcap-analyst (in addition to Core Equity Sources)

12. **Insider activity**: WebFetch `http://openinsider.com/search?q={TICKER}` — cluster buys by multiple insiders are the strongest signal.
13. **Short interest**: WebFetch `https://www.barchart.com/stocks/quotes/{TICKER}/short-interest` — >5 days to cover in a small-cap is significant.
14. **Superinvestor screening**: WebFetch `https://www.dataroma.com/m/stock.php?sym={TICKER}`
15. **x.com small-cap community**: WebFetch `https://x.com/search?q=from%3AMicroCapClub&src=typed_query&f=live` — under-followed ideas. Low tweet volume on the cashtag confirms undiscovered status. Also check CEO's personal x.com handle.

## Macro Sources

Used by: macro-research

1. **Market levels**:
   - WebFetch `https://finance.yahoo.com/quote/%5EGSPC/` (S&P 500)
   - WebFetch `https://finance.yahoo.com/quote/%5EIXIC/` (Nasdaq)
   - WebFetch `https://finance.yahoo.com/quote/%5ERUT/` (Russell 2000)
   - WebFetch `https://finance.yahoo.com/quote/%5EDJI/` (Dow)
   - WebFetch `https://finviz.com/map.ashx` (heatmap)

2. **Rates & credit**:
   - WebFetch `https://fred.stlouisfed.org/series/DGS10` (10Y)
   - WebFetch `https://fred.stlouisfed.org/series/DGS2` (2Y)
   - WebFetch `https://fred.stlouisfed.org/series/DFEDTARU` (Fed Funds)
   - WebFetch `https://fred.stlouisfed.org/series/BAMLH0A0HYM2` (HY OAS)
   - WebFetch `https://fred.stlouisfed.org/series/BAMLC0A0CM` (IG OAS)
   - WebFetch `https://fred.stlouisfed.org/series/T10Y2Y` (10Y-2Y spread)
   - WebFetch `https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html` (FedWatch)

3. **Economic indicators**:
   - WebFetch `https://fred.stlouisfed.org/series/GDP`
   - WebFetch `https://www.atlantafed.org/cqer/research/gdpnow` (GDPNow)
   - WebFetch `https://fred.stlouisfed.org/series/CPIAUCSL` (CPI)
   - WebFetch `https://fred.stlouisfed.org/series/PCEPILFE` (Core PCE)
   - WebFetch `https://fred.stlouisfed.org/series/UNRATE`
   - WebFetch `https://fred.stlouisfed.org/series/ICSA` (Initial claims)
   - WebFetch `https://tradingeconomics.com/united-states/indicators`

4. **VIX & sentiment**:
   - WebFetch `https://www.barchart.com/stocks/quotes/$VIX/overview` — do NOT use a generic search
   - WebFetch `https://www.cnn.com/markets/fear-and-greed`

5. **Sector performance**:
   - WebFetch `https://www.barchart.com/stocks/sectors/performance`
   - WebFetch `https://finviz.com/groups.ashx?g=sector&v=210&o=name`
   - Sector ETFs via `https://finance.yahoo.com/quote/{ETF}/` for XLK, XLE, XLF, XLV, XLI, XLU, XLB, XLC, XLY, XLP, XLRE as needed

6. **x.com macro feeds**:
   - WebFetch `https://x.com/search?q=from%3ANickTimiraos&src=typed_query&f=live` (Fed)
   - WebFetch `https://x.com/search?q=from%3ALizAnnSonders&src=typed_query&f=live` (macro)
   - WebFetch `https://x.com/search?q=from%3AMacroAlf&src=typed_query&f=live` (rates/credit)

7. **Recent macro news**: WebSearch for FOMC calendar, Treasury auction schedule, BLS release calendar.

## Risk Sources

Used by: risk-manager

1. **VIX**: WebFetch `https://www.barchart.com/stocks/quotes/$VIX/overview`. Cross-ref with WebFetch `https://stockanalysis.com/quote/cboe/VIX/`. Use CBOE-sourced figure if values disagree. Do NOT use generic search.
2. **IV per position**: WebFetch `https://www.barchart.com/stocks/quotes/{TICKER}/volatility-greeks` for each position. Supplement with WebFetch `https://marketchameleon.com/Overview/{TICKER}/IV/`.
3. **Options flow (elevated-IV positions)**: WebFetch `https://unusualwhales.com/stock/{TICKER}` for positions with elevated IV rank.
4. **Credit spreads**: WebFetch `https://fred.stlouisfed.org/series/BAMLH0A0HYM2` (HY) and `https://fred.stlouisfed.org/series/BAMLC0A0CM` (IG).
5. **Fed expectations**: WebFetch `https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html`
6. **Prices per position**: WebFetch `https://finance.yahoo.com/quote/{TICKER}/` and `https://finviz.com/quote.ashx?t={TICKER}` for each position.
7. **Sector ETFs**: WebFetch `https://www.barchart.com/stocks/sectors/performance`
8. **Sentiment**: WebFetch `https://www.cnn.com/markets/fear-and-greed`
9. **x.com vol commentary**: WebFetch `https://x.com/search?q=from%3Aspotgamma&src=typed_query&f=live` and `https://x.com/search?q=%24VIX&src=typed_query&f=live` during elevated-vol regimes.
10. **x.com per-position (Advisory/Critical only)**: WebFetch `https://x.com/search?q=%24{TICKER}&src=typed_query&f=live` for flagged positions.
11. **Drawdown research**: WebSearch `"{TICKER} stock decline reason {current month}"` for any position showing significant decline.
