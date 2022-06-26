import React from "react";

import { Accordian } from './Accordian';

export default {
  title: "Surface Components/Accordian",
  component: Accordian,
  decorators: [],
  parameters: {},
}

export const Basic = () => <Accordian />;

export const WithProps = () => <Accordian prop="A Prop" />;