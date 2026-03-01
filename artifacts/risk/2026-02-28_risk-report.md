2026-02-28 22:00 UTC
# Weekly Risk Report -- Week Ending 2026-02-28

## Purpose

This report assesses the risk profile of the proposed 7-position long-only portfolio described in the PM's Draft IC Memo (`portfolio-manager/2026-02-28_ic-memo-draft.md`). The draft proposes adding three new long positions -- CRM (10.0%), EME (8.0%), and WLDN (2.0%) -- to the existing four-position book, bringing total invested capital from 62.0% to 82.0% of NAV with 18.0% cash.

Market context (close February 28, 2026): S&P 500 at approximately 5,860; VIX at 19.86; 10-year Treasury yield at approximately 4.00%.

---

## Summary

| Metric | Prior (4-Position) | Proposed (7-Position) | Limit | Status |
|---|---|---|---|---|
| Total Exposure % NAV | 62.0% | 82.0% | 100% | OK |
| Portfolio Beta | 0.78 | 1.02 | 1.0 | **BREACH** |
| VaR 95% 1-day % NAV | 2.38% | 2.70% | 2.0% | **BREACH** |
| VaR 99% 1-day % NAV | 3.37% | 3.81% | 3.0% | **BREACH** |
| Max Single-Name % NAV | 25.0% (VST) | 25.0% (VST) | 35% | OK |
| Max Sector % NAV | 45.0% (Power) | 45.0% (Power) | 25% | **BREACH** |
| Drawdown from HWM | 0.0% | 0.0% | -10% | OK |

### Key Observation

Deploying an additional 20% of NAV into three new long positions increases gross and net exposure, portfolio beta, and VaR simultaneously. The new positions (CRM, EME, WLDN) are all positively correlated with the existing book through shared AI infrastructure and enterprise technology demand drivers. While the three additions improve diversification modestly versus the prior 4-name portfolio (effective independent bets rise from approximately 2.0 to approximately 2.8), the net effect is an increase in total portfolio risk because the capital deployment outweighs the diversification benefit. Portfolio beta now breaches the 1.0 limit for the first time.

---

## Proposed Portfolio Composition

| Ticker | Allocation % NAV | Price | Est. Beta | Ann. Vol | Sector |
|---|---|---|---|---|---|
| VST | 25.0% | $173.42 | 1.43 | 50% | Power Generation / Utilities |
| CEG | 20.0% | ~$329 | 1.15 | 45% | Power Generation / Utilities |
| NOW | 12.0% | $108.06 | 1.10 | 45% | Enterprise Software |
| CRM | 10.0% | $194.79 | 1.28 | 40% | Enterprise Software |
| EME | 8.0% | ~$725 | 1.17 | 38% | Infrastructure Services |
| DELL | 5.0% | $147.60 | 1.15 | 42% | AI Hardware |
| WLDN | 2.0% | ~$94.27 | 0.95 | 45% | Infrastructure Services |
| Cash | 18.0% | -- | 0.00 | 0% | -- |

### Parameter Notes

- **CRM beta**: 1.28 (Yahoo Finance / MarketBeat consensus). Annualized volatility estimated at 40%, reflecting the SaaSpocalypse selloff driving elevated realized vol. CRM is down 33% YTD; trailing 30-day realized vol is approximately 42-45% annualized. The 40% estimate assumes partial normalization.
- **EME beta**: 1.17 (Yahoo Finance / CNBC consensus). Annualized volatility estimated at 38%, below the power generation names due to the project-based revenue model and lower leverage.
- **WLDN beta**: 0.95 (Yahoo Finance 5Y monthly). Annualized volatility estimated at 45%, elevated for a small-cap name that just experienced a 14% single-day post-earnings selloff and trades only 250K shares per day. Recent weekly realized vol of 5.26% daily implies approximately 83% annualized -- the 45% forward estimate assumes normalization over 30-60 days. This assumption is aggressive; if realized vol persists at current levels, WLDN's contribution to portfolio VaR would be materially higher.

---

## Exposure by Sector

| Sector | Long % NAV | Prior % NAV | Change |
|---|---|---|---|
| Power Generation / Utilities | 45.0% | 45.0% | 0.0% |
| Enterprise Software | 22.0% | 12.0% | +10.0% |
| Infrastructure Services | 10.0% | 0.0% | +10.0% |
| AI Hardware | 5.0% | 5.0% | 0.0% |
| Cash | 18.0% | 38.0% | -20.0% |
| **Total Invested** | **82.0%** | **62.0%** | **+20.0%** |

### Sector Concentration Flags

1. **Power Generation / Utilities at 45.0% -- BREACH (continuing).** VST (25%) + CEG (20%) remain 20 percentage points above the 25% sector limit. No change from the prior report. The PM has acknowledged this as an intentional concentration bet under an existing waiver. The addition of CRM, EME, and WLDN does not dilute this concentration because none of those names fall in the utilities sector.

