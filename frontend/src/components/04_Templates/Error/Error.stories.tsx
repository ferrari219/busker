import { ComponentMeta, ComponentStory } from "@storybook/react";
import Error from "./Error";

export default {
  title: "01_Atom/Error",
  component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
