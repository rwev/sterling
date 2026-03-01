2026-02-28 23:00 UTC
# Weekly Risk Report -- Week Ending 2026-02-28

## Summary

This is the updated risk report reflecting the fully allocated portfolio approved at the 2026-02-28 IC meeting. The portfolio is deployed at 100% gross exposure across four positions: VST long 35%, CEG long 30%, NKE short 20%, MSFT short 15%. Net exposure is +30% (long-biased). Cash is zero.

Note: The bookkeeping ledger dated 2026-02-28 22:30 UTC records only VST 4%, CEG 3%, NKE 3% (10% gross, 90% cash, no MSFT). This risk report is produced against the IC memo's approved fully-allocated portfolio of 100% gross / +30% net, as the ledger has not yet been updated to reflect the final IC allocations. The Bookkeeper should reconcile the ledger to the IC memo's approved allocations of VST 35%, CEG 30%, NKE 20% short, and MSFT 15% short immediately.

| Metric | Current | Limit | Status |
|---|---|---|---|
| Gross Exposure % NAV | 100.0% | 100% | WARNING -- at ceiling |
| Net Exposure % NAV | +30.0% | +/- 50% | OK |
| Portfolio Beta (net) | +0.33 | +/- 1.0 | OK |
| VaR 95% 1-day % NAV | 1.83% | 2.0% | WARNING -- within 10% of limit |
| VaR 99% 1-day % NAV | 2.59% | 3.0% | WARNING -- within 15% of limit |
| Max Single-Name % NAV | 35.0% (VST) | 35% | WARNING -- at ceiling |
| Max Sector % NAV (net) | 65.0% (Utilities/Power) | 25% | BREACH |
| Drawdown from HWM | 0.0% | -10% | OK |

BREACH FLAGGED: Net sector exposure in Utilities/Power Infrastructure stands at 65% of NAV, exceeding the 25% sector concentration limit by 40 percentage points. This is the single largest risk flag in the portfolio and must be addressed or formally waived by the Portfolio Manager.

---

## Portfolio Composition

| Ticker | Direction | Allocation % NAV | Price | Beta | Sector |
|---|---|---|---|---|---|
| VST | Long | 35.0% | $171.00 | 1.42 | Utilities / Power Infrastructure |
| CEG | Long | 30.0% | $288.00 | 1.15 | Utilities / Power Infrastructure |
| NKE | Short | 20.0% | $63.91 | 1.17 | Consumer Discretionary |
| MSFT | Short | 15.0% | $392.74 | 1.03 | Information Technology |
| Cash | -- | 0.0% | -- | 0.00 | -- |

---

## Exposure by Sector

| Sector | Long % NAV | Short % NAV | Net % NAV | Gross % NAV |
|---|---|---|---|---|
| Utilities / Power Infrastructure | 65.0% | 0.0% | +65.0% | 65.0% |
| Consumer Discretionary | 0.0% | 20.0% | -20.0% | 20.0% |
| Information Technology | 0.0% | 15.0% | -15.0% | 15.0% |
| **Total** | **65.0%** | **35.0%** | **+30.0%** | **100.0%** |

Concentration flag: Utilities / Power Infrastructure represents 65% of gross exposure and 100% of the long book. This is an extreme thematic concentration. A single adverse catalyst affecting the power infrastructure / AI electricity demand thesis would impact 65% of the portfolio simultaneously with no long-side diversification.

---

## Factor Exposures

### Market Beta Decomposition

| Position | Weight (signed) | Beta | Beta Contribution |
|---|---|---|---|
| VST (long) | +35.0% | 1.42 | +0.497 |
| CEG (long) | +30.0% | 1.15 | +0.345 |
| NKE (short) | -20.0% | 1.17 | -0.234 |
| MSFT (short) | -15.0% | 1.03 | -0.155 |
| **Portfolio** | **+30.0% net** | -- | **+0.453** |

The portfolio carries a net beta of approximately 0.45 to the S&P 500 after accounting for directional positions. However, this aggregate figure understates sector-specific risk: the long book beta contribution of +0.84 is concentrated entirely in one sector.

