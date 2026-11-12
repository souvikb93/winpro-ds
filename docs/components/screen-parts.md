# Screen parts

Generated from source. Do not edit.

## BrandLogo

The product wordmark.

Figma: Brand Logo

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `brand` | "EuvinoPRO" \| "WIN" \| undefined | EuvinoPRO | Which product mark. |
| `color` | "default" \| "inverse" \| undefined | default | `default` on light surfaces, `inverse` on dark. |
| `size` | "medium" \| "large" \| "small" \| undefined | medium | Scale. |

## Header

App header bar. Renders a `header` landmark.

Figma: Header

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `brand` | ReactNode |  | Left slot. Defaults to BrandLogo. |
| `children` | ReactNode |  | Middle slot, usually TopNav or a search Input. |
| `actions` | ReactNode |  | Right slot: actions and UserMenu. |
| `size` | "medium" \| "large" \| "small" \| undefined | medium | Height: `small` 56, `medium` 64, `large` 72. |
| `layout` | "fill" \| "between" \| undefined | fill | `fill`: the middle slot takes the free space (TopNav). `between`: the middle slot keeps its own width (size/field-lg) and sits between the ends, as for a search. |

## PageHeader

Page title, subtitle and primary action. Use one per page, at the top of the content.

Figma: Page Header

```tsx
<PageHeader title="Requests" subtitle="All open requests" actions={<Button>Create request</Button>} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `title` (required) | string |  | Page title, the one H1. |
| `subtitle` | ReactNode |  | Line under the title. |
| `breadcrumbs` | ReactNode |  | Breadcrumbs slot above the title. |
| `actions` | ReactNode |  | Primary action Button slot, on the right. |
| `size` | "medium" \| "large" \| undefined | medium | `large` Heading H1 for top-level pages (default). `medium` Heading H4 for record pages, such as one organisation. |
| `icon` | "filter" \| "arrow-left" \| "arrow-right" \| "bell" \| "box" \| "calendar" \| "check" \| "check-circle" \| "clock" \| "cloud-sync" \| "copy" \| "download" \| "edit" \| "eye" \| "eye-off" \| "globe" \| ... 56 more ... \| undefined |  | Icon in a tile before the title, such as `building` for an organisation. |

## Footer

Page footer with legal text and links.

Figma: Footer

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `legal` (required) | ReactNode |  | Legal text. |
| `links` | { label: string; href: string; }[] \| undefined |  | Links on the right. |
