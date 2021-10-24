import { ComponentMeta, ComponentStory } from "@storybook/react";
import FootFloat from "./FootFloat";

export default {
  title: "04_Templates/FootFloat",
  component: FootFloat,
} as ComponentMeta<typeof FootFloat>;

const Template: ComponentStory<typeof FootFloat> = (args) => (
  <FootFloat {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};
