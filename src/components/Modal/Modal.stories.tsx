import React from "react";

import { Modal } from './Modal';

export default {
  title: "Surface Components/Modal",
  component: Modal,
  decorators: [],
  parameters: {},
}

export const Basic = () => <Modal />;

export const WithProps = () => <Modal prop="A Prop" />;