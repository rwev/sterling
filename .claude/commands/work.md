You are orchestrating Sterling's full investment proposal pipeline. Work through each stage in order. Within each stage, invoke agents in parallel where indicated. Pass document paths — not summaries — forward so every agent reads the actual source material.

Today's date is available in your context. Use it for all timestamps and file names.

**Incremental runs**: This pipeline supports repeated execution. Each downstream agent maintains a `.processed` manifest in its output directory and will self-filter to only new upstream documents. If an agent reports "Nothing new to process", skip that stage's downstream handoff and note it in the final report. The pipeline should short-circuit gracefully — if Stage 2 agents find nothing new, Stages 3–7 can be skipped entirely.

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
- Review Stage 1 material and identify compelling long opportunities
- Produce 0–3 long theses based on conviction — no quota to fill, no cap to chase
- Write each thesis to its own file: `research/long/YYYY-MM-DD_<ticker>-long-thesis.md`

**short-analyst** should:
- Review Stage 1 material and identify compelling short opportunities or bear cases
- Produce 0–3 short theses based on conviction — no quota to fill, no cap to chase
- Write each thesis to its own file: `research/short/YYYY-MM-DD_<ticker>-short-thesis.md`

Wait for both to complete. Collect all output file paths. If either analyst produces zero theses, note it and continue — downstream stages will simply have fewer pitches to review.

---

## Stage 3 — Draft IC Memo (sequential)

Provide all Stage 1 and Stage 2 file paths to `portfolio-manager`. Must read every document before writing.

**portfolio-manager** should:
- Review all research produced
- Produce a **draft** IC memo covering: each idea reviewed, proposed decision (approved / rejected), and proposed allocation weights
- Write output to `portfolio-manager/YYYY-MM-DD_ic-memo-draft.md`

Wait for completion. Collect the output file path.

---

## Stage 4 — Risk Assessment (sequential)

Provide all Stage 2 and Stage 3 file paths to `risk-manager`. Must read the draft IC memo and all analyst research before writing.

**risk-manager** should:
- Assess marginal risk contribution of each proposed position from the draft IC memo
- Produce a portfolio risk report: updated gross/net exposure, factor impacts, concentration flags, VaR estimate, liquidity profile, stress test snapshot, and any limit warnings
- Explicitly flag any positions or allocations that breach risk limits or raise concerns the PM should address
- Write output to `risk/YYYY-MM-DD_risk-report.md`

Wait for completion. Collect the output file path.

---

## Stage 5 — Final IC Memo (sequential)

Provide the Stage 4 risk report file path (plus all prior file paths) to `portfolio-manager`. Must read the risk report before writing.

**portfolio-manager** should:
- Read the Risk Manager's assessment
- Incorporate risk feedback: adjust allocations, add hedging directives, reject positions that breach limits, or accept flagged risks with documented rationale
- Produce the **final** IC memo — this is the authoritative record for all downstream agents
- Write output to `portfolio-manager/YYYY-MM-DD_ic-memo.md`

Wait for completion. Collect the output file path.

---

## Stage 6 — Bookkeeping & Investor Relations (run in parallel)

Provide the Stage 5 final IC memo file path to both `bookkeeper` and `investor-relations` simultaneously.

**bookkeeper** should:
- Read the final IC memo and book all approved position changes to the ledger
- Produce a ledger entry summary and updated P&L snapshot reflecting the new positions
- Flag any discrepancies or ambiguities in the IC memo to the Portfolio Manager before booking
- Write output to `bookkeeping/YYYY-MM-DD_ledger-entry.md`

**investor-relations** should read only the final IC memo — no other documents:
- Translate approved portfolio changes into a polished, investor-facing portfolio update
- Strip proprietary detail (no entry prices, stop levels, or specific allocation percentages)
- Frame decisions directionally: sector tilts, thematic positioning, high-level bias
- Write output to `investor-relations/YYYY-MM-DD_portfolio-update.md`

Wait for both to complete. Collect the investor-relations output file path.

---

## Stage 7 — Social Media (sequential)

Provide the Stage 6 investor-relations file path to `social-media`.

**social-media** should:
- Read the investor relations update
- Produce 1–2 tweet-length posts or a short thread capturing the directional message
- Write output to `social-media/YYYY-MM-DD_<slug>.md`
- Post each tweet file using: `set -a && source .env && set +a && node scripts/tweet.mjs --file social-media/YYYY-MM-DD_<slug>.md`

Wait for completion.

---

## Pipeline Complete

Report back to the user with:

1. Ideas surfaced and their IC outcome (approved / rejected)
2. Key risk flags from the Risk Manager and how the PM addressed them in the final memo
3. Bookkeeping status and any discrepancies flagged
4. Investor update summary highlights
5. Tweets posted (or posting failures)
6. Full file manifest grouped by stage with relative paths