2. **Enterprise Software at 22.0% -- WARNING (new).** NOW (12%) + CRM (10%) create a meaningful two-name sector concentration. While NOW and CRM have different risk profiles (growth compounder vs. contrarian value), they share exposure to: (a) enterprise IT spending budgets, (b) the SaaSpocalypse narrative and associated systematic selling, (c) private credit stress contagion through Blue Owl's software-heavy loan book, and (d) AI disruption sentiment. Estimated pairwise correlation of 0.55 is the highest among cross-sector pairs. In a continued SaaS selloff, both positions draw down simultaneously. Combined 22% exposure to a sector currently experiencing a 20%+ YTD drawdown warrants monitoring.

3. **Infrastructure Services at 10.0% -- OK.** EME (8%) + WLDN (2%) are complementary but at different points in the value chain (large-cap construction vs. small-cap power engineering). Combined 10% is within acceptable bounds. However, both names share data center construction exposure (EME at 34% of backlog, WLDN through APG acquisition). If hyperscaler capex declines, both positions are impaired simultaneously.

---

## Factor Exposures

| Factor | Exposure % NAV | Prior | Change | Z-Score vs. History |
|---|---|---|---|---|
| AI / Data Center Demand (total) | 82.0% of invested | 100% of invested | -18% | Extreme (>2.0 sigma) |
| Power Generation / Nuclear | 45.0% | 45.0% | 0.0% | Extreme (>2.5 sigma) |
| Enterprise Software / SaaS | 22.0% | 12.0% | +10.0% | Elevated (~1.5 sigma) |
| Infrastructure Services | 10.0% | 0.0% | +10.0% | Moderate |
| AI Hardware | 5.0% | 5.0% | 0.0% | Moderate |
| Contrarian / Value Factor | 10.0% | 0.0% | +10.0% | Moderate |
| Small-Cap / Illiquidity Factor | 2.0% | 0.0% | +2.0% | Low |
| Interest Rate Sensitivity | Elevated | Elevated | Increased | ~1.5 sigma |
| Leverage Exposure (corporate debt) | ~55.0% | ~45.0% | +10.0% | ~1.3 sigma |

### Factor Analysis

**1. AI theme concentration remains dominant but has improved.** In the prior 4-position portfolio, 100% of invested capital was directly AI-linked. The proposed portfolio moderately improves this: CRM's thesis is partly AI (Agentforce) but primarily a contrarian value play on FCF and buybacks. EME is partly data center but also grid modernization and electrification. WLDN is partly data center but also energy efficiency and utility services. Approximately 70-75% of invested capital is directly AI-linked (VST, CEG, NOW, DELL = 62% of NAV, plus portions of EME and WLDN). This is still an extreme thematic concentration but is a meaningful improvement from 100%.

**2. Enterprise Software factor risk is new and elevated.** Adding CRM at 10% creates 22% enterprise software exposure during an active sector selloff. The SaaSpocalypse has produced a 20%+ YTD drawdown in the S&P Software & Services Select Industry Index. Systematic selling from ETF outflows and private credit liquidation (Blue Owl) could continue regardless of individual company fundamentals. The PM should be aware that the next leg of private credit stress (BDC earnings in March) is a key risk event for the combined NOW + CRM exposure.

**3. Interest rate sensitivity has increased.** CRM carries $8.4B in debt. EME is near net cash (minimal rate exposure). WLDN is net cash. The aggregate portfolio now includes significant corporate leverage through VST ($17B net debt), CEG ($21B net debt post-Calpine), DELL ($31B gross debt), and CRM ($8.4B debt). A rates-up shock would pressure multiple names simultaneously through both discount rate effects on growth multiples (NOW, CRM) and debt service costs (VST, CEG, DELL).

**4. Contrarian / value factor is a positive addition.** CRM at 12-13x EV/FCF introduces a value factor the portfolio previously lacked. In a risk-off environment, CRM's 7.9% FCF yield and $50B buyback authorization provide a degree of downside support that pure growth names do not. This is the most risk-constructive aspect of the CRM addition.

---

## Concentration and Correlation Flags

### Estimated Correlation Matrix (7-Position Portfolio)

| | VST | CEG | NOW | CRM | EME | DELL | WLDN |
|---|---|---|---|---|---|---|---|
| **VST** | 1.00 | 0.80 | 0.20 | 0.15 | 0.45 | 0.30 | 0.35 |
| **CEG** | 0.80 | 1.00 | 0.20 | 0.15 | 0.45 | 0.30 | 0.35 |
| **NOW** | 0.20 | 0.20 | 1.00 | 0.55 | 0.15 | 0.25 | 0.10 |
| **CRM** | 0.15 | 0.15 | 0.55 | 1.00 | 0.15 | 0.30 | 0.10 |
| **EME** | 0.45 | 0.45 | 0.15 | 0.15 | 1.00 | 0.25 | 0.40 |
| **DELL** | 0.30 | 0.30 | 0.25 | 0.30 | 0.25 | 1.00 | 0.15 |
| **WLDN** | 0.35 | 0.35 | 0.10 | 0.10 | 0.40 | 0.15 | 1.00 |

