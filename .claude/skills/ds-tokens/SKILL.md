---
name: ds-tokens
description: Add or change a token in EuvinoPRO. Use when a value is missing.
---

# Tokens

Add a token only when none fits and two components need it. Add it in Figma with a description, scope and Code Syntax `var(--eu-*)`. Never change an existing colour value without the owner asking. Re-export `figma/export.json`, run `npm run tokens:build`, then update `docs/foundations/tokens.md`.
