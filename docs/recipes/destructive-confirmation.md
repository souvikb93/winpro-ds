# Destructive confirmation

Deleting, or anything that cannot be undone, always follows this.

```tsx
import { useState } from 'react';
import { Button, Card, ConfirmDialog, useToast } from '@euvino/ds';

function DeleteAccount() {
  const [open, setOpen] = useState(false);
  return (
    <Card title="Delete account" description="Removes your account and all its data." footer={
      <Button variant="danger-outline" onClick={() => setOpen(true)}>Delete account</Button>
    }>
      <ConfirmDialog
        open={open}
        tone="danger"
        title="Delete your account?"
        confirmLabel="Delete account"
        cancelLabel="Keep account"
        onCancel={() => setOpen(false)}
        onConfirm={() => { /* delete */ setOpen(false); }}
      >
        This permanently deletes your account and all data. This cannot be undone.
      </ConfirmDialog>
    </Card>
  );
}
```

- Entry point: `danger-outline`. Final action: `tone="danger"`, which draws the red button.
- The title names the thing. The body says what is lost and that it cannot be undone. The confirm label repeats the verb and object.
- Focus starts on Cancel. Escape and the backdrop back out.
- For reversible actions offer a toast with an undo `action` instead.
- A plan cancellation or leaving with lost benefits uses the same pattern. On a page with several actions, the destructive one stays the least prominent: `clear` or `danger-outline`, never `filled`.
