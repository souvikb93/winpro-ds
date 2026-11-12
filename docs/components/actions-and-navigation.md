# Actions and navigation

Generated from source. Do not edit.

## LinkButton

A text link that navigates. Use Button when it runs an action.

Figma: Link Button

```tsx
<LinkButton href="/help">Read the guide</LinkButton>
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `variant` | "primary" \| "secondary" \| "link" \| "plain" \| undefined | tertiary | `primary` uses text/link, `secondary` uses text/body. `link` is an inline text link in foreground/link (emails, phone numbers): it keeps the surrounding text style. `plain` keeps the surrounding colour and style and underlines on hover, for names that open a record. |

## SegmentedControl

Switches the display of the same content in place, such as List and Grid. Not for page navigation (TopNav). Segments share the width equally, sized to the longest label.

Figma: Segmented Control

```tsx
<SegmentedControl label="View" value={v} onChange={setV} options={[{value:'list',label:'List'},{value:'grid',label:'Grid'}]} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `options` (required) | SegmentOption[] |  | Between 2 and 4 options. |
| `value` (required) | string |  | The selected value. One segment is always selected. |
| `onChange` (required) | (value: string) => void |  | Called with the new value. |
| `label` (required) | string |  | Accessible name of the group, such as "View". |
| `className` | string \| undefined |  | Extra class. |

## Chip

An interactive pill for filters and tags. Use Badge for something that only shows a status.

Figma: Chips

```tsx
<Chip selected={on} onClick={toggle}>Germany</Chip>
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `selected` | boolean \| undefined |  | Selected filter state, announced with `aria-pressed`. |
| `icon` | "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| "cloud-sync" \| "copy" \| "download" \| "edit" \| "eye" \| "eye-off" \| "globe" \| ... 56 more ... \| undefined |  | Icon before the text. |
| `onRemove` | (() => void) \| undefined |  | When set, shows a remove button with this handler. Needs `removeLabel`. |
| `removeLabel` | string \| undefined | Remove | Accessible name of the remove button, such as "Remove Germany". |

## Button

Runs an action. Start the label with a verb and name the result: "Create request", not "OK". Default type is `button`, so set `type="submit"` in forms.

Figma: Button

```tsx
<Button variant="secondary" onClick={save}>Save draft</Button>
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `variant` | "primary" \| "secondary" \| "tertiary" \| "primary-2" \| "danger" \| "danger-secondary" \| undefined | tertiary | Emphasis. `primary` = the main action of a view. `secondary` = a real alternative. `tertiary` = the least emphasis: a way out such as Cancel. `primary-2` = the orange marketing or commercial call to action, at most one per view; never for a normal form save. `danger` = the final irreversible action inside a confirmation. `danger-secondary` = the entry point that opens that confirmation. |
| `size` | "tiny" \| "small" \| "medium" \| "large" \| "giant" \| undefined | medium | Height: `tiny` 24, `small` 32, `medium` 40 (default), `large` 48, `giant` 56. |
| `icon` | "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| "cloud-sync" \| "copy" \| "download" \| "edit" \| "eye" \| "eye-off" \| "globe" \| ... 56 more ... \| undefined |  | Which icon to show. Buttons are text-only by default; add an icon only when it adds meaning. Pick the side with `iconPosition`. |
| `iconPosition` | "left" \| "right" \| undefined | left | Which side of the label the `icon` goes on. Defaults to `left`. |
| `loading` | boolean \| undefined |  | Shows a Loader, sets `aria-busy` and blocks clicks while keeping the label and width. |
| `fullWidth` | boolean \| undefined |  | Stretches to the container width. |

## IconButton

A Button that shows only an icon (Content = Only Icons in Figma). The label is required because nothing else names it.

Figma: Button, Content=Only Icons

