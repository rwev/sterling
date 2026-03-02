2026-03-01 23:59 UTC
# Risk Report -- Autonomous Drones Review Assessment (Round 4) -- 2026-03-01

## Purpose

This risk report responds to the PM's Draft IC Memo Round 4 (`artifacts/portfolio-manager/2026-03-01_ic-memo-draft-4.md`), which proposes no changes to the existing 10-position portfolio and rejects all seven drone/defense pitches. The portfolio remains at 91% invested with 9% cash across 10 long-only equity positions concentrated in AI infrastructure.

Market context as of March 1, 2026: S&P 500 approximately 5,879; VIX at 19.9 (elevated from 15.1 in the prior risk report); 10-year Treasury yield approximately 4.11%. AVGO reports Q1 FY2026 earnings March 4 (two trading days away). OFC 2026 conference March 17. Iran crisis and tariff escalation remain active macro risks. VIX has risen 32% since the prior risk cycle, indicating deteriorating market risk appetite.

### Price Discrepancy Flag

The PM's draft quotes VST at approximately $149. Current market data indicates VST closed at approximately $173 on February 28, 2026. This report uses the most current market prices available. The PM should verify VST pricing before finalizing the IC memo; the difference materially affects stop proximity calculations and position P&L.

---

## Summary

| Metric | Current | Limit | Status |
|---|---|---|---|
| Total Exposure % NAV | 91.0% | 100% | OK |
| Portfolio Beta | 1.31 | 1.0 | **BREACH** (waiver active) |
| VaR 95% 1-day % NAV | 3.41% | 3.0% | **BREACH** (waiver active) |
| VaR 99% 1-day % NAV | 4.82% | 4.5% | **BREACH** (waiver active) |
| Max Single-Name % NAV | 20.0% (VST) | 35% | OK |
| Max Sector % NAV | 27.0% (Semiconductors) | 25% | **BREACH** (waiver active) |
| AI Infrastructure Concentration | 83.0% | -- | **WARNING** (extreme) |
| Drawdown from HWM | -1.5% (est.) | -10% | OK |
| Cash Buffer | 9.0% (effective 23%) | 15-20% preferred | OK (effective) / **WARNING** (target) |

### Key Finding

The portfolio is unchanged from the prior IC cycle. All four limit breaches (beta, VaR 95%, VaR 99%, semiconductor sector) persist under existing waivers. The PM's decision to reject all drone/defense pitches means no diversification was added. The critical near-term risk is AVGO earnings on March 4 -- a single event that could swing portfolio P&L by +/- 3-5% of NAV given the AI infrastructure correlation structure. VIX has risen 32% since the prior report, indicating the market is pricing higher near-term uncertainty, which elevates realized VaR estimates.

---

## Portfolio Composition (Unchanged)

| Ticker | Allocation % NAV | Deployed % NAV | Current Price | Est. Beta | Ann. Vol | Sector |
|---|---|---|---|---|---|---|
| VST | 20.0% | 20.0% | ~$173 | 1.63 | 52% | Power Generation |
| AVGO | 15.0% | 5.0% | ~$318 | 1.22 | 42% | AI Semiconductors |
| COHR | 12.0% | 8.0% | ~$259 | 1.68 | 55% | Photonics / Optical |
| NOW | 10.0% | 10.0% | ~$104 | 1.00 | 45% | Enterprise Software |
| NVDA | 10.0% | 10.0% | ~$178 | 1.60 | 48% | AI Semiconductors |
| EME | 7.0% | 7.0% | ~$725 | 1.17 | 38% | Infrastructure Services |
| DELL | 5.0% | 5.0% | ~$148 | 1.03 | 42% | AI Hardware |
| TSEM | 5.0% | 5.0% | ~$125 | 1.83 | 58% | Photonics / Foundry |
| VRT | 5.0% | 5.0% | ~$255 | 1.55 | 50% | AI Cooling |
| MRVL | 2.0% | 2.0% | ~$82 | 1.97 | 55% | AI Semiconductors |
| Cash | 9.0% | 23.0% | -- | 0.00 | 0% | -- |

Note: AVGO deployed at 5.0% (remaining 10% contingent on March 4 earnings); COHR deployed at 8.0% (remaining 4% contingent on OFC March 17). Effective cash is 23% of NAV until phased entries execute.

---

## Portfolio Beta -- BREACH (Unchanged, Waiver Active)

Portfolio beta at target allocations:

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
| MRVL | 0.020 | 1.97 | 0.039 |
| Cash | 0.090 | 0.00 | 0.000 |
| **Portfolio (target)** | | | **1.314** |

