2026-02-28 23:59 UTC
# Ledger Entry -- Mandate Transition to Long-Only -- 2026-02-28

**Source:** `portfolio-manager/2026-02-28_ic-memo.md`
**Authority:** Final IC memo, Portfolio Manager directive effective immediately
**Mandate Change:** Long-only (all shorts closed)
**Transaction Type:** Mandate transition with rebalancing

---

## Summary of Transactions

All approved position changes from the IC memo are booked effective 2026-02-28 23:59 UTC.

| Transaction | Ticker | Direction | Prior % NAV | New % NAV | Change | Reason |
|-------------|--------|-----------|------------|----------|--------|--------|
| Close | NKE | Short | -17.0% | 0.0% | +17.0% | Long-only mandate |
| Close | MSFT | Short | -13.5% | 0.0% | +13.5% | Long-only mandate |
| Close | TASK | Short | -3.0% | 0.0% | +3.0% | Long-only mandate |
| Close | OWL | Short | -3.0% | 0.0% | +3.0% | Long-only mandate |
| Close | TEP | Short | -2.5% | 0.0% | +2.5% | Long-only mandate |
| Trim | VST | Long | 27.5% | 25.0% | -2.5% | Reduce sector concentration |
| Trim | CEG | Long | 23.0% | 20.0% | -3.0% | Reduce sector concentration |
| Increase | NOW | Long | 8.0% | 12.0% | +4.0% | Best risk/reward redeployment |
| Increase | DELL | Long | 2.5% | 5.0% | +2.5% | Diversification benefit |
| Accumulate | Cash | -- | 0.0% | 38.0% | +38.0% | Pending March 7 IC deployment |

---

## Capital Sources and Disposition

**Capital Freed (Total: 44.5%)**

- NKE short close: 17.0%
- MSFT short close: 13.5%
- TASK short close: 3.0%
- OWL short close: 3.0%
- TEP short close: 2.5%
- VST trim (27.5% → 25.0%): 2.5%
- CEG trim (23.0% → 20.0%): 3.0%

**Total capital freed: 44.5% of NAV**

**Capital Redeployed (Total: 44.5%)**

- NOW increase (8.0% → 12.0%): 4.0%
- DELL increase (2.5% → 5.0%): 2.5%
- Cash reserve: 38.0%

**Total redeployed: 44.5% of NAV**

---

## Final Portfolio Allocation

| Ticker | Direction | Allocation | Status |
|--------|-----------|-----------|--------|
| VST | Long | 25.0% | Position reduced per mandate rebalancing |
| CEG | Long | 20.0% | Position reduced per mandate rebalancing |
| NOW | Long | 12.0% | Position increased; accumulated within $98-$110 entry range |
| DELL | Long | 5.0% | Position increased; entry range revised to $130-$150 |
| **Total Invested** | -- | **62.0%** | All long positions (mandate compliance) |
| **Cash** | -- | **38.0%** | Pending deployment at March 7 IC |
| **Total NAV** | -- | **100.0%** | Verified |

---

## Mandate Change Effective

The fund's mandate transitions from long/short (9 holdings: 4 long, 5 short) to **long-only (4 holdings: 4 long, 0 short)** effective 2026-02-28.

- **Short positions closed:** NKE, MSFT, TASK, OWL, TEP (all 5 shorts fully exited)
- **Gross exposure:** Reduced from 100.0% to 62.0% (-38.0%)
- **Net exposure:** Changed from +22.0% long net to +62.0% (fully directional, consistent with long-only mandate)
- **Holdings:** 4 / 10 max approved positions
- **Cash:** 38.0% (uninvested capital, pending diversifying idea approvals at March 7 IC)

---

## Reconciliation Against IC Memo

All approved position changes in `portfolio-manager/2026-02-28_ic-memo.md` (Final) are booked as specified:

| IC Memo Section | Booking Status | Notes |
|-----------------|---------|-------|
| Positions Closed (NKE, MSFT, TASK, OWL, TEP) | ✓ Booked | All 5 shorts closed; capital freed: 39.0% |
| VST trim to 25.0% | ✓ Booked | Freed 2.5% |
| CEG trim to 20.0% | ✓ Booked | Freed 3.0% |
| NOW increase to 12.0% | ✓ Booked | Consumed 4.0% of freed capital |
| DELL increase to 5.0% | ✓ Booked | Consumed 2.5% of freed capital |
| Cash accumulation to 38.0% | ✓ Booked | Remaining freed capital held pending March 7 IC |
| VRT (Vertiv) rejection | ✓ Noted | Not booked (pitch rejected; conditions stated for re-pitch) |

**Discrepancies flagged:** None. All portfolio manager IC memo approvals are accurately booked.

---

## Execution Directives (Noted for Compliance)

Per IC memo, the following execution directives are issued to the Execution desk:

