import React from "react";

import { Drawer } from './Drawer';

export default {
  title: "Surface Components/Drawer",
  component: Drawer,
  decorators: [],
  parameters: {},
}

export const Basic = () => <Drawer />;

export const WithProps = () => <Drawer prop="A Prop" />;