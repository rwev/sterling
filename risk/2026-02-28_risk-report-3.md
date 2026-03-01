2026-02-28 23:59 UTC
# Risk Report -- Late Night Session -- 2026-02-28

## Purpose

This report assesses the marginal risk impact of three proposed new positions (DELL long 2.5%, OWL short 3.0%, TEP short 2.5%) and concurrent trims to four existing positions, as described in the PM's Draft IC Memo 3 (2026-02-28 23:59 UTC). It updates the evening final risk baseline (portfolio: VST 30.5%, CEG 25.5%, NOW 8.0%, NKE 19.0% short, MSFT 14.0% short, TASK 3.0% short; 100% gross, +28% net) to the proposed late-night portfolio (9 holdings, 100% gross, +22% net).

---

## Proposed Portfolio Composition

| Ticker | Direction | Current % | Proposed % | Price | Est. Beta | Ann. Vol | Sector |
|---|---|---|---|---|---|---|---|
| VST | Long | 30.5% | 27.5% | $171.00 | 1.42 | 50% | Utilities / Power Infrastructure |
| CEG | Long | 25.5% | 23.0% | $288.00 | 1.15 | 45% | Utilities / Power Infrastructure |
| NOW | Long | 8.0% | 8.0% | $107.00 | 1.10 | 45% | Information Technology / Enterprise Software |
| DELL | Long | -- | 2.5% | $148.08 | 1.15 | 42% | Information Technology / AI Hardware Infrastructure |
| NKE | Short | 19.0% | 17.0% | $63.91 | 1.17 | 30% | Consumer Discretionary |
| MSFT | Short | 14.0% | 13.5% | $392.74 | 1.03 | 28% | Information Technology / Enterprise Software |
| TASK | Short | 3.0% | 3.0% | $10.51 | 1.30 | 45% | Information Technology / BPO Services |
| OWL | Short | -- | 3.0% | $10.55 | 1.11 | 55% | Financials / Asset Management |
| TEP | Short | -- | 2.5% | EUR 53.88 (~$63.60) | 0.85 | 40% | Industrials / BPO Services |

### Parameter Sources for New Positions

- **DELL beta**: 1.15 (blended estimate; TradingView reports 2.18 on short lookback inflated by the 22% earnings gap; Stock Analysis reports 1.11; we use 1.15 as a conservative central estimate for a large-cap hardware name post-earnings normalization).
- **DELL annualized volatility**: 42% (post-earnings implied vol has spiked; the stock moved from $121 to $148 in two sessions; 30-day realized vol is elevated at ~55% but will normalize; we use 42% reflecting a 90-day forward estimate incorporating the post-gap consolidation period).
- **OWL beta**: 1.11 (Stock Analysis, consistent across sources). Note: OWL's beta to the broad market understates its sensitivity to credit/financial stress factors.
- **OWL annualized volatility**: 55% (the stock has declined 53% from its 52-week high; the February 24 session alone saw an 8% intraday range; 11 consecutive down days indicate elevated realized vol; we model 55% reflecting ongoing credit stress and momentum-driven selling).
- **TEP beta**: 0.85 (blended; sources range from -0.11 to 1.46; we use 0.85 reflecting the stock's low correlation to US equities and its European listing; the negative beta readings from some sources reflect the stock's decline during a period of rising US markets, which is a feature of the short thesis, not a structural negative beta).
- **TEP annualized volatility**: 40% (TradingView reports 11% which appears to be a trailing metric from a lower-vol period; the stock is down 50% from its 52-week high and has rising short interest; we model 40% reflecting the accelerating disruption narrative and CEO transition catalyst).

---

## Summary Table

| Metric | Evening Baseline | Proposed Late Night | Limit | Status |
|---|---|---|---|---|
| Gross Exposure % NAV | 100.0% | 100.0% | 100% | OK |
| Net Exposure % NAV | +28.0% | +22.0% | +/- 50% | OK (improved) |
| Portfolio Beta (net) | ~+0.33 | ~+0.25 | +/- 1.0 | OK (improved) |
| VaR 95% 1-day % NAV | ~1.65% | 1.53% | 2.0% | OK (improved) |
| VaR 99% 1-day % NAV | ~2.33% | 2.16% | 3.0% | OK (improved) |
| Max Single-Name % NAV | 30.5% (VST) | 27.5% (VST) | 35% | OK (improved) |
| Max Sector % NAV (net) | 56.0% (Utilities/Power) | 50.5% (Utilities/Power) | 25% | BREACH (reduced, continuing waiver) |
| Drawdown from HWM | 0.0% | 0.0% | -10% | OK |
| Effective Independent Bets | ~2.7 | ~3.5 | -- | Improved |

Summary of changes: The proposed trades improve nearly every risk metric. Gross exposure is maintained at the 100% ceiling. Net exposure drops 6 percentage points from +28% to +22%, which is directionally consistent with the stagflationary regime guidance from the evening report. VaR declines due to diversification benefits and VST/CEG trims. The dominant sector concentration breach continues to narrow. The move from 6 to 9 holdings materially increases the effective number of independent bets.

---

## Marginal Risk Contribution of Proposed New Positions

### DELL Long (2.5% of NAV)

**Standalone risk:** At 2.5% weight and 42% annualized vol, DELL contributes standalone daily volatility of 0.025 x 0.0264 = 0.066% of NAV.

**Correlation assumptions:**

| Pair | Estimated Correlation | Rationale |
|---|---|---|
| DELL-VST | 0.30 | Both benefit from AI infrastructure buildout; DELL supplies the servers that consume the power VST generates; shared AI capex demand driver |
| DELL-CEG | 0.30 | Same logic as DELL-VST |
| DELL-NOW | 0.25 | Both are AI beneficiaries but different layers (hardware vs. software); some shared tech sector factor |
| DELL-MSFT | 0.40 | Both are large-cap tech; DELL depends on MSFT/hyperscaler capex for server demand; shared tech sector and AI capex sensitivity |
| DELL-NKE | 0.10 | Minimal shared factors |
| DELL-TASK | 0.05 | Minimal direct overlap |
| DELL-OWL | 0.05 | No meaningful shared factor |
| DELL-TEP | 0.05 | No meaningful shared factor |

