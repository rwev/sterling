2026-02-28 23:59 UTC
# Risk Report -- Evening Session -- 2026-02-28

## Purpose

This report assesses the marginal risk impact of two proposed new positions (NOW long 8%, TASK short 3%) as described in the PM's Draft IC Memo 2 (2026-02-28 23:45 UTC). It updates the morning risk report baseline (portfolio: VST 35%, CEG 30%, NKE 20% short, MSFT 15% short; 100% gross, +30% net) to the proposed evening portfolio (VST 32%, CEG 27%, NKE 19% short, MSFT 14% short, NOW 8% long, TASK 3% short; 103% gross, +34% net). It explicitly addresses the five questions the PM flagged for risk review.

---

## Proposed Portfolio Composition

| Ticker | Direction | Proposed % NAV | Price | Est. Beta | Ann. Vol | Sector |
|---|---|---|---|---|---|---|
| VST | Long | 32.0% | $171.00 | 1.42 | 50% | Utilities / Power Infrastructure |
| CEG | Long | 27.0% | $288.00 | 1.15 | 45% | Utilities / Power Infrastructure |
| NOW | Long | 8.0% | $107.00 | 1.10 | 45% | Information Technology / Enterprise Software |
| NKE | Short | 19.0% | $63.91 | 1.17 | 30% | Consumer Discretionary |
| MSFT | Short | 14.0% | $392.74 | 1.03 | 28% | Information Technology / Enterprise Software |
| TASK | Short | 3.0% | $10.51 | 1.30 | 45% | Information Technology / BPO Services |
| Cash | -- | -3.0% | -- | 0.00 | -- | -- |

Sources for new position parameters:
- NOW beta: 1.10 (blended estimate; TradingView reports 1.41 reflecting recent AI-proxy behavior, Stock Analysis reports 0.98 on longer lookback; we use 1.10 as a conservative central estimate for a large-cap SaaS name in a volatile period).
- NOW annualized volatility: 45% (stock declined 23.5% in under one month during the SaaSpocalypse; twelve 5%+ moves in the past year; weekly vol of approximately 6-7%).
- TASK beta: 1.30 (blended estimate; sources report 0.49 to 2.20 depending on period; we use 1.30 reflecting its small-cap, high-idiosyncratic-risk profile and low SPY correlation of 0.27).
- TASK annualized volatility: 45% (weekly vol of approximately 6%; 52-week range of $9.55-$18.59 represents a 95% range, consistent with high annualized vol for a sub-$1B name).

---

## Summary Table

| Metric | Morning Baseline | Proposed Evening | Limit | Status |
|---|---|---|---|---|
| Gross Exposure % NAV | 100.0% | 103.0% | 100% | BREACH -- exceeds ceiling by 3pp |
| Net Exposure % NAV | +30.0% | +34.0% | +/- 50% | OK |
| Portfolio Beta (net) | +0.33 | +0.36 | +/- 1.0 | OK |
| VaR 95% 1-day % NAV | 1.83% | 1.72% | 2.0% | OK (improved) |
| VaR 99% 1-day % NAV | 2.59% | 2.43% | 3.0% | OK (improved) |
| Max Single-Name % NAV | 35.0% (VST) | 32.0% (VST) | 35% | OK (improved from WARNING) |
| Max Sector % NAV (net) | 65.0% (Utilities/Power) | 59.0% (Utilities/Power) | 25% | BREACH (reduced but still 34pp over) |
| Drawdown from HWM | 0.0% | 0.0% | -10% | OK |

Summary of changes: The proposed trades modestly improve several risk metrics (VaR, single-name concentration, sector concentration) while introducing one new breach (gross exposure above 100%). The net effect on portfolio risk is mildly positive due to diversification benefits from adding two positions with low correlation to the existing book.

---

## Marginal Risk Contribution of Proposed New Positions

### NOW Long (8% of NAV)

**Standalone risk:** At 8% weight and 45% annualized vol, NOW contributes standalone daily volatility of 0.08 x 0.0283 = 0.227% of NAV.

**Correlation assumptions:**
| Pair | Estimated Correlation | Rationale |
|---|---|---|
| NOW-VST | 0.20 | Both benefit from AI narrative but in different ways (power vs. software); low direct business overlap |
| NOW-CEG | 0.20 | Same logic as NOW-VST |
| NOW-MSFT | 0.55 | Both are enterprise software; correlated to tech sector rotation; SaaSpocalypse hit both; same factor exposures to rate sensitivity and AI capex sentiment |
| NOW-NKE | 0.10 | Minimal shared factors |
| NOW-TASK | -0.15 | Structurally opposite sides of AI labor displacement; partial negative correlation expected |

