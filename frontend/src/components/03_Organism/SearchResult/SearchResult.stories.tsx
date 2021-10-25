import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchResult from "./SearchResult";

export default {
  title: "03_Organism/SearchResult",
  component: SearchResult,
} as ComponentMeta<typeof SearchResult>;

const Template: ComponentStory<typeof SearchResult> = (args) => (
  <SearchResult {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};
