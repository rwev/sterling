#!/usr/bin/env node
// Calculate the number of shares needed for each holding given a portfolio value.
// Reads current-holdings.json and fetches live quotes from Yahoo Finance.
//
// Usage: node scripts/calculate-shares.mjs <portfolio_value>
// Example: node scripts/calculate-shares.mjs 100000

import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const HOLDINGS_PATH = join(__dirname, "..", "artifacts", "bookkeeping", "current-holdings.json");
const OUTPUT_PATH = join(__dirname, "..", "artifacts", "bookkeeping", "target-shares.json");

const portfolioValue = parseFloat(process.argv[2]);
if (!portfolioValue || portfolioValue <= 0) {
  console.error("Usage: node scripts/calculate-shares.mjs <portfolio_value>");
  process.exit(1);
}

const holdings = JSON.parse(readFileSync(HOLDINGS_PATH, "utf-8"));

async function fetchPrice(ticker) {
  try {
    const res = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?range=1d&interval=1d`
    );
    const data = await res.json();
    const price = data?.chart?.result?.[0]?.meta?.regularMarketPrice;
    if (price && price > 0) return price;
  } catch {}
  return null;
}

async function main() {
  const tickers = holdings.holdings.map((h) => h.ticker);
  console.log(`Fetching live quotes for: ${tickers.join(", ")}`);

  // Fetch all prices in parallel
  const priceResults = await Promise.all(
    holdings.holdings.map(async (h) => {
      const live = await fetchPrice(h.ticker);
      return {
        ticker: h.ticker,
        price: live ?? h.current_price,
        source: live ? "live" : "memo",
      };
    })
  );

  const priceMap = Object.fromEntries(priceResults.map((p) => [p.ticker, p]));

  const cashValue = round2(portfolioValue * holdings.cash_pct / 100);

  const positions = holdings.holdings.map((h) => {
    const { price, source } = priceMap[h.ticker];
    const targetValue = round2(portfolioValue * h.allocation_pct / 100);
    const shares = Math.floor(targetValue / price);
    const actualValue = round2(shares * price);
    return {
      ticker: h.ticker,
      allocation_pct: h.allocation_pct,
      price: round2(price),
      price_source: source,
      shares,
      target_value: targetValue,
      actual_value: actualValue,
    };
  });

  const totalInvested = round2(positions.reduce((s, p) => s + p.actual_value, 0));
  const remainder = round2(portfolioValue - totalInvested - cashValue);

  const output = {
    portfolio_value: portfolioValue,
    as_of: holdings.as_of,
    cycle: holdings.cycle,
    cash_reserve: cashValue,
    positions,
    total_invested: totalInvested,
    rounding_remainder: remainder,
  };

  writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2) + "\n");

  // Print table
  console.log(`\nPortfolio value: $${portfolioValue.toLocaleString()}`);
  console.log(`Cash reserve:    $${cashValue.toLocaleString()}\n`);
  console.log(
    pad("TICKER", 8) + pad("ALLOC%", 9) + pad("PRICE", 12) + pad("SHARES", 9) + pad("VALUE", 14)
  );
  console.log(
    pad("------", 8) + pad("------", 9) + pad("----------", 12) + pad("------", 9) + pad("------------", 14)
  );
  for (const p of positions) {
    console.log(
      pad(p.ticker, 8) +
        pad(p.allocation_pct.toString(), 9) +
        pad(p.price.toFixed(2), 12) +
        pad(p.shares.toString(), 9) +
        pad(p.actual_value.toFixed(2), 14)
    );
  }
  console.log(`\nOutput written to: ${OUTPUT_PATH}`);
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

function pad(s, w) {
  return s.padEnd(w);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