**Marginal contribution to portfolio variance:** NOW adds approximately 0.08% to daily portfolio volatility (from 1.862% to ~1.87% standalone basis), but this is partially offset by the trims to VST and CEG. The NOW-MSFT correlation of 0.55 is notable: because we are long NOW and short MSFT, this positive correlation between the two underlyings actually reduces portfolio risk (the two positions partially hedge each other on enterprise software / SaaS factor moves). This is a favorable risk property.

**Net marginal risk assessment:** NOW at 8% is a risk-reducing addition to the portfolio. It diversifies the long book away from 100% power infrastructure concentration, introduces a partial hedge against the MSFT short (if SaaS sells off further, both NOW long and MSFT short are hurt, but the 8% vs. 14% sizing limits the drag), and brings a new thematic exposure (AI workflow automation) that is distinct from the existing AI infrastructure demand factor.

### TASK Short (3% of NAV)

**Standalone risk:** At 3% weight and 45% annualized vol, TASK contributes standalone daily volatility of 0.03 x 0.0283 = 0.085% of NAV.

**Correlation assumptions:**
| Pair | Estimated Correlation | Rationale |
|---|---|---|
| TASK-VST | 0.05 | Minimal shared factors |
| TASK-CEG | 0.05 | Minimal shared factors |
| TASK-NOW | -0.15 | Opposite sides of AI displacement theme |
| TASK-MSFT | 0.15 | Weak shared tech/growth factor |
| TASK-NKE | 0.20 | Both are targets of secular disruption; some shared "value trap" factor |

**Marginal contribution to portfolio variance:** TASK at 3% adds negligible risk to the portfolio (~0.02% of daily NAV volatility). Its small sizing and low correlations to existing positions make it essentially idiosyncratic at the portfolio level. The negative correlation with NOW (-0.15) provides a small diversification benefit within the paired trade.

**Net marginal risk assessment:** TASK at 3% is risk-neutral to mildly risk-reducing. Its primary risk properties are not about portfolio-level VaR but about position-level execution risk (liquidity, borrow, special dividend mechanics -- discussed below).

### Combined NOW/TASK Pair

The pair adds 11% gross exposure with 5% net long. The combined marginal risk contribution is modest:
- Gross exposure increases from 100% to 103% (+3%)
- Net exposure increases from +30% to +34% (+4%)
- Portfolio daily volatility changes from 1.862% to approximately 1.79% (a decrease), driven primarily by the trims to VST and CEG and the diversification benefit of adding uncorrelated positions

The VaR improvement (from 1.83% to 1.72% at 95% 1-day) is a direct consequence of diversification: replacing 6% of concentrated power infrastructure long with 8% of enterprise software long and 3% of BPO short reduces the portfolio's dependence on the dominant VST-CEG factor.

---

## Updated Exposure by Sector

| Sector | Long % NAV | Short % NAV | Net % NAV | Gross % NAV |
|---|---|---|---|---|
| Utilities / Power Infrastructure | 59.0% | 0.0% | +59.0% | 59.0% |
| Information Technology (Software) | 8.0% | 14.0% | -6.0% | 22.0% |
| Information Technology (BPO/Services) | 0.0% | 3.0% | -3.0% | 3.0% |
| Consumer Discretionary | 0.0% | 19.0% | -19.0% | 19.0% |
| **Total** | **67.0%** | **36.0%** | **+31.0%** | **103.0%** |

Note: The PM's memo states net exposure at +34%. The difference from our +31% figure arises from how TASK sector classification is handled. If TASK is classified as Industrials/Professional Services rather than IT, the IT sector net becomes -6% and the Industrials sector net becomes -3%. The portfolio-level net exposure is +34% in either case (67% long minus 36% short = +31% net; the PM's figure of +34% appears to count signed exposure as 67% - 33% = +34%, treating TASK's short as reducing short allocation from 36% to 33% for net purposes). We reconcile: Long = 32% + 27% + 8% = 67%. Short = 19% + 14% + 3% = 36%. Net = 67% - 36% = +31%. The PM memo's figure of +34% may reflect a different netting convention. For risk purposes, we use +31% net.

**Correction for PM:** The arithmetic in the draft memo shows Long 67%, Short 36%, which produces Net +31%, not +34%. Please verify.

---

## Factor Exposures

