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
| `variant` | "primary" \| "secondary" \| undefined | clear | `primary` uses text/link, `secondary` uses text/body. |

## SegmentedControl

Switches the display of the same content in place, such as List and Grid. Not for page navigation (TopNav).

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
| `icon` | "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| "cloud-sync" \| "copy" \| "download" \| "edit" \| "eye" \| "eye-off" \| "globe" \| ... 31 more ... \| undefined |  | Icon before the text. |
| `onRemove` | (() => void) \| undefined |  | When set, shows a remove button with this handler. Needs `removeLabel`. |
| `removeLabel` | string \| undefined | Remove | Accessible name of the remove button, such as "Remove Germany". |

## Button

Runs an action. Start the label with a verb and name the result: "Create request", not "OK". Default type is `button`, so set `type="submit"` in forms.

Figma: Button

```tsx
<Button variant="outline" onClick={save}>Save draft</Button>
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `variant` | "filled" \| "outline" \| "clear" \| "cta" \| "danger" \| "danger-outline" \| undefined | clear | Emphasis. `filled` = the main action of a view. `outline` = a real alternative. `clear` = the least emphasis: a way out such as Cancel. `cta` = orange marketing or commercial call to action, at most one per view; never for a normal form save. `danger` = the final irreversible action inside a confirmation. `danger-outline` = the entry point that opens that confirmation. |
| `size` | "tiny" \| "small" \| "medium" \| "large" \| "giant" \| undefined | medium | Height: `tiny` 24, `small` 32, `medium` 40 (default), `large` 48, `giant` 56. |
| `iconLeft` | "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| "cloud-sync" \| "copy" \| "download" \| "edit" \| "eye" \| "eye-off" \| "globe" \| ... 31 more ... \| undefined |  | Icon before the label. Buttons are text-only by default; add an icon only when it adds meaning. |
| `iconRight` | "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| "cloud-sync" \| "copy" \| "download" \| "edit" \| "eye" \| "eye-off" \| "globe" \| ... 31 more ... \| undefined |  | Icon after the label. |
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
| `icon` (required) | "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| "cloud-sync" \| "copy" \| "download" \| "edit" \| "eye" \| "eye-off" \| "globe" \| ... 30 more ... \| "close" |  | The icon to show. |
| `label` (required) | string |  | Required accessible name, such as "Remove file". |
| `variant` | "filled" \| "outline" \| "clear" \| "cta" \| "danger" \| "danger-outline" \| undefined | clear | Same emphasis as Button. Defaults to `clear`. |
| `size` | "tiny" \| "small" \| "medium" \| "large" \| "giant" \| undefined | medium | Square size, same scale as Button. |

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

Left navigation between app sections, 240 wide or a 72 rail when collapsed.

Figma: Side Nav

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `items` (required) | SideNavItem[] |  | Items in order. |
| `label` (required) | string |  | Accessible name. |
| `collapsed` | boolean \| undefined |  | Icon-only rail, 72 wide. |
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

## UserMenu

Profile trigger for the Header. Wrap it in Menu to add the account commands.

Figma: User Menu

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `name` (required) | string |  | Person's name. |
| `subtitle` | string \| undefined |  | Second line, such as a company. |
| `src` | string \| undefined |  | Picture URL. Initials show without one. |
| `compact` | boolean \| undefined |  | Avatar only. Name stays available to screen readers. |
