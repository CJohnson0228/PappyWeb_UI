import React from 'react';
import { themeDefault } from '../../themeDefault';
import '../../scss/button-base.scss';

const Theme:object = themeDefault;

export interface ButtonProps {
  label: string;
  prop?: string;
  color?: string;
  shade?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  prop,
  color,
  shade,
  ...props
}) => {
  let styling = {
    backgroundColor: (color === undefined) 
      ? themeDefault.palette.primary.light 
      : themeDefault.palette[color as keyof object][shade as keyof object],
    padding: themeDefault.spacing(1),
    margin: themeDefault.spacing(1),
  }
  let classNames = 'Pui-button-base';

  return ( 
    <button className={classNames} style={styling}>
      {label} {prop}
    </button> 
  );
}