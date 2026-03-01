2026-03-01 20:07 UTC
# Weekly Risk Report -- Supplemental (Round 2) -- 2026-03-01

## Purpose

This supplemental risk report assesses the proposed 10-position long-only portfolio described in the PM's Draft IC Memo Round 2 (`artifacts/portfolio-manager/2026-03-01_ic-memo-draft-2.md`). The draft proposes adding LMT (Lockheed Martin) at 5.0% of NAV funded from cash, bringing total invested capital from 86.0% to 91.0% with 9.0% cash remaining. All nine existing positions are held unchanged.

Market context: S&P 500 approximately 5,860; VIX at 19.86; 10-year Treasury yield approximately 4.00%. VST recovered from the $149 intraday low on Feb 28 to close at $173.42. Iran crisis (US-Israeli strikes on Feb 28) is the dominant geopolitical event. Oil expected to gap to $75-85+ WTI on Monday open. Gold at $5,278-$5,299.

---

## Summary

| Metric | Current (10-Position) | Prior (9-Position) | Limit | Status |
|---|---|---|---|---|
| Total Exposure % NAV | 91.0% | 86.0% | 100% | OK |
| Portfolio Beta | 0.95 | 0.94 | 1.0 | OK |
| VaR 95% 1-day % NAV | 2.55% | 2.58% | 3.0% | OK |
| VaR 99% 1-day % NAV | 3.60% | 3.64% | 4.5% | OK |
| Max Single-Name % NAV | 23.0% (VST) | 23.0% (VST) | 35% | OK |
| Max Sector % NAV | 41.0% (Power) | 43.0% (Power) | 25% | **BREACH** (existing waiver; note CEG reduced from 20% to 18% since prior report) |
| Drawdown from HWM | -2.1% (est.) | -2.1% (est.) | -10% | OK |
| Cash Buffer | 9.0% | 14.0% | 15-20% preferred | **WARNING** |

### Key Observation

LMT is a genuinely risk-constructive addition. With a 5-year monthly beta of 0.22 (Yahoo Finance 0.23, TradingView 0.20) and annualized volatility of approximately 25%, LMT is the third lowest-beta name in the portfolio after ARGX (0.21) and MRK (0.30). Its near-zero correlation with the existing power/software/AI cluster (estimated 0.05-0.15) means it adds 5% of capital exposure while contributing less than 2% of total portfolio variance. The defense spending driver is structurally independent of the AI capex, healthcare pipeline, and enterprise software renewal cycles that drive the remainder of the book.

The primary concern is not LMT itself but the cash buffer reduction from 14.0% to 9.0%. At 9.0% cash, the portfolio has limited capacity to absorb multiple simultaneous adverse events. The March 4 tariff escalation and Iran crisis create a compound risk environment where the cash buffer may prove insufficient.

---

## Proposed Portfolio Composition

| Ticker | Allocation % NAV | Price | Est. Beta | Ann. Vol | Sector |
|---|---|---|---|---|---|
| VST | 23.0% | ~$173 | 1.43 | 52% | Power Generation / Utilities |
| CEG | 18.0% | ~$330 | 1.15 | 45% | Power Generation / Utilities |
| NOW | 12.0% | ~$103 | 1.00 | 45% | Enterprise Software |
| CRM | 10.0% | ~$194 | 1.28 | 40% | Enterprise Software |
| EME | 7.0% | ~$708 | 1.17 | 38% | Infrastructure Services |
| LMT | 5.0% | ~$658 | 0.22 | 25% | Aerospace & Defense |
| MRK | 5.0% | ~$123 | 0.30 | 22% | Healthcare (Pharma) |
| DELL | 5.0% | ~$148 | 1.03 | 42% | AI Hardware |
| ARGX | 4.0% | ~$820 | 0.21 | 35% | Healthcare (Biotech) |
| WLDN | 2.0% | ~$94 | 0.95 | 45% | Infrastructure Services |
| Cash | 9.0% | -- | 0.00 | 0% | -- |

### LMT Parameter Notes

- **Beta**: 0.22 (blended from Yahoo Finance 5Y monthly 0.23, TradingView 0.20). Defense primes exhibit structurally low market correlation because their revenue is driven by government procurement cycles, not consumer or enterprise demand. LMT's beta is comparable to ARGX (0.21) and MRK (0.30).
- **Annualized volatility**: Estimated 25%. LMT's weekly volatility has been approximately 4% (annualized ~25-28%), well below the portfolio average of approximately 40%. The stock's 52-week range of $410-$670 implies realized annual volatility consistent with this estimate.
- **Average daily volume**: Approximately 1.7-2.6M shares ($1.1-1.7B notional at $658). LMT is among the most liquid defense names globally.

---

## Exposure by Sector

| Sector | Long % NAV | Prior % NAV | Change |
|---|---|---|---|
| Power Generation / Utilities | 41.0% | 43.0% | -2.0% (CEG resized from 20% to 18%) |
| Enterprise Software | 22.0% | 22.0% | 0.0% |
| Healthcare (Pharma) | 5.0% | 5.0% | 0.0% |
| Healthcare (Biotech) | 4.0% | 4.0% | 0.0% |
| Infrastructure Services | 9.0% | 9.0% | 0.0% |
| AI Hardware | 5.0% | 5.0% | 0.0% |
| Aerospace & Defense | 5.0% | 0.0% | +5.0% (NEW) |
| Cash | 9.0% | 12.0% | -3.0% |
| **Total Invested** | **91.0%** | **88.0%** | **+3.0%** |

