import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default function RTL(props) {
  return (
    <StylesProvider jss={jss}>
      {props.children}
    </StylesProvider>
  );
}