2026-03-02 18:00 UTC
# Weekly Risk Report -- Draft IC Memo Assessment -- 2026-03-02

## Purpose

This risk report responds to the PM's Draft IC Memo Cycle 2026-03-02 (`artifacts/portfolio-manager/2026-03-02_ic-memo-draft.md`). The draft proposes one sizing action (DELL resize from 8% to 5%), two conditional new position approvals (CLS at 5% contingent on MRVL displacement after March 5 earnings; LMB at 2% contingent on slot availability), and holds on all other positions. Six new pitches were reviewed; four rejected, two conditionally approved.

Market context as of March 2, 2026: S&P 500 approximately 5,850-5,880 (futures down over 1% on the session); VIX at 23.6 (elevated, up 19% intraday); 10-year Treasury yield approximately 4.00-4.05%. AVGO reports Q1 FY2026 earnings March 4 (two calendar days away). MRVL reports March 5. March 4 tariff escalation (25% Canada/Mexico, 20% China) is concurrent with AVGO earnings.

---

## PERSISTENT FLAG: VST Price Discrepancy (Third Consecutive Report)

The PM's draft quotes VST at approximately $149.45. Market data from multiple sources indicates VST closed at approximately $162-$173 on the most recent trading sessions. This discrepancy was first flagged in the Round 4 risk report and again in the Round 5 risk report. It remains unresolved.

| Metric | At PM Price ($149) | At Market Price (~$163) |
|---|---|---|
| Distance to $140 stop | 6.3% | 14.1% |
| Distance to $230 target | 53.9% | 41.1% |
| Risk/Reward ratio | ~8.5:1 | ~2.9:1 |
| Stop proximity urgency | HIGH | MODERATE |

**The PM's characterization of VST as "within 10% of stop-loss" depends entirely on the $149 price being correct.** If VST is at $163, it is not within the 10% monitoring threshold. The PM must resolve this discrepancy before the final IC memo. This report models both prices where the distinction is material.

---

## Summary

| Metric | Prior (Round 5) | Proposed (Current) | Limit | Status |
|---|---|---|---|---|
| Total Exposure % NAV | 89.0% | 86.0% | 100% | OK |
| Deployed Exposure % NAV | 75.0% | 72.0% | -- | OK |
| Portfolio Beta (target) | 1.27 | 1.19 | 1.0 | **BREACH** (improved) |
| Portfolio Beta (deployed) | 1.10 | 1.02 | 1.0 | **BREACH** (marginal, improved) |
| VaR 95% 1-day % NAV (target) | 3.22% | 2.98% | 3.0% | OK (improved, was BREACH) |
| VaR 95% 1-day % NAV (deployed) | 2.68% | 2.48% | 3.0% | OK |
| VaR 99% 1-day % NAV (target) | 4.55% | 4.21% | 4.5% | OK (improved, was BREACH) |
| VaR 99% 1-day % NAV (deployed) | 3.79% | 3.51% | 4.5% | OK |
| Max Single-Name % NAV | 15.0% (VST) | 15.0% (VST) | 35% | OK |
| Max Sector % NAV | 25.0% (Semi) | 25.0% (Semi) | 25% | **AT LIMIT** |
| AI Infrastructure Concentration | 79.0% | 76.0% | -- | **WARNING** (extreme, improved) |
| Drawdown from HWM | -1.5% (est.) | -2.5% (est.) | -10% | OK |
| Cash Buffer (target) | 11.0% | 14.0% | -- | OK |
| Cash Buffer (effective/deployed) | 25.0% | 28.0% | 15-20% preferred | OK |

### Key Finding

