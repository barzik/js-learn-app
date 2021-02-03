import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import SidebarMenu from './components/SidebarMenu';
import mdList from './docs/md.json';
import { MdContextProvider } from './contexts/MdContextProvider';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import RTL from './contexts/ThemeProvider';
import MainContainer from './components/MainContainer';


function App() {
  const classes = useStyles();

  const theme = createMuiTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });
    

  return (
    <div className={classes.root}>
    <CssBaseline />
    <RTL>
    <MdContextProvider value="">
      <ThemeProvider theme={theme}>
      <main data-testid="app-main" className={classes.content}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
            <SidebarMenu mdList={mdList.children} />
        </Drawer>
        <MainContainer />
      </main>
      </ThemeProvider>
    </MdContextProvider>
    </RTL>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& pre': {
      direction: 'ltr',
      textAlign: 'left',
    },
  },
  drawerPaper: {
    position: 'relative',
  },
  content: {
    display: 'flex',
    flexGrow: 1,
    height: '100vh',
  },
}))

export default App;
