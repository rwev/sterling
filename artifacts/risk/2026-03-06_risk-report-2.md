2026-03-06 21:15 UTC
# Portfolio Risk Report -- Cycle X Pipeline Round (Draft-2 Assessment)

## Sterling Capital Management | 2026-03-06

---

## Context

This is a supplemental risk assessment responding to the Cycle X Addendum draft IC memo (2026-03-06_ic-memo-draft-2.md). The active portfolio is unchanged from the Cycle X final memo: 10 positions, 80% deployed, 20% cash, no allocation changes. This report focuses on the risk implications of the expanded conditional pipeline (9 to 14 names) and the deployment scenario analysis for high-priority conditional names.

The baseline active portfolio risk profile is fully documented in 2026-03-06_risk-report.md and is unchanged. All metrics from that report remain current.

---

## Summary

| Metric | Current | Guideline | Status | Change vs. Earlier Report |
|---|---|---|---|---|
| Total Exposure % NAV | 80.0% | 85-100% target | Below target by 5 pp | Unchanged |
| Cash % NAV | 20.0% | 5-15% target | **Advisory** | Unchanged |
| Portfolio Beta (full NAV) | 0.86 | -- | OK | Unchanged |
| VaR 95% 1-day % NAV | 2.65-2.91% | 2.0% | **BREACH (Advisory)** | Unchanged |
| VaR 99% 1-day % NAV | 3.75-4.12% | 3.0% | **BREACH (Advisory)** | Unchanged |
| Max Single-Name % NAV | 13.0% (VRT) | 15% | OK | Unchanged |
| Max Sector/Theme % NAV | 39% (AI Elec.) | 25% | **Advisory** | Unchanged |
| Drawdown from HWM | ~3.5-5.0% | -10% | OK | Unchanged |
| Active Positions | 10/10 | 10 max | Full | Unchanged |
| Conditional Pipeline | **14 names** | -- | See analysis | **+5 names (from 9)** |

**Key finding: The active portfolio risk profile is entirely unchanged.** No capital was deployed, no positions were modified. The only risk-relevant development is the expansion of the conditional pipeline from 9 to 14 names, which creates monitoring considerations and requires assessment of potential deployment scenarios.

---

## Active Portfolio Risk Confirmation

All metrics from the 2026-03-06_risk-report.md remain in force without modification:

- VaR 95% (1-day): 2.65-2.91% -- Advisory breach, VIX-driven
- VaR 99% (1-day): 3.75-4.12% -- Advisory breach, mechanical consequence
- AI Electrification Chain: 39% of NAV -- Advisory, ceiling enforced
- FRO stop proximity: 5.3% buffer -- Advisory, max loss 0.21% NAV
- Stagflation factor exposure: approximately neutral -- Advisory
- Portfolio weighted R/R: ~2.3:1

No active portfolio risk items require re-assessment at this time. The remainder of this report addresses conditional pipeline risk exclusively.

---

## New Conditional Approvals -- Price Verification

All prices sourced from StockAnalysis.com at approximately 12:00-12:20 PM EST, March 6, 2026.

| Ticker | PM Draft Price | Risk Verified Price | Difference | Entry Range | In Range? |
|---|---|---|---|---|---|
| ZS | $165.91 | $164.50 | -0.9% | $155-175 | Yes |
| LLY | $979.16 | $976.80 | -0.2% | $950-990 | Yes |
| B | $45.17 | $45.18 | 0.0% | $43-47 | Yes |
| ARMN | $19.38 | $19.38 | 0.0% | $17.50-20 | Yes |
| DCO | $127.02 | $126.54 | -0.4% | $120-132 | Yes |

All five new conditional names are within their stated entry ranges. Price discrepancies vs. PM figures are immaterial (all within 1%). No corrections required.

---

## Conditional Pipeline Risk Profile (14 Names)

### Pipeline by Sector/Theme