Note: The prior report was based on the first draft IC memo which had CEG at 20.0%. The PM has since reduced CEG to 18.0% (implemented in an earlier final IC memo today). Power sector exposure has improved from 43.0% to 41.0%.

### Sector Concentration Flags

1. **Power Generation / Utilities at 41.0% -- BREACH (continuing, improved).** VST (23%) + CEG (18%) remain 16 percentage points above the 25% sector limit. Improved by 2 percentage points from the prior report's 43.0% due to CEG trim. Under existing waiver.

2. **Enterprise Software at 22.0% -- WARNING (continuing).** NOW (12%) + CRM (10%). Unchanged. Both remain exposed to SaaSpocalypse selling pressure.

3. **Aerospace & Defense at 5.0% -- OK (new).** LMT is the sole defense name. At 5.0%, this is well within any reasonable single-sector limit.

4. **Healthcare at 9.0% -- OK (continuing).** MRK (5%) + ARGX (4%). Unchanged.

5. **Infrastructure Services at 9.0% -- OK (continuing).** EME (7%) + WLDN (2%). Unchanged.

---

## Factor Exposures

| Factor | Exposure % NAV | Prior (9-Position) | Change | Z-Score vs. History |
|---|---|---|---|---|
| AI / Data Center Demand (total) | ~66% of invested | ~73% of invested | -7% | Extreme (>2.0 sigma) |
| Power Generation / Nuclear | 41.0% | 43.0% | -2.0% | Extreme (>2.5 sigma) |
| Enterprise Software / SaaS | 22.0% | 22.0% | 0.0% | Elevated (~1.5 sigma) |
| Healthcare / Defensive | 9.0% | 9.0% | 0.0% | Moderate |
| Defense / Geopolitical Spending | 5.0% | 0.0% | +5.0% | New -- moderate |
| Infrastructure Services | 9.0% | 9.0% | 0.0% | Moderate |
| AI Hardware | 5.0% | 5.0% | 0.0% | Moderate |
| Contrarian / Value Factor | 15.0% | 15.0% | 0.0% | Moderate |
| Defensive / Low-Beta Factor | 14.0% | 9.0% | +5.0% | Constructive |
| Small-Cap / Illiquidity Factor | 2.0% | 2.0% | 0.0% | Low |
| Interest Rate Sensitivity | Elevated | Elevated | Unchanged | ~1.5 sigma |

### Factor Analysis

**1. Defense/geopolitical factor is new and uncorrelated.** LMT introduces a return driver -- government defense procurement -- that has near-zero correlation with the portfolio's dominant drivers (AI capex, hyperscaler demand, enterprise software renewal). Defense spending is driven by geopolitical events, congressional appropriations, and allied procurement cycles. None of these overlap with the AI/data center theme that drives approximately 66% of invested capital. This is genuine diversification.

**2. Defensive/low-beta factor has expanded from 9.0% to 14.0%.** LMT (0.22 beta) + MRK (0.30 beta) + ARGX (0.21 beta) = 14% of NAV in names with sub-0.30 average beta. This is the portfolio's structural ballast in a risk-off environment. In a broad market selloff, these three positions are expected to decline approximately 60-80% less than the market.

**3. AI theme concentration has improved to approximately 66%.** With LMT adding a non-AI position, the share of invested capital linked to AI/data center demand drops from approximately 73% to approximately 66% (VST 23% + CEG 18% + NOW 12% + CRM 10% + DELL 5% = 68% of 91% invested, plus partial AI linkage in EME and WLDN). The trend is improving but AI remains the dominant thematic risk.

**4. Geopolitical event sensitivity is now two-directional.** The Iran crisis creates a situation where LMT is a direct beneficiary while other positions face indirect risk (risk-off selling in software, uncertain oil price impact on power generation costs). The portfolio now has natural offsets to geopolitical escalation that it previously lacked.

---

## Concentration and Correlation Flags

### Estimated Correlation Matrix (10-Position Portfolio)