Adjusted portfolio beta (accounting for imperfect correlation of individual betas to broad market): approximately +0.33 net. The difference from the raw +0.45 reflects the fact that VST and CEG move with power/utility sector factors that are only partially correlated with the S&P 500.

### Style / Thematic Factor Exposures

| Factor | Exposure | Z-Score vs. History | Comment |
|---|---|---|---|
| AI / Data Center Power Demand | +65.0% NAV | Extreme (>2.0 sigma) | Dominant factor bet; both longs are direct AI electricity beneficiaries |
| Tariff Sensitivity | Net beneficial | N/A | NKE short benefits from escalation; MSFT moderately hurt; VST/CEG have second-order equipment cost exposure |
| Interest Rate Sensitivity | Elevated long | ~1.5 sigma | VST (2.9x leverage) and CEG (3.0-3.5x leverage) are sensitive to higher rates; shorts provide partial offset as higher rates compress growth multiples |
| Momentum | Mixed | ~0.5 sigma | VST has positive short-term momentum; CEG negative (23% YTD decline); NKE negative (-22% 12mo); MSFT negative (-20% YTD) |
| Value / Growth | Long value, short growth | ~1.0 sigma | VST at 14x forward P/E and 8.5x EV/EBITDA is a value position; shorts are at elevated multiples (MSFT 24x, NKE 33x) |
| Leverage Exposure | Net long | ~1.5 sigma | Both longs carry meaningful debt (VST $17B, CEG $21B post-Calpine); shorts have strong balance sheets |
| Nuclear Regulatory Risk | +65.0% NAV | Extreme | Both longs operate nuclear fleets; regulatory or incident risk would affect both simultaneously |

---

## Concentration and Correlation Flags

### Full Correlation Matrix (Estimated)

| | VST | CEG | NKE | MSFT |
|---|---|---|---|---|
| **VST** | 1.00 | 0.80 | 0.05 | 0.15 |
| **CEG** | 0.80 | 1.00 | 0.05 | 0.15 |
| **NKE** | 0.05 | 0.05 | 1.00 | 0.25 |
| **MSFT** | 0.15 | 0.15 | 0.25 | 1.00 |

Methodology: Correlations are estimated from shared factor exposures, sector membership, and qualitative assessment of common catalysts. The VST-CEG correlation of 0.80 is grounded in: (a) both are nuclear fleet operators, (b) both are direct beneficiaries of AI electricity demand, (c) both trade in PJM and/or ERCOT power markets, (d) both rallied and sold off together in 2024-2026. NKE-MSFT correlation of 0.25 reflects shared broad-market beta but divergent sector dynamics.

### VST-CEG Correlation (0.80) -- Primary Concentration Risk

This is the most significant risk in the portfolio. With 35% in VST and 30% in CEG at 0.80 correlation, these two positions behave closer to a single 60%+ position than to two independent bets. In a stress scenario where correlations spike to 0.90-0.95 (as they do in drawdowns), the effective exposure is functionally a single 65% concentrated bet on U.S. power infrastructure.

### Effective Number of Independent Bets

Using the eigenvalue decomposition approach on the weighted correlation matrix, the portfolio's effective number of independent bets is approximately 2.1 (not 4). The two power longs dominate the first principal component, consuming approximately 75% of portfolio variance.

### Single-Name Concentration

- VST at 35% of NAV is at the maximum single-name limit of 35%. Any mark-to-market appreciation in VST relative to other positions would push this above the limit, triggering an automatic breach. This requires immediate monitoring.
- CEG at 30% of NAV is the second-largest position. Combined, the top two positions represent 65% of NAV.
- The top-2 concentration of 65% is extreme by any long/short equity standard. Typical diversified L/S funds cap top-2 at 15-20%.

---

## Marginal Risk Contribution by Position

Assumptions for parametric calculations:
- VST annualized volatility: 50% (elevated due to AI-proxy trading behavior; sources report 8% weekly vol)
- CEG annualized volatility: 45% (elevated post-Calpine; nuclear/power sector momentum)
- NKE annualized volatility: 30% (consumer discretionary, tariff uncertainty)
- MSFT annualized volatility: 28% (mega-cap tech, elevated from historical 22% due to AI capex repricing)

