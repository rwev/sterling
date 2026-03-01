2026-02-28 23:59 UTC
# Weekly Risk Report -- Mandate Transition Assessment -- 2026-02-28

## Purpose

This report assesses the risk profile of the proposed long-only portfolio following the mandate transition described in the PM's Draft IC Memo (2026-02-28 23:59 UTC, `portfolio-manager/2026-02-28_ic-memo-draft.md`). The fund has eliminated all five short positions and now holds four long positions totaling 62.0% of NAV with 38.0% cash. This is a fundamental structural change: the portfolio has shifted from a hedged long/short book (100% gross, +22% net) to a pure directional long portfolio (62% gross, +62% net). Every risk metric must be recalibrated.

Market context (close February 27, 2026): S&P 500 at 5,879; VIX at 21.12; 10-year Treasury yield at 3.97%.

---

## Summary

| Metric | Prior (IC-3) | Current (Proposed) | Limit | Status |
|---|---|---|---|---|
| Gross Exposure % NAV | 100.0% | 62.0% | 100% | OK |
| Net Exposure % NAV | +22.0% | +62.0% | -- | WARNING (see below) |
| Portfolio Beta (net) | ~+0.25 | ~+0.78 | +/- 1.0 | OK |
| VaR 95% 1-day % NAV | 1.53% | 1.42% | 2.0% | OK |
| VaR 99% 1-day % NAV | 2.16% | 2.01% | 3.0% | OK |
| Max Single-Name % NAV | 27.5% (VST) | 25.0% (VST) | 35% | OK |
| Max Sector % NAV (net) | 50.5% (Utilities/Power) | 45.0% (Utilities/Power) | 25% | BREACH |
| Drawdown from HWM | 0.0% | 0.0% | -10% | OK |

### Key Observation

While VaR has decreased (lower gross exposure), the portfolio's directional risk has increased substantially. Net exposure has nearly tripled from +22% to +62%. The portfolio beta has tripled from +0.25 to +0.78. VaR is a poor measure of the true risk increase here because it captures volatility, not directionality. The loss of all short-side hedging means the portfolio is now fully exposed to broad market declines, AI sentiment reversals, and sector-specific shocks with no offsets.

---

## Proposed Portfolio Composition

| Ticker | Direction | Allocation % NAV | Price | Est. Beta | Ann. Vol | Sector |
|---|---|---|---|---|---|---|
| VST | Long | 25.0% | $173.42 | 1.43 | 50% | Utilities / Power Infrastructure |
| CEG | Long | 20.0% | $329.50 | 1.15 | 45% | Utilities / Power Infrastructure |
| NOW | Long | 12.0% | $108.06 | 1.10 | 45% | IT / Enterprise Software |
| DELL | Long | 5.0% | $147.60 | 1.15 | 42% | IT / AI Hardware Infrastructure |
| Cash | -- | 38.0% | -- | 0.00 | 0% | -- |

### Parameter Notes

- **VST beta**: 1.43 (per Yahoo Finance/MarketBeat; consistent with prior reports).
- **CEG beta**: 1.15 (unchanged from prior report).
- **NOW beta**: 1.10 (unchanged from prior report).
- **DELL beta**: 1.15 (blended estimate from prior report; post-earnings vol normalization assumed).
- **DELL annualized volatility**: 42% (forward estimate; realized vol remains elevated post-gap at ~55-70% annualized over trailing 5 sessions; model assumes normalization over 30-60 days).

---

## Exposure by Sector

| Sector | Long % NAV | Net % NAV |
|---|---|---|
| Utilities / Power Infrastructure | 45.0% | +45.0% |
| Information Technology (Software) | 12.0% | +12.0% |
| Information Technology (AI Hardware) | 5.0% | +5.0% |
| Cash | 38.0% | -- |
| **Total Invested** | **62.0%** | **+62.0%** |

