import { ComponentStory, ComponentMeta } from "@storybook/react";

import TableSc from "./TableSc";

export default {
  title: "Components/TableSc",
  component: TableSc,
} as ComponentMeta<typeof TableSc>;

const Template: ComponentStory<typeof TableSc> = (args) => (
  <TableSc {...args} />
);

export const Default = Template.bind({});
