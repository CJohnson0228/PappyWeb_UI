import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: "Interaction Components/Button",
  component: Button,
  decorators: [],
  parameters: {},
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = () => 
<Button 
  label="Button"
  color="secondary"
  shade="light"
/>;

export const WithProps: ComponentStory<typeof Button> = () => 
<Button 
  label="Button" 
  prop="a Prop"
/>;