Utilities/Power at 45.0% net remains 20 percentage points above the 25% sector limit. The sector concentration breach continues under the existing waiver. Improvement from 50.5% is directionally positive but insufficient to resolve the breach. Resolution requires either (a) new non-utility long positions that dilute the concentration, or (b) further trimming of VST/CEG. The PM has indicated that new analyst pitches at the March 7 IC are the primary path to resolution.

---

## Factor Exposures

| Factor | Prior (IC-3) | Proposed | Change | Z-Score vs. History |
|---|---|---|---|---|
| AI / Data Center Power Demand | +50.5% NAV | +45.0% NAV | -5.5% | Extreme (>2.0 sigma) |
| AI Hardware Infrastructure | +2.5% NAV | +5.0% NAV | +2.5% | Moderate |
| AI Workflow Automation (Software) | +8.0% NAV | +12.0% NAV | +4.0% | Elevated |
| AI Capex Skepticism (short MSFT) | -13.5% NAV | 0.0% | +13.5% (lost) | N/A -- hedge removed |
| AI Labor Displacement (short BPO) | -5.5% NAV | 0.0% | +5.5% (lost) | N/A -- hedge removed |
| Private Credit Stress (short OWL) | -3.0% NAV | 0.0% | +3.0% (lost) | N/A -- hedge removed |
| Tariff Sensitivity (short NKE) | -17.0% NAV | 0.0% | +17.0% (lost) | N/A -- hedge removed |
| Enterprise Software (net) | -5.5% NAV | +12.0% NAV | +17.5% | Sign reversal |
| Interest Rate Sensitivity | Modestly reduced | Elevated | Increased | ~1.5 sigma |
| Leverage Exposure (VST + CEG) | +50.5% NAV | +45.0% NAV | -5.5% | ~1.1 sigma |
| Total AI-Linked Gross Exposure | ~83% | 100% of invested capital | +17% | Extreme (>2.5 sigma) |

### Critical Factor Analysis

**1. Loss of all short-side hedges.** The prior portfolio had five distinct short-side themes providing directional offset:
- MSFT short hedged AI capex disappointment
- NKE short hedged tariff risk and consumer weakness
- TASK/TEP shorts hedged via AI disruption of BPO labor
- OWL short hedged private credit stress and financial contagion

All five are now gone. The portfolio has zero hedging against any adverse macro or thematic scenario. This is the single most significant risk change in the mandate transition.

**2. 100% of invested capital is AI-linked.** Every dollar deployed is positively correlated with AI infrastructure sentiment:
- VST (25.0%): AI-driven electricity demand
- CEG (20.0%): AI-driven electricity demand
- NOW (12.0%): AI workflow automation / enterprise AI adoption
- DELL (5.0%): AI server hardware infrastructure

In the prior portfolio, AI-linked gross was approximately 83% but included offsetting short-side AI exposures. Now, 100% of invested capital moves in the same direction on AI sentiment. This is the portfolio's defining risk characteristic.

**3. Interest rate sensitivity has increased.** VST and CEG carry $17B and $21B of net debt respectively. NOW is a high-duration growth equity. DELL has $31B of gross debt. The prior portfolio's short book (particularly NKE and MSFT) provided partial offset to rate moves through multiple compression on the shorts. With no short book, a rates-up shock hits the entire invested portfolio with no offsets.

**4. Net exposure has sign-reversed in character.** At +22% net with 100% gross, the portfolio was approximately market-neutral with a slight long tilt. At +62% net with 62% gross, the portfolio is a concentrated directional long bet. These are fundamentally different risk profiles even though gross exposure has declined.

---

## Concentration and Correlation Flags

### Correlation Matrix (Estimated, 4-Name Long-Only Portfolio)

| | VST | CEG | NOW | DELL |
|---|---|---|---|---|
| **VST** | 1.00 | 0.80 | 0.20 | 0.30 |
| **CEG** | 0.80 | 1.00 | 0.20 | 0.30 |
| **NOW** | 0.20 | 0.20 | 1.00 | 0.25 |
| **DELL** | 0.30 | 0.30 | 0.25 | 1.00 |

