import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventLi from "./EventLi";

export default {
  title: "01_Atom/EventLi",
  component: EventLi,
} as ComponentMeta<typeof EventLi>;

const Template: ComponentStory<typeof EventLi> = (args) => (
  <EventLi {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};