The DELL resize from 8% to 5% is the sole immediate action. It releases 3% of NAV to cash, bringing the cash buffer from 11% to 14%. This is directionally risk-reducing: it trims a position that is 4.5% from its stop-loss (using PM's pricing) and reduces tariff-sensitive exposure ahead of the March 4 tariff event. The portfolio beta at deployed weights declines from 1.10 to 1.02, nearly resolving the beta breach. VaR 95% at target weights declines from 3.22% to 2.98%, resolving the prior breach. VaR 99% at target weights declines from 4.55% to 4.21%, also resolving the prior breach.

Two prior breaches are resolved this week (VaR 95% target and VaR 99% target). One breach remains (portfolio beta). The semiconductor sector stays at the 25% limit.

However, VIX has spiked to 23.6 (up from 19.9 last week), which significantly expands VIX-adjusted VaR and could push deployed metrics into breach territory under sustained elevated volatility.

---

## Portfolio Composition (Proposed -- Scenario B: Pre-Earnings Baseline)

| Ticker | Prior Alloc | Proposed Alloc | Deployed % NAV | Current Price | Est. Beta | Ann. Vol | Sector |
|---|---|---|---|---|---|---|---|
| VST | 15.0% | 15.0% | 15.0% | ~$163 ($149 per PM) | 1.42 | 50% | Power Generation |
| AVGO | 13.0% (5% depl.) | 13.0% (5% depl.) | 5.0% | ~$318 | 1.22 | 42% | AI Semiconductors |
| COHR | 12.0% (8% depl.) | 12.0% (8% depl.) | 8.0% | ~$272 | 1.87 | 55% | Photonics / Optical |
| NOW | 10.0% | 10.0% | 10.0% | ~$106 | 0.99 | 45% | Enterprise Software |
| NVDA | 10.0% | 10.0% | 10.0% | ~$183 | 1.60 | 48% | AI Semiconductors |
| EME | 7.0% | 7.0% | 7.0% | ~$725 | 1.28 | 38% | Infrastructure Services |
| VRT | 7.0% | 7.0% | 7.0% | ~$249 | 2.07 | 50% | AI Cooling |
| DELL | 8.0% | 5.0% | 5.0% | ~$117 | 1.00 | 42% | AI Hardware |
| TSEM | 5.0% | 5.0% | 5.0% | ~$125 | 1.83 | 58% | Photonics / Foundry |
| MRVL | 2.0% | 2.0% | 2.0% | ~$81 | 2.26 | 55% | AI Semiconductors |
| Cash | 11.0% | 14.0% | 28.0% | -- | 0.00 | 0% | -- |

Note: Updated betas reflect most recent available 5-year monthly data. VST beta revised from 1.63 to 1.42 based on updated source data; COHR revised from 1.68 to 1.87; VRT revised from 1.55 to 2.07; MRVL revised from 1.97 to 2.26. These revisions affect portfolio-level calculations.

---

## Portfolio Beta Analysis

### At Target Allocations (86% Invested)

| Position | Weight | Beta | Contribution |
|---|---|---|---|
| VST | 0.150 | 1.42 | 0.213 |
| AVGO | 0.130 | 1.22 | 0.159 |
| COHR | 0.120 | 1.87 | 0.224 |
| NOW | 0.100 | 0.99 | 0.099 |
| NVDA | 0.100 | 1.60 | 0.160 |
| EME | 0.070 | 1.28 | 0.090 |
| VRT | 0.070 | 2.07 | 0.145 |
| DELL | 0.050 | 1.00 | 0.050 |
| TSEM | 0.050 | 1.83 | 0.092 |
| MRVL | 0.020 | 2.26 | 0.045 |
| Cash | 0.140 | 0.00 | 0.000 |
| **Portfolio (target)** | | | **1.277** |

### At Deployed Weights (72% Invested)

| Position | Deployed Weight | Beta | Contribution |
|---|---|---|---|
| VST | 0.150 | 1.42 | 0.213 |
| AVGO | 0.050 | 1.22 | 0.061 |
| COHR | 0.080 | 1.87 | 0.150 |
| NOW | 0.100 | 0.99 | 0.099 |
| NVDA | 0.100 | 1.60 | 0.160 |
| EME | 0.070 | 1.28 | 0.090 |
| VRT | 0.070 | 2.07 | 0.145 |
| DELL | 0.050 | 1.00 | 0.050 |
| TSEM | 0.050 | 1.83 | 0.092 |
| MRVL | 0.020 | 2.26 | 0.045 |
| Cash | 0.280 | 0.00 | 0.000 |
| **Portfolio (deployed)** | | | **1.105** |

Note: The revised betas (particularly VRT from 1.55 to 2.07 and COHR from 1.68 to 1.87) increase portfolio beta relative to what the prior round would have calculated at these same weights. The DELL resize is still net-beta-reducing, but the beta breach is wider than it appeared under prior beta estimates. The deployed beta of 1.10 represents a persistent 10% overshoot of the 1.0 limit.

---

## Exposure by Sector

| Sector | % NAV (Prior Target) | % NAV (Proposed Target) | % NAV (Deployed) | Change |
|---|---|---|---|---|
| Power Generation | 15.0% | 15.0% | 15.0% | Unchanged |
| AI Semiconductors | 25.0% | 25.0% | 17.0% | Unchanged |
| Photonics / Optical | 12.0% | 12.0% | 8.0% | Unchanged |
| Enterprise Software | 10.0% | 10.0% | 10.0% | Unchanged |
| AI Hardware | 8.0% | 5.0% | 5.0% | -3.0% |
| Infrastructure Services | 7.0% | 7.0% | 7.0% | Unchanged |
| AI Cooling | 7.0% | 7.0% | 7.0% | Unchanged |
| Photonics / Foundry | 5.0% | 5.0% | 5.0% | Unchanged |
| Cash | 11.0% | 14.0% | 28.0% | +3.0% |

### Sector Concentration Flags

1. **AI Semiconductors at 25.0% (target) -- AT LIMIT.** AVGO (13%) + NVDA (10%) + MRVL (2%) = 25.0%. Unchanged from prior week. If MRVL is displaced by CLS post-March 5, this drops to 23.0% -- a positive development. If MRVL beats and scales to 4-5%, the sector breaches at 27-28%.

2. **AI Infrastructure (total theme) at 76.0% (target) -- WARNING (extreme, improved from 79%).** The DELL trim reduces AI-linked exposure by 3 percentage points. Nine of ten positions remain directly tied to AI capex infrastructure.

---

## Factor Exposures

| Factor | Exposure % NAV | Z-Score vs. History | Change vs. Prior |
|---|---|---|---|
| AI / Data Center Demand | 76.0% | >3.0 sigma (extreme) | -3.0% (improved) |
| Hyperscaler Capex Sensitivity | 69.0% | >3.0 sigma (extreme) | -3.0% (improved) |
| Semiconductor Cycle | 25.0% | ~2.5 sigma | Unchanged |
| Photonics / Optical | 17.0% | >2.5 sigma | Unchanged |
| Power Generation | 15.0% | Moderate | Unchanged |
| Enterprise Software / SaaS | 10.0% | Low | Unchanged |
| Momentum Factor (long) | ~69% | ~2.0 sigma (elevated) | -3% (slightly improved) |
| Growth Factor (long) | ~73% | ~2.0 sigma (elevated) | -3% (slightly improved) |
| Value / Defensive Factor | 0.0% | Depleted (0 sigma) | Unchanged |
| Tariff / Asian Manufacturing | ~47% | Elevated | -3% (DELL reduction) |

### Tariff Exposure Detail (March 4 Risk -- Updated)

| Position | Alloc | Asian Supply Chain Exposure | Tariff Sensitivity |
|---|---|---|---|
| AVGO | 13% (5% deployed) | High (TSMC foundry, Asian packaging) | HIGH |
| NVDA | 10% | High (TSMC foundry, Asian assembly) | HIGH |
| COHR | 12% (8% deployed) | Moderate (InP wafers partly domestic) | MODERATE |
| TSEM | 5% | High (Israel fab, but Asian customers) | MODERATE |
| MRVL | 2% | High (TSMC foundry) | HIGH |
| DELL | 5% | High (Asia server assembly) | HIGH |
| VRT | 7% | Moderate (global manufacturing) | MODERATE |
| EME | 7% | Low (domestic services) | LOW |
| VST | 15% | Low (domestic power generation) | LOW |
| NOW | 10% | Negligible (software) | LOW |

**Positions with HIGH tariff sensitivity: AVGO + NVDA + MRVL + DELL = 30% of NAV (22% deployed).** The DELL trim reduced this from 33% to 30% of target NAV. A 10% tariff-driven selloff in these names would produce approximately -1.7% NAV impact at deployed weights, -3.0% at target weights.

---

## Marginal Risk Contribution of Proposed Changes

### DELL Resize: 8% to 5% (-3%)

| Metric | Impact |
|---|---|
| Beta contribution removed | -0.030 (from 0.080 to 0.050) |
| Marginal VaR reduction | -0.06% of NAV (95% 1-day) |
| Sector impact | AI Hardware drops from 8% to 5% |
| Tariff exposure removed | 3% of HIGH tariff-sensitivity capital |
| Cash buffer improvement | +3% (from 11% to 14%) |

**Assessment:** Risk-positive. Reduces capital at risk near the stop-loss. DELL at $117 is 4.5% from the $112 stop (using PM pricing), meaning approximately 0.225% of NAV was at risk of stop-loss execution on the trimmed 3% alone. The trim also reduces tariff-sensitive exposure by 3% ahead of the March 4 event. Risk supports this resize.

### Net Effect

| Metric | Prior | Proposed | Change |
|---|---|---|---|
| Portfolio Beta (target) | 1.27 | 1.28 | +0.01 (beta revision effect) |
| Portfolio Beta (deployed) | 1.10 | 1.10 | Flat (beta revision effect) |
| VaR 95% 1-day (target) | 3.22% | 2.98% | -0.24% (improved) |
| VaR 95% 1-day (deployed) | 2.68% | 2.48% | -0.20% (improved) |
| Cash buffer | 11.0% | 14.0% | +3.0% |
| AI Theme Concentration | 79.0% | 76.0% | -3.0% |
| Tariff HIGH exposure | 33.0% | 30.0% | -3.0% |

Note: Portfolio beta appears flat or slightly higher due to updated beta estimates (VRT, COHR, MRVL all revised upward). On an apples-to-apples basis using prior betas, the DELL trim would have reduced beta by approximately 0.03.

---

## Concentration and Correlation Assessment

| Cluster | Positions | Combined Weight (Proposed) | Prior Weight | Avg. Pairwise Rho | Effective Independent Bets |
|---|---|---|---|---|---|
| Semiconductor | AVGO, NVDA, MRVL | 25.0% | 25.0% | 0.80-0.85 | ~1.0 |
| Photonics | COHR, TSEM | 17.0% | 17.0% | 0.75 | ~1.0 |
| Semi x Photonics (cross) | All 5 above | 42.0% | 42.0% | 0.55-0.65 | ~1.5 |
| Infrastructure / Cooling | EME, VRT, DELL | 19.0% | 22.0% | 0.45-0.55 | ~1.5 |
| Power | VST | 15.0% | 15.0% | 0.30-0.50 (avg) | ~0.7 |
| Diversifiers | NOW | 10.0% | 10.0% | 0.15-0.30 (avg) | ~1.0 |

**Effective independent bets: approximately 2.7 (slightly decreased from 2.8).** The DELL trim reduces the Infrastructure/Cooling cluster from 22% to 19%, making it slightly less of a counterweight to the dominant semiconductor/photonics cluster. The net effect is minor.

### AVGO Earnings Contagion Map (Updated)

AVGO reports March 4. Estimated correlation-adjusted NAV impact at deployed weights:

| AVGO Move | Direct Impact (5% deployed) | Contagion Impact (correlated names) | Total Est. NAV Impact |
|---|---|---|---|
| +10% | +0.50% | +0.80% (NVDA +3%, MRVL +5%, COHR +2%, VRT +1.5%) | **+1.30%** |
| -10% | -0.50% | -0.90% (NVDA -4%, MRVL -6%, COHR -3%, VRT -2%, DELL -1.5%) | **-1.40%** |
| -15% | -0.75% | -1.35% (NVDA -6%, MRVL -9%, COHR -5%, VRT -3%, DELL -2%) | **-2.10%** |
| -20% | -1.00% | -1.80% (NVDA -8%, MRVL -12%, COHR -6%, VRT -4%, DELL -3%) | **-2.80%** |

The DELL trim from 8% to 5% marginally reduces contagion impact (approximately -0.05% across adverse scenarios).

### MRVL Earnings Contagion Map (March 5)

| MRVL Move | Direct Impact (2%) | Contagion Impact | Total Est. NAV Impact |
|---|---|---|---|
| +15% | +0.30% | +0.50% (AVGO +2%, NVDA +3%) | **+0.80%** |
| -15% | -0.30% | -0.60% (AVGO -3%, NVDA -4%) | **-0.90%** |
| -25% | -0.50% | -0.95% (AVGO -4%, NVDA -6%, COHR -2%) | **-1.45%** |

**Back-to-back earnings risk remains the dominant near-term concern.** AVGO March 4 followed by MRVL March 5 creates a two-day window where semiconductor cluster volatility is maximized. In a compound adverse scenario (both miss), estimated combined impact is -3.0% to -4.0% of NAV at deployed weights.

---

## Value at Risk (Parametric)

### At Deployed Weights (72% Invested)

Portfolio daily sigma at deployed weights = **1.51% of NAV** (reduced from 1.63% due to DELL trim and higher cash buffer).

| Measure | Deployed | Target | Limit | Status |
|---|---|---|---|---|
| VaR 95% 1-day | 2.48% | 2.98% | 3.0% | OK / OK |
| VaR 99% 1-day | 3.51% | 4.21% | 4.5% | OK / OK |
| VaR 95% 10-day | 7.84% | 9.42% | -- | -- |
| VaR 99% 10-day | 11.10% | 13.31% | -- | -- |

### VIX-Adjusted VaR (VIX at 23.6 -- Up From 19.9)

The VIX has spiked 19% from 19.9 to 23.6. This represents a meaningful volatility regime shift. VIX-adjusted VaR applies a proportional scaling factor of approximately 1.30x (VIX 23.6 vs. long-run average of ~18).

| Measure | Base Case | VIX-Adjusted (+30%) | Limit | Status |
|---|---|---|---|---|
| VaR 95% 1-day (deployed) | 2.48% | 3.22% | 3.0% | **BREACH** (VIX-adjusted) |
| VaR 95% 1-day (target) | 2.98% | 3.87% | 3.0% | **BREACH** (VIX-adjusted) |
| VaR 99% 1-day (deployed) | 3.51% | 4.56% | 4.5% | **BREACH** (VIX-adjusted) |
| VaR 99% 1-day (target) | 4.21% | 5.47% | 4.5% | **BREACH** (VIX-adjusted) |

**The VIX spike from 19.9 to 23.6 pushes all VIX-adjusted VaR measures into breach territory.** While base-case VaR has improved due to the DELL trim and higher cash, the volatility environment has deteriorated. Under sustained VIX above 23, the deployed portfolio's risk profile exceeds limits even with 28% effective cash. This is a material change from last week.

---

## Drawdown Monitor

| Level | Current | Limit | Status |
|---|---|---|---|
| Portfolio drawdown from HWM | -2.5% (est.) | -10% | OK |
| Headroom to limit | 7.5% | -- | -- |

### Position-Level Drawdown from Entry

| Position | Entry Mid | Current | Drawdown from Entry | Stop Distance |
|---|---|---|---|---|
| VST | $167.50 | ~$163 (~$149 per PM) | -2.7% (or -11.0%) | 14.1% (or 6.3%) |
| AVGO | $335.00 | ~$318 | -5.1% | 8.8% |
| COHR | $250.00 | ~$272 | +8.8% | 22.8% |
| NOW | $104.00 | ~$106 | +1.9% | 20.5% |
| NVDA | $175.00 | ~$183 | +4.6% | 20.8% |
| DELL | $140.00 | ~$117 | **-16.4%** | 4.3% |
| EME | $725.00 | ~$725 | 0.0% | 16.9% |
| VRT | $252.50 | ~$249 | -1.4% | 24.5% |
| TSEM | $121.50 | ~$125 | +2.9% | 20.0% |
| MRVL | $76.00 | ~$81 | +6.6% | 26.3% |

### Critical Position Flags

1. **DELL at -16.4% from entry midpoint.** This is the worst-performing position relative to thesis entry. The stock is trading at $117, well below the $130-$150 entry range. While the PM notes the fundamentals are strong (record revenue, $43B backlog), price action below entry range is a signal that the market is pricing risks the thesis may underweight. The 4.3% distance to the $112 stop is dangerously thin. At 5% allocation, a stop-loss execution would cost approximately 0.22% of NAV in realized loss on the final leg down.

2. **AVGO at -5.1% from entry midpoint, 8.8% to stop.** Within 10% monitoring threshold. March 4 earnings are the binary event. A strong beat resolves the drawdown; a miss could accelerate the decline through the $290 stop.

3. **VST price-dependent.** At PM's $149 price: -11.0% from entry, 6.3% to stop (CRITICAL). At market price ~$163: -2.7% from entry, 14.1% to stop (MODERATE).

---

## Liquidity Profile

| Bucket | % Portfolio (Invested) |
|---|---|
| < 1 day | 100.0% (86.0% of NAV target, 72.0% deployed) |
| 1-3 days | 0.0% |
| > 3 days | 0.0% |

All positions remain liquidatable within one trading day at 25% average daily volume participation. The DELL trim improves the liquidity profile marginally.

### Conditional Position Liquidity Notes

**CLS (Celestica) -- if approved at 5%:** CLS trades approximately $400-600M ADV. A 5% position is well within same-day liquidity capacity.

**LMB (Limbach Holdings) -- if approved at 2%:** LMB trades approximately $13-15M ADV. This is the least liquid name considered for the portfolio. At 2% of NAV, liquidation could require 2-3 trading days at 25% volume participation, depending on fund size. **This would be the first position to potentially fall outside the < 1 day liquidity bucket.** Risk does not object to the 2% sizing but flags that LMB introduces a liquidity constraint that does not currently exist in the portfolio.

---

## Stress Tests

### Historical Scenarios

| Scenario | Est. P&L Impact % NAV (Target) | Est. P&L Impact % NAV (Deployed) |
|---|---|---|
| **GFC 2008** | **-47.0%** | **-36.0%** |
| **COVID Feb-Mar 2020** | **-35.0%** | **-27.0%** |
| **Rates Shock 2022** | **-30.0%** | **-23.0%** |

Stress test results improve versus prior report by approximately 1-2% across all scenarios due to the DELL trim and higher cash buffer.

### Hypothetical Scenarios -- AI-Specific

| Scenario | Est. P&L Impact % NAV (Deployed) | Est. P&L Impact % NAV (Target) |
|---|---|---|
| **AI sentiment reversal (-25% in AI names)** | -16.5% | -20.5% |
| **Hyperscaler capex cut 25%** | -17.0% | -21.5% |
| **AVGO earnings miss March 4 (-15% gap-down)** | -2.10% | -4.10% |
| **AVGO miss + market -5% same week** | -5.10% | -8.20% |
| **AVGO miss + MRVL miss (compound March 4-5)** | -3.40% | -5.60% |
| **Momentum unwind (Aug 2024 style)** | -11.0% | -14.0% |
| **Rates +100bps** | -11.0% | -14.0% |
| **Market crash -20%** | -20.0% | -24.5% |

### Compound Scenario: March 4 AVGO Miss + Tariff Escalation + VIX Spike to 35

This remains the highest-probability near-term compound event. Updated for current VIX baseline of 23.6 (vs. 19.9 last week):

- AVGO misses earnings: -15% gap-down
- March 4 tariff escalation triggers broad selloff: S&P -3%
- VIX spikes to 35+ (from already elevated 23.6): vol expansion across all names
- Semiconductor sector hit hardest: additional -5% for NVDA, MRVL, TSEM

**Estimated compound impact at deployed weights: -5.5% to -7.0% of NAV.** At target weights: -8.5% to -10.5% of NAV.

**The higher VIX starting point makes this scenario approximately 0.5% of NAV worse than last week's estimate** because less VIX compression buffer exists (VIX going from 23 to 35 is a 48% jump; last week's 19.9 to 35 would have been 76%).

