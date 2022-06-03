import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardSc from "./CardSc";

export default {
  title: "Components/CardSc",
  component: CardSc,
} as ComponentMeta<typeof CardSc>;

const Template: ComponentStory<typeof CardSc> = (args) => <CardSc {...args} />;

export const Default = Template.bind({});
