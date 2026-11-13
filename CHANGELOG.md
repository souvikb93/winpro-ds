# Changelog

## [Unreleased] - 2026-11-10

### Changed

- `Modal`: at least spacing/xl on the sides too.
- `Modal`: keeps at least spacing/xl above and below on every screen; when the window is too short, only the body scrolls and the title and buttons stay in view (the XLarge exception that switched scrolling off is gone). Figma Modal description updated.
- `Dropdown`, `Combobox`, `DatePicker`: open upward when there is not enough room below, measured against the scrolling area or the window.
- `Icon` `more-horiz` / `more-vert`: solid dots, 4.5 of 24 (about twice the diameter of the Iconoir outline dots), so menu triggers are easy to see in the side nav, tables and cards. Figma icon updated the same way.
- `Table` column `align="center"`, for columns of icon buttons such as row actions.
- Code ↔ Figma parity audit (every component measured in both):
  - code follows Figma: Button icons (Small 16, Medium 24), Alert (16 padding and gap, radius 4, title UI/Label), Empty State paddings, gaps and Small type, Avatar `giant` 56, breadcrumb chevron 16, Popover 280 wide with a border, Top Nav weights (only the selected item bold), Person Chip small padding, Segmented Control small selected weight.
  - Figma follows the shipped product: Input and Dropdown Size=Medium (38), Combobox and Date Picker on Medium, Dropdown Option and Menu rows (8 padding, 8 gap, 40 high), Top Nav spacing, Close Button small 24, new Filter Tabs (Filter Chip).
- Narrow screens: header actions keep their size, the breadcrumb shortens, Top Nav, Segmented Control and Filter Tabs scroll inside themselves, page titles and ActivityItem subjects wrap. No horizontal page scroll at 375px.
- Token generator: no self-referencing or duplicate variables (498 values verified unchanged).
- Tooling: ESLint (`typescript-eslint` strict, React Hooks, jsx-a11y), Prettier, EditorConfig and CI (`npm run check` on every push). Every lint exception carries a reason.
- Storybook: stories for all 87 components (22 added); story renders are typed and follow the rules of hooks.
- `Button` and `SplitButton` `size="small"` (Hydra Tiny): label is Body/Small, 14 regular, as in Figma Button Default and Button Select Size=Tiny (was bold). SplitButton chevron is 20 at every size, as in Figma.
- `ActivityItem`: meta is a `div` (popovers may sit in it) and takes a list of facts split by a thin line (InlineList); `lines` clamps the preview; built-in rhythm (subject → meta 3xs, preview xs, footer s); the rail marker is centred on the subject row; links, buttons and popovers inside a clickable card stay clickable and on top. Figma: Activity Item rebuilt to match.
- Links in running text (ActivityItem meta and preview) are underlined subtly, so colour is not the only cue (WCAG 1.4.1).
- `UserMenu` compact: the accessible name comes from screen-reader text, not `aria-label`, so it matches the visible initials (WCAG 2.5.3).
- `Breadcrumbs`: the current page keeps the trail's size and weight (Body Small) and differs only by colour (foreground/static/base). Figma: Breadcrumbs updated.

### Added