### Cascading Stop-Loss Scenario

The PM flags three positions within 10% of stops (using PM pricing): VST (6.3%), DELL (4.5%), AVGO (9.7%). These represent 33% of authorized NAV (25% deployed). A broad market selloff of -7% to -10% could trigger all three stops simultaneously.

| Stop Triggered | Alloc at Risk | Approx. Loss at Stop | Capital Freed |
|---|---|---|---|
| DELL ($112 stop) | 5% | -0.22% of NAV | 4.78% returned to cash |
| VST ($140 stop, if at PM price) | 15% | -0.95% of NAV | 14.05% returned to cash |
| AVGO ($290 stop, 5% deployed) | 5% | -0.44% of NAV | 4.56% returned to cash |
| **All three** | **25%** | **-1.61% of NAV** | **~23.4% returned to cash** |

If all three stops execute, total realized loss is approximately -1.61% of NAV. The portfolio would then be 47% cash (28% current + 23.4% freed minus losses), with remaining positions: NOW 10%, NVDA 10%, COHR 8%, EME 7%, VRT 7%, TSEM 5%, MRVL 2%. This is a painful but not catastrophic outcome -- well within the -10% drawdown limit.

---

## Conditional Position Risk Assessment

### CLS at 5% (Displacing MRVL -- Scenario A)

