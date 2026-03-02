2026-03-01 23:59 UTC
# Risk Report -- Draft IC Memo Assessment (Round 5) -- 2026-03-01

## Purpose

This risk report responds to the PM's Draft IC Memo Cycle 5 (`artifacts/portfolio-manager/2026-03-01_ic-memo-draft-5.md`), which proposes three resizing actions: VST reduced from 20% to 15%, DELL increased from 5% to 8%, and VRT increased from 5% to 7%. Cash remains at 11%. Seven new pitches were reviewed; six rejected, one (NBIS) conditionally approved at 5% if a slot opens.

Market context as of March 1, 2026: S&P 500 approximately 5,879; VIX at 19.9 (elevated); 10-year Treasury yield approximately 4.02%. AVGO reports Q1 FY2026 earnings March 4 (two trading days). MRVL reports March 5. March 4 tariff escalation risk is concurrent with AVGO earnings.

---

## CRITICAL: VST Price Discrepancy (Persistent from Prior Report)

The PM's draft quotes VST at approximately $149.45. Market data indicates VST closed at approximately $172.64 on February 28, 2026. This $23 discrepancy (15.5%) was flagged in the Round 4 risk report and remains unresolved.

**This discrepancy materially affects the risk assessment:**

| Metric | At PM Price ($149) | At Market Price ($173) |
|---|---|---|
| Distance to $140 stop | 6.3% | 19.1% |
| Distance to $230 target | 53.9% | 32.9% |
| Risk/Reward ratio | ~8.5:1 (target:stop) | ~1.7:1 |
| Stop proximity urgency | HIGH | LOW |

**The PM's rationale for the VST resize (proximity to stop) depends on the $149 price being correct.** If VST is at $173, the resize may be unnecessary from a stop-proximity standpoint, though the reduction in concentration from 20% to 15% is still sound risk management regardless of price. The PM must verify VST pricing before finalizing the IC memo.

This report models both the PM's proposed portfolio (as drafted) and notes where the VST price changes the assessment.

---

## Summary

| Metric | Prior (Round 4) | Proposed (Round 5) | Limit | Status |
|---|---|---|---|---|
| Total Exposure % NAV | 91.0% | 89.0% | 100% | OK |
| Deployed Exposure % NAV | 77.0% | 75.0% | -- | OK |
| Portfolio Beta (target) | 1.31 | 1.24 | 1.0 | **BREACH** (improved) |
| Portfolio Beta (deployed) | 1.12 | 1.07 | 1.0 | **BREACH** (improved) |
| VaR 95% 1-day % NAV (target) | 3.41% | 3.22% | 3.0% | **BREACH** (improved) |
| VaR 95% 1-day % NAV (deployed) | 2.83% | 2.68% | 3.0% | OK |
| VaR 99% 1-day % NAV (target) | 4.82% | 4.55% | 4.5% | **BREACH** (marginal) |
| VaR 99% 1-day % NAV (deployed) | 4.00% | 3.79% | 4.5% | OK |
| Max Single-Name % NAV | 20.0% (VST) | 15.0% (VST) | 35% | OK (improved) |
| Max Sector % NAV | 27.0% (Semi) | 25.0% (Semi) | 25% | **AT LIMIT** (improved) |
| AI Infrastructure Concentration | 83.0% | 79.0% | -- | **WARNING** (extreme, improved) |
| Drawdown from HWM | -1.5% (est.) | -1.5% (est.) | -10% | OK |
| Cash Buffer (target) | 9.0% | 11.0% | -- | OK |
| Cash Buffer (effective/deployed) | 23.0% | 25.0% | 15-20% preferred | OK |

### Key Finding

The proposed resizes are directionally risk-reducing. Cutting VST from 20% to 15% removes 5% of the highest-beta single-name exposure. Redistributing to DELL (+3%) and VRT (+2%) -- both lower-beta than VST -- reduces portfolio beta from 1.31 to 1.24 at target weights and from 1.12 to 1.07 at deployed weights. VaR estimates decline modestly. The semiconductor sector concentration drops from 27% to 25%, resolving the breach to an at-limit position. AI infrastructure thematic concentration drops from 83% to 79%.

All four prior limit breaches improve. Beta and VaR 95% target breaches narrow. VaR 99% target moves from a clear breach (4.82%) to a marginal one (4.55% vs. 4.50% limit). The semiconductor sector breach resolves to at-limit.

However, the portfolio remains structurally concentrated in AI infrastructure at 79% of NAV. The effective independent bets remain approximately 2.5-3.0. The March 4 compound risk (AVGO earnings plus tariff escalation) is the dominant near-term concern.