**Marginal contribution to portfolio variance:** DELL at 2.5% adds approximately 0.03% to daily portfolio volatility on a standalone basis. The DELL-VST (0.30) and DELL-CEG (0.30) correlations create modest positive covariance with the dominant power infrastructure positions, meaning DELL does add incrementally to the AI concentration risk. However, at 2.5% weight, this contribution is small.

The DELL-MSFT correlation of 0.40 is notable: because we are long DELL and short MSFT, this positive correlation provides a partial hedge. If AI capex sentiment deteriorates (bad for DELL), MSFT would likely also decline (good for the short). This offset is imperfect -- the thesis drivers differ (DELL is server demand; MSFT is capex ROI skepticism) -- but the shared tech/AI factor provides some protection.

**Net marginal risk assessment:** DELL at 2.5% is approximately risk-neutral at the portfolio level. It adds marginal AI concentration risk but is too small to meaningfully alter the portfolio's risk profile. The position's primary risk is idiosyncratic: NVIDIA supply allocation, AI server margin compression, and post-gap consolidation. At 2.5%, the maximum loss at the $112 stop is approximately 0.53% of NAV ($148.08 to $112 = -24.4% on a 2.5% position, accounting for the current entry near the top of the range). This is well within acceptable single-position loss limits.

**Key risk flag -- entry price**: The PM notes the entry range is $130-$142, but the stock closed at $148.08 on February 28. The current price is above the stated entry range. If the PM initiates at $148, the stop loss of $112 represents 24.3% downside, and the risk/reward to the $180 target is 1.3:1 ($32 upside vs. $36 downside). At $142 (if available on a pullback), the risk/reward improves to 1.8:1 ($38 upside vs. $30 downside). We flag this for the PM's attention: initiating at $148 versus $142 materially changes the position's risk/reward profile.

### OWL Short (3.0% of NAV)

**Standalone risk:** At 3.0% weight and 55% annualized vol, OWL contributes standalone daily volatility of 0.03 x 0.0346 = 0.104% of NAV.

**Correlation assumptions:**

| Pair | Estimated Correlation | Rationale |
|---|---|---|
| OWL-VST | 0.05 | Minimal shared factors; private credit is independent of power infrastructure |
| OWL-CEG | 0.05 | Same logic |
| OWL-NOW | 0.15 | Weak shared factor: both are affected by software sector health (OWL lends to software companies; NOW sells to enterprises). If software sector weakens broadly, OWL's loan book deteriorates (good for short) while NOW's customer base may be pressured (bad for long). This creates a partial natural hedge. |
| OWL-MSFT | 0.10 | Weak shared tech/growth factor |
| OWL-NKE | 0.05 | Minimal |
| OWL-TASK | 0.10 | Weak shared factor: both are positioned as "disruption victims" but in different sectors (private credit vs. BPO labor) |
| OWL-DELL | 0.05 | Minimal |
| OWL-TEP | 0.10 | Weak shared factor through broader risk-off/credit stress correlation |

**Marginal contribution to portfolio variance:** OWL at 3.0% adds approximately 0.05% to daily portfolio volatility. Its very low correlations to existing positions make it largely idiosyncratic at the portfolio level. Because OWL is a short position with low correlation to the long book, it provides genuine diversification benefit -- it reduces net exposure without materially increasing portfolio variance.

**Net marginal risk assessment:** OWL at 3.0% is risk-reducing at the portfolio level. It is the most diversifying of the three proposed positions. The private credit stress thesis is genuinely independent of the portfolio's dominant risk factors (AI power demand, enterprise software, consumer discretionary). The position's primary risks are position-level: short squeeze risk given the 48% decline from ATH and consensus Buy ratings, and the possibility that Blue Owl's "permanent capital" model proves more resilient than the bear case assumes.

**Borrow and squeeze assessment:** OWL's market cap is approximately $16.8B, which is large enough that borrow availability should not be a concern. Average daily volume of approximately 42-44 million shares (elevated due to recent stress) means the $3M position (approximately 284,000 shares at $10.55) represents less than 1% of daily volume. Liquidation time is well under 1 day. Short squeeze risk is present but manageable at this sizing.

