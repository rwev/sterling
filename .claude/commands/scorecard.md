You are generating an on-demand analyst scorecard from Sterling's post-mortem archive.

Today's date is available in your context. Use it for all timestamps and file names.

---

## Step 1 — Read All Post-Mortems

Glob `artifacts/post-mortems/` for all `*-post-mortem.md` files. If none exist, report "No post-mortems available yet — no positions have been closed" and stop.

Read every post-mortem document.

---

## Step 2 — Generate Scorecard

Invoke `post-mortem` with the instruction to skip individual post-mortem generation and only regenerate the analyst scorecard from all existing post-mortem documents.

The agent should:
- Read every `*-post-mortem.md` file in `artifacts/post-mortems/`
- Aggregate metrics per analyst type (Long, Contrarian, Growth, Small-Cap)
- Write the scorecard to `artifacts/post-mortems/YYYY-MM-DD_analyst-scorecard.md`

---

## Step 3 — Report

Report back to the user with:
1. Fund-wide summary (win rate, catalyst hit rate, avg return)
2. Per-analyst breakdown highlights
3. Notable patterns or biases detected
4. File path to the scorecard
