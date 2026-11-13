// Story data for every component in src/ds. scripts/build-stories.mjs turns this into src/stories/*.stories.tsx.
// args / render are TypeScript source strings. Copy is English; example names are made up.
const ROWS = `[{ id: 'a', product: 'Riesling Kabinett 2023', producer: 'Weingut Sonnental', status: 'In progress' }, { id: 'b', product: 'Sp\\u00E4tburgunder Reserve 2021', producer: 'Weingut am Rebhang', status: 'Complete' }, { id: 'c', product: 'Prosecco Extra Dry', producer: 'Cantina Valmonte', status: 'Overdue' }]`;
const DATA = `[{ label: 'Created', value: 482 }, { label: 'Completed', value: 455 }, { label: 'Open', value: 128 }, { label: 'Overdue', value: 24 }]`;
const NAV = `[{ label: 'Dashboard', icon: 'home', selected: true }, { label: 'Requests', icon: 'page', count: 12 }, { label: 'Producers', icon: 'group' }, { label: 'Reports', icon: 'star' }, { label: 'Settings', icon: 'settings' }]`;

export const SPEC = [
  // Foundations
  {
    n: 'Icon',
    args: `{ name: 'search', size: 'md' }`,
    stories: { Small: `{ name: 'bell', size: 'sm' }`, Large: `{ name: 'check-circle', size: 'lg' }` },
  },
  {
    n: 'Stack',
    args: `{ direction: 'horizontal', gap: '3', children: ['One', 'Two', 'Three'].map((t) => <Button key={t} variant="secondary">{t}</Button>) }`,
    extra: ['Button'],
    stories: {
      Vertical: `{ direction: 'vertical', gap: '2', children: ['One', 'Two', 'Three'].map((t) => <Button key={t} variant="secondary">{t}</Button>) }`,
    },
  },
  {
    n: 'Text',
    args: `{ variant: 'h3', children: 'Product requests' }`,
    stories: {
      Body: `{ variant: 'body', tone: 'body', children: 'WIN routes every request to the right producer.' }`,
      Caption: `{ variant: 'caption', tone: 'muted', children: 'Updated 10:42' }`,
    },
    scale: `(['h1','h2','h3','h4','h5','h6','body-large','body','body-small','caption','caption-strong','micro','label','card-title','button'] as const).map((v) => <Text key={v} variant={v}>{v}: Product data, validated</Text>)`,
  },
  {
    n: 'VisuallyHidden',
    args: `{ children: 'Read by screen readers only' }`,
    render: `(args) => <p>Look closely: <VisuallyHidden {...args} /> (nothing is visible here, but a screen reader announces the hidden text)</p>`,
  },
  // Actions and navigation
  {
    n: 'Button',
    args: `{ children: 'Save draft', variant: 'primary', size: 'medium' }`,
    stories: {
      Primary: `{ variant: 'primary', children: 'Create request' }`,
      Secondary: `{ variant: 'secondary', children: 'Save draft' }`,
      Tertiary: `{ variant: 'tertiary', children: 'Cancel' }`,
      Primary2: `{ variant: 'primary-2', children: 'Request a demo' }`,
      Danger: `{ variant: 'danger', children: 'Delete file' }`,
      DangerSecondary: `{ variant: 'danger-secondary', children: 'Delete account' }`,
      IconLeft: `{ icon: 'plus', iconPosition: 'left', children: 'Add product' }`,
      IconRight: `{ icon: 'arrow-right', iconPosition: 'right', children: 'Continue' }`,
      Loading: `{ loading: true, children: 'Saving' }`,
      Disabled: `{ disabled: true, children: 'Unavailable' }`,
    },
  },
  {
    n: 'IconButton',
    args: `{ icon: 'trash', label: 'Remove file', variant: 'tertiary' }`,
    stories: { Primary: `{ icon: 'plus', label: 'Add', variant: 'primary' }` },
  },
  {
    n: 'LinkButton',
    args: `{ href: '#', children: 'Read the guide' }`,
    stories: { Secondary: `{ href: '#', variant: 'secondary', children: 'View all' }` },
  },
  {
    n: 'SegmentedControl',
    args: `{ label: 'View', options: [{ value: 'list', label: 'List' }, { value: 'grid', label: 'Grid' }, { value: 'map', label: 'Map' }], value: 'list', onChange: () => {} }`,
    render: `(args) => { const [v, setV] = React.useState(args.value); return <SegmentedControl {...args} value={v} onChange={setV} />; }`,
  },
  {
    n: 'Chip',
    args: `{ children: 'Germany' }`,
    stories: { Selected: `{ selected: true, children: 'Germany' }`, Removable: `{ onRemove: () => {}, children: 'Riesling' }` },
  },
  {
    n: 'Menu',
    args: `{ label: 'Row actions', trigger: <Button variant="secondary">Actions</Button>, items: [{ label: 'Open record', icon: 'page', onSelect: () => {} }, { label: 'Export', icon: 'download', onSelect: () => {} }, { label: 'Delete', onSelect: () => {}, disabled: true }] }`,
    extra: ['Button'],
  },
  {
    n: 'TopNav',
    args: `{ label: 'Sections', items: [{ label: 'Overview', href: '#', selected: true }, { label: 'Requests', href: '#' }, { label: 'Data quality', href: '#' }] }`,
  },
  { n: 'SideNav', args: `{ label: 'Main', items: ${NAV} }`, stories: { Collapsed: `{ label: 'Main', collapsed: true, items: ${NAV} }` } },
  {
    n: 'Breadcrumbs',
    args: `{ items: [{ label: 'Home', href: '#' }, { label: 'Requests', href: '#' }, { label: 'Riesling Kabinett 2023' }] }`,
  },
  {
    n: 'Pagination',
    args: `{ page: 2, pageCount: 9, onChange: () => {} }`,
    render: `(args) => { const [p, setP] = React.useState(args.page); return <Pagination {...args} page={p} onChange={setP} />; }`,
  },
  {
    n: 'Steps',
    args: `{ current: 1, steps: [{ title: 'Connect your ERP' }, { title: 'Choose required fields' }, { title: 'Invite producers' }, { title: 'Send your first request' }] }`,
    stories: {
      Vertical: `{ orientation: 'vertical', current: 1, steps: [{ title: 'Connect your ERP', description: 'Done' }, { title: 'Choose required fields', description: 'In progress' }, { title: 'Invite producers', description: 'Next' }] }`,
    },
  },
  {
    n: 'UserMenu',
    args: `{ name: 'Julia Berger', subtitle: 'Retailer' }`,
    stories: { Compact: `{ name: 'Julia Berger', compact: true }` },
  },
  // Inputs
  {
    n: 'Input',
    args: `{ label: 'Email', placeholder: 'name@company.com' }`,
    stories: {
      WithHelp: `{ label: 'Article number', help: 'From your ERP', defaultValue: '10482' }`,
      Error: `{ label: 'Email', defaultValue: 'name@', error: 'Enter a valid email address.' }`,
      Success: `{ label: 'Email', defaultValue: 'julia@company.com', success: 'Looks good.' }`,
      Password: `{ label: 'Password', type: 'password', defaultValue: 'secret' }`,
      Disabled: `{ label: 'Email', disabled: true, defaultValue: 'julia@company.com' }`,
    },
  },
  {
    n: 'Textarea',
    args: `{ label: 'Note to the producer', maxLength: 200, placeholder: 'Please include aromas and logistics data.' }`,
    stories: { Error: `{ label: 'Note', error: 'This field is required.' }` },
  },
  {
    n: 'Dropdown',
    args: `{ label: 'Producer', options: [{ value: 'a', label: 'Weingut Sonnental' }, { value: 'b', label: 'Weingut am Rebhang' }, { value: 'c', label: 'Cantina Valmonte' }] }`,
    render: `(args) => { const [v, setV] = React.useState<string | undefined>(undefined); return <div style={{ width: 320, minHeight: 240 }}><Dropdown {...args} value={v} onChange={setV} /></div>; }`,
  },
  {
    n: 'Checkbox',
    args: `{ label: 'Request required fields only' }`,
    stories: {
      Checked: `{ label: 'Include archived', defaultChecked: true }`,
      Indeterminate: `{ label: 'Select all', indeterminate: true }`,
      Error: `{ label: 'I agree to the privacy policy', error: 'Required.' }`,
    },
  },
  { n: 'Radio', args: `{ label: 'Basic', name: 'plan', description: 'For small catalogues' }` },
  {
    n: 'RadioGroup',
    args: `{ label: 'Plan', name: 'plan', value: 'a', onChange: () => {}, options: [{ value: 'a', label: 'Basic', description: 'For small catalogues' }, { value: 'b', label: 'Team' }, { value: 'c', label: 'Enterprise' }] }`,
    render: `(args) => { const [v, setV] = React.useState('a'); return <RadioGroup {...args} value={v} onChange={setV} />; }`,
  },
  {
    n: 'Toggle',
    args: `{ label: 'Email updates', checked: true, onChange: () => {} }`,
    render: `(args) => { const [on, setOn] = React.useState(args.checked); return <Toggle {...args} checked={on} onChange={setOn} />; }`,
  },
  {
    n: 'Stepper',
    args: `{ label: 'Quantity', value: 3, onChange: () => {}, min: 1 }`,
    render: `(args) => { const [n, setN] = React.useState(args.value); return <Stepper {...args} value={n} onChange={setN} />; }`,
  },
  { n: 'Slider', args: `{ label: 'Completeness', showValue: true, defaultValue: 60 }` },
  {
    n: 'FileDropzone',
    args: `{ title: 'Drop files here', description: 'PDF, JPG or PNG up to 10 MB', onFiles: () => {} }`,
    stories: { Error: `{ title: 'Drop files here', error: 'The file is too large.', onFiles: () => {} }` },
  },
  {
    n: 'FileItem',
    args: `{ name: 'label-front.pdf', meta: '1.2 MB', state: 'complete' }`,
    stories: {
      Uploading: `{ name: 'label-back.pdf', meta: '2.8 MB', state: 'uploading', progress: 45 }`,
      Error: `{ name: 'draft.pdf', meta: 'Upload failed', state: 'error' }`,
    },
  },
  {
    n: 'TagInput',
    args: `{ label: 'Grape varieties', value: ['Riesling', 'Silvaner'], onChange: () => {}, placeholder: 'Add a variety' }`,
    render: `(args) => { const [v, setV] = React.useState(args.value); return <TagInput {...args} value={v} onChange={setV} />; }`,
  },
  { n: 'Calendar', args: `{ locale: 'en' }`, stories: { German: `{ locale: 'de' }` } },
  { n: 'DatePicker', args: `{ label: 'Requested on', placeholder: 'Pick a date', locale: 'en' }`, tall: true },
  // Feedback and overlays
  {
    n: 'Alert',
    args: `{ status: 'info', title: 'Packaging data for PPWR', children: 'The EU packaging regulation applies from 12 August 2026.' }`,
    stories: {
      Success: `{ status: 'success', title: 'Request sent', children: 'Weingut Sonnental has been notified.' }`,
      Warning: `{ status: 'warning', title: 'Missing fields', children: '3 products need alcohol content.' }`,
      Error: `{ status: 'error', title: 'Could not save', children: 'Check your connection and try again.' }`,
      Filled: `{ status: 'info', variant: 'filled', title: 'New version', children: 'Reload to update.' }`,
      Dismissible: `{ status: 'info', title: 'Tip', children: 'You can filter by producer.', onDismiss: () => {} }`,
    },
  },
  {
    n: 'Badge',
    args: `{ children: 'In progress', status: 'info' }`,
    stories: {
      Success: `{ status: 'success', icon: 'check', children: 'Complete' }`,
      Warning: `{ status: 'warning', children: 'Requested' }`,
      Error: `{ status: 'error', children: 'Overdue' }`,
      Filled: `{ status: 'success', variant: 'filled', children: 'Connected' }`,
      Subtle: `{ status: 'info', variant: 'subtle', children: 'New' }`,
    },
  },
  { n: 'Loader', args: `{ size: 'medium', label: 'Loading' }`, stories: { Large: `{ size: 'large', label: 'Loading' }` } },
  { n: 'Skeleton', args: `{ type: 'text', count: 3 }`, stories: { Row: `{ type: 'row', count: 3 }`, Card: `{ type: 'card' }` } },
  {
    n: 'ProgressBar',
    args: `{ label: 'Completeness', value: 60, showValue: true }`,
    stories: { Disabled: `{ label: 'Completeness', value: 20, disabled: true }` },
  },
  {
    n: 'Tooltip',
    args: `{ content: 'Copy the article number', position: 'top', children: <IconButton icon="copy" label="Copy" variant="secondary" /> }`,
    extra: ['IconButton'],
    tall: true,
  },
  {
    n: 'Popover',
    args: `{ title: 'Missing fields', trigger: <Button variant="secondary">Details</Button>, children: 'Alcohol content and allergens are still required.' }`,
    extra: ['Button'],
    tall: true,
  },
  {
    n: 'Modal',
    args: `{ open: true, title: 'Send request to 3 producers?', description: 'They will be notified by email.', onClose: () => {}, children: 'Weingut Sonnental, Weingut am Rebhang and Domaine des Coteaux can then fill in the data online.', footer: <><Button variant="secondary">Cancel</Button><Button>Send request</Button></> }`,
    extra: ['Button'],
    overlay: true,
    render: `(args) => { const [open, setOpen] = React.useState(false); return <><Button onClick={() => setOpen(true)}>Open modal</Button><Modal {...args} open={open} onClose={() => setOpen(false)} /></>; }`,
  },
  {
    n: 'ConfirmDialog',
    args: `{ open: true, tone: 'danger', title: 'Delete this file?', confirmLabel: 'Delete file', onCancel: () => {}, onConfirm: () => {}, children: 'This cannot be undone.' }`,
    extra: ['Button'],
    overlay: true,
    render: `(args) => { const [open, setOpen] = React.useState(false); return <><Button variant="danger-secondary" onClick={() => setOpen(true)}>Delete file</Button><ConfirmDialog {...args} open={open} onCancel={() => setOpen(false)} onConfirm={() => setOpen(false)} /></>; }`,
  },
  {
    n: 'Drawer',
    args: `{ open: true, title: 'Riesling Kabinett 2023', onClose: () => {}, children: 'Requested on 03 Nov 2026 from Weingut Sonnental. 68% complete.', footer: <><Button variant="secondary">Close</Button><Button>Open record</Button></> }`,
    extra: ['Button'],
    overlay: true,
    render: `(args) => { const [open, setOpen] = React.useState(false); return <><Button onClick={() => setOpen(true)}>Open drawer</Button><Drawer {...args} open={open} onClose={() => setOpen(false)} /></>; }`,
  },
  {
    n: 'ToastProvider',
    args: `{}`,
    extra: ['useToast', 'Button', 'Stack'],
    overlay: true,
    render: `() => { const Demo = () => { const toast = useToast(); return <Stack direction="horizontal" gap="3"><Button onClick={() => toast({ title: 'Request sent', description: 'Weingut Sonnental has been notified.', status: 'success' })}>Send request</Button><Button variant="secondary" onClick={() => toast({ title: 'Could not save', status: 'error' })}>Fail</Button></Stack>; }; return <ToastProvider><Demo /></ToastProvider>; }`,
  },
  // Content
  { n: 'Divider', args: `{ label: 'or' }`, stories: { Plain: `{}` } },
  {
    n: 'Avatar',
    args: `{ name: 'Julia Berger', size: 'medium' }`,
    stories: { Online: `{ name: 'Julia Berger', size: 'large', status: 'online' }` },
  },
  {
    n: 'AvatarGroup',
    args: `{ people: [{ name: 'Julia Berger' }, { name: 'Max Keller' }, { name: 'Sara Roth' }, { name: 'Anna Wei\\u00DF' }], max: 3 }`,
  },
  {
    n: 'List',
    args: `{ divided: true, children: <><ListItem title="Email" description="Weekly summary" trailing={<Toggle aria-label="Email" checked onChange={() => {}} />} /><ListItem title="Push" description="Instant alerts" trailing={<Toggle aria-label="Push" checked={false} onChange={() => {}} />} /></> }`,
    extra: ['ListItem', 'Toggle'],
  },
  {
    n: 'ListItem',
    args: `{ title: 'Weingut Sonnental', description: '12 open requests', leading: <Avatar name="Weingut Sonnental" size="small" />, trailing: <Badge status="info">Active</Badge> }`,
    extra: ['Avatar', 'Badge'],
  },
  {
    n: 'ProductThumbnail',
    args: `{ alt: 'Riesling Kabinett 2023', size: 'medium' }`,
    stories: { Large: `{ alt: 'Riesling Kabinett 2023', size: 'large' }` },
  },
  {
    n: 'EmptyState',
    args: `{ title: 'No overdue requests', description: 'Every request is on time. Create a new one when you are ready.', action: <Button>Create request</Button> }`,
    extra: ['Button'],
  },
  {
    n: 'Timeline',
    args: `{ label: 'Activity', children: <><TimelineItem title="Fields updated" time="10:42" description="Weingut Sonnental edited aromas and media." status="success" /><TimelineItem title="Request sent" time="09:15" description="Sp\\u00E4tburgunder Reserve 2021 sent to Weingut am Rebhang." status="info" /><TimelineItem title="Record received" time="Yesterday" description="Prosecco Extra Dry is complete." /></> }`,
    extra: ['TimelineItem'],
  },
  {
    n: 'TimelineItem',
    args: `{ title: 'Fields updated', time: '10:42', description: 'Weingut Sonnental edited aromas and media.', status: 'success' }`,
  },
  {
    n: 'Accordion',
    args: `{ children: <><AccordionItem title="Is WIN free for producers?" defaultOpen>Yes. Producers deliver and release their data at no cost.</AccordionItem><AccordionItem title="Who can see my data?">Only retailers who sent you a request.</AccordionItem><AccordionItem title="Where is my data stored?">On German servers.</AccordionItem></> }`,
    extra: ['AccordionItem'],
  },
  {
    n: 'AccordionItem',
    args: `{ title: 'Is WIN free for producers?', defaultOpen: true, children: 'Yes. Producers deliver and release their data at no cost.' }`,
  },
  {
    n: 'Card',
    args: `{ title: 'Team', description: 'Who can edit', footer: <Button>Invite</Button>, children: 'Julia Berger, Max Keller and Sara Roth.' }`,
    extra: ['Button'],
  },
  {
    n: 'Table',
    args: `{ caption: 'Latest product requests', rowKey: (r: Record<string, string>) => r.id, rows: ${ROWS}, columns: [{ key: 'product', header: 'Product', render: (r: Record<string, string>) => r.product }, { key: 'producer', header: 'Producer', render: (r: Record<string, string>) => r.producer }, { key: 'status', header: 'Status', render: (r: Record<string, string>) => <Badge status={r.status === 'Complete' ? 'success' : r.status === 'Overdue' ? 'error' : 'info'}>{r.status}</Badge> }] }`,
    extra: ['Badge'],
    render: `(args) => { const [sel, setSel] = React.useState<string[]>([]); return <Table {...args} selected={sel} onSelectedChange={setSel} />; }`,
  },
  // Screen parts
  {
    n: 'BrandLogo',
    args: `{ brand: 'WIN', size: 'medium' }`,
    stories: { EuvinoPRO: `{ brand: 'EuvinoPRO' }`, Inverse: `{ brand: 'WIN', color: 'inverse' }` },
  },
  {
    n: 'Header',
    args: `{ size: 'medium', actions: <UserMenu name="Julia Berger" subtitle="Retailer" />, children: <TopNav label="Sections" items={[{ label: 'How it works', href: '#' }, { label: 'Retailers', href: '#' }, { label: 'Producers', href: '#' }]} /> }`,
    extra: ['UserMenu', 'TopNav'],
  },
  {
    n: 'PageHeader',
    args: `{ title: 'Dashboard', subtitle: 'Where your product requests and data quality stand today.', actions: <Button>Create request</Button> }`,
    extra: ['Button'],
  },
  {
    n: 'Footer',
    args: `{ legal: '\\u00A9 2026 EuvinoPRO', links: [{ label: 'Imprint', href: '#' }, { label: 'Privacy', href: '#' }, { label: 'Contact', href: '#' }] }`,
  },
  // Charts
  {
    n: 'Stat',
    args: `{ label: 'Open requests', value: '128', delta: '+12 this week', trend: 'up' }`,
    stories: { Down: `{ label: 'Average time to complete', value: '3.2 days', delta: '\\u22120.4 days', trend: 'down' }` },
  },
  { n: 'BarChart', args: `{ label: 'Requests by status', data: ${DATA}, legend: true }` },
  {
    n: 'LineChart',
    args: `{ label: 'Requests per month', data: [{ label: 'Jun', value: 40 }, { label: 'Jul', value: 62 }, { label: 'Aug', value: 55 }, { label: 'Sep', value: 88 }, { label: 'Oct', value: 70 }, { label: 'Nov', value: 96 }] }`,
  },
  { n: 'DonutChart', args: `{ label: 'Requests by status', data: ${DATA}, center: '128', legend: true }` },
  { n: 'Gauge', args: `{ label: 'Data quality', value: 92 }` },
  {
    n: 'ProgressList',
    args: `{ items: [{ label: 'Weingut Sonnental', value: 68 }, { label: 'Weingut am Rebhang', value: 100 }, { label: 'Domaine des Coteaux', value: 41 }] }`,
  },
  {
    n: 'DataCard',
    args: `{ title: 'Requests over time', description: 'Created and completed, last 6 months', stats: <><Stat label="Created" value="482" delta="+8%" trend="up" /><Stat label="Completed" value="455" delta="+11%" trend="up" /></>, children: <LineChart label="Requests per month" data={[{ label: 'Jun', value: 40 }, { label: 'Jul', value: 62 }, { label: 'Aug', value: 55 }, { label: 'Sep', value: 88 }]} /> }`,
    extra: ['Stat', 'LineChart'],
  },

  // Added with the CRM work: people, files, history, scheduling, search and editing.
  {
    n: 'PersonChip',
    args: `{ name: 'Anna Berg', suffix: '(you)' }`,
    stories: {
      Removable: `{ name: 'Ben Kohl', onRemove: () => {}, removeLabel: 'Remove Ben Kohl' }`,
      Small: `{ name: 'Cem Arslan', size: 'small', onRemove: () => {}, removeLabel: 'Remove Cem Arslan' }`,
    },
  },
  {
    n: 'PeopleList',
    args: `{ people: [{ name: 'Anna Berg', current: true }, { name: 'Ben Kohl', href: '#', detail: 'ben.kohl@example.com' }, { name: 'Cem Arslan', href: '#', detail: 'cem.arslan@example.com' }, { name: 'Dana Wolf', href: '#', detail: 'dana.wolf@example.com' }], max: 2, moreLabel: (n: number) => n + ' more people' }`,
  },
  { n: 'InlineList', args: `{ items: ['Thu, 12 Nov 2026', '10:30–11:00', '30 min'] }` },
  { n: 'FileChip', args: `{ name: 'price-list-2027.pdf', onDownload: () => {}, downloadLabel: 'Download price-list-2027.pdf' }` },
  {
    n: 'FileChipList',
    args: `{ label: 'Attachments', files: [{ name: 'product-data-2027.pdf' }, { name: 'price-list-2027.xlsx' }], onDownload: () => {} }`,
  },
  {
    n: 'ActivityItem',
    args: `{ icon: 'mail', title: 'Product data for season 2027', meta: ['28 Oct 2026, 10:24', 'Anna Berg → Ben Kohl'], children: 'Hello Ben, attached are the updated product details for the 2027 season. Please check prices and vintages by the end of the month and let us know if anything is missing.', lines: 2, onOpen: () => {} }`,
    extra: ['Timeline'],
    render: `(args) => <Timeline label="History"><ActivityItem {...args} /></Timeline>`,
  },
  {
    n: 'KeyValueList',
    args: `{ layout: 'columns', items: [{ label: 'Website', value: 'www.sonnental.example' }, { label: 'Postcode', value: '67593' }, { label: 'Industry', value: 'Producer' }] }`,
  },
  {
    n: 'BreakdownBar',
    args: `{ label: 'Top activities', items: [{ label: 'Email', value: 6 }, { label: 'Call', value: 3 }, { label: 'Meeting', value: 2 }, { label: 'Note', value: 1 }] }`,
  },
  {
    n: 'FilterTabs',
    args: `{ label: 'Filter history', variant: 'chip', value: 'all', onChange: () => {}, items: [{ id: 'all', label: 'All' }, { id: 'notes', label: 'Notes', count: 2 }, { id: 'emails', label: 'Emails', count: 5 }, { id: 'files', label: 'Files', count: 1 }] }`,
    render: `(args) => { const [v, setV] = React.useState(args.value); return <FilterTabs {...args} value={v} onChange={setV} />; }`,
  },
  {
    n: 'SplitButton',
    args: `{ children: 'Reply', icon: 'reply', variant: 'secondary', size: 'small', menuLabel: 'More reply options', items: [{ label: 'Reply all', onSelect: () => {} }, { label: 'Forward', onSelect: () => {} }] }`,
  },
  { n: 'FieldAction', args: `{ children: 'Add phone number', icon: 'plus' }` },
  { n: 'CloseButton', args: `{ label: 'Close' }`, stories: { Small: `{ label: 'Close', size: 'small' }` } },
  {
    n: 'Combobox',
    args: `{ label: 'Start', value: '540', toggleLabel: 'Show times', options: [{ value: '540', label: '09:00' }, { value: '555', label: '09:15' }, { value: '570', label: '09:30' }, { value: '585', label: '09:45' }, { value: '600', label: '10:00' }] }`,
    tall: true,
    render: `(args) => { const [v, setV] = React.useState(args.value); return <Combobox {...args} value={v} onChange={setV} />; }`,
  },
  {
    n: 'SearchField',
    args: `{ label: 'Search producers', value: '', onChange: () => {}, results: [], onSelect: () => {}, placeholder: 'Search producers' }`,
    tall: true,
    render: `(args) => { const [q, setQ] = React.useState(''); const all = [{ id: 'a', label: 'Weingut Sonnental' }, { id: 'b', label: 'Weingut am Rebhang' }, { id: 'c', label: 'Cantina Valmonte' }]; return <SearchField {...args} value={q} onChange={setQ} results={all.filter((r) => r.label.toLowerCase().includes(q.toLowerCase()))} />; }`,
  },
  {
    n: 'GlobalSearch',
    args: `{ label: 'Search everything', value: '', onChange: () => {}, categories: [{ id: 'all', label: 'All categories' }, { id: 'producers', label: 'Producers', icon: 'building' }], category: 'all', onCategoryChange: () => {}, results: [], onSelect: () => {}, heading: 'All results', placeholder: 'Search' }`,
    tall: true,
    render: `(args) => { const [q, setQ] = React.useState(''); const [c, setC] = React.useState('all'); const hits = q ? [{ id: 'a', title: 'Weingut Sonnental', icon: 'building' as const, lines: ['12 contacts'] }] : []; return <GlobalSearch {...args} value={q} onChange={setQ} category={c} onCategoryChange={setC} results={hits} />; }`,
  },
  {
    n: 'LabelPicker',
    args: `{ label: 'Label for Weingut Sonnental', value: 'customer', onChange: () => {}, options: [{ id: 'customer', label: 'Customer', status: 'success' }, { id: 'lead', label: 'Lead', status: 'info' }] }`,
    tall: true,
    render: `(args) => { const [v, setV] = React.useState<string | null>(args.value); return <LabelPicker {...args} value={v} onChange={setV} />; }`,
  },
  {
    n: 'InlineEdit',
    args: `{ label: 'Edit producer name', value: 'Weingut Sonnental', onChange: () => {} }`,
    render: `(args) => { const [v, setV] = React.useState(args.value); return <InlineEdit {...args} value={v} onChange={setV} />; }`,
  },
  {
    n: 'Editor',
    args: `{ label: 'Note', value: '', onChange: () => {}, onSave: () => {}, placeholder: 'Write a note … mention someone with @', defaultExpanded: true }`,
    render: `(args) => { const [v, setV] = React.useState('Follow up on the **price list** by Friday.'); return <Editor {...args} value={v} onChange={setV} onSave={() => setV('')} />; }`,
  },
  {
    n: 'DateNav',
    args: `{ label: 'Thursday, 12 November 2026', onPrevious: () => {}, onNext: () => {}, previousLabel: 'Previous day', nextLabel: 'Next day' }`,
  },
  {
    n: 'ActivityCard',
    args: `{ title: 'Discuss the 2027 price list', type: 'Meeting', rows: [{ icon: 'calendar', content: 'Thu, 12 Nov 2026, 10:30–11:00' }, { icon: 'user', content: 'Anna Berg, Ben Kohl' }], onOpen: () => {} }`,
  },
  {
    n: 'StatusSummary',
    args: `{ icon: 'calendar', title: 'Thu, 12 Nov 2026, 10:30–11:00', description: 'Everyone is free at this time.' }`,
    stories: {
      Conflict: `{ icon: 'warning-triangle', tone: 'error', title: 'Thu, 12 Nov 2026, 09:00–09:30', description: 'Ben Kohl is busy at this time.' }`,
    },
  },
  {
    n: 'AvailabilityTimeline',
    args: `{ title: 'Thursday, 12 November 2026', onPrevious: () => {}, onNext: () => {}, columns: [{ id: '2026-11-12', label: 'Thu' }], rows: [{ id: 'a', name: 'Anna Berg', events: { '2026-11-12': [{ start: 540, end: 600, status: 'busy' }] } }, { id: 'b', name: 'Ben Kohl', events: { '2026-11-12': [{ start: 660, end: 720, status: 'tentative' }] } }], free: [{ column: '2026-11-12', start: 600, end: 660 }, { column: '2026-11-12', start: 720, end: 1020 }] }`,
    tall: true,
  },
];