- `InlineList`: short facts on one line split by a thin vertical line (8px either side); replaces dot separators everywhere. ActivityItem meta uses it. Figma: Data Display › Inline List.
- `PeopleList`: inline names with an exact "+N" list on hover, click or Enter; your own name plain, others blue links. Figma: Data Display › People List.
- `FileChip`, `FileChipList`: attachment pill with its own download. Figma: Data Display › File Chip.
- `Editor`: bold, italic and underline are toggles with `aria-pressed`, shown Selected (accent fill, accent icon, Selected icon weight) while the cursor is inside that formatting; pressing again removes it. Hover, pressed and focus states for every tool. Figma: Forms › Editor Tool, Editor State=Formatting.
- `Editor` fix: after a toolbar action the cursor lands inside the new formatting instead of jumping to the end.
- `Combobox`: type a value (read through `parse`) or pick from a scrolling list that opens centred on the current value. Figma: Forms › Combobox.
- `DatePicker` is typeable (DD.MM.YYYY, DD.MM., ISO) with the calendar button on the right; new `calendarLabel` prop and `parseDay` helper.
- `Dropdown` list is capped at `size/dialog-sm`, scrolls, and opens at the selected option.
- `SideNav` `theme="dark"`: navy rail from Figma Side Nav Theme=Dark (background/static/inverse, selected item background/accent/subtle).
- `SideNav` counts now show on the collapsed rail as a small info badge, and the rail link's name includes the count.
- `Icon`: `box-iso`, `chat-bubble-check`, `coin`, `credit-cards`, `list`, `page-edit`, `precision-tool`, `send-mail`, `shop`, `stats-down-square`, `view-grid`.
- Tokens: Hydra variables with new names (`--eu-background-*`, `--eu-foreground-*`, `--eu-border-static-*`, t-shirt spacing, `--eu-size-button-*`, ...) from `figma/hydra.json`, next to the existing names. Existing names keep their values.
- Tokens: `foreground/link/default`, `foreground/link/hover` (text links) and `size/field-lg` (400, header search), added in Figma first.
- Tokens: text styles as variables (`--eu-font-<style>-size|weight|line`); text styles updated to the current Figma sizes (H1 32 ... H6 16).
- `GlobalSearch`: app-wide search. The header field opens a panel over a dimmed page with categories (and counts) on the left and hits on the right; matches are marked with the new `background/highlight` token (added in Figma). Arrow keys, Enter and Escape work.
- Icons: `app-window`, `attachment`, `book`, `building`, `open-new-window`, `suitcase`.
- `SearchField`: search box with grouped suggestions (combobox, arrow keys, Enter, Escape).
- `Input variant="filled"` (Figma Input Style=Filled, 38 high).
- `LinkButton variant="link"`: inline link in foreground/link that keeps the surrounding text style.
- `FilterTabs variant="chip"`: tabs look like Chips; inert ones keep the chip shape with muted text. FilterTabs stay on one line and scroll sideways when narrow.
- `ActivityItem onOpen`: the card becomes clickable (hover, press and focus states); buttons inside keep their own action.
- `Timeline progress`: scroll-linked line that fills as the page scrolls; markers above the reading line turn violet and the current entry is highlighted (WIN solution page pattern). Off with reduced motion.
- `FilterTabs` (pill tabs): one choice from many filters over a list, such as a history feed; items can be `inert` (shown, not selectable).
- `PageHeader` `size="medium"` (Heading H4) and `icon` tile for record pages. `KeyValueList layout="columns"`. `ActivityItem expanded`. Icons `label`, `map-pin`.
- Tokens: new Figma collection Behaviour: `motion/duration-*`, `layer/*` (z-index), `opacity/pulse`. All component CSS now uses tokens only: no raw px, durations, z-index, weights or line heights left.
- `LinkButton variant="plain"`: keeps the surrounding colour and type, underline on hover; for record names that open a page.
- `ActivityItem` footer parts are separated by thin dividers (border/static/subtle).
- `InlineEdit`: change a value in place (table cells, detail fields). Floating pencil on hover and focus takes no width; Enter or blur saves, Escape cancels; `type="date"` opens the Calendar.
- `KeyValueList` (Figma Key Value Pair), `ActivityItem` for rich Timeline events (Figma Email Activity Item), `Card collapsible`, `TopNav` item `icon`.
- Icons: `id-card` (drawn in Iconoir style, also added to Figma Icons), `phone`, `chat-bubble`, `reply`, `arrow-separate-vertical`, `user-circle`.
- `LabelPicker`: badge that changes in place (table cells). Pencil on hover and focus; popover with search, labels as badges (current one checked) and an add button for a new label. Keyboard: arrows, Enter, Escape. Fixed positioning, flips up near the bottom.
- `UserMenu` subtitle has its own class in foreground/static/neutral; name in foreground/static/base.
- `Menu` item `selected`: a choice group (sort order, filter) shows a check on the current item and uses menuitemradio.
- `IconButton indicator`: small dot when something behind the button is on, such as an active filter.
- `SideNav overflow` and `moreItems`: a More (⋯) button is always last; items that do not fit the height move into its menu from the end and come back when there is room; the selected item always stays visible; the More button shows no count; counts stay on the items inside its menu. Menu has arrow keys, Home, End, Escape.
- `SideNav`: unselected items use Body/Small, the selected item UI/Card Title (same 14 size, semibold) and icon stroke weight Selected (2). Expanded nav dims and blurs the page like a modal; a click on that layer folds it back.
- Tokens: `blur/backdrop` (4, added in Figma first) used by modal, drawer, side nav and search overlays; `icon/stroke-weight` with its Regular and Selected modes (`.eu-mode-icon-weight-selected`). Icons follow the token.
- `SideNav expandable` (with `collapsed`): a toggle at the bottom or the `[` key slides the rail out to 240 over the page with names and counts; choosing an item, clicking outside or Escape folds it back. Rail icons show their name in a tooltip. `logoLabel` shows the product name when expanded; the logo row is as tall as the small Header.
- `SideNav`: `logo` (bottle mark tile and divider), `sticky` (full height, never scrolls), `countStatus`; rail matches Figma (48 tiles, 24 icons, 16 gaps, selected tint).
- `Header layout="between"` keeps the search at size/field-lg between breadcrumbs and actions. `UserMenu size` and a chevron in compact mode.
- `Table` column `overflow` (`wrap` | `nowrap` | `truncate`) and `fit`.

### Changed

- Button Primary and Secondary use Hydra's state colours through new tokens (background/secondary/*, border/primary/*, border/secondary/*, foreground/interactive/focus|pressed|disabled, background/primary/focus|disabled), added in Figma first. background/primary/pressed now purple/80 (#7A7FFF) as in Hydra.
- Table: the header checkbox is ticked only when every row is selected; no partial dash.

- `PageHeader` title uses Heading/Desktop/H1 and the subtitle Body/Large, as the Figma Page Header.
- Popovers of LabelPicker and InlineEdit stay inside the window horizontally.

- Focused inputs, the open GlobalSearch field and the open LabelPicker no longer show the teal ring: the stroke turns `border/static/strong` (blue-gray/90, new token added in Figma). Buttons and links keep their focus ring.
- Button heights follow Hydra: small 28, medium 38, large 44, giant 56. Secondary buttons have a white fill.
- `SegmentedControl` icon to label gap is spacing/2xs (8) in code and Figma, like Button and Menu; content stays centred in equal segments. Figma segments are a fixed equal width again (Fill gave the semibold label 2 extra).
- `SegmentedControl` look (Figma updated too): track background/static/soft with border/static/subtle; selected segment white with border/accent, violet label (foreground/interactive/default, semibold) and icon stroke Selected; hover darkens unselected text. Bold width is reserved so the control never changes size.
- `SegmentedControl` segments share the width equally, sized to the longest label (Figma segments now Fill the control).
- `Table` rows tint with background/static/soft on hover; selected rows keep their tint.
- Table, Badge tiny, Breadcrumbs, Segmented Control, Checkbox border and Header match the Figma components (header has no shadow).

### Fixed

- `Breadcrumbs` no longer warns when two crumbs share a label.

## [0.1.0] - 2026-11-05

### Added

- First code layer: tokens generated from Figma, React components, agent docs, CLI and MCP server.
- Figma: tokens `border/control`, `action/danger`, `action/danger-hover`.
