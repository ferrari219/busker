import { ComponentMeta, ComponentStory } from "@storybook/react";
import StepCont from "./StepCont";

export default {
  title: "02_Molecules/StepCont",
  component: StepCont,
} as ComponentMeta<typeof StepCont>;

const Template: ComponentStory<typeof StepCont> = (args) => (
  <StepCont {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  children: "children",
};
