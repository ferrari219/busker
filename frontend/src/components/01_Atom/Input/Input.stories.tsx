import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./Input";

export default {
  title: "01_Atom/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  value: "",
  placeholder: "플레이스 홀더",
  disable: false,
};