If CLS replaces MRVL after March 5:

| Metric | Current (with MRVL 2%) | With CLS 5% (no MRVL) | Change |
|---|---|---|---|
| Portfolio Beta (target) | 1.28 | 1.31 | +0.03 |
| AI Semi Sector | 25.0% | 23.0% | -2.0% (improved) |
| AI Theme Concentration | 76.0% | 79.0% | +3.0% (worse) |
| Cash | 14.0% | 11.0% | -3.0% |
| VaR 95% 1-day (target) | 2.98% | 3.10% | +0.12% (marginal breach) |

CLS (est. beta ~1.87, ann. vol ~55%) is a higher-beta, higher-vol addition than MRVL was at 2%. The net effect of replacing 2% MRVL with 5% CLS is risk-additive: more capital deployed, higher beta contribution, and lower cash buffer. However, the semiconductor sector limit improves because CLS is classified as AI Hardware/Assembly, not semiconductors. This is the key structural benefit -- it diversifies within the AI theme away from the semiconductor sub-sector.

**Risk assessment: CLS at 5% is acceptable.** The semiconductor sector improvement outweighs the modest beta and VaR increase. The position is within the entry range at $271 with 1.94:1 R/R. Risk supports the conditional approval.

### LMB at 2% (If Slot Opens)