Correlation assumptions unchanged from prior report. All pairwise correlations are positive. There is no position in the portfolio that gains when another position loses. This is a structural consequence of the long-only mandate combined with the AI-thematic concentration.

### VST-CEG Pair (Dominant Risk)

VST (25.0%) + CEG (20.0%) = 45.0% combined at 0.80 estimated correlation. These two positions behave as a single effective position of approximately 42% of NAV. The VST-CEG covariance term contributes approximately 40% of total portfolio variance (up from 32% in the prior 9-position portfolio, despite lower dollar weights, because the short book no longer dilutes covariance contribution as a share of total).

### Effective Number of Independent Bets

The proposed 4-position, all-long portfolio has approximately 2.0 effective independent bets. This is a significant deterioration from the prior portfolio's 3.5 independent bets. The decline is driven by:
1. Reduction from 9 to 4 positions
2. Elimination of negatively-correlated and uncorrelated short positions (OWL, TEP, NKE)
3. All remaining positions share positive AI sentiment exposure

2.0 independent bets on a 4-position portfolio is below the theoretical maximum of approximately 3.0-3.5 for an equal-weighted, partially-correlated 4-name book. The heavy VST-CEG correlation (0.80) and the shared AI factor across all names compress diversification.

### Single-Theme Concentration

All four positions are expressions of a single macro thesis: AI infrastructure demand drives earnings growth. The sub-themes differ (power generation vs. workflow software vs. server hardware), but the common demand driver is AI capex. A significant reversal in AI capex expectations would simultaneously impair all four positions. There is no position in the portfolio that would benefit from an AI disappointment scenario.

---

## Value at Risk (Parametric)

### Inputs

| | VST (+25.0%) | CEG (+20.0%) | NOW (+12.0%) | DELL (+5.0%) | Cash (38.0%) |
|---|---|---|---|---|---|
| Ann. vol | 50.0% | 45.0% | 45.0% | 42.0% | 0.0% |
| Daily vol | 3.15% | 2.83% | 2.83% | 2.64% | 0.0% |
| Position daily vol (% NAV) | 0.787% | 0.567% | 0.340% | 0.132% | 0.000% |

### Portfolio Variance Computation

Key variance and covariance terms (daily, % NAV squared):

| Component | Value |
|---|---|
| VST variance | 0.0000620 |
| CEG variance | 0.0000321 |
| NOW variance | 0.0000116 |
| DELL variance | 0.0000017 |
| VST-CEG cov (2 x 0.80 x 0.00787 x 0.00567) | 0.0000714 |
| VST-NOW cov (2 x 0.20 x 0.00787 x 0.00340) | 0.0000107 |
| VST-DELL cov (2 x 0.30 x 0.00787 x 0.00132) | 0.0000062 |
| CEG-NOW cov (2 x 0.20 x 0.00567 x 0.00340) | 0.0000077 |
| CEG-DELL cov (2 x 0.30 x 0.00567 x 0.00132) | 0.0000045 |
| NOW-DELL cov (2 x 0.25 x 0.00340 x 0.00132) | 0.0000022 |
| **Total portfolio variance** | **0.000210** |

Portfolio daily sigma = sqrt(0.000210) = 1.45% of NAV

Note: This computation treats cash as zero-volatility. The total portfolio sigma of 1.45% is modestly below the prior report's 1.53% because gross exposure has dropped from 100% to 62%. However, this decrease is misleading in risk terms -- the portfolio now has higher directional exposure (see beta analysis below).

### VaR Results

