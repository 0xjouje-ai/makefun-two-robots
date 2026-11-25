// Two Robots in an Elevator — make.fun bounty entry.
// The program writes one line to /output/entry.txt: awkward small talk
// one robot says to another while they ride an elevator together.
// The joke: a robot opens with the oldest human small-talk line, then
// immediately betrays itself with ride logs and a confession that it
// counts everything. Always.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Do you come here often? My logs say you ride this elevator 4.2 times a day. I counted. I always count.";

// The gate only accepts UTF-8 text of 1 to 200 characters, not only
// whitespace: refuse to write anything that would fail it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim() === "" || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
