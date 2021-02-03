import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles'
import { MdContextConsumer } from './../../contexts/MdContextProvider';
import HebrewName from '../HebrewName';

function MdItem (props) {
  const item = props.item;
  const name = item.name;
  const classes = useStyles();

  return (
    <MdContextConsumer>
    {context => (
        <ListItemText className={classes.subMenu} onClick={() => {context.loadMd(item)}} primary={<HebrewName name={name} />} />
    )}
    </MdContextConsumer>

  )
}

const useStyles = makeStyles(theme => ({
  subMenu: {
    cursor: 'pointer',
  },
}));

export default MdItem;
