import { ComponentMeta, ComponentStory } from "@storybook/react";
import Loader from "./Loader";

export default {
  title: "01_Atom/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
