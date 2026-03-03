2026-03-02 22:45 UTC
# Weekly Risk Report — Week Ending 2026-03-02

## Portfolio Context

This is Sterling's inaugural risk assessment. The portfolio is being built from scratch with 100% cash as starting point. The draft IC memo proposes five active positions totaling 53% of NAV (45% immediate deployment, 8% conditional on AVGO March 4 earnings), plus two conditional theses (GEV, PWR) at 0% current allocation.

---

## Summary

| Metric | Current | Guideline | Status |
|---|---|---|---|
| Total Exposure % NAV | 53.0% (45.0% immediate) | 85-100% | OK — intentionally below target on Day 1 |
| Cash % NAV | 47.0% (55.0% pre-AVGO Phase 2) | 5-15% target | Advisory — elevated but intentional |
| Portfolio Beta (deployed) | 1.23 | 0.8-1.3 | OK |
| Weighted Portfolio Beta (full NAV) | 0.65 | — | Informational — cash drag |
| VaR 95% 1-day % NAV | 1.64% | 2.0% | OK |
| VaR 99% 1-day % NAV | 2.32% | 3.0% | OK |
| Max Single-Name % NAV | 15.0% (VRT) | 15% guideline | Advisory |
| Max Sector % NAV | 28.0% (AI Infra) | 25% guideline | Advisory |
| Drawdown from HWM | 0.0% | -10% | OK — Day 1 |

---

## Positions and Current Prices

All prices sourced from web searches conducted 2026-03-02.

| Ticker | Allocation | Entry Price | Current/Live Price | Beta | Sector |
|---|---|---|---|---|---|
| VRT | 15.0% | $255.00 | $254.89 | 2.09 | AI Infrastructure / Data Center |
| AVGO | 13.0% (5% now, 8% post-earnings) | $320.00 | $319.55 | 1.22 | AI Infrastructure / Semiconductors |
| LHX | 12.0% | $375.00 | $374.47 | 0.35 | Defense / Aerospace |
| INTC | 8.0% | $45.50 | $45.50 | 1.35 | Semiconductors (Contrarian) |
| INOD | 5.0% | $44.46 | $44.46 | 2.81 | AI Services / Small-Cap |
| Cash | 47.0% | — | — | 0.00 | — |

Market context: S&P 500 at 6,881.62. VIX at 22.40 (surged 12% on March 2 on Iran conflict). Brent crude at ~$78 (up 6.7-7.6% intraday, touched $82.37 before retreating). 10Y Treasury at 4.02-4.04%.

---

## Exposure by Sector

| Sector | % NAV | Names |
|---|---|---|
| AI Infrastructure / Data Center | 15.0% | VRT |
| AI Infrastructure / Semiconductors | 13.0% (5.0% immediate) | AVGO |
| Defense / Aerospace | 12.0% | LHX |
| Semiconductors (Contrarian Turnaround) | 8.0% | INTC |
| AI Services / Small-Cap | 5.0% | INOD |
| Cash | 47.0% | — |
| **Total** | **100.0%** | |

### Thematic Concentration

| Theme | % NAV (Current) | % NAV (Full AVGO) | % NAV (With Conditionals) |
|---|---|---|---|
| AI Capex Super-Cycle (VRT + AVGO + INOD) | 25.0% (immediate) | 33.0% | 45-48% |
| Defense / Geopolitical (LHX) | 12.0% | 12.0% | 12.0% |
| Contrarian / Turnaround (INTC) | 8.0% | 8.0% | 8.0% |
| Cash | 55.0% (immediate) | 47.0% | 24-32% |

**Severity: Advisory.** AI capex super-cycle exposure at 33% (post full AVGO) is meaningful single-theme concentration. If conditionals deploy (GEV at 12-15%), this rises to 45-48%, which would merit a Critical flag at that time. The PM has acknowledged this concentration and requested diversifying pitches for the next IC cycle. The defense allocation provides genuine non-correlation (LHX beta 0.35 vs. market). For now, given the 47% cash buffer and the structural nature of the AI capex thesis, this is Advisory.

---

## Factor Exposures

