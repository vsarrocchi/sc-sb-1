import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonSc from "./ButtonSc";

export default {
  title: "Components/InputsSc/ButtonSc",
  component: ButtonSc,
} as ComponentMeta<typeof ButtonSc>;

const Template: ComponentStory<typeof ButtonSc> = (args) => (
  <ButtonSc {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "contained",
  color: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "contained",
  color: "secondary",
  label: "Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: "Button",
};
