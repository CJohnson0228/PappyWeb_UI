import React from "react";

import { Paper } from './Paper';

export default {
  title: "Surface Components/Paper",
  component: Paper,
  decorators: [],
  parameters: {},
}

export const Basic = () => <Paper />;

export const WithProps = () => <Paper prop="A Prop" />;