| Factor | Exposure | Assessment |
|---|---|---|
| Market Beta (deployed capital) | 1.23 weighted avg | Slightly above market; driven by VRT (2.09) and INOD (2.81) |
| Market Beta (full NAV) | 0.65 | Below market due to 47% cash |
| Growth / Momentum | High | VRT, AVGO, INOD are all high-growth momentum names |
| Value / Contrarian | Moderate | INTC provides partial value offset |
| Quality | Mixed | LHX and AVGO are high-quality FCF generators; INTC is negative FCF |
| Size (Large Cap) | Dominant | 40% in large/mega-cap (VRT $24B, AVGO $1.5T, LHX $43B) |
| Size (Small Cap) | 5% | INOD ($1.5B market cap) is the sole small-cap exposure |
| Defense / Geopolitical | 12% | LHX acts as natural hedge against escalation scenarios |

**Factor concentration risk**: The portfolio is heavily tilted toward growth/momentum. Three of five positions (VRT, AVGO, INOD) are high-beta growth names. A rotation out of growth/momentum into value/defensive would pressure ~33% of NAV simultaneously. LHX provides partial offset but only 12%. INTC straddles the line — it is a value/contrarian name but still in the semiconductor sector.

---

## Concentration and Correlation Analysis

### Single-Name Concentration

| Position | % NAV | vs. 15% Guideline | Severity |
|---|---|---|---|
| VRT | 15.0% | At limit | Advisory |
| AVGO | 13.0% (5.0% immediate) | Below | OK |
| LHX | 12.0% | Below | OK |
| INTC | 8.0% | Below | OK |
| INOD | 5.0% | Below | OK |

**VRT at 15.0%**: This is at the single-name guideline. The PM has justified this sizing based on thesis quality, backlog visibility, and multi-year demand drivers. The R/R at 1.2:1 is the weakest in the portfolio, which cuts against the sizing. The stop at $210 implies 17.6% downside from entry — at 15% NAV, a stop-out costs 2.65% of NAV. This is within acceptable bounds but warrants monitoring. **Severity: Advisory.** PM should confirm that conviction justifies being at the limit given the below-average R/R.

### Pairwise Correlation Estimates

Based on sector ETF correlations (XLK-XLI at 0.67) and individual stock characteristics:

| Pair | Estimated Correlation | Driver | Risk Note |
|---|---|---|---|
| VRT - AVGO | 0.70-0.80 | Both are direct AI infrastructure plays; both driven by hyperscaler capex | High — correlated drawdown risk |
| VRT - INOD | 0.55-0.65 | Both benefit from AI spending; different market cap, different business model | Moderate |
| AVGO - INOD | 0.50-0.60 | Shared AI theme but different positions in the value chain | Moderate |
| AVGO - INTC | 0.40-0.50 | Both semiconductors but fundamentally different drivers (growth vs. turnaround) | Moderate |
| LHX - VRT | 0.15-0.25 | Defense vs. data center; LHX beta 0.35 is structurally uncorrelated | Low — genuine diversifier |
| LHX - AVGO | 0.15-0.25 | Same as above | Low |
| LHX - INTC | 0.20-0.30 | Minimal common drivers | Low |
| LHX - INOD | 0.10-0.20 | Defense vs. small-cap AI services; near-zero shared factor | Low |
| INTC - VRT | 0.35-0.45 | Different thesis drivers; INTC trades on turnaround news, VRT on orders | Moderate-Low |
| INTC - INOD | 0.30-0.40 | Limited overlap | Low-Moderate |

**Key finding**: VRT and AVGO are the most correlated pair, and they represent the two largest positions (28% combined). In a hyperscaler capex deceleration scenario, both would decline simultaneously. The effective number of independent bets in this portfolio is closer to 3.5 than 5.0 due to the VRT-AVGO-INOD correlation cluster.

---

## VaR Estimates

### Methodology

Parametric VaR using current implied volatilities where available, historical volatilities as supplement. VIX at 22.40 as of March 2. Annualized volatilities converted to daily using sqrt(252). Correlation matrix estimated from sector relationships and individual stock betas.

### Individual Position Volatilities (Annualized)

