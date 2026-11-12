import * as React from 'react';
import type { Preview } from '@storybook/react-vite';
import '../src/styles/tokens.css';

const preview: Preview = {
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    a11y: { test: 'todo' },
    docs: { toc: true },
  },
  decorators: [(Story) => <div style={{ fontFamily: 'var(--eu-font-body)' }}><Story /></div>],
};
export default preview;
