#!/usr/bin/env node
import { list, describe, token, check } from './ds-lib.mjs';
const [cmd, ...a] = process.argv.slice(2);
const run = { list, describe: () => describe(a[0]), token: () => token(a.join(' ')), check: () => check(a[0]) }[cmd];
if (!run) {
  console.log('Usage: npm run ds -- list | describe <Name> | token <words> | check <file>');
  process.exit(cmd ? 1 : 0);
}
const r = run();
console.log(r);
if (cmd === 'check' && r !== 'ok') process.exit(1);