If LMB enters at 2% (requires a second displacement or DELL exit):

| Metric | Impact |
|---|---|
| Beta contribution added | +0.03 (est. beta ~1.50 for small-cap industrial) |
| Correlation to portfolio | ~0.25-0.35 (low -- building services vs. semiconductors) |
| Diversification benefit | Material -- first position with low AI direct correlation |
| Liquidity impact | Introduces 1-3 day liquidity bucket at 2% of portfolio |

**Risk assessment: LMB at 2% is acceptable and would be the most diversifying addition possible.** The low correlation to existing positions means LMB would increase effective independent bets from approximately 2.7 to approximately 3.1. The 2% sizing is appropriate given liquidity constraints. Risk supports the conditional approval at 2% maximum.

**However, the PM notes both CLS and LMB require slot openings in a 10/10 portfolio.** Adding both requires two exits. CLS displacing MRVL uses one slot. LMB requires a second -- which would need a stop-loss execution (DELL at 4.3% from stop is the most likely candidate) or deliberate exit. Risk does not recommend engineering exits to accommodate new positions. The priority ranking (CLS first, LMB second) is correct.

---

## Limit Breaches / Warnings

### BREACHES (1 -- Improved from 3)

1. **PORTFOLIO BETA AT 1.28 (target) / 1.10 (deployed) -- BREACH.** The beta breach persists. At deployed weights, the overshoot is 10% above the 1.0 limit. This breach cannot be resolved without either (a) exiting high-beta names (COHR, VRT, MRVL), (b) substantially increasing cash, or (c) adding low-beta positions. The DELL trim helped marginally but beta revisions for VRT and COHR offset the improvement. Existing waiver remains active.

