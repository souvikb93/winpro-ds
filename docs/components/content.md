# Content

Generated from source. Do not edit.

## Divider

Separates groups of content. Prefer spacing first; add a line only when spacing is not enough.

Figma: Divider

```tsx
<Divider label="or" />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `orientation` | "vertical" \| "horizontal" \| undefined | horizontal | Line direction. |
| `label` | string \| undefined |  | Optional centred label, such as "or". |

## Badge

Shows a status, count or category. It is not interactive; use Chip for something people click.

Figma: Badge

```tsx
<Badge status="success" icon="check">Connected</Badge>
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `status` | Status \| undefined | default | Meaning. |
| `variant` | "outline" \| "filled" \| "subtle" \| undefined | subtle | `subtle` tint (default), `filled` or `outline`. |
| `size` | "tiny" \| "small" \| "medium" \| undefined | small | `tiny`, `small` or `medium`. |
| `icon` | "info" \| "search" \| "group" \| "link" \| "list" \| "menu" \| "page" \| "copy" \| "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| ... 55 more ... \| undefined |  | Icon before the text. Pair status with text or an icon, never colour alone. |

## Avatar

A person as picture or initials.

Figma: Avatar

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `name` (required) | string |  | Person's name. Gives the initials and the accessible name. |
| `src` | string \| undefined |  | Picture URL. |
| `size` | "tiny" \| "small" \| "medium" \| "large" \| "giant" \| undefined | medium | `tiny` 24, `small` 32, `medium` 40, `large` 48, `giant` 64. |
| `status` | "online" \| "offline" \| "busy" \| undefined |  | Status dot. Pair it with text if the status matters. |

## AvatarGroup

Several people in a small space. Show at most 4.

Figma: Avatar Group

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `people` (required) | { name: string; src?: string \| undefined; }[] |  | People to show; the first `max` are drawn and the rest collapse into a count. |
| `max` | number \| undefined | 4 | Most avatars to draw. |
| `size` | "tiny" \| "small" \| "medium" \| "large" \| "giant" \| undefined | small | Size of each. |

## ListItem

One row of a List.

Figma: List/List Item Leading, List Item Trailing

```tsx
<List><ListItem title="Email" description="Weekly" trailing={<Toggle aria-label="Email" checked={on} onChange={setOn} />} /></List>
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `title` (required) | ReactNode |  | Main text. |
| `description` | ReactNode |  | Second line. |
| `leading` | ReactNode |  | Left slot: Icon, Avatar or ProductThumbnail. |
| `trailing` | ReactNode |  | Right slot: text, Badge, Toggle, Button. |

## List

Rows of related items, such as settings, devices or files. For sortable columns of data use Table.

Figma: List/List Item Leading, List Item Trailing

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `children` (required) | ReactNode |  | ListItem rows. |
| `divided` | boolean \| undefined | true | Hairline between rows. |

## ProductThumbnail

Product image tile for tables and lists.

Figma: Product Thumbnail

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `src` | string \| undefined |  | Product photo URL. Without one an icon placeholder shows. |
| `alt` (required) | string |  | Product name for the image. |
| `size` | "small" \| "medium" \| "large" \| undefined | medium | `small` 40, `medium` 48, `large` 64. |
| `icon` | "search" \| "group" \| "link" \| "list" \| "menu" \| "page" \| "copy" \| "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| "cloud-sync" \| ... 55 more ... \| undefined | box | Placeholder icon. |

## EmptyState

Shown when there is nothing to display. Say why and offer the next action.

Figma: Empty State

```tsx
<EmptyState title="No devices yet" description="Link a device to sign in faster." action={<Button>Link device</Button>} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `title` (required) | string |  | Why it is empty, as a heading. |
| `description` | ReactNode |  | What to do next. |
| `icon` | "search" \| "group" \| "link" \| "list" \| "menu" \| "page" \| "copy" \| "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| "cloud-sync" \| ... 55 more ... \| undefined | box | Icon. |
| `action` | ReactNode |  | Next action, usually a Button. |
| `size` | "small" \| "medium" \| undefined | medium | `medium` for a page or section, `small` inside a card. |

