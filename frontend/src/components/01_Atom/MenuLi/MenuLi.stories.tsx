import { ComponentMeta, ComponentStory } from "@storybook/react";
import MenuLi from "./MenuLi";

export default {
  title: "01_Atom/MenuLi",
  component: MenuLi,
} as ComponentMeta<typeof MenuLi>;

const Template: ComponentStory<typeof MenuLi> = (args) => <MenuLi {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
