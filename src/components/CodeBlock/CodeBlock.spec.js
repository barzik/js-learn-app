import React from 'react';
import { render } from '@testing-library/react';
import CodeBlock from '.';
import ENUMS from '../../enums/MD_ENUMS';


test('CodeBlock component - JSANSWER check', () => {
  const value = "const mock = 'mockstring';";
  const language = ENUMS.JSANSWER;
  const { getByText } = render(<CodeBlock value={value} language={language} />);
  const childEl = getByText('\'mockstring\'');
  expect(childEl).toBeInTheDocument();
});

test('CodeBlock component - HTMLANSWER check', () => {
  const value = "const mock = 'mockstring';";
  const language = ENUMS.HTMLANSWER;
  const { getByText } = render(<CodeBlock value={value} language={language} />);
  const childEl = getByText('\'mockstring\'');
  expect(childEl).toBeInTheDocument();
});

test('CodeBlock component - agnostic check', () => {
  const value = "const mock = 'mockstring';";
  const { getByText } = render(<CodeBlock value={value} />);
  const childEl = getByText('\'mockstring\'');
  expect(childEl).toBeInTheDocument();
});

