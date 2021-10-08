// import React from "react";
import Icon from "src/components/01_Atom/Icon";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "src/styles/theme";

const iconStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
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
  &.shadow {
    box-shadow: ${theme.shadow[7]};
  }
  svg {
    width: 60%;
  }
`;

interface IiconcircleProps {
  size?: string | number;
  bgColor?: "basic" | "pointer";
  shadow?: boolean;
  onClick?: () => void;
}

const IconCircle = ({
  bgColor = "basic", //transparent
  size = "4rem",
  shadow = false,
  onClick,
}: IiconcircleProps) => {
  return (
    <button
      css={[iconStyle, { width: size, height: size }]}
      className={[`bg-${bgColor}`, shadow && "shadow"].join(" ")}
      onClick={onClick}
    >
      <Icon icon="Back" />
    </button>
  );
};

export default IconCircle;