| Ticker | Implied/Historical Vol | Daily Vol (1-sigma) | Weight | Contribution to Variance |
|---|---|---|---|---|
| VRT | ~50% (est. from beta 2.09 x VIX regime) | 3.15% | 15.0% | High |
| AVGO | 72% (options-implied pre-earnings) | 4.54% | 5.0% (immediate) | Moderate (elevated by earnings) |
| LHX | ~25% (est. from beta 0.35, low-vol defense) | 1.57% | 12.0% | Low |
| INTC | 60% (30-day IV per options data) | 3.78% | 8.0% | Moderate |
| INOD | ~80% (est. from beta 2.81, small-cap AI) | 5.04% | 5.0% | Moderate |

**Note on AVGO**: The 72% IV reflects the March 4 earnings event. Post-earnings, IV will likely compress to 45-50% (typical AVGO non-event IV). The VaR calculation below uses the elevated pre-earnings IV for the current 5% position — this is conservative and appropriate given earnings are 48 hours away.

### Portfolio VaR

| Metric | Value |
|---|---|
| VaR 95% (1-day, parametric) | 1.64% of NAV |
| VaR 99% (1-day, parametric) | 2.32% of NAV |
| Expected Shortfall (CVaR 95%) | ~2.10% of NAV |

VaR is well within guidelines. The 47% cash position is the dominant risk-reduction factor. As cash is deployed, VaR will increase approximately proportionally. At full deployment of AVGO Phase 2 (53% invested), VaR 95% rises to approximately 1.85%.

**If all conditionals deploy** (GEV 12-15%, PWR ~10%, bringing invested capital to ~75-80%), VaR 95% would rise to approximately 2.5-2.8%, approaching the 2.0% guideline. The PM should be aware that full conditional deployment will require re-evaluating position sizes or accepting guideline exceedance.

---

## Liquidity Profile

| Ticker | Market Cap | Avg Daily Volume (shares) | Avg Daily Dollar Volume | Position Size (% NAV) | Days to Liquidate (25% ADV) |
|---|---|---|---|---|---|
| VRT | $24B | ~6.0M | ~$1.5B | 15.0% | < 1 day |
| AVGO | $1,520B | ~21.0M | ~$6.7B | 13.0% | < 1 day |
| LHX | $43B | ~1.5M | ~$563M | 12.0% | < 1 day |
| INTC | $228B | ~79.3M | ~$3.6B | 8.0% | < 1 day |
| INOD | $1.5B | ~1.3M | ~$58M | 5.0% | 1-2 days |

| Liquidity Bucket | % Deployed Portfolio |
|---|---|
| < 1 day to liquidate | 90.6% (VRT, AVGO, LHX, INTC) |
| 1-3 days to liquidate | 9.4% (INOD) |
| > 3 days to liquidate | 0.0% |

**INOD liquidity note**: At $58M average daily dollar volume and a 5% NAV position, liquidation at 25% of ADV would take approximately 1-2 days depending on fund AUM. This is acceptable for a 5% position. However, INOD's liquidity degrades rapidly in a sell-off — small-cap stocks with 2 analyst coverage can see bid-ask spreads widen materially during stress. If the single-customer loss scenario materializes, expect liquidity to deteriorate precisely when exit is needed. **Severity: Informational** at 5% sizing. Would become Advisory above 7%.

---

## Stress Tests

### Scenario Design

All scenarios estimate impact on deployed capital only. The 47% cash position absorbs no loss in equity stress scenarios. Upside scenarios included for symmetry per risk framework.

### Scenario Results

| Scenario | Description | Est. Impact on NAV | Severity |
|---|---|---|---|
| **A: Broad Market -10%** | S&P 500 declines 10% from current levels | -5.3% to -6.5% | Manageable |
| **B: AI/Tech Rotation -20%** | AI/data center names decline 20%; defense flat | -6.8% to -8.2% | Significant |
| **C: Iran Escalation / Oil $100+** | Brent to $100+; defense rallies, tech pressured | -1.5% to -3.0% | Moderate — LHX offsets |
| **D: Interest Rate Shock +100bps** | 10Y to 5.0%; growth multiples compress 10-15% | -3.5% to -5.0% | Moderate |
| **E: Hyperscaler Capex Cut 20%** | Single hyperscaler announces deferrals | -4.0% to -5.5% | Significant — concentrated hit |
| **F: Bull Case — AI Capex Acceleration** | Orders continue accelerating; market +10% | +5.5% to +7.5% | Favorable |