| Sector/Theme | Conditional Names | Count | Overlap with Active Portfolio |
|---|---|---|---|
| Cybersecurity | PANW, ZS | 2 | None direct; tangential to AI/tech cycle |
| Gold Mining | B, ARMN | 2 | **AEM active at 5%** |
| Defense (Small-Cap) | DCO | 1 | **LHX active at 12%** |
| Pharma/Biotech | LLY, VKTX | 2 | None -- genuinely uncorrelated |
| US LNG / Energy | LNG, VG | 2 | FRO (tanker) at 4% -- energy-adjacent |
| SaaS / Enterprise Software | CRM, NOW | 2 | Tangential to AI/tech theme |
| AI Electrification Chain | GEV, PWR | 2 | **Direct chain overlap (39% cap binding)** |
| Warehouse Automation | SYM | 1 | None direct; industrial/automation cycle |

### Correlation Cluster Analysis

The 14-name conditional pipeline contains three distinct correlation clusters that warrant attention:

**Cluster 1: Gold Mining (B, ARMN + active AEM)**
- Estimated intra-cluster correlation: 0.70-0.85
- If both B and ARMN were promoted alongside AEM, gold mining exposure would reach 13-14% of NAV (5% AEM + 5% B + 3-4% ARMN)
- All three names are driven by the same factor: gold spot price
- B has a beta of 0.98; ARMN has a beta of 1.87 (significantly more volatile); AEM has a beta of 0.61
- ARMN at 1.87 beta is the highest-beta conditional name and would contribute disproportionate VaR per allocation dollar
- **Risk assessment**: The PM has correctly capped gold mining exposure at 10% of NAV if any conditional is promoted. The PM should further note that promoting ARMN (beta 1.87) would add materially more VaR per percent of NAV than promoting B (beta 0.98). From a pure risk perspective, B is the lower-volatility gold addition.

**Cluster 2: Defense (DCO + active LHX)**
- Estimated intra-cluster correlation: 0.55-0.70
- DCO at 3-4% alongside LHX at 12% would bring defense to 15-16% of NAV
- DCO's beta (1.02) is higher than LHX (0.63), meaning DCO adds more market-correlated risk per allocation dollar
- DCO's sub-WACC ROIC (5.3% vs 10.8% WACC) is a fundamental quality concern that distinguishes it from LHX's strong return profile
- **Risk assessment**: The PM's 15% defense ceiling is appropriate. Promoting DCO at 4% alongside LHX at 12% would reach 16% -- a marginal guideline exceedance that would be classified Informational given DCO's small allocation. The bigger concern is quality dilution: DCO's weak ROIC brings down the weighted-average quality of defense exposure.

**Cluster 3: AI Electrification Chain (GEV, PWR + active VRT, CEG, VST, AVGO)**
- Estimated intra-cluster correlation: 0.45-0.65 with the existing chain
- The chain is already at 39% of NAV with a binding ceiling. GEV and PWR cannot be deployed without an existing chain member exiting
- **Risk assessment**: These two names are effectively chain-blocked and pose no incremental deployment risk unless the ceiling is raised or chain positions exit. No action required.

### Pipeline Diversification Assessment

The conditional pipeline provides adequate diversification options across multiple deployment scenarios:

- **Genuinely uncorrelated to current portfolio**: LLY (pharma, beta 0.43), VKTX (biotech)
- **Partially uncorrelated**: ZS (cybersecurity, beta 1.12), SYM (warehouse automation), CRM/NOW (SaaS)
- **Correlated with existing positions**: B, ARMN (gold/AEM), DCO (defense/LHX), GEV, PWR (chain), LNG, VG (energy/FRO)

Of the 14 conditional names, approximately 5 provide genuine diversification benefit (LLY, VKTX, ZS, CRM, NOW), 3 provide partial diversification (SYM, LNG, VG), and 6 are correlated with existing themes (B, ARMN, DCO, GEV, PWR, and to a lesser degree SYM). This is a reasonable mix for a pipeline serving a 10-position portfolio.

---

## Deployment Scenario Analysis

### Scenario A: ZS Promotion (Priority 2 Conditional)

**Assumptions**: VIX normalizes below 22, a slot opens (e.g., FRO stop-out at $33), ZS within $155-175.

