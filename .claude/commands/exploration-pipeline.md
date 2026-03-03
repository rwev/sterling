You are orchestrating Sterling's full investment proposal pipeline. Work through each stage in order. Within each stage, invoke agents in parallel where indicated. Pass document paths — not summaries — forward so every agent reads the actual source material.

Today's date is available in your context. Use it for all timestamps and file names.

**Incremental runs**: This pipeline supports repeated execution. Each downstream agent maintains a `.processed` manifest in its output directory and will self-filter to only new upstream documents. If an agent reports "Nothing new to process", skip that stage's downstream handoff and note it in the final report. The pipeline should short-circuit gracefully — if Stage 2 agents find nothing new, Stages 3–6 can be skipped entirely.

---

## Stage 1 — Idea Generation

Invoke `macro-research`. It should:
- Survey the macro environment and identify 3-5 sector or thematic opportunities
- Suggest example stock-specific ideas to be routed to Long, Contrarian, Growth, or Small-Cap Analyst to be explored further
- Write output to `artifacts/research/macro/YYYY-MM-DD_macro-outlook.md`
Collect the output file path before proceeding.

---

## Stage 2 — Research Analysis (run in parallel)

Provide the Stage 1 file path to `long-analyst`, `contrarian-analyst`, `growth-analyst`, and `smallcap-analyst` simultaneously. Each must read it before writing.

**long-analyst** should:
- Review Stage 1 material and identify compelling long opportunities
- Produce 0–3 long theses based on conviction — no quota to fill, no cap to chase
- Write each thesis to its own file: `artifacts/analysis/long/YYYY-MM-DD_<ticker>-long-thesis.md`

**contrarian-analyst** should:
- Review Stage 1 material and identify compelling contrarian/value long opportunities where the market is too pessimistic
- Produce 0–3 contrarian long theses based on conviction — no quota to fill, no cap to chase
- Write each thesis to its own file: `artifacts/analysis/contrarian/YYYY-MM-DD_<ticker>-long-thesis.md`

**growth-analyst** should:
- Review Stage 1 material and identify compelling growth/momentum long opportunities at inflection points
- Produce 0–3 growth long theses based on conviction — no quota to fill, no cap to chase
- Write each thesis to its own file: `artifacts/analysis/growth/YYYY-MM-DD_<ticker>-long-thesis.md`

**smallcap-analyst** should:
- Review Stage 1 material and identify compelling under-followed small/mid-cap long opportunities
- Produce 0–3 small-cap long theses based on conviction — no quota to fill, no cap to chase
- Write each thesis to its own file: `artifacts/analysis/smallcap/YYYY-MM-DD_<ticker>-long-thesis.md`

Wait for all four to complete. Collect all output file paths. If any analyst produces zero theses, note it and continue — downstream stages will simply have fewer pitches to review.

---

## Stage 3 — Draft IC Memo (sequential)

Provide all Stage 1 and Stage 2 file paths to `portfolio-manager`. Must read every document before writing.

**portfolio-manager** should:
- First, review all active positions in the thesis library: read `artifacts/portfolio-manager/theses/.active`, read each active thesis, run WebSearch catalyst checks (current price vs. stop/target, catalyst status, material news), and make Hold/Resize/Close decisions for each existing position
- For any positions decided as Close: copy the thesis to `artifacts/portfolio-manager/theses/closed/` and update `.active`
- Then, review all new research produced in Stages 1 and 2
- For any new positions approved: copy the original thesis to `artifacts/portfolio-manager/theses/` and update `.active`
- Produce a **draft** IC memo covering: Existing Position Review (all active positions with Hold/Resize/Close decisions and catalyst updates), each new idea reviewed, proposed decision (approved / rejected), and proposed allocation weights
- Write output to `artifacts/portfolio-manager/YYYY-MM-DD_ic-memo-draft.md`

Wait for completion. Collect the output file path.

---

## Stage 4 — Risk Assessment (sequential)

Provide the Stage 3 draft IC memo file path to `risk-manager`. Must read the draft IC memo before writing.

**risk-manager** should:
- Assess marginal risk contribution of each proposed position from the draft IC memo
- Produce a portfolio risk report: updated gross/net exposure, factor impacts, concentration flags, VaR estimate, liquidity profile, stress test snapshot, and any limit warnings
- Explicitly flag any positions or allocations that breach risk limits or raise concerns the PM should address
- Write output to `artifacts/risk/YYYY-MM-DD_risk-report.md`

Wait for completion. Collect the output file path.

---

## Stage 5 — Final IC Memo (sequential)

Provide the Stage 4 risk report file path (plus all prior file paths) to `portfolio-manager`. Must read the risk report before writing.

**portfolio-manager** should:
- Read the Risk Manager's assessment
- Incorporate risk feedback: adjust allocations, add hedging directives, reject positions that breach limits, or accept flagged risks with documented rationale
- If risk feedback causes any position to be closed (or reverses a draft-round approval): copy the thesis to `artifacts/portfolio-manager/theses/closed/` and remove it from `.active`
- Produce the **final** IC memo — this is the authoritative record for all downstream agents
- Write output to `artifacts/portfolio-manager/YYYY-MM-DD_ic-memo.md`

Wait for completion. Collect the output file path.

---

## Stage 6 — Bookkeeping & Investor Relations (run in parallel)

Provide the Stage 5 final IC memo file path to both `bookkeeper` and `investor-relations` simultaneously.

**bookkeeper** should:
- Read the final IC memo and book all approved position changes to the ledger
- Produce a ledger entry summary and updated P&L snapshot reflecting the new positions
- Flag any discrepancies or ambiguities in the IC memo to the Portfolio Manager before booking
- Write output to `artifacts/bookkeeping/YYYY-MM-DD_ledger-entry.md`

**investor-relations** should read only the final IC memo — no other documents:
- Translate approved portfolio changes into a polished, investor-facing portfolio update
- Strip proprietary detail (no entry prices, stop levels, or specific allocation percentages)
- Frame decisions directionally: sector tilts, thematic positioning, high-level bias
- Write output to `artifacts/investor-relations/YYYY-MM-DD_portfolio-update.md`

Wait for both to complete.

---

## Stage 7 — Commit & Push

After all stages complete (or after the pipeline short-circuits with nothing new):

1. Stage all new and modified files: `git add -A`
2. Commit with message: `Add YYYY-MM-DD pipeline output and agent updates`
3. Push to remote: `git push`

If the commit or push fails, report the error but do not retry.

---

## Pipeline Complete

Report back to the user with:

1. Ideas surfaced and their IC outcome (approved / rejected)
2. Key risk flags from the Risk Manager and how the PM addressed them in the final memo
3. Bookkeeping status and any discrepancies flagged
4. Investor update summary highlights
5. Full file manifest grouped by stage with relative paths
6. Git commit hash and push status