## TimelineItem

One event in a Timeline.

Figma: _Timeline Item

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `title` (required) | ReactNode |  | Event title. |
| `description` | ReactNode |  | Detail line. |
| `time` | string \| undefined |  | When it happened. |
| `status` | Status \| undefined | default | Marker colour. |

## Timeline

Chronological list of events, such as request history or an activity log.

Figma: Timeline

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `children` (required) | ReactNode |  | TimelineItem or ActivityItem children, newest first. |
| `label` | string \| undefined |  | Accessible name. |
| `progress` | boolean \| undefined |  | Scroll-linked: the line fills as the page scrolls, markers that passed the reading line light up and the entry at the reading line is highlighted. Best with ActivityItem. Off when people prefer reduced motion. |

## ActivityItem

A rich event in a Timeline, such as an email or a call, shown as a card next to an icon marker. Figma: Email Activity Item.

Figma: Email Activity Item

```tsx
<ActivityItem icon="mail" title="Subject" meta="Today · Anna → Ben">Preview</ActivityItem>
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `icon` (required) | "search" \| "group" \| "link" \| "list" \| "menu" \| "page" \| "copy" \| "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| "cloud-sync" \| ... 54 more ... \| "map-pin" |  | Marker icon, such as `mail` for an email or `phone` for a call. |
| `title` (required) | ReactNode |  | Subject line. |
| `meta` | ReactNode |  | Line under the subject: date, sender and recipients. |
| `children` | ReactNode |  | Preview text. One line, ends with an ellipsis. |
| `footer` | ReactNode |  | Bottom row: people, organisation, links. |
| `actions` | ReactNode |  | Right of the subject: IconButtons and a Button such as Reply. |
| `expanded` | boolean \| undefined |  | Shows the whole preview text instead of one line. |
| `onOpen` | (() => void) \| undefined |  | Makes the card clickable (hover, press and focus states). The subject becomes the button; buttons inside keep their own action. |

## AccordionItem

One expandable row of an Accordion.

Figma: _Accordion Item

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `title` (required) | string |  | Row title. |
| `children` (required) | ReactNode |  | Hidden content. |
| `defaultOpen` | boolean \| undefined |  | Starts open. |
| `disabled` | boolean \| undefined |  | Blocks interaction. |

## Accordion

Stacked expandable sections, when people need only some of the content.

Figma: Accordion

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `children` (required) | ReactNode |  | AccordionItem children. |

## Card

The one surface for grouped content: white, radius/xl, soft shadow. The Figma Card/* layouts are all this with different content. Do not stack cards inside cards.

Figma: Card/* layouts

```tsx
<Card title="Team" description="Who can edit" footer={<Button>Invite</Button>}>...</Card>
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `title` | ReactNode |  | Heading. |
| `description` | ReactNode |  | Line under the heading. |
| `headerAction` | ReactNode |  | Top-right slot, such as a Menu or Badge. |
| `footer` | ReactNode |  | Bottom slot, usually Buttons. |
| `image` | string \| undefined |  | Image URL shown on top. |
| `imageAlt` | string \| undefined |  | Alt text for the image. |
| `padding` | "medium" \| "large" \| undefined | large | Inner space: `medium` 16 or `large` 24. |
| `as` | ElementType<any, keyof IntrinsicElements> \| undefined | section | Element to render. |
| `headingLevel` | 2 \| 3 \| 4 \| undefined | 2 | Heading level of `title`. Use 3 inside a Modal or under another h2. Defaults to 2. |
| `collapsible` | boolean \| undefined |  | Adds a chevron that shows and hides the content. Needs a `title`. |
| `defaultOpen` | boolean \| undefined | true | With `collapsible`: starts open. Defaults to true. |
| `toggleLabel` | string \| undefined |  | With `collapsible`: accessible name of the chevron, such as "Show or hide Details". Defaults to the title. |

