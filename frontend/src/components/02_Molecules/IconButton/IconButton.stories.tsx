import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconButton from "./IconButton";

export default {
  title: "02_Molecules/IconButton",
  component: IconButton,
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
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  size: "4rem",
  bgColor: "pointer",
  round: "10",
  shadow: true,
};
