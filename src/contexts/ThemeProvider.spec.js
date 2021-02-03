import React from 'react';
import { render } from '@testing-library/react'
import ThemeProvider from './ThemeProvider';


// TODO: expand it
test('ThemeProvider - basic usage', () => {
  const { getByText } = render(<ThemeProvider><span>mockContent</span></ThemeProvider>);
  const wrappedItem = getByText('mockContent');
  expect(wrappedItem).toBeInTheDocument();
});