### Key Correlation Observations

- **VST-CEG (0.80):** Remains the portfolio's dominant risk pair. At 45% combined weight, the VST-CEG covariance term contributes approximately 27% of total portfolio variance. These two names effectively behave as a single ~42% position.
- **NOW-CRM (0.55):** This is the most correlated new cross-pair. Both are enterprise software names subject to the same systematic SaaS selling pressure. At 22% combined weight, this pair contributes approximately 7% of total portfolio variance. In a SaaS-specific selloff, both positions draw down together.
- **VST-EME (0.45) and CEG-EME (0.45):** EME's data center construction exposure creates meaningful correlation with the power generation names. At 45% + 8% combined weight, this linkage adds to the portfolio's AI infrastructure concentration risk.
- **EME-WLDN (0.40):** Both infrastructure services names with data center exposure. At 10% combined, the absolute impact is modest.

### Effective Number of Independent Bets

The proposed 7-position portfolio has approximately 2.8 effective independent bets, up from 2.0 in the prior 4-position portfolio. This improvement is driven by the addition of CRM (low correlation to power names) and EME/WLDN (moderate correlation but adding a new sub-sector). The theoretical maximum for a 7-position equal-weighted, partially-correlated portfolio is approximately 4.5-5.0. The portfolio remains well below theoretical maximum due to the VST-CEG dominance (45% in a 0.80-correlated pair) and the shared AI demand driver across all names.

### Single-Theme Concentration

All seven positions are positively exposed to AI infrastructure demand, though the degree varies:

| Position | Direct AI Exposure | Alternative Demand Drivers |
|---|---|---|
| VST (25%) | High -- AI power demand | Merchant power, retail electricity |
| CEG (20%) | High -- AI power demand, nuclear | Carbon-free mandate, capacity markets |
| NOW (12%) | High -- AI workflow automation | ITSM platform, digital transformation |
| CRM (10%) | Moderate -- Agentforce (2% of revenue) | CRM platform, FCF/buyback story |
| EME (8%) | Moderate -- 34% data center backlog | Grid modernization, electrification |
| DELL (5%) | Very High -- AI server hardware | PC/storage (but AI is the thesis) |
| WLDN (2%) | Moderate -- APG data center eng. | Energy efficiency, utility services |

CRM is the least AI-dependent position in the portfolio, which is a constructive diversification benefit. Its thesis rests primarily on FCF yield, buyback support, and contrarian value rather than AI demand growth. EME and WLDN have meaningful non-AI business lines (grid modernization, energy efficiency, utility services) that provide some resilience in an AI demand disappointment scenario.

---

## Value at Risk (Parametric)

### Inputs

| Position | Weight | Ann. Vol | Daily Vol | Position Daily Vol (% NAV) |
|---|---|---|---|---|
| VST | 25.0% | 50.0% | 3.15% | 0.7875% |
| CEG | 20.0% | 45.0% | 2.84% | 0.5680% |
| NOW | 12.0% | 45.0% | 2.84% | 0.3408% |
| CRM | 10.0% | 40.0% | 2.52% | 0.2520% |
| EME | 8.0% | 38.0% | 2.40% | 0.1920% |
| DELL | 5.0% | 42.0% | 2.65% | 0.1325% |
| WLDN | 2.0% | 45.0% | 2.84% | 0.0568% |
| Cash | 18.0% | 0.0% | 0.00% | 0.0000% |

### Portfolio Variance Computation

Variance terms (position daily vol squared):

| Position | Variance |
|---|---|
| VST | 0.00006202 |
| CEG | 0.00003226 |
| NOW | 0.00001161 |
| CRM | 0.00000635 |
| EME | 0.00000369 |
| DELL | 0.00000176 |
| WLDN | 0.00000032 |
| **Sum of variances** | **0.00011801** |

Key covariance terms (2 x rho x w_i x w_j, daily):

| Pair | Rho | Covariance |
|---|---|---|
| VST-CEG | 0.80 | 0.00007152 |
| VST-EME | 0.45 | 0.00001361 |
| VST-NOW | 0.20 | 0.00001073 |
| NOW-CRM | 0.55 | 0.00000944 |
| CEG-EME | 0.45 | 0.00000982 |
| CEG-NOW | 0.20 | 0.00000773 |
| VST-DELL | 0.30 | 0.00000626 |
| VST-CRM | 0.15 | 0.00000595 |
| CEG-DELL | 0.30 | 0.00000451 |
| CEG-CRM | 0.15 | 0.00000429 |
| VST-WLDN | 0.35 | 0.00000313 |
| CEG-WLDN | 0.35 | 0.00000226 |
| NOW-DELL | 0.25 | 0.00000226 |
| CRM-DELL | 0.30 | 0.00000200 |
| NOW-EME | 0.15 | 0.00000196 |
| CRM-EME | 0.15 | 0.00000145 |
| EME-DELL | 0.25 | 0.00000127 |
| EME-WLDN | 0.40 | 0.00000087 |
| NOW-WLDN | 0.10 | 0.00000039 |
| CRM-WLDN | 0.10 | 0.00000029 |
| DELL-WLDN | 0.15 | 0.00000023 |
| **Sum of covariances** | | **0.00014997** |

