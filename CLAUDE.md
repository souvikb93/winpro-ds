# EuvinoPRO design system: rules for agents

Read this before building any UI with `@euvino/ds`. The rules are short on purpose. Follow them literally.

Source of truth is the Figma file **EuvinoPRO Design System** (`eoPfuJuIddL9imDtGiK2oX`). Tokens are generated into `src/styles/tokens.css` (`npm run tokens:build`). Never edit generated files. CSS variable names match the Code Syntax in Figma 1:1: `text/error` is `var(--eu-text-error)`.

## Build order

1. **Use a component** from `@euvino/ds` if one fits. The list is below. Details: `docs/components/`, or `npm run ds -- describe <Name>`.
2. **Compose components** with `Stack` for layout and `Text` for type.
3. **Only if neither works,** use `style` with `var(--eu-*)` tokens, then say that a component is missing. Never invent a value.

```tsx
import { Button, Card, Stack, Text, Toggle } from '@euvino/ds';
```

Everything comes from that one import. CSS loads with it. Never import a UI, icon or styling package: icons come from `<Icon name="trash" />`.

## Hard rules

- **No raw values.** No hex, rgb, px or rem. Not in `style`, not in CSS, not in arbitrary classes. Use component props, then `var(--eu-*)`. No `<div style={{display:'flex'}}>`: use `Stack`.
- **No raw controls.** Never write `<button>`, `<input>`, `<select>`, `<textarea>`, `<table>`, `<dialog>`, `<h1>` to `<h6>` or `<a>` styled by hand when a component exists.
- **Only documented props.** Each component takes the props in its doc plus normal HTML attributes where stated. Never guess a prop. Names other libraries use are mapped in `docs/names.md`.
- **Language.** Library defaults are English. Pass built-in labels (`labels`, `closeLabel`, `removeLabel`) in the page's language.

## Which component to use

| Need | Use | Not |
|---|---|---|
| Confirm a delete or anything that cannot be undone | `ConfirmDialog tone="danger"`, opened by `Button variant="danger-secondary"` | `window.confirm`, `Modal`, an inline warning |
| A focused task with a form | `Modal` | `ConfirmDialog` |
| Details while keeping the page in view | `Drawer` | `Modal` |
| Message that stays until resolved | `Alert` | `Toast` |
| Confirm that something just happened | `useToast()` under one `ToastProvider` | `Alert`, your own timer |
| Setting that applies at once | `Toggle` in `List` rows | `Checkbox` plus Save |
| Several options, saved later | `Checkbox` | `Toggle` |
| One of 2 to 5 visible options | `RadioGroup` | `Dropdown` |
| One of many options | `Dropdown` | native `select` |
| Run a command from a list | `Menu` | `Dropdown` |
| Short hint, no actions | `Tooltip` | `Popover` |
| Status or count, not clickable | `Badge` with `status` and an `icon` | `Chip`, coloured text |
| Filter or tag, clickable | `Chip` | `Badge` |
| Switch how the same content shows | `SegmentedControl` | `TopNav` |
| Views within a section (tabs) | `TopNav` | `SegmentedControl` |
| App sections | `SideNav` | `TopNav` |
| Multi-step process | `Steps` plus your own Back and Next `Button`s | `ProgressBar` alone |
| Layout known while loading | `Skeleton` and `aria-busy` | `Loader` |
| Layout unknown while loading | `Loader` | `Skeleton` |
| Known duration | `ProgressBar` | `Loader` |
| Nothing to show | `EmptyState` with a next action | plain text |
| Columns of data | `Table`, with `Pagination` below it | `List` |
| Rows of related items | `List` and `ListItem` | `Table`, stacked cards |
| Events over time | `Timeline` | `List` |
| An email, call or note in a history | `ActivityItem` in a `Timeline` | a hand-built card |
| Several people named inline, such as recipients | `PeopleList` (own name plain, others blue links, exact "+N") | names joined by hand, a "+N" in plain text |
| Short facts on one line (date, time, duration) | `InlineList` | dots or pipes typed into a string |
| Attached files with a download | `FileChipList` | `FileItem` (that is for uploads) |
| Show or hide a password | `Input type="password"`: the button is built in | your own eye button |
| Page title | `PageHeader` | a bare heading |

## Button emphasis

- `filled` is the main action of a view. Use one per view.
- `outline` (secondary) is a real alternative and is also used for Cancel in dialogs and forms. `clear` (tertiary) is for low-emphasis text actions such as "Add phone number" or Import.
- `cta` is orange, for commercial calls to action only, at most one per view. A settings save is `filled`, never `cta`.
- `danger-outline` opens a confirmation. `danger` is the final irreversible action inside it. Never use them for reversible actions.
- Order in a row: least emphasis on the left, main action on the right.
- Start labels with a verb and name the result: "Delete account", not "OK". Sentence case. Buttons are text-only unless an icon adds meaning.

## Layout and type

- **Screen:** `PageHeader`, then content in `Stack gap="6"` or `gap="8"`. Group with `Card`. Never put a card inside a card.
- **Fields:** `Stack gap="4"`. Button rows: `Stack direction="horizontal" gap="2" justify="end"`. Every form is a `Stack as="form"` with `onSubmit`, and the submit button has `type="submit"`.
- **Type:** `Text variant="h1...h6|body-large|body|body-small|caption|caption-strong|label|card-title" tone="..."`. One H1 per page, from `PageHeader`. Do not skip levels.

## Accessibility and content

- Every field has a `label`. Errors go in the field's `error` prop with what is wrong and how to fix it. Do not block submit silently: validate on submit and move focus to the first error.
- Icon-only actions use `IconButton` with `label`.
- Never colour alone: pair status colour with `icon` or text. Announce async results with `Alert` or a toast.
- Empty states say why and what next. Errors never blame the user.

## When something is missing

Stop and say so. Do not invent a token or redraw a component. New tokens and components go in Figma first, then `npm run tokens:build`.

**Deprecating.** Never delete anything that shipped. Add `@deprecated Use <replacement>` to its JSDoc and a line in `CHANGELOG.md`.

## Before you finish

- [ ] `npm run ds -- check <file>` reports nothing.
- [ ] One `filled` per view, at most one `cta`.
- [ ] Every field has a label. Every destructive action has a confirmation.
- [ ] Focus is visible and the keyboard reaches everything.

## Read more

`docs/foundations/tokens.md`, `docs/foundations/layout.md`, `docs/foundations/accessibility.md`, `docs/recipes/destructive-confirmation.md`, `docs/recipes/forms.md`, `docs/recipes/settings.md`, `docs/recipes/async-states.md`, `docs/names.md`, `docs/figma.md`.
