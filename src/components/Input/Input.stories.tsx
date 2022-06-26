import React from "react";

import { Input } from './Input';

export default {
  title: "Interaction Components/Input",
  component: Input,
  decorators: [],
  parameters: {},
}

export const Basic = () => <Input />;

export const WithProps = () => <Input prop="A Prop" />;