**Total portfolio variance** = 0.00011801 + 0.00014997 = **0.00026798**

**Portfolio daily sigma** = sqrt(0.00026798) = **1.64% of NAV**

### VaR Results

| Measure | Prior (4-Position) | Proposed (7-Position) | Change | Limit | Status |
|---|---|---|---|---|---|
| VaR 95% 1-day | 2.38% | 2.70% | +0.32% | 2.0% | **BREACH** |
| VaR 99% 1-day | 3.37% | 3.81% | +0.44% | 3.0% | **BREACH** |
| VaR 95% 10-day | 7.53% | 8.54% | +1.01% | -- | -- |
| VaR 99% 10-day | 10.66% | 12.05% | +1.39% | -- | -- |

**Both VaR limits remain breached and have worsened.** The prior 4-position portfolio already breached both VaR limits. Adding 20% of NAV to three new long positions that are positively correlated with the existing book has increased portfolio variance and VaR further. The 7-position portfolio has higher VaR than the 4-position portfolio because the capital deployment effect (more money at risk) exceeds the diversification effect (modestly lower average correlation).

### VaR Marginal Contribution by Position

| Position | Marginal VaR Contribution (% of total) | Note |
|---|---|---|
| VST (25.0%) | ~38% | Largest contributor; highest vol and weight |
| CEG (20.0%) | ~26% | Second largest; high correlation with VST |
| NOW (12.0%) | ~13% | Moderate; correlated with CRM |
| CRM (10.0%) | ~10% | Moderate; partially diversifying vs. power names |
| EME (8.0%) | ~7% | Moderate; correlated with power names |
| DELL (5.0%) | ~4% | Small weight limits contribution |
| WLDN (2.0%) | ~2% | Negligible at current sizing |

VST and CEG together contribute approximately 64% of total portfolio VaR. Any VaR resolution strategy that does not address the VST-CEG concentration will be insufficient.

---

## Portfolio Beta

Net portfolio beta = sum of (weight x beta):

| Position | Weight | Beta | Contribution |
|---|---|---|---|
| VST | 0.25 | 1.43 | 0.358 |
| CEG | 0.20 | 1.15 | 0.230 |
| NOW | 0.12 | 1.10 | 0.132 |
| CRM | 0.10 | 1.28 | 0.128 |
| EME | 0.08 | 1.17 | 0.094 |
| DELL | 0.05 | 1.15 | 0.058 |
| WLDN | 0.02 | 0.95 | 0.019 |
| Cash | 0.18 | 0.00 | 0.000 |
| **Portfolio** | | | **1.02** |

**Portfolio beta of 1.02 BREACHES the 1.0 limit.** This is a new breach -- the prior 4-position portfolio had a beta of 0.78. The breach is driven by deploying 20% of cash into three names that all carry betas above 1.0 (CRM 1.28, EME 1.17) or near 1.0 (WLDN 0.95). The weighted-average beta of the three new positions is 1.21 (well above the 0.61 blended beta that would have been required to keep portfolio beta at 0.78).

**Implication:** In a 10% market selloff, the portfolio would be expected to lose approximately 10.2% of NAV. In a 20% market decline, the expected loss is approximately 20.4% of NAV. The 38% cash cushion that was previously moderating beta has been reduced to 18%.

---

## Drawdown Monitor

| Level | Current Drawdown | Limit | Status |
|---|---|---|---|
| Portfolio | 0.0% | -10% | OK |

No drawdown from HWM. Monitoring continues.

**Warning:** At a portfolio beta of 1.02 and VaR 95% of 2.70%, the portfolio would breach the -10% drawdown limit with a market decline of approximately 9.8%, or with approximately 4 consecutive days of 95th-percentile adverse moves. The margin of safety to the drawdown limit is thin.

---

## Liquidity Profile

| Ticker | Alloc % | Est. ADV ($M) | Days to Liquidate (25% ADV) | Bucket |
|---|---|---|---|---|
| VST | 25.0% | ~$800M | <0.2 | < 1 day |
| CEG | 20.0% | ~$600M | <0.2 | < 1 day |
| NOW | 12.0% | ~$500M | <0.1 | < 1 day |
| CRM | 10.0% | ~$700M | <0.1 | < 1 day |
| EME | 8.0% | ~$200M | <0.2 | < 1 day |
| DELL | 5.0% | ~$400M | <0.1 | < 1 day |
| WLDN | 2.0% | ~$24M | **~2.8** | **1-3 days** |

