import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import DetailsBlock from './../DetailsBlock';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ENUMS from '../../enums/MD_ENUMS';

function CodeBlock (props) {
  const { language, value } = props;

  let returnValue;
  if(language === ENUMS.JSANSWER) {
    returnValue = (
    <DetailsBlock language="js">
      {value}
    </DetailsBlock>
    );
  } else if(language === ENUMS.HTMLANSWER) {
    returnValue = (
    <DetailsBlock language="html">
      {value}
    </DetailsBlock>
    );
  } 
  
  else {
    returnValue = (
    <SyntaxHighlighter language={language} style={docco}>
      {value}
    </SyntaxHighlighter>);
  }
  return returnValue;
}

export default CodeBlock;