---

## Portfolio Composition (Proposed)

| Ticker | Prior Alloc | Proposed Alloc | Deployed % NAV | Current Price | Est. Beta | Ann. Vol | Sector |
|---|---|---|---|---|---|---|---|
| VST | 20.0% | 15.0% | 15.0% | ~$173 ($149 per PM) | 1.63 | 52% | Power Generation |
| AVGO | 13.0% | 13.0% | 5.0% | ~$318 | 1.22 | 42% | AI Semiconductors |
| COHR | 12.0% | 12.0% | 8.0% | ~$259 | 1.68 | 55% | Photonics / Optical |
| NOW | 10.0% | 10.0% | 10.0% | ~$103 | 1.00 | 45% | Enterprise Software |
| NVDA | 10.0% | 10.0% | 10.0% | ~$178 | 1.60 | 48% | AI Semiconductors |
| DELL | 5.0% | 8.0% | 8.0% | ~$148 | 1.03 | 42% | AI Hardware |
| EME | 7.0% | 7.0% | 7.0% | ~$725 | 1.17 | 38% | Infrastructure Services |
| VRT | 5.0% | 7.0% | 7.0% | ~$253 | 1.55 | 50% | AI Cooling |
| TSEM | 5.0% | 5.0% | 5.0% | ~$125 | 1.83 | 58% | Photonics / Foundry |
| MRVL | 2.0% | 2.0% | 2.0% | ~$82 | 1.97 | 55% | AI Semiconductors |
| Cash | 11.0% | 11.0% | 25.0% | -- | 0.00 | 0% | -- |

Note: AVGO deployed at 5.0% (remaining 8% contingent on March 4 earnings); COHR deployed at 8.0% (remaining 4% contingent on OFC March 17). Effective deployed capital is 75% of NAV; effective cash is 25%.

---

## Portfolio Beta Analysis

### At Target Allocations (89% Invested)

| Position | Weight | Beta | Contribution |
|---|---|---|---|
| VST | 0.150 | 1.63 | 0.245 |
| AVGO | 0.130 | 1.22 | 0.159 |
| COHR | 0.120 | 1.68 | 0.202 |
| NOW | 0.100 | 1.00 | 0.100 |
| NVDA | 0.100 | 1.60 | 0.160 |
| DELL | 0.080 | 1.03 | 0.082 |
| EME | 0.070 | 1.17 | 0.082 |
| VRT | 0.070 | 1.55 | 0.109 |
| TSEM | 0.050 | 1.83 | 0.092 |
| MRVL | 0.020 | 1.97 | 0.039 |
| Cash | 0.110 | 0.00 | 0.000 |
| **Portfolio (target)** | | | **1.270** |

### At Deployed Weights (75% Invested)

| Position | Deployed Weight | Beta | Contribution |
|---|---|---|---|
| VST | 0.150 | 1.63 | 0.245 |
| AVGO | 0.050 | 1.22 | 0.061 |
| COHR | 0.080 | 1.68 | 0.134 |
| NOW | 0.100 | 1.00 | 0.100 |
| NVDA | 0.100 | 1.60 | 0.160 |
| DELL | 0.080 | 1.03 | 0.082 |
| EME | 0.070 | 1.17 | 0.082 |
| VRT | 0.070 | 1.55 | 0.109 |
| TSEM | 0.050 | 1.83 | 0.092 |
| MRVL | 0.020 | 1.97 | 0.039 |
| Cash | 0.250 | 0.00 | 0.000 |
| **Portfolio (deployed)** | | | **1.104** |

**Beta improvement: target beta declined from 1.31 to 1.27; deployed beta from 1.12 to 1.10.** The VST trim (beta 1.63) and redistribution to DELL (beta 1.03) and VRT (beta 1.55) is net-beta-reducing because VST is the highest-beta name being cut and DELL is the lowest-beta recipient. The breach narrows but is not resolved.

Note: The prior report showed AVGO target allocation at 15%; the PM draft now shows 13% (5% deployed). This 2% reduction also contributes to beta improvement.

---

## Exposure by Sector