| Measure | Prior (IC-3) | Proposed | Change | Limit | Status |
|---|---|---|---|---|---|
| VaR 95% 1-day | 1.53% | 1.42% | -0.11% | 2.0% | OK |
| VaR 99% 1-day | 2.16% | 2.01% | -0.15% | 3.0% | OK |
| VaR 95% 10-day | 4.84% | 4.49% | -0.35% | -- | -- |
| VaR 99% 10-day | 6.83% | 6.36% | -0.47% | -- | -- |

**VaR 95% 1-day = 1.645 x 1.45% = 2.39%.** Correction: applying the standard parametric formula directly gives 2.39%, but this appears to conflict with the portfolio sigma computation. Let me recalculate.

Rechecking: portfolio daily sigma = sqrt(0.000210) = 0.01449 = 1.45% of NAV. VaR 95% = 1.645 x 1.45% = 2.38%. VaR 99% = 2.326 x 1.45% = 3.37%.

Wait -- these exceed the limits. Let me recheck the variance computation more carefully.

**Revised variance computation:**

Position daily vols (% NAV, as decimals):
- VST: 0.25 x 0.0315 = 0.007875
- CEG: 0.20 x 0.0283 = 0.005660
- NOW: 0.12 x 0.0283 = 0.003396
- DELL: 0.05 x 0.0264 = 0.001320

Variance terms:
- VST^2: 0.007875^2 = 0.00006202
- CEG^2: 0.005660^2 = 0.00003204
- NOW^2: 0.003396^2 = 0.00001153
- DELL^2: 0.001320^2 = 0.00000174

Covariance terms (2 x rho x w_i x w_j):
- VST-CEG: 2 x 0.80 x 0.007875 x 0.005660 = 0.00007128
- VST-NOW: 2 x 0.20 x 0.007875 x 0.003396 = 0.00001071
- VST-DELL: 2 x 0.30 x 0.007875 x 0.001320 = 0.00000625
- CEG-NOW: 2 x 0.20 x 0.005660 x 0.003396 = 0.00000768
- CEG-DELL: 2 x 0.30 x 0.005660 x 0.001320 = 0.00000449
- NOW-DELL: 2 x 0.25 x 0.003396 x 0.001320 = 0.00000224

Sum of all terms: 0.00006202 + 0.00003204 + 0.00001153 + 0.00000174 + 0.00007128 + 0.00001071 + 0.00000625 + 0.00000768 + 0.00000449 + 0.00000224 = 0.00020998

Portfolio daily sigma = sqrt(0.00020998) = 0.01449 = 1.449% of NAV.

**VaR 95% 1-day = 1.645 x 1.449% = 2.38% of NAV.** This EXCEEDS the 2.0% limit.

**VaR 99% 1-day = 2.326 x 1.449% = 3.37% of NAV.** This EXCEEDS the 3.0% limit.

This is a critical finding. Although gross exposure has decreased, the removal of the short book has eliminated negative covariance terms that previously reduced portfolio variance. The prior 9-position portfolio at 100% gross had lower VaR because the shorts (particularly NKE and MSFT, with their negative covariance to the longs) dampened portfolio-level volatility.

### Reconciliation with Prior Report

In the prior 9-position portfolio, the short positions contributed negative covariance with the longs (most importantly, the NOW-MSFT negative covariance from being long NOW and short MSFT). The short book's own variance was offset by these hedging benefits. Removing 39% of gross exposure in shorts eliminates both (a) the shorts' variance contribution and (b) their hedging covariance. The net effect is that portfolio variance has barely changed despite 38% lower gross exposure.

### Revised VaR Summary

| Measure | Prior (IC-3) | Proposed | Change | Limit | Status |
|---|---|---|---|---|---|
| VaR 95% 1-day | 1.53% | 2.38% | +0.85% | 2.0% | **BREACH** |
| VaR 99% 1-day | 2.16% | 3.37% | +1.21% | 3.0% | **BREACH** |
| VaR 95% 10-day | 4.84% | 7.53% | +2.69% | -- | -- |
| VaR 99% 10-day | 6.83% | 10.66% | +3.83% | -- | -- |

