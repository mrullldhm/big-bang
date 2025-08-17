import { writeFileSync } from "node:fs";

const result: string[] = [];

for (let i = 1; i <= 100; i++) {
  let tale = "";
  if (i % 3 == 0) tale += "BIG";
  if (i % 5 == 0) tale += "BANG";
  result.push(tale || String(i));
}

writeFileSync("output.json", JSON.stringify(result), "utf8");
console.log("Wrote output.json (1..100)");