| Sector | % NAV (Prior Target) | % NAV (Proposed Target) | % NAV (Deployed) | Change |
|---|---|---|---|---|
| Power Generation | 20.0% | 15.0% | 15.0% | -5.0% |
| AI Semiconductors | 27.0% | 25.0% | 17.0% | -2.0% |
| Photonics / Optical | 17.0% | 17.0% | 13.0% | Unchanged |
| Enterprise Software | 10.0% | 10.0% | 10.0% | Unchanged |
| AI Hardware | 5.0% | 8.0% | 8.0% | +3.0% |
| Infrastructure Services | 7.0% | 7.0% | 7.0% | Unchanged |
| AI Cooling | 5.0% | 7.0% | 7.0% | +2.0% |
| Photonics / Foundry | 5.0% | 5.0% | 5.0% | Unchanged |
| Cash | 9.0% | 11.0% | 25.0% | +2.0% |

### Sector Concentration Flags

1. **AI Semiconductors at 25.0% (target) -- AT LIMIT.** AVGO (13%) + NVDA (10%) + MRVL (2%) = 25.0%, exactly at the 25% sector limit. The prior 27% breach is resolved. However, this is a razor-thin margin -- any increase to AVGO or MRVL post-earnings pushes the sector back into breach. If MRVL scales to 4-5% post-earnings (as the PM contemplates), the sector breaches at 27-28%.

2. **AI Infrastructure (total theme) at 79.0% (target) -- WARNING (extreme, improved from 83%).** The VST trim and AVGO allocation reduction brought thematic concentration down by 4 percentage points. This remains well above any reasonable diversification standard but is an improvement.

---

## Factor Exposures

| Factor | Exposure % NAV | Z-Score vs. History | Change vs. Prior |
|---|---|---|---|
| AI / Data Center Demand | 79.0% | >3.0 sigma (extreme) | -4.0% (improved) |
| Hyperscaler Capex Sensitivity | 72.0% | >3.0 sigma (extreme) | -4.0% (improved) |
| Semiconductor Cycle | 25.0% | ~2.5 sigma | -2.0% (improved) |
| Photonics / Optical | 17.0% | >2.5 sigma | Unchanged |
| Power Generation | 15.0% | Moderate | -5.0% (improved) |
| Enterprise Software / SaaS | 10.0% | Low | Unchanged |
| Momentum Factor (long) | ~72% | ~2.0 sigma (elevated) | -3% (slightly improved) |
| Growth Factor (long) | ~76% | ~2.0 sigma (elevated) | -4% (slightly improved) |
| Value / Defensive Factor | 0.0% | Depleted (0 sigma) | Unchanged |
| Tariff / Asian Manufacturing | ~50% | Elevated | Unchanged |

### Tariff Exposure Detail (March 4 Risk)

The PM correctly flags Asian manufacturing exposure. Quantifying by position:

| Position | Alloc | Asian Supply Chain Exposure | Tariff Sensitivity |
|---|---|---|---|
| AVGO | 13% (5% deployed) | High (TSMC foundry, Asian packaging) | HIGH |
| NVDA | 10% | High (TSMC foundry, Asian assembly) | HIGH |
| COHR | 12% (8% deployed) | Moderate (InP wafers partly domestic) | MODERATE |
| TSEM | 5% | High (Israel fab, but Asian customers) | MODERATE |
| MRVL | 2% | High (TSMC foundry) | HIGH |
| DELL | 8% | High (Asia server assembly) | HIGH |
| VRT | 7% | Moderate (global manufacturing) | MODERATE |
| EME | 7% | Low (domestic services) | LOW |
| VST | 15% | Low (domestic power generation) | LOW |
| NOW | 10% | Negligible (software) | LOW |

**Positions with HIGH tariff sensitivity: AVGO + NVDA + MRVL + DELL = 33% of NAV (19% deployed).** A 10% tariff-driven selloff in these names would produce approximately -1.9% NAV impact at deployed weights, -3.3% at target weights.

---

## Marginal Risk Contribution of Proposed Changes

### VST Resize: 20% to 15% (-5%)

| Metric | Impact |
|---|---|
| Beta contribution removed | -0.082 (from 0.326 to 0.245) |
| Marginal VaR reduction | -0.19% of NAV (95% 1-day) |
| Concentration improvement | Max single-name drops from 20% to 15% |
| Sector impact | Power sector drops from 20% to 15% |
| Theme impact | AI infrastructure concentration drops ~5% |

**Assessment:** Risk-positive. Reduces the portfolio's largest single-name concentration and removes the highest-beta exposure. The 15% level is more appropriate for a position with stop proximity uncertainty.

### DELL Resize: 5% to 8% (+3%)

| Metric | Impact |
|---|---|
| Beta contribution added | +0.031 (from 0.052 to 0.082) |
| Marginal VaR increase | +0.05% of NAV (95% 1-day) |
| Sector impact | AI Hardware increases from 5% to 8% |
| Tariff exposure added | DELL has HIGH Asian supply chain exposure |

