# Tokens

Use `var(--eu-*)` only when no component prop fits. Full list: `tokens.json`, `src/styles/tokens.css`, or `npm run ds -- token <words>`.

- **Surface:** `--eu-bg-page` (screen), `--eu-bg-surface` (cards), `--eu-bg-muted`, `--eu-bg-accent-subtle` (selected), `--eu-bg-inverse`.
- **Text:** `--eu-text-primary`, `--eu-text-body`, `--eu-text-muted`, `--eu-text-link`, `--eu-text-inverse`, `--eu-text-disabled`.
- **Status text and icons:** `--eu-text-success`, `--eu-text-info`, `--eu-text-warning`, `--eu-text-error`.
- **Status fills and borders only:** `--eu-status-success`, `--eu-status-warning`, `--eu-status-error`, `--eu-status-info` and their `-subtle` tints. They fail contrast as text.
- **Borders:** `--eu-border-default` (hairline), `--eu-border-strong` (dividers), `--eu-border-control` (inputs), `--eu-border-focus`.
- **Actions:** `--eu-action-secondary` (violet accent), `--eu-action-primary` (orange CTA, dark label), `--eu-action-danger`.
- **Space:** `--eu-spacing-1` 4, `-2` 8, `-3` 12, `-4` 16, `-6` 24, `-8` 32, `-12` 48. Half steps: `-0-5`, `-1-5`, `-2-5`.
- **Radius:** `--eu-radius-default` small parts, `-lg` controls, `-xl` cards and dialogs, `-full` pills.
- **Shadow:** `--eu-shadow-sm` rows, `-md` menus, `-lg` toasts, `-2xl` dialogs.
- **Never** use `--eu-prim-*` or `--eu-ramp-*` in product code. Never change an existing colour value.
