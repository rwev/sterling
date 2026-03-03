You are running a standalone portfolio review — no new analyst pitches, no macro research. The goal is to evaluate the current book and any conditionally approved theses, then produce a final IC memo through the PM–Risk collaboration loop.

Today's date is available in your context. Use it for all timestamps and file names.

---

## Stage 1 — Draft IC Memo (sequential)

Invoke `portfolio-manager`. It should:

- **Skip the `.processed` filter and new-pitch evaluation entirely** — there are no upstream analyst documents to review in this pipeline
- **Existing Position Review**: Read `artifacts/portfolio-manager/theses/.active`, read each active thesis, run WebSearch catalyst checks (current price vs. stop/target, catalyst status, earnings/guidance, material news, analyst sentiment), and make Hold/Resize/Close decisions for each position
- **Conditional Thesis Review**: Read `artifacts/portfolio-manager/theses/.conditional`, read each conditional thesis, run the same WebSearch checks, and make Promote/Hold/Drop decisions
- For any positions decided as Close or Drop: copy the thesis to `artifacts/portfolio-manager/theses/closed/` and update `.active` / `.conditional`
- For any conditional theses Promoted: move the filename from `.conditional` to `.active` and assign an allocation weight
- Produce a **draft** IC memo covering: Existing Position Review, Conditional Thesis Review, updated Portfolio Snapshot, and any allocation changes
- If all existing positions are Hold and all conditional theses are Hold (Conditional), report "No changes — all positions held" and stop. Do not proceed to Stage 2.
- Write output to `artifacts/portfolio-manager/YYYY-MM-DD_ic-memo-draft.md`

Wait for completion. Collect the output file path. If the PM reported no changes, skip Stages 2–3 and go directly to the Pipeline Complete report.

---

## Stage 2 — Risk Assessment (sequential)

Provide the Stage 1 draft IC memo file path to `risk-manager`. It must read the draft IC memo before writing.

**risk-manager** should:
- Assess the current portfolio risk profile based on the draft IC memo
- Produce a portfolio risk report: gross/net exposure, factor impacts, concentration flags, VaR estimate, liquidity profile, stress test snapshot, and any limit warnings
- Explicitly flag any positions or allocations that breach risk limits or raise concerns the PM should address
- Write output to `artifacts/risk/YYYY-MM-DD_risk-report.md`

Wait for completion. Collect the output file path.

---

## Stage 3 — Final IC Memo (sequential)

Provide the Stage 2 risk report file path (plus the Stage 1 draft) to `portfolio-manager`. It must read the risk report before writing.

**portfolio-manager** should:
- Read the Risk Manager's assessment
- Incorporate risk feedback: adjust allocations, accept flagged risks with documented rationale, or close positions that breach limits
- If risk feedback causes any position to be closed (or reverses a draft-round Promote): copy the thesis to `artifacts/portfolio-manager/theses/closed/` and remove it from `.active`
- Produce the **final** IC memo — this is the authoritative record
- Write output to `artifacts/portfolio-manager/YYYY-MM-DD_ic-memo.md`

Wait for completion. Collect the output file path.

---

## Stage 4 — Commit & Push

After all stages complete (or after the pipeline short-circuits with no changes):

1. Stage all new and modified files: `git add -A`
2. Commit with message: `Add YYYY-MM-DD portfolio review output`
3. Push to remote: `git push`

If the commit or push fails, report the error but do not retry.

---

## Pipeline Complete

Report back to the user with:

1. Existing Position Review summary (Hold/Resize/Close decisions for each position with catalyst highlights)
2. Conditional Thesis Review summary (Promote/Hold/Drop decisions)
3. Key risk flags from the Risk Manager and how the PM addressed them in the final memo
4. Allocation changes (before vs. after)
5. Full file manifest with relative paths
6. Git commit hash and push status