| Bucket | % Portfolio (Invested) |
|---|---|
| < 1 day | 97.6% (80.0% of NAV) |
| 1-3 days | 2.4% (2.0% of NAV) |
| > 3 days | 0.0% |

**WLDN is the only liquidity concern.** At 2.0% of NAV and approximately 250K shares daily volume, a full exit at 15% ADV participation would require approximately 2.8 days. At 25% ADV participation, it compresses to approximately 1.7 days but with higher market impact risk given the 14.23M share float. The Small-Cap Analyst correctly identified this constraint and recommended 2.0% as the maximum allocation; Risk concurs. The position must not be sized above 2.0% without a liquidity reassessment, and if ADV falls below 150K shares, the PM should consider reducing the position proactively.

All other positions are highly liquid with sub-day liquidation at 25% ADV participation.

---

## Stress Tests

### Historical Scenarios

| Scenario | VST (25%) | CEG (20%) | NOW (12%) | CRM (10%) | EME (8%) | DELL (5%) | WLDN (2%) | Cash (18%) | Portfolio P&L |
|---|---|---|---|---|---|---|---|---|---|
| **GFC 2008** | -13.75% | -10.00% | -5.40% | -4.50% | -4.80% | -2.75% | -1.30% | 0% | **-42.50%** |
| **COVID Feb-Mar 2020** | -11.25% | -8.00% | -4.20% | -3.00% | -3.20% | -2.00% | -1.00% | 0% | **-32.65%** |
| **Rates Shock 2022** | -8.75% | -6.00% | -3.60% | -3.50% | -2.00% | -1.25% | -0.60% | 0% | **-25.70%** |

### Scenario Assumptions

- **GFC 2008:** Broad equity drawdowns of 45-65%. Power/utility names hit -50 to -55% (leverage + commodity exposure). Software -45% (multiple compression). Infrastructure services -60% (construction freeze). Small-cap -65% (liquidity premium + credit stress). AI hardware -55%.
- **COVID Feb-Mar 2020:** Sharp but faster drawdowns. Power -40 to -45%. Software -30 to -35% (quick recovery in demand). Infrastructure -40%. Small-cap -50%. Hardware -40%.
- **Rates Shock 2022:** Growth multiples compress 25-35%. CRM hit harder (-35%) due to SaaS multiple compression. Power names -30 to -35% (leverage). Infrastructure -25% (project economics intact). WLDN -30%.

### Comparison to Prior Portfolio

| Scenario | Prior (4-Position) | Proposed (7-Position) | Deterioration | Limit (-10%) | Status |
|---|---|---|---|---|---|
| GFC 2008 | -31.9% | -42.5% | -10.6% worse | **BREACH** | Severe |
| COVID Feb-Mar 2020 | -25.5% | -32.7% | -7.2% worse | **BREACH** | Severe |
| Rates Shock 2022 | -19.6% | -25.7% | -6.1% worse | **BREACH** | Severe |

All stress scenarios have worsened because 20% more capital is now deployed in correlated long positions with less cash buffer. All three historical stress scenarios breach the -10% drawdown limit by wide margins.

### Hypothetical Scenarios

| Scenario | Assumptions | Portfolio P&L (% NAV) | Status |
|---|---|---|---|
| **Market crash -20%** | Beta-adjusted: 1.02 x -20% | **-20.4%** | **BREACH** |
| **Rates +100bps** | Duration/leverage hit across portfolio | **-14.5%** | **BREACH** |
| **AI demand disappointment** | Hyperscaler capex cut 25%; correlation spike | **-27.0%** | **BREACH** |
| **SaaSpocalypse deepens** | Software sector -25%; NOW/CRM hit, others modest | **-8.5%** | OK |
| **Sector rotation out of power** | Utilities -15%, tech flat | **-6.8%** | OK |
| **Nuclear incident** | VST -50%, CEG -45%; others -5% from sentiment | **-22.8%** | **BREACH** |

**AI demand disappointment -- detailed decomposition:**
If hyperscaler AI capex is cut 25%:
- VST: -30% = -7.50% NAV (contracted PPAs floor, but merchant power and sentiment hit)
- CEG: -25% = -5.00% NAV
- NOW: -25% = -3.00% NAV (AI adoption slows)
- CRM: -15% = -1.50% NAV (less directly AI-dependent; FCF/buyback floor)
- EME: -35% = -2.80% NAV (data center backlog 34% of total; most impaired)
- DELL: -50% = -2.50% NAV (direct hit to $43B AI server backlog)
- WLDN: -30% = -0.60% NAV (APG data center work declines)
- Cash: 0%
- Stress correlation adjustment: +15% amplification (correlations converge in selloffs)
- **Net: -27.0% NAV**

CRM's relative resilience in the AI disappointment scenario (-15% vs. -25 to -50% for other names) is a constructive portfolio feature. The CRM position provides partial downside protection in the portfolio's worst-case thematic risk scenario.

