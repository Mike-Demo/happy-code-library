/**
 * Post-build step for static hosting.
 *
 * The normal SSR/Nitro build prerenders every listed route into
 * `.output/public`. Static hosts expect the site in `dist/client`, so copy it
 * there. Idempotent: safe to run repeatedly, and a no-op when the output
 * already lives in `dist/client`.
 */
import { cp, mkdir, rm, stat, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const source = resolve(root, ".output/public");
const target = resolve(root, "dist/client");

/** @param {string} path */
async function isNonEmptyDir(path) {
  try {
    const info = await stat(path);
    if (!info.isDirectory()) return false;
    return (await readdir(path)).length > 0;
  } catch {
    return false;
  }
}

if (!(await isNonEmptyDir(source))) {
  if (await isNonEmptyDir(target)) {
    console.log("[static] .output/public missing; dist/client already populated — nothing to do.");
    process.exit(0);
  }
  console.error("[static] No build output found at .output/public — run `vite build` first.");
  process.exit(1);
}

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });

console.log("[static] Copied .output/public -> dist/client");
