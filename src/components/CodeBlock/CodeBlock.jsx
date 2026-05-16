import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import DetailsBlock from '../DetailsBlock';
import ENUMS from '../../enums/MD_ENUMS';

function CodeBlock({ className, children, ...props }) {
  const match = /language-([\w-]+)/.exec(className || '');
  const language = match ? match[1] : '';
  const value = String(children ?? '').replace(/\n$/, '');

  if (!language) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  if (language === ENUMS.JSANSWER) {
    return <DetailsBlock language="javascript">{value}</DetailsBlock>;
  }

  if (language === ENUMS.HTMLANSWER) {
    return <DetailsBlock language="html">{value}</DetailsBlock>;
  }

  return (
    <SyntaxHighlighter language={language} style={docco}>
      {value}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
