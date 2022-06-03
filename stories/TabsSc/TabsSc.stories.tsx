import { ComponentStory, ComponentMeta } from "@storybook/react";

import TabsSc from "./TabsSc";

export default {
  title: "Components/TabsSc",
  component: TabsSc,
} as ComponentMeta<typeof TabsSc>;

const Template: ComponentStory<typeof TabsSc> = (args) => <TabsSc {...args} />;

export const Default = Template.bind({});
