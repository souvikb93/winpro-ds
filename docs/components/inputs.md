# Inputs

Generated from source. Do not edit.

## PersonChip

A person in a field or list, such as a participant: avatar (initials or picture), name and a remove button.
Not a filter: use Chip for filters and tags. Grey fill, no stroke; the avatar sits inset on the left.

Figma: Person Chip

```tsx
<PersonChip name="Maximilian Eul" photo={url} onRemove={remove} removeLabel="Maximilian Eul entfernen" />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `name` (required) | string |  | Person's name. Shown, and gives the avatar's initials. |
| `photo` | string \| undefined |  | Picture URL. Without it the avatar shows initials. |
| `suffix` | string \| undefined |  | Extra text after the name, such as "(Sie)". |
| `onRemove` | (() => void) \| undefined |  | Shows the remove button. Leave out for someone who cannot be removed, such as the organiser. |
| `removeLabel` | string \| undefined | Remove | Accessible name of the remove button, such as "Maximilian Eul entfernen". |
| `onClick` | (() => void) \| undefined |  | Opens the person, such as their contact. Makes the name area a button. |
| `size` | "small" \| "medium" \| undefined | medium | `medium` 32 high (default). `small` 28 high with caption text. |
| `disabled` | boolean \| undefined |  |  |

## Dropdown

Choose one value from a list. It opens below the field and supports the arrow keys. To run commands use Menu; for two to four visible choices use Radio or SegmentedControl.

Figma: Dropdown

```tsx
<Dropdown label="Role" value={v} onChange={setV} options={[{value:'admin',label:'Admin'}]} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `options` (required) | DropdownOption[] |  | Options, one row each. |
| `value` | string \| undefined |  | Selected value. |
| `onChange` | ((value: string) => void) \| undefined |  | Called with the picked value. |
| `label` | string \| undefined |  | Visible label. |
| `hideLabel` | boolean \| undefined |  | Keeps the label for screen readers only, for repeated rows where a visible label already sits above. |
| `placeholder` | string \| undefined | Select | Text shown when nothing is selected. |
| `help` | ReactNode |  | Help text. |
| `error` | string \| undefined |  | Error message. |
| `disabled` | boolean \| undefined |  | Blocks interaction. |
| `required` | boolean \| undefined |  | Marks the field as required. |
| `id` | string \| undefined |  | Explicit id for the trigger. |
| `className` | string \| undefined |  | Extra class. |

## RadioGroup

A labelled set of Radio options. Use it for two to five visible choices.

Figma: Radio/Radio + Text

```tsx
<RadioGroup label="Plan" name="plan" value={v} onChange={setV} options={[{value:'a',label:'Basic'}]} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `label` (required) | string |  | Group label, shown as the legend. |
| `name` (required) | string |  | Shared input name. |
| `options` (required) | { value: string; label: ReactNode; description?: string \| undefined; disabled?: boolean \| undefined; }[] |  | Options to show. |
| `value` | string \| undefined |  | Selected value. |
| `onChange` | ((value: string) => void) \| undefined |  | Called with the picked value. |
| `error` | string \| undefined |  | Error message. |
| `horizontal` | boolean \| undefined |  | Lay out in a row. |

## Stepper

Change a small number with plus and minus buttons, such as a quantity.

Figma: Stepper

```tsx
<Stepper label="Quantity" value={n} onChange={setN} min={1} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `value` (required) | number |  | Current number. |
| `onChange` (required) | (value: number) => void |  | Called with the new number. |
| `min` | number \| undefined |  | Lowest value. |
| `max` | number \| undefined |  | Highest value. |
| `step` | number \| undefined | 1 | Change per press. |
| `label` (required) | string |  | Accessible name, such as "Quantity". |
| `labels` | { increase?: string \| undefined; decrease?: string \| undefined; } \| undefined |  | Accessible names of the buttons in the page's language. |
| `variant` | "outline" \| "filled" \| undefined | outline | `filled` or `outline`. |

## Slider

Pick a value on a range. Use Input when an exact number is required.

Figma: Slider

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `label` (required) | string |  | Visible label. |
| `showValue` | boolean \| undefined |  | Show the current value next to the label. |

## FileDropzone

Drag-and-drop area over a real file input. List chosen files with FileItem.

Figma: File Upload/Dropzone

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `onFiles` (required) | (files: File[]) => void |  | Called with the chosen or dropped files. |
| `title` (required) | string |  | Main line, such as "Drop a file here or click to browse". |
| `description` | string \| undefined |  | Accepted types and the size limit, in words. |
| `accept` | string \| undefined |  | Native accept filter, such as ".csv,.xlsx". |
| `multiple` | boolean \| undefined |  | Allow several files. |
| `disabled` | boolean \| undefined |  | Blocks interaction. |
| `error` | string \| undefined |  | Error message. |

## FileItem

One uploaded file with its progress, result and a remove action.