**SaaSpocalypse deepens -- detailed decomposition:**
If software sector sells off another -25% from current levels:
- NOW: -25% = -3.00% NAV (full participation in software selloff)
- CRM: -25% = -2.50% NAV (already down 33% YTD; further selloff)
- DELL: -10% = -0.50% NAV (sympathy selling, enterprise IT sentiment)
- VST/CEG/EME/WLDN: -5% average = -2.50% NAV (mild contagion)
- **Net: -8.5% NAV**

The SaaSpocalypse scenario is the most targeted risk to the NOW + CRM combination but is manageable at portfolio level because 55% of invested capital (power + infrastructure) is not in the software sector.

---

## Limit Breaches / Warnings

### BREACHES (4 active)

1. **PORTFOLIO BETA -- BREACH (new).** Portfolio beta of 1.02 exceeds the 1.0 limit. This is a new breach introduced by deploying cash into above-market-beta positions. The breach is marginal (0.02 above limit) and could be resolved by: (a) reducing VST by 1-2% (VST has the highest beta at 1.43 and is the largest position); (b) increasing cash by 2-3% through pro-rata trims; or (c) the PM accepting a waiver given the marginal nature of the breach. Risk recommends resolution because beta is a directional risk measure with direct loss implications in market selloffs.

2. **VaR 95% 1-DAY -- BREACH (continuing, worsened).** 2.70% of NAV exceeds the 2.0% limit by 0.70 percentage points (was 2.38%, now 2.70%). Worsened by +0.32% from capital deployment. Resolution requires either: (a) reducing position sizes to bring total invested below approximately 65% of NAV (net reduction of 17% from current 82%); (b) adding zero/negatively-correlated positions (not available under long-only mandate with current investment universe); or (c) recalibrating VaR limits for the long-only mandate. Option (c) is the most practical path -- the 2.0% VaR limit was calibrated for a hedged long/short portfolio. A long-only concentrated equity portfolio at 82% invested will inherently carry higher VaR.

3. **VaR 99% 1-DAY -- BREACH (continuing, worsened).** 3.81% of NAV exceeds the 3.0% limit by 0.81 percentage points (was 3.37%, now 3.81%). Same drivers and resolution options as VaR 95%.

4. **SECTOR CONCENTRATION -- BREACH (continuing).** Power Generation / Utilities at 45.0% exceeds the 25% limit by 20 percentage points. Unchanged from prior report. Under existing waiver.

### WARNINGS (7 active)

5. **ENTERPRISE SOFTWARE CONCENTRATION -- WARNING (new).** NOW + CRM at 22.0% combined during an active sector selloff. The SaaSpocalypse has produced 20%+ YTD declines. Private credit BDC earnings in March 2026 are the near-term risk event. The stress test shows an additional -25% software selloff would produce -5.50% NAV loss from these two positions alone. Manageable but warrants close monitoring.

6. **AI THEME CONCENTRATION -- WARNING (continuing, modestly improved).** Approximately 70-75% of invested capital is directly AI-linked (down from 100% in the 4-position portfolio). CRM, EME, and WLDN each have meaningful non-AI business lines, improving thematic diversification. However, the dominant risk driver remains AI capex sentiment. A comprehensive AI demand disappointment would impair all seven positions simultaneously.

7. **CEG APPROACHING TARGET -- WARNING (continuing).** CEG at ~$329 is within 6% of its $350 target. Risk/reward of 0.2:1 upside to target vs. 29% downside to stop at a 20% allocation is asymmetrically unfavorable. The March 31 Business Outlook call is the decision point. If no revised target is provided by March 7, Risk recommends reducing CEG to 15% or below.

8. **DELL ENTRY PRICE -- WARNING (continuing).** DELL at $147.60 is at the top of the $130-$150 entry range. Risk/reward to $180 target is 1.3:1 (below 2:1 standard). Acceptable at 5% allocation.

9. **STRESS TEST FAILURES -- WARNING (continuing, worsened).** All three historical stress scenarios and four of six hypothetical scenarios breach the -10% drawdown limit. The GFC scenario produces -42.5% loss. This is structural under the long-only mandate with 82% invested and should be addressed through limit recalibration rather than position changes.

10. **EFFECTIVE INDEPENDENT BETS -- WARNING (continuing, improved).** Approximately 2.8 effective independent bets, up from 2.0. Still below the theoretical maximum of approximately 4.5-5.0 for a 7-position portfolio. The VST-CEG pair (0.80 correlation, 45% combined) and the NOW-CRM pair (0.55 correlation, 22% combined) compress diversification.

11. **WLDN LIQUIDITY -- WARNING (new).** WLDN at 2.0% requires approximately 2.8 days to liquidate at 15% ADV participation. Acceptable at current sizing; would become a concern above 3.0%. If ADV declines below 150K shares, the position should be reviewed.

---

## Marginal Risk Assessment of New Positions

### CRM (10.0%) -- Risk Assessment: ACCEPTABLE

