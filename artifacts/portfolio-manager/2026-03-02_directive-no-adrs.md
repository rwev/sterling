2026-03-02 23:30 UTC
# Portfolio Directive: ADR Prohibition

## Classification: Mandatory Policy -- Effective Immediately

## Rule

American Depositary Receipts (ADRs) are NOT permitted in the Sterling portfolio. All equity positions must be direct listings on US exchanges. This prohibition covers all ADRs without exception, including but not limited to:

- **Chinese ADRs**: BABA (Alibaba), JD (JD.com), PDD (Pinduoduo), BIDU (Baidu), NIO, XPEV (XPeng), LI (Li Auto), TME (Tencent Music), BILI (Bilibili), and all others
- **European ADRs**: ASML (when traded as ADR on NYSE), SAP (ADR), UL (Unilever ADR), AZN (AstraZeneca ADR), NVO (Novo Nordisk ADR), and all others
- **Asian ADRs (non-China)**: TSM (Taiwan Semiconductor ADR), SONY, TM (Toyota ADR), HMC (Honda ADR), and all others
- **Latin American ADRs**: MELI (MercadoLibre, though incorporated in Delaware -- classify as direct listing if applicable), NU, VALE, PBR, and all others
- **Any other foreign company listed on US exchanges via a depositary receipt structure**

**Test for compliance**: If the security's SEC filing type is Form 20-F (foreign private issuer) and it trades via a depositary bank arrangement (BNY Mellon, JPMorgan, Citibank, Deutsche Bank as depositary), it is an ADR and is prohibited. Direct listings by foreign-incorporated companies that do not use a depositary structure should be evaluated on a case-by-case basis by the PM.

## Rationale

ADRs carry structural risks that are incompatible with Sterling's risk framework:

1. **Delisting risk**: Foreign ADRs, particularly Chinese ADRs, face ongoing delisting risk under the Holding Foreign Companies Accountable Act (HFCAA) and potential escalation of geopolitical tensions. Delisting forces liquidation at distressed prices with no ability to manage exit timing.

2. **VIE structure uncertainty**: Many Chinese ADRs (including BABA) use Variable Interest Entity structures that grant economic interest but not direct equity ownership. These structures have never been tested in Chinese courts and could be invalidated by regulatory action, resulting in total loss of investment.

3. **Foreign regulatory jurisdiction**: The underlying companies are subject to foreign regulatory regimes where Sterling has no legal recourse, limited transparency into regulatory proceedings, and exposure to political risk that cannot be hedged or managed.

4. **Custody chain complexity**: ADRs involve a multi-layer custody chain (investor -> broker -> depositary bank -> custodian bank -> foreign registrar). Each link adds counterparty risk, settlement risk, and operational complexity that is unnecessary when direct US-listed alternatives exist.

5. **Tax and withholding complications**: Many ADRs are subject to foreign dividend withholding taxes, depositary fees, and FX conversion costs that erode returns relative to direct US listings.

## Effective Date

Immediately. This directive applies to all new position approvals, conditional approvals, and analyst research submissions effective 2026-03-02.

## Impact on Current Portfolio

### Active Positions
- **BABA (Alibaba)**: CLOSED effective immediately per Directors' directive. Thesis archived to `artifacts/portfolio-manager/theses/closed/2026-03-02_baba-long-thesis.md`. The position was approved in the 2026-03-02 IC cycle at 10% allocation and is now exited at 0%.

### Conditional Book
- All six conditional positions reviewed: GEV (GE Vernova), PWR (Quanta Services), CIEN (Ciena), LITE (Lumentum), COHR (Coherent), FCX (Freeport-McMoRan). All are direct US-listed companies. No ADRs found in the conditional book. No removals required.

## Instruction to Analyst Desks

All analyst desks -- Long, Contrarian, Growth, and Small-Cap -- must screen out ADRs from future research and pitch submissions. Any thesis submitted for an ADR will be automatically rejected without review. This includes:

- Do not initiate coverage on any ADR
- Do not submit pitch documents for any ADR
- If an existing research pipeline includes ADR candidates, remove them immediately
- When screening for investment candidates, filter for US exchange direct listings only

If an analyst believes an exceptional case exists (e.g., a foreign company completing a direct listing conversion from ADR status), the analyst must consult the PM before initiating any research.

## Compliance

This directive will be referenced in all future IC memos as a standing portfolio constraint. The Risk Manager should incorporate ADR screening into pre-trade compliance checks.

---

*Issued by: Portfolio Manager, Sterling Investment Committee*
*Authority: Directors' Directive, 2026-03-02*
