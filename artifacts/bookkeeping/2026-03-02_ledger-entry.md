2026-03-02 20:00 UTC
# Ledger Entry -- Position Resize

## Summary

Processed final IC memo (`artifacts/portfolio-manager/2026-03-02_ic-memo.md`). One approved position change booked immediately.

---

## Approved Changes Booked

### DELL -- Dell Technologies
**Direction**: TRIM (Long)
**Prior Allocation**: 8% of NAV
**New Allocation**: 5% of NAV
**Amount Released to Cash**: 3% of NAV
**Rationale**: Position size 4.3% from hard stop at $112. Risk Manager confirmed resize reduces excessive capital at risk and resolves two prior VaR breaches. Thesis fundamentals intact; $112 stop is a hard exit.

### Cash
**Prior Allocation**: 11% of NAV
**New Allocation**: 14% of NAV
**Amount Received**: 3% of NAV (from DELL trim)

---

## Positions Held (No Change)

| Ticker | Allocation | Action | Rationale |
|--------|-----------|--------|-----------|
| VST | 15% | HOLD | Thesis intact; price corrected to $172 (18.6% above stop) |
| NOW | 10% | HOLD | Sector-wide sell-off; fundamentals intact |
| EME | 7% | HOLD | Earnings beat; thesis strengthening |
| AVGO | 13% (5% depl.) | HOLD | Await March 4 earnings; stop at $290 active |
| COHR | 12% (8% depl.) | HOLD | Near target; hold for OFC March 17 |
| NVDA | 10% | HOLD | On track; next catalyst May |
| VRT | 7% | HOLD | Within entry range; backlog supports |
| TSEM | 5% | HOLD | Early stage; thesis intact |
| MRVL | 2% | HOLD | Await March 5 earnings; displacement candidate |

---

## Conditional Changes (NOT Yet Booked)

### CLS -- Celestica Inc.
**Status**: CONDITIONALLY APPROVED at 5%
**Execution**: Contingent on MRVL earnings disappointment (March 5). If MRVL misses, CLS enters at 5% displacing MRVL (2%), leaving net +3% reduction to cash.
**Do Not Execute**: Until MRVL earnings are reviewed.

### LMB -- Limbach Holdings
**Status**: CONDITIONALLY APPROVED at 2%
**Execution**: Contingent on both (1) acceptable Q4 2025 earnings (ODR mix >75%, revenue in line, EBITDA margin intact), AND (2) a slot opening beyond MRVL. LMB earnings report after close today (March 2).
**Do Not Execute**: Until both conditions are met.

---

## Risk Metrics Post-DELL Resize

| Metric | Value | Limit | Status |
|--------|-------|-------|--------|
| Total Exposure (target) | 86% | 100% | OK |
| Deployed Exposure | 74% | -- | OK |
| Portfolio Beta (target) | 1.28 | 1.0 | BREACH (waiver active) |
| VaR 95% 1-day (target) | 2.98% | 3.0% | OK |
| VaR 95% 1-day (deployed) | 2.48% | 3.0% | OK |
| Max Single-Name | 15% (VST) | 35% | OK |
| Semiconductor Sector | 25% | 25% | AT LIMIT |

---

## Stop-Loss Orders Active

- **DELL**: $112 (hard stop; if breached, close entire 5% position)
- **AVGO**: $290 (active through March 4 earnings)

---

## Reconciliation

**IC Memo Source**: `artifacts/portfolio-manager/2026-03-02_ic-memo.md`
**Process Note**: Only approved, non-conditional changes booked. CLS and LMB remain conditional pending March 5 earnings and Q4 earnings results, respectively.

**Discrepancies Flagged**: None. All approved amounts reconcile to IC memo directives.

---

## Next Steps

- Monitor MRVL earnings March 5 for displacement decision
- Monitor AVGO earnings March 4 and $290 stop
- Monitor DELL $112 stop
- Monitor LMB Q4 earnings (reported after close March 2)
- Next IC cycle: March 9, 2026

