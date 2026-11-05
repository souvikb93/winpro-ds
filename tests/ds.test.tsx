// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import * as React from 'react';
import { afterEach } from 'vitest';
import { Button, Input, Toggle, ToastProvider, useToast, Pagination, Table, Dropdown, Checkbox, Alert, Steps } from '../src/ds/index';

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
});
