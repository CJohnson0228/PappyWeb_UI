import React from "react";

import { Dialog } from './Dialog';

export default {
  title: "Surface Components/Dialog",
  component: Dialog,
  decorators: [],
  parameters: {},
}

export const Basic = () => <Dialog />;

export const WithProps = () => <Dialog prop="A Prop" />;