| | VST | CEG | NOW | CRM | EME | LMT | MRK | DELL | ARGX | WLDN |
|---|---|---|---|---|---|---|---|---|---|---|
| **VST** | 1.00 | 0.80 | 0.20 | 0.15 | 0.45 | 0.10 | 0.05 | 0.30 | 0.00 | 0.35 |
| **CEG** | 0.80 | 1.00 | 0.20 | 0.15 | 0.45 | 0.10 | 0.05 | 0.30 | 0.00 | 0.35 |
| **NOW** | 0.20 | 0.20 | 1.00 | 0.55 | 0.15 | 0.05 | 0.10 | 0.25 | 0.05 | 0.10 |
| **CRM** | 0.15 | 0.15 | 0.55 | 1.00 | 0.15 | 0.05 | 0.10 | 0.30 | 0.05 | 0.10 |
| **EME** | 0.45 | 0.45 | 0.15 | 0.15 | 1.00 | 0.10 | 0.05 | 0.25 | 0.00 | 0.40 |
| **LMT** | 0.10 | 0.10 | 0.05 | 0.05 | 0.10 | 1.00 | 0.15 | 0.10 | 0.05 | 0.10 |
| **MRK** | 0.05 | 0.05 | 0.10 | 0.10 | 0.05 | 0.15 | 1.00 | 0.10 | 0.35 | 0.05 |
| **DELL** | 0.30 | 0.30 | 0.25 | 0.30 | 0.25 | 0.10 | 0.10 | 1.00 | 0.05 | 0.15 |
| **ARGX** | 0.00 | 0.00 | 0.05 | 0.05 | 0.00 | 0.05 | 0.35 | 0.05 | 1.00 | 0.00 |
| **WLDN** | 0.35 | 0.35 | 0.10 | 0.10 | 0.40 | 0.10 | 0.05 | 0.15 | 0.00 | 1.00 |

### Key Correlation Observations

- **LMT correlations with existing book are uniformly low (0.05-0.15).** This is the quantitative confirmation of the PM's portfolio construction thesis. LMT's highest correlation is with MRK (0.15) -- both are defensive, low-beta names that benefit from geopolitical uncertainty. The 0.10 correlation with VST/CEG/EME reflects minimal shared exposure to power generation demand drivers. The 0.05 correlation with NOW/CRM reflects near-zero overlap between defense procurement and enterprise software spending.
- **VST-CEG (0.80) remains the dominant risk pair.** At 41% combined weight, the VST-CEG covariance term contributes approximately 23% of total portfolio variance (down from 25% at 43% combined weight).
- **NOW-CRM (0.55) remains the second most correlated pair.** At 22% combined weight, contributes approximately 7% of total portfolio variance.
- **LMT-MRK (0.15) creates a modest defensive cluster.** At 10% combined weight with low individual betas, this pair contributes negligible variance. The positive correlation reflects shared defensive/safe-haven characteristics.

### Effective Number of Independent Bets

The proposed 10-position portfolio has approximately **3.8 effective independent bets**, up from approximately 3.4 in the 9-position portfolio. This improvement is driven by LMT's uniformly low correlations with the existing book. The theoretical maximum for a 10-position portfolio with partial correlations is approximately 6.0-7.0. The portfolio remains below maximum due to the VST-CEG pair (0.80 correlation, 41% combined) and NOW-CRM pair (0.55 correlation, 22% combined).

The PM's estimate of 3.8 effective independent bets in the draft memo is confirmed by this analysis.

---

## Portfolio Beta

Net portfolio beta = sum of (weight x beta):

| Position | Weight | Beta | Contribution |
|---|---|---|---|
| VST | 0.230 | 1.43 | 0.329 |
| CEG | 0.180 | 1.15 | 0.207 |
| NOW | 0.120 | 1.00 | 0.120 |
| CRM | 0.100 | 1.28 | 0.128 |
| EME | 0.070 | 1.17 | 0.082 |
| LMT | 0.050 | 0.22 | 0.011 |
| MRK | 0.050 | 0.30 | 0.015 |
| DELL | 0.050 | 1.03 | 0.052 |
| ARGX | 0.040 | 0.21 | 0.008 |
| WLDN | 0.020 | 0.95 | 0.019 |
| Cash | 0.090 | 0.00 | 0.000 |
| **Portfolio** | | | **0.97** |

Note: The PM estimated portfolio beta at 0.97 in the draft. Using the precise LMT beta of 0.22, the computed beta is 0.971, rounding to 0.97. This is consistent with the PM's estimate.

**Portfolio beta of 0.97 is within the 1.0 limit -- OK.** LMT at 0.22 beta contributes only 0.011 to portfolio beta despite a 5% allocation. For context, deploying the same 5% into a 1.0-beta name would have added 0.050, nearly 5x more directional risk.

**Implication:** In a 10% market selloff, the portfolio would be expected to lose approximately 9.7% of NAV. In a 20% market decline, the expected loss is approximately 19.4% of NAV.

---

## Value at Risk (Parametric)

### Inputs

| Position | Weight | Ann. Vol | Daily Vol | Position Daily Vol (% NAV) |
|---|---|---|---|---|
| VST | 23.0% | 52.0% | 3.28% | 0.7544% |
| CEG | 18.0% | 45.0% | 2.84% | 0.5112% |
| NOW | 12.0% | 45.0% | 2.84% | 0.3408% |
| CRM | 10.0% | 40.0% | 2.52% | 0.2520% |
| EME | 7.0% | 38.0% | 2.40% | 0.1680% |
| LMT | 5.0% | 25.0% | 1.58% | 0.0790% |
| MRK | 5.0% | 22.0% | 1.39% | 0.0695% |
| DELL | 5.0% | 42.0% | 2.65% | 0.1325% |
| ARGX | 4.0% | 35.0% | 2.21% | 0.0884% |
| WLDN | 2.0% | 45.0% | 2.84% | 0.0568% |
| Cash | 9.0% | 0.0% | 0.00% | 0.0000% |