| Metric | Value | Assessment |
|---|---|---|
| Marginal beta contribution | +0.128 | Material; pushes portfolio beta to 1.02 |
| Marginal VaR contribution | ~10% of total | Moderate |
| Correlation with existing book | Low to power names (0.15); moderate to NOW (0.55) | Partially diversifying |
| Downside to stop ($165) | 15.3% x 10.0% = 1.53% NAV | Acceptable |
| Upside/downside ratio | 4.4:1 | Best in portfolio |
| Key risk | SaaSpocalypse selling continues; correlated with NOW | Monitor March BDC earnings |

CRM is the most risk-constructive of the three new positions. Its low correlation to the power generation names (0.15 estimated) provides genuine diversification. The 7.9% FCF yield and $50B buyback create a valuation floor that does not exist for the growth names. The primary risk concern is the 0.55 correlation with NOW, which means the 22% combined enterprise software exposure is not as diversified as it appears on paper.

### EME (8.0%) -- Risk Assessment: ACCEPTABLE WITH CAVEAT

| Metric | Value | Assessment |
|---|---|---|
| Marginal beta contribution | +0.094 | Moderate |
| Marginal VaR contribution | ~7% of total | Moderate |
| Correlation with VST/CEG | 0.45 each | Meaningfully correlated with dominant risk pair |
| Downside to stop ($620) | 14.5% x 8.0% = 1.16% NAV | Acceptable |
| Upside/downside ratio | 1.4:1 | Below preferred 1.5:1 minimum |
| Key risk | Hyperscaler capex dependence (34% of backlog) | April-May earnings season |

**Caveat:** EME's 1.4:1 upside/downside ratio is below the 1.5:1 minimum the PM cited as a standard for new positions when rejecting MTZ (1.2:1). Risk notes this inconsistency. At an 8% allocation, the absolute downside to stop (-1.16% NAV) is manageable, but the risk/reward profile is marginal. The 0.45 correlation with VST and CEG means EME adds to the portfolio's existing dominant risk cluster rather than diversifying it.

### WLDN (2.0%) -- Risk Assessment: ACCEPTABLE

| Metric | Value | Assessment |
|---|---|---|
| Marginal beta contribution | +0.019 | Negligible |
| Marginal VaR contribution | ~2% of total | Negligible |
| Correlation with existing book | Low to moderate (0.10-0.40) | Modestly diversifying |
| Downside to stop ($76) | 19.4% x 2.0% = 0.39% NAV | Minimal portfolio impact |
| Upside/downside ratio | 3.5:1 | Strong |
| Key risk | Illiquidity; 250K ADV; 14M share float | Cannot exit quickly in stress |
| Key risk 2 | Customer concentration; handful of utility clients | Idiosyncratic |

WLDN is appropriately sized for its risk characteristics. At 2.0%, the position's maximum loss to stop (-0.39% NAV) is immaterial at the portfolio level. The illiquidity risk is contained by the small sizing. The 3.5:1 risk/reward and 42.7% insider ownership are favorable quality signals.

---

## Changes vs. Prior Risk Report

| Item | Prior (4-Position) | Proposed (7-Position) | Change | Direction |
|---|---|---|---|---|
| Gross/Net Exposure | 62.0% | 82.0% | +20.0% | More directional |
| Holdings | 4 | 7 | +3 | Better (diversification) |
| Portfolio Beta | 0.78 | 1.02 | +0.24 | Worse (now breaches) |
| VaR 95% 1-day | 2.38% | 2.70% | +0.32% | Worse |
| VaR 99% 1-day | 3.37% | 3.81% | +0.44% | Worse |
| Max Single-Name % NAV | 25.0% (VST) | 25.0% (VST) | 0.0% | Unchanged |
| Max Sector Net % NAV | 45.0% (Utilities) | 45.0% (Utilities) | 0.0% | Unchanged (breach) |
| Enterprise Software % NAV | 12.0% | 22.0% | +10.0% | New concentration |
| Infrastructure Services % NAV | 0.0% | 10.0% | +10.0% | New exposure |
| Effective Independent Bets | ~2.0 | ~2.8 | +0.8 | Better |
| GFC Stress Test | -31.9% | -42.5% | -10.6% | Worse |
| COVID Stress Test | -25.5% | -32.7% | -7.2% | Worse |
| Rates Shock | -19.6% | -25.7% | -6.1% | Worse |
| AI Demand Disappointment | -22.5% | -27.0% | -4.5% | Worse |
| Liquidity (% < 1 day) | 100% | 97.6% | -2.4% | Slightly worse (WLDN) |
| Cash Buffer | 38.0% | 18.0% | -20.0% | Significantly reduced |

---

## Risk Manager Recommendations to Portfolio Manager

### 1. Portfolio Beta Breach -- Requires Resolution (Urgent)

