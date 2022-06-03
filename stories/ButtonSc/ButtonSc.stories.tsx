import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonSc from "./ButtonSc";

export default {
  title: "Components/ButtonSc",
  component: ButtonSc,
} as ComponentMeta<typeof ButtonSc>;

const Template: ComponentStory<typeof ButtonSc> = (args) => (
  <ButtonSc {...args} />
);

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  label: "Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: "Button",
};