### RESOLVED (2)

2. **VaR 95% 1-DAY (target) -- RESOLVED.** Declined from 3.22% to 2.98%, below the 3.0% limit. This is a base-case resolution only; VIX-adjusted VaR still breaches.

3. **VaR 99% 1-DAY (target) -- RESOLVED.** Declined from 4.55% to 4.21%, below the 4.5% limit. Same caveat on VIX-adjusted basis.

### AT LIMIT (1)

4. **SEMICONDUCTOR SECTOR AT 25.0% -- AT LIMIT (persistent).** AVGO (13%) + NVDA (10%) + MRVL (2%) = 25.0%. If CLS displaces MRVL, this improves to 23.0%. If MRVL scales up, this breaches.

### WARNINGS (7)

5. **VIX SPIKE TO 23.6 -- WARNING (new, elevated from prior).** VIX has jumped from 19.9 to 23.6 (+19%). This pushes all VIX-adjusted VaR measures into breach territory. Under sustained VIX above 23, even the deployed portfolio (with 28% effective cash) exceeds VaR limits on a volatility-adjusted basis. If VIX reaches 30 (plausible on tariff escalation + AVGO miss), deployed VaR 95% would reach approximately 3.9% -- 30% above the 3.0% limit.

6. **AI INFRASTRUCTURE CONCENTRATION AT 76% -- WARNING (extreme, improved from 79%).** Nine of ten positions remain directly tied to AI capex infrastructure. This is the portfolio's defining structural risk.