**Assessment:** Modest risk addition. DELL at 1.03 beta is the lowest-beta name in the portfolio after NOW. The 3% increase is well-supported by the Q4 earnings beat and $43B AI backlog providing revenue visibility. However, DELL's tariff exposure is elevated given Asia-based server assembly. The timing of this increase -- days before March 4 tariff escalation -- introduces near-term event risk on the newly added capital.

### VRT Resize: 5% to 7% (+2%)

| Metric | Impact |
|---|---|
| Beta contribution added | +0.031 (from 0.078 to 0.109) |
| Marginal VaR increase | +0.04% of NAV (95% 1-day) |
| Sector impact | AI Cooling increases from 5% to 7% |

**Assessment:** Modest risk addition. VRT at 1.55 beta adds more market sensitivity per dollar than DELL. The 252% organic order growth and $15B backlog provide fundamental support, but VRT is trading near all-time highs, which increases the magnitude of potential pullbacks. The VRT increase is the smaller of the two additions and is within acceptable bounds.

### Net Effect of All Three Changes

| Metric | Prior | Proposed | Change |
|---|---|---|---|
| Portfolio Beta (target) | 1.31 | 1.27 | -0.04 |
| VaR 95% 1-day (target) | 3.41% | 3.22% | -0.19% |
| Max Single-Name | 20.0% | 15.0% | -5.0% |
| AI Theme Concentration | 83.0% | 79.0% | -4.0% |
| Semi Sector | 27.0% | 25.0% | -2.0% |

**The net effect is risk-reducing. The VST trim more than offsets the DELL and VRT increases on every risk metric.** Risk supports these changes.

---

## Concentration and Correlation Assessment

| Cluster | Positions | Combined Weight (Proposed) | Prior Weight | Avg. Pairwise Rho | Effective Independent Bets |
|---|---|---|---|---|---|
| Semiconductor | AVGO, NVDA, MRVL | 25.0% | 27.0% | 0.80-0.85 | ~1.0 |
| Photonics | COHR, TSEM | 17.0% | 17.0% | 0.75 | ~1.0 |
| Semi x Photonics (cross) | All 5 above | 42.0% | 44.0% | 0.55-0.65 | ~1.5 |
| Infrastructure / Cooling | EME, VRT, DELL | 22.0% | 17.0% | 0.45-0.55 | ~1.5 |
| Power | VST | 15.0% | 20.0% | 0.30-0.50 (avg) | ~0.7 |
| Diversifiers | NOW | 10.0% | 10.0% | 0.15-0.30 (avg) | ~1.0 |

**Effective independent bets: approximately 2.8 (improved from 2.5).** The rebalancing from VST into DELL and VRT slightly improves diversification because it distributes weight more evenly across subsectors. The Infrastructure/Cooling cluster now holds 22% vs. 17% prior, which is better balanced against the 42% semiconductor/photonics cluster.

### AVGO Earnings Contagion Map (Updated for Proposed Weights)

AVGO reports March 4. Estimated correlation-adjusted NAV impact:

| AVGO Move | Direct Impact (5% deployed) | Contagion Impact (correlated names) | Total Est. NAV Impact |
|---|---|---|---|
| +10% | +0.50% | +0.85% (NVDA +3%, MRVL +5%, COHR +2%, VRT +1.5%) | **+1.35%** |
| -10% | -0.50% | -0.95% (NVDA -4%, MRVL -6%, COHR -3%, VRT -2%, DELL -1.5%) | **-1.45%** |
| -15% | -0.75% | -1.40% (NVDA -6%, MRVL -9%, COHR -5%, VRT -3%, DELL -2%) | **-2.15%** |
| -20% | -1.00% | -1.90% (NVDA -8%, MRVL -12%, COHR -6%, VRT -4%, DELL -3%) | **-2.90%** |

The proposed resizes marginally increase contagion impact (+0.05% to +0.10%) because DELL and VRT have moderate correlation with AVGO. The increase is immaterial.

### MRVL Earnings Contagion Map (March 5)

MRVL at 2% allocation has limited direct impact, but contagion through the semiconductor cluster matters:

| MRVL Move | Direct Impact (2%) | Contagion Impact | Total Est. NAV Impact |
|---|---|---|---|
| +15% | +0.30% | +0.50% (AVGO +2%, NVDA +3%) | **+0.80%** |
| -15% | -0.30% | -0.60% (AVGO -3%, NVDA -4%) | **-0.90%** |
| -25% | -0.50% | -0.95% (AVGO -4%, NVDA -6%, COHR -2%) | **-1.45%** |