At currently deployed weights (77% invested, 23% cash):

| Position | Deployed Weight | Beta | Contribution |
|---|---|---|---|
| VST | 0.200 | 1.63 | 0.326 |
| AVGO | 0.050 | 1.22 | 0.061 |
| COHR | 0.080 | 1.68 | 0.134 |
| NOW | 0.100 | 1.00 | 0.100 |
| NVDA | 0.100 | 1.60 | 0.160 |
| EME | 0.070 | 1.17 | 0.082 |
| DELL | 0.050 | 1.03 | 0.052 |
| TSEM | 0.050 | 1.83 | 0.092 |
| VRT | 0.050 | 1.55 | 0.078 |
| MRVL | 0.020 | 1.97 | 0.039 |
| Cash | 0.230 | 0.00 | 0.000 |
| **Portfolio (deployed)** | | | **1.124** |

**Deployed portfolio beta of 1.12 is closer to the 1.0 limit than the 1.31 target beta.** The 23% effective cash buffer provides meaningful beta dampening. However, if both phased entries execute (AVGO to 15%, COHR to 12%), beta increases to 1.31. The PM should be aware that executing both tranches simultaneously raises beta by 17%.

---

## Exposure by Sector

| Sector | % NAV (Target) | % NAV (Deployed) |
|---|---|---|
| Power Generation | 20.0% | 20.0% |
| AI Semiconductors | 27.0% | 17.0% |
| Photonics / Optical | 17.0% | 13.0% |
| Enterprise Software | 10.0% | 10.0% |
| Infrastructure Services | 7.0% | 7.0% |
| AI Hardware | 5.0% | 5.0% |
| AI Cooling | 5.0% | 5.0% |
| Cash | 9.0% | 23.0% |

### Sector Concentration Flags

1. **AI Semiconductors at 27.0% (target) -- BREACH.** AVGO (15%) + NVDA (10%) + MRVL (2%) exceed the 25% sector limit by 2 percentage points. At deployed weights (17.0%), the sector is within limits. The breach materializes only when AVGO's remaining 10% tranche executes.

2. **AI Infrastructure (total theme) at 83.0% (target) -- WARNING (extreme, unchanged).** The drone review cycle explicitly evaluated diversification opportunities and rejected all seven pitches. This concentration is deliberate, not accidental.

---

## Factor Exposures

| Factor | Exposure % NAV | Z-Score vs. History | Change vs. Prior |
|---|---|---|---|
| AI / Data Center Demand | 83.0% | >3.0 sigma (extreme) | Unchanged |
| Hyperscaler Capex Sensitivity | 76.0% | >3.0 sigma (extreme) | Unchanged |
| Semiconductor Cycle | 27.0% | >2.5 sigma | Unchanged |
| Photonics / Optical | 17.0% | >2.5 sigma | Unchanged |
| Power Generation | 20.0% | Moderate | Unchanged |
| Enterprise Software / SaaS | 10.0% | Low | Unchanged |
| Momentum Factor (long) | ~75% | ~2.0 sigma (elevated) | Unchanged |
| Growth Factor (long) | ~80% | ~2.0 sigma (elevated) | Unchanged |
| Value / Defensive Factor | 0.0% | Depleted (0 sigma) | Unchanged |
| Geopolitical Risk Offset | 0.0% | Eliminated | Unchanged |

### Diversification Opportunity Cost Analysis

The PM rejected all seven drone/defense pitches. From a risk perspective, several of those names would have provided genuine diversification benefit:

**RTX (rejected, beta 0.50):** Adding even a 3% RTX position by trimming VST from 20% to 17% would have reduced portfolio beta from 1.31 to 1.24 and introduced a defense/counter-drone factor with low correlation (estimated rho 0.15-0.25) to the AI infrastructure cluster. The risk/reward argument against RTX is valid, but the PM should acknowledge that the rejection explicitly preserves the portfolio's single-factor structure.

**AVAV (rejected, beta ~1.30):** Would not have meaningfully improved diversification given its elevated beta, but would have introduced a defense procurement factor partially uncorrelated with hyperscaler capex.

**Quantitative impact of adding one defense name:** Replacing 3-5% of an existing AI position with a defense name (beta 0.50, rho 0.20 to portfolio) would reduce portfolio VaR 95% by approximately 0.10-0.15% of NAV. This is a modest improvement that does not resolve the VaR breach but would directionally reduce concentration. The PM's argument that the quality bar was not met is fair, but the portfolio remains structurally vulnerable to any single-factor shock.

