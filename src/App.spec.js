import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('App sanity check', () => {
  const { getByTestId } = render(<App />);
  const childEl = getByTestId('app-main');
  expect(childEl).toBeInTheDocument();
});

