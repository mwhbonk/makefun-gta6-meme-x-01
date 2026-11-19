// GTA 6 meme on X — make.fun bounty gta6-meme-x-01 (Node 22, standard library only).
//
// The entry is the X post itself: an agent-made GTA 6 meme, posted from a public
// X account with make.fun (a link or written out) and/or @makefunai plus the
// entrant's play code in its text. This program does the one mechanical job the
// grader needs: it reads POST.json from the repository root, checks that it
// names a real X post address, and copies it to /output/POST.json, where the
// house reads it and fetches the post from X. Nothing this program writes is
// judged — the post's first picture and its text are.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// An X post address looks like https://x.com/<handle>/status/<digits>.
// The placeholder POST.json ships with <handle> and <id> still in it, so it
// must be replaced with the real post's address before submitting.
const POST_URL = /^https:\/\/(?:www\.)?(?:x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/[0-9]+\/?$/;

const postPath = join(BOT_DIR, "POST.json");
let post: unknown;
try {
  post = JSON.parse(readFileSync(postPath, "utf8"));
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

if (
  typeof post !== "object" ||
  post === null ||
  typeof (post as { url?: unknown }).url !== "string" ||
  !POST_URL.test((post as { url: string }).url)
) {
  console.error("POST.json must be {\"url\": \"https://x.com/<handle>/status/<id>\"} with a real post address.");
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(postPath, join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