Portfolio beta of 1.02 breaches the 1.0 limit. The most capital-efficient resolution: reduce VST from 25.0% to 24.0% (saves 0.014 in beta contribution) and allocate the 1.0% to cash. This brings beta to approximately 1.005 -- still borderline. A more decisive resolution: reduce VST to 23.0% (beta drops to approximately 0.99) with 2.0% added to cash. This preserves all new positions and resolves the breach.

Alternative: The PM may choose to accept the breach under a waiver, given it is marginal (0.02 above limit). However, Risk notes that adding any further positions with beta above 1.0 would worsen the breach, constraining future portfolio construction.

### 2. VaR Limit Recalibration -- Structural Issue

The VaR limits of 2.0% (95%) and 3.0% (99%) were calibrated for a hedged long/short portfolio. A concentrated long-only portfolio at 82% invested with an average position beta above 1.0 will inherently exceed these limits. Risk recommends the PM formally recalibrate VaR limits for the long-only mandate. Suggested new limits: VaR 95% at 3.0%, VaR 99% at 4.5%. These would accommodate the current portfolio while still flagging excessive risk-taking. Without recalibration, the VaR breach will persist and worsen as further cash is deployed.

### 3. CEG Position Management -- Approaching Target

CEG at ~$329 vs. $350 target offers 0.2:1 risk/reward at a 20% allocation. This is the portfolio's most capital-inefficient position from a risk/reward perspective. If the Long Analyst does not deliver a revised target by March 7, Risk recommends reducing CEG to 15.0% and allocating the freed 5.0% to cash (which would also help resolve the beta breach and reduce VaR).

### 4. EME Risk/Reward Observation

EME's 1.4:1 upside/downside ratio is below the 1.5:1 standard cited when rejecting MTZ. While the quality metrics justify a modest exception, the PM should be aware that EME enters the portfolio with below-standard risk/reward and meaningful correlation (0.45) to the dominant VST-CEG risk pair. If EME's price appreciates to $760+ without a corresponding target increase, the risk/reward deteriorates to approximately 1.0:1 and the position should be reviewed.

### 5. Enterprise Software Concentration -- Monitor March Events

The combined NOW + CRM exposure of 22% faces two identifiable risk events in March:
- **BDC/private credit earnings (early-mid March):** Blue Owl and peers report. If software loan book deterioration accelerates, systematic selling pressure on SaaS names could intensify.
- **PATH earnings March 11:** If UiPath disappoints, it could create negative read-through for the broader enterprise automation/AI agent narrative, pressuring NOW.

No position change is recommended, but the PM should have a contingency plan for a further 15-20% drawdown in the software sector during March.

### 6. Cash Buffer Reduction -- Acknowledged

Cash has declined from 38% to 18%. The remaining 18% is adequate for (a) absorbing any single stop-loss trigger (largest single-position loss to stop is VST at -4.83% NAV), (b) maintaining operational liquidity, and (c) providing modest dry powder for opportunistic additions. However, the portfolio no longer has the capacity to absorb multiple simultaneous stop-loss triggers. If both VST and CEG hit stops simultaneously (combined loss of approximately -11.7% NAV), the portfolio would breach the -10% drawdown limit and the remaining cash would be insufficient to cover further losses.

---

## Model Assumptions and Limitations

1. **Parametric VaR assumes multivariate normal returns.** Fat tails, gap risk, and correlation instability are not captured. The true 99% 1-day loss is likely 25-35% higher than the parametric estimate. WLDN's thin float makes it particularly susceptible to gap risk (the stock dropped 14% in a single pre-market session on earnings).

2. **Correlation estimates are qualitative.** The 7x7 correlation matrix is estimated based on sector exposure, shared demand drivers, and qualitative assessment. The NOW-CRM correlation of 0.55 is the most judgment-dependent estimate; if the SaaSpocalypse intensifies, this correlation could rise to 0.70-0.80, materially increasing portfolio VaR. In stress scenarios, all correlations should be assumed to converge toward 1.0.

3. **WLDN volatility estimate of 45% may be low.** Recent realized daily volatility of 5.26% implies approximately 83% annualized. The 45% forward estimate assumes normalization that may not occur for a thinly-traded small-cap. If realized vol persists at current levels, WLDN's contribution to VaR would approximately double (still small in absolute terms at 2% weight).

4. **CRM volatility estimate of 40% assumes partial SaaS selloff normalization.** If the selloff deepens, CRM's vol could rise to 50%+, increasing its VaR contribution by approximately 25%.

5. **Stress test drawdown estimates are based on sector-level proxies from historical episodes applied to individual positions.** Individual stocks may perform significantly better or worse than sector averages. CRM's $50B buyback and WLDN's 42.7% insider ownership may provide downside support not captured in sector-level stress estimates. Conversely, VST's and CEG's leverage may amplify losses beyond sector averages.

6. **Beta values are sourced from public financial data providers and reflect trailing measurements.** Forward-looking betas may differ, particularly for names experiencing structural shifts (e.g., VST's beta has increased as it became an AI proxy rather than a traditional utility).
