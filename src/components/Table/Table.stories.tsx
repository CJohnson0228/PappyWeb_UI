import React from "react";

import { Table } from './Table';

export default {
  title: "Data Display Components/Table",
  component: Table,
  decorators: [],
  parameters: {},
}

export const Basic = () => <Table />;

export const WithProps = () => <Table prop="A Prop" />;