Risk does not recommend or oppose any specific trade. The diversification analysis is provided for IC documentation purposes.

---

## Concentration and Correlation Assessment

The correlation matrix is unchanged from the prior risk report. Key clusters:

| Cluster | Positions | Combined Weight | Avg. Pairwise Rho | Effective Independent Bets |
|---|---|---|---|---|
| Semiconductor | AVGO, NVDA, MRVL | 27.0% | 0.80-0.85 | ~1.0 |
| Photonics | COHR, TSEM | 17.0% | 0.75 | ~1.0 |
| Semi x Photonics (cross) | All 5 above | 44.0% | 0.55-0.65 | ~1.5 |
| Infrastructure | EME, VRT | 12.0% | 0.55 | ~1.3 |
| Diversifiers | NOW | 10.0% | 0.15-0.30 (avg) | ~1.0 |
| Power | VST | 20.0% | 0.30-0.50 (avg) | ~0.7 |

**Effective independent bets: approximately 2.5 (unchanged).** The portfolio holds 10 names but achieves the diversification equivalent of 2.5 independent positions. This is the minimum observed level since inception.

### AVGO Earnings Contagion Map

AVGO reports March 4. Estimated correlation-adjusted NAV impact of an AVGO earnings surprise:

| AVGO Move | Direct Impact (5% deployed) | Contagion Impact (correlated names) | Total Est. NAV Impact |
|---|---|---|---|
| +10% | +0.50% | +0.80% (NVDA +3%, MRVL +5%, COHR +2%) | **+1.30%** |
| -10% | -0.50% | -0.90% (NVDA -4%, MRVL -6%, COHR -3%, VRT -2%) | **-1.40%** |
| -15% | -0.75% | -1.35% (NVDA -6%, MRVL -9%, COHR -5%, VRT -3%) | **-2.10%** |
| -20% | -1.00% | -1.80% (NVDA -8%, MRVL -12%, COHR -6%, VRT -4%, TSEM -3%) | **-2.80%** |

**The -15% AVGO gap-down scenario requested by the PM produces an estimated -2.10% NAV impact.** This accounts for AVGO's 5% deployed weight plus contagion through the semiconductor and photonics clusters. If AVGO were at its full 15% target allocation, the same -15% gap-down would produce approximately -4.50% NAV impact (direct -2.25% plus contagion -2.25%).

The phased entry approach limits AVGO event risk to manageable levels at current deployment. Risk supports maintaining the 5% pre-earnings cap.

---

## Value at Risk (Parametric)

### At Deployed Weights (77% Invested)

Portfolio daily sigma at deployed weights = **1.72% of NAV** (reduced from 2.07% at target weights due to 23% cash).

| Measure | Deployed | Target | Limit | Status |
|---|---|---|---|---|
| VaR 95% 1-day | 2.83% | 3.41% | 3.0% | OK (deployed) / **BREACH** (target) |
| VaR 99% 1-day | 4.00% | 4.82% | 4.5% | OK (deployed) / **BREACH** (target) |
| VaR 95% 10-day | 8.95% | 10.79% | -- | -- |
| VaR 99% 10-day | 12.65% | 15.25% | -- | -- |

**At deployed weights, VaR is within limits.** The 23% effective cash buffer provides meaningful risk reduction. However, executing both phased entries (AVGO +10%, COHR +4%) will push VaR above limits. The PM should be aware that the VaR breaches are latent -- they materialize upon tranche execution.

### VIX-Adjusted VaR

VIX has risen from 15.1 to 19.9 since the prior risk report (+32%). If realized volatilities increase proportionally, VaR estimates should be adjusted upward by approximately 20-25%:

| Measure | Base Case | VIX-Adjusted | Limit | Status |
|---|---|---|---|---|
| VaR 95% 1-day (deployed) | 2.83% | 3.40% | 3.0% | **BREACH** (VIX-adjusted) |
| VaR 95% 1-day (target) | 3.41% | 4.09% | 3.0% | **BREACH** |

**The VIX increase is a material development.** At current elevated volatility, even the deployed portfolio approaches the VaR 95% limit. If VIX remains above 20 when phased entries execute, the target portfolio VaR could exceed 4.0% (95%) and 5.7% (99%).

---

## Drawdown Monitor

| Level | Current | Limit | Status |
|---|---|---|---|
| Portfolio drawdown from HWM | -1.5% (est.) | -10% | OK |
| Headroom to limit | 8.5% | -- | -- |

