import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import CodeBlock from '../CodeBlock';
import { useMdContext } from '../../contexts/MdContextProvider';

function MainContainer() {
  const { md } = useMdContext();

  return (
    <section
      data-cy="main-container"
      className="markdown flex-1 overflow-auto px-8 py-6"
    >
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{ code: CodeBlock }}
      >
        {md}
      </ReactMarkdown>
    </section>
  );
}

export default MainContainer;