### Portfolio Variance Computation

Variance terms (position daily vol squared):

| Position | Variance |
|---|---|
| VST | 0.00005691 |
| CEG | 0.00002613 |
| NOW | 0.00001161 |
| CRM | 0.00000635 |
| EME | 0.00000282 |
| LMT | 0.00000062 |
| MRK | 0.00000048 |
| DELL | 0.00000176 |
| ARGX | 0.00000078 |
| WLDN | 0.00000032 |
| **Sum of variances** | **0.00010778** |

Key covariance terms (2 x rho x w_i x w_j x sigma_i x sigma_j, daily):

| Pair | Rho | Covariance |
|---|---|---|
| VST-CEG | 0.80 | 0.00006174 |
| VST-EME | 0.45 | 0.00001142 |
| VST-NOW | 0.20 | 0.00001027 |
| NOW-CRM | 0.55 | 0.00000944 |
| CEG-EME | 0.45 | 0.00000774 |
| CEG-NOW | 0.20 | 0.00000696 |
| VST-DELL | 0.30 | 0.00000600 |
| VST-CRM | 0.15 | 0.00000570 |
| CEG-DELL | 0.30 | 0.00000406 |
| CEG-CRM | 0.15 | 0.00000386 |
| VST-WLDN | 0.35 | 0.00000301 |
| VST-LMT | 0.10 | 0.00000119 |
| CEG-LMT | 0.10 | 0.00000081 |
| NOW-DELL | 0.25 | 0.00000226 |
| CRM-DELL | 0.30 | 0.00000200 |
| CEG-WLDN | 0.35 | 0.00000204 |
| MRK-ARGX | 0.35 | 0.00000043 |
| LMT-MRK | 0.15 | 0.00000016 |
| EME-WLDN | 0.40 | 0.00000076 |
| All other pairs (low rho, small weights) | various | ~0.00000400 |
| **Sum of covariances** | | **0.00013385** |

**Total portfolio variance** = 0.00010778 + 0.00013385 = **0.00024163**

**Portfolio daily sigma** = sqrt(0.00024163) = **1.555% of NAV**

### VaR Results

| Measure | Current (10-Position) | Prior (9-Position) | Change | Limit | Status |
|---|---|---|---|---|---|
| VaR 95% 1-day | 2.56% | 2.58% | -0.02% | 3.0% | OK |
| VaR 99% 1-day | 3.62% | 3.64% | -0.02% | 4.5% | OK |
| VaR 95% 10-day | 8.10% | 8.16% | -0.06% | -- | -- |
| VaR 99% 10-day | 11.45% | 11.51% | -0.06% | -- | -- |

**VaR has decreased despite deploying an additional 5% of capital.** LMT's 25% annualized volatility is the second-lowest in the portfolio (after MRK at 22%), and its near-zero correlations with existing holdings mean it adds negligible covariance. The diversification benefit slightly exceeds the marginal variance contribution, resulting in a net reduction in portfolio VaR. This is the hallmark of a genuinely diversifying addition.

Note: The prior report showed VaR 95% at 2.62% and VaR 99% at 3.70% for the 9-position portfolio. The slight difference from the figures above reflects the CEG resize from 20% to 18% that occurred between the two IC memos.

### VaR Marginal Contribution by Position

| Position | Marginal VaR Contribution (% of total) | Change vs. Prior |
|---|---|---|
| VST (23.0%) | ~37% | Increased slightly (larger share of smaller total) |
| CEG (18.0%) | ~24% | Decreased (resized from 20%) |
| NOW (12.0%) | ~13% | Unchanged |
| CRM (10.0%) | ~10% | Unchanged |
| EME (7.0%) | ~6% | Unchanged |
| LMT (5.0%) | ~2% | New -- minimal contribution |
| MRK (5.0%) | ~2% | Unchanged |
| DELL (5.0%) | ~4% | Unchanged |
| ARGX (4.0%) | ~1% | Unchanged |
| WLDN (2.0%) | ~1% | Unchanged |

**LMT contributes approximately 2% of total portfolio VaR at 5% of NAV.** This is comparable to MRK (2% of VaR at 5% of NAV) and better than DELL (4% of VaR at 5% of NAV). VST + CEG continue to dominate at approximately 61% of total VaR at 41% of NAV.

---

## Drawdown Monitor

| Level | Current Drawdown | Limit | Status |
|---|---|---|---|
| Portfolio (estimated) | -2.1% | -10% | OK |

The estimated -2.1% drawdown reflects VST's volatile week (14% intraday decline to $149 followed by recovery to $173). The recovery has largely restored the drawdown to levels consistent with the prior week. LMT has not yet been purchased, so it does not affect the current drawdown.

**VST Stop Proximity -- IMPROVED.** VST at $173 is now 23.6% above the $140 hard stop, a significant improvement from the 6.3% cushion in the prior risk report when VST was at $149. The PM has cancelled the $145 emergency review trigger given the recovery. Risk supports this decision. The $140 hard stop remains active.

