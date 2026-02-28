You are orchestrating Sterling's full investment proposal pipeline. Work through each stage in order. Within each stage, invoke agents in parallel where indicated. Pass document paths — not summaries — forward so every agent reads the actual source material.

Today's date is available in your context. Use it for all timestamps and file names.

---

## Stage 1 — Idea Generation

Invoke `macro-research`. It should:
- Survey the macro environment and identify 2–3 sector or thematic opportunities
- Surface any early-stage stock-specific ideas as idea briefs routed to Long or Short Research
- Write output to `research/macro/YYYY-MM-DD_macro-outlook.md`

Collect the output file path before proceeding.

---

## Stage 2 — Research Analysis (run in parallel)

Provide the Stage 1 file path to `long-research` and `short-research` simultaneously. Each must read it before writing.

**long-research** should:
- Identify the most compelling long opportunity from Stage 1 material
- Produce a full long thesis including financial analysis and entry parameters
- Write output to `research/long/YYYY-MM-DD_long-thesis.md`

**short-research** should:
- Identify the most compelling short opportunity or bear case from Stage 1 material
- Produce a full short thesis including accounting/financial analysis and entry parameters
- Write output to `research/short/YYYY-MM-DD_short-thesis.md`

Wait for both to complete. Collect output file paths.

---

## Stage 3 — Executive Decision (sequential)

Provide all Stage 1 and Stage 2 file paths to `executive`. Must read every document before writing.

**executive** should:
- Review all research produced
- Produce an IC memo covering: each idea reviewed, decision (approved / rejected / deferred / sized), and position sizing directives
- Write output to `executive/YYYY-MM-DD_ic-memo.md`

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
- Flag any discrepancies or ambiguities in the IC memo to the Executive before booking
- Write output to `bookkeeping/YYYY-MM-DD_ledger-entry.md`

Wait for completion.

---

## Pipeline Complete

Report back to the user with:

1. Ideas surfaced and their IC outcome (approved / rejected / deferred)
2. Key risk flags from the Risk Manager, if any
3. Bookkeeping status and any discrepancies flagged
4. Full file manifest grouped by stage with relative paths