```tsx
<IconButton icon="trash" label="Remove file" />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `icon` (required) | "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| "cloud-sync" \| "copy" \| "download" \| "edit" \| "eye" \| "eye-off" \| "globe" \| ... 55 more ... \| "map-pin" |  | The icon to show. |
| `label` (required) | string |  | Required accessible name, such as "Remove file". |
| `variant` | "primary" \| "secondary" \| "tertiary" \| "primary-2" \| "danger" \| "danger-secondary" \| undefined | tertiary | Same emphasis as Button. Defaults to `tertiary`. |
| `size` | "tiny" \| "small" \| "medium" \| "large" \| "giant" \| undefined | medium | Square size, same scale as Button. |
| `indicator` | boolean \| undefined |  | Small dot in the corner: something behind this button is on, such as an active filter or sort. Say so in `label` too. |

## Menu

Runs a command from a list, such as a row's actions. Arrow keys and Escape work. To choose a value use Dropdown.

Figma: Menu

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `trigger` (required) | ReactElement<unknown, string \| JSXElementConstructor<any>> |  | Element that opens it, usually an IconButton. |
| `items` (required) | MenuItemDef[] |  | Commands in order. |
| `label` (required) | string |  | Accessible name of the list. |

## TopNav

Links between views within a section, with a navy underline on the current one. This is also what other libraries call Tabs.

Figma: Top Nav

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `items` (required) | TopNavItem[] |  | Between 3 and 7 links. |
| `label` (required) | string |  | Accessible name of the navigation. |

## SideNav

Left navigation between app sections, 240 wide or a 72 rail when collapsed. A collapsed rail can be `expandable`; with `overflow` it never runs out of room.

Figma: Side Nav

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `items` (required) | SideNavItem[] |  | Items in order of priority: the first ones stay visible longest. |
| `label` (required) | string |  | Accessible name. |
| `collapsed` | boolean \| undefined |  | Icon-only rail, 72 wide. Each icon shows its name in a tooltip. |
| `theme` | "light" \| "dark" \| undefined | light | Surface. `light` is white (default). `dark` is the navy rail from Figma's Side Nav Theme=Dark. |
| `logo` | boolean \| undefined |  | Shows the bottle mark in a tile with a divider above the items (Figma Side Nav Logo). The row is as tall as the small Header. |
| `logoLabel` | string \| undefined |  | Product name next to the mark while the nav is expanded. |
| `sticky` | boolean \| undefined |  | Stays in view at full window height while the page scrolls. The nav itself never scrolls. |
| `expandable` | boolean \| undefined |  | With `collapsed`: a toggle at the bottom (and the `[` key) slides the nav out over the page to show names and counts. A modal-style layer dims and blurs the page; choosing an item, clicking the layer or Escape folds it back. The page does not move. |
| `overflow` | boolean \| undefined |  | Adds a More (⋯) button as the last item. Items that do not fit the height move into its menu from the end of the list, and come back when there is room. The selected item always stays visible. Use with `sticky`. |
| `moreItems` | SideNavItem[] \| undefined |  | Items that always sit in the More menu, after any that moved there. |
| `labels` | { expand?: string \| undefined; collapse?: string \| undefined; more?: string \| undefined; } \| undefined |  | Names of the built-in parts. Pass them in the page's language. |
| `footer` | ReactNode |  | Footer slot, such as a help card. |

## Breadcrumbs

Shows where a page sits and links back up the trail.

Figma: Breadcrumbs

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `items` (required) | { label: string; href?: string \| undefined; }[] |  | Trail from the root to the current page. The last item is the current page. |
| `label` | string \| undefined | Breadcrumb | Accessible name. |

## Pagination

Moves through a long list page by page. It collapses long ranges with an ellipsis. Place it below the Table, never inside.

Figma: Pagination/Pagination

```tsx
<Pagination page={p} pageCount={12} onChange={setP} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `page` (required) | number |  | Current page, starting at 1. |
| `pageCount` (required) | number |  | Total number of pages. |
| `onChange` (required) | (page: number) => void |  | Called with the new page. |
| `labels` | { nav?: string \| undefined; previous?: string \| undefined; next?: string \| undefined; page?: string \| undefined; } \| undefined |  | Accessible names in the page's language. |

## Steps

Shows progress through a multi-step process and marks the current step with `aria-current`. It shows progress only; the Back and Next buttons are yours.

Figma: Steps

```tsx
<Steps current={1} steps={[{title:'Company'},{title:'Team'},{title:'Done'}]} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `steps` (required) | StepDef[] |  | Steps in order. |
| `current` (required) | number |  | Index of the current step, starting at 0. Earlier steps show as complete. |
| `orientation` | "horizontal" \| "vertical" \| undefined | horizontal | Direction. |
| `errorStep` | number \| undefined |  | Index of a step that has an error. |
| `label` | string \| undefined | Progress | Accessible name. |

## FilterTabs

Filter tabs (pill tabs): one choice from many filters for the list below, such as a history feed.
Use SegmentedControl for 2 to 4 equal options, Chip for several filters at once, TopNav for views.

Figma: Filter Tabs (not in Figma yet)

```tsx
<FilterTabs label="Filter history" value={f} onChange={setF} items={[{ id: 'all', label: 'All' }, { id: 'notes', label: 'Notes', count: 5 }]} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `items` (required) | FilterTabItem[] |  | Filters in order. The first is usually "All". |
| `value` (required) | string |  | Selected id. |
| `onChange` (required) | (id: string) => void |  | Called with the chosen id. |
| `label` (required) | string |  | Accessible name of the group, such as "Filter history". |
| `variant` | "pill" \| "chip" \| undefined | pill | `pill` soft pill on the selected tab (default). `chip` each tab looks like a Chip. Both stay on one line and scroll sideways when narrow. |

## UserMenu

Profile trigger for the Header. Wrap it in Menu to add the account commands.

Figma: User Menu

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `name` (required) | string |  | Person's name. |
| `subtitle` | string \| undefined |  | Second line, such as a company. |
| `src` | string \| undefined |  | Picture URL. Initials show without one. |
| `compact` | boolean \| undefined |  | Avatar and chevron only. Name stays available to screen readers. |
| `size` | "medium" \| "large" \| undefined | medium | `medium` 32 avatar (default) or `large` 48 avatar (Figma User Menu Size=Large). |
