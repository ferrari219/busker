import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon, { iconTypes } from "./Icon";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ulStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  li {
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;

export default {
  title: "01_Atom/Icon",
  component: Icon,
  argTypes: {
    bgColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof Icon>;

// export const icon = () => <Icon icon="IcoBack" />;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  icon: "IcoBack",
};

export const listOfIcons = () => {
  return (
    <ul css={ulStyle}>
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
