import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MdItem from '../MdItem';
import HebrewName from '../HebrewName';

function MainItem (props) {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  const mainItemName = <HebrewName name={props.mainItem.name} />;
  const items = props.mainItem.children || [];

  return (
    <React.Fragment>
      <ListItem data-cy="list-item" button divider onClick={handleClick}>
        <ListItemText primary={mainItemName} />
          {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} data-cy={`open-item-${open}`} >
        <List dense disablePadding>
          {items.map((item, index) => (
              <ListItem data-cy="sub-item" button key={index}  >
                <MdItem item={item} />
              </ListItem>
            ))}
        </List>
      </Collapse>
    </React.Fragment>
  )
}

export default MainItem;
