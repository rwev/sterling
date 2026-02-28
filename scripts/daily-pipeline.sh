#!/usr/bin/env bash

# Sterling daily pipeline — runs /work via Claude Code once per day.
# Install: crontab -e, then add the line printed by: ./scripts/daily-pipeline.sh --install
#
# Schedule: 6:00 PM ET (America/New_York) every weekday (Mon-Fri).

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
    echo "0 18 * * 1-5 $SCRIPT_PATH >> $LOG_DIR/cron.log 2>&1"
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
