/**
 * A file may import a CSS file only from its own folder.
 * The one exception is Base.astro, which loads the shared theme.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const importRe = /import\s+['"]([^'"]+\.css)['"]/g;

function filesUnder(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) filesUnder(path, out);
    else if (/\.(astro|ts|js|mjs)$/.test(name)) out.push(path);
  }
  return out;
}

const hits = [];
for (const path of filesUnder(join(root, 'src'))) {
  const rel = relative(root, path);
  const text = readFileSync(path, 'utf8');
  for (const match of text.matchAll(importRe)) {
    const spec = match[1];
    const cssPath = resolve(dirname(path), spec);
    const cssRel = relative(root, cssPath);
    if (rel === 'src/layouts/Base.astro' && cssRel === 'src/styles/theme.css') continue;
    if (dirname(path) !== dirname(cssPath)) {
      hits.push(`${rel} imports ${spec}, which is outside its folder`);
    }
  }
}

if (hits.length) {
  console.error(hits.join('\n'));
  process.exit(1);
}

console.log('css imports stay in their own folder');