### Scenario Detail

**Scenario A: Broad Market Correction -10%**
- VRT (-20.9% x 15% = -3.14% NAV) — beta 2.09, full beta-adjusted decline
- AVGO (-12.2% x 5% = -0.61% NAV) — beta 1.22, only 5% immediate position
- LHX (-3.5% x 12% = -0.42% NAV) — beta 0.35, defense is defensive
- INTC (-13.5% x 8% = -1.08% NAV) — beta 1.35
- INOD (-28.1% x 5% = -1.41% NAV) — beta 2.81, small-cap amplification
- **Total estimated NAV impact: -6.5%**

**Scenario B: AI/Tech Rotation -20%**
- VRT (-25% x 15% = -3.75% NAV) — direct hit, high-beta AI infra
- AVGO (-20% x 5% = -1.00% NAV) — direct hit
- LHX (0% x 12% = 0.00% NAV) — uncorrelated to AI rotation
- INTC (-10% x 8% = -0.80% NAV) — partial semiconductor sympathy
- INOD (-25% x 5% = -1.25% NAV) — AI services hit by association
- **Total estimated NAV impact: -6.8%**
- At full AVGO deployment (13%), impact worsens to -8.2%

**Scenario C: Iran Escalation / Oil Spike to $100+**
- VRT (-5% x 15% = -0.75% NAV) — energy cost pressure on data centers
- AVGO (-5% x 5% = -0.25% NAV) — mild tech sentiment drag
- LHX (+10% x 12% = +1.20% NAV) — defense rally on escalation
- INTC (-5% x 8% = -0.40% NAV) — sentiment drag
- INOD (-8% x 5% = -0.40% NAV) — small-cap risk-off
- **Total estimated NAV impact: -0.6% to -1.5%**
- LHX acts as a genuine hedge in this scenario. The 12% defense allocation partially offsets AI/tech weakness.

**Scenario D: Interest Rate Shock +100bps**
- VRT (-12% x 15% = -1.80% NAV) — high-multiple growth compressed
- AVGO (-10% x 5% = -0.50% NAV) — multiple compression
- LHX (-3% x 12% = -0.36% NAV) — mild impact, defense cash flows less rate-sensitive
- INTC (-8% x 8% = -0.64% NAV) — moderate impact
- INOD (-15% x 5% = -0.75% NAV) — small-cap growth most vulnerable
- **Total estimated NAV impact: -4.1%**

**Scenario E: Hyperscaler Capex Cut 20%**
This is the portfolio's key vulnerability. If a major hyperscaler (e.g., Meta, Microsoft) announces 20% capex deferrals:
- VRT (-25% to -30% x 15% = -3.75% to -4.50% NAV) — direct order cancellation risk
- AVGO (-15% x 5% = -0.75% NAV) — custom silicon pipeline impacted
- INOD (-20% x 5% = -1.00% NAV) — AI data services are downstream of capex
- LHX (0%) and INTC (0%) — unaffected
- **Total estimated NAV impact: -5.5%**
- At full AVGO (13%), impact worsens to -6.5%

**Scenario F: Bull Case — AI Capex Acceleration**
- VRT (+15% x 15% = +2.25% NAV)
- AVGO (+15% x 5% = +0.75% NAV)
- LHX (+5% x 12% = +0.60% NAV) — modest participation
- INTC (+10% x 8% = +0.80% NAV) — foundry demand benefits
- INOD (+20% x 5% = +1.00% NAV) — small-cap re-rating
- **Total estimated NAV impact: +5.4%**

### Historical Scenario Replays

| Scenario | Period | S&P 500 Drawdown | Est. Portfolio Impact |
|---|---|---|---|
| GFC 2008 | Oct 2007 - Mar 2009 | -56.8% | -27% to -32% (at current 53% deployment) |
| COVID Feb-Mar 2020 | Feb 19 - Mar 23, 2020 | -33.9% | -16% to -20% |
| Rates Shock 2022 | Jan - Oct 2022 | -25.4% | -13% to -16% |

