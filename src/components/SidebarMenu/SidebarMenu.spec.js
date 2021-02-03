import React from 'react';
import { render } from '@testing-library/react';
import SidebarMenu from '.';

test('SidebarMenu transform array to lisy', () => {
  const mdList = [ {name: 'mockID1'}, {name: 'mockID2'} ];
  const { getByText } = render(<SidebarMenu mdList={mdList} />);
  const listItem = getByText('mockID1');
  expect(listItem).toBeInTheDocument();
});