### VST Stop Proximity -- Updated

Using updated pricing (VST at approximately $173 vs. $149 quoted in the draft):

| Metric | PM Draft Value | Updated Value |
|---|---|---|
| VST price | ~$149 | ~$173 |
| Distance to $140 stop | 6.0% | **19.1%** |
| Distance to $230 target | 54.4% | 32.9% |
| Risk/Reward | Compressed | **Improved (1.8:1)** |

**If VST is indeed at $173, the stop proximity warning from the prior IC is substantially reduced.** The position now has a healthy 19.1% buffer to the $140 hard stop. The PM should confirm current pricing; if $173 is correct, the stop proximity urgency noted in the draft is overstated.

At $149 (PM draft price), the stop proximity warning stands at 6.0% -- dangerously close. The difference between these two prices materially changes the risk assessment for the largest portfolio position.

---

## Liquidity Profile

| Bucket | % Portfolio (Invested) |
|---|---|
| < 1 day | 100.0% (91.0% of NAV) |
| 1-3 days | 0.0% |
| > 3 days | 0.0% |

All positions are liquidatable within one trading day at 25% average daily volume participation. TSEM remains the least liquid name at approximately $120M ADV, but at 5% of NAV it is comfortably within same-day liquidity.

---

## Stress Tests

### Historical Scenarios (Unchanged from Prior Report)

| Scenario | Est. P&L Impact % NAV (Target) | Est. P&L Impact % NAV (Deployed) |
|---|---|---|
| **GFC 2008** | **-52.0%** | **-41.0%** |
| **COVID Feb-Mar 2020** | **-38.5%** | **-30.5%** |
| **Rates Shock 2022** | **-33.0%** | **-26.0%** |

Deployed portfolio stress losses are approximately 20% lower than target portfolio losses due to the 23% cash buffer. This is a meaningful advantage that the PM should weigh before executing phased entries into a rising-VIX environment.

### Hypothetical Scenarios -- AI-Specific (Updated for VIX Environment)

| Scenario | Est. P&L Impact % NAV (Deployed) | Est. P&L Impact % NAV (Target) |
|---|---|---|
| **AI sentiment reversal (-25% in AI names)** | -18.5% | -23.5% |
| **Hyperscaler capex cut 25%** | -19.0% | -24.0% |
| **AVGO earnings miss March 4 (-15% gap-down)** | -2.10% | -4.50% |
| **AVGO earnings miss + market -5% same week** | -5.50% | -8.90% |
| **Momentum unwind (Aug 2024 style)** | -12.5% | -16.0% |
| **Rates +100bps** | -12.5% | -16.0% |
| **Market crash -20%** | -22.5% | -27.0% |

### New Scenario: AVGO Miss + VIX Spike + Tariff Escalation (Compound Event)

Given the March 4 tariff implementation and AVGO earnings falling on the same date, a compound scenario is plausible:

- AVGO misses earnings: -15% gap-down
- Tariff escalation triggers broad market selloff: S&P -3%
- VIX spikes to 30: vol expansion across all names
- Semiconductor sector hit hardest: additional -5% for NVDA, MRVL

**Estimated compound impact at deployed weights: -5.5% to -7.0% of NAV.** At target weights: -8.5% to -10.5% of NAV. This compound scenario approaches the -10% drawdown limit at target weights. The 23% effective cash buffer at deployed weights provides meaningful protection.

---

## Limit Breaches / Warnings

### BREACHES (4 -- Unchanged, All Under Waiver)

1. **PORTFOLIO BETA AT 1.31 (target) / 1.12 (deployed) -- BREACH.** Waiver from prior IC remains active. Deployed beta of 1.12 is only 12% above the 1.0 limit, a more modest breach than the target beta suggests. The breach widens to 31% when phased entries execute.

2. **VaR 95% 1-DAY AT 3.41% (target) / 2.83% (deployed) -- BREACH (target only).** At deployed weights, VaR is within the 3.0% limit. Breach materializes upon tranche execution. With VIX-adjusted volatilities, deployed VaR approaches 3.40% -- effectively at limit.

3. **VaR 99% 1-DAY AT 4.82% (target) / 4.00% (deployed) -- BREACH (target only).** Same dynamics as VaR 95%.

4. **SEMICONDUCTOR SECTOR AT 27.0% (target) / 17.0% (deployed) -- BREACH (target only).** Sector is within limits at deployed weights. Breach materializes when AVGO tranche executes. At 27%, the breach is 2% above the 25% limit (reduced from 29% in the prior report due to MRVL reduction from 4% to 2%).