**Back-to-back earnings risk: AVGO March 4 followed by MRVL March 5 creates a two-day window where semiconductor cluster volatility is maximized.** In a compound adverse scenario (both miss), the estimated combined impact is -3.0% to -4.0% of NAV at deployed weights.

---

## Value at Risk (Parametric)

### At Deployed Weights (75% Invested)

Portfolio daily sigma at deployed weights = **1.63% of NAV** (reduced from 1.72% in prior report due to lower VST weight and higher cash).

| Measure | Deployed | Target | Limit | Status |
|---|---|---|---|---|
| VaR 95% 1-day | 2.68% | 3.22% | 3.0% | OK (deployed) / **BREACH** (target) |
| VaR 99% 1-day | 3.79% | 4.55% | 4.5% | OK (deployed) / **BREACH** (target, marginal) |
| VaR 95% 10-day | 8.47% | 10.18% | -- | -- |
| VaR 99% 10-day | 11.98% | 14.39% | -- | -- |

### VIX-Adjusted VaR (VIX at 19.9)

| Measure | Base Case | VIX-Adjusted (+20%) | Limit | Status |
|---|---|---|---|---|
| VaR 95% 1-day (deployed) | 2.68% | 3.22% | 3.0% | **BREACH** (VIX-adjusted) |
| VaR 95% 1-day (target) | 3.22% | 3.86% | 3.0% | **BREACH** |
| VaR 99% 1-day (deployed) | 3.79% | 4.55% | 4.5% | **AT LIMIT** (VIX-adjusted) |
| VaR 99% 1-day (target) | 4.55% | 5.46% | 4.5% | **BREACH** |

**The VIX-adjusted deployed VaR 95% now breaches at 3.22%.** This means that at current market volatility levels, even the deployed portfolio (with 25% effective cash) approaches the VaR limit. The proposed changes improve base-case VaR relative to the prior portfolio, but cannot overcome the VIX-driven volatility expansion.

---

## Drawdown Monitor

| Level | Current | Limit | Status |
|---|---|---|---|
| Portfolio drawdown from HWM | -1.5% (est.) | -10% | OK |
| Headroom to limit | 8.5% | -- | -- |

### Position-Level Drawdown from Entry

| Position | Entry Mid | Current | Drawdown from Entry | Stop Distance |
|---|---|---|---|---|
| VST | $167.50 | ~$173 (or ~$149 per PM) | +3.3% (or -11.0%) | 19.1% (or 6.3%) |
| AVGO | $335.00 | ~$318 | -5.1% | 9.5% |
| COHR | $250.00 | ~$259 | +3.6% | 23.5% |
| NOW | $104.00 | ~$103 | -1.0% | 17.3% |
| NVDA | $175.00 | ~$178 | +1.7% | 22.2% |
| DELL | $140.00 | ~$148 | +5.7% | 32.2% |
| EME | $725.00 | ~$725 | 0.0% | 16.9% |
| VRT | $252.50 | ~$253 | +0.2% | 26.7% |
| TSEM | $121.50 | ~$125 | +2.8% | 24.9% |
| MRVL | $76.00 | ~$82 | +7.9% | 35.4% |

**Most positions are near entry or modestly positive, indicating the portfolio is early-stage with limited unrealized P&L.** AVGO is the only name meaningfully below its entry midpoint (-5.1%), though it sits within the $320-$350 entry range at $318. If the PM's $149 price for VST is correct, VST is the most stressed position at -11% from entry mid with only 6.3% to stop.

---

## Liquidity Profile

| Bucket | % Portfolio (Invested) |
|---|---|
| < 1 day | 100.0% (89.0% of NAV) |
| 1-3 days | 0.0% |
| > 3 days | 0.0% |

All positions remain liquidatable within one trading day at 25% average daily volume participation. The DELL resize to 8% remains comfortably within daily liquidity (DELL trades approximately $2.5B ADV). TSEM at 5% remains the least liquid name (~$120M ADV) but is within same-day capacity.

### NBIS Liquidity Note (Conditional Approval)

If NBIS enters the portfolio at 5%, liquidity should be assessed. NBIS (Nebius Group) trades approximately $150-200M ADV, which is adequate for a 5% position but less liquid than the portfolio average. This is a monitoring item, not a constraint.

---

## Stress Tests

### Historical Scenarios

