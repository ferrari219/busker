import { ComponentMeta, ComponentStory } from "@storybook/react";
import Nav from "./Nav";

export default {
  title: "04_Templates/Nav",
  component: Nav,
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Overview = Template.bind({});