| Metric | Current Portfolio | With ZS at 7% (replacing FRO 4%) | Change |
|---|---|---|---|
| Cash | 20.0% | 17.0% | -3 pp |
| Portfolio Beta (full NAV) | 0.86 | 0.88 | +0.02 |
| VaR 95% (at VIX 20) | ~1.68% | ~1.73% | +0.05 pp |
| Max sector (AI Elec.) | 39% | 39% | Unchanged -- ZS is cybersecurity, not chain |
| Cybersecurity exposure | 0% | 7% | New sector added |
| Tanker/Shipping exposure | 4% | 0% | Eliminated |
| Tech/Growth factor tilt | 41% of deployed | 46% of deployed | +5 pp |
| Stagflation sensitivity | ~neutral | Slightly more negative | Marginally worse |

**ZS risk characteristics**:
- Beta: 1.12 (5-year)
- Estimated annualized volatility: ~55-60%
- RSI: 45.88 (neutral; not overbought)
- 50-day SMA: $193.12 (trading 15% below -- bearish short-term trend)
- 200-day SMA: $263.64 (trading 37% below -- bearish intermediate trend)

**Marginal VaR contribution of ZS at 7%** (at VIX 20):
- ZS marginal VaR: 7% x 1.12 beta x (20/sqrt(252)) x 1.645 = ~0.163%
- This replaces FRO's contribution: 4% x 1.10 beta x (20/sqrt(252)) x 1.645 = ~0.091%
- Net VaR increase: ~0.07 pp -- modest

**Risk assessment**: ZS deployment is a clean substitution from a risk perspective. It replaces a 4% tanker position with a 7% cybersecurity position, modestly increasing portfolio beta and tech/growth factor tilt. The key risk is that ZS is trading significantly below both its 50-day and 200-day moving averages, indicating a well-established downtrend. The 2.72:1 R/R is attractive, but the technical picture is bearish. This does not disqualify the thesis, but the PM should ensure that the fundamental re-acceleration narrative is confirmed by the Q3 FY2026 earnings (late May) before deployment.

**Severity: Informational.** ZS deployment would not create any concentration breach or meaningful risk profile change.

### Scenario B: LLY Promotion (Priority 5 Conditional)

**Assumptions**: Orforglipron FDA approval on April 10, a slot opens, post-approval price assessment.

| Metric | Current Portfolio | With LLY at 5% (hypothetical slot) | Change |
|---|---|---|---|
| Cash | 20.0% | 15.0% | -5 pp (if funded from cash) |
| Portfolio Beta (full NAV) | 0.86 | 0.84 | **-0.02** (LLY beta 0.43 is below portfolio avg) |
| VaR 95% (at VIX 20) | ~1.68% | ~1.63% | **-0.05 pp** (VaR-reducing) |
| Healthcare exposure | 0% | 5% | New sector added |
| Correlation with existing holdings | -- | Very low (0.05-0.20 estimated) | Diversification benefit |

**LLY risk characteristics**:
- Beta: 0.43 (5-year) -- the lowest of any conditional or active name
- Estimated annualized volatility: ~28-30%
- RSI: 40.06 (approaching oversold)
- 50-day SMA: $1,046.89 (trading 7% below)
- 200-day SMA: $880.85 (trading 11% above -- longer-term trend intact)
- Market cap: $872.63B -- mega-cap liquidity, zero execution risk