Figma: File Upload/File Item

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `name` (required) | string |  | File name. |
| `meta` | string \| undefined |  | One line of meta: size or what went wrong. |
| `state` | "error" \| "uploading" \| "complete" \| undefined | complete | Upload state. |
| `progress` | number \| undefined |  | Upload progress, 0 to 100, while uploading. |
| `onRemove` | (() => void) \| undefined |  | Shows a remove button. |
| `removeLabel` | string \| undefined | Remove file | Accessible name of the remove button. |

## TagInput

Enter several values as removable tags. Enter or comma adds, Backspace removes the last one.

Figma: Tag Input

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `value` (required) | string[] |  | Current tags. |
| `onChange` (required) | (value: string[]) => void |  | Called with the new list. |
| `label` (required) | string |  | Visible label. |
| `placeholder` | string \| undefined |  | Placeholder for the text field. |
| `help` | string \| undefined |  | Help text. |
| `error` | string \| undefined |  | Error message. |
| `disabled` | boolean \| undefined |  | Blocks interaction. |

## Calendar

Month grid for picking one day. Use DatePicker for the field-plus-calendar pattern.

Figma: Calendar

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `value` | string \| undefined |  | Selected day as ISO `YYYY-MM-DD`. |
| `onChange` | ((iso: string) => void) \| undefined |  | Called with the picked ISO day. |
| `defaultMonth` | string \| undefined |  | First month to show, as ISO. Defaults to the selected day or today. |
| `min` | string \| undefined |  | Earliest day that can be picked, as ISO. |
| `max` | string \| undefined |  | Latest day that can be picked, as ISO. |
| `locale` | string \| undefined | en | BCP 47 locale for month and weekday names. |

## DatePicker

A field that opens a Calendar. Use it for dates near today; use Input for known dates such as birthdays.

Figma: Date Picker

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `label` (required) | string |  | Visible label. |
| `placeholder` | string \| undefined | Select date | Text when empty. |
| `help` | string \| undefined |  | Help text. |
| `error` | string \| undefined |  | Error message. |
| `disabled` | boolean \| undefined |  | Blocks interaction. |
| `max` | string \| undefined |  | Latest day that can be picked, as ISO. |
| `min` | string \| undefined |  | Earliest day that can be picked, as ISO. |
| `value` | string \| undefined |  | Selected day as ISO `YYYY-MM-DD`. |
| `onChange` | ((iso: string) => void) \| undefined |  | Called with the picked ISO day. |
| `locale` | string \| undefined | en | BCP 47 locale for month and weekday names. |

## SearchField

Search box with a suggestion list (combobox). Type to see matches, arrow keys to move, Enter to open one, Escape to close. Width is size/field-lg.

Figma: Input (Style=Filled) + Menu

```tsx
<SearchField label="Search contacts" value={q} onChange={setQ} results={results} onSelect={open} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `label` (required) | string |  | Accessible name. Hidden visually, like a header search. |
| `value` (required) | string |  | Current text. |
| `onChange` (required) | (value: string) => void |  | Called with the new text. Filter `results` from it. |
| `results` (required) | SearchResult[] |  | Suggestions for the current text, already filtered. |
| `onSelect` (required) | (result: SearchResult) => void |  | Called when a suggestion is chosen with click or Enter. |
| `placeholder` | string \| undefined |  | Placeholder text. |
| `emptyText` | string \| undefined | No matches | Shown in the list when the text matches nothing. |
| `labels` | { clear?: string \| undefined; count?: ((n: number) => string) \| undefined; } \| undefined |  | Names of the built-in parts. Pass them in the page's language. `count` announces the number of suggestions. |

## Input

Single-line text entry. `type="password"` adds a built-in show or hide button, so never build one yourself. For choosing from a list use Dropdown.

Figma: Input

```tsx
<Input label="Email" type="email" value={v} onChange={(e) => setV(e.target.value)} error={err} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `label` | string \| undefined |  | Visible label. Required unless you pass `aria-label`. |
| `hideLabel` | boolean \| undefined |  | Keeps the label for screen readers but hides it visually. Use sparingly, such as a search in a toolbar. |
| `help` | ReactNode |  | Help text below the field. |
| `error` | string \| undefined |  | Error message. Sets the error state and `aria-invalid`. Say what is wrong and how to fix it. |
| `success` | string \| undefined |  | Success message below the field. |
| `size` | "medium" \| "large" \| undefined | medium | Height: `medium` 40 (default), `large` 48. The `filled` variant is always 38. |
| `variant` | "outline" \| "filled" \| undefined | outline | `outline` white field with a border (default). `filled` tinted field for a header search (Figma Input Style=Filled). |
| `iconLeft` | "list" \| "label" \| "help" \| "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| "cloud-sync" \| "copy" \| "download" \| "edit" \| ... 63 more ... \| undefined |  | Icon inside the field on the left. |
| `onClear` | (() => void) \| undefined |  | Shows a clear button while there is text. Called when it is pressed. |
| `labels` | { clear?: string \| undefined; showPassword?: string \| undefined; hidePassword?: string \| undefined; } \| undefined |  | Accessible names of the built-in buttons. Pass them in the page's language. |

## Textarea

