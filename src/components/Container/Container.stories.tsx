import React from "react";

import { Container } from './Container';

export default {
  title: "Layout Components/Container",
  component: Container,
  decorators: [],
  parameters: {},
}

export const Basic = () => <Container />;

export const WithProps = () => <Container prop="A Prop" />;