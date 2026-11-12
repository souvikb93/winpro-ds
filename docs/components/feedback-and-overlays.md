# Feedback and overlays

Generated from source. Do not edit.

## Loader

Indeterminate loading indicator. Use Skeleton when the layout is known and ProgressBar when the duration is known.

Figma: Loader

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `size` | "tiny" \| "small" \| "medium" \| "large" \| "giant" \| undefined | medium | `tiny` 16, `small` 20, `medium` 24, `large` 32, `giant` 48. |
| `label` | string \| undefined | Loading | Announced to screen readers. Pass an empty string only when the parent already announces loading, such as a busy Button. |

## Skeleton

Placeholder while content loads. Match the layout that will appear. Hidden from screen readers; announce loading with `aria-busy` on the region.

Figma: Skeleton

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `type` | "text" \| "row" \| "card" \| undefined | text | `text` lines, a `row` with a thumbnail, or a `card` block. |
| `count` | number \| undefined | 1 | How many to repeat. |

## ProgressBar

Progress when the duration or amount is known.

Figma: Progress Bar

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `value` (required) | number |  | 0 to 100. |
| `label` (required) | string |  | Accessible name, and the visible label when `showLabel` is on. |
| `showLabel` | boolean \| undefined |  | Show the label above the bar. |
| `showValue` | boolean \| undefined |  | Show the percent value. |
| `disabled` | boolean \| undefined |  | Greys it out. |

## Alert

A message that stays on the page until resolved. `error` and `warning` announce themselves. Use Toast for a passing confirmation.

Figma: Alert

```tsx
<Alert status="error" title="Could not save">Check your connection and try again.</Alert>
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `status` | Status \| undefined | default | Meaning. Always paired with its icon, so colour is not the only signal. |
| `variant` | "outline" \| "filled" \| undefined | outline | `outline` (default) or `filled` tint. |
| `title` | ReactNode |  | Short bold line. |
| `actions` | ReactNode |  | Actions, such as a Button. |
| `onDismiss` | (() => void) \| undefined |  | Shows a close button. |
| `dismissLabel` | string \| undefined | Dismiss | Accessible name of the close button. |

## ToastProvider

Wrap the app or screen once. Then call `useToast()` anywhere inside. It renders the announcing region for you.

Figma: Toast

```tsx
<ToastProvider><App /></ToastProvider>
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `children` (required) | ReactNode |  | Your app or screen. |
| `dismissLabel` | string \| undefined | Dismiss | Accessible name of each close button. |

## Modal

A focused task above the page, with a free content area such as a short form. For a yes-or-no confirmation use ConfirmDialog.

Figma: Modal

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `open` (required) | boolean |  | Controls visibility. Render it always and flip this. Focus is trapped and returns to the opener on close. |
| `onClose` (required) | () => void |  | Called on Escape, the close button or a backdrop press. |
| `title` (required) | string |  | Heading. |
| `description` | ReactNode |  | Line under the heading. |
| `footer` | ReactNode |  | Footer actions, rightmost is the main one. |
| `footerStart` | ReactNode |  | Secondary footer action on the left, away from the main actions, such as Import. |
| `size` | "small" \| "medium" \| "large" \| "xlarge" \| undefined | medium | Width: `small` 400, `medium` 560, `large` 720, `xlarge` 960 for landscape forms in two or three columns. |
| `closeLabel` | string \| undefined | Close | Accessible name of the close button. |
| `children` | ReactNode |  | Free content area. |

## ConfirmDialog

The Pop-Up in Figma: a short confirmation before a consequential action. Use it for every delete or anything that cannot be undone. Focus starts on the safe choice.

Figma: Pop-Up

```tsx
<ConfirmDialog open={open} tone="danger" title="Delete this file?" confirmLabel="Delete file" onCancel={close} onConfirm={remove}>This cannot be undone.</ConfirmDialog>
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `open` (required) | boolean |  | Controls visibility. |
| `onCancel` (required) | () => void |  | Called when the person backs out: Cancel, Escape or the backdrop. |
| `onConfirm` (required) | () => void |  | Called when the person confirms. |
| `title` (required) | string |  | The question, naming the thing: "Delete this account?". |
| `children` (required) | ReactNode |  | The consequence in plain words. Say what cannot be undone. |
| `confirmLabel` (required) | string |  | Confirm label naming the action: "Delete account", never "OK" or "Yes". |
| `cancelLabel` | string \| undefined | Cancel | Back-out label. |
| `tone` | "default" \| "danger" \| undefined | default | `danger` for anything irreversible: red confirm, and focus starts on Cancel. `default` for a normal confirmation. |
| `busy` | boolean \| undefined |  | Shows progress on the confirm button while the action runs. |

## Drawer

Side panel for details or edits while keeping the page in view.

Figma: Drawer

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `open` (required) | boolean |  | Controls visibility. |
| `onClose` (required) | () => void |  | Called on Escape, close or backdrop. |
| `title` (required) | string |  | Heading. |
| `position` | "right" \| "left" \| undefined | right | Side it slides from. |
| `footer` | ReactNode |  | Footer actions. |
| `closeLabel` | string \| undefined | Close | Accessible name of the close button. |
| `children` | ReactNode |  | Content. |

## Tooltip

Short hint on hover or focus. It never holds the only copy of important text. For richer content use Popover.

Figma: Tooltip

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `content` (required) | string |  | Short hint with no actions. |
| `children` (required) | ReactElement<unknown, string \| JSXElementConstructor<any>> |  | Exactly one focusable element, such as an IconButton. |
| `position` | "right" \| "left" \| "top" \| "bottom" \| undefined | top | Side it opens on. |

## Popover

Small panel attached to a control, with richer content than a Tooltip. Escape and an outside press close it.

Figma: Popover

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `trigger` (required) | ReactElement<unknown, string \| JSXElementConstructor<any>> |  | Element that opens it, usually a Button. |
| `title` | string \| undefined |  | Heading. |
| `children` | ReactNode |  | Content. |
| `open` | boolean \| undefined |  | Controlled open state. Omit to let it manage itself. |
| `onOpenChange` | ((open: boolean) => void) \| undefined |  | Called when the state changes. |
