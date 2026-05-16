import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function DetailsBlock({ language, children }) {
  return (
    <details className="my-4 rounded border border-gray-200">
      <summary className="cursor-pointer px-3 py-2 text-base font-medium">
        פתרון
      </summary>
      <SyntaxHighlighter language={language} style={docco}>
        {children}
      </SyntaxHighlighter>
    </details>
  );
}

export default DetailsBlock;