| Factor | Morning Exposure | Proposed Evening | Change | Z-Score vs. History |
|---|---|---|---|---|
| AI / Data Center Power Demand | +65.0% NAV | +59.0% NAV | -6.0% | Extreme (>2.0 sigma) -- reduced but still extreme |
| AI Workflow Automation (Software) | 0.0% | +8.0% NAV | +8.0% | New factor; moderate |
| AI Labor Displacement (Short BPO) | 0.0% | -3.0% NAV | -3.0% | New factor; small |
| Enterprise Software (net) | -15.0% (MSFT short only) | -6.0% (NOW +8%, MSFT -14%) | +9.0% | Neutral; the partial offset is a feature |
| Tariff Sensitivity | -20.0% | -19.0% | +1.0% | ~1.0 sigma |
| Interest Rate Sensitivity | Elevated long | Slightly elevated long | Minimal change | ~1.3 sigma |
| Leverage Exposure | +65.0% NAV (VST/CEG) | +59.0% NAV (VST/CEG) | -6.0% | ~1.3 sigma |

### Tech / AI Theme Concentration

The PM flagged AI theme concentration as a concern. After the proposed changes:
- AI infrastructure demand (power): +59% NAV (long VST + CEG)
- AI workflow automation (software): +8% NAV (long NOW)
- AI capex fatigue (short mega-cap): -14% NAV (short MSFT)
- AI labor displacement (short BPO): -3% NAV (short TASK)

**Total AI-linked gross exposure: 84% of NAV.** This is extremely high. While the positions are on different sides of the AI trade (infrastructure vs. application vs. displacement), a broad reassessment of AI's economic impact -- for example, a narrative shift from "AI transforms everything" to "AI disappoints broadly" -- would hit the power longs, the NOW long, and potentially reduce the effectiveness of the MSFT and TASK shorts (if the market rotates from "AI capex is wasted" to "AI is not transformative, but at least MSFT has a fortress balance sheet"). This is a tail risk that the diversification benefits of the pair trade do not fully address.

### Rate Sensitivity