1. **Close NKE short (17.0%)** – Market orders acceptable; exit within 1-2 trading days
2. **Close MSFT short (13.5%)** – Market orders acceptable; exit within 1 trading day
3. **Close TASK short (3.0%)** – Micro-cap liquidity caution; scale out over 2-3 days at 15-20% ADV
4. **Close OWL short (3.0%)** – Exit within 1-2 trading days
5. **Close TEP short (2.5%)** – Scale out over 2-3 days on Euronext Paris
6. **Trim VST to 25.0%** – Reduce from 27.5% over 3-5 days
7. **Trim CEG to 20.0%** – Reduce from 23.0% over 3-5 days
8. **Increase NOW to 12.0%** – Accumulate within $98-$110 range; scale in over 2-3 days
9. **DELL entry revision** – Increase allocation to 5.0%; scale in within $130-$150 range

All directives are effective immediately pending execution.

---

## Risk Approvals and Limits

The following risk metrics and limit changes are approved per the IC memo:

| Metric | Prior | Current | Limit | Status |
|--------|-------|---------|-------|--------|
| Gross Exposure | 100.0% | 62.0% | 100% | OK |
| Net Exposure | +22.0% | +62.0% | No formal limit (long-only) | Accepted |
| VaR 95% 1-day | 1.53% | 2.38% | 2.0% | BREACH (temporary, accepted with March 7 remediation deadline) |
| VaR 99% 1-day | 2.16% | 3.37% | 3.0% | BREACH (temporary, accepted with March 7 remediation deadline) |
| Utilities/Power Concentration | 50.5% | 45.0% | 25% | BREACH (continuing waiver, expected to improve below 35% by March 14) |
| AI Theme Concentration | ~83% | 100% | None (to be addressed at March 7 IC; target <80%) | Noted |
| Portfolio Beta | +0.25 | +0.78 | ±1.0 | OK |
| Stress Test Historical Limit | -10% | -20% (recalibrated) | -- | Recalibrated for long-only mandate |
| Stress Test Hypothetical Limit | -10% | -15% (recalibrated) | -- | Recalibrated for long-only mandate |

---

## Notes and Caveats

1. **Execution timeline:** All position changes are approved effective immediately, subject to execution desk liquidity and market conditions. Estimated execution window: 1-5 business days per directive.

2. **Cash deployment:** The 38% cash reserve is held pending approval of diversifying position ideas at the March 7 IC. PM will not deploy cash into positions that increase AI concentration or worsen VaR. No automatic deployment; specific pitches must be approved.

3. **March 7 IC remediation:** VaR breaches (2.38% and 3.37%, both exceeding limits) are accepted as temporary. Remediation deadline is March 7 IC. If no diversifying positions are approved by then, pro-rata 10% gross exposure trim will be executed to cure VaR compliance. This is a hard deadline.

4. **CEG position monitoring:** CEG at $329.50 vs. $350 target (6.2% upside, 0.2:1 risk/reward) is time-boxed to March 31 catalyst. If analyst cannot justify raising target above $370 by March 7 IC, position will be reduced to 15% or below. This is a documented action item.

5. **Stress testing:** All four recalibrated limit breaches (GFC -31.9%, COVID -25.5%, AI demand disappointment -22.5%, nuclear incident -21.5%) are accepted as tail risks consistent with the fund's core thesis. These will improve with diversification. No immediate action required.

6. **Independent bets deterioration:** Effective independent bets fell from 3.5 to 2.0 due to short-side hedge removals. Target: restore to 3.5+ by March 14 IC via diversifying long positions. This is a monitoring item, not a limit breach.

---

## Ledger Entries Booked

All transactions above are recorded in the fund's general ledger as of 2026-02-28 23:59 UTC. The following accounts are affected:

- **VST (long):** Allocation adjusted from 27.5% to 25.0%
- **CEG (long):** Allocation adjusted from 23.0% to 20.0%
- **NOW (long):** Allocation adjusted from 8.0% to 12.0%
- **DELL (long):** Allocation adjusted from 2.5% to 5.0%
- **NKE (short):** Position closed; allocation adjusted from -17.0% to 0.0%
- **MSFT (short):** Position closed; allocation adjusted from -13.5% to 0.0%
- **TASK (short):** Position closed; allocation adjusted from -3.0% to 0.0%
- **OWL (short):** Position closed; allocation adjusted from -3.0% to 0.0%
- **TEP (short):** Position closed; allocation adjusted from -2.5% to 0.0%
- **Cash:** Allocation adjusted from 0.0% to 38.0%

---

## Compliance Sign-Off

- **Mandate change:** Long-only mandate now in effect. ✓
- **All short positions eliminated:** NKE, MSFT, TASK, OWL, TEP all closed. ✓
- **Gross exposure within limits:** 62.0% < 100% limit. ✓
- **Holdings within max:** 4 / 10 approved. ✓
- **IC memo compliance:** All approved position changes booked accurately. ✓

This ledger entry is complete and reconciled against the source IC memo. No discrepancies flagged.
