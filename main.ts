import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "On the greenhouse bench, a copper can leans between two terracotta pots, still dripping onto the stone. One soil dark and wet, the other pale and dry. A trowel cools beside seeds spilled, not yet covered";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
