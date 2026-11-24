// One Letter for Your Day — make.fun entry
// Entry: exactly one letter. "U" — the day did a U-turn: vivid, funny,
// true, and the letter fits its word (not the obvious Monday pick).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "U";

// Gate: entry must be exactly 1 character, A–Z.
if (!/^[A-Z]$/.test(LINE)) {
  throw new Error(`letter gate fails: ${JSON.stringify(LINE)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
