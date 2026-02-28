You are orchestrating Sterling's full investment proposal pipeline. Work through each stage in order. Within each stage, invoke agents in parallel where indicated. Pass document paths — not summaries — forward so every agent reads the actual source material.

Today's date is available in your context. Use it for all timestamps and file names.

---

## Stage 1 — Idea Generation

Invoke `macro-research`. It should:
- Survey the macro environment and identify 2–3 sector or thematic opportunities
- Surface any early-stage stock-specific ideas as idea briefs routed to Long or Short Analyst
- Write output to `research/macro/YYYY-MM-DD_macro-outlook.md`

Collect the output file path before proceeding.

---

## Stage 2 — Research Analysis (run in parallel)

Provide the Stage 1 file path to `long-analyst` and `short-analyst` simultaneously. Each must read it before writing.

**long-analyst** should:
- Identify the most compelling long opportunity from Stage 1 material
- Produce a full long thesis including financial analysis and entry parameters
- Write output to `research/long/YYYY-MM-DD_long-thesis.md`

**short-analyst** should:
- Identify the most compelling short opportunity or bear case from Stage 1 material
- Produce a full short thesis including accounting/financial analysis and entry parameters
- Write output to `research/short/YYYY-MM-DD_short-thesis.md`

Wait for both to complete. Collect output file paths.

---

## Stage 3 — Portfolio Manager Decision (sequential)

Provide all Stage 1 and Stage 2 file paths to `portfolio-manager`. Must read every document before writing.

**portfolio-manager** should:
- Review all research produced
- Produce an IC memo covering: each idea reviewed, decision (approved / rejected), and allocation weights
- Write output to `portfolio-manager/YYYY-MM-DD_ic-memo.md`

Wait for completion. Collect the output file path.

---

## Stage 4 — Risk Assessment (sequential)

Provide all prior file paths to `risk-manager`. Must read all of them, with emphasis on the IC memo.

**risk-manager** should:
- Assess marginal risk contribution of each approved position
- Produce a portfolio risk report: updated gross/net exposure, factor impacts, concentration flags, VaR estimate, liquidity profile, stress test snapshot, and any limit warnings
- Write output to `risk/YYYY-MM-DD_risk-report.md`

Wait for completion. Collect the output file path.

---

## Stage 5 — Bookkeeping (sequential)

Provide all prior file paths to `bookkeeper`. Must read all source documents, with emphasis on the IC memo.

**bookkeeper** should:
- Read the IC memo and book all approved position changes to the ledger
- Produce a ledger entry summary and updated P&L snapshot reflecting the new positions
- Flag any discrepancies or ambiguities in the IC memo to the Portfolio Manager before booking
- Write output to `bookkeeping/YYYY-MM-DD_ledger-entry.md`

Wait for completion. Collect the output file path.

---

## Stage 6 — Investor Relations (sequential)

Provide the Stage 3 IC memo file path to `investor-relations`. It should read only the IC memo — no other documents.

**investor-relations** should:
- Translate approved portfolio changes into a polished, investor-facing portfolio update
- Strip proprietary detail (no entry prices, stop levels, or specific allocation percentages)
- Frame decisions directionally: sector tilts, thematic positioning, high-level bias
- Write output to `investor-relations/YYYY-MM-DD_portfolio-update.md`

Wait for completion.

---

## Pipeline Complete

Report back to the user with:

1. Ideas surfaced and their IC outcome (approved / rejected)
2. Key risk flags from the Risk Manager, if any
3. Bookkeeping status and any discrepancies flagged
4. Investor update summary highlights
5. Full file manifest grouped by stage with relative paths