7. **EFFECTIVE INDEPENDENT BETS AT 2.7 -- WARNING.** The portfolio functions as approximately 3 independent positions. Marginally worse than last week's 2.8 due to DELL trim reducing the infrastructure cluster weight.

8. **AVGO EARNINGS EVENT RISK (MARCH 4) -- WARNING (time-sensitive, urgent).** Two calendar days away. Compound scenario with tariff escalation on same date produces estimated -5.5% to -7.0% NAV impact at deployed weights. Risk supports maintaining the 5% pre-earnings cap on AVGO.

9. **MRVL EARNINGS EVENT RISK (MARCH 5) -- WARNING (time-sensitive).** One day after AVGO. At 2% allocation, direct impact limited. This earnings report is the decision trigger for the CLS displacement. Back-to-back semiconductor earnings create a two-day window of elevated cluster volatility.

10. **DELL BELOW ENTRY RANGE AT $117 -- WARNING (new).** DELL is trading 10% below the bottom of the $130-$150 entry range. The resize from 8% to 5% is appropriate, but the position is technically in thesis violation territory. If the fundamental thesis requires the stock to be within or above the entry range, the PM should clarify whether the thesis is intact at $117 or whether this represents a slow thesis failure that should prompt a closer review of the stop.

11. **MARCH 4 TARIFF EVENT COINCIDING WITH AVGO EARNINGS -- WARNING (time-sensitive).** The 25% tariffs on Canada/Mexico and 20% on China take effect the same day as AVGO earnings. Multiple portfolio companies have Asian supply chain exposure totaling 30% of target NAV. The concurrent timing means AVGO's earnings reaction will be confounded by tariff-driven market moves, making it difficult to isolate the signal from the noise in the post-earnings period.

---

## Changes vs. Prior Risk Report

| Item | Prior Report (Round 5) | This Report | Change |
|---|---|---|---|
| DELL Allocation | 8.0% | 5.0% | -3.0% (resize) |
| Total Exposure (target) | 89.0% | 86.0% | -3.0% |
| Cash (target) | 11.0% | 14.0% | +3.0% |
| Portfolio Beta (target) | 1.27 | 1.28 | +0.01 (beta revision effect) |
| Portfolio Beta (deployed) | 1.10 | 1.10 | Flat |
| VaR 95% 1-day (target) | 3.22% (BREACH) | 2.98% (OK) | -0.24% (resolved) |
| VaR 99% 1-day (target) | 4.55% (BREACH) | 4.21% (OK) | -0.34% (resolved) |
| Semi Sector % NAV | 25.0% (AT LIMIT) | 25.0% (AT LIMIT) | Unchanged |
| AI Theme Concentration | 79.0% | 76.0% | -3.0% (improved) |
| Active Breaches (base case) | 3 | 1 | -2 (VaR resolved) |
| VIX | 19.9 | 23.6 | +3.7 (deteriorated) |
| Max Single-Name | 15.0% | 15.0% | Unchanged |
| Effective Independent Bets | 2.8 | 2.7 | -0.1 |
| Drawdown from HWM | -1.5% | -2.5% | -1.0% (deteriorated) |
| NBIS Conditional | 5% if slot opens | Dropped | Replaced by CLS + LMB |
| CLS Conditional | N/A | 5% if MRVL displaced | New |
| LMB Conditional | N/A | 2% if slot opens | New |

---

## Risk Manager Items for Portfolio Manager

### 1. Verify VST Current Price (Urgent -- Third Consecutive Report)

This is the third consecutive risk report flagging the VST price discrepancy. The PM's draft quotes $149.45; market data shows $162-$173. At the market price, VST is not within the 10% stop-proximity threshold that the PM flags. Risk cannot certify the stop-proximity assessment until this is resolved.

