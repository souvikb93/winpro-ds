# Accessibility

- **Contrast:** text 4.5:1, icons and large text 3:1, control boundaries 3:1. Disabled is exempt.
- **Focus:** components draw a visible teal ring from `--eu-border-focus`. Never remove it.
- **Targets:** at least 24 (`size="tiny"`), prefer 40 (`size="medium"`).
- **Names:** every field has `label`. `IconButton` needs `label`. Table needs `caption`.
- **Status:** never colour alone. Use `Badge icon`, `Alert` (has its icon), or text.
- **Dialogs:** `Modal`, `ConfirmDialog` and `Drawer` use the native dialog: focus is trapped, Escape closes, focus returns.
- **Announce:** `Alert` and toasts announce themselves. For other async results use `Text` inside `role="status"`.
- **Loading:** set `aria-busy` on the region showing `Skeleton`.
- **Motion:** components respect reduced motion.