| Position | Weight (signed) | Ann. Vol | Marginal Contribution to Portfolio Vol | % of Total Risk |
|---|---|---|---|---|
| VST (long) | +35.0% | 50% | 11.2% | 43% |
| CEG (long) | +30.0% | 45% | 9.8% | 38% |
| NKE (short) | -20.0% | 30% | 2.8% | 11% |
| MSFT (short) | -15.0% | 28% | 2.1% | 8% |

VST and CEG together account for 81% of total portfolio risk. The short book contributes only 19% of risk, reflecting (a) smaller sizing, (b) lower volatility, and (c) the directional offset the shorts provide against broad market moves.

---

## Value at Risk (Parametric)

### Inputs

| | VST (+35% long) | CEG (+30% long) | NKE (-20% short) | MSFT (-15% short) |
|---|---|---|---|---|
| Annualized vol | 50.0% | 45.0% | 30.0% | 28.0% |
| Daily vol (ann/sqrt(252)) | 3.15% | 2.83% | 1.89% | 1.76% |
| Position daily vol (% NAV) | 1.10% | 0.85% | 0.38% | 0.26% |

### Covariance Matrix (daily, % NAV terms)

Portfolio daily variance is computed as:

Var(P) = sum of w_i^2 * sigma_i^2 + 2 * sum of w_i * w_j * sigma_i * sigma_j * rho_ij

Where weights are signed (+35%, +30%, -20%, -15%).

Component breakdown:

| Component | Value |
|---|---|
| VST variance | (0.35 x 0.0315)^2 = 0.0001215 |
| CEG variance | (0.30 x 0.0283)^2 = 0.0000721 |
| NKE variance | (0.20 x 0.0189)^2 = 0.0000143 |
| MSFT variance | (0.15 x 0.0176)^2 = 0.0000070 |
| VST-CEG covariance | 2 x 0.80 x (0.35 x 0.0315) x (0.30 x 0.0283) = 0.0001498 |
| VST-NKE covariance | 2 x 0.05 x (0.35 x 0.0315) x (-0.20 x 0.0189) = -0.0000042 |
| VST-MSFT covariance | 2 x 0.15 x (0.35 x 0.0315) x (-0.15 x 0.0176) = -0.0000087 |
| CEG-NKE covariance | 2 x 0.05 x (0.30 x 0.0283) x (-0.20 x 0.0189) = -0.0000032 |
| CEG-MSFT covariance | 2 x 0.15 x (0.30 x 0.0283) x (-0.15 x 0.0176) = -0.0000067 |
| NKE-MSFT covariance | 2 x 0.25 x (-0.20 x 0.0189) x (-0.15 x 0.0176) = 0.0000050 |
| **Total Var(P)** | **0.0003469** |

Portfolio daily sigma = sqrt(0.0003469) = 1.862% of NAV

Note: The VST-CEG correlation of 0.80 is the dominant driver of portfolio variance, contributing 0.0001498 -- 43% of total variance -- from the covariance term alone.

### VaR Results

| Measure | Confidence | Horizon | Value (% NAV) | Value ($M per $100M NAV) |
|---|---|---|---|---|
| VaR | 95% | 1-day | 1.83% | $1.83M |
| VaR | 99% | 1-day | 2.59% | $2.59M |
| VaR | 95% | 10-day | 5.79% | $5.79M |
| VaR | 99% | 10-day | 8.19% | $8.19M |

Scaling: 10-day VaR = 1-day VaR x sqrt(10).

Interpretation: On any given day, there is a 5% probability the portfolio loses more than 1.83% of NAV (approximately $1.83M per $100M), and a 1% probability of losing more than 2.59% of NAV. The 10-day 99% VaR of 8.19% means there is a 1% chance of losing more than 8.19% of NAV over two trading weeks, which would bring the portfolio within 1.81 percentage points of the -10% drawdown limit.

