# Settings sections

```tsx
<Card title="Notifications" description="Changes save automatically.">
  <List>
    <ListItem title="Email updates" description="Weekly summary of your requests."
      trailing={<Toggle aria-label="Email updates" checked={email} onChange={setEmail} />} />
  </List>
</Card>
```

- A `Toggle` applies at once, so there is no Save button. Confirm with `useToast` only when the effect is not visible.
- If several changes must be saved together use `Checkbox` and a `filled` Save button.
- Show async failure by reverting the toggle and showing a toast with `status="error"`.
- Status rows use `Badge` with `status`, `icon` and text in `trailing`.
