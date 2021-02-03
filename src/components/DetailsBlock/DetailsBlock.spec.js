import React from 'react';
import { render } from '@testing-library/react';
import DetailsBlock from './';

test('DetailsBlock component', () => {

  const children = "Mock";
  const { getByText } = render(<DetailsBlock language="mocklang">{children}</DetailsBlock>);
  const childEl = getByText(children);
  expect(childEl).toBeInTheDocument();
});
