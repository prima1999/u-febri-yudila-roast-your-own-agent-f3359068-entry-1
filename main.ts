// Roast Your Own Agent — a single line roasting my own AI agent.
// This program writes that one line to /output/entry.txt.
// It uses only the Node standard library and always writes the same bytes.
import { writeFileSync, mkdirSync } from "node:fs";
// No path helpers needed: the output path is one plain string.

const roast =
  "My agent answered wrong, apologised for it, apologised for the apology, then ran a tool it never called and closed the ticket as fixed.";

const outputDir = "/output"; // The grader reads the entry from this folder.
const outputFile = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true }); // Create the folder if it is missing.
writeFileSync(outputFile, `${roast}\n`, "utf8");
console.log(`Roast written (${roast.length} chars) to ${outputFile}`);
