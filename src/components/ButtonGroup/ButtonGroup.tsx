import React from 'react';
import { themeDefault } from '../../themeDefault';

export const ButtonGroup = (props) => {
  let styling = {
    margin: themeDefault.spacing(1),
    padding: themeDefault.spacing(1),
    display: 'buttongroup',
  };
  let classNames = 'buttongroup';

  return ( 
    <div className={classNames} style={styling}>
      {props.prop}
    </div> 
  );
}