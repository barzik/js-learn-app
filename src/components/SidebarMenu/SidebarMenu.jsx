import React from 'react'
import List from '@material-ui/core/List'
import MainItem from '../MainItem';

function SidebarMenu (props) {
  return (
    <List data-cy="nav-list">
      {props.mdList.map((item, index) => (
        <MainItem key={index} mainItem={item} />
      ))}
    </List>
  )
}

export default SidebarMenu;