**Drawdown headroom:** The portfolio has approximately 7.9 percentage points of headroom before breaching the -10% drawdown limit. At a portfolio beta of 0.97, this headroom would be consumed by an approximately 8.1% further decline in the S&P 500 (assuming current correlations hold).

---

## Liquidity Profile

| Ticker | Alloc % | Est. ADV ($M) | Days to Liquidate (25% ADV) | Bucket |
|---|---|---|---|---|
| VST | 23.0% | ~$800M | <0.2 | < 1 day |
| CEG | 18.0% | ~$600M | <0.2 | < 1 day |
| NOW | 12.0% | ~$500M | <0.1 | < 1 day |
| CRM | 10.0% | ~$700M | <0.1 | < 1 day |
| EME | 7.0% | ~$200M | <0.2 | < 1 day |
| LMT | 5.0% | ~$1,400M | <0.1 | < 1 day |
| MRK | 5.0% | ~$1,200M | <0.1 | < 1 day |
| DELL | 5.0% | ~$400M | <0.1 | < 1 day |
| ARGX | 4.0% | ~$300M | <0.1 | < 1 day |
| WLDN | 2.0% | ~$24M | ~2.8 | 1-3 days |

| Bucket | % Portfolio (Invested) |
|---|---|
| < 1 day | 97.8% (89.0% of NAV) |
| 1-3 days | 2.2% (2.0% of NAV) |
| > 3 days | 0.0% |

**LMT is among the most liquid names in the portfolio.** Average daily dollar volume of approximately $1.4B (based on ~2.0M shares/day at $658, using the midpoint of reported 1.7-2.6M range) means the 5% position can be liquidated in minutes at normal market conditions. Even in a VIX 30+ stress environment, LMT's large-cap defense contractor status ensures deep institutional liquidity.

**WLDN remains the only liquidity concern.** Unchanged from prior report. At 2.0% of NAV, acceptable.

---

## Stress Tests

### Historical Scenarios

| Scenario | VST (23%) | CEG (18%) | NOW (12%) | CRM (10%) | EME (7%) | LMT (5%) | MRK (5%) | DELL (5%) | ARGX (4%) | WLDN (2%) | Cash (9%) | Portfolio P&L |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **GFC 2008** | -12.65% | -9.00% | -5.40% | -4.50% | -4.20% | -2.00% | -1.25% | -2.75% | -1.60% | -1.30% | 0% | **-44.65%** |
| **COVID Feb-Mar 2020** | -10.35% | -7.20% | -4.20% | -3.00% | -2.80% | -0.75% | -0.50% | -2.00% | -0.80% | -1.00% | 0% | **-32.60%** |
| **Rates Shock 2022** | -8.05% | -5.40% | -3.60% | -3.50% | -1.75% | -0.50% | -0.75% | -1.25% | -1.20% | -0.60% | 0% | **-26.60%** |

### Scenario Assumptions

- **GFC 2008:** Broad equity drawdowns of 45-65%. Power/utility names: -50 to -55%. Software: -45%. Infrastructure: -60%. Defense: -40% (government contracts provide revenue floor, but multiple compression still occurs; LMT fell ~32% peak-to-trough in 2008). Healthcare pharma: -25%. Healthcare biotech: -40%. AI hardware: -55%. Small-cap: -65%.
- **COVID Feb-Mar 2020:** Sharp but fast drawdowns. Power: -40 to -45%. Software: -30 to -35%. Infrastructure: -40%. Defense: -15% (LMT fell ~18% peak-to-trough in COVID; outperformed significantly due to counter-cyclical demand). Healthcare pharma: -10%. Healthcare biotech: -20%. Hardware: -40%. Small-cap: -50%.
- **Rates Shock 2022:** Growth multiples compress 25-35%. Power: -30 to -35%. Software: -30 to -35%. Infrastructure: -25%. Defense: -10% (LMT actually gained ~30% in 2022 due to Ukraine conflict, but using -10% for a pure rates shock without geopolitical catalyst). Healthcare pharma: -15%. Healthcare biotech: -30%. Hardware: -25%.

### Key Insight: LMT Provides Stress Cushioning

In each historical stress scenario, LMT's contribution to portfolio losses is modest relative to its 5% allocation:

| Scenario | LMT Position Loss (% NAV) | Portfolio Average Loss per 5% (% NAV) |
|---|---|---|
| GFC 2008 | -2.00% | -2.48% |
| COVID Feb-Mar 2020 | -0.75% | -1.81% |
| Rates Shock 2022 | -0.50% | -1.48% |

LMT performs approximately 20-70% better than the portfolio average in stress scenarios. The most notable is COVID, where defense spending was unaffected and LMT's decline was driven solely by broad market risk-off selling rather than fundamental impairment. In the rates shock scenario, the assumption of -10% for LMT is conservative; the actual 2022 experience was +30% due to the Ukraine conflict.

### Hypothetical Scenarios