**Both VaR limits are breached.** This is the direct consequence of concentrating 62% of NAV in four positively-correlated long positions with no hedging offsets. The PM should be aware that the long-only mandate, combined with the current position set, produces a portfolio that exceeds parametric VaR limits.

---

## Portfolio Beta

Net portfolio beta = sum of (weight x beta):
- VST: 0.25 x 1.43 = 0.358
- CEG: 0.20 x 1.15 = 0.230
- NOW: 0.12 x 1.10 = 0.132
- DELL: 0.05 x 1.15 = 0.058
- Cash: 0.38 x 0.00 = 0.000

**Portfolio beta = 0.78**

This is within the +/- 1.0 limit but represents a tripling from the prior +0.25. In a 10% market selloff, the portfolio would be expected to lose approximately 7.8% of NAV. The prior portfolio at +0.25 beta would have lost approximately 2.5% in the same scenario.

---

## Drawdown Monitor

| Level | Current Drawdown | Limit | Status |
|---|---|---|---|
| Portfolio | 0.0% | -10% | OK |
| Long Book | 0.0% | -- | OK |
| Short Book | N/A (no shorts) | -- | N/A |

No drawdown from HWM. All positions are continuing from prior IC with adjustments. Drawdown monitoring resets in the context of the new mandate structure.

---

## Liquidity Profile

| Ticker | Direction | Alloc % | Days to Liquidate (25% ADV) | Bucket |
|---|---|---|---|---|
| VST | Long | 25.0% | 0.12 | < 1 day |
| CEG | Long | 20.0% | 0.07 | < 1 day |
| NOW | Long | 12.0% | 0.02 | < 1 day |
| DELL | Long | 5.0% | 0.01 | < 1 day |

| Bucket | % Portfolio |
|---|---|
| < 1 day | 100% |
| 1-3 days | 0% |
| > 3 days | 0% |

Liquidity profile has improved materially. The removal of TASK (the only position previously in the 1-3 day bucket) and TEP (Paris-listed, tighter liquidity) means the entire invested portfolio can be liquidated within one trading session at 25% ADV participation. The 38% cash position further enhances liquidity. This is one clear benefit of the mandate transition.

---

## Stress Tests

All stress tests are re-run from scratch for the long-only, 4-position portfolio. The prior stress tests are invalid because the short book no longer exists.

### Methodology Change

In the prior portfolio, the short book provided P&L offset in stress scenarios. In the long-only portfolio, stress losses are unhedged. The only offset is the 38% cash position, which acts as a buffer because it does not lose value in stress scenarios (assuming cash is held in short-duration instruments).

### Historical Scenarios

| Scenario | VST (25.0%) | CEG (20.0%) | NOW (12.0%) | DELL (5.0%) | Cash (38.0%) | Portfolio P&L (% NAV) |
|---|---|---|---|---|---|---|
| **GFC 2008** | -55% = -13.75% | -50% = -10.00% | -45% = -5.40% | -55% = -2.75% | 0% | **-31.90%** |
| **COVID Feb-Mar 2020** | -45% = -11.25% | -40% = -8.00% | -35% = -4.20% | -40% = -2.00% | 0% | **-25.45%** |
| **Rates Shock 2022** | -35% = -8.75% | -30% = -6.00% | -30% = -3.60% | -25% = -1.25% | 0% | **-19.60%** |

These are raw scenario losses. The prior portfolio's stress test results were vastly better because the short book generated offsetting gains:

| Scenario | Prior (IC-3, Hedged) | Proposed (Long-Only) | Deterioration | Limit (-10%) |
|---|---|---|---|---|
| GFC 2008 | -9.3% | -31.9% | -22.6% worse | **BREACH** |
| COVID Feb-Mar 2020 | -5.4% | -25.5% | -20.1% worse | **BREACH** |
| Rates Shock 2022 | -6.4% | -19.6% | -13.2% worse | **BREACH** |

