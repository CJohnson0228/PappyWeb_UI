import React from "react";

import { Link } from './Link';

export default {
  title: "Interaction Components/Link",
  component: Link,
  decorators: [],
  parameters: {},
}

export const Basic = () => <Link />;

export const WithProps = () => <Link prop="A Prop" />;