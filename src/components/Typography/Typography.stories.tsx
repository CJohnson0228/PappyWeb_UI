import React from "react";

import { Typography } from './Typography';

export default {
  title: "Layout Components/Typography",
  component: Typography,
  decorators: [],
  parameters: {},
}

export const Basic = () => <Typography />;

export const WithProps = () => <Typography prop="A Prop" />;