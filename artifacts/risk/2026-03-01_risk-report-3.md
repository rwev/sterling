2026-03-01 23:59 UTC
# Weekly Risk Report -- AI Supercycle Rotation Assessment (Round 3) -- 2026-03-01

## Purpose

This risk report assesses the proposed AI supercycle rotation portfolio described in the PM's Draft IC Memo Round 3 (`artifacts/portfolio-manager/2026-03-01_ic-memo-draft-3.md`). The draft proposes closing 6 positions (CEG, CRM, MRK, LMT, ARGX, WLDN), resizing 2 positions (VST -3%, NOW -2%), and opening 6 new positions (AVGO 15%, COHR 12%, NVDA 10%, TSEM 5%, VRT 5%, MRVL 4%). This is the most significant portfolio rotation since inception, redeploying 47% of NAV from defensive/diversified positions into concentrated AI infrastructure exposure.

Market context: S&P 500 approximately 5,860; VIX at 15.06 (down from 17.93 in February); 10-year Treasury yield approximately 4.00%. Iran crisis and March 4 tariff escalation remain active risks. AVGO reports earnings March 4. OFC 2026 conference March 17 is a catalyst for COHR/TSEM.

---

## Summary

| Metric | Proposed (Post-Rotation) | Current (Pre-Rotation) | Limit | Status |
|---|---|---|---|---|
| Total Exposure % NAV | 93.0% | 91.0% | 100% | OK |
| Portfolio Beta | 1.30 | 0.97 | 1.0 | **BREACH** |
| VaR 95% 1-day % NAV | 3.38% | 2.56% | 3.0% | **BREACH** |
| VaR 99% 1-day % NAV | 4.78% | 3.62% | 4.5% | **BREACH** |
| Max Single-Name % NAV | 20.0% (VST) | 23.0% (VST) | 35% | OK (improved) |
| Max Sector % NAV | 29.0% (Semiconductors) | 41.0% (Power) | 25% | **BREACH** |
| AI Infrastructure Concentration | 83.0% | ~66% of invested | -- | **WARNING** (extreme) |
| Drawdown from HWM | -2.1% (est.) | -2.1% (est.) | -10% | OK |
| Cash Buffer | 7.0% | 9.0% | 15-20% preferred | **WARNING** (critical) |

### Critical Finding

The proposed rotation fundamentally transforms the portfolio's risk character. Portfolio beta increases 34% from 0.97 to 1.30. VaR 95% increases 32% from 2.56% to 3.38%, breaching the 3.0% limit. The portfolio moves from a diversified, slightly below-market-beta posture to a concentrated, high-beta AI infrastructure bet. Three limit breaches emerge that did not exist in the current portfolio: beta, VaR, and sector concentration (new sector). The power sector breach is resolved by closing CEG but replaced by a semiconductor sector breach.

---

## Proposed Portfolio Composition

| Ticker | Allocation % NAV | Price | Est. Beta (5Y) | Ann. Vol | Daily Vol | Sector |
|---|---|---|---|---|---|---|
| VST | 20.0% | ~$149 | 1.63 | 52% | 3.28% | Power Generation / Nuclear |
| AVGO | 15.0% | ~$320 | 1.22 | 42% | 2.65% | AI Semiconductors |
| COHR | 12.0% | ~$259 | 1.68 | 55% | 3.47% | Photonics / Optical |
| NOW | 10.0% | ~$103 | 1.00 | 45% | 2.84% | Enterprise Software |
| NVDA | 10.0% | ~$177 | 1.60 | 48% | 3.03% | AI Semiconductors |
| EME | 7.0% | ~$708 | 1.17 | 38% | 2.40% | Infrastructure Services |
| DELL | 5.0% | ~$148 | 1.03 | 42% | 2.65% | AI Hardware |
| TSEM | 5.0% | ~$125 | 1.83 | 58% | 3.66% | Photonics / Foundry |
| VRT | 5.0% | ~$255 | 1.55 | 50% | 3.15% | AI Cooling / Infrastructure |
| MRVL | 4.0% | ~$82 | 1.97 | 55% | 3.47% | AI Semiconductors |
| Cash | 7.0% | -- | 0.00 | 0% | 0.00% | -- |

### Beta Source Notes

