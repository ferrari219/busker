import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconCircle from "./IconCircle";

export default {
  title: "02_Molecules/IconCircle",
  component: IconCircle,
} as ComponentMeta<typeof IconCircle>;

const Template: ComponentStory<typeof IconCircle> = (args) => (
  <IconCircle {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};
