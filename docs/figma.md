# Figma to code

File: `eoPfuJuIddL9imDtGiK2oX`. Read it with figma-cli (`scripts/` holds the read-only export), not by copying values.

- Instances become components, mapped in `code-connect/map.json`. Figma Style `Filled|Outline|Clear|CTA|Danger|Danger Outline` is the Button `variant`. Size `Giant...Tiny` is `size`.
- Auto layout frames become `Stack`. `spacing/4` is `gap="4"`.
- Variable `text/error` is `var(--eu-text-error)`, shown as Code Syntax in Figma's Dev Mode.
- Figma `Pop-Up` is `ConfirmDialog`. Figma `Card/*` layouts are all `Card`. Figma `Toggle + Text` is `Toggle` with `label`.
- A value that is no variable, or a layer that is no instance, is a gap. Stop and add it in Figma first.