Multi-line text entry for comments and descriptions. Use Input for single-line values.

Figma: Textarea

```tsx
<Textarea label="Comment" maxLength={200} value={v} onChange={(e) => setV(e.target.value)} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `label` | string \| undefined |  | Visible label. |
| `help` | ReactNode |  | Help text. |
| `error` | string \| undefined |  | Error message. Sets the error state. |
| `maxLength` | number \| undefined |  | Shows a character counter against this limit. |

## Checkbox

Pick several options that need saving. For one choice of several use Radio. For a setting that applies at once use Toggle.

Figma: Checkbox/Checkbox + Text

```tsx
<Checkbox label="Include archived" checked={on} onChange={(e) => setOn(e.target.checked)} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `label` | ReactNode |  | Visible label. Pass `aria-label` instead only inside a table row. |
| `description` | string \| undefined |  | Secondary line under the label. |
| `indeterminate` | boolean \| undefined |  | Shows a dash for a partly selected group. |
| `size` | "medium" \| "small" \| undefined | medium | `small` 16 or `medium` 24. |
| `error` | string \| undefined |  | Error message below. |

## Radio

One option of a set where exactly one is chosen. Group them in RadioGroup.

Figma: Radio/Radio + Text

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `label` | ReactNode |  | Visible label. |
| `description` | string \| undefined |  | Secondary line under the label. |

## Toggle

A switch for a setting that takes effect immediately. If the change needs saving, use Checkbox.

Figma: Toggle/Toggle + Text

```tsx
<Toggle label="Email updates" checked={on} onChange={setOn} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `checked` (required) | boolean |  | On or off. |
| `onChange` (required) | (checked: boolean) => void |  | Called with the new state. Apply the setting straight away; a Toggle never waits for a Save button. |
| `label` | ReactNode |  | Visible label. Required unless you pass `aria-label`. |
| `description` | string \| undefined |  | Secondary line under the label. |
| `textSide` | "left" \| "right" \| undefined | right | Which side the label sits on. |

## GlobalSearch

App-wide search: a header field that opens a large panel over a dimmed page, with categories on the left and
hits on the right. Matches are highlighted. Arrow keys move through hits, Enter opens one, Escape closes.
For a simple field with a short suggestion list use SearchField.

Figma: Input (Style=Filled) + search panel (not in Figma yet)

```tsx
<GlobalSearch label="Search" value={q} onChange={setQ} categories={cats} category={cat} onCategoryChange={setCat} results={hits} onSelect={open} heading="All results" />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `label` (required) | string |  | Accessible name of the search field. |
| `value` (required) | string |  | Current text. |
| `onChange` (required) | (value: string) => void |  | Called with the new text. |
| `categories` (required) | GlobalSearchCategory[] |  | Categories in the left column. The first is usually "All". |
| `category` (required) | string |  | Selected category id. |
| `onCategoryChange` (required) | (id: string) => void |  | Called when a category is chosen. |
| `results` (required) | GlobalSearchHit[] |  | Hits for the current text and category, already filtered. |
| `onSelect` (required) | (hit: GlobalSearchHit) => void |  | Called when a hit is opened with click or Enter. The panel closes. |
| `heading` (required) | string |  | Heading above the hits, such as "All results". |
| `placeholder` | string \| undefined |  | Placeholder of the field. |
| `emptyText` | string \| undefined | No matches | Shown when the text matches nothing. |
| `footer` | ReactNode |  | Bottom of the category column, such as a help link. |
| `labels` | { clear?: string \| undefined; categories?: string \| undefined; count?: ((n: number) => string) \| undefined; } \| undefined |  | Names of the built-in parts. Pass them in the page's language. |

## Editor

Text editor for notes and messages: a field that opens into a formatting toolbar with Cancel and Save.
Closed it is one line; focus opens it. Toolbar buttons wrap the selection in Markdown. Cmd/Ctrl+Enter saves, Escape cancels.
Use Textarea for a plain form field without formatting.

Figma: Editor

```tsx
<Editor label="Notiz" placeholder="Notiz schreiben … Mit @ jemanden erwähnen" value={v} onChange={setV} onSave={save} labels={{ cancel: 'Abbrechen', save: 'Speichern' }} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `label` (required) | string |  | Accessible name of the text field, such as "Note". |
| `value` (required) | string |  | Current text. Formatting is written as Markdown (`**bold**`, `_italic_`, `- item`). |
| `onChange` (required) | (value: string) => void |  | Called with the new text. |
| `onSave` (required) | (value: string) => void |  | Called with the text when someone saves. Clear `value` afterwards. |
| `onCancel` | (() => void) \| undefined |  | Called after Cancel clears the text and closes the editor. |
| `placeholder` | string \| undefined |  | Hint in the empty field, such as "Write a note … Mention someone with @ ". |
| `defaultExpanded` | boolean \| undefined | false | Starts open with the toolbar showing. By default it opens on focus and closes when empty and left. |
| `labels` | EditorLabels \| undefined |  | Names of the built-in parts. Pass them in the page's language. |
