import React from "react";

import { Card } from './Card';

export default {
  title: "Surface Components/Card",
  component: Card,
  decorators: [],
  parameters: {},
}

export const Basic = () => <Card />;

export const WithProps = () => <Card prop="A Prop" />;