| Scenario | Est. P&L Impact % NAV (Target) | Est. P&L Impact % NAV (Deployed) |
|---|---|---|
| **GFC 2008** | **-49.0%** | **-38.5%** |
| **COVID Feb-Mar 2020** | **-36.5%** | **-28.5%** |
| **Rates Shock 2022** | **-31.0%** | **-24.5%** |

Stress test results improve modestly vs. prior report (-2 to -3% across scenarios) driven by the VST reduction and higher cash buffer. The deployed portfolio stress losses are approximately 22-25% lower than target portfolio losses due to the 25% effective cash buffer.

### Hypothetical Scenarios -- AI-Specific

| Scenario | Est. P&L Impact % NAV (Deployed) | Est. P&L Impact % NAV (Target) |
|---|---|---|
| **AI sentiment reversal (-25% in AI names)** | -17.5% | -22.0% |
| **Hyperscaler capex cut 25%** | -18.0% | -22.5% |
| **AVGO earnings miss March 4 (-15% gap-down)** | -2.15% | -4.30% |
| **AVGO miss + market -5% same week** | -5.30% | -8.50% |
| **AVGO miss + MRVL miss (compound March 4-5)** | -3.50% | -5.80% |
| **Momentum unwind (Aug 2024 style)** | -11.5% | -15.0% |
| **Rates +100bps** | -11.5% | -15.0% |
| **Market crash -20%** | -21.0% | -25.5% |

### Compound Scenario: March 4 AVGO Miss + Tariff Escalation + VIX Spike

This remains the highest-probability near-term compound event:

- AVGO misses earnings: -15% gap-down
- March 4 tariff escalation triggers broad selloff: S&P -3%
- VIX spikes to 30+: vol expansion across all names
- Semiconductor sector hit hardest: additional -5% for NVDA, MRVL, TSEM

**Estimated compound impact at deployed weights: -5.0% to -6.5% of NAV.** At target weights: -8.0% to -10.0% of NAV.

The proposed resizes improve this scenario by approximately 0.5% of NAV vs. the prior portfolio (less VST exposure, slightly more in lower-beta DELL).

---

## Limit Breaches / Warnings

### BREACHES (3 -- Improved from 4)

1. **PORTFOLIO BETA AT 1.27 (target) / 1.10 (deployed) -- BREACH.** Improved from 1.31/1.12. The breach narrows from 31% above limit to 27% at target weights. At deployed weights, the breach is only 10% above the 1.0 limit. Existing waiver remains active. **If the AVGO tranche does not execute, deployed beta stays at 1.10, which is a modest breach.**

2. **VaR 95% 1-DAY AT 3.22% (target) -- BREACH.** Improved from 3.41%. At deployed weights (2.68%), within limits under base-case volatility. VIX-adjusted deployed VaR of 3.22% breaches. The breach widens upon tranche execution and/or sustained VIX elevation.

3. **VaR 99% 1-DAY AT 4.55% (target) -- BREACH (marginal).** Improved from 4.82%. At target weights, the breach is 0.05% above the 4.50% limit -- essentially at limit. At deployed weights (3.79%), well within limits. **This breach resolves if AVGO target allocation remains at 13% rather than scaling to 15%.**

### RESOLVED (1)

4. **SEMICONDUCTOR SECTOR -- RESOLVED TO AT-LIMIT.** Moved from 27.0% (BREACH) to 25.0% (AT LIMIT). The AVGO allocation reduction from 15% to 13% and unchanged MRVL at 2% bring the sector exactly to the 25% limit. **Any post-earnings increase to MRVL (to 4-5% as contemplated) or acceleration of the remaining AVGO tranche re-triggers this breach.** The PM should explicitly size post-earnings scaling to keep the sector at or below 25%.

### WARNINGS (6)

5. **VIX ELEVATION -- WARNING (persistent).** VIX at 19.9, elevated from the 15.1 level when phased entry plans were designed. Higher VIX compresses the margin between deployed VaR and limits. If VIX reaches 25 (plausible on tariff escalation), deployed VaR 95% would approach 3.5% -- above the 3.0% limit.

6. **AI INFRASTRUCTURE CONCENTRATION AT 79% -- WARNING (extreme, improved from 83%).** The VST trim and AVGO adjustment reduce thematic concentration by 4 percentage points. This remains the portfolio's defining structural risk.

7. **EFFECTIVE INDEPENDENT BETS AT 2.8 -- WARNING (slightly improved from 2.5).** The rebalancing modestly improves diversification but the portfolio still functions as approximately 3 independent positions.

