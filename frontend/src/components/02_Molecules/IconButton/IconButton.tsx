// import React from "react";
import Icon from "src/components/01_Atom/Icon";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "src/styles/theme";
import { IconProps } from "@components/01_Atom/Icon/Icon";

const iconStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  &.bg {
    &-basic {
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.1);
      svg {
        fill: #666;
      }
    }
    &-pointer {
      background-color: ${theme.color.main};
      svg {
        fill: white;
      }
    }
  }
  &.round {
    &-0 {
    }
    &-5 {
      border-radius: 0.5rem;
    }
    &-10 {
      border-radius: 50%;
    }
  }
  &.shadow {
    box-shadow: ${theme.shadow[7]};
  }
  svg {
    width: 60%;
  }
`;

interface IiconbuttonProps {
  icon?: string;
  size?: string | number;
  round?: "0" | "5" | "10";
  bgColor?: "basic" | "pointer";
  shadow?: boolean;
  onClick?: () => void;
}

const IconButton = ({
  icon = "IcoBack",
  bgColor = "basic", //transparent
  size = "4rem",
  round = "10",
  shadow = false,
  onClick,
}: IiconbuttonProps & IconProps) => {
  return (
    <button
      css={[iconStyle, { width: size, height: size }]}
      className={[`bg-${bgColor}`, `round-${round}`, shadow && "shadow"].join(
        " ",
      )}
      onClick={onClick}
    >
      <Icon icon={icon} />
    </button>
  );
};

export default IconButton;
