# Names from other libraries

| You may think of | Use here |
|---|---|
| TextField, TextInput, FormControl | `Input` |
| PasswordInput | `Input type="password"` |
| TextArea | `Textarea` |
| Select, Combobox, Autocomplete | `Dropdown` |
| Switch | `Toggle` |
| Dialog, AlertDialog | `Modal`, `ConfirmDialog` |
| Popconfirm, Confirm | `ConfirmDialog` |
| Sheet, SidePanel | `Drawer` |
| Snackbar, Notification | `useToast` under `ToastProvider` |
| Banner, InlineMessage, Callout | `Alert` |
| Tabs, TabList | `TopNav` |
| ToggleGroup, ButtonGroup | `SegmentedControl` |
| Tag, Pill, Label, Status | `Badge`, or `Chip` if clickable |
| Spinner, CircularProgress | `Loader` |
| Stepper (wizard), Wizard | `Steps` |
| NumberInput, QuantityInput | `Stepper` |
| Link, Anchor | `LinkButton` |
| Dropzone, Upload | `FileDropzone`, `FileItem` |
| DropdownMenu, ContextMenu | `Menu` |
| DataGrid, DataTable | `Table` |
| Box, Flex, HStack, VStack, Grid | `Stack` |
| Typography, Heading, Title | `Text` |
| color, severity, intent (on status components) | `status` |
| color, kind (on Button) | `variant` |
| startIcon, leftIcon, endIcon, rightIcon | Button: `icon` plus `iconPosition="left"` or `"right"`. Input: `iconLeft` |
| isDisabled, isLoading | `disabled`, `loading` |
