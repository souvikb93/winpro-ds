import { readFileSync } from 'node:fs';
const root = new URL('..', import.meta.url).pathname;
const read = (p) => readFileSync(root + p, 'utf8');
export const catalog = () => JSON.parse(read('components.json')).components;
export const list = () => Object.entries(catalog()).map(([n, c]) => `${n} [${c.category}]: ${c.description.split('. ')[0]}`).join('\n');
export function describe(name) {
  const cat = catalog(); const k = Object.keys(cat).find((n) => n.toLowerCase() === String(name).toLowerCase());
  if (!k) return `Unknown component "${name}". See docs/names.md for names from other libraries.`;
  const c = cat[k];
  return `${k}: ${c.description}\nFigma: ${c.figma ?? 'none'}\nimport { ${k} } from '@euvino/ds';\n${c.example ? `Example: ${c.example}\n` : ''}Props:\n` + Object.entries(c.props).map(([p, d]) => `  ${p}${d.required ? ' (required)' : ''}: ${String(d.type).replace(/\n/g, ' ')}${d.default ? ` = ${d.default}` : ''}. ${d.description}`).join('\n');
}
export function token(words) {
  const q = String(words).toLowerCase().split(/\s+/).filter(Boolean);
  const lines = read('src/styles/tokens.css').split('\n').filter((l) => /^\s*--eu-(?!prim|ramp)/.test(l));
  const hits = lines.filter((l) => q.every((w) => l.toLowerCase().includes(w))).map((l) => l.trim());
  return hits.length ? hits.join('\n') : 'No token matches. Do not invent one: say what is missing.';
}
export function check(path) {
  const src = readFileSync(path, 'utf8'); const out = [];
  const bad = [[/#[0-9a-fA-F]{3,8}\b/, 'raw hex colour'], [/\brgba?\(/, 'raw rgb colour'], [/\d(px|rem)\b/, 'raw size'], [/<(button|input|select|textarea|table|dialog)\b/, 'raw control: use a component'], [/window\.confirm|\bconfirm\(/, 'browser confirm: use ConfirmDialog'], [/display:\s*['"]?flex/, 'hand-written flex: use Stack']];
  src.split('\n').forEach((l, i) => { for (const [re, m] of bad) if (re.test(l)) out.push(`${path}:${i + 1} ${m}: ${l.trim().slice(0, 80)}`); });
  const imp = [...src.matchAll(/from\s+['"]([^'"]+)['"]/g)].map((m) => m[1]).filter((m) => !/^(react|react-dom|@euvino\/ds|\.)/.test(m));
  imp.forEach((m) => out.push(`${path}: foreign import ${m}`));
  const known = new Set(Object.keys(catalog()));
  const ds = src.match(/import\s*\{([^}]+)\}\s*from\s*['"]@euvino\/ds['"]/);
  if (ds) ds[1].split(',').map((x) => x.trim().replace(/^type\s+/, '').split(' ')[0]).filter((x) => /^[A-Z]/.test(x) && !/Props$|Option$|Column$|Def$|Item$|Name$|Status$|Datum$|Style$|Tone$/.test(x)).forEach((x) => { if (!known.has(x)) out.push(`${path}: ${x} is not exported by @euvino/ds`); });
  return out.length ? out.join('\n') : 'ok';
}
