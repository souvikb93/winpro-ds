# Layout

- Use `Stack` for every row and column. It is auto layout in code. `gap` takes spacing token numbers.
- Page: `Stack gap="6"` with `PageHeader` first. Sections: `gap="8"`. Fields: `gap="4"`. Button rows: `gap="2"`.
- Group content with `Card`. It has its own padding, so do not add more around it, and never nest cards.
- Multi-column: `Stack direction="horizontal" gap="6" wrap`. Children take `style={{ flex: 1 }}`.
- App shell: `Header` on top or `SideNav` at left, then `PageHeader`, then content. `Footer` last.
- Grids in Figma: Desktop 12 columns, Tablet 8, Mobile 4.