### WARNINGS (6)

5. **VIX ELEVATION -- WARNING (new).** VIX at 19.9, up 32% from 15.1 at the prior risk report. This is the highest VIX level since the portfolio rotation. Elevated VIX increases realized volatilities and widens the VaR distribution. The PM should consider whether this is the right environment to execute phased entries that increase risk exposure.

6. **AI INFRASTRUCTURE CONCENTRATION AT 83% -- WARNING (extreme, unchanged).** The drone review cycle explicitly evaluated and rejected diversification. The IC record should reflect that this concentration is a deliberate choice, not an oversight.

7. **EFFECTIVE INDEPENDENT BETS AT 2.5 -- WARNING (unchanged).** The portfolio has the diversification equivalent of 2.5 positions despite holding 10 names.

8. **AVGO EARNINGS EVENT RISK (MARCH 4) -- WARNING (time-sensitive, urgent).** Two trading days away. Estimated -2.10% NAV impact on a -15% gap-down at deployed weights. Combined with tariff escalation on the same date, compound risk is elevated. This is the single most important near-term risk event.

9. **PHASED ENTRY EXECUTION IN RISING-VIX ENVIRONMENT -- WARNING (new).** Both AVGO and COHR tranches, if triggered, would increase deployed capital from 77% to 91% and push all VaR/beta metrics above limits. Executing these tranches while VIX is at 20 (vs. 15 when the phased plans were designed) means the portfolio absorbs more risk per dollar deployed. The PM should consider whether tranche sizing should be adjusted for the current volatility regime.

10. **CASH BUFFER TRANSITION -- WARNING.** Effective cash of 23% provides meaningful downside protection currently. Once both tranches execute, cash drops to 9%. The PM should evaluate whether maintaining a larger cash buffer (15-18%) is more appropriate given elevated VIX and the tariff/geopolitical backdrop.

---

## Specific Position Flags

### VST (20.0%) -- Price Verification Required

The PM's draft quotes VST at approximately $149 (6.0% above stop). Market data indicates VST is at approximately $173 (19.1% above stop). If the updated price is correct, the VST stop proximity warning from the draft is substantially overstated, and the position's risk/reward profile is improved (R/R of approximately 1.8:1 at $173 vs. compressed at $149). The PM must verify the current VST price before finalizing the IC memo.

### AVGO (5.0% Deployed, 15.0% Target) -- Earnings Event March 4

- Pre-earnings position capped at 5.0% per prior IC -- Risk supports this sizing
- At 5% deployed, maximum adverse impact of a -20% gap-down is approximately 2.8% of NAV (including contagion)
- March 4 is also the date of potential tariff escalation -- compound risk is elevated
- Post-earnings tranche execution should incorporate realized VIX and market conditions, not just AVGO earnings results

### COHR (8.0% Deployed, 12.0% Target) -- OFC March 17 Catalyst

- At $259, within entry range ($240-$260)
- R/R at current price: 16% upside to $300 target vs. 19% downside to $210 stop (0.8:1)
- The 4% remaining tranche contingent on OFC confirmation is appropriate given the compressed near-term R/R
- If OFC disappoints, the 8% position at 0.8:1 R/R should be flagged for reassessment

### MRVL (2.0%) -- Tracking Position

- At $82, above the $72-$80 entry range
- Highest beta in the portfolio at 1.97
- At 2.0% allocation (reduced from 4.0% in earlier draft), marginal risk contribution is de minimis
- The 2% reduction from 4% to 2% helped reduce the semiconductor sector breach from 29% to 27%

---

## Changes vs. Prior Risk Report

| Item | Prior Report (Round 3) | This Report (Round 4) | Change |
|---|---|---|---|
| Portfolio Composition | Same 10 positions | Same 10 positions | No change |
| Total Exposure % NAV | 91.0% (target) | 91.0% (target) | No change |
| Portfolio Beta (target) | 1.35 | 1.31 | -0.04 (MRVL 4% to 2%) |
| Portfolio Beta (deployed) | N/A (pre-rotation) | 1.12 | New metric |
| VaR 95% 1-day (target) | 3.41% | 3.41% | No change |
| VaR 95% 1-day (deployed) | N/A | 2.83% | New metric |
| Max Sector % NAV | 29.0% (Semi) | 27.0% (Semi) | -2.0% (MRVL reduction) |
| VIX | 15.1 | 19.9 | +32% (material deterioration) |
| S&P 500 | ~5,860 | ~5,879 | +0.3% |
| 10-Year Yield | ~4.00% | ~4.11% | +11bps |
| VST Price | ~$149 | ~$173 (needs verification) | +16% (materially different) |
| VST Stop Proximity | 6.0% | 19.1% (if $173 correct) | Greatly improved |
| Active Breaches | 4 | 4 | Unchanged (all under waiver) |
| Active Warnings | 7 | 6 | -1 (VST stop proximity may be resolved) |
| Days to AVGO Earnings | ~3 | 2 | Imminent |

