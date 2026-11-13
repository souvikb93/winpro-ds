#!/usr/bin/env node
// MCP server over stdio: list, describe, token, check. Same answers as the CLI.
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { list, describe, token, check } from './ds-lib.mjs';
const s = new McpServer({ name: 'euvinopro-ds', version: '0.1.0' });
const text = (t) => ({ content: [{ type: 'text', text: t }] });
s.tool('ds_list', 'List every component', {}, async () => text(list()));
s.tool('ds_describe', 'Import, props and example for one component', { name: z.string() }, async ({ name }) => text(describe(name)));
s.tool('ds_token', 'Find a token by words', { words: z.string() }, async ({ words }) => text(token(words)));
s.tool('ds_check', 'Check a file for raw values, raw controls and foreign imports', { path: z.string() }, async ({ path }) =>
  text(check(path)),
);
await s.connect(new StdioServerTransport());