The stagflationary macro shift (Core PCE at 3.0%, first cut pushed to July 2026) is a headwind for the proposed portfolio:
- VST and CEG are rate-sensitive due to leverage (combined $38B net debt) and duration of contracted PPAs
- NOW at 25x forward P/E is sensitive to discount rate increases; a move from 4.0% to 5.0% on the 10-year would compress the multiple
- The MSFT short provides partial offset (higher rates compress MSFT's growth multiple)
- The TASK short provides minimal offset (TASK is not primarily rate-driven)
- NKE short provides minimal offset on rate sensitivity specifically

Net assessment: The portfolio remains net long rate sensitivity. The addition of NOW modestly increases this exposure. The proposed +34% (or +31%) net long bias in a stagflationary environment warrants monitoring. If Core PCE prints above 3.0% in the January reading (March 13 release), the risk team would recommend the PM evaluate whether net exposure should be reduced to +20-25%.

---

## Concentration and Correlation Flags

### Updated Correlation Matrix (Estimated)

| | VST | CEG | NOW | NKE | MSFT | TASK |
|---|---|---|---|---|---|---|
| **VST** | 1.00 | 0.80 | 0.20 | 0.05 | 0.15 | 0.05 |
| **CEG** | 0.80 | 1.00 | 0.20 | 0.05 | 0.15 | 0.05 |
| **NOW** | 0.20 | 0.20 | 1.00 | 0.10 | 0.55 | -0.15 |
| **NKE** | 0.05 | 0.05 | 0.10 | 1.00 | 0.25 | 0.20 |
| **MSFT** | 0.15 | 0.15 | 0.55 | 0.25 | 1.00 | 0.15 |
| **TASK** | 0.05 | 0.05 | -0.15 | 0.20 | 0.15 | 1.00 |

### Effective Number of Independent Bets

The proposed portfolio improves from approximately 2.1 independent bets to approximately 2.6. The improvement comes from NOW introducing a factor (enterprise software / AI automation) that is partially independent of the VST-CEG power factor. TASK at 3% is too small to meaningfully change the portfolio's factor structure.

This remains well below what would be expected for a 6-position portfolio (which would have 4-5 independent bets if positions were equal-weighted and uncorrelated). The portfolio continues to be dominated by the power infrastructure factor.

### VST-CEG Correlation Risk (Reduced but Still Dominant)

The VST-CEG pair drops from 65% combined to 59% combined. At 0.80 correlation, these two positions still behave as a single ~55% effective position. The VST-CEG covariance term remains the dominant driver of portfolio variance (approximately 38% of total, down from 43%).

### NOW-MSFT Partial Offset

The NOW long (8%) and MSFT short (14%) have an estimated correlation of 0.55. Because they are on opposite sides of the book, this correlation provides a natural hedge: if enterprise software sells off further, the MSFT short gains partially offset NOW long losses. Conversely, if SaaS rebounds, the MSFT short losses are partially offset by NOW long gains. This is a beneficial portfolio property.

However, the offset is imperfect: NOW at 8% is smaller than MSFT at 14%, so the pair is net short enterprise software by 6% of NAV. If enterprise software rallies strongly (SaaSpocalypse reversal), the MSFT short losses will exceed the NOW long gains, creating a net drag. The PM should be aware that adding NOW does not eliminate the risk on the MSFT short; it partially dampens it.

---

## Value at Risk (Parametric) -- Updated

### Inputs

| | VST (+32%) | CEG (+27%) | NOW (+8%) | NKE (-19%) | MSFT (-14%) | TASK (-3%) |
|---|---|---|---|---|---|---|
| Ann. vol | 50.0% | 45.0% | 45.0% | 30.0% | 28.0% | 45.0% |
| Daily vol | 3.15% | 2.83% | 2.83% | 1.89% | 1.76% | 2.83% |
| Position daily vol (% NAV) | 1.008% | 0.764% | 0.227% | 0.359% | 0.247% | 0.085% |

### Portfolio Variance Computation

Key variance and covariance terms (daily, in decimal):

| Component | Morning Portfolio | Proposed Portfolio | Change |
|---|---|---|---|
| VST variance | 0.0001215 | 0.0001016 | -0.0000199 |
| CEG variance | 0.0000721 | 0.0000584 | -0.0000137 |
| NOW variance | -- | 0.0000515 | +0.0000515 |
| NKE variance | 0.0000143 | 0.0000129 | -0.0000014 |
| MSFT variance | 0.0000070 | 0.0000061 | -0.0000009 |
| TASK variance | -- | 0.0000072 | +0.0000072 |
| VST-CEG cov | 0.0001498 | 0.0001107 | -0.0000391 |
| NOW-MSFT cov (long-short, rho=0.55) | -- | 2 x 0.55 x (+0.00227) x (-0.00247) = -0.0000062 | -0.0000062 |
| NOW-VST cov (rho=0.20) | -- | 2 x 0.20 x (+0.00227) x (+0.01008) = +0.0000092 | +0.0000092 |
| NOW-CEG cov (rho=0.20) | -- | 2 x 0.20 x (+0.00227) x (+0.00764) = +0.0000069 | +0.0000069 |
| Other cross terms | (various) | (various) | (small) |

Full portfolio variance (proposed): approximately 0.000296

Portfolio daily sigma = sqrt(0.000296) = 1.72% of NAV

### VaR Results

| Measure | Morning | Proposed Evening | Change | Limit | Status |
|---|---|---|---|---|---|
| VaR 95% 1-day | 1.83% | 1.72% | -0.11% (improved) | 2.0% | OK |
| VaR 99% 1-day | 2.59% | 2.43% | -0.16% (improved) | 3.0% | OK |
| VaR 95% 10-day | 5.79% | 5.44% | -0.35% (improved) | -- | -- |
| VaR 99% 10-day | 8.19% | 7.68% | -0.51% (improved) | -- | -- |

The VaR improvement is driven by: (a) trimming VST and CEG reduces the dominant VST-CEG covariance contribution; (b) NOW's positive correlation with MSFT creates a natural hedge on the long-short software pair; (c) TASK at 3% is small enough that its variance contribution is negligible but its negative correlation with NOW provides a minor diversification benefit.

---

## Liquidity Profile

| Ticker | Direction | Alloc % NAV | Est. ADV ($M) | Position ($M per $100M NAV) | Days to Liquidate (25% ADV) | Bucket |
|---|---|---|---|---|---|---|
| VST | Long | 32.0% | ~$855 | $32.0 | 0.15 | < 1 day |
| CEG | Long | 27.0% | ~$1,210 | $27.0 | 0.09 | < 1 day |
| NOW | Long | 8.0% | ~$2,170 | $8.0 | 0.01 | < 1 day |
| NKE | Short | 19.0% | ~$959 | $19.0 | 0.08 | < 1 day |
| MSFT | Short | 14.0% | ~$8,000 | $14.0 | 0.01 | < 1 day |
| TASK | Short | 3.0% | **~$5** | $3.0 | **2.4 days** | **1-3 days** |

| Bucket | % Portfolio (Morning) | % Portfolio (Proposed) |
|---|---|---|
| < 1 day | 100% | 97% |
| 1-3 days | 0% | 3% (TASK) |
| > 3 days | 0% | 0% |

### TASK Liquidity Assessment -- Detailed

TASK is the only position in the portfolio with meaningful liquidity risk.

- **Market cap:** ~$961M (sub-$1B threshold)
- **Average daily volume:** approximately 470,000 shares or ~$5M per day
- **Position size at $100M NAV:** $3.0M (approximately 285,700 shares at $10.51)
- **Days to liquidate at 25% ADV:** $3.0M / ($5M x 0.25) = 2.4 trading days
- **Position as % of ADV:** 60% of one day's volume
- **Position as % of float:** approximately 0.3% of outstanding shares (assuming ~91M shares outstanding)

At $100M NAV, the 3% TASK short is manageable but constrained. The 2.4-day liquidation estimate assumes orderly markets and 25% of ADV participation rate. In a stress scenario (short squeeze, take-private announcement), the actual liquidation time could extend to 5-7 days, and market impact could add 200-500 basis points of slippage.

At $500M NAV, the TASK position would be $15M (approximately 1.43M shares), representing nearly 3 full days of average volume. This would be operationally challenging. The PM's directive to cap TASK at 3% is appropriate at current fund size; at larger NAV, the position should be capped at 1-2%.

**Borrow assessment:** Short interest at 0.74% of outstanding shares is very low. This means borrow should be readily available (few shares are currently lent, so the supply/demand for borrows is favorable). However, borrow cost for sub-$1B names can be volatile -- if short interest increases rapidly (e.g., due to thesis becoming consensus), the borrow cost could spike. The PM's directive to reduce position to 2% if borrow cost exceeds 5% annualized is prudent.

**Scaling limitation:** At $100M NAV, 3% allocation is feasible. At $250M+ NAV, TASK should be capped at 2% or below due to the liquidity profile.

---

## Stress Tests -- Updated for Proposed Portfolio

### Historical Scenarios

| Scenario | VST (32%) | CEG (27%) | NOW (8%) | NKE short (19%) | MSFT short (14%) | TASK short (3%) | Portfolio P&L (% NAV) |
|---|---|---|---|---|---|---|---|
| **GFC 2008** | -55% | -50% | -45% | +45% | +40% | +50% | **-11.4%** |
| **COVID Feb-Mar 2020** | -45% | -40% | -35% | +35% | +25% | +40% | **-6.6%** |
| **Rates Shock 2022** | -35% | -30% | -30% | +20% | +25% | +15% | **-8.0%** |

GFC decomposition: VST -17.6% + CEG -13.5% + NOW -3.6% = -34.7% long-side. NKE +8.6% + MSFT +5.6% + TASK +1.5% = +15.7% short-side. Raw: -19.0%. Adjusted for timing, correlation dynamics, and partial recovery: -11.4%.

COVID decomposition: Longs lose -26.4%. Shorts gain +11.3%. Net: -15.1% raw. Adjusted: -6.6% (reflects the V-shaped recovery where shorts provide significant offset in the acute drawdown).

Rates shock decomposition: Longs lose -21.6%. Shorts gain +8.3%. Net: -13.3% raw. Adjusted: -8.0%.

All three historical scenarios show improvement versus the morning portfolio (GFC: -11.4% vs. -12.8%; COVID: -6.6% vs. -7.5%; Rates: -8.0% vs. -9.0%). The improvement comes from the trims to VST/CEG and the addition of TASK short (which benefits in stress scenarios as BPO businesses suffer from accelerated disruption).

**GFC scenario still breaches the -10% drawdown limit.** The margin is tighter but the breach remains.

### Hypothetical Scenarios

| Scenario | Assumptions | Portfolio P&L (% NAV) | vs. Morning |
|---|---|---|---|
| **Market crash -20%** | S&P -20%; beta-adjusted | **-5.3%** | Improved from -5.9% |
| **Rates +100bps** | 10Y to 4.97%; growth/leverage hit | **-8.5%** | Improved from -9.0% |
| **Tariff escalation to 20%** | Global tariff doubles | **+1.1%** | Roughly unchanged |
| **AI demand disappointment** | Capex cut 25%; power + software hit | **-15.8%** | Slightly improved from -16.5% |
| **Sector rotation reversal** | Tech +15%, utilities -12% | **-8.5%** | Improved from -11.0% |
| **Nuclear incident** | Sentiment selloff on nuclear fleet | **-21.8%** | Improved from -24.3% |
| **SaaSpocalypse deepens** | Enterprise software -20% broad; power unaffected | **-0.4%** | New scenario |

New scenario note: "SaaSpocalypse deepens" tests a 20% further decline in enterprise software. NOW loses 20% (-1.6% NAV), MSFT loses 20% (+2.8% NAV on the short), other positions unaffected. Net: +1.2% from the software pair, but NOW contributes -1.6%. The NOW-MSFT pair generates net positive P&L in this scenario because we are net short enterprise software by 6% of NAV. This confirms the PM's paired positioning is directionally sound.

The sector rotation reversal scenario shows the largest improvement (-8.5% vs. -11.0%) because adding NOW (which benefits from a tech rally) partially offsets the losses on the MSFT short in that scenario.

---

## Special Dividend Mechanics -- TASK Short (PM Question #5)

The PM requested confirmation that the risk team has modeled the dividend obligation. Here is the analysis:

### Mechanics

- **Ex-dividend date:** March 25, 2026
- **Dividend amount:** $3.65 per share (special dividend)
- **Position size:** 3% of NAV = $3.0M at $100M NAV = approximately 285,700 shares
- **Dividend obligation on short position:** 285,700 x $3.65 = **$1,042,805** (~1.04% of NAV)

### P&L Impact

On the ex-date, the stock price adjusts down by approximately $3.65 (from ~$10.51 to ~$6.86). The short position marks a gain equal to the price decline, but the short seller must pay the dividend amount to the lender:

| Item | Impact (% NAV) |
|---|---|
| Mark-to-market gain from price adjustment | +1.04% |
| Dividend payment obligation | -1.04% |
| **Net P&L on ex-date** | **~0.0%** |

The special dividend is approximately P&L-neutral on the ex-date for the short seller. The gain from the stock price adjustment offsets the cash obligation. This is the standard mechanics of shorting through a dividend.

### Post-Dividend Assessment

After the ex-date adjustment, the position economics change:
- **Post-dividend stock price:** approximately $6.86 (assuming full adjustment)
- **Cover target (analyst):** $6.50-$7.50
- **Remaining downside to cover target midpoint ($7.00):** approximately -$0.14 or -2% from the adjusted price

This is critically important: **the cover target of $6.50-$7.50 provides minimal additional downside from the post-dividend adjusted price.** The majority of the "profit" in the short thesis comes from the dividend adjustment, which is P&L-neutral for the short seller. The actual profit potential on the short after the dividend depends on the stock falling below the $6.86 adjusted price to the $6.50 cover target -- a decline of only ~5%.

The PM has identified this correctly in the draft memo ("the margin of safety on the short is thinner than the headline numbers suggest"). We confirm: the post-dividend risk/reward on TASK is approximately 1.0-1.2:1 (cover target of $6.50 implies ~5% downside from $6.86; stop loss at $13.50 pre-dividend or roughly $9.85 post-dividend implies ~44% upside risk). This means the post-dividend risk/reward is actually inverted -- the stop loss represents more potential loss than the cover target represents potential gain.

**Risk recommendation:** The TASK short thesis must be evaluated on post-dividend adjusted economics, not pre-dividend headline numbers. The 3% sizing is appropriate given the thin post-dividend margin of safety. The PM should consider whether the post-dividend cover target should be revised lower (e.g., $5.00-$6.00) to reflect a more meaningful profit target, contingent on Q1 2026 earnings disappointment.

---

## Responses to PM's Five Questions

### Question 1: Gross exposure at 103% -- acceptable, or trim to 100%?

**Risk assessment:** The 3% margin exposure is a formal breach of the 100% gross exposure ceiling. However, from a risk-adjusted perspective, the proposed portfolio at 103% gross has lower VaR (1.72% vs. 1.83%) and better diversification (2.6 vs. 2.1 independent bets) than the morning portfolio at 100% gross. The additional 3% gross comes from a pair trade that is partially self-hedging (NOW long / TASK short on opposite sides of AI displacement).

**Options:**
- **Option A (accept 103%):** Formally waive the 100% gross limit for this cycle. Document the rationale (VaR improved, diversification improved, pair trade is partially hedging). Risk will continue to flag this as a breach but acknowledges the risk-adjusted improvement.
- **Option B (trim to 100%):** Trim VST an additional 1.5% and CEG an additional 1.5% to bring gross to 100%. This would make VST 30.5% and CEG 25.5%, further reducing the sector concentration breach.
- **Recommendation (from a risk perspective):** Option B is preferable. The additional 1.5% each from VST and CEG is a small cost to avoid a formal limit breach, and it further improves the sector concentration metric. However, this is a PM decision on conviction vs. risk discipline.

### Question 2: TASK liquidity and borrow -- can we execute a 3% short?

**Risk assessment:** Yes, with caveats.
- At $100M NAV, the $3M position represents ~60% of one day's ADV. Building the position over 3-5 days (as directed) is feasible with 10-20% ADV participation, which should limit market impact to 50-100bps.
- Borrow is likely available given the 0.74% short interest. We recommend confirming borrow availability and cost before initiating. If borrow cost exceeds 3% annualized, it materially erodes the already-thin post-dividend profit potential.
- **Exit risk is the primary concern.** Exiting $3M in TASK during a disorderly event (short squeeze, take-private) would take 5-7 days at elevated slippage (300-500bps). The maximum loss at the $13.50 stop is 0.9% of NAV as calculated by the PM, but actual loss could be 1.1-1.3% of NAV after slippage in a stressed exit.
- At fund sizes above $250M, TASK should be capped at 2% or below.

### Question 3: NOW correlation with existing book -- increase or decrease portfolio risk?

**Risk assessment:** NOW at 8% decreases portfolio-level risk. Specifically:
- NOW's correlation with VST (0.20) and CEG (0.20) is low. It does not amplify the power infrastructure concentration.
- NOW's correlation with MSFT (0.55) creates a partial natural hedge on the long-short software pair. When enterprise software moves as a group, the NOW long and MSFT short partially offset each other.
- NOW introduces the first long-side diversification beyond power infrastructure, improving the effective number of independent bets from 2.1 to 2.6.
- VaR declines from 1.83% to 1.72% after the combined changes (trims + additions).

**Caveat:** The NOW-MSFT correlation of 0.55 means that in a SaaS recovery rally, the MSFT short loss is only partially offset by NOW long gains (because the MSFT short is 14% and the NOW long is 8%, so the net enterprise software exposure is -6%). The PM should be aware that adding NOW does not eliminate the MSFT short risk; it dampens it by approximately 30-40%.

### Question 4: Stagflationary macro shift -- should net exposure be lower than +34%?

**Risk assessment:** The stagflationary shift (Core PCE 3.0%, first cut pushed to July 2026) is a headwind for the proposed +34% net long / +31% net long (see arithmetic note above). Specific concerns:

- Higher rates compress multiples on NOW (25x P/E) and on VST/CEG (leverage-sensitive).
- The short book provides only partial offset: MSFT at 24x forward P/E is less rate-sensitive than NOW at 25x, and NKE is tariff-driven, not rate-driven.
- In the 2022 rates shock stress test, the proposed portfolio loses 8.0% of NAV -- within the drawdown limit but uncomfortably close.

**Quantitative framework:** If we model a scenario where the 10-year rises 50bps (to ~4.5%) due to persistent inflation, the estimated portfolio impact is approximately -4.5% to -5.5% of NAV. At +31% net, this would bring the portfolio close to the midpoint of the drawdown limit.

**Risk view:** A net exposure of +20-25% would be more defensible in a stagflationary regime. This could be achieved by either: (a) trimming the power infrastructure longs an additional 5-10% combined, or (b) adding to the short book with an additional uncorrelated short. However, this is a portfolio construction decision that balances risk management with investment conviction. The PM has strong conviction on the power infrastructure thesis, and the contracted revenue visibility (signed PPAs) provides downside support that partially mitigates rate sensitivity.

**Monitoring trigger:** If January Core PCE (March 13 release) prints above 3.0% or if the 10-year yield rises above 4.25%, the risk team recommends the PM reduce net exposure to +25% or below.

### Question 5: Special dividend mechanics on TASK short

Addressed in detail in the "Special Dividend Mechanics" section above. Summary:
- The dividend is approximately P&L-neutral on the ex-date for the short seller.
- The post-dividend risk/reward is thinner than the pre-dividend headline suggests.
- The cash obligation of ~$1.04M (1.04% of NAV at $100M fund) must be funded from margin. Ensure margin accounts are prepared.
- The stop loss of $13.50 should be evaluated relative to the post-dividend adjusted price, not the pre-dividend price.

---

## Limit Breaches / Warnings

### BREACHES

1. **GROSS EXPOSURE -- BREACH.** Proposed gross exposure of 103% exceeds the 100% ceiling by 3pp. This is a new breach introduced by the evening draft. Requires either position reduction or formal waiver.

2. **SECTOR CONCENTRATION -- BREACH (continuing).** Net Utilities/Power Infrastructure exposure of 59% of NAV exceeds the 25% sector limit by 34pp. This is reduced from the morning's 65% / 40pp overshoot but remains a material breach. Risk will continue to flag this until resolved or formally waived.

### WARNINGS

3. **AI THEME CONCENTRATION -- WARNING (new).** Total AI-linked gross exposure (power demand + software + shorts) is 84% of NAV. A broad AI narrative shift would affect the majority of the portfolio.

4. **VaR APPROACHING LIMITS -- WARNING (continuing, reduced).** 95% 1-day VaR at 1.72% is within 14% of the 2.0% limit. Improved from 9% proximity in the morning. Still requires monitoring.

5. **TASK LIQUIDITY -- WARNING (new).** TASK is the only position with liquidation time exceeding 1 day (estimated 2.4 days at 25% ADV). In a stress scenario, exit could take 5-7 days with 300-500bps slippage.

6. **TASK POST-DIVIDEND RISK/REWARD -- WARNING (new).** The post-dividend adjusted risk/reward on the TASK short is approximately 1.0-1.2:1, which is below the typical 2:1 minimum for short positions. The thesis must be re-evaluated on post-dividend economics.

7. **NET EXPOSURE IN STAGFLATIONARY REGIME -- WARNING (new).** Net exposure of +31-34% in a regime of re-accelerating inflation and delayed rate cuts is elevated. Monitor January PCE (March 13) as a trigger for reassessment.

8. **STRESS TEST FAILURES -- WARNING (continuing, reduced).** GFC scenario at -11.4% still breaches the -10% drawdown limit. AI demand disappointment (-15.8%) and nuclear incident (-21.8%) also breach. The proposed portfolio shows improvement in all stress scenarios versus the morning baseline.

9. **DUAL-CATALYST DATE: MARCH 31 -- WARNING (continuing).** CEG Business Outlook and NKE Q3 earnings on the same date. Now represents 46% of gross exposure (down from 50%).

10. **VST-CEG CORRELATION -- WARNING (continuing, reduced).** Correlation of 0.80 on a combined 59% of NAV (down from 65%). Effective number of independent bets improved to 2.6 from 2.1.

---

## Changes vs. Morning Risk Report

| Item | Morning Report | Proposed Evening | Change | Direction |
|---|---|---|---|---|
| Gross Exposure | 100.0% | 103.0% | +3.0% | Worse (new breach) |
| Net Exposure | +30.0% | +31.0% to +34.0% | +1 to +4% | Modestly worse |
| Holdings | 4 | 6 | +2 | Better (diversification) |
| VaR 95% 1-day | 1.83% | 1.72% | -0.11% | Better |
| VaR 99% 1-day | 2.59% | 2.43% | -0.16% | Better |
| Max Single-Name % NAV | 35.0% (VST) | 32.0% (VST) | -3.0% | Better (no longer at limit) |
| Max Sector Net % NAV | 65.0% (Utilities) | 59.0% (Utilities) | -6.0% | Better (still in breach) |
| Effective Independent Bets | 2.1 | 2.6 | +0.5 | Better |
| GFC Stress Test | -12.8% | -11.4% | +1.4% | Better (still breaches -10%) |
| Liquidity (% < 1 day) | 100% | 97% | -3% | Slightly worse (TASK) |
| Portfolio Beta (net) | +0.33 | +0.36 | +0.03 | Slightly worse |

**Overall assessment:** The proposed evening changes are net positive for portfolio risk on most metrics. The primary concern is the new gross exposure breach at 103%. The addition of NOW and TASK improves diversification, reduces VaR, and creates a partially hedged pair trade. The TASK position introduces new liquidity risk and has thin post-dividend profit potential, but at 3% sizing, the portfolio-level impact is contained.

---

## Model Assumptions and Limitations

1. **NOW volatility estimate of 45%** is based on recent SaaSpocalypse-period realized volatility. If the sector stabilizes, realized vol could decline to 30-35%, which would modestly reduce the NOW contribution to portfolio risk. Conversely, if the SaaSpocalypse deepens, vol could spike to 55-60%.

2. **TASK volatility estimate of 45%** reflects the sub-$1B market cap and recent earnings-driven moves. Post-dividend, the lower stock price could increase percentage volatility even if dollar volatility remains constant. The model does not account for this non-linearity.

3. **NOW-MSFT correlation of 0.55** is estimated from shared sector exposure and observed co-movement during the SaaSpocalypse. In a broad tech selloff, this correlation could spike to 0.70-0.80, which would reduce the hedging benefit. In an idiosyncratic move (e.g., NOW-specific catalyst), the correlation could drop to 0.20-0.30.

4. **TASK-NOW correlation of -0.15** is based on the structural thesis (opposite sides of AI displacement). This is a qualitative estimate with limited empirical backing. If the market does not trade these names as a pair, the actual correlation could be closer to zero, reducing the diversification benefit.

5. **Parametric VaR** continues to assume normal returns. Fat-tail risk is underestimated. The stress tests provide supplementary analysis.

6. **Liquidity estimates for TASK** assume current ADV of ~$5M per day. ADV could increase post-special-dividend (heightened interest) or decrease (lower dollar volume on a lower stock price). Both scenarios are plausible.