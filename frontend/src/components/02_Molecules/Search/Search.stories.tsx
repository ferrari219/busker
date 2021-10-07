import { ComponentMeta, ComponentStory } from "@storybook/react";
import Search from "./Search";

export default {
  title: "02_Molecules/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
