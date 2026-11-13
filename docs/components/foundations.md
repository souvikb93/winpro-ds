# Foundations

Generated from source. Do not edit.

## Icon

Draws one icon from the system's Iconoir set. It takes the surrounding text colour. Import icons through this, never from an icon package.

Figma: Brand & Icons (Iconoir)

```tsx
<Icon name="trash" size="sm" />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `name` (required) | "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| "cloud-sync" \| "copy" \| "download" \| "edit" \| "eye" \| "eye-off" \| "globe" \| ... 62 more ... \| "underline" |  | Which icon to draw, in Iconoir naming: `trash`, `check`, `warning-triangle`, `close`. |
| `size` | "xs" \| "sm" \| "md" \| "lg" \| undefined | md | Size token: `xs` 12, `sm` 16, `md` 20, `lg` 24. |
| `label` | string \| undefined |  | Accessible name. Leave empty when the icon is decoration next to text; it is then hidden from screen readers. |
| `className` | string \| undefined |  | Extra class on the svg. The colour comes from the surrounding text colour. |

## Stack

Lays out a row or column with a space token between children. Use it instead of hand-written flex and margins. It is the code form of auto layout in Figma.

Figma: Auto layout

```tsx
<Stack direction="horizontal" gap="2" justify="end">...</Stack>
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `direction` | "vertical" \| "horizontal" \| undefined | vertical | `vertical` for a column (default), `horizontal` for a row. |
| `gap` | SpaceToken \| undefined | 4 | Space token between children, from `spacing/*`: form fields `4`, button rows `2`, page sections `8`. |
| `noValidate` | boolean \| undefined |  | With `as="form"`: turn off browser validation bubbles so field `error` messages show instead. |
| `padding` | SpaceToken \| undefined |  | Padding from the same space tokens. |
| `align` | "start" \| "center" \| "end" \| "stretch" \| "baseline" \| undefined |  | Cross-axis alignment. |
| `justify` | "start" \| "center" \| "end" \| "between" \| undefined |  | Main-axis distribution. `between` pushes children to both ends. |
| `wrap` | boolean \| undefined |  | Wrap children onto new lines when they do not fit. |
| `as` | ElementType<any, keyof IntrinsicElements> \| undefined | div | Which element to render, such as `section`, `form` or `ul`. |

## Text

Any text set in a library text style and colour token. Use it for headings, paragraphs and captions instead of raw font sizes.

Figma: Text styles

```tsx
<Text variant="h3">Title</Text>
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `variant` | TextStyle \| undefined | body | Text style from the library. `h1` to `h6` are Roboto Condensed Bold; everything else is Roboto. `caption-medium` is the field-label style (13 medium), for headings that sit among form fields. |
| `tone` | TextTone \| undefined |  | Colour token. Defaults to `primary` for headings and `body` for reading text. |
| `as` | ElementType<any, keyof IntrinsicElements> \| undefined |  | Element to render when it should differ from the style's default, such as an `h2` styled as `h4`. |

## VisuallyHidden

Text for screen readers only, such as a table caption or a live status line.

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `children` (required) | ReactNode |  | Text only screen readers should announce. |
