import SearchLi from "src/components/01_Atom/SearchLi";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchUl from "./SearchUl";

export default {
  title: "02_Molecules/SearchUl",
  component: SearchUl,
} as ComponentMeta<typeof SearchUl>;

const Template: ComponentStory<typeof SearchUl> = (args) => (
  <SearchUl {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  children: (
    <>
      <SearchLi />
      <SearchLi />
      <SearchLi />
    </>
  ),
};
