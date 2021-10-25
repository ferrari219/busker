import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchLi from "./SearchLi";

export default {
  title: "01_Atom/SearchLi",
  component: SearchLi,
} as ComponentMeta<typeof SearchLi>;

const Template: ComponentStory<typeof SearchLi> = (args) => (
  <SearchLi {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};
