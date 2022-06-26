import React from "react";

import { ButtonGroup } from './ButtonGroup';

export default {
  title: "Interaction Components/ButtonGroup",
  component: ButtonGroup,
  decorators: [],
  parameters: {},
}

export const Basic = () => <ButtonGroup prop="no Prop"/>;

export const WithProps = () => <ButtonGroup prop="A Prop" />;