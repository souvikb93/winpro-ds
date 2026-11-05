---
name: ds-implement
description: Build or change any screen, form, section or component with the EuvinoPRO design system (@euvino/ds). Use for every UI task, including confirmations, settings, forms, status, empty states and feedback.
---

# Build UI with @euvino/ds

1. Read `AGENTS.md`: the build order, hard rules and the "Which component to use" table.
2. Open the guide for the task: `docs/recipes/destructive-confirmation.md` (delete, cancel, anything irreversible), `docs/recipes/forms.md` (validation), `docs/recipes/settings.md` (toggles, status rows), `docs/recipes/async-states.md` (loading, empty, error, bulk, unsaved changes). Layout: `docs/foundations/layout.md`.
3. Check every component's real props before using it: `npm run ds -- describe <Name>` or `docs/components/`. Never guess a prop.
4. Compose with `Stack` and `Text`. No raw values, no raw controls, no other UI packages.
5. Run `npm run ds -- check <file>` and fix everything it reports.
