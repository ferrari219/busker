import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "01_Atom/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  type: "solid",
  size: "md",
  round: "10",
  flex: false,
  children: "버튼",
};
