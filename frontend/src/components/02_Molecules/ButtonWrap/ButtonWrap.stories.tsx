import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonWrap from "./ButtonWrap";
import Button from "src/components/01_Atom/Button";

export default {
  title: "02_Molecules/ButtonWrap",
  component: ButtonWrap,
} as ComponentMeta<typeof ButtonWrap>;

const Template: ComponentStory<typeof ButtonWrap> = (args) => (
  <ButtonWrap {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  children: (
    <>
      <Button />
    </>
  ),
};
