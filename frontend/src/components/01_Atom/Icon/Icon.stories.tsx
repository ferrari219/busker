import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon, { iconTypes } from "./Icon";

export default {
  title: "01_Atom/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const icon = () => <Icon icon="Colors" />;

const Template: ComponentStory<typeof Icon> = (args) => <Icon icon="Colors" />;

// export const Overview = Template.bind({});

export const listOfIcons = () => {
  return (
    <ul>
      {/* ul css={iconListStyle} */}
      {iconTypes.map((icon) => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </ul>
  );
};