**Critical risk: Binary FDA event (April 10)**
- Approval probability: ~80-85% (based on PM memo's 15-20% rejection probability)
- Approval scenario: Stock rallies to ~$1,050-1,100, R/R compresses but thesis strengthened
- Rejection scenario: Stock declines to ~$850-900 (13-15% downside from current)
- The PM's decision to wait for FDA approval before deployment eliminates this binary risk. This is the correct risk management approach.

**Risk assessment**: LLY is the single most portfolio-construction-valuable name in the entire conditional pipeline. At 0.43 beta, it would actually reduce portfolio-level VaR while adding exposure. Its near-zero correlation with AI/energy/defense themes provides genuine diversification benefit that no other conditional name offers to the same degree. Post-FDA-approval deployment at 5% would be risk-reducing at the portfolio level.

**Severity: Informational.** LLY deployment would improve the portfolio's risk profile. The PM's condition (post-FDA only) is the appropriate risk gate.

### Scenario C: Dual Gold Mining Promotion (B + ARMN alongside AEM)

This scenario is unlikely (both conditionals have multiple unmet triggers) but warrants analysis given the PM's request to cap gold mining at 10%.

| Metric | Current Portfolio | With B at 5% + ARMN at 3% (replacing 2 slots) | Change |
|---|---|---|---|
| Gold mining exposure | 5% (AEM) | **13%** (AEM 5% + B 5% + ARMN 3%) | **+8 pp -- exceeds PM's 10% cap** |
| Gold price sensitivity | Low | **High** -- 13% of NAV correlated to gold spot | Triple concentration |
| Portfolio beta impact | 0.86 | ~0.89 | +0.03 (ARMN's 1.87 beta is a factor) |
| Idiosyncratic risk | Diversified | Gold cluster: pairwise correlations 0.70-0.85 | Significantly increased |

**Risk assessment**: Deploying both B and ARMN would breach the PM's stated 10% gold mining cap. Even deploying just one alongside AEM (B at 5% for 10% total, or ARMN at 3-4% for 8-9% total) approaches the ceiling. The PM should select one gold conditional if gold conditions are met, not both. From a risk standpoint:
- B (beta 0.98, $75.76B market cap, 2.06:1 R/R) is the lower-risk, lower-return choice
- ARMN (beta 1.87, $3.99B market cap, 2.18:1 R/R) is the higher-risk, marginally higher-return choice with discovery upside but also higher idiosyncratic risk (Colombia geopolitical, thin coverage, 81x trailing P/E)

**Severity: Advisory.** The PM has already set the 10% cap. This report confirms the cap is appropriate and recommends selecting one gold conditional, not both.

---

## Conditional Pipeline Operational Assessment

### Is 14 Names Too Large?

The PM flagged that 14 conditional names for a 10-position portfolio may be "approaching crowded territory." The risk perspective:

**Arguments that 14 is manageable:**
- No capital is deployed to conditional names; they carry zero portfolio risk until promoted
- The monitoring burden is the primary cost, not financial risk
- Having a deep bench provides optionality when market conditions shift -- the portfolio can select the best deployment candidate from a wider set
- Several names have clear "not yet" triggers that reduce active monitoring needs (GEV and PWR are chain-blocked; VG is above entry; CRM and NOW are above entry; B requires gold above $5,300)

**Arguments that 14 should be trimmed:**
- 6 of 14 names are effectively inactive (above entry range or blocked by chain ceiling): CRM, NOW, VG, GEV, PWR, and arguably B (requires gold at $5,300 vs current $5,081)
- Analyst bandwidth is consumed monitoring names that may never deploy
- The 3-cycle hold limit the PM referenced should cull the bottom of the pipeline naturally

**Risk assessment**: The conditional pipeline at 14 names does not create financial risk. The operational risk is analyst attention dilution. The PM's stated intent to rank-stack and apply a 3-cycle hold limit is the appropriate governance mechanism. No risk action required.

**Severity: Informational.**

### Pipeline Readiness by Deployment Trigger

| Trigger Scenario | Names Activated | Total Deployment | Cash Remaining |
|---|---|---|---|
| FRO stop-out at $33 | LNG (7%) | 7% | 17% (20% + 4% FRO return - 7% LNG - ~0.2% stop loss) |
| VST stop-out at $145 | PANW (5%) | 5% | 19% (20% + 8% VST return - 5% PANW - ~0.9% stop loss) |
| VIX <22 + slot open | ZS (7-8%) | 7-8% | Depends on slot source |
| FDA approval Apr 10 + slot | LLY (5%) | 5% | Depends on slot source |
| Gold >$5,300 + AEM review | B (5%) | 5% | 15% |

Each scenario is well-defined with a single primary deployment candidate. There is no ambiguity about which name deploys under which trigger. This is good pipeline governance.

---

## Conditional Name Risk Profiles (Reference Data)

| Ticker | Sector | Beta | Est. Ann. Vol | Market Cap | ADV (shares) | Liquidity Risk | R/R |
|---|---|---|---|---|---|---|---|
| ZS | Cybersecurity | 1.12 | ~55-60% | $26.5B | ~3.5M | None | 2.72:1 |
| LLY | Pharma/GLP-1 | 0.43 | ~28-30% | $872.6B | ~3.1M | None | 1.79:1 |
| B | Gold Mining | 0.98 | ~40-45% | $75.8B | ~8M (est.) | None | 2.06:1 |
| ARMN | Gold Mining (SC) | 1.87 | ~65-70% | $4.0B | ~1.5M | Low | 2.18:1 |
| DCO | Defense (SC) | 1.02 | ~45-50% | $1.9B | ~60K | **Moderate** | 1.96:1 |

**Liquidity flag on DCO**: At ~60K shares/day ADV and $1.9B market cap, DCO is the least liquid name in the conditional pipeline. At a 3-4% allocation (~$1,440-$1,920 notional on our portfolio), this represents approximately 0.09-0.12 shares of daily volume -- no execution concern at our scale. However, the ADV of $5.5M (per the PM memo) means institutional-scale portfolios would face significant market impact. For Sterling's current AUM, liquidity risk is not material.

**Volatility flag on ARMN**: ARMN's beta of 1.87 is the highest of any name in the active portfolio or conditional pipeline (exceeding even INOD at 2.46 in the active book -- correction: INOD at 2.46 is higher; ARMN at 1.87 is second). At 3-4% allocation, ARMN would contribute disproportionate VaR per allocation dollar. The PM's sizing at 3-4% (rather than 5%+) appropriately reflects this.

---

## Flags for PM

### From This Report

| # | Item | Severity | Detail |
|---|---|---|---|
| 1 | **Conditional pipeline gold cluster** | **Advisory** | Two new gold miners (B, ARMN) join AEM in the pipeline. Max combined deployment would be 13% gold mining if both promoted -- exceeds the PM's 10% cap. Recommend selecting one gold conditional, not both. B is lower-risk (beta 0.98); ARMN is higher-risk/higher-optionality (beta 1.87, discovery play). |
| 2 | **LLY as portfolio-construction best-in-class** | **Informational** | LLY at 0.43 beta would reduce portfolio VaR and add genuinely uncorrelated exposure. Post-FDA deployment (PM's condition) is the correct risk gate. LLY should be prioritized in any deployment scenario where portfolio-level risk reduction is a goal. |
| 3 | **ZS technical downtrend** | **Informational** | ZS is trading 15% below 50-day SMA and 37% below 200-day SMA. The fundamental thesis may be sound, but the price trend is against the position. The PM's VIX normalization condition is appropriate; the PM may also want to add a technical stabilization condition (e.g., ZS trading above 50-day SMA or forming a higher low). |
| 4 | **ARMN March 11 earnings binary risk** | **Informational** | ARMN reports Q4/FY2025 earnings on March 11 (5 days). The PM has correctly conditioned deployment on post-earnings assessment. This is the first full-year report since NYSE uplisting on February 19 -- the stock could move significantly in either direction on thin coverage. |
| 5 | **DCO ROIC concern** | **Informational** | DCO's ROIC of 5.3% (per PM memo) appears to have improved to 8.45% per current StockAnalysis data. The PM should verify which figure is current. If ROIC has indeed improved toward 8.5%, one of the PM's deployment conditions may be partially met. However, this is still below the 10.8% WACC cited in the PM memo, meaning the company is not yet earning its cost of capital. |
| 6 | **No new deployment in current VIX** | **Confirmed** | VIX at 26 (Barchart mid-session). The PM's decision to make no capital deployment is risk-appropriate. The 20% cash position remains the portfolio's most important tactical asset. No conditional promotions should occur until VIX normalizes below 22 for 2+ sessions. |
| 7 | **14-name pipeline monitoring burden** | **Informational** | Not a financial risk. The PM's plan to rank-stack and apply the 3-cycle hold limit at the next full IC cycle is the appropriate governance mechanism. Approximately 6 of 14 names are effectively dormant (above entry or chain-blocked) and require minimal monitoring. |

### Carried Forward from Earlier Report (Unchanged)

| # | Item | Severity | Status |
|---|---|---|---|
| 1 | VaR 95% breach (2.65-2.91%) | Advisory | Unchanged -- VIX-driven |
| 2 | VaR 99% breach (3.75-4.12%) | Advisory | Unchanged -- mechanical |
| 3 | AI Electrification Chain at 39% | Advisory | Unchanged -- ceiling binding |
| 4 | FRO stop proximity (5.3%) | Advisory | Unchanged -- March 12 dividend ex-date approaching |
| 5 | Stagflation factor exposure | Advisory | Unchanged -- approximately neutral |
| 6 | Cash above target (20%) | Informational | Endorsed as strategic |

---

## Stress Test Addendum: Conditional Deployment Scenarios

The following extends the earlier report's stress tests to show how the top-priority conditional deployments would change the portfolio's stress profile.

### If ZS Were Deployed at 7% (replacing FRO 4%, net +3% deployment)

| Scenario | Current Portfolio | With ZS at 7% | Change |
|---|---|---|---|
| GFC 2008 replay | -22.0% | -22.8% | -0.8 pp (ZS higher beta than FRO) |
| COVID Feb-Mar 2020 | -18.7% | -19.3% | -0.6 pp |
| Rates shock 2022 | -14.3% | -15.4% | -1.1 pp (ZS is growth/duration-sensitive) |
| Broad market recovery | +3.5% | +3.9% | +0.4 pp (ZS upside from growth rally) |
| Fed emergency cut | +3.2% | +3.7% | +0.5 pp (ZS benefits from rate cuts) |

ZS deployment modestly increases stress-test losses in bearish scenarios but also improves upside capture. The asymmetry is slightly favorable: the worst-case degradation (-1.1 pp in rates shock) is smaller than the upside improvement (+0.5 pp in Fed cut). The net risk/reward of the deployment is positive at the portfolio level.

### If LLY Were Deployed at 5% (funded from cash)

| Scenario | Current Portfolio | With LLY at 5% | Change |
|---|---|---|---|
| GFC 2008 replay | -22.0% | -21.4% | **+0.6 pp (improved)** |
| COVID Feb-Mar 2020 | -18.7% | -18.3% | **+0.4 pp (improved)** |
| Rates shock 2022 | -14.3% | -14.0% | **+0.3 pp (improved)** |
| Broad market recovery | +3.5% | +3.4% | -0.1 pp (LLY lags in risk-on) |
| Fed emergency cut | +3.2% | +3.1% | -0.1 pp (minimal change) |

LLY deployment improves the portfolio's stress profile across all bearish scenarios due to its 0.43 beta and near-zero correlation with existing holdings. The cost is a trivial 0.1 pp reduction in upside capture during recovery scenarios. This is the best risk-adjusted deployment available in the conditional pipeline.

---

## Risk Manager Assessment

**The draft-2 IC memo demonstrates disciplined portfolio management.** The PM made no active position changes during a VIX 26+ environment, rejected three names below the 1.5:1 R/R threshold (COP at 1.29:1, LMT at 0.99:1, PG at 1.46:1), and conditionally approved five names with clear entry gates and sizing limits. The rejection discipline is particularly noteworthy -- the PM correctly identified that COP's 1.29:1 R/R, LMT's 0.99:1 symmetric risk, and PG's low-growth profile are incompatible with Sterling's mandate.

**The conditional pipeline expansion to 14 names is operationally acceptable but should be trimmed at the next full IC cycle.** Approximately 6 names are effectively dormant. The PM's 3-cycle hold limit will naturally address this.

**The gold mining cluster (B, ARMN, AEM) requires the PM to make a priority decision.** Both B and ARMN cannot be deployed alongside AEM without exceeding the 10% gold mining cap. The PM should designate which gold conditional is preferred and deprioritize the other.

**LLY stands out as the highest portfolio-construction-value conditional.** Its 0.43 beta and zero correlation with existing themes make it the only name that would actually reduce portfolio-level VaR upon deployment. The PM's post-FDA condition is appropriate risk management. If the FDA approves orforglipron on April 10, LLY should be the top deployment priority from a risk perspective, regardless of the PM's current priority ranking.

**No changes to active portfolio risk are required.** All earlier report recommendations remain in force. The portfolio's risk profile is unchanged, and the VaR breach remains Advisory (VIX-driven, not position-driven). The correct posture is patience.

---

*Market data sourced via StockAnalysis.com and web search on 2026-03-06 at approximately 12:00-12:20 PM EST. VIX: 26.02 (Barchart). S&P 500: ~6,764. Gold: ~$5,081-5,170 (range across sources). HY OAS: 3.00% (FRED, March 5). Conditional name prices: ZS $164.50, LLY $976.80, B $45.18, ARMN $19.38, DCO $126.54. Betas sourced from StockAnalysis.com 5-year figures.*
