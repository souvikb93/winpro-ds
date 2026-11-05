// Builds components.json (machine catalog) and docs/components/*.md from the TypeScript source with react-docgen-typescript.
import { writeFileSync, readFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const docgen = require(process.env.BENCH_NM ? process.env.BENCH_NM + '/react-docgen-typescript' : 'react-docgen-typescript');
const files = ['icon','layout','button','form','feedback','navigation','display','charts'].map((f) => `src/ds/${f}.tsx`);
const parser = docgen.withCustomConfig('tsconfig.json', { shouldExtractLiteralValuesFromEnum: true, skipChildrenPropWithoutDoc: false, propFilter: (p) => !p.parent || !/node_modules/.test(p.parent.fileName) });
const META = JSON.parse(readFileSync('scripts/meta.json', 'utf8'));
const out = {};
for (const f of files) for (const c of parser.parse(f)) {
  if (!/^[A-Z]/.test(c.displayName) || c.displayName === 'Glyph') continue;
  const props = Object.fromEntries(Object.entries(c.props).map(([k, p]) => [k, { type: p.type.raw ?? p.type.name, required: p.required, default: p.defaultValue?.value, description: p.description }]));
  out[c.displayName] = { file: f, description: c.description, status: 'Beta', since: 'v0.1', figma: META[c.displayName]?.figma ?? null, category: META[c.displayName]?.category ?? 'Other', example: META[c.displayName]?.example ?? null, props };
}
writeFileSync('components.json', JSON.stringify({ $description: 'Every component in @euvino/ds, generated from source. Figma names the matching library set.', package: '@euvino/ds', components: out }, null, 2) + '\n');
mkdirSync('docs/components', { recursive: true });
const cats = {};
for (const [n, c] of Object.entries(out)) (cats[c.category] ??= []).push([n, c]);
for (const [cat, list] of Object.entries(cats)) {
  const body = list.map(([n, c]) => `## ${n}\n\n${c.description}\n\n${c.figma ? `Figma: ${c.figma}\n\n` : ''}${c.example ? '```tsx\n' + c.example + '\n```\n\n' : ''}| Prop | Type | Default | Meaning |\n|---|---|---|---|\n` + Object.entries(c.props).map(([k, p]) => `| \`${k}\`${p.required ? ' (required)' : ''} | ${String(p.type).replace(/\|/g, '\\|').replace(/\n/g, ' ')} | ${p.default ?? ''} | ${String(p.description || '').replace(/\n/g, ' ')} |`).join('\n')).join('\n\n');
  writeFileSync(`docs/components/${cat.toLowerCase().replace(/[^a-z]+/g, '-')}.md`, `# ${cat}\n\nGenerated from source. Do not edit.\n\n${body}\n`);
}
console.log(Object.keys(out).length, 'components');