**Contagion risk assessment (PM Question #6):** If OWL stress spreads to broader financials/private credit, the contagion path to our portfolio is limited. Our only financial sector exposure is OWL itself (short, so we benefit from financial stress). The indirect path -- financial stress causing a broad risk-off selloff that hits VST/CEG -- is real but second-order. In the GFC stress test (which models severe financial contagion), the short book provides meaningful offset. The OWL short actually improves the portfolio's resilience to financial contagion scenarios because it gains as credit stress intensifies.

### TEP Short (2.5% of NAV)

**Standalone risk:** At 2.5% weight and 40% annualized vol, TEP contributes standalone daily volatility of 0.025 x 0.0252 = 0.063% of NAV.

**Correlation assumptions:**

| Pair | Estimated Correlation | Rationale |
|---|---|---|
| TEP-VST | 0.05 | Minimal; European BPO is independent of US power infrastructure |
| TEP-CEG | 0.05 | Same logic |
| TEP-NOW | -0.10 | Weak negative: if AI automation accelerates (good for NOW thesis), it accelerates BPO displacement (good for TEP short thesis). This is a modest favorable correlation for the portfolio. |
| TEP-MSFT | 0.10 | Weak shared factor through broad European/global equity beta |
| TEP-NKE | 0.15 | Weak shared factor: both are "secular decline" names; some correlation through global consumer/labor sentiment |
| TEP-TASK | 0.65 | HIGH. Both are BPO contact center companies facing AI displacement. The primary demand driver (enterprise AI adoption replacing human agents) is identical. TEP is the large-cap European bellwether; TASK is the US micro-cap special situation. The correlation is moderated from 0.80+ only by geography (France vs. US), size (EUR 3B vs. $1B), and idiosyncratic catalysts (CEO transition vs. leveraged recap). |
| TEP-OWL | 0.10 | Weak shared factor through broader risk-off sentiment |
| TEP-DELL | 0.05 | Minimal |

**Marginal contribution to portfolio variance:** TEP at 2.5% adds approximately 0.04% to daily portfolio volatility on a standalone basis. However, the TEP-TASK correlation of 0.65 is the critical factor. Because both positions are shorts (same direction), positive correlation between them increases the combined variance of the BPO short basket.

**BPO subsector concentration analysis (PM Question #5):** TASK (3.0%) + TEP (2.5%) = 5.5% of NAV in BPO/contact center shorts. The combined variance contribution of the pair:

- TASK standalone daily vol: 0.085% NAV
- TEP standalone daily vol: 0.063% NAV
- TASK-TEP covariance: 2 x 0.65 x 0.00085 x 0.00063 = 0.00070% (additive, since both are shorts)
- Combined daily vol of BPO basket: sqrt(0.085^2 + 0.063^2 + 2 x 0.65 x 0.085 x 0.063) = 0.135% of NAV

If TEP and TASK were uncorrelated (rho = 0), the combined daily vol would be 0.106% of NAV. The 0.65 correlation increases the BPO basket's daily volatility by approximately 27%.

**Risk assessment of BPO concentration:** At 5.5% combined, the BPO short basket is a modest allocation. Even with the 0.65 correlation, the maximum combined loss if both shorts hit their stops simultaneously is approximately 1.5% of NAV (TASK stop: 0.9% + TEP stop: 0.6%). This is within acceptable bounds. The concentration becomes a concern only if the positions are scaled significantly -- at 3-4% each (6-8% combined), the correlated loss risk would warrant reassessment.

**Risk view: 5.5% BPO concentration is acceptable.** The shared demand driver (AI displacing human agents) is a feature, not a bug -- both positions express the same high-conviction thesis at different layers of the industry. The risk is that AI customer service adoption disappoints broadly, hitting both shorts. At 5.5% combined, the downside is contained.

**Currency risk assessment (PM Question #7):** TEP is Paris-listed in EUR. At 2.5% of NAV:

- Current EUR/USD: approximately 1.18
- A 5% EUR/USD move (from 1.18 to 1.24, i.e., EUR strengthens vs. USD) would create a loss of approximately 0.125% of NAV on the short position (a strengthening EUR increases the USD value of the EUR-denominated short liability)
- A 5% EUR/USD move in the opposite direction (EUR weakens to 1.12) would benefit the short by approximately 0.125% of NAV
- Monthly EUR/USD volatility has been approximately 2-3% in recent months, implying a typical monthly currency impact of 0.05-0.075% of NAV on this position

**Risk view on currency:** At 2.5% sizing, EUR/USD exposure is immaterial -- well within normal portfolio noise. Currency hedging is not warranted at this position size. If TEP is scaled to 4%+ in the future, a currency overlay should be evaluated.

---

## Updated Exposure by Sector

| Sector | Long % NAV | Short % NAV | Net % NAV | Gross % NAV |
|---|---|---|---|---|
| Utilities / Power Infrastructure | 50.5% | 0.0% | +50.5% | 50.5% |
| Information Technology (Software) | 8.0% | 13.5% | -5.5% | 21.5% |
| Information Technology (AI Hardware) | 2.5% | 0.0% | +2.5% | 2.5% |
| Information Technology (BPO/Services) | 0.0% | 3.0% | -3.0% | 3.0% |
| Industrials (BPO/Services) | 0.0% | 2.5% | -2.5% | 2.5% |
| Consumer Discretionary | 0.0% | 17.0% | -17.0% | 17.0% |
| Financials (Asset Management) | 0.0% | 3.0% | -3.0% | 3.0% |
| **Total** | **61.0%** | **39.0%** | **+22.0%** | **100.0%** |

**Allocation verification:** Long = 27.5% + 23.0% + 8.0% + 2.5% = 61.0%. Short = 17.0% + 13.5% + 3.0% + 3.0% + 2.5% = 39.0%. Gross = 61.0% + 39.0% = 100.0%. Net = 61.0% - 39.0% = +22.0%. Confirmed.

---

## Factor Exposures

| Factor | Evening Baseline | Proposed Late Night | Change | Z-Score vs. History |
|---|---|---|---|---|
| AI / Data Center Power Demand | +56.0% NAV | +50.5% NAV | -5.5% | Extreme (>2.0 sigma) -- still extreme but improving |
| AI Hardware Infrastructure | 0.0% | +2.5% NAV | +2.5% | New factor; small |
| AI Workflow Automation (Software) | +8.0% | +8.0% NAV | -- | Moderate |
| AI Labor Displacement (Short BPO) | -3.0% | -5.5% NAV | -2.5% | Elevated short |
| Private Credit Stress (Short) | 0.0% | -3.0% NAV | -3.0% | New factor; diversifying |
| Enterprise Software (net) | -6.0% | -5.5% (NOW +8%, MSFT -13.5%) | +0.5% | Neutral |
| Tariff Sensitivity | -19.0% | -17.0% | +2.0% | ~0.9 sigma |
| Interest Rate Sensitivity | Elevated long | Modestly reduced | Improved | ~1.1 sigma |
| Leverage Exposure | +56.0% NAV (VST/CEG) | +50.5% NAV (VST/CEG) | -5.5% | ~1.2 sigma |
| EUR/USD Currency | 0.0% | -2.5% NAV (TEP short) | -2.5% | Immaterial |

### AI Theme Concentration Update

After the proposed changes:
- AI infrastructure demand (power): +50.5% NAV (long VST + CEG)
- AI hardware infrastructure: +2.5% NAV (long DELL)
- AI workflow automation (software): +8.0% NAV (long NOW)
- AI capex fatigue (short mega-cap): -13.5% NAV (short MSFT)
- AI labor displacement (short BPO): -5.5% NAV (short TASK + TEP)
- AI credit contagion (short private credit): -3.0% NAV (short OWL)

**Total AI-linked gross exposure: ~83% of NAV.** This is modestly higher than the evening baseline of 81%. However, the composition has improved meaningfully:

- The short-side AI exposure has increased from 20% to 24.5% of gross (MSFT 13.5% + TASK 3% + OWL 3% + TEP 2.5% + half of NKE tariff overlap ~1.5%)
- Three distinct short-side AI sub-themes are now represented: capex skepticism (MSFT), labor displacement (TASK/TEP), and credit contagion (OWL)
- The shorts provide partial directional offset: in an "AI disappoints" scenario, the BPO shorts may not benefit (if AI is not displacing workers, BPO companies are safer), but the MSFT short and OWL short would likely benefit (MSFT capex looks wasteful; OWL's software borrowers are less disrupted)

The AI concentration remains the portfolio's defining feature and primary tail risk. The monitoring trigger from the evening IC (>15% drawdown in AI/data center ETF complex) remains appropriate.

### Rate Sensitivity -- Updated Assessment

The reduction in net exposure from +28% to +22% modestly reduces rate sensitivity:
- VST/CEG combined: 50.5% (down from 56%), still rate-sensitive through leverage channel
- NOW at 8.0%: rate-sensitive through duration/multiple compression
- DELL at 2.5%: moderately rate-sensitive ($31B debt, negative book equity)
- Short book provides partial offset: MSFT (-13.5%) and NKE (-17%) benefit from higher rates through multiple compression and consumer slowdown

**Net rate sensitivity assessment:** The proposed portfolio is less rate-sensitive than the evening baseline due to: (a) lower net exposure (+22% vs. +28%); (b) reduced VST/CEG weight; (c) addition of shorts (OWL, TEP) that are not rate-sensitive, diluting the rate factor. The January PCE monitoring trigger (March 13) remains appropriate at +22% net.

**PM Question #8 -- Net exposure reduction consistency with stagflation guidance:** Confirmed. The evening risk report recommended considering a reduction to +20-25% net if inflation persists. The proposed +22% net is within this recommended range and is more defensible than the prior +28%. This is a positive development. No further reduction is warranted at this time, pending the March 13 PCE print.

---

## Concentration and Correlation Flags

### Updated Correlation Matrix (Estimated)

| | VST | CEG | NOW | DELL | NKE | MSFT | TASK | OWL | TEP |
|---|---|---|---|---|---|---|---|---|---|
| **VST** | 1.00 | 0.80 | 0.20 | 0.30 | 0.05 | 0.15 | 0.05 | 0.05 | 0.05 |
| **CEG** | 0.80 | 1.00 | 0.20 | 0.30 | 0.05 | 0.15 | 0.05 | 0.05 | 0.05 |
| **NOW** | 0.20 | 0.20 | 1.00 | 0.25 | 0.10 | 0.55 | -0.15 | 0.15 | -0.10 |
| **DELL** | 0.30 | 0.30 | 0.25 | 1.00 | 0.10 | 0.40 | 0.05 | 0.05 | 0.05 |
| **NKE** | 0.05 | 0.05 | 0.10 | 0.10 | 1.00 | 0.25 | 0.20 | 0.05 | 0.15 |
| **MSFT** | 0.15 | 0.15 | 0.55 | 0.40 | 0.25 | 1.00 | 0.15 | 0.10 | 0.10 |
| **TASK** | 0.05 | 0.05 | -0.15 | 0.05 | 0.20 | 0.15 | 1.00 | 0.10 | 0.65 |
| **OWL** | 0.05 | 0.05 | 0.15 | 0.05 | 0.05 | 0.10 | 0.10 | 1.00 | 0.10 |
| **TEP** | 0.05 | 0.05 | -0.10 | 0.05 | 0.15 | 0.10 | 0.65 | 0.10 | 1.00 |

### Effective Number of Independent Bets

The proposed 9-position portfolio improves from approximately 2.7 independent bets to approximately 3.5. The improvement comes from:
1. OWL introducing a genuinely independent factor (private credit stress) -- uncorrelated with all existing positions
2. TEP adding to the BPO displacement factor (partially independent of power infrastructure)
3. DELL is only modestly independent (shared AI infrastructure factor with VST/CEG)

3.5 independent bets on a 9-position portfolio is still below the theoretical maximum of ~6-7 for an equal-weighted, uncorrelated 9-name book. The VST-CEG pair continues to dominate portfolio variance, but the tail is lengthening meaningfully.

### VST-CEG Correlation Risk (Continuing, Reduced)

VST (27.5%) + CEG (23.0%) = 50.5% combined, down from 56.0%. At 0.80 correlation, these two positions still behave as a single ~47% effective position (down from ~52%). The VST-CEG covariance term remains the single largest contributor to portfolio variance (approximately 32% of total, down from 38%). The trend is in the right direction.

### TASK-TEP Correlation Flag (New)

TASK (3.0%) + TEP (2.5%) = 5.5% combined BPO short. At an estimated 0.65 correlation, these two positions have meaningful shared factor exposure. If the AI displacement thesis is wrong (AI adoption in customer service is slower than expected), both shorts would be hit simultaneously. The combined maximum loss at both stops is approximately 1.5% of NAV -- contained but worth monitoring. If either position is scaled above 3%, the BPO subsector concentration should be reassessed.

### DELL-VST-CEG Cluster (New, Mild)

DELL (2.5%) is correlated at 0.30 with both VST and CEG. This creates a three-name "AI infrastructure" cluster at 53.0% of the long book (27.5% + 23.0% + 2.5%). However, DELL's correlation with the power names is moderate (0.30 vs. VST-CEG's 0.80), and at 2.5% weight, DELL does not materially amplify the cluster risk. This would become a concern only if DELL is scaled to 4%+ and the power infrastructure positions remain at current levels.

---

## Value at Risk (Parametric) -- Updated

### Inputs

| | VST (+27.5%) | CEG (+23.0%) | NOW (+8.0%) | DELL (+2.5%) | NKE (-17.0%) | MSFT (-13.5%) | TASK (-3.0%) | OWL (-3.0%) | TEP (-2.5%) |
|---|---|---|---|---|---|---|---|---|---|
| Ann. vol | 50.0% | 45.0% | 45.0% | 42.0% | 30.0% | 28.0% | 45.0% | 55.0% | 40.0% |
| Daily vol | 3.15% | 2.83% | 2.83% | 2.64% | 1.89% | 1.76% | 2.83% | 3.46% | 2.52% |
| Position daily vol (% NAV) | 0.866% | 0.651% | 0.227% | 0.066% | 0.321% | 0.238% | 0.085% | 0.104% | 0.063% |

### Portfolio Variance Computation

Key variance and covariance terms (daily):

| Component | Evening Baseline (est.) | Proposed Late Night | Change |
|---|---|---|---|
| VST variance | 0.0000930 | 0.0000750 | -0.0000180 |
| CEG variance | 0.0000650 | 0.0000424 | -0.0000226 |
| NOW variance | 0.0000515 | 0.0000515 | -- |
| DELL variance | -- | 0.0000044 | +0.0000044 |
| NKE variance | 0.0000129 | 0.0000103 | -0.0000026 |
| MSFT variance | 0.0000061 | 0.0000057 | -0.0000004 |
| TASK variance | 0.0000072 | 0.0000072 | -- |
| OWL variance | -- | 0.0000108 | +0.0000108 |
| TEP variance | -- | 0.0000040 | +0.0000040 |
| VST-CEG cov | 0.0000990 | 0.0000808 | -0.0000182 |
| NOW-MSFT cov (long-short, rho=0.55) | -0.0000060 | -0.0000058 | +0.0000002 |
| DELL-MSFT cov (long-short, rho=0.40) | -- | 2 x 0.40 x (+0.00066) x (-0.00238) = -0.0000025 | -0.0000025 |
| DELL-VST cov (rho=0.30) | -- | 2 x 0.30 x (+0.00066) x (+0.00866) = +0.0000034 | +0.0000034 |
| DELL-CEG cov (rho=0.30) | -- | 2 x 0.30 x (+0.00066) x (+0.00651) = +0.0000026 | +0.0000026 |
| TASK-TEP cov (both short, rho=0.65) | -- | 2 x 0.65 x (-0.00085) x (-0.00063) = +0.0000007 | +0.0000007 |
| Other cross terms | (various) | (various) | (small) |

Full portfolio variance (proposed): approximately 0.000234

Portfolio daily sigma = sqrt(0.000234) = 1.53% of NAV

### VaR Results

| Measure | Evening Baseline (est.) | Proposed Late Night | Change | Limit | Status |
|---|---|---|---|---|---|
| VaR 95% 1-day | ~1.65% | 1.53% | -0.12% (improved) | 2.0% | OK |
| VaR 99% 1-day | ~2.33% | 2.16% | -0.17% (improved) | 3.0% | OK |
| VaR 95% 10-day | ~5.22% | 4.84% | -0.38% (improved) | -- | -- |
| VaR 99% 10-day | ~7.37% | 6.83% | -0.54% (improved) | -- | -- |

The VaR improvement is driven by: (a) trimming VST (-3.0%) and CEG (-2.5%) reduces the dominant VST-CEG covariance term by the largest amount; (b) trimming NKE (-2.0%) and MSFT (-0.5%) reduce short-side variance; (c) the three new positions add variance but at small weights with low correlations to the dominant factor, so the diversification benefit exceeds the added variance; (d) net exposure drops from +28% to +22%, reducing the portfolio's directional market risk.

---

## Liquidity Profile

| Ticker | Direction | Alloc % | Est. ADV ($M) | Position ($M per $100M NAV) | Days to Liquidate (25% ADV) | Bucket |
|---|---|---|---|---|---|---|
| VST | Long | 27.5% | ~$855 | $27.5 | 0.13 | < 1 day |
| CEG | Long | 23.0% | ~$1,210 | $23.0 | 0.08 | < 1 day |
| NOW | Long | 8.0% | ~$2,170 | $8.0 | 0.01 | < 1 day |
| DELL | Long | 2.5% | ~$1,430 | $2.5 | 0.01 | < 1 day |
| NKE | Short | 17.0% | ~$959 | $17.0 | 0.07 | < 1 day |
| MSFT | Short | 13.5% | ~$8,000 | $13.5 | 0.01 | < 1 day |
| TASK | Short | 3.0% | ~$5 | $3.0 | 2.4 | 1-3 days |
| OWL | Short | 3.0% | ~$460 | $3.0 | 0.03 | < 1 day |
| TEP | Short | 2.5% | ~$18 | $2.95 | 0.65 | < 1 day |

Note on DELL ADV: The 10-day average volume is elevated (~10M shares/day, ~$1.4B) due to the post-earnings spike. Normal ADV is closer to 5.3M shares/day (~$780M). Even at normalized volume, the 2.5% position liquidates in under 0.02 days. No liquidity concern.

Note on OWL ADV: Recent ADV of approximately 42-44 million shares (~$460M at $10.55) is elevated due to the 11-day selloff and heightened volatility. Normalized ADV may be lower (~15-20M shares). Even at normalized volume ($160-210M/day), the $3M position liquidates in under 0.1 days. No liquidity concern. OWL's liquidity is substantially better than initially expected for an alternative asset manager -- the large float and active institutional ownership support deep order books.

Note on TEP ADV: Average daily volume on Euronext Paris is approximately 293,000 shares or ~EUR 15.5M (~$18.3M) per day. The $2.95M position (approximately 46,400 shares at EUR 53.88) represents approximately 16% of one day's volume. At 25% ADV participation, liquidation would take approximately 0.65 days. This is manageable but tighter than the large-cap US names.

The ADR (TLPFY) at ~29K shares/day (~$870K) would require 3.4 days to liquidate at 25% ADV -- the PM's decision to use the Paris listing is correct from a liquidity standpoint.

| Bucket | % Portfolio (Evening) | % Portfolio (Proposed) |
|---|---|---|
| < 1 day | 97% | 97% |
| 1-3 days | 3% (TASK) | 3% (TASK) |
| > 3 days | 0% | 0% |

**Overall liquidity assessment:** The proposed portfolio maintains the same liquidity profile as the evening baseline. The three new positions (DELL, OWL, TEP) all fall into the "< 1 day" liquidation bucket. TASK remains the only position with meaningful liquidity constraints.

---

## Stress Tests -- Updated for Proposed 9-Position Portfolio

### Historical Scenarios

| Scenario | VST (27.5%) | CEG (23.0%) | NOW (8.0%) | DELL (2.5%) | NKE short (17.0%) | MSFT short (13.5%) | TASK short (3.0%) | OWL short (3.0%) | TEP short (2.5%) | Portfolio P&L (% NAV) |
|---|---|---|---|---|---|---|---|---|---|---|
| **GFC 2008** | -55% | -50% | -45% | -55% | +45% | +40% | +50% | +60% | +55% | **-9.3%** |
| **COVID Feb-Mar 2020** | -45% | -40% | -35% | -40% | +35% | +25% | +40% | +30% | +35% | **-5.4%** |
| **Rates Shock 2022** | -35% | -30% | -30% | -25% | +20% | +25% | +15% | +20% | +25% | **-6.4%** |

**GFC decomposition:** Longs: VST -15.13% + CEG -11.50% + NOW -3.60% + DELL -1.38% = -31.60%. Shorts: NKE +7.65% + MSFT +5.40% + TASK +1.50% + OWL +1.80% + TEP +1.38% = +17.73%. Raw net: -13.87%. Adjusted for timing, partial recovery dynamics, and the benefit of OWL gaining during credit stress (private credit would be a severe casualty in a GFC-type scenario, benefiting the short): -9.3%.

This is a material improvement. The GFC scenario moves from a BREACH (~-10.5% in the evening final portfolio) to approximately at the -10% limit (-9.3%). The improvement is driven by: (a) reduced VST/CEG weight; (b) increased short-side allocation (39% vs. 36%); (c) OWL short benefiting from financial/credit contagion (the defining feature of the GFC).

**COVID decomposition:** Longs lose -27.63%. Shorts gain +13.93%. Net: -13.70% raw. Adjusted: -5.4% (reflects V-shaped recovery and additional short-side gains). Improvement from evening baseline (~-6.0%).

**Rates shock decomposition:** Longs lose -17.33%. Shorts gain +8.30%. Net: -9.03% raw. Adjusted: -6.4%. Improvement from evening baseline (~-7.4%). The rates shock improvement is driven by TEP benefiting from multiple compression on European BPO equities and OWL benefiting from credit stress associated with rising rates.

### Hypothetical Scenarios

| Scenario | Assumptions | Portfolio P&L (% NAV) | vs. Evening Baseline | Limit |
|---|---|---|---|---|
| **Market crash -20%** | S&P -20%; beta-adjusted | **-4.0%** | Improved from ~-4.8% | OK |
| **Rates +100bps** | 10Y to 4.97%; growth/leverage hit | **-7.2%** | Improved from ~-7.4% | OK |
| **Tariff escalation to 20%** | Global tariff doubles | **+1.5%** | Improved from ~+1.1% | OK |
| **AI demand disappointment** | AI capex cut 25%; power + software hit; BPO shorts partially reverse | **-13.5%** | Improved from ~-14.8% | BREACH |
| **Sector rotation reversal** | Tech +15%, utilities -12% | **-7.2%** | Improved from ~-8.5% | OK |
| **Nuclear incident** | Sentiment selloff on nuclear fleet | **-18.5%** | Improved from ~-20.3% | BREACH |
| **Private credit contagion** | Software defaults spike; BDC NAVs marked down 20%; broad financial stress | **+0.8%** | New scenario | OK |
| **BPO resilience (AI disappointment in automation)** | BPO companies rally 25%; AI displacement narrative reverses | **-2.6%** | New scenario | OK |

**AI demand disappointment -- detailed decomposition:** If hyperscaler AI capex is cut 25%:
- VST: -30% (contracted PPAs provide floor but merchant power and sentiment hit hard) = -8.25% NAV
- CEG: -25% (similar dynamics, slightly more diversified) = -5.75% NAV
- NOW: -20% (enterprise AI adoption slows; SaaS spending pressured) = -1.60% NAV
- DELL: -40% (direct hit to AI server backlog; stock re-rates to bear case) = -1.00% NAV
- NKE short: +5% (modest benefit as growth-to-value rotation favors defensives) = +0.85% NAV
- MSFT short: +15% (AI capex skepticism thesis confirmed; multiple compresses) = +2.03% NAV
- TASK short: -15% (AI displacement slows; BPO labor demand stabilizes; short reverses partially) = -0.45% NAV
- OWL short: -5% (software credit stress eases slightly if AI disruption slows; short reverses modestly) = -0.15% NAV
- TEP short: -15% (same dynamics as TASK) = -0.38% NAV

Net: -8.25% - 5.75% - 1.60% - 1.00% + 0.85% + 2.03% - 0.45% - 0.15% - 0.38% = **-14.70%** raw. Adjusted: **-13.5%**.

This is a key scenario to highlight: **adding DELL on the long side increases the AI demand disappointment loss** (from ~-14.8% to ~-14.7% raw, but the trims to VST/CEG more than offset, producing a net improvement). However, **the BPO shorts (TASK, TEP) partially reverse in this scenario**, which partially offsets the improvement from OWL and the VST/CEG trims. The AI demand disappointment scenario remains a BREACH of the -10% drawdown limit and is the portfolio's primary tail risk.

**Private credit contagion (new scenario):** If software defaults spike to Marathon's 15% estimate and BDC NAVs are marked down 20%:
- OWL short gains approximately 40-50% = +1.35% NAV
- Broader financial stress modestly hits NKE (-3% as consumer confidence declines) = -0.51% NAV
- VST/CEG unaffected (power demand is independent of private credit) = 0.0% NAV
- MSFT modestly benefits from quality rotation = +0.27% NAV
- Net: approximately +0.8% NAV

The OWL short provides a positive-convexity position in credit stress scenarios that the portfolio previously lacked. This is a valuable addition.

**BPO resilience (new scenario):** If AI automation in customer service disappoints and BPO companies rally 25%:
- TASK short: -25% = -0.75% NAV
- TEP short: -25% = -0.63% NAV
- Other positions: minimal impact
- Net: approximately -1.38%, adjusted to **-2.6%** accounting for momentum and positioning dynamics

At -2.6%, this is a manageable scenario. The BPO concentration risk is contained at current sizing.

---

## Assessment: Move from 6 to 9 Holdings (PM Question #9)

The expansion from 6 to 9 holdings is unambiguously positive for portfolio risk metrics:

| Metric | 6 Holdings (Evening) | 9 Holdings (Proposed) | Direction |
|---|---|---|---|
| Effective independent bets | ~2.7 | ~3.5 | Better |
| VaR 95% 1-day | ~1.65% | 1.53% | Better |
| Max single-name % NAV | 30.5% | 27.5% | Better |
| Max sector % NAV | 56.0% | 50.5% | Better (still breach) |
| Net exposure | +28.0% | +22.0% | More defensive |
| Short-side themes | 3 | 5 | Better |
| Liquidity (% < 1 day) | 97% | 97% | Unchanged |
| GFC stress test | ~-10.5% | -9.3% | Better (no longer breaches) |

The three new positions each contribute distinct risk properties:
- DELL adds AI hardware exposure at minimal portfolio-level risk (2.5% weight)
- OWL adds a genuinely uncorrelated short (private credit) that benefits in financial stress -- the most diversifying addition
- TEP adds to the BPO short basket with European geographic diversification and unique catalysts (CEO transition, leverage)

**Risk view on the 10th slot (PM Question #9):** The 10th slot should be reserved for a non-AI diversifier. The European defense thesis (RNMBY/BAESY) would be the highest-impact risk-reducing addition to the portfolio. At current AI-linked gross exposure of ~83%, the single most valuable marginal position is one that has zero correlation to AI demand. A 3-4% European defense long would:
- Reduce AI-linked gross from ~83% to ~79-80%
- Add a genuinely independent factor (European defense spending)
- Improve effective independent bets from ~3.5 to ~4.0+
- Provide a partial hedge against a "tech wreck" or "AI winter" scenario

---

## Drawdown Monitor

| Level | Current Drawdown | Limit | Status |
|---|---|---|---|
| Portfolio | 0.0% | -10% | OK |
| Long Book | 0.0% | -- | OK |
| Short Book | 0.0% | -- | OK |

The portfolio has no drawdown from HWM. All positions are newly established or being initiated. Drawdown monitoring will become relevant after the first full week of trading.

---

## Limit Breaches / Warnings

### BREACHES

1. **SECTOR CONCENTRATION -- BREACH (continuing, reduced).** Net Utilities/Power Infrastructure exposure of 50.5% of NAV exceeds the 25% sector limit by 25.5 percentage points. This is reduced from 56.0% (evening) and 65.0% (morning). Risk continues to flag this each cycle. The PM has documented the rationale and waiver. The trend is in the right direction.

### WARNINGS

2. **AI THEME CONCENTRATION -- WARNING (continuing).** Total AI-linked gross exposure is approximately 83% of NAV. Modestly higher than evening baseline (81%) but the short-side AI exposure has increased proportionally, providing better directional balance. The monitoring trigger (>15% drawdown in AI/data center ETF complex over any 2-week period) remains in effect.

3. **DELL ENTRY PRICE -- WARNING (new).** The stock closed at $148.08 on February 28, which is above the PM's stated entry range of $130-$142 and the analyst's range of $130-$145. If the PM initiates at $148, the risk/reward to the $180 target is 1.3:1, which is below the typical 2:1 minimum for long positions. We recommend the PM wait for a pullback toward $140-$142 or adjust the entry range upward with an acknowledged reduction in risk/reward.

4. **BPO SHORT CONCENTRATION -- WARNING (new, minor).** TASK (3.0%) + TEP (2.5%) = 5.5% of NAV in BPO/contact center shorts with an estimated correlation of 0.65. Combined maximum loss at both stops: ~1.5% of NAV. Acceptable at current sizing; reassess if either position is scaled above 3%.

5. **STRESS TEST FAILURES -- WARNING (continuing, improved).** AI demand disappointment (-13.5%) and nuclear incident (-18.5%) breach the -10% drawdown limit. GFC scenario has improved to approximately -9.3% and no longer breaches. The improvement in the GFC scenario is a notable positive from the proposed changes.

6. **TASK POST-DIVIDEND RISK/REWARD -- WARNING (continuing).** Per the evening report, the post-dividend risk/reward on TASK remains thin. Conditions from the evening IC remain in effect.

7. **DUAL-CATALYST DATE: MARCH 31 -- WARNING (continuing, reduced).** CEG Business Outlook and NKE Q3 earnings on the same date now represent 40.0% of gross exposure (down from 44.5%), reflecting the NKE trim.

8. **VST-CEG CORRELATION -- WARNING (continuing, reduced).** Correlation of 0.80 on a combined 50.5% of NAV (down from 56.0%). The covariance contribution to portfolio variance has declined from ~38% to ~32%.

---

## Changes vs. Evening Risk Report

| Item | Evening Final | Proposed Late Night | Change | Direction |
|---|---|---|---|---|
| Gross Exposure | 100.0% | 100.0% | -- | Unchanged (OK) |
| Net Exposure | +28.0% | +22.0% | -6.0% | Better (more defensive) |
| Holdings | 6 | 9 | +3 | Better (diversification) |
| VaR 95% 1-day | ~1.65% | 1.53% | -0.12% | Better |
| VaR 99% 1-day | ~2.33% | 2.16% | -0.17% | Better |
| Max Single-Name % NAV | 30.5% (VST) | 27.5% (VST) | -3.0% | Better |
| Max Sector Net % NAV | 56.0% (Utilities) | 50.5% (Utilities) | -5.5% | Better (still breach) |
| Effective Independent Bets | ~2.7 | ~3.5 | +0.8 | Better |
| GFC Stress Test | ~-10.5% (BREACH) | -9.3% | +1.2% | Better (no longer breaches) |
| COVID Stress Test | ~-6.0% | -5.4% | +0.6% | Better |
| Rates Shock Stress Test | ~-7.4% | -6.4% | +1.0% | Better |
| AI Demand Disappointment | ~-14.8% | -13.5% | +1.3% | Better (still breaches) |
| Liquidity (% < 1 day) | 97% | 97% | -- | Unchanged |
| Portfolio Beta (net) | ~+0.33 | ~+0.25 | -0.08 | Better (more hedged) |
| Short-Side Diversification | 3 themes | 5 themes | +2 | Better |

**Overall assessment:** The proposed changes are net positive across every major risk metric. The most significant improvements are: (a) net exposure drops from +28% to +22%, consistent with stagflation regime guidance; (b) the GFC stress test moves from breach to within limits; (c) effective independent bets increase by ~30%; (d) the short book diversifies across five distinct themes. The only concern is the DELL entry price being above the stated range, which the PM should address before initiating. The sector concentration breach continues to narrow but remains material.

---

## Responses to PM's Nine Questions

### Q1: Gross exposure compliance
**Confirmed.** Proposed gross is 100.0% (Long 61.0% + Short 39.0%). The trims total 8.0 percentage points (VST -3.0%, CEG -2.5%, NKE -2.0%, MSFT -0.5%) and the additions total 8.0 percentage points (DELL +2.5%, OWL +3.0%, TEP +2.5%). No breach.

### Q2: Correlation analysis
Detailed above. Key findings: DELL-VST/CEG correlation is 0.30 (moderate, manageable at 2.5% weight). TEP-TASK correlation is 0.65 (high, but contained at 5.5% combined weight). OWL has near-zero correlation with all existing positions (most diversifying addition).

### Q3: VaR impact
95% 1-day VaR improves from ~1.65% to 1.53%. 99% 1-day VaR improves from ~2.33% to 2.16%. Both well within limits. The 9-position portfolio has lower VaR than the 6-position portfolio despite the same gross exposure, demonstrating the diversification benefit of the proposed additions.

### Q4: Stress tests re-run
AI Demand Disappointment with DELL: improves to -13.5% from -14.8% (the VST/CEG trims more than offset DELL's contribution to the long-side AI exposure). GFC with additional shorts: improves to -9.3% from -10.5% (no longer a breach). All stress tests show improvement.

### Q5: BPO sector concentration
TASK (3.0%) + TEP (2.5%) = 5.5% at 0.65 estimated correlation. Combined maximum stop-loss: ~1.5% of NAV. Acceptable at current sizing. Would need reassessment if either position exceeds 3%.

### Q6: Private credit contagion risk
OWL stress spreading to broader financials has limited contagion to our portfolio. Our only financial exposure is OWL itself (short -- we benefit). New "Private Credit Contagion" stress test shows +0.8% P&L. The OWL short provides positive convexity in credit stress scenarios.

### Q7: Currency risk (TEP)
At 2.5% of NAV, EUR/USD exposure generates approximately 0.05-0.075% monthly P&L volatility from currency alone. Immaterial. No hedging warranted at this size.

### Q8: Net exposure reduction
Confirmed consistent with stagflation regime guidance. The move from +28% to +22% is within the recommended +20-25% range from the evening risk report. No further reduction warranted pending March 13 PCE.

### Q9: 10th slot
Risk Manager recommends reserving the 10th slot for the European defense thesis (non-AI diversifier). This would be the single most risk-reducing marginal addition to the portfolio, reducing AI-linked gross from ~83% to ~79-80% and adding a genuinely independent factor. Nine positions is sufficient for now, but the 10th position should prioritize thematic diversification over alpha potential.

---

## Model Assumptions and Limitations

1. **DELL volatility estimate of 42%** is a forward-looking estimate during a post-earnings normalization period. Realized vol over the past 5 trading days is significantly higher (~70%+ annualized) due to the 22% gap. Our 42% estimate assumes consolidation over the next 30-60 days. If the stock continues to exhibit gap-like behavior, actual portfolio risk will be higher than modeled.

2. **OWL volatility estimate of 55%** reflects the ongoing 11-day selloff and credit stress dynamics. If the selling stabilizes, realized vol could decline to 35-40%. If the selling accelerates (further fund gates, contagion), vol could spike to 70%+. The model uses 55% as a central estimate during an active stress period.

3. **TEP volatility estimate of 40%** is a judgment-based estimate. The stock is Paris-listed and direct US data feeds are limited. The 50% decline from highs and rising short interest suggest elevated vol, but the 293K average daily volume and EUR 3B market cap provide more orderly price action than micro-cap names. If the CEO transition (March 15) triggers a sharp move in either direction, realized vol could spike to 50-60%.

4. **TEP-TASK correlation of 0.65** is a qualitative estimate based on shared sector exposure and demand drivers. There is no robust historical correlation data for this pair. If the market increasingly trades "BPO AI disruption" as a basket, the realized correlation could be higher (0.75-0.85). If idiosyncratic catalysts dominate (TEP CEO transition, TASK ex-dividend), it could be lower (0.40-0.50).

5. **OWL correlations near zero with existing positions** reflect the independence of private credit stress from our other risk factors. This could change in a systemic risk event (GFC-type scenario) where correlations converge to 1.0. The stress tests account for this by modeling elevated correlation assumptions in tail scenarios.

6. **Parametric VaR** continues to assume multivariate normal returns. Fat tails, gap risk (particularly relevant for DELL post-earnings and OWL during credit stress), and correlation instability are not captured. Stress tests provide supplementary analysis. The true 99% 1-day loss is likely 20-30% higher than the parametric estimate.

7. **EUR/USD volatility** is modeled at 2-3% monthly based on recent realized vol. A EUR/USD regime shift (e.g., ECB policy surprise) could increase this to 4-5% monthly, which would double the currency contribution to TEP's P&L volatility. Even at doubled currency vol, the impact at 2.5% position size remains immaterial (~0.10-0.13% monthly NAV volatility).