8. **AVGO EARNINGS EVENT RISK (MARCH 4) -- WARNING (time-sensitive, urgent).** Two trading days away. Compound scenario with tariff escalation on same date produces estimated -5.0% to -6.5% NAV impact at deployed weights. Risk supports maintaining the 5% pre-earnings cap on AVGO.

9. **MRVL EARNINGS EVENT RISK (MARCH 5) -- WARNING (time-sensitive).** One day after AVGO. At 2% allocation, direct impact is limited. Contagion through semiconductor cluster is the primary concern. Back-to-back semiconductor earnings create a two-day window of elevated cluster volatility.

10. **POST-EARNINGS SCALING COULD RE-TRIGGER BREACHES -- WARNING (forward-looking).** The PM contemplates: (a) accelerating AVGO remaining tranche on beat-and-raise, (b) scaling MRVL to 4-5% on beat-and-raise. Either action pushes the semiconductor sector above 25% and increases beta/VaR. The PM should pre-commit to sizing limits that preserve the sector at or below 25%. Specifically: if MRVL scales to 5%, AVGO target must stay at 13% (not 15%+) to maintain the 25% sector cap.

---

## Specific Position Flags

### VST (15%) -- Price Verification Required (Persistent, Round 2)

This is the second consecutive risk report flagging the VST price discrepancy. The PM must resolve this before the final IC memo. At $173, the resize rationale shifts from "stop proximity" to "concentration management" -- both are valid but produce different urgency signals.

### DELL (8%) -- Tariff Timing Risk

The 3% increase to DELL is deployed immediately (no phased entry). DELL has HIGH tariff sensitivity due to Asia-based server assembly. Deploying the additional 3% two trading days before March 4 tariff escalation introduces near-term event risk on newly committed capital. The fundamental case (Q4 beat, $43B backlog) is strong, but the timing could be suboptimal. Risk does not recommend delaying -- this is an informational flag for the IC record.

### AVGO (5% Deployed, 13% Target) -- Earnings Event March 4

- Pre-earnings position capped at 5.0% -- Risk supports this sizing
- At 5% deployed, maximum adverse impact of a -20% gap-down is approximately 2.9% of NAV (including contagion)
- March 4 is also the date of potential tariff escalation -- compound risk is elevated
- Post-earnings tranche execution should incorporate realized VIX, semiconductor sector price action, and tariff outcomes
- If AVGO beats and MRVL misses the next day, the PM faces an asymmetric information environment for semiconductor sector sizing decisions

### NBIS Conditional Approval -- Risk Assessment

The PM conditionally approved NBIS at 5% if a slot opens. Risk notes for the IC record:

| Metric | NBIS (Est.) | Portfolio Average |
|---|---|---|
| Beta (est.) | ~2.0-2.5 | 1.27 (target) |
| Ann. Volatility (est.) | ~65-75% | ~47% (weighted avg) |
| Correlation to portfolio | ~0.50-0.65 | -- |
| Liquidity (ADV) | ~$150-200M | ~$1B+ avg |

Adding NBIS at 5% would increase portfolio beta by approximately 0.10-0.12 (to ~1.37-1.39 at target) and increase VaR 95% by approximately 0.15-0.20%. NBIS is a high-beta, high-vol name that would widen all breach metrics. If a slot opens via a stop-loss exit (which reduces NAV), the risk impact could be partially offset by the capital freed. Risk flags this as a forward-looking concern -- the conditional approval should include a risk review before execution.

---

## Changes vs. Prior Risk Report

| Item | Prior Report (Round 4) | This Report (Round 5) | Change |
|---|---|---|---|
| VST Allocation | 20.0% | 15.0% | -5.0% (resize) |
| DELL Allocation | 5.0% | 8.0% | +3.0% (resize) |
| VRT Allocation | 5.0% | 7.0% | +2.0% (resize) |
| AVGO Target Allocation | 15.0% | 13.0% | -2.0% |
| Total Exposure (target) | 91.0% | 89.0% | -2.0% |
| Cash (target) | 9.0% | 11.0% | +2.0% |
| Portfolio Beta (target) | 1.31 | 1.27 | -0.04 (improved) |
| Portfolio Beta (deployed) | 1.12 | 1.10 | -0.02 (improved) |
| VaR 95% 1-day (target) | 3.41% | 3.22% | -0.19% (improved) |
| Semi Sector % NAV | 27.0% (BREACH) | 25.0% (AT LIMIT) | -2.0% (resolved) |
| AI Theme Concentration | 83.0% | 79.0% | -4.0% (improved) |
| Active Breaches | 4 | 3 | -1 (semi sector resolved) |
| Max Single-Name | 20.0% | 15.0% | -5.0% (improved) |
| Effective Independent Bets | 2.5 | 2.8 | +0.3 (improved) |
| NBIS Conditional | N/A | 5% if slot opens | New |
| VIX | 19.9 | 19.9 | Unchanged |
| S&P 500 | ~5,879 | ~5,879 | Unchanged |
| 10-Year Yield | ~4.11% | ~4.02% | -9bps |

