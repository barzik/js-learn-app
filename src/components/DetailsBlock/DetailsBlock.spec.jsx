import { render } from '@testing-library/react';
import DetailsBlock from './';

test('DetailsBlock renders children inside a details/summary block', () => {
  const { getByText } = render(
    <DetailsBlock language="javascript">Mock</DetailsBlock>,
  );
  expect(getByText('פתרון')).toBeInTheDocument();
  expect(getByText('Mock')).toBeInTheDocument();
});
