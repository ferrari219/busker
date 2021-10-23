import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchComp from "./SearchComp";

export default {
  title: "02_Molecules/SearchComp",
  component: SearchComp,
} as ComponentMeta<typeof SearchComp>;

const Template: ComponentStory<typeof SearchComp> = (args) => (
  <SearchComp {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};
