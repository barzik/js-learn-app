import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MdContextConsumer } from '../../contexts/MdContextProvider';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './../CodeBlock';

function MainContainer () {
  const classes = useStyles();
  return (
    <Container data-cy="main-container" maxWidth="lg" className={classes.container} style={{overflowX:"hidden"}}>
        <MdContextConsumer>
        {context => (
            <ReactMarkdown className={classes.markdown} escapeHtml={false} renderers={{ code: CodeBlock }}>{context.md}</ReactMarkdown>
        ) }
        </MdContextConsumer>
    </Container>
  )
};

const useStyles = makeStyles(theme => ({
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      overflow: 'scroll',
    },
  }))

  export default MainContainer;