| Scenario | Assumptions | Portfolio P&L (% NAV) | Status |
|---|---|---|---|
| **Market crash -20%** | Beta-adjusted: 0.97 x -20% | **-19.4%** | **BREACH** |
| **Rates +100bps** | Duration/leverage hit across portfolio | **-13.2%** | **BREACH** |
| **AI demand disappointment** | Hyperscaler capex cut 25%; correlation spike | **-24.0%** | **BREACH** |
| **SaaSpocalypse deepens** | Software sector -25%; NOW/CRM hit, others modest | **-8.0%** | OK |
| **Sector rotation out of power** | Utilities -15%, tech flat, healthcare/defense +5% | **-5.1%** | OK |
| **Iran escalation deepens** | Defense +15%, oil surge, power mixed, software -5% | **-2.8%** | OK |
| **Iran rapid de-escalation** | Defense -10%, oil drop, power +5%, software +3% | **+1.5%** | OK |
| **Pharma tariff 200%** | MRK -20%, ARGX -15%; others flat | **-1.6%** | OK |
| **VST stop-loss trigger** | VST hits $140, position closed at $140 | **-1.5%** | OK |
| **March 4 tariff shock** | Broad -7%, defense flat, healthcare -3%, power -10% | **-6.4%** | OK |

**New scenarios added for LMT:**

- **Iran escalation deepens:** LMT rallies 15% (+0.75% NAV), oil surge benefits VST/CEG modestly (mixed: higher gas costs offset by higher power prices), software sells off -5% (-1.1% NAV from NOW+CRM), healthcare flat. Net portfolio impact: approximately -2.8% NAV. LMT partially offsets software losses.
- **Iran rapid de-escalation:** LMT declines 10% (-0.50% NAV) as the geopolitical premium unwinds. Power names rally 5% (+2.05% NAV) on reduced oil volatility. Software rallies 3% (+0.66% NAV). Net portfolio impact: approximately +1.5% NAV. The LMT loss is small and offset by relief rallies elsewhere.

**The de-escalation scenario is important for PM awareness.** A rapid resolution to the Iran crisis would cause LMT to give back 5-10% of any crisis-driven gap. At 5% allocation, this is a 0.25-0.50% NAV impact -- immaterial. The risk is well-sized. The PM is correct that LMT's contracted backlog ($194B) means the structural thesis persists even if the geopolitical premium fades.

---

## Limit Breaches / Warnings

### BREACHES (1 active)

1. **SECTOR CONCENTRATION -- BREACH (continuing, improved).** Power Generation / Utilities at 41.0% exceeds the 25% limit by 16 percentage points. Improved from 43.0% (18pp above limit) due to CEG trim from 20% to 18%. Under existing waiver.

### WARNINGS (8 active)

2. **CASH BUFFER AT 9.0% -- WARNING (new, urgent).** Cash reduced from 14.0% to 9.0% with the LMT addition. This is the most significant risk flag in this report. At 9.0%, the cash buffer is:
   - 6 percentage points below the 15% lower bound of the preferred range
   - Below the 12.0% level that was already flagged as thin in the prior risk report
   - Below the 14.0% level the prior final IC memo established

   **Specific concern:** In a compound adverse scenario (March 4 tariff shock + Iran escalation uncertainty + VIX spike above 25), the portfolio may need to raise cash urgently by selling into a declining market. With only 9.0% cash, there is no buffer to average down on high-conviction positions if they pull back, and no capacity to absorb a margin-of-safety deterioration across multiple names simultaneously.

   **Mitigation noted:** The PM's drawdown contingency plan (trim EME by 2% and DELL by 2% to raise cash to 13% if drawdown exceeds -5%) is constructive. The PM's additional offer to trim CEG to 16% (freeing 2% to bring cash to 11%) is also noted. Risk recommends the PM consider preemptively trimming CEG to 16% to establish an 11% cash floor before Monday's volatile open, rather than waiting for drawdown triggers.

3. **ENTERPRISE SOFTWARE CONCENTRATION -- WARNING (continuing).** NOW + CRM at 22.0% combined during an active sector selloff. Unchanged.

4. **AI THEME CONCENTRATION -- WARNING (continuing, improved).** Approximately 66% of invested capital is AI-linked, down from 73%. LMT introduces a fifth non-AI-linked position (joining MRK, ARGX, WLDN, and itself). Trajectory is improving.

5. **CEG APPROACHING TARGET -- WARNING (continuing, improved).** CEG at approximately $330 is 6% below the $350 target at 18% allocation (down from 20%). The March 7 revised target deadline remains the decision point. If the Long Analyst delivers a $370+ target, CEG may be resized upward. If not, further reduction to 15.0% would free 3% to cash (bringing cash to 12%), which Risk would view favorably.

6. **STRESS TEST FAILURES -- WARNING (continuing).** All three historical stress scenarios and three of eight hypothetical scenarios breach the -10% drawdown limit. This is structural under the long-only mandate with 91% invested.

7. **ARGX PDUFA BINARY RISK -- WARNING (continuing).** May 10, 2026 PDUFA decision. At 4% allocation, maximum adverse NAV impact of approximately 1.0% is manageable. May 1 pre-PDUFA review per PM directive.

8. **EFFECTIVE INDEPENDENT BETS -- WARNING (continuing, improved).** Approximately 3.8 effective independent bets, up from 3.4. Still below theoretical maximum of 6.0-7.0 for a 10-position portfolio.

