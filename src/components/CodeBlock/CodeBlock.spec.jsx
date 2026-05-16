import { render } from '@testing-library/react';
import CodeBlock from '.';
import ENUMS from '../../enums/MD_ENUMS';

test('CodeBlock - JSANSWER renders as details block', () => {
  const value = "const mock = 'mockstring';";
  const { getByText } = render(
    <CodeBlock className={`language-${ENUMS.JSANSWER}`}>{value}</CodeBlock>,
  );
  expect(getByText('פתרון')).toBeInTheDocument();
  expect(getByText(/mockstring/)).toBeInTheDocument();
});

test('CodeBlock - HTMLANSWER renders as details block', () => {
  const value = '<div>hi</div>';
  const { getByText } = render(
    <CodeBlock className={`language-${ENUMS.HTMLANSWER}`}>{value}</CodeBlock>,
  );
  expect(getByText('פתרון')).toBeInTheDocument();
});

test('CodeBlock - language block uses syntax highlighter', () => {
  const value = "const mock = 'mockstring';";
  const { getByText } = render(
    <CodeBlock className="language-javascript">{value}</CodeBlock>,
  );
  expect(getByText(/mockstring/)).toBeInTheDocument();
});

test('CodeBlock - inline code (no language) renders plain code', () => {
  const { getByText } = render(<CodeBlock>inline value</CodeBlock>);
  const el = getByText('inline value');
  expect(el.tagName).toBe('CODE');
});