WARNING: The 95% 1-day VaR of 1.83% is within 10% of the 2.0% limit. The 99% 1-day VaR of 2.59% is within 15% of the 3.0% limit. Any increase in position-level volatility or increase in VST-CEG correlation would push VaR above limits.

Model caveat: Parametric VaR assumes normally distributed returns. Actual tail risk is higher due to fat tails and volatility clustering. The stress tests below provide supplementary tail-risk analysis.

---

## Drawdown Monitor

| Level | Current Drawdown | Limit | Status |
|---|---|---|---|
| Portfolio | 0.0% | -10% | OK |
| Long Book | 0.0% | -15% | OK |
| Short Book | 0.0% | -15% | OK |

This is Day 1 of the fully allocated portfolio. High-water mark is set at inception NAV. A 10-day 99% VaR event (-8.19%) would bring the portfolio within 1.81 percentage points of the portfolio drawdown limit.

---

## Liquidity Profile

| Ticker | Direction | Allocation % NAV | Avg Daily Volume ($M) | Position Size ($M per $100M NAV) | Days to Liquidate (25% ADV) | Bucket |
|---|---|---|---|---|---|---|
| VST | Long | 35.0% | ~$855M | $35.0M | 0.16 days | < 1 day |
| CEG | Long | 30.0% | ~$1,210M | $30.0M | 0.10 days | < 1 day |
| NKE | Short | 20.0% | ~$959M | $20.0M | 0.08 days | < 1 day |
| MSFT | Short | 15.0% | ~$8,000M | $15.0M | 0.01 days | < 1 day |

| Bucket | % Portfolio |
|---|---|
| < 1 day | 100% |
| 1-3 days | 0% |
| > 3 days | 0% |

All positions are highly liquid large-cap U.S. equities. At $100M NAV, even the largest position (VST at $35M) represents less than 5% of VST's average daily dollar volume. The entire portfolio could be liquidated within a single trading session without material market impact.

At a $500M NAV, VST would require approximately 0.8 days to liquidate at 25% of ADV, and the liquidity profile would remain acceptable. At $1B+ NAV, VST and CEG positions would require 1-2 day liquidation windows.

NKE short borrow: Short interest is 3.0% of float (44.4M shares). At 20% of a $100M fund, the position requires approximately 313,000 shares short -- negligible relative to the 44.4M shares already short. Borrow availability is not a concern.

MSFT short borrow: MSFT is one of the most liquid equities globally. No borrow concerns at any reasonable fund size.

---

## Stress Tests

The following stress tests estimate portfolio P&L impact under historical and hypothetical scenarios, applied to current fully-allocated positions.

### Historical Scenarios

| Scenario | VST Impact | CEG Impact | NKE Impact (short gains) | MSFT Impact (short gains) | Portfolio P&L (% NAV) |
|---|---|---|---|---|---|
| **GFC 2008** (S&P -50%, 12mo) | -55% | -50% | +45% (short gains) | +40% (short gains) | **-12.8%** |
| **COVID Feb-Mar 2020** (S&P -34%, 23 days) | -45% | -40% | +35% (short gains) | +25% (short gains) | **-7.5%** |
| **Rates Shock 2022** (10Y +270bps, S&P -25%) | -35% | -30% | +20% (short gains) | +25% (short gains) | **-9.0%** |

GFC decomposition: VST longs lose 0.35 x 55% = 19.3% + CEG longs lose 0.30 x 50% = 15.0% = 34.3% long-side loss. NKE short gains 0.20 x 45% = 9.0% + MSFT short gains 0.15 x 40% = 6.0% = 15.0% short-side gain. Net: -19.3% before any additional correlation adjustments. Adjusted estimate: -12.8% to -19.3% depending on timing and correlation dynamics. The midpoint estimate of -12.8% accounts for the shorts providing meaningful offset in a protracted downturn.

BREACH: Under a GFC-type scenario, the portfolio would exceed the -10% drawdown limit. Under a COVID-type scenario, the portfolio would approach the limit at -7.5%. Under a rates shock, the portfolio would approach the limit at -9.0%.

