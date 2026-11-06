/**
 * Names are written only in src/core/identity.ts.
 * Bio sentences in bio.data.ts may still say the name, because that copy is fixed.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const allow = new Set([
  'src/core/identity.ts',
  'src/modules/about/bio.data.ts',
]);
const needles = ['Yu Fu', 'Yuzu', 'YUZU', '傅宇', 'ユズ', 'zh-Hant'];

function filesUnder(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) filesUnder(path, out);
    else if (name.endsWith('.ts') || name.endsWith('.astro')) out.push(path);
  }
  return out;
}

const hits = [];
for (const path of filesUnder(join(root, 'src'))) {
  const rel = relative(root, path);
  if (allow.has(rel)) continue;
  const lines = readFileSync(path, 'utf8').split('\n');
  lines.forEach((line, index) => {
    for (const needle of needles) {
      if (line.includes(needle)) hits.push(`${rel}:${index + 1} still writes ${JSON.stringify(needle)}`);
    }
  });
}

if (hits.length) {
  console.error(hits.join('\n'));
  process.exit(1);
}

console.log('identity literals stay in src/core/identity.ts');