---

## Risk Manager Items for Portfolio Manager

### 1. Verify VST Current Price (Urgent, Persistent -- Round 2)

This is the second consecutive risk report flagging this discrepancy. The PM's draft quotes VST at $149; market data shows approximately $173. The resize decision and its rationale depend on which price is correct. Risk cannot finalize the assessment until this is resolved.

### 2. Overall Assessment: Proposed Changes Are Risk-Positive

The VST trim, DELL increase, and VRT increase collectively reduce portfolio beta, VaR, single-name concentration, sector concentration, and thematic concentration. Risk supports these resizes. The capital redeployment from a high-beta name (VST at 1.63) into lower-beta recipients (DELL at 1.03, VRT at 1.55) is sound from a risk-management perspective.

### 3. Pre-Commit Post-Earnings Sizing to Preserve Sector Limit

The semiconductor sector is exactly at the 25% limit. Post-earnings scaling of AVGO or MRVL will re-trigger the breach. The PM should establish explicit sizing constraints before March 4:
- If MRVL scales to 4%: maximum AVGO target is 13% (current), keeping sector at 27% -- BREACH
- If MRVL scales to 5%: maximum AVGO target is 10%, keeping sector at 25% -- AT LIMIT
- If AVGO accelerates to full 13%: MRVL must stay at 2%, keeping sector at 25% -- AT LIMIT

Risk recommends the PM declare which scaling path is preferred in the final IC memo to avoid ad hoc decisions under earnings volatility.

### 4. DELL Tariff Timing (Informational)

The 3% DELL increase deploys two trading days before March 4 tariffs. DELL has HIGH Asian supply chain exposure. This is not a recommendation to delay -- the fundamental case is strong -- but the IC record should reflect that this deployment carries near-term tariff event risk.

### 5. NBIS Conditional Approval -- Include Risk Trigger

If NBIS enters the portfolio, it will increase beta by approximately 0.10-0.12 and VaR by approximately 0.15-0.20%. The conditional approval should include a clause requiring risk review before execution, not just slot availability.

### 6. March 4-5 Compound Event Preparedness

AVGO earnings (March 4) + tariffs (March 4) + MRVL earnings (March 5) create a three-event compound window. The worst-case deployed impact is approximately -6.5% of NAV. The PM should have contingency sizing decisions pre-committed for the following scenarios:
- AVGO beats / MRVL beats: accelerate both (sector breach accepted)
- AVGO beats / MRVL misses: accelerate AVGO, exit MRVL (sector stays at 23%)
- AVGO misses / MRVL beats: pause AVGO tranche, scale MRVL modestly
- Both miss: no scaling, reassess all semiconductor positions

---

## Model Assumptions and Limitations

1. **Beta estimates use 5-year monthly data from public sources.** VRT and NBIS have limited trading history; betas are estimated from sector comps and carry higher estimation error.

2. **Correlation estimates are structural, not statistical.** In stress events, within-cluster correlations converge toward 1.0, making VaR estimates potentially understated during drawdowns.

3. **VIX-adjusted VaR uses proportional scaling.** The relationship between VIX and individual stock volatilities is approximate. Some names (NOW, EME) may be less VIX-sensitive.

4. **Parametric VaR does not capture fat tails, gap risk, or discrete earnings events.** The March 4-5 earnings cluster is a non-normal risk. True 99th percentile losses may be 25-35% higher than parametric estimates.

5. **Tariff impact estimates are based on revenue exposure to affected supply chains.** Actual tariff costs depend on pass-through ability, existing inventory, and whether exemptions are granted. The estimates above assume full headline tariff impact with no mitigants.

6. **VST price discrepancy remains unresolved.** All VST-related risk metrics are presented at the market price (~$173) unless otherwise noted. If the PM's $149 price is correct, VST risk metrics are materially worse.

7. **NBIS risk estimates are preliminary.** Limited trading history (post-Yandex spin) and high growth-stage volatility mean beta and correlation estimates carry wide confidence intervals.
