import React from "react";

import { Navbar } from './Navbar';

export default {
  title: "Surface Components/Navbar",
  component: Navbar,
  decorators: [],
  parameters: {},
}

export const Basic = () => <Navbar />;

export const WithProps = () => <Navbar prop="A Prop" />;