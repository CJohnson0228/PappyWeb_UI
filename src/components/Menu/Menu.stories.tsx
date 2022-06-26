import React from "react";

import { Menu } from './Menu';

export default {
  title: "Interaction Components/Menu",
  component: Menu,
  decorators: [],
  parameters: {},
}

export const Basic = () => <Menu />;

export const WithProps = () => <Menu prop="A Prop" />;