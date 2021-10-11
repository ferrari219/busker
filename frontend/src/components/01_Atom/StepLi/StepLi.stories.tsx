import { ComponentMeta, ComponentStory } from "@storybook/react";
import StepLi from "./StepLi";

export default {
  title: "01_Atom/StepLi",
  component: StepLi,
} as ComponentMeta<typeof StepLi>;

const Template: ComponentStory<typeof StepLi> = (args) => <StepLi {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  step: 1,
  label: "스토어 등록",
  active: true,
};
