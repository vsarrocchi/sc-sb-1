import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputSc from "./InputSc";

export default {
  title: "Components/InputsSc/InputSc",
  component: InputSc,
} as ComponentMeta<typeof InputSc>;

const Template: ComponentStory<typeof InputSc> = (args) => (
  <InputSc {...args} />
);

export const Filled = Template.bind({});
Filled.args = {
  variant: "filled",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Standard = Template.bind({});
Standard.args = {
  variant: "standard",
};
