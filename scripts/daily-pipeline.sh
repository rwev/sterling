#!/usr/bin/env bash

# Sterling weekly pipeline — runs /work via Claude Code once per week.
# Schedule: 6:00 PM ET (America/New_York) every Sunday.
#
# ── Managing the cron job ──────────────────────────────────────────────
#
# INSTALL / ENABLE
#   Run this script with --install to print the crontab entry:
#     ./scripts/daily-pipeline.sh --install
#   Then open your crontab and paste the output:
#     crontab -e
#
# VIEW
#   List all active cron jobs:
#     crontab -l
#
# DISABLE (temporary)
#   Open your crontab and comment out the pipeline line with #:
#     crontab -e
#   The job will stop running but remains easy to re-enable later.
#
# RE-ENABLE
#   Open your crontab and remove the # comment:
#     crontab -e
#
# REMOVE (permanent)
#   Open your crontab and delete the pipeline line:
#     crontab -e
#   Or remove all cron jobs (use with caution):
#     crontab -r
#
# CHANGE SCHEDULE
#   Edit the cron expression in your crontab. The five fields are:
#     minute  hour  day-of-month  month  day-of-week
#   Current: "0 18 * * 0" = 6:00 PM every Sunday
#   Examples:
#     0 18 * * 1-5    = 6:00 PM Mon-Fri (weekdays)
#     0 9 * * 6,0     = 9:00 AM Sat & Sun
#     0 18 1,15 * *   = 6:00 PM on the 1st and 15th of each month
#
# RUN MANUALLY
#   Execute the pipeline on-demand without waiting for the schedule:
#     ./scripts/daily-pipeline.sh
#
# LOGS
#   Per-run output:  logs/pipeline-YYYY-MM-DD.log
#   Cron wrapper log: logs/cron.log
# ───────────────────────────────────────────────────────────────────────

set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
LOG_DIR="$REPO_DIR/logs"
LOG_FILE="$LOG_DIR/pipeline-$(date +%Y-%m-%d).log"

if [ "${1:-}" = "--install" ]; then
    SCRIPT_PATH="$(cd "$(dirname "$0")" && pwd)/daily-pipeline.sh"
    # 6 PM ET = 23:00 UTC (EST) or 22:00 UTC (EDT). Use TZ to let cron handle it.
    echo "Add this line to your crontab (crontab -e):"
    echo ""
    echo "CRON_TZ=America/New_York"
    echo "0 18 * * 0 $SCRIPT_PATH >> $LOG_DIR/cron.log 2>&1"
    exit 0
fi

mkdir -p "$LOG_DIR"

echo "=== Sterling pipeline — $(date -u '+%Y-%m-%d %H:%M UTC') ===" | tee -a "$LOG_FILE"

cd "$REPO_DIR"
claude -p --verbose "/work" >> "$LOG_FILE" 2>&1
EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]; then
    echo "Pipeline completed successfully." | tee -a "$LOG_FILE"
else
    echo "Pipeline exited with code $EXIT_CODE." | tee -a "$LOG_FILE"
fi

exit $EXIT_CODE
