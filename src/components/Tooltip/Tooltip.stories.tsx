import React from "react";

import { Tooltip } from './Tooltip';

export default {
  title: "Data Display Components/Tooltip",
  component: Tooltip,
  decorators: [],
  parameters: {},
}

export const Basic = () => <Tooltip />;

export const WithProps = () => <Tooltip prop="A Prop" />;