import React from 'react';
import { render } from '@testing-library/react'
import { MdContextProvider } from '../../contexts/MdContextProvider';
import MainContainer from '.';

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <MdContextProvider {...providerProps}>{ui}</MdContextProvider>,
    renderOptions
  )
}

// TODO: expand it
test('MainContainer - basic usage', () => {
  const providerProps = {
    md: 'C3PO',
  }
  const { container } = customRender(<MainContainer />, { providerProps })
  const childEl = container.getElementsByClassName('MuiContainer-maxWidthLg');
  expect(childEl.length).toBe(1)
});