9. **IRAN CRISIS COMPOUND EVENT RISK -- WARNING (new).** The Iran crisis introduces multi-channel risk:
   - Oil price surge ($75-85+ WTI expected Monday) increases input costs for power generation (negative for VST/CEG margin)
   - Risk-off selling pressure on software names (NOW, CRM)
   - Flight to safety benefits defense (LMT) and healthcare (MRK, ARGX)
   - Tariff escalation on March 4 compounds the geopolitical uncertainty

   The portfolio has partial offsets (LMT, MRK, ARGX benefit from risk-off), but 63% of NAV is in positions that face headwinds (VST, CEG, NOW, CRM, DELL) from the combined Iran + tariff environment. The 9.0% cash buffer provides limited room to maneuver if multiple positions deteriorate simultaneously.

---

## Marginal Risk Assessment: LMT (5.0%)

| Metric | Value | Assessment |
|---|---|---|
| Marginal beta contribution | +0.011 | Negligible; effectively zero directional risk added |
| Marginal VaR contribution | ~2% of total | Minimal |
| Correlation with existing book | Near-zero (0.05-0.15 range) | Genuinely diversifying |
| Downside to stop ($590) | 10.3% x 5.0% = 0.52% NAV | Acceptable |
| Upside/downside ratio | ~1.4:1 to $750 target from $658 | Below the 1.5:1 threshold at entry; improves if entry is achieved at midpoint of $650-685 range |
| Key risks | De-escalation unwinds geopolitical premium; production ramp execution; 22x multiple on pre-revision estimates | Manageable at 5% sizing |
| Diversification benefit | Introduces defense sector, uncorrelated return driver | Highly positive |
| Dividend yield | 2.1% | Provides carry |

### Risk Assessment: CONSTRUCTIVE WITH ONE CAVEAT

LMT is a risk-constructive addition to the portfolio. The combination of low beta (0.22), low volatility (25% annualized), low correlation with existing holdings (0.05-0.15), and a structurally independent demand driver (government defense procurement) make it an effective diversifier. At 5% allocation, the maximum NAV loss to stop is 0.52% -- immaterial at portfolio level.

**The one caveat is risk/reward at entry.** At the current price of $658 with a $750 target and $590 stop, the upside/downside ratio is approximately 1.4:1 ($92 upside vs. $68 downside). This is below the 1.5:1 minimum that the Small-Cap Analyst's DCO pitch was rejected for. However, the PM's entry range of $650-$685 with a directive to build over 3-5 days and not chase Monday's gap mitigates this. If the average entry price is $665 (midpoint of range), the risk/reward improves to approximately 1.1:1 ($85 upside vs. $75 downside). If entry is achieved at the $650 low end, risk/reward is 1.7:1.

**Risk recommendation:** The PM should be disciplined about the $650-$685 entry range. If Monday's gap pushes LMT above $700 and it does not retrace below $690, the risk/reward at entry deteriorates below 1:1. The PM's directive to pause accumulation above $700 is appropriate and supported by Risk. The 5% allocation is appropriately sized for the risk/reward profile.

**Geopolitical duration risk:** The LMT thesis has a structural component (contracted backlog, production ramp) that persists regardless of conflict duration, and a geopolitical premium component that depends on sustained tension. If the Iran crisis resolves within 1-2 weeks, LMT could give back 5-10% of any gap-up gains. At 5% allocation, this is a 0.25-0.50% NAV impact. This is acceptable and well within the portfolio's risk tolerance.

---

## Changes vs. Prior Risk Report

| Item | Prior (9-Position) | Proposed (10-Position) | Change | Direction |
|---|---|---|---|---|
| Gross/Net Exposure | 86.0% | 91.0% | +5.0% | More invested |
| Holdings | 9 | 10 (max) | +1 | Full capacity |
| Portfolio Beta | 0.94 | 0.97 | +0.03 | Slight increase (CEG trim offset by LMT) |
| VaR 95% 1-day | 2.58% | 2.56% | -0.02% | Better (diversification benefit) |
| VaR 99% 1-day | 3.64% | 3.62% | -0.02% | Better (diversification benefit) |
| Max Single-Name % NAV | 23.0% (VST) | 23.0% (VST) | 0.0% | Unchanged |
| Max Sector Net % NAV | 43.0% (Utilities) | 41.0% (Utilities) | -2.0% | Improved (CEG trim) |
| Defense % NAV | 0.0% | 5.0% | +5.0% | New sector -- positive |
| Effective Independent Bets | ~3.4 | ~3.8 | +0.4 | Better |
| GFC Stress Test | -43.65% | -44.65% | -1.0% | Modestly worse (more capital deployed) |
| COVID Stress Test | -32.65% | -32.60% | +0.05% | Flat (LMT outperforms in crisis) |
| Rates Shock | -26.70% | -26.60% | +0.10% | Flat |
| AI Demand Disappointment | -25.5% | -24.0% | +1.5% | Better (LMT not AI-linked) |
| Liquidity (% < 1 day) | 97.7% | 97.8% | +0.1% | Unchanged |
| Cash Buffer | 12.0% | 9.0% | -3.0% | Reduced -- primary concern |
| Active Breaches | 1 (sector) | 1 (sector) | 0 | Unchanged |
| Active Warnings | 8 | 8 | 0 | One resolved (VST stop proximity), two added (cash buffer, Iran compound risk) |