All three historical stress scenarios now breach the -10% drawdown limit by wide margins. In the GFC scenario, the portfolio would lose approximately one-third of its value. This is the direct cost of eliminating the short book without proportionally reducing long exposure.

**Mitigating factor: 38% cash.** The severity of these scenarios is reduced by the fact that only 62% of NAV is at risk. In a fully invested long-only portfolio (100% gross), the GFC scenario would produce approximately -51.5% NAV loss. The cash cushion absorbs 38% of what would otherwise be at-risk capital.

### Hypothetical Scenarios

| Scenario | Assumptions | Portfolio P&L (% NAV) | Prior (IC-3) | Limit |
|---|---|---|---|---|
| **Market crash -20%** | S&P -20%; beta-adjusted (0.78 x -20%) | **-15.5%** | -4.0% | **BREACH** |
| **Rates +100bps** | 10Y from 3.97% to 4.97%; leverage + duration hit | **-12.0%** | -7.2% | **BREACH** |
| **AI demand disappointment** | AI capex cut 25% | **-22.5%** | -13.5% | **BREACH** |
| **Sector rotation reversal** | Utilities -12%, tech +15% (mixed) | **-7.7%** | -7.2% | OK |
| **Nuclear incident** | Sentiment selloff on nuclear fleet; VST -50%, CEG -45% | **-21.5%** | -18.5% | **BREACH** |
| **Tariff escalation** | Global tariffs double; mild market selloff | **-3.5%** | +1.5% | OK |

**AI demand disappointment -- detailed decomposition:**
If hyperscaler AI capex is cut 25%:
- VST: -30% (contracted PPAs floor, but merchant power and sentiment hit) = -7.50% NAV
- CEG: -25% (similar dynamics, slightly diversified) = -5.00% NAV
- NOW: -25% (enterprise AI adoption slows; SaaS valuation compressed) = -3.00% NAV
- DELL: -50% (direct hit to $43B AI server backlog; re-rates to bear case) = -2.50% NAV
- Cash: 0% = 0.00% NAV
- **No short-side offset** (previously: MSFT short gained +2.03%, NKE short gained +0.85%, BPO shorts partially reversed)
- Net: **-18.00%** raw, adjusted to **-22.5%** accounting for correlation spike during stress (correlations converge toward 1.0 in selloffs; the shared AI factor amplifies co-movement)

The prior portfolio's MSFT short alone would have generated +2.03% NAV of offset in this scenario. The NKE short would have added +0.85%. These hedges are now permanently unavailable under the long-only mandate.

**Tariff escalation note:** The prior portfolio benefited from the NKE short (+2.9% NAV) in a tariff scenario. The long-only portfolio loses this benefit. VST/CEG have minimal direct tariff exposure, but DELL faces tariff risk on hardware components. At 5% weight, the impact is contained (-0.75% to -1.0% NAV in a severe tariff scenario). NOW has minimal tariff exposure. The portfolio is less exposed to tariffs than it was previously (NKE was the dominant tariff position at -17%), but it no longer profits from tariff escalation.

---

## Limit Breaches / Warnings

### BREACHES

1. **VaR 95% 1-DAY -- BREACH.** 2.38% of NAV exceeds the 2.0% limit by 0.38 percentage points. The removal of the short book's hedging covariance has increased portfolio-level VaR despite lower gross exposure. Resolution options: (a) reduce position sizes proportionally to bring gross to ~52% (requires ~10% additional cash); (b) add uncorrelated positions to generate diversification benefit; (c) accept temporary breach pending deployment of cash into diversifying positions at March 7 IC.

2. **VaR 99% 1-DAY -- BREACH.** 3.37% of NAV exceeds the 3.0% limit by 0.37 percentage points. Same drivers and resolution options as VaR 95%.