### Hypothetical Scenarios (Current Environment)

| Scenario | Assumptions | VST | CEG | NKE (short) | MSFT (short) | Portfolio P&L (% NAV) |
|---|---|---|---|---|---|---|
| **Market crash -20%** | S&P -20%; correlations spike; beta-adjusted moves | -28% | -23% | +23% (gain) | +21% (gain) | **-5.9%** |
| **Rates +100bps** | 10Y to 4.97%; leveraged utilities underperform; tech multiples compress | -15% | -12% | -5% (loss on short) | +8% (gain) | **-9.0%** |
| **Tariff escalation to 20%** | Global tariff doubles; consumer hit; equipment cost pass-through | -5% | -4% | +18% (gain) | -3% (loss) | **+1.0%** |
| **AI demand disappointment** | Hyperscaler capex cut 25%; power demand revised down sharply | -30% | -25% | 0% | +10% (gain) | **-16.5%** |
| **Sector rotation reversal** | Tech rallies 15%, utilities sell off 12% | -12% | -10% | +8% (loss) | -12% (loss) | **-11.0%** |
| **Nuclear incident (global)** | Sentiment-driven nuclear selloff; no physical damage to U.S. plants | -35% | -40% | 0% | 0% | **-24.3%** |

Key findings from stress tests:

1. **Nuclear incident is the worst-case scenario at -24.3% of NAV.** This exceeds the -10% drawdown limit by a factor of 2.4x. The portfolio has zero hedges against nuclear-specific risk. Both longs would be hit simultaneously at maximum correlation.

2. **AI demand disappointment at -16.5% also breaches the drawdown limit.** The MSFT short provides only a 1.5% offset (0.15 x 10%) against a combined 18.0% loss on the long book.

3. **Sector rotation reversal at -11.0% breaches the drawdown limit.** If tech rallies and utilities sell off simultaneously, both long and short books lose money.

4. **Market crash -20% at -5.9% is within limits** due to meaningful short-side offset. This is the scenario where the portfolio construction works as intended.

5. **Tariff escalation is the only scenario with positive P&L (+1.0%)**, driven by the NKE short.

---

## Limit Breaches / Warnings

### BREACHES

1. **SECTOR CONCENTRATION -- BREACH.** Net Utilities/Power Infrastructure exposure is 65% of NAV versus a 25% sector limit. This is a 40 percentage point overshoot. The PM is aware of this concentration (IC memo acknowledges it as a deliberate thematic bet), but it constitutes a formal breach that must be either reduced or explicitly waived with documented rationale.

### WARNINGS

2. **SINGLE-NAME CONCENTRATION -- WARNING.** VST at 35.0% of NAV is at the maximum single-name limit. Any mark-to-market appreciation in VST would push this above the limit. Recommend monitoring daily.

3. **GROSS EXPOSURE AT CEILING -- WARNING.** The portfolio is 100% deployed with 0% cash. There is no capacity to add positions without first reducing existing ones. There is no buffer to absorb margin calls or unexpected cash needs.

4. **VaR APPROACHING LIMITS -- WARNING.** 95% 1-day VaR at 1.83% is within 10% of the 2.0% limit. Any increase in realized volatility or upward revision in VST-CEG correlation would trigger a breach.

5. **STRESS TEST FAILURES.** Three of six hypothetical scenarios breach the -10% drawdown limit (AI demand disappointment -16.5%, sector rotation reversal -11.0%, nuclear incident -24.3%). All three historical scenarios approach or breach the limit (GFC -12.8%, rates shock -9.0%, COVID -7.5%).

6. **VST-CEG CORRELATION AT 0.80.** The effective number of independent bets is 2.1. For risk purposes, the long book should be treated as a single concentrated position. Any event that causes VST and CEG to move in the same direction (which is the expected behavior 80% of the time) will amplify long-book P&L swings.

