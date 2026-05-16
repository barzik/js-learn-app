import { render } from '@testing-library/react';
import SidebarMenu from '.';

test('SidebarMenu transforms array to list items', () => {
  const mdList = [{ name: 'mockID1' }, { name: 'mockID2' }];
  const { getByText } = render(<SidebarMenu mdList={mdList} />);
  expect(getByText('mockID1')).toBeInTheDocument();
  expect(getByText('mockID2')).toBeInTheDocument();
});
