import React from 'react';
import { render } from '@testing-library/react';
import HebrewName from '.';

test('HebrewName component remove extension name', () => {
  const mockName = "mockID.md";
  const { getByText, queryByText } = render(<HebrewName name={mockName} />);
  const filteredName = getByText('mockID');
  expect(filteredName).toBeInTheDocument();
  const extension = queryByText('.md');
  expect(extension).toEqual(null);
});

test('HebrewName component remove kebab case name', () => {
  const mockName = "mock-id";
  const { getByText, queryByText } = render(<HebrewName name={mockName} />);
  const filteredName = getByText('mock id');
  expect(filteredName).toBeInTheDocument();
  const extension = queryByText('mock-id');
  expect(extension).toEqual(null);
});