## KeyValueList

Label and value pairs, such as the details of a record. Figma: Key Value Pair.

Figma: Key Value Pair

```tsx
<KeyValueList items={[{ label: 'Website', value: url }]} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `items` (required) | { label: string; value: ReactNode; }[] |  | Rows in order. Values can be text or a link. |
| `layout` | "stacked" \| "columns" \| undefined | stacked | `stacked`: label then value, wrapping (default). `columns`: labels in their own column, values beside them. |

## Table

Table only: toolbars, filters and Pagination sit around it. Rows tint on hover. Header checkbox selects all. Selected rows get the accent tint.

Figma: Table/Table, Table/Table Cell

```tsx
<Table caption="Members" rows={rows} rowKey={(r) => r.id} columns={[{key:'name',header:'Name',render:(r) => r.name}]} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `columns` (required) | TableColumn<T>[] |  | Column definitions. |
| `rows` (required) | T[] |  | Rows. |
| `rowKey` (required) | (row: T) => string |  | Unique key for a row. |
| `caption` (required) | string |  | Required table name for screen readers; hidden visually. |
| `selected` | string[] \| undefined |  | Selected row keys. Turning it on adds a checkbox column. |
| `onSelectedChange` | ((keys: string[]) => void) \| undefined |  | Called with the new selection. |
| `loading` | boolean \| undefined |  | Shows skeleton rows and `aria-busy`. |
| `empty` | ReactNode |  | Rendered in place of the rows when there are none, usually EmptyState. |
| `labels` | { selectAll?: string \| undefined; selectRow?: ((row: T) => string) \| undefined; } \| undefined |  | Names for the selection checkboxes. |

## LabelPicker

Shows a label as a Badge and lets people change it in place, such as in a table cell. A pencil appears on hover and focus.
The popover has a search, the labels as badges (the current one checked) and an add button for a new label.
Arrow keys move, Enter picks, Escape closes. It is positioned against the window, so table scrolling never cuts it off.

Figma: Label Picker

```tsx
<LabelPicker label="Label for Anna" value={id} options={labels} onChange={setId} onCreate={add} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `value` (required) | string \| null |  | Selected label id, or null for none. |
| `options` (required) | LabelOption[] |  | All labels people can choose. |
| `onChange` (required) | (id: string) => void |  | Called with the chosen label id. |
| `onCreate` | ((name: string) => void) \| undefined |  | Called with the typed name when someone adds a new label. Add it to `options` and select it. Leave out to hide the add button. |
| `label` (required) | string |  | Accessible name of the trigger, such as "Label for Anna Roell". The current label is added after it. |
| `labels` | { search?: string \| undefined; add?: string \| undefined; addNamed?: ((name: string) => string) \| undefined; empty?: string \| undefined; none?: string \| undefined; } \| undefined |  | Names of the built-in parts. Pass them in the page's language. |

## InlineEdit

A value that people change in place, such as a table cell or a detail field. A pencil appears on hover and focus.
Text: Enter or leaving the field saves, Escape cancels. Date: picking a day saves, Escape cancels.

Figma: Input (Style=Outline) + Calendar (not in Figma yet)

```tsx
<InlineEdit label="Edit name" value={name} onChange={setName} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `value` (required) | string |  | Current value. For `type="date"` an ISO day `YYYY-MM-DD`. |
| `onChange` (required) | (value: string) => void |  | Called with the new value when people save. Not called when the value did not change. |
| `label` (required) | string |  | Accessible name of the edit button, such as "Edit name of Anna Roell". |
| `type` | "number" \| "text" \| "email" \| "tel" \| "date" \| undefined | text | Kind of value. `date` opens a Calendar. |
| `display` | ReactNode |  | What to show while not editing, such as a link or formatted date. Without it the value shows as text and a click on it edits. |
| `required` | boolean \| undefined |  | Blocks saving an empty value. |
| `locale` | string \| undefined | en | For `type="date"`: BCP 47 locale for the Calendar. |
