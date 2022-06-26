import React from 'react';
import { themeDefault } from '../../themeDefault';

export const Box = (props) => {
  let styling = {
    margin: themeDefault.spacing(1),
    padding: themeDefault.spacing(1),
    display: 'box',
  };
  let classNames = 'box';

  return ( 
    <div className={classNames} style={styling}>
      {props.prop}
    </div> 
  );
}