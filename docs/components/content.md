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
| `icon` | "info" \| "search" \| "group" \| "link" \| "menu" \| "page" \| "copy" \| "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| "cloud-sync" \| ... 30 more ... \| undefined |  | Icon before the text. Pair status with text or an icon, never colour alone. |

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
| `icon` | "search" \| "group" \| "link" \| "menu" \| "page" \| "copy" \| "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| "cloud-sync" \| ... 31 more ... \| undefined | box | Placeholder icon. |

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
| `icon` | "search" \| "group" \| "link" \| "menu" \| "page" \| "copy" \| "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| "cloud-sync" \| ... 31 more ... \| undefined | box | Icon. |
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
| `children` (required) | ReactNode |  | TimelineItem children, newest first. |
| `label` | string \| undefined |  | Accessible name. |

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

## Table

Table only: toolbars, filters and Pagination sit around it. Header checkbox selects all. Selected rows get the accent tint.

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
