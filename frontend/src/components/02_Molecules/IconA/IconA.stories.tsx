import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconA from "./IconA";

export default {
  title: "02_Molecules/IconA",
  component: IconA,
  argTypes: {
    bgColor: {
      options: ["basic", "pointer", "add", "notice"],
      control: { type: "radio" },
    },
    round: {
      options: ["0", "5", "10"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof IconA>;

const Template: ComponentStory<typeof IconA> = (args) => <IconA {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  size: "4rem",
  bgColor: "pointer",
  round: "10",
  shadow: true,
};