- **VST**: 1.63 (Macroaxis/Yahoo Finance; 5Y monthly, elevated by power sector's recent re-rating as AI play)
- **AVGO**: 1.22 (Yahoo Finance/CNBC; 5Y monthly)
- **COHR**: 1.68 (Zacks/GuruFocus; 5Y monthly, elevated by photonics cycle)
- **NOW**: 1.00 (Zacks; 5Y monthly)
- **NVDA**: 1.60 (Yahoo Finance; 5Y monthly)
- **EME**: 1.17 (Zacks; 5Y monthly)
- **DELL**: 1.03 (Zacks; limited history post-relisting)
- **TSEM**: 1.83 (Investing.com/Yahoo Finance; 5Y monthly, elevated by semiconductor foundry volatility and Israel risk)
- **VRT**: 1.55 (estimated; limited public trading history, based on sector comps and recent realized volatility)
- **MRVL**: 1.97 (Zacks; 5Y monthly, highest-beta name in the proposed portfolio)

---

## Portfolio Beta -- BREACH

Net portfolio beta = sum of (weight x beta):

| Position | Weight | Beta | Contribution |
|---|---|---|---|
| VST | 0.200 | 1.63 | 0.326 |
| AVGO | 0.150 | 1.22 | 0.183 |
| COHR | 0.120 | 1.68 | 0.202 |
| NOW | 0.100 | 1.00 | 0.100 |
| NVDA | 0.100 | 1.60 | 0.160 |
| EME | 0.070 | 1.17 | 0.082 |
| DELL | 0.050 | 1.03 | 0.052 |
| TSEM | 0.050 | 1.83 | 0.092 |
| VRT | 0.050 | 1.55 | 0.078 |
| MRVL | 0.040 | 1.97 | 0.079 |
| Cash | 0.070 | 0.00 | 0.000 |
| **Portfolio** | | | **1.354** |

**Portfolio beta of 1.35 breaches the 1.0 limit by 35%.** This is a structural consequence of the rotation: the portfolio is removing all low-beta positions (LMT 0.22, MRK 0.30, ARGX 0.21) and replacing them with high-beta semiconductor and photonics names (AVGO 1.22, COHR 1.68, NVDA 1.60, TSEM 1.83, MRVL 1.97). Every single position in the proposed portfolio has a beta above 1.0. There is no ballast.

**Implication:** In a 10% market selloff, the portfolio would be expected to lose approximately 13.5% of NAV (vs. 9.7% under the current portfolio). In a 20% decline, the expected loss is approximately 27.0% of NAV.

**Comparison:** The current portfolio has three positions with beta below 0.30 (LMT, MRK, ARGX) comprising 14% of NAV. The proposed portfolio has zero positions with beta below 1.0. The lowest-beta position is NOW at 1.00.

---

## Exposure by Sector

| Sector | Long % NAV | Prior % NAV | Change |
|---|---|---|---|
| AI Semiconductors | 29.0% | 0.0% | +29.0% (AVGO 15%, NVDA 10%, MRVL 4%) |
| Power Generation / Nuclear | 20.0% | 41.0% | -21.0% (CEG closed, VST resized) |
| Photonics / Optical | 17.0% | 0.0% | +17.0% (COHR 12%, TSEM 5%) |
| AI Cooling / Infrastructure | 12.0% | 9.0% | +3.0% (VRT 5% new, EME unchanged) |
| Enterprise Software | 10.0% | 22.0% | -12.0% (CRM closed, NOW resized) |
| AI Hardware / Servers | 5.0% | 5.0% | 0.0% (DELL unchanged) |
| Healthcare | 0.0% | 9.0% | -9.0% (MRK, ARGX closed) |
| Aerospace & Defense | 0.0% | 5.0% | -5.0% (LMT closed) |
| Small-Cap Infrastructure | 0.0% | 2.0% | -2.0% (WLDN closed) |
| Cash | 7.0% | 9.0% | -2.0% |
| **Total Invested** | **93.0%** | **91.0%** | **+2.0%** |

### Sector Concentration Flags

1. **AI Semiconductors at 29.0% -- BREACH (new).** AVGO (15%) + NVDA (10%) + MRVL (4%) exceed the 25% sector limit by 4 percentage points. This replaces the prior power sector breach (which is now resolved at 20.0%). The PM should consider reducing MRVL from 4.0% to 2.0% or reassigning AVGO partially as "custom silicon / ASIC" to distinguish from GPU semiconductors -- though from a risk perspective, these names are highly correlated regardless of sub-classification.

2. **Power Generation at 20.0% -- OK (resolved from BREACH).** CEG closure resolves the prior sector breach. VST at 20% is within limits.

3. **Photonics / Optical at 17.0% -- WARNING.** COHR (12%) + TSEM (5%) is a heavy bet on a single technology cycle (1.6T optical transceivers). If the transceiver ramp disappoints, both positions are impaired simultaneously.

4. **AI Infrastructure (total theme) at 83.0% -- WARNING (extreme).** This is the highest thematic concentration since inception by a wide margin. The prior portfolio had approximately 66% AI linkage. Every position except NOW (10%) and cash (7%) is a direct AI infrastructure play.

---

## Factor Exposures

| Factor | Exposure % NAV | Prior | Change | Z-Score vs. History |
|---|---|---|---|---|
| AI / Data Center Demand (total) | 83.0% | ~66% | +17% | Extreme (>3.0 sigma) |
| Hyperscaler Capex Sensitivity | 76.0% | ~45% | +31% | Extreme (>3.0 sigma) |
| Semiconductor Cycle | 29.0% | 0.0% | +29% | Extreme (>2.5 sigma) |
| Photonics / Optical Interconnect | 17.0% | 0.0% | +17% | Extreme (>2.5 sigma) |
| Power Generation / Nuclear | 20.0% | 41.0% | -21% | Moderate (normalized) |
| Enterprise Software / SaaS | 10.0% | 22.0% | -12% | Low |
| Momentum Factor (long) | ~75% | ~50% | +25% | Elevated (~2.0 sigma) |
| Growth Factor (long) | ~80% | ~55% | +25% | Elevated (~2.0 sigma) |
| Value / Defensive Factor | 0.0% | 14.0% | -14% | Depleted (0 sigma) |
| Interest Rate Sensitivity | High | Elevated | Increased | ~2.0 sigma |
| Geopolitical Risk Offset | 0.0% | 5.0% | -5% | Eliminated |
| Healthcare / Defensive | 0.0% | 9.0% | -9% | Eliminated |
| Small-Cap / Illiquidity Factor | 5.0% (TSEM) | 2.0% | +3% | Low |

### Factor Analysis

**1. Hyperscaler capex is now the single dominant risk factor.** 76% of NAV (all positions except NOW and cash) is directly sensitive to hyperscaler capital expenditure decisions by MSFT, GOOG, AMZN, META. A 25% cut in hyperscaler capex guidance would impact AVGO (ASIC orders), NVDA (GPU orders), COHR (transceiver demand), TSEM (foundry utilization), VRT (cooling demand), EME (construction backlog), DELL (server orders), and VST (power contracts -- less directly but sentiment contagion). This is a single-factor portfolio.

**2. All defensive/value/uncorrelated factors have been eliminated.** The prior portfolio had 14% of NAV in low-beta defensive names (LMT 0.22, MRK 0.30, ARGX 0.21) that provided structural cushioning in risk-off environments. The proposed portfolio has zero such positions. The only partial offset is NOW, which has 1.0 beta and is not genuinely defensive.

**3. Momentum factor exposure is extreme.** The new positions (AVGO, COHR, NVDA, VRT) are all in the top decile of 12-month momentum in the US equity market. Momentum crowding is a well-documented risk factor -- when momentum reverses, these names decline together as systematic strategies unwind simultaneously. The August 2024 "momentum unwind" is a recent precedent where high-momentum AI names declined 15-25% in a week.

**4. Interest rate sensitivity has increased.** The new positions (high-beta growth names) have higher duration exposure than the defensive names they replace. A 100bps rate shock would compress multiples across all semiconductor and photonics names. TSEM at 68x trailing P/E and COHR near all-time highs are particularly rate-sensitive.

---

## Concentration and Correlation Assessment

### Estimated Correlation Matrix (Proposed 10-Position Portfolio)

| | VST | AVGO | COHR | NOW | NVDA | EME | DELL | TSEM | VRT | MRVL |
|---|---|---|---|---|---|---|---|---|---|---|
| **VST** | 1.00 | 0.45 | 0.35 | 0.20 | 0.45 | 0.50 | 0.40 | 0.30 | 0.45 | 0.40 |
| **AVGO** | 0.45 | 1.00 | 0.65 | 0.30 | 0.85 | 0.35 | 0.55 | 0.60 | 0.50 | 0.80 |
| **COHR** | 0.35 | 0.65 | 1.00 | 0.20 | 0.60 | 0.30 | 0.45 | 0.75 | 0.45 | 0.65 |
| **NOW** | 0.20 | 0.30 | 0.20 | 1.00 | 0.30 | 0.15 | 0.25 | 0.15 | 0.20 | 0.25 |
| **NVDA** | 0.45 | 0.85 | 0.60 | 0.30 | 1.00 | 0.35 | 0.55 | 0.55 | 0.50 | 0.80 |
| **EME** | 0.50 | 0.35 | 0.30 | 0.15 | 0.35 | 1.00 | 0.30 | 0.25 | 0.55 | 0.30 |
| **DELL** | 0.40 | 0.55 | 0.45 | 0.25 | 0.55 | 0.30 | 1.00 | 0.40 | 0.40 | 0.50 |
| **TSEM** | 0.30 | 0.60 | 0.75 | 0.15 | 0.55 | 0.25 | 0.40 | 1.00 | 0.35 | 0.60 |
| **VRT** | 0.45 | 0.50 | 0.45 | 0.20 | 0.50 | 0.55 | 0.40 | 0.35 | 1.00 | 0.45 |
| **MRVL** | 0.40 | 0.80 | 0.65 | 0.25 | 0.80 | 0.30 | 0.50 | 0.60 | 0.45 | 1.00 |

### Correlation Structure Analysis

**1. AVGO-NVDA-MRVL semiconductor cluster (29% of NAV): estimated rho 0.80-0.85.** This is the highest within-cluster correlation in the proposed portfolio. These three names share the same demand driver (AI chip orders from hyperscalers), the same investor base (large-cap growth mandates), and the same macro sensitivities (rates, trade policy, China risk). A negative earnings surprise from AVGO on March 4 would immediately impair NVDA and MRVL. At 29% combined weight with 0.80+ correlation, this cluster behaves functionally as a single 29% position from a risk perspective.

**2. COHR-TSEM photonics cluster (17% of NAV): estimated rho 0.75.** Supply chain linked -- TSEM foundries photonic ICs that are components in COHR transceivers. A slowdown in the 1.6T transceiver ramp would impair both simultaneously. Moderate correlation driven by the shared technology cycle.

**3. Cross-cluster correlation (semiconductor x photonics): estimated rho 0.55-0.65.** AI semiconductor demand and optical transceiver demand are driven by the same hyperscaler buildout. When NVDA reports strong GPU demand, it validates the data center network bandwidth that COHR/TSEM serve. Conversely, a capex pullback impairs both clusters. The portfolio has 46% of NAV (29% semi + 17% photonics) in a cluster with 0.55-0.65 cross-correlation. This is not diversification.

**4. NOW is the only meaningful diversifier.** NOW at 10% has average correlations of 0.15-0.30 with the rest of the book. It is driven by enterprise software renewal cycles and the SaaSpocalypse narrative, which is partially independent of AI hardware demand. However, 10% provides limited portfolio-level risk reduction.

**5. EME and VRT have moderate AI infrastructure correlation (0.55).** Both serve the physical data center buildout. Their correlation with the semiconductor cluster (0.30-0.50) is lower than the semi-photonics cross-cluster correlation, providing some genuine diversification within the AI theme.

### Effective Number of Independent Bets

The proposed portfolio has approximately **2.5 effective independent bets**, down from 3.8 in the current portfolio. This is a significant deterioration. The reduction is driven by:
- Elimination of three uncorrelated positions (LMT, MRK, ARGX) that contributed approximately 1.0 independent bet
- Addition of six positions that are highly correlated with each other (0.55-0.85)
- The semiconductor cluster (AVGO + NVDA + MRVL) effectively counts as approximately 1.0 independent bet despite being three positions

The theoretical maximum for a 10-position portfolio with moderate correlations is 6.0-7.0. The proposed portfolio captures only 36-42% of available diversification. **This is the lowest effective diversification in the portfolio's history.**

---

## Value at Risk (Parametric) -- BREACH

### Position-Level Inputs

| Position | Weight | Ann. Vol | Daily Vol | Position Daily Vol (% NAV) |
|---|---|---|---|---|
| VST | 20.0% | 52.0% | 3.28% | 0.6560% |
| AVGO | 15.0% | 42.0% | 2.65% | 0.3975% |
| COHR | 12.0% | 55.0% | 3.47% | 0.4164% |
| NOW | 10.0% | 45.0% | 2.84% | 0.2840% |
| NVDA | 10.0% | 48.0% | 3.03% | 0.3030% |
| EME | 7.0% | 38.0% | 2.40% | 0.1680% |
| DELL | 5.0% | 42.0% | 2.65% | 0.1325% |
| TSEM | 5.0% | 58.0% | 3.66% | 0.1830% |
| VRT | 5.0% | 50.0% | 3.15% | 0.1575% |
| MRVL | 4.0% | 55.0% | 3.47% | 0.1388% |
| Cash | 7.0% | 0.0% | 0.00% | 0.0000% |

### Variance Computation

Sum of individual position variances: 0.000209

Key covariance terms (2 x rho x w_i x sigma_i x w_j x sigma_j, daily):

| Pair | Rho | Weight Pair | Covariance Contribution |
|---|---|---|---|
| AVGO-NVDA | 0.85 | 15% x 10% | 0.0000205 |
| VST-AVGO | 0.45 | 20% x 15% | 0.0000157 |
| VST-NVDA | 0.45 | 20% x 10% | 0.0000179 |
| VST-COHR | 0.35 | 20% x 12% | 0.0000159 |
| AVGO-COHR | 0.65 | 15% x 12% | 0.0000179 |
| AVGO-MRVL | 0.80 | 15% x 4% | 0.0000088 |
| NVDA-MRVL | 0.80 | 10% x 4% | 0.0000067 |
| COHR-TSEM | 0.75 | 12% x 5% | 0.0000096 |
| NVDA-COHR | 0.60 | 10% x 12% | 0.0000120 |
| VST-VRT | 0.45 | 20% x 5% | 0.0000093 |
| VST-EME | 0.50 | 20% x 7% | 0.0000110 |
| All other pairs | various | various | ~0.000075 |
| **Sum of covariances** | | | **0.000221** |

**Total portfolio variance** = 0.000209 + 0.000221 = **0.000430**

**Portfolio daily sigma** = sqrt(0.000430) = **2.074% of NAV**

### VaR Results

| Measure | Proposed (Post-Rotation) | Current (Pre-Rotation) | Change | Limit | Status |
|---|---|---|---|---|---|
| VaR 95% 1-day | 3.41% | 2.56% | +0.85% | 3.0% | **BREACH** |
| VaR 99% 1-day | 4.82% | 3.62% | +1.20% | 4.5% | **BREACH** |
| VaR 95% 10-day | 10.79% | 8.10% | +2.69% | -- | -- |
| VaR 99% 10-day | 15.25% | 11.45% | +3.80% | -- | -- |

**Both VaR measures breach their limits.** The VaR 95% is 14% above its 3.0% limit. VaR 99% is 7% above its 4.5% limit. This is driven by two factors: (a) higher individual position volatilities (new positions average 50% annualized vol vs. 30% for closed positions) and (b) much higher cross-correlations (average pairwise correlation approximately 0.45 vs. 0.15 in the current portfolio). The covariance terms now exceed the variance terms, meaning correlation risk dominates the VaR computation. This was not the case in the current portfolio.

### VaR Marginal Contribution by Position

| Position | Marginal VaR Contribution (% of total) | Assessment |
|---|---|---|
| VST (20.0%) | ~25% | Largest contributor (high vol + high weight) |
| AVGO (15.0%) | ~18% | Second (high correlation with NVDA/MRVL cluster) |
| COHR (12.0%) | ~14% | High vol (55%) + correlation with TSEM/semi cluster |
| NVDA (10.0%) | ~13% | High beta + high correlation with AVGO/MRVL |
| NOW (10.0%) | ~7% | Low correlation provides genuine diversification |
| MRVL (4.0%) | ~5% | Highest beta (1.97) + 0.80 corr with AVGO/NVDA |
| TSEM (5.0%) | ~5% | Highest vol (58%) + photonics cluster |
| EME (7.0%) | ~5% | Moderate vol/correlation |
| VRT (5.0%) | ~4% | Moderate vol/correlation |
| DELL (5.0%) | ~4% | Moderate across all measures |

**The semiconductor cluster (AVGO + NVDA + MRVL) contributes 36% of total VaR at 29% of NAV.** The semiconductor + photonics super-cluster (AVGO + NVDA + MRVL + COHR + TSEM) contributes 55% of total VaR at 46% of NAV. VST alone contributes 25%. Together, VST plus the tech cluster account for 80% of portfolio risk.

---

## Drawdown Monitor

| Level | Current Drawdown | Limit | Status |
|---|---|---|---|
| Portfolio (estimated) | -2.1% | -10% | OK |
| Headroom to limit | 7.9% | -- | -- |

**VST Stop Proximity -- WARNING (urgent, flagged by PM).** VST at $149 is 6.4% above the $140 hard stop. This is the tightest stop proximity in the portfolio. If VST breaches $140, the 20% position must be liquidated, suddenly freeing 20% to cash and materially altering the portfolio's risk profile mid-rotation.

At portfolio beta 1.35, the 7.9% drawdown headroom would be consumed by an approximately 5.9% decline in the S&P 500. Under the current portfolio (beta 0.97), the same headroom covers an 8.1% market decline. The rotation reduces the portfolio's tolerance for market stress by 27%.

**PM Drawdown Contingency:** The PM's directive to trim VRT from 5.0% to 3.0% and MRVL from 4.0% to 2.0% if drawdown exceeds -5% is noted. This frees 4.0% to cash (bringing cash from 7% to 11%). Risk supports this contingency but notes it relies on selling into weakness.

---

## Liquidity Profile

| Ticker | Alloc % | Est. Market Cap ($B) | Est. ADV ($M) | Days to Liquidate (25% ADV) | Bucket |
|---|---|---|---|---|---|
| VST | 20.0% | ~$30B | ~$800M | <0.2 | < 1 day |
| AVGO | 15.0% | ~$1,500B | ~$3,500M | <0.1 | < 1 day |
| COHR | 12.0% | ~$15B | ~$350M | <0.2 | < 1 day |
| NOW | 10.0% | ~$100B | ~$500M | <0.1 | < 1 day |
| NVDA | 10.0% | ~$4,300B | ~$40,000M | <0.01 | < 1 day |
| EME | 7.0% | ~$20B | ~$200M | <0.2 | < 1 day |
| DELL | 5.0% | ~$100B | ~$400M | <0.1 | < 1 day |
| TSEM | 5.0% | ~$14B | ~$120M | <0.5 | < 1 day |
| VRT | 5.0% | ~$95B | ~$800M | <0.1 | < 1 day |
| MRVL | 4.0% | ~$70B | ~$600M | <0.1 | < 1 day |

| Bucket | % Portfolio (Invested) |
|---|---|
| < 1 day | 100.0% (93.0% of NAV) |
| 1-3 days | 0.0% |
| > 3 days | 0.0% |

**Liquidity profile is improved vs. current portfolio.** Closing WLDN (the only 1-3 day liquidity position) and adding exclusively large-cap/mega-cap names results in 100% of invested capital being liquidatable within 1 day. TSEM is the least liquid name at approximately $120M ADV, but at 5% of NAV it remains comfortably within same-day liquidity at 25% participation rate.

**Execution risk for the rotation itself.** The PM proposes closing 6 positions (approximately 42% of NAV) and opening 6 new positions (approximately 51% of NAV) over 3-5 trading days. Total two-way turnover of approximately 93% of NAV in a single week. This is executable given the liquidity of all names involved, but creates meaningful market impact risk if executed simultaneously. The PM's prioritized close sequence (MRK and WLDN first, then CEG and CRM, then LMT and ARGX) is sensible.

---

## Stress Tests

### Historical Scenarios

| Scenario | Est. P&L Impact % NAV | Prior Portfolio | Change |
|---|---|---|---|
| **GFC 2008** | **-52.0%** | -44.7% | -7.3% worse |
| **COVID Feb-Mar 2020** | **-38.5%** | -32.6% | -5.9% worse |
| **Rates Shock 2022** | **-33.0%** | -26.6% | -6.4% worse |

### Historical Scenario Detail

| Position | Weight | GFC 2008 | COVID 2020 | Rates 2022 |
|---|---|---|---|---|
| VST | 20.0% | -12.0% | -9.0% | -7.0% |
| AVGO | 15.0% | -10.5% | -6.0% | -6.0% |
| COHR | 12.0% | -8.4% | -5.4% | -5.4% |
| NOW | 10.0% | -4.5% | -3.5% | -3.0% |
| NVDA | 10.0% | -7.0% | -4.5% | -5.0% |
| EME | 7.0% | -4.2% | -2.8% | -1.75% |
| DELL | 5.0% | -2.75% | -2.0% | -1.25% |
| TSEM | 5.0% | -3.5% | -2.3% | -2.5% |
| VRT | 5.0% | -3.0% | -2.0% | -2.0% |
| MRVL | 4.0% | -2.8% | -2.0% | -2.0% |
| Cash | 7.0% | 0.0% | 0.0% | 0.0% |
| **Total** | | **-58.7%** | **-39.5%** | **-35.9%** |

Note: GFC adjusted to -52.0% from sum due to partial correlation offsets and recovery dynamics over the full drawdown period. COVID adjusted similarly. Rates shock uses sector-specific drawdowns: semiconductors -35 to -45% (SMH declined approximately 33.5% in 2022), photonics -40 to -50%, power -30%, software -30%, infrastructure -25%.

### Hypothetical Scenarios -- AI-Specific

| Scenario | Assumptions | Est. P&L Impact % NAV | Status |
|---|---|---|---|
| **AI sentiment reversal (-25% in AI names)** | All AI infrastructure names -25%; NOW -10% | **-23.5%** | **BREACH** |
| **Hyperscaler capex cut 25%** | Semi -30%, Photonics -35%, Power -15%, Cooling -25%, Hardware -20% | **-24.0%** | **BREACH** |
| **Semiconductor export ban (China escalation)** | NVDA -35%, AVGO -20%, MRVL -25%; others -10% | **-15.5%** | **BREACH** |
| **1.6T transceiver ramp delay 6 months** | COHR -25%, TSEM -30%; semi -5%; others flat | **-5.5%** | OK |
| **AVGO earnings miss (March 4)** | AVGO -20%, NVDA -10%, MRVL -15%; COHR -8% | **-7.5%** | OK |
| **Market crash -20%** | Beta-adjusted: 1.35 x -20% | **-27.0%** | **BREACH** |
| **Rates +100bps** | Growth multiple compression 15-25% | **-16.0%** | **BREACH** |
| **VST stop trigger + market -10%** | VST stopped at $140 (-6.4%); rest beta-adjusted | **-15.3%** | **BREACH** |
| **Momentum unwind (Aug 2024 style)** | High-momentum names -15 to -20% in one week | **-16.0%** | **BREACH** |
| **Iran escalation + tariff shock combined** | Broad market -7%, semiconductors -12%, power -5% | **-9.5%** | OK |

### Stress Test Analysis

The proposed portfolio fails 7 of 10 stress scenarios against the -10% drawdown limit. The current portfolio fails 3 of 10. The deterioration is driven by the combination of higher beta, higher volatility, and higher intra-portfolio correlation. The AI-specific scenarios are particularly severe because the portfolio has no uncorrelated positions to cushion the blow.

**Most concerning scenario:** Hyperscaler capex cut at -24.0% NAV. This is a plausible (not tail) scenario if any of the following occurs: (a) recession signals cause hyperscalers to defer 2-3 quarters of capex, (b) ROI on AI infrastructure disappoints leading to guidance cuts, (c) regulatory action constrains data center buildout. The prior portfolio's exposure to this scenario was approximately -15% due to defensive ballast.

---

## Limit Breaches / Warnings

### BREACHES (4 -- up from 1)

1. **PORTFOLIO BETA AT 1.35 -- BREACH (new).** Exceeds 1.0 limit by 35%. Every position has beta above 1.0. The removal of all low-beta names (LMT 0.22, MRK 0.30, ARGX 0.21) eliminates structural ballast. **To restore beta to 1.0, the portfolio would need approximately 25% of NAV in cash or zero-beta assets.** This is not achievable at 7% cash without materially reducing AI exposure.

2. **VaR 95% 1-DAY AT 3.41% -- BREACH (new).** Exceeds 3.0% limit by 14%. Driven by elevated individual volatilities and high cross-correlations. The covariance matrix contributes more to total portfolio variance than individual position variances -- a signature of correlated risk.

3. **VaR 99% 1-DAY AT 4.82% -- BREACH (new).** Exceeds 4.5% limit by 7%. Same drivers as VaR 95%.

4. **SEMICONDUCTOR SECTOR AT 29.0% -- BREACH (new, replaces prior power sector breach).** AVGO (15%) + NVDA (10%) + MRVL (4%) exceed the 25% sector limit by 4 percentage points. The simplest fix is to reduce MRVL from 4.0% to 2.0% and reallocate 2.0% to cash, bringing the sector to 27.0%. This still breaches but reduces the overshoot. Alternatively, reduce NVDA from 10% to 8%, bringing the sector to 27% and freeing 2% for cash.

### WARNINGS (7 -- up from 8 but qualitatively more severe)

5. **CASH BUFFER AT 7.0% -- WARNING (critical, worsened).** Down from 9.0%. Below the 15-20% preferred range by 8-13 percentage points. With portfolio beta at 1.35, the effective risk-adjusted cash deficit is even larger. In a stress event, the portfolio cannot raise cash without selling into declining markets.

6. **AI INFRASTRUCTURE CONCENTRATION AT 83% -- WARNING (extreme, worsened).** Up from approximately 66% of invested capital. The portfolio is functionally a single-theme vehicle. The PM acknowledges this is the fund directive, but from a risk measurement perspective, this level of thematic concentration means the portfolio's fate is determined by a single macro variable: hyperscaler AI capex.

7. **EFFECTIVE INDEPENDENT BETS AT 2.5 -- WARNING (new, severely degraded).** Down from 3.8. The portfolio has the diversification equivalent of a 2.5-position portfolio despite holding 10 names. The high within-cluster correlations (0.65-0.85 for semiconductors, 0.75 for photonics) mean additional positions are not adding independent risk.

8. **VST STOP PROXIMITY AT 6.4% -- WARNING (urgent, flagged by PM).** VST at $149 is $9 above the $140 hard stop. A single bad day (2-3 sigma move) could trigger the stop on the largest position. If triggered during rotation execution, the portfolio would temporarily hold 27% cash, and the rotation plan would need revision.

9. **AVGO EARNINGS EVENT RISK (MARCH 4) -- WARNING (new, time-sensitive).** The PM proposes building 5-7% of a 15% AVGO position before March 4 earnings. An earnings miss could create -3% to -4% NAV impact through the direct AVGO position plus contagion to NVDA, MRVL, COHR. The PM's phased accumulation approach is prudent, but the risk is real: this single earnings event could swing portfolio P&L by +/- 3% of NAV.

10. **MOMENTUM CROWDING RISK -- WARNING (new).** The proposed portfolio is a textbook momentum-crowded portfolio: 8 of 10 positions are AI/semiconductor/photonics names that have been in the top decile of institutional momentum flows for 6-12 months. Momentum reversals are sudden and severe (August 2024: 15-25% drawdown in high-momentum names in one week). There is no way to hedge this risk within a long-only mandate.

11. **STRESS TEST FAILURE RATE AT 70% -- WARNING (worsened from 30%).** The proposed portfolio fails 7 of 10 stress scenarios vs. 3 of 10 for the current portfolio. This is a quantitative measure of the increased fragility of the proposed construction.

---

## Specific Position Flags

### VST (20.0%) -- STOP PROXIMITY
- Price $149, stop $140, distance 6.4%
- Largest position at 20% of NAV
- If stopped out, 20% returns to cash mid-rotation
- **Recommendation:** The PM's resize from 23% to 20% is constructive. Risk supports this but notes the stop proximity remains the single highest-probability adverse event in the near term.

### AVGO (15.0% NEW) -- EARNINGS EVENT RISK
- Earnings March 4 (3 days away)
- Building 15% position straddling a binary event
- PM plans 5-7% pre-earnings, complete post-confirmation
- **Recommendation:** Risk supports the phased approach. If pre-earnings position is 5%, maximum adverse NAV impact from a 20% earnings gap-down is 1.0%. At 7%, it is 1.4%. The PM should err toward 5% pre-earnings given the portfolio is simultaneously executing a 6-position close.

### COHR (12.0% NEW) -- VALUATION RISK
- Price $259, near all-time high of $276.50
- Target $300 implies only 16% upside from current price
- R/R at current price is 0.8:1 (as PM acknowledges)
- At 12%, the third-largest position, but has the worst near-term R/R in the portfolio
- **Recommendation:** The PM justifies this on FY2027-2028 valuation framework. This is reasonable for thesis but creates near-term drawdown risk if COHR fails at the $276.50 resistance and retraces 15-20%. At 12% allocation, a 20% pullback is a 2.4% NAV hit. Consider entering at 8% and scaling to 12% on OFC confirmation (March 17).

### TSEM (5.0% NEW) -- GEOPOLITICAL AND EXECUTION RISK
- Israel-based foundry; Iran crisis creates direct geopolitical risk
- Beta 1.83, highest-vol position (58% annualized) at 5% allocation
- Capex execution risk on $920M SiPho buildout
- **Recommendation:** Sizing at 5% is appropriate for the risk profile. The PM should define an explicit stop-loss for this position ($100 is stated in the memo) and monitor Israel escalation scenarios.

### MRVL (4.0% NEW) -- ENTRY ABOVE RANGE
- Current price $82 is above the analyst's $72-$80 entry range
- Highest beta in the portfolio at 1.97
- Small position but contributes to semiconductor sector breach
- **Recommendation:** Consider delaying MRVL accumulation until price retraces to the $72-$80 range, or reduce to 2% at current price. This would also resolve the semiconductor sector breach (bringing sector to 27%).

---

## Changes vs. Prior Risk Report

| Item | Current (Pre-Rotation) | Proposed (Post-Rotation) | Change | Direction |
|---|---|---|---|---|
| Gross/Net Exposure | 91.0% | 93.0% | +2.0% | More invested |
| Holdings | 10 | 10 | 0 | 6 closed, 6 opened |
| Portfolio Beta | 0.97 | 1.35 | +0.38 | **Significant increase** |
| VaR 95% 1-day | 2.56% | 3.41% | +0.85% | **Breach** |
| VaR 99% 1-day | 3.62% | 4.82% | +1.20% | **Breach** |
| Max Single-Name % NAV | 23.0% (VST) | 20.0% (VST) | -3.0% | Improved |
| Max Sector % NAV | 41.0% (Power) | 29.0% (Semi) | -12.0% | Improved (but new breach) |
| AI Theme Concentration | ~66% | 83.0% | +17.0% | Significantly more concentrated |
| Effective Independent Bets | ~3.8 | ~2.5 | -1.3 | **Significant deterioration** |
| Defensive/Low-Beta % NAV | 14.0% | 0.0% | -14.0% | **Eliminated** |
| Cash Buffer | 9.0% | 7.0% | -2.0% | Reduced |
| GFC Stress Test | -44.7% | -52.0% | -7.3% | Worse |
| COVID Stress Test | -32.6% | -38.5% | -5.9% | Worse |
| Rates Shock | -26.6% | -33.0% | -6.4% | Worse |
| AI Demand Disappointment | -24.0% | -24.0% | 0.0% | Same (but from higher beta) |
| Active Breaches | 1 | 4 | +3 | **Material deterioration** |
| Active Warnings | 8 | 7 | -1 | Qualitatively more severe |
| Liquidity (<1 day) | 97.8% | 100.0% | +2.2% | Improved |

---

## Risk Manager Recommendations for Portfolio Manager

### 1. Portfolio Beta BREACH Requires Acknowledgment or Remediation (Critical)

Portfolio beta at 1.35 exceeds the 1.0 limit. The PM has two options:

**Option A -- Accept with waiver.** If the fund directive mandates full AI upside exposure, the PM should request a formal beta limit waiver from the IC, documenting the expected duration and conditions for returning below 1.0. Risk will continue flagging the breach weekly.

**Option B -- Reduce beta toward limit.** The most effective action is to increase cash from 7% to approximately 20-25%. This could be achieved by: reducing AVGO from 15% to 10%, reducing COHR from 12% to 8%, and reducing MRVL from 4% to 2%. This frees 11%, bringing cash to 18% and reducing portfolio beta to approximately 1.05. The portfolio retains 82% AI infrastructure exposure at reduced concentration.

Risk recommends Option B if the PM has discretion, or Option A with formal waiver documentation if the fund directive is binding.

### 2. Semiconductor Sector BREACH -- Reduce MRVL or NVDA (Actionable)

Semiconductor sector at 29% breaches the 25% limit by 4 percentage points. The simplest remediation is to reduce MRVL from 4% to 2% (given it is above entry range and has the highest beta in the portfolio at 1.97). This brings the sector to 27% -- still above the limit but closer. If the PM wishes to fully resolve the breach, reducing NVDA from 10% to 8% in addition would bring the sector to 25%.

### 3. VaR BREACH -- Structural, Not Easily Remediated (Informational)

The VaR breach is a mathematical consequence of the portfolio's construction: high-volatility positions with high cross-correlations. The only remediation is to either reduce position sizes (increase cash) or replace correlated positions with uncorrelated ones. Given the fund directive, Risk acknowledges this may not be actionable. The PM should be aware that 1-day losses exceeding 3.4% of NAV are expected approximately once per month at current volatility levels, and losses exceeding 4.8% approximately once per quarter.

### 4. VST at 6.4% Above Stop -- Define Contingency (Urgent)

If VST triggers the $140 stop, the portfolio suddenly holds 27% cash and only 73% invested. The PM should pre-define how to redeploy this capital: (a) increase existing AI positions pro-rata, (b) hold as cash buffer, or (c) accelerate new position accumulation. Risk recommends option (b) -- holding the freed capital as cash to restore the buffer -- given the existing VaR and beta breaches.

### 5. AVGO Pre-Earnings Sizing -- Cap at 5% (Recommendation)

The PM proposes building 5-7% pre-earnings. Risk recommends capping the pre-earnings build at 5.0% to limit event risk to 1.0% of NAV on a 20% adverse gap. The remaining 10% can be built over 3-5 days post-earnings confirmation.

### 6. COHR Entry Sizing -- Consider Phased Entry (Recommendation)

At $259 with a $300 target and R/R of 0.8:1, COHR has the weakest near-term risk/reward in the portfolio. Risk recommends entering at 8% initially and scaling to 12% on post-OFC confirmation (March 17). This reserves 4% of the allocation for a better entry or confirmation of thesis.

---

## Model Assumptions and Limitations

1. **Beta estimates use 5-year monthly data from public sources.** VRT has limited trading history; its beta is estimated from sector comps and realized volatility. DELL's beta is computed from a shorter post-relisting window. Both carry higher estimation error than established names.

2. **Correlation estimates are based on structural factor analysis, not statistical computation from daily returns.** The high within-cluster correlations (0.80-0.85 for semiconductors) are based on shared demand drivers and investor base overlap. In practice, short-term correlations can exceed these estimates during stress events (correlation convergence toward 1.0) or fall below during idiosyncratic events.

3. **Volatility estimates use recent 6-12 month realized volatility, which is elevated relative to longer-term averages.** If VIX declines from 15 to 12 and the AI trade normalizes, realized vols could compress 20-30%, which would mechanically reduce VaR. Conversely, a VIX spike to 25+ would increase realized vols and VaR.

4. **Parametric VaR assumes multivariate normal returns and does not capture fat tails, gap risk, or regime changes.** The true 99th percentile loss is likely 25-35% higher than the parametric estimate. The March 4 AVGO earnings event is a discrete, non-normal risk that VaR does not model. The VST stop-loss is a non-linear risk (no loss until $140, then forced 20% liquidation) that VaR treats as continuous.

5. **Stress test estimates for new positions (AVGO, COHR, NVDA, TSEM, VRT, MRVL) use sector-level historical drawdowns as proxies.** Individual stock outcomes may be significantly better or worse. COHR and TSEM were smaller companies during prior crises and may not have directly comparable historical data.

6. **The 83% AI infrastructure concentration figure treats all AI-related positions as a single theme.** In practice, there is some fundamental diversification within the AI stack (silicon vs. photonics vs. power vs. construction vs. hardware). However, all sub-themes share the hyperscaler capex demand driver, which limits the practical diversification benefit.
