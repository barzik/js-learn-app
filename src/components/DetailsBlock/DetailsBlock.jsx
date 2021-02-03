import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function DetailsBlock (props) {
  const classes = useStyles();
  return (
    <details>
      <summary className={classes.solutionHeader}>פתרון</summary>
      <SyntaxHighlighter language={'props.language'} style={docco}>
        {props.children}
      </SyntaxHighlighter>
    </details>
  )
}
const useStyles = makeStyles(theme => ({
  solutionHeader: {
    cursor: 'pointer',
    fontSize: 16,
  },
})); 

export default DetailsBlock;