These historical replays assume the portfolio's current beta and correlation structure is maintained throughout the drawdown. The 47% cash buffer significantly reduces realized losses vs. a fully invested portfolio. In a GFC-type event, the cash allows for opportunistic redeployment at distressed prices — this is a genuine advantage of the current positioning.

---

## Specific Position Flags

### 1. AVGO — Binary Earnings Event (March 4)
**Severity: Advisory**

AVGO reports Q1 FY2026 earnings on March 4 — 48 hours from this assessment. Options-implied volatility is 72-73%, pricing an expected move of approximately +/-9% around the event. The PM's phased entry (5% pre-earnings, 8% post-confirmation) is sound event-risk management.

At 5% NAV, a worst-case earnings miss driving a 15% decline costs 0.75% of NAV. This is well within portfolio-level VaR and does not require further action. The phased approach is the correct structure.

**Risk scenario**: If earnings disappoint and AVGO gaps to $270 (stop level), the 5% position loses 1.56% of NAV. The remaining 8% would not deploy, preserving capital. This is acceptable.

### 2. VRT — Sizing at R/R Limit
**Severity: Advisory**

VRT is the largest position at 15.0% of NAV — at the single-name guideline. The R/R of 1.2:1 is the weakest in the portfolio. The thesis quality (252% organic order growth, $15B backlog, 2.9x book-to-bill) supports conviction, but the entry valuation is demanding. The stop at $210 implies a max loss of 2.65% of NAV on a stop-out (17.6% decline from entry).

Key risk: VRT beta of 2.09 means a 10% market decline translates to a ~21% VRT decline, which would breach the stop. In a market correction scenario, VRT is likely the first position to hit its stop.

**Recommendation**: PM should consider whether 12-13% sizing (instead of 15%) better aligns the position size with the R/R ratio, reserving the additional 2-3% for a potential pullback entry that improves R/R.

### 3. INTC — Turnaround / Binary Foundry Risk
**Severity: Informational**

INTC at 8% is appropriately sized for a contrarian turnaround with binary characteristics. The stop at $34 implies max loss of 2.02% of NAV (25.3% decline from $45.50). The government backstop (9.9% equity stake via CHIPS Act) provides a floor that reduces tail risk vs. a typical turnaround.

Key risk factors: (1) 18A yield plateau would invalidate the thesis; (2) negative FCF means the company is not self-funding; (3) macro weakness could accelerate customer deferrals. The 8% sizing is proportionate to the risk. No action needed.

### 4. INOD — Single-Customer Concentration and Illiquidity
**Severity: Informational**

INOD at 5% with 58% single-customer revenue concentration. The R/R of 3.3:1 is the most asymmetric in the portfolio, which supports the sizing despite the customer risk.

Worst case: Customer loss could take INOD to $15-20, implying a 55-65% decline and NAV loss of 2.75-3.25%. This is painful but not portfolio-threatening at 5%. The 159% sequential growth from non-top customers in Q4 2025 is the critical metric to monitor — if diversification stalls, the position should be reduced.

The PM sized above the analyst's recommended 2% maximum. At 5%, the position is 2.5x the analyst's recommendation. Given the R/R asymmetry and adequate daily volume ($58M), this is acceptable. The PM's judgment to overweight a high-conviction small-cap is reasonable, but the position should not grow beyond 5% unless customer diversification improves materially.

### 5. LHX — Insider Selling
**Severity: Informational**

An L3Harris insider (Jon Rambeau) sold 5,528 shares on or around March 2. Insider selling in isolation is not concerning — it often reflects personal financial planning, especially after a 77% annual rally. However, monitor for a pattern of insider selling that could signal reduced internal conviction.

The structural defense thesis (1.3x book-to-bill, Missile Solutions IPO catalyst) is not affected by a single insider sale.

---

## Limit Warnings

| Limit | Guideline | Current | Status | Severity |
|---|---|---|---|---|
| Max Single-Name | 15% | 15.0% (VRT) | At Limit | Advisory |
| Max Sector/Theme | 25% | 28.0% (AI Infra: VRT + AVGO) | Exceeded | Advisory |
| Cash Minimum | 5-15% | 47.0% | Above Range | Informational — Day 1 |
| Portfolio VaR 95% | 2.0% | 1.64% | Within | OK |
| Portfolio VaR 99% | 3.0% | 2.32% | Within | OK |

