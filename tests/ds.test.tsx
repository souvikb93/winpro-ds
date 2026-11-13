// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import * as React from 'react';
import { afterEach } from 'vitest';
import { Button, Input, Toggle, ToastProvider, useToast, Pagination, Table, Dropdown, Checkbox, Alert, Steps, SideNav, Breadcrumbs, Icon, GlobalSearch, Menu, IconButton, LabelPicker, InlineEdit, Card, KeyValueList, ActivityItem, Timeline, TopNav, FilterTabs, PageHeader, SplitButton, FieldAction, CloseButton, Editor, AvailabilityTimeline, ActivityCard, DateNav, SegmentedControl, Chip, PersonChip } from '../src/ds/index';

afterEach(cleanup);

describe('@euvino/ds', () => {
  it('Button defaults to type button and reports busy', () => {
    render(<Button loading>Save</Button>);
    const b = screen.getByRole('button', { name: 'Save' });
    expect(b.getAttribute('type')).toBe('button');
    expect(b.getAttribute('aria-busy')).toBe('true');
  });
  it('Input wires label, error and password reveal', () => {
    render(<Input label="Password" type="password" error="Too short" />);
    const i = screen.getByLabelText('Password') as HTMLInputElement;
    expect(i.getAttribute('aria-invalid')).toBe('true');
    expect(i.type).toBe('password');
    fireEvent.click(screen.getByRole('button', { name: 'Show password' }));
    expect(i.type).toBe('text');
  });
  it('Toggle is a switch', () => {
    const f = vi.fn();
    render(<Toggle label="Email" checked={false} onChange={f} />);
    fireEvent.click(screen.getByRole('switch', { name: 'Email' }));
    expect(f).toHaveBeenCalledWith(true);
  });
  it('Toast announces', () => {
    const T = () => { const t = useToast(); return <button onClick={() => t({ title: 'Saved', status: 'success', duration: 0 })}>go</button>; };
    render(<ToastProvider><T /></ToastProvider>);
    fireEvent.click(screen.getByText('go'));
    expect(screen.getByRole('status').textContent).toContain('Saved');
  });
  it('Pagination marks the current page', () => {
    render(<Pagination page={2} pageCount={9} onChange={() => {}} />);
    expect(screen.getByRole('button', { name: 'Page 2' }).getAttribute('aria-current')).toBe('page');
  });
  it('Table selects rows', () => {
    const f = vi.fn();
    render(<Table caption="M" rows={[{ id: 'a' }]} rowKey={(r) => r.id} selected={[]} onSelectedChange={f} columns={[{ key: 'id', header: 'Id', render: (r) => r.id }]} />);
    fireEvent.click(screen.getByLabelText('Select all rows'));
    expect(f).toHaveBeenCalledWith(['a']);
  });
  it('Dropdown picks by keyboard', () => {
    const f = vi.fn();
    render(<Dropdown label="R" value="a" onChange={f} options={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]} />);
    const c = screen.getByRole('combobox');
    fireEvent.keyDown(c, { key: 'ArrowDown' }); fireEvent.keyDown(c, { key: 'ArrowDown' }); fireEvent.keyDown(c, { key: 'Enter' });
    expect(f).toHaveBeenCalledWith('b');
  });
  it('Checkbox shows indeterminate; Alert error announces; Steps marks current', () => {
    render(<><Checkbox label="C" indeterminate /><Alert status="error">x</Alert><Steps current={1} steps={[{ title: 'A' }, { title: 'B' }]} /></>);
    expect((screen.getByLabelText('C') as HTMLInputElement).indeterminate).toBe(true);
    expect(screen.getByRole('alert')).toBeTruthy();
    expect(screen.getByText('B').closest('li')?.getAttribute('aria-current')).toBe('step');
  });
  it('SideNav dark rail names counts; Breadcrumbs allow repeated labels; new icons render', () => {
    const err = vi.spyOn(console, 'error').mockImplementation(() => {});
    const { container } = render(<>
      <SideNav label="Main" theme="dark" collapsed items={[{ label: 'Trading Partners', icon: 'shop', count: 3, href: '#' }, { label: 'Reports', icon: 'stats-down-square', selected: true, href: '#' }]} />
      <Breadcrumbs items={[{ label: 'Contacts', href: '#' }, { label: 'Contacts' }]} />
      <Icon name="credit-cards" />
    </>);
    expect(container.querySelector('.eu-sidenav--dark')).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Trading Partners, 3' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Reports' }).getAttribute('aria-current')).toBe('page');
    expect(screen.getAllByText('Contacts')).toHaveLength(2);
    expect(err).not.toHaveBeenCalled();
    err.mockRestore();
  });
  it('GlobalSearch highlights matches, filters by category and opens a hit with Enter', () => {
    const onSelect = vi.fn(); const onCategoryChange = vi.fn();
    render(<GlobalSearch label="Search" value="schmidt" onChange={() => {}} heading="All results" category="all" onCategoryChange={onCategoryChange} onSelect={onSelect}
      categories={[{ id: 'all', label: 'All', count: 2 }, { id: 'people', label: 'People', count: 1 }]}
      results={[{ id: 'o1', title: 'Weinladen Schmidt GmbH', icon: 'building' }, { id: 'p1', title: 'Carsten Schmidt', person: 'Carsten Schmidt', lines: ['carsten.schmidt@weinladen.com'] }]} />);
    const box = screen.getByRole('combobox', { name: 'Search' });
    fireEvent.focus(box);
    expect(screen.getAllByRole('option')).toHaveLength(2);
    expect(document.querySelectorAll('mark').length).toBe(3);
    fireEvent.click(screen.getByRole('button', { name: /People/ }));
    expect(onCategoryChange).toHaveBeenCalledWith('people');
    fireEvent.keyDown(box, { key: 'ArrowDown' });
    fireEvent.keyDown(box, { key: 'Enter' });
    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ id: 'p1' }));
    expect(screen.queryByRole('listbox')).toBeNull();
  });
  it('SideNav expandable rail opens with the toggle or [, and folds back on Escape or item choice', () => {
    render(<SideNav label="Main" collapsed expandable items={[{ label: 'Reports', icon: 'page', href: '#' }]} labels={{ expand: 'Expand nav', collapse: 'Collapse' }} />);
    const toggle = screen.getByRole('button', { name: 'Expand nav' });
    fireEvent.click(toggle);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(screen.getByText('Reports')).toBeTruthy();
    fireEvent.keyDown(document.body, { key: 'Escape' });
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    fireEvent.keyDown(document.body, { key: '[' });
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    fireEvent.click(screen.getByRole('link', { name: /Reports/ }));
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });
  it('SideNav More menu lists extra items, moves with arrows and returns focus on Escape', () => {
    render(<SideNav label="Main" collapsed overflow items={[{ label: 'Contacts', icon: 'user', href: '#', selected: true }]}
      moreItems={[{ label: 'Projects', icon: 'page', href: '#' }, { label: 'Settings', icon: 'settings', href: '#' }]} labels={{ more: 'More' }} />);
    const more = screen.getByRole('button', { name: 'More' });
    fireEvent.click(more);
    const items = screen.getAllByRole('menuitem');
    expect(items.map((i) => i.textContent)).toEqual(['Projects', 'Settings']);
    expect(document.activeElement).toBe(items[0]);
    fireEvent.keyDown(items[0], { key: 'ArrowDown' });
    expect(document.activeElement).toBe(items[1]);
    fireEvent.keyDown(items[1], { key: 'Escape' });
    expect(screen.queryByRole('menu')).toBeNull();
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'More' }));
  });
  it('Menu marks the selected choice; IconButton shows an indicator dot', () => {
    const onSelect = vi.fn();
    render(<Menu label="Sort" trigger={<IconButton icon="sort" label="Sort" indicator />} items={[{ label: 'Name', selected: true, onSelect }, { label: 'Date', selected: false, onSelect }]} />);
    const trigger = screen.getByRole('button', { name: 'Sort' });
    expect(trigger.querySelector('.eu-btn__dot')).toBeTruthy();
    fireEvent.click(trigger);
    const items = screen.getAllByRole('menuitemradio');
    expect(items.map((i) => i.getAttribute('aria-checked'))).toEqual(['true', 'false']);
  });
  it('LabelPicker searches, picks with the keyboard and adds a new label', () => {
    const onChange = vi.fn(); const onCreate = vi.fn();
    const options = [{ id: 'c', label: 'Customer', status: 'success' as const }, { id: 'l', label: 'Lead', status: 'info' as const }];
    render(<LabelPicker label="Label for Anna" value="c" options={options} onChange={onChange} onCreate={onCreate} labels={{ search: 'Search label', addNamed: (n) => `Add ${n}` }} />);
    fireEvent.click(screen.getByRole('button', { name: 'Label for Anna: Customer' }));
    const box = screen.getByRole('combobox', { name: 'Search label' });
    expect(screen.getAllByRole('option').map((o) => o.getAttribute('aria-selected'))).toEqual(['true', 'false']);
    fireEvent.keyDown(box, { key: 'ArrowDown' });
    fireEvent.keyDown(box, { key: 'Enter' });
    expect(onChange).toHaveBeenCalledWith('l');
    fireEvent.click(screen.getByRole('button', { name: 'Label for Anna: Customer' }));
    fireEvent.change(screen.getByRole('combobox', { name: 'Search label' }), { target: { value: 'Reseller' } });
    fireEvent.click(screen.getByRole('button', { name: /Add Reseller/ }));
    expect(onCreate).toHaveBeenCalledWith('Reseller');
  });
  it('InlineEdit saves on Enter, cancels on Escape and picks a date from the Calendar', () => {
    const onChange = vi.fn();
    const { rerender } = render(<InlineEdit label="Edit name" value="Anna" onChange={onChange} />);
    fireEvent.click(screen.getByRole('button', { name: 'Edit name' }));
    const box = screen.getByRole('textbox', { name: 'Edit name' });
    fireEvent.change(box, { target: { value: 'Anna Roell' } });
    fireEvent.keyDown(box, { key: 'Enter' });
    expect(onChange).toHaveBeenCalledWith('Anna Roell');
    fireEvent.click(screen.getByRole('button', { name: 'Edit name' }));
    fireEvent.change(screen.getByRole('textbox', { name: 'Edit name' }), { target: { value: 'X' } });
    fireEvent.keyDown(screen.getByRole('textbox', { name: 'Edit name' }), { key: 'Escape' });
    expect(onChange).toHaveBeenCalledTimes(1);
    const onDate = vi.fn();
    rerender(<InlineEdit type="date" label="Change date" value="2026-11-11" onChange={onDate} display="11.11.2026" />);
    fireEvent.click(screen.getByRole('button', { name: 'Change date' }));
    fireEvent.click(screen.getAllByRole('button').find((b) => b.textContent === '20') as HTMLElement);
    expect(onDate).toHaveBeenCalledWith('2026-11-20');
  });
  it('Card collapses; KeyValueList, ActivityItem and TopNav icons render', () => {
    render(<>
      <Card title="Details" collapsible toggleLabel="Show or hide Details"><KeyValueList items={[{ label: 'Website', value: 'mertes.de' }]} /></Card>
      <Timeline label="History"><ActivityItem icon="mail" title="Subject" meta="Today" footer="Anna">Preview</ActivityItem></Timeline>
      <TopNav label="Compose" items={[{ label: 'Notes', icon: 'edit', selected: true }, { label: 'Call', icon: 'phone' }, { label: 'Email', icon: 'mail' }]} />
    </>);
    expect(screen.getByText('Website')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Show or hide Details' }));
    expect(screen.queryByText('Website')).toBeNull();
    expect(screen.getByRole('heading', { name: 'Subject' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Notes' }).querySelector('svg')).toBeTruthy();
  });
  it('FilterTabs selects live items and shows inert ones as text; PageHeader medium has an icon', () => {
    const onChange = vi.fn();
    render(<>
      <PageHeader size="medium" icon="building" title="Peter Mertes" subtitle="Winery" />
      <FilterTabs label="Filter history" value="all" onChange={onChange} items={[{ id: 'all', label: 'All' }, { id: 'notes', label: 'Notes', count: 5 }, { id: 'mail', label: 'Emails', inert: true }]} />
    </>);
    expect(screen.getByRole('button', { name: 'All' }).getAttribute('aria-pressed')).toBe('true');
    fireEvent.click(screen.getByRole('button', { name: 'Notes (5)' }));
    expect(onChange).toHaveBeenCalledWith('notes');
    expect(screen.queryByRole('button', { name: 'Emails' })).toBeNull();
    expect(screen.getByText('Emails')).toBeTruthy();
    expect(screen.getByRole('heading', { level: 1, name: 'Peter Mertes' }).className).toContain('eu-type-desktop-h4');
  });
  it('Timeline progress marks entries above the reading line', () => {
    const { container } = render(<Timeline label="History" progress><ActivityItem icon="mail" title="A">a</ActivityItem><ActivityItem icon="mail" title="B">b</ActivityItem></Timeline>);
    expect(container.querySelector('.eu-tl--progress')).toBeTruthy();
    expect(container.querySelector('.is-current')).toBeTruthy();
  });
  it('FilterTabs chip variant and clickable ActivityItem', () => {
    const onOpen = vi.fn(); const onChange = vi.fn();
    const { container } = render(<>
      <FilterTabs variant="chip" label="Filter" value="all" onChange={onChange} items={[{ id: 'all', label: 'All' }, { id: 'mail', label: 'Emails', inert: true }]} />
      <Timeline label="History"><ActivityItem icon="mail" title="Subject" onOpen={onOpen} actions={<button type="button">Reply</button>}>Preview</ActivityItem></Timeline>
    </>);
    expect(container.querySelectorAll('.eu-chip').length).toBe(2);
    expect(screen.queryByRole('button', { name: 'Emails' })).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Subject' }));
    expect(onOpen).toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button', { name: 'Reply' }));
    expect(onOpen).toHaveBeenCalledTimes(1);
  });
  it('SplitButton runs the main action and opens the related actions from the arrow', () => {
    const main = vi.fn(); const imp = vi.fn();
    render(<SplitButton icon="plus" onClick={main} menuLabel="More ways to add" items={[{ label: 'Import', onSelect: imp }]}>Contact</SplitButton>);
    fireEvent.click(screen.getByRole('button', { name: 'Contact' }));
    expect(main).toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button', { name: 'More ways to add' }));
    fireEvent.click(screen.getByRole('menuitem', { name: 'Import' }));
    expect(imp).toHaveBeenCalled();
    expect(screen.getByRole('group')).toBeTruthy();
  });
  it('FieldAction is a plain button that runs its action; CloseButton has a name', () => {
    const add = vi.fn(); const close = vi.fn();
    render(<><FieldAction onClick={add}>Add phone number</FieldAction><CloseButton label="Close" onClick={close} /></>);
    fireEvent.click(screen.getByRole('button', { name: 'Add phone number' }));
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(add).toHaveBeenCalled(); expect(close).toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Add phone number' }).getAttribute('type')).toBe('button');
  });
  it('Editor opens on focus, formats the selection and saves', () => {
    const onSave = vi.fn();
    function Host() {
      const [v, setV] = React.useState('hallo');
      return <Editor label="Note" value={v} onChange={setV} onSave={onSave} />;
    }
    render(<Host />);
    const field = screen.getByRole('textbox', { name: 'Note' }) as HTMLTextAreaElement;
    expect(screen.getByRole('toolbar', { name: 'Formatting' })).toBeTruthy();
    field.setSelectionRange(0, 5);
    fireEvent.click(screen.getByRole('button', { name: 'Bold' }));
    expect(field.value).toBe('**hallo**');
    fireEvent.click(screen.getByRole('button', { name: 'Save' }));
    expect(onSave).toHaveBeenCalledWith('**hallo**');
  });
  it('AvailabilityTimeline draws free time, the selection and a legend; DateNav steps', () => {
    const onPrevious = vi.fn();
    render(
      <AvailabilityTimeline
        title="Wed" onPrevious={onPrevious} onNext={() => {}} columns={[{ id: 'd', label: 'Wed' }]}
        rows={[{ id: 'a', name: 'Ann', events: { d: [{ start: 540, end: 600, status: 'busy' }] } }]}
        free={[{ column: 'd', start: 660, end: 690 }]} selection={{ column: 'd', start: 540, end: 570, valid: false }}
      />,
    );
    expect(screen.getByRole('img', { name: 'Ann: Busy, 09:00–10:00' })).toBeTruthy();
    expect(screen.getByRole('list', { name: 'Legend' }).textContent).toContain('Conflict');
    fireEvent.click(screen.getByRole('button', { name: 'Previous' }));
    expect(onPrevious).toHaveBeenCalled();
  });
  it('ActivityCard opens from its title; small sizes render', () => {
    const onOpen = vi.fn();
    render(<><ActivityCard title="Call" type="Termin" onOpen={onOpen} /><DateNav label="x" onPrevious={() => {}} onNext={() => {}} /><SegmentedControl size="small" label="View" value="a" onChange={() => {}} options={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]} /><Chip>Tag</Chip></>);
    fireEvent.click(screen.getByRole('button', { name: 'Call' }));
    expect(onOpen).toHaveBeenCalled();
    expect(screen.getByRole('radiogroup', { name: 'View' }).className).toContain('eu-seg--small');
  });
  it('PersonChip shows initials or a picture and removes', () => {
    const onRemove = vi.fn();
    render(<><PersonChip name="Max Eul" onRemove={onRemove} removeLabel="Max Eul entfernen" /><PersonChip name="Ann" photo="a.jpg" size="small" /></>);
    expect(screen.getByText('ME')).toBeTruthy();
    expect(document.querySelectorAll('.eu-pchip__avatar img').length).toBe(1);
    fireEvent.click(screen.getByRole('button', { name: 'Max Eul entfernen' }));
    expect(onRemove).toHaveBeenCalled();
  });
});
