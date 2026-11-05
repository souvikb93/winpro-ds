# Loading, empty, error, success

Every async region handles all four. Keep the layout stable.

- **Loading, layout known:** `Skeleton type="row" count={3}` and `aria-busy` on the wrapper. `Table loading` does this for you.
- **Loading, layout unknown:** `Loader` with `label`. In a button: `Button loading`.
- **Empty:** `EmptyState` says why and offers the next action. After a search: say nothing matched and offer to clear it.
- **Error:** `Alert status="error"` with a Retry `Button` in `actions`. Keep what the person typed.
- **Success:** the result, plus a toast if it happened out of view.
- **Lists that page:** `Table`, then `Pagination` below, with a `Text variant="caption"` count such as "1 to 20 of 240".
- **Stale requests:** ignore a response when a newer one started.
- **Unsaved changes:** when leaving with edits, use `ConfirmDialog` with `confirmLabel="Discard changes"`, `cancelLabel="Keep editing"`, `tone="danger"`.
- **Bulk actions:** `Table` with `selected` and `onSelectedChange`; a `Stack` above it shows the count and actions; a destructive bulk action goes through `ConfirmDialog` and names the count.