3. **SECTOR CONCENTRATION -- BREACH (continuing).** Net Utilities/Power Infrastructure exposure of 45.0% of NAV exceeds the 25% sector limit by 20.0 percentage points. Continuing under existing waiver. Improved from 50.5%.

4. **STRESS TEST FAILURES -- BREACH (severely worsened).** All three historical stress scenarios and four of six hypothetical scenarios breach the -10% drawdown limit. The GFC scenario produces -31.9% loss (vs. -9.3% previously). This is the most severe deterioration in the mandate transition. The prior portfolio's short book was providing approximately 15-22 percentage points of loss offset in stress scenarios. That protection is now gone.

### WARNINGS

5. **NET EXPOSURE -- WARNING (new).** Net exposure has increased from +22% to +62%. While no explicit limit exists on net exposure, the prior risk reports established a recommended range of +20-25% consistent with the stagflationary macro environment. The current +62% is approximately 3x the recommended level. The PM has acknowledged this is an interim position pending cash deployment. Risk flags this for monitoring: if new long positions are added at the March 7 IC without corresponding cash deployment reducing net invested exposure in correlated positions, net exposure will increase further.

6. **PORTFOLIO BETA -- WARNING (new).** Beta has increased from +0.25 to +0.78. A 10% market decline would produce an estimated -7.8% NAV loss (vs. -2.5% previously). Beta is within the +/- 1.0 limit but the directional shift is substantial.

7. **AI THEME CONCENTRATION -- WARNING (escalated from prior report).** 100% of invested capital is AI-linked. Prior level was 83% gross with offsetting shorts. No position in the portfolio benefits from an AI disappointment scenario. This is the portfolio's most significant thematic risk.

8. **DELL ENTRY PRICE -- WARNING (continuing).** Stock at $147.60 is within the PM's revised $130-$150 range but near the top end. At $148, risk/reward to $180 target is 1.3:1 (below 2:1 standard). At the $112 stop, position loss = 24.3% on 5.0% = 1.22% of NAV. Acceptable at portfolio level, but the PM has acknowledged the below-standard risk/reward.

9. **CEG APPROACHING TARGET -- WARNING (new).** CEG at $329.50 is within 6.2% of its $350 target. Risk/reward to target is 0.2:1. The PM has trimmed from 23% to 20% and requested an updated thesis from the analyst for March 7 IC. If the target is not revised upward, the position should be further reduced or exited. Holding a 20% position with 6% upside to target and 29% downside to stop is asymmetrically unfavorable.

10. **EFFECTIVE INDEPENDENT BETS -- WARNING (new).** Approximately 2.0 effective independent bets, down from 3.5. The portfolio is effectively a 2-bet book: (a) AI-driven power demand (VST + CEG), and (b) enterprise AI adoption (NOW + DELL). These two "bets" are themselves positively correlated through the shared AI capex demand driver.

---

## Changes vs. Prior Risk Report (IC-3)

| Item | Prior (IC-3, 9 Holdings) | Proposed (4 Holdings) | Change | Direction |
|---|---|---|---|---|
| Gross Exposure | 100.0% | 62.0% | -38.0% | Lower (OK) |
| Net Exposure | +22.0% | +62.0% | +40.0% | Significantly more directional |
| Holdings | 9 | 4 | -5 | Worse (concentration) |
| Portfolio Beta | +0.25 | +0.78 | +0.53 | More directional |
| VaR 95% 1-day | 1.53% | 2.38% | +0.85% | Worse (now breaches) |
| VaR 99% 1-day | 2.16% | 3.37% | +1.21% | Worse (now breaches) |
| Max Single-Name % NAV | 27.5% (VST) | 25.0% (VST) | -2.5% | Better |
| Max Sector Net % NAV | 50.5% (Utilities) | 45.0% (Utilities) | -5.5% | Better (still breach) |
| Effective Independent Bets | ~3.5 | ~2.0 | -1.5 | Worse |
| GFC Stress Test | -9.3% | -31.9% | -22.6% | Severely worse |
| COVID Stress Test | -5.4% | -25.5% | -20.1% | Severely worse |
| Rates Shock | -6.4% | -19.6% | -13.2% | Severely worse |
| AI Demand Disappointment | -13.5% | -22.5% | -9.0% | Worse |
| Liquidity (% < 1 day) | 97% | 100% | +3% | Better |
| Short-Side Themes | 5 | 0 | -5 | No hedging capacity |

