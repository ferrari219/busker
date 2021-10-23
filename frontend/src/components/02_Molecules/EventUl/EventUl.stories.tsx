import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventLi from "src/components/01_Atom/EventLi";
import EventUl from "./EventUl";

export default {
  title: "02_Molecules/EventUl",
  component: EventUl,
} as ComponentMeta<typeof EventUl>;

const Template: ComponentStory<typeof EventUl> = (args) => (
  <EventUl {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  children: (
    <>
      <EventLi />
      <EventLi />
      <EventLi />
    </>
  ),
};
