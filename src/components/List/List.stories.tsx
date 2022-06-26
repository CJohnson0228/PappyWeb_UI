import React from "react";

import { List } from './List';

export default {
  title: "Data Display Components/List",
  component: List,
  decorators: [],
  parameters: {},
}

export const Basic = () => <List />;

export const WithProps = () => <List prop="A Prop" />;