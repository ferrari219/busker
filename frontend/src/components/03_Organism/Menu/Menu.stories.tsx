import { ComponentMeta, ComponentStory } from "@storybook/react";
import Menu from "./Menu";

export default {
  title: "03_Organism/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
