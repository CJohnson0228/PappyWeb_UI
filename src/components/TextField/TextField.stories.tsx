import React from "react";

import { TextField } from './TextField';

export default {
  title: "Interaction Components/TextField",
  component: TextField,
  decorators: [],
  parameters: {},
}

export const Basic = () => <TextField />;

export const WithProps = () => <TextField prop="A Prop" />;