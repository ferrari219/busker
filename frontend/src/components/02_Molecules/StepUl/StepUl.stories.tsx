import { ComponentMeta, ComponentStory } from "@storybook/react";
import StepUl from './StepUl';

export default {
  title: "02_Molecules/StepUl",
  component: StepUl,
} as ComponentMeta<typeof StepUl>;

const Template: ComponentStory<typeof StepUl> = (args) => <StepUl {...args} />;

export const Overview = Template.bind({});
Overview.args = {
    
};
