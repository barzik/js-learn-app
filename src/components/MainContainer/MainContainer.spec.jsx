import { render } from '@testing-library/react';
import { MdContext } from '../../contexts/MdContextProvider';
import MainContainer from '.';

function renderWithMd(md) {
  return render(
    <MdContext.Provider value={{ md, loadMd: () => {} }}>
      <MainContainer />
    </MdContext.Provider>,
  );
}

test('MainContainer - renders the wrapping section', () => {
  const { container } = renderWithMd('');
  expect(container.querySelector('[data-cy="main-container"]')).not.toBeNull();
});

test('MainContainer - renders markdown content from context', () => {
  const { getByText } = renderWithMd('# Hello World');
  expect(getByText('Hello World')).toBeInTheDocument();
});