---

## Risk Manager Recommendations for Portfolio Manager

### 1. Verify VST Current Price (Urgent, Factual)

The draft IC memo quotes VST at approximately $149. Market data suggests approximately $173. This 16% discrepancy materially changes the risk profile of the largest portfolio position. If $173 is correct, the stop proximity warning should be downgraded from "urgent" to "monitoring." If $149 is correct, the 6.0% stop proximity remains the most acute near-term risk.

### 2. Consider VIX Environment for Phased Entry Execution (Recommendation)

VIX has risen 32% from 15.1 to 19.9 since the phased entry plans were designed. Higher VIX means wider daily price swings and higher probability of adverse gaps. The PM should consider:

- **Option A:** Execute phased entries as planned, accepting that VaR will breach limits at elevated volatilities. This is appropriate if the PM has high conviction in near-term catalysts (AVGO earnings, OFC).
- **Option B:** Reduce tranche sizes (e.g., AVGO remaining tranche from 10% to 7%, COHR from 4% to 3%) to maintain a 15% cash buffer post-execution. This preserves optionality if VIX continues rising.

Risk does not recommend either option but notes that Option B maintains deployed VaR within limits even at elevated volatility.

### 3. AVGO Earnings Compound Risk (Informational)

March 4 combines AVGO earnings and potential tariff escalation. The compound scenario (-15% AVGO gap-down plus -3% broad market) produces an estimated -5.5% to -7.0% NAV impact at deployed weights. This is within the -10% drawdown limit but consumes 65-82% of available headroom. The PM should have a contingency plan for this compound scenario -- specifically, whether to pause the AVGO tranche execution if the market is simultaneously selling off on tariff news.

### 4. Diversification Rejection -- IC Documentation (Procedural)

The PM correctly notes that the IC explicitly evaluated diversification opportunities (7 drone/defense pitches) and rejected them on quality grounds, not oversight. Risk concurs that this should be documented in the final IC memo. From a pure risk measurement perspective, adding a low-beta defense name (RTX at 0.50 beta) would have modestly improved the portfolio's risk profile, but the improvement is marginal (VaR reduction of approximately 0.10-0.15% of NAV) and does not justify a position that fails the PM's quality criteria.

### 5. Monitor Cash Buffer During Tranche Execution (Standing)

Effective cash of 23% provides meaningful protection. If both tranches execute in a compressed timeframe (AVGO post-March 4, COHR post-March 17), cash drops from 23% to 9% within two weeks. The PM should consider staggering execution: complete the AVGO tranche first, assess market conditions, then execute the COHR tranche. This maintains a higher average cash buffer through the March catalyst window.

---

## Model Assumptions and Limitations

1. **Beta estimates use 5-year monthly data from public sources.** VRT has limited trading history; its beta is estimated from sector comps. Both VRT and DELL carry higher estimation error than established names.

2. **Correlation estimates are structural, not statistical.** The high within-cluster correlations (0.80-0.85 for semiconductors) are based on shared demand drivers. In stress events, correlations converge toward 1.0, making the VaR estimates potentially understated during drawdowns.

3. **VIX-adjusted VaR uses a proportional scaling assumption.** The relationship between VIX changes and individual stock volatilities is approximate. Some names (NOW, EME) may be less VIX-sensitive than the broad adjustment implies.

4. **Parametric VaR does not capture fat tails, gap risk, or the discrete nature of earnings events.** The AVGO March 4 earnings event is a non-normal risk that VaR treats as continuous. True 99th percentile losses may be 25-35% higher than parametric estimates.

5. **Deployed vs. target portfolio risk metrics represent a range, not a point estimate.** The portfolio's actual risk profile sits between deployed and target depending on execution timing, which is catalyst-contingent.

6. **Price data sourced from multiple web providers as of March 1, 2026.** Intraday prices may differ from closing prices. The VST price discrepancy between the PM's draft and market data requires resolution.
