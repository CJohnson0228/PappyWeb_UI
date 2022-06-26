import React from "react";

import { Icon } from './Icon';

export default {
  title: "Layout Components/Icon",
  component: Icon,
  decorators: [],
  parameters: {},
}

export const Basic = () => <Icon />;

export const WithProps = () => <Icon prop="A Prop" />;