import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextArea from "./TextArea";

export default {
  title: "01_Atom/TextArea",
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  height: "20rem",
};
