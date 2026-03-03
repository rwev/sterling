# Changelog

All notable changes to Sterling's agent system are documented here.

## 2026-03-02 — Conditional Thesis Acceptance for Portfolio Manager

Added a formal "Conditionally Approved" decision tier between Approve and Reject. Pitches with merit that aren't allocated capital (portfolio full, price above entry range, pending catalyst) are now tracked in a `.conditional` manifest and re-evaluated each IC cycle with Promote/Hold/Drop decisions.

**Agents modified:**
- `portfolio-manager.md` — added `.conditional` to Inputs as a read source alongside `.active`; added "Conditionally Approved" decision outcome to Constraints; added `.conditional` manifest to Library Structure; added "On Conditionally Approving a Pitch" section with file-copy and manifest-update steps mirroring the approval flow; added "Conditional Thesis Review (Draft Round)" section with Promote/Hold/Drop lifecycle and WebSearch catalyst checks; added "Conditional Thesis Review" to required IC memo sections in Output