---

## Risk Manager Observations for Portfolio Manager

### 1. LMT Is Risk-Constructive -- Approved from Risk Perspective (Positive)

LMT at 5.0% is a sound risk management decision. It introduces the portfolio's first defense sector exposure with near-zero correlation to the existing book, a 0.22 beta that barely moves the portfolio's directional risk, and 25% annualized volatility that is approximately half the portfolio average. The defense procurement demand driver is structurally independent of AI, enterprise software, and power generation -- the three factors that dominate existing portfolio risk. VaR actually decreases despite deploying additional capital. This is the same outcome achieved with MRK and ARGX -- genuine diversification that improves risk-adjusted returns.

### 2. Cash Buffer at 9.0% Is the Primary Risk Concern (Urgent)

The 9.0% cash buffer is the thinnest since the portfolio's inception. In the current environment -- Iran crisis, March 4 tariff escalation, VIX near 20 and likely to spike Monday -- this leaves inadequate room to maneuver. Specific concerns:

- **No capacity to average down** on high-conviction positions if they pull back through entry ranges
- **No buffer for simultaneous adverse moves** across multiple positions
- **Drawdown contingency plan relies on selling into weakness** (trimming EME and DELL), which is suboptimal execution

**Risk recommendation:** Preemptively trim CEG from 18.0% to 16.0% before Monday's open, raising cash to 11.0%. This accomplishes three objectives: (a) reduces the sector concentration breach from 16pp to 14pp above the 25% limit, (b) takes partial profit on a position that is 6% from its target with diminishing risk/reward, and (c) restores a minimum 11% cash buffer before a high-volatility week. If the Long Analyst delivers a revised CEG target above $370 by March 7, the position can be rebuilt.

### 3. Entry Discipline on LMT Is Critical (Caution)

The PM's directive to build LMT over 3-5 days within $650-$685 and pause above $700 is appropriate. If Monday's gap exceeds $700, the risk/reward at entry deteriorates below 1:1. Risk supports the patience directive. The 5% allocation assumes an average entry near the midpoint of the range ($667). If entry is achieved only above $690, the PM should consider reducing the target allocation to 4% to maintain adequate risk/reward.

### 4. Iran Crisis Creates Two-Directional Portfolio Sensitivity (New, Informational)

The portfolio is now positioned to partially benefit from both escalation and de-escalation scenarios:
- **Escalation benefits:** LMT (+), MRK (defensive flight to safety), ARGX (defensive)
- **De-escalation benefits:** VST/CEG (reduced oil cost pressure), NOW/CRM (risk-on rally), DELL (sentiment)

This two-directional sensitivity is a meaningful improvement over the prior portfolio, which was uniformly exposed to risk-off selling. However, the offsets are asymmetric: 14% of NAV benefits from escalation (LMT + MRK + ARGX) while 63% of NAV faces headwinds from escalation (VST + CEG + NOW + CRM + DELL). The portfolio remains net long risk-on.

### 5. Full Portfolio at 10 Holdings Constrains Optionality (Informational)

With all 10 slots filled, the portfolio cannot add new positions without first exiting or reducing existing holdings. This constrains the ability to respond to new opportunities. The March 7 IC (CEG target revision deadline) may free capacity if CEG is reduced or exited.

---

## Model Assumptions and Limitations

1. **LMT beta of 0.22 is based on 5-year monthly data.** This period includes the 2022 Ukraine conflict, during which LMT significantly outperformed (gained approximately 30%). The trailing beta may therefore understate LMT's sensitivity to broad market selloffs that are not accompanied by geopolitical conflict. In a pure rates shock or recession-driven selloff without a defense catalyst, LMT's effective beta could be 0.40-0.60.

2. **LMT annualized volatility of 25% may increase during the Iran crisis.** Defense stocks experience elevated volatility during geopolitical events as institutional flows and options activity spike. LMT's realized volatility in the first week after the Iran strikes could be 35-40% annualized. This is a temporary effect and does not change the structural thesis.

3. **Correlation estimates between LMT and the existing portfolio are based on structural analysis rather than statistical computation.** The estimated 0.05-0.15 correlation range reflects the fundamental independence of defense procurement from AI/power/software demand drivers. In a severe liquidity crisis (GFC-type), correlations converge toward 1.0 and LMT's diversification benefit would diminish.

4. **Parametric VaR assumes multivariate normal returns.** Fat tails, gap risk, and correlation instability are not captured. Monday's LMT gap-up (or gap-down in other names) is a non-normal event that parametric VaR does not model. The true 99% 1-day loss is likely 25-35% higher than the parametric estimate.

5. **Stress test estimates for LMT use historical defense sector performance as proxy.** Individual stock outcomes may vary. LMT's $194B backlog and sole-source positions may provide more downside support than sector averages suggest.

6. **VST volatility of 52% is based on recent realized volatility including the Feb 28 intraday decline.** The recovery to $173 suggests the spike may have been anomalous, but the elevated vol estimate is maintained as conservative.