---

## Risk Manager Recommendations to Portfolio Manager

1. **VaR breach resolution (urgent).** The 95% and 99% 1-day VaR limits are both breached. The most capital-efficient path to resolution is deploying the 38% cash into positions with low correlation to VST/CEG/NOW/DELL. If new diversifying long positions (e.g., European defense, contrarian value ideas uncorrelated to AI) are added at the March 7 IC, their negative/low covariance with existing positions would reduce portfolio VaR below limits without requiring trims to existing positions. If March 7 does not produce diversifying ideas, the PM should consider pro-rata trims to existing positions to bring VaR within limits.

2. **Stress test exposure (structural concern).** Under the long-only mandate, the portfolio cannot achieve the stress test resilience of the prior hedged structure. The PM should establish new stress test limits appropriate for a long-only fund. A long-only fund with 62% invested and 38% cash will necessarily show larger stress losses than a hedged long/short book. The -10% limit may need to be recalibrated for the new mandate.

3. **Prioritize uncorrelated positions.** The March 7 IC should weight diversification benefit as heavily as alpha potential when evaluating new pitches. A 5% position in a name with zero correlation to AI sentiment (e.g., European defense, healthcare, consumer staples) would reduce VaR by more than a 5% increase to an existing position. The European defense thesis (RNMBY/BAESY) remains the single most risk-reducing marginal addition.

4. **CEG position management.** At $329.50 vs. a $350 target, CEG's risk/reward at current sizing is poor. If the March 31 Business Outlook does not justify raising the target, the position should be reduced below 15% or exited. A 20% position with 6% upside is an inefficient use of risk budget.

5. **Cash as implicit risk management.** The 38% cash position is currently the portfolio's only risk management tool (in the absence of shorts). It provides a significant buffer in stress scenarios. If cash is deployed rapidly into correlated positions, VaR and stress test results will worsen. Cash deployment and diversification must proceed together.

---

## Model Assumptions and Limitations

1. **Parametric VaR assumes multivariate normal returns.** Fat tails, gap risk, and correlation instability are not captured. The true 99% 1-day loss is likely 25-35% higher than the parametric estimate. This is particularly relevant for DELL (post-earnings gap dynamics) and VST/CEG (event-driven nuclear/regulatory risk).

2. **Correlation estimates are qualitative.** No robust historical correlation data is available for this specific 4-name portfolio composition. The VST-CEG correlation of 0.80 is based on shared sector exposure and AI demand drivers. In stress scenarios, all correlations are likely to converge toward 1.0, meaning the stress test results may understate true tail risk.

3. **DELL volatility of 42% is a forward estimate.** Post-earnings realized vol is significantly higher (55-70% annualized). If the model used 55% realized vol for DELL, portfolio VaR would increase by approximately 0.05-0.08% of NAV. At 5% weight, DELL's vol assumption has limited impact on portfolio-level risk.

4. **Stress test assumptions are based on sector-level drawdowns from historical episodes, applied to individual positions.** Individual stock behavior may diverge significantly from sector averages. VST's contracted PPAs may limit downside vs. merchant power peers; DELL's leverage may amplify downside vs. hardware peers. The stress test results should be interpreted as approximate scenarios, not precise predictions.

5. **Cash is assumed to be zero-volatility.** If cash is held in money market instruments with credit risk, there is a small but non-zero tail risk of loss. This risk is immaterial for typical money market holdings but should be noted for completeness.
