# Forms

```tsx
<Stack as="form" gap="4" noValidate onSubmit={submit}>
  <Input label="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} error={errors.email} ref={emailRef} />
  <Dropdown label="Role" options={roles} value={role} onChange={setRole} error={errors.role} />
  <Stack direction="horizontal" gap="2" justify="end">
    <Button variant="tertiary" onClick={cancel}>Cancel</Button>
    <Button type="submit" loading={saving}>Send invite</Button>
  </Stack>
</Stack>
```

- Validate on submit, then show errors field by field through `error`. Clear an error when the value changes. Move focus to the first invalid field. `Input` forwards `ref`.
- Keep the submit button enabled so people can find out what is wrong.
- Error text: what is wrong and how to fix it. "Enter an email address like name@company.com."
- Show a summary `Alert status="error"` above the form only when a server error has no field.
- Success: `useToast` and move on, or `Alert status="success"` if the person stays.
- Passwords: `Input type="password"` has the show or hide button built in. Pass `labels` in the page's language.
