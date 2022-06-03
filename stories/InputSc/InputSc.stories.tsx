import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputSc from "./InputSc";

export default {
  title: "Components/InputSc",
  component: InputSc,
} as ComponentMeta<typeof InputSc>;

const Template: ComponentStory<typeof InputSc> = (args) => (
  <InputSc {...args} />
);

export const Default = Template.bind({});
