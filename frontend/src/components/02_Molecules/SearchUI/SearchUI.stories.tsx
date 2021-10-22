import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchUI from "./SearchUI";

export default {
  title: "02_Molecules/SearchUI",
  component: SearchUI,
} as ComponentMeta<typeof SearchUI>;

const Template: ComponentStory<typeof SearchUI> = (args) => (
  <SearchUI {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};
