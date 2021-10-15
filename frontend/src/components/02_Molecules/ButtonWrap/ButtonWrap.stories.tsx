import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonWrap from "./ButtonWrap";

export default {
  title: "02_Molecules/ButtonWrap",
  component: ButtonWrap,
} as ComponentMeta<typeof ButtonWrap>;

const Template: ComponentStory<typeof ButtonWrap> = (args) => (
  <ButtonWrap {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};
