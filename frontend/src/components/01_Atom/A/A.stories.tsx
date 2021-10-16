import { ComponentMeta, ComponentStory } from "@storybook/react";
import A from "./A";

export default {
  title: "01_Atom/A",
  component: A,
} as ComponentMeta<typeof A>;

const Template: ComponentStory<typeof A> = (args) => <A {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  type: "solid",
  size: "md",
  round: "5",
  flex: false,
  children: "버튼",
};
