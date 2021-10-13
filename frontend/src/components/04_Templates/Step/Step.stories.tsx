import { ComponentMeta, ComponentStory } from "@storybook/react";
import Step from "./Step";

export default {
  title: "04_Templates/Step",
  component: Step,
} as ComponentMeta<typeof Step>;

const Template: ComponentStory<typeof Step> = (args) => <Step {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
