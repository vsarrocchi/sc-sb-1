import { ComponentStory, ComponentMeta } from "@storybook/react";

import AlertSc from "./AlertSc";

export default {
  title: "Components/AlertSc",
  component: AlertSc,
} as ComponentMeta<typeof AlertSc>;

const Template: ComponentStory<typeof AlertSc> = (args) => (
  <AlertSc {...args} />
);

export const Default = Template.bind({});