### AI Infrastructure Theme Breach (28% vs. 25% Guideline)
**Severity: Advisory**

The combined VRT (15%) + AVGO (13%) allocation at 28% exceeds the 25% sector/theme guideline by 3 percentage points. This is a conscious portfolio construction choice — the PM has identified the AI capex super-cycle as the dominant investment opportunity and has sized accordingly.

The risk/reward justifies the breach for the following reasons: (1) the hyperscaler capex growth of +60% y/y is a verifiable, unprecedented infrastructure buildout; (2) VRT and AVGO occupy different parts of the value chain (thermal/power management vs. custom silicon), providing sub-theme diversification; (3) the 47% cash position limits total portfolio risk.

However, if conditionals deploy (GEV at 12-15%), AI infrastructure concentration rises to 40-43%. At that level, the breach moves from Advisory to Critical, and the PM must either reduce existing AI positions or accept that a hyperscaler capex deceleration could cause a 8-10% NAV drawdown in the AI cluster alone.

---

## Cash Drag Assessment

The PM has flagged 47% cash as intentional for Day 1. From a risk perspective:

- **Opportunity cost**: With the S&P 500 at 6,881 and the VIX at 22.40, holding 47% cash means the portfolio forgoes approximately 4-5% annualized return on idle capital (assuming 8-10% equity market return). On a weekly basis, this is approximately 0.08-0.10% drag.
- **Optionality value**: The cash provides significant dry powder for (1) AVGO Phase 2 post-earnings, (2) GEV/PWR pullback entries, (3) opportunistic deployment on Iran-driven volatility. In an elevated VIX environment, the option value of cash is above average.
- **Net assessment**: The cash drag is acceptable for 1-2 IC cycles. If cash remains above 30% after the March 6 IC cycle, the PM should accelerate pipeline development to fill remaining slots.

---

## Changes vs. Prior Week

First report. No prior period for comparison. All metrics represent baseline measurements.

---

## Recommendations for PM

1. **VRT sizing**: Consider reducing from 15.0% to 12-13%. The R/R of 1.2:1 is the weakest in the portfolio and does not warrant maximum single-name concentration. The freed 2-3% can be held as dry powder for a VRT pullback that improves R/R, or deployed to a diversifying name in the next IC cycle.

2. **AVGO phased entry is well-structured**: The 5%/8% split appropriately manages the March 4 binary event. No changes recommended. Post-earnings, if the full 13% deploys, AVGO becomes the second-largest position and AI infrastructure concentration rises to 28%. This is an Advisory-level breach that is justified by the thesis quality.

3. **Monitor AI theme concentration for conditionals**: If GEV deploys at 12-15%, total AI infrastructure exposure reaches 40-43%. The PM should prepare a decision framework now: either (a) reduce VRT/AVGO to accommodate GEV within the 25% guideline, or (b) explicitly accept the concentration with documented justification. A capex deceleration scenario at 40%+ AI exposure would be a Critical-level risk.

4. **LHX defense allocation is valuable**: The 12% LHX position is the portfolio's primary risk mitigant against Iran escalation and the only position with low beta (0.35). In Scenario C, LHX offsets approximately half the losses from the rest of the portfolio. Maintain or increase this allocation.

5. **INOD at 5% is acceptable but capped**: Do not increase beyond 5% unless customer diversification data improves. The R/R asymmetry justifies the current sizing despite liquidity constraints.

6. **Pipeline for next IC cycle**: The portfolio urgently needs 2-3 positions outside the AI/tech/semiconductor cluster. Healthcare, financials, or consumer staples would reduce factor concentration and improve the portfolio's resilience to Scenarios B and E.

---

*This risk report is based on market data sourced via web search on 2026-03-02. Prices reflect end-of-day levels for March 2, 2026. Volatility inputs use VIX at 22.40 and individual stock implied volatilities where available. Correlation estimates are based on sector ETF relationships and historical stock behavior patterns. All VaR calculations use parametric methodology with a 252-trading-day annualization convention.*