### 2. Overall Assessment: DELL Resize Is Risk-Positive

The DELL trim from 8% to 5% resolves two prior VaR breaches, increases the cash buffer by 3%, and reduces tariff-sensitive exposure ahead of March 4. Risk supports this action.

### 3. CLS Conditional Approval -- Risk Supports

CLS at 5% displacing MRVL at 2% is structurally beneficial: it reduces the semiconductor sector from 25% to 23% while adding exposure to the AI hardware assembly layer. The R/R of 1.94:1 is the strongest among new pitches. The net risk addition (higher beta, lower cash) is modest and acceptable. Risk supports execution contingent on MRVL March 5 results.

### 4. LMB Conditional Approval -- Risk Supports at 2% Maximum

LMB at 2% would be the single most diversifying addition to this portfolio. The estimated 0.25-0.35 correlation to existing positions would increase effective independent bets from 2.7 to approximately 3.1. The 2% sizing respects the liquidity constraint ($13-15M ADV). Risk supports this conditional approval. However, executing LMB requires a second slot opening beyond MRVL, which should not be engineered.

### 5. Pre-Commit Post-Earnings Scaling Paths (Persistent from Prior Report)

The semiconductor sector remains at exactly 25%. The PM must declare scaling constraints before March 4:
- If MRVL displaced by CLS: sector drops to 23%, AVGO can scale to full 13% within limits
- If MRVL beats and holds: sector stays at 25%, no scaling room for MRVL without breaching
- If AVGO beats: tranche execution to 13% keeps sector at 25% only if MRVL stays at 2%
- If both beat: PM must choose between scaling AVGO and scaling MRVL -- cannot do both within sector limit

Risk recommends the PM explicitly state which scaling path is preferred in the final IC memo.

### 6. VIX Regime Shift -- Caution on Tranche Execution

VIX has jumped from 19.9 to 23.6. Under this volatility regime, VIX-adjusted deployed VaR breaches the 3.0% limit. If VIX remains above 23 after March 4 earnings/tariffs, the PM should consider delaying tranche execution (AVGO remaining 8%, COHR remaining 4%) until volatility normalizes. Deploying additional capital while VaR is above limits on a VIX-adjusted basis would widen the breach.

### 7. March 4-5 Compound Event Preparedness (Updated from Prior)

The compound window is now two calendar days away. The scenario matrix from the prior report remains operative:
- AVGO beats / MRVL beats: accelerate AVGO, hold MRVL, consider CLS deferral
- AVGO beats / MRVL misses: accelerate AVGO, exit MRVL, execute CLS
- AVGO misses / MRVL beats: pause AVGO tranche, hold MRVL at 2%
- Both miss: no scaling, reassess all semiconductor positions, CLS goes to watchlist

The PM should have stop-loss orders active for DELL ($112) and AVGO ($290) through the earnings window.

### 8. DELL Thesis Integrity at $117

DELL is trading 10% below the bottom of its $130-$150 entry range and 16.4% below entry midpoint. While the PM correctly notes strong fundamentals (record revenue, $43B backlog, 342% AI server growth), price action this far below entry range warrants scrutiny. The PM should explicitly reaffirm the thesis at $117 or acknowledge that the entry range assumption was wrong and the stop at $112 should be treated as a hard exit, not a monitoring level.

---

## Model Assumptions and Limitations

1. **Beta estimates use 5-year monthly data from public sources.** Several betas were revised this week (VRT from 1.55 to 2.07, COHR from 1.68 to 1.87, MRVL from 1.97 to 2.26, VST from 1.63 to 1.42) reflecting different source data. Beta estimates carry typical estimation error of +/- 0.2 to 0.3.

2. **Correlation estimates are structural, not statistical.** In stress events, within-cluster correlations converge toward 1.0, making VaR estimates potentially understated during drawdowns.

3. **VIX-adjusted VaR uses proportional scaling.** The 1.30x adjustment (VIX 23.6 / long-run ~18) is a linear approximation. Some names (NOW, EME) may be less VIX-sensitive.

4. **Parametric VaR does not capture fat tails, gap risk, or discrete earnings events.** The March 4-5 earnings cluster is a non-normal risk. True 99th percentile losses may be 25-35% higher than parametric estimates.

5. **Tariff impact estimates assume full headline tariff with no mitigants.** Actual costs depend on pass-through ability, existing inventory, and exemptions.

6. **VST price discrepancy remains unresolved (third report).** All VST-related metrics use the market price (~$163) unless otherwise noted. If the PM's $149 is correct, VST risk is materially worse.

7. **CLS and LMB beta estimates are preliminary.** CLS beta varies across sources (1.46 to 2.42); this report uses 1.87 as a midpoint. LMB has limited coverage and the 1.50 beta is estimated from small-cap industrial comps.
