import { ComponentMeta, ComponentStory } from "@storybook/react";
import MenuUl from "./MenuUl";

export default {
  title: "02_Molecules/MenuUl",
  component: MenuUl,
} as ComponentMeta<typeof MenuUl>;

const Template: ComponentStory<typeof MenuUl> = (args) => <MenuUl {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
