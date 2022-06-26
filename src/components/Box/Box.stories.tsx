import React from "react";

import { Box } from './Box';

export default {
  title: "Layout Components/Box",
  component: Box,
  decorators: [],
  parameters: {},
}

export const Basic = () => <Box prop="no Prop"/>;

export const WithProps = () => <Box prop="A Prop" />;