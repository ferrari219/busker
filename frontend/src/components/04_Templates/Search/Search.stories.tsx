import { ComponentMeta, ComponentStory } from "@storybook/react";
import Search from "./Search";

export default {
  title: "01_Atom/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