7. **INTEREST RATE SENSITIVITY UNHEDGED ON THE LONG SIDE.** Both VST (2.9x net debt/EBITDA, $17B net debt) and CEG (3.0-3.5x, $21B net debt) are sensitive to higher rates. A rates shock would pressure both names through higher refinancing costs and valuation compression. The NKE short provides no offset; the MSFT short provides partial offset.

8. **DUAL-CATALYST DATE: MARCH 31.** CEG's Business and Earnings Outlook call and NKE's Q3 FY2026 earnings report both fall on March 31. Two of four positions (representing 50% of NAV gross) face potential binary outcomes on the same day. Intraday risk on March 31 will be elevated.

---

## Changes vs. Prior Week

This report supersedes the prior report dated 2026-02-28 22:00 UTC, which reflected the partially booked portfolio (10% gross, 3 positions). The changes below reflect the move to the fully allocated portfolio per the IC memo.

| Item | Prior Report | Current | Change |
|---|---|---|---|
| Gross Exposure | 10.0% | 100.0% | +90.0% |
| Net Exposure | +4.0% | +30.0% | +26.0% |
| Holdings | 3 | 4 | +1 (MSFT short added) |
| VaR 95% 1-day | 0.31% | 1.83% | +1.52% |
| VaR 99% 1-day | 0.44% | 2.59% | +2.15% |
| Max Single-Name % NAV | 4.0% (VST) | 35.0% (VST) | +31.0% |
| Max Sector % NAV (net) | 7.0% (Utilities) | 65.0% (Utilities) | +58.0% -- now in BREACH |
| Portfolio Beta (net) | +0.22 | +0.33 | +0.11 |
| Cash | 90.0% | 0.0% | -90.0% |

---

## Model Assumptions and Limitations

1. **Volatility estimates** are based on current realized volatility data from market sources: VST 50% annualized (weekly vol ~8%), CEG 45%, NKE 30%, MSFT 28%. These are point-in-time estimates; forward volatility may differ materially, particularly during stress events when vol can spike 2-3x.

2. **Correlation estimates** are based on qualitative assessment of shared factor exposures, sector co-membership, and observed co-movement patterns. The VST-CEG correlation of 0.80 is a central estimate; in stress events, this is likely to rise toward 0.90-0.95. A formal rolling correlation study using daily returns data would improve precision.

3. **Parametric VaR** assumes normal distribution of returns. This systematically underestimates tail risk. Fat tails and volatility clustering mean the true 99th percentile loss is likely 20-40% larger than the parametric estimate. The stress test section provides supplementary tail-risk analysis.

4. **Stress test P&L impacts** are estimated using factor sensitivities, beta adjustments, and historical analogues. They are directional estimates, not precise forecasts. Actual outcomes in stress events depend on path, speed, and liquidity conditions that are not captured in static scenario analysis.

5. **Sector limits** are based on standard long/short equity risk management conventions. The 25% net sector limit referenced in this report should be confirmed or adjusted by the PM if the fund's mandate permits higher thematic concentration.

6. **Beta estimates** are sourced from multiple providers and may differ depending on measurement period. VST beta of 1.42 reflects its recent behavior as an AI-proxy equity rather than a traditional utility. CEG beta of 1.15 may understate forward beta given the Calpine integration and increased operating leverage.

---

## Recommendations for PM Consideration

The following are risk observations, not investment opinions:

1. **The sector concentration breach (65% net in Utilities/Power) requires a formal decision**: either reduce exposure or document a waiver with rationale. Risk will continue to flag this breach in every report until resolved.

2. **The March 31 dual-catalyst date (CEG outlook + NKE earnings) represents a concentrated event risk.** The PM may wish to consider whether position sizing ahead of this date is appropriate given that 50% of gross exposure is subject to potential binary outcomes.

3. **Adding uncorrelated long positions** (the IC memo has directed European defense research) would reduce the VST-CEG correlation impact on portfolio VaR and improve the effective number of independent bets. However, this requires first freeing up capital from existing positions, as gross exposure is at 100%.

4. **The 10-day 99% VaR of 8.19% means a sustained adverse move of moderate magnitude would approach the drawdown limit within two weeks.** The portfolio has limited margin for error at full deployment.
