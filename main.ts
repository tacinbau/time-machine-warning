import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest Time Machine Warning Label — 81 characters.
// Turns the grandfather paradox into the joke, keeps a straight
// official face, and saves the punchline for the last few words.
const label =
  "WARNING: Do not kill your grandfather. HR has already processed your termination.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (label.length === 0 || label.length > 120) {
  throw new Error(`label must be 1-120 characters, got ${label.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), label, "utf8");
console.log(label);
