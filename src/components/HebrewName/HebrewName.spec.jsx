import { render } from '@testing-library/react';
import HebrewName from '.';

test('HebrewName removes file extension', () => {
  const { getByText, queryByText } = render(<HebrewName name="mockID.md" />);
  expect(getByText('mockID')).toBeInTheDocument();
  expect(queryByText('.md')).toBeNull();
});

test('HebrewName removes kebab case', () => {
  const { getByText, queryByText } = render(<HebrewName name="mock-id" />);
  expect(getByText('mock id')).toBeInTheDocument();
  expect(queryByText('mock-id')).toBeNull();
});
