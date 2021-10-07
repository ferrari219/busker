// import React from "react";
import Icon from "src/components/01_Atom/Icon";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const iconStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  svg {
    width: 60%;
  }
`;

interface IiconcircleProps {
  size?: string | number;
  bgColor?: string;
  shadow?: boolean;
}

const IconCircle = ({
  bgColor = "white", //transparent
  size,
  shadow = true,
}: IiconcircleProps) => {
  return (
    <div
      css={[iconStyle, { width: size }]}
      style={{ backgroundColor: bgColor }}
      className={[shadow && "shadow"].join(" ")}
    >
      <Icon icon="Back" />
    </div>
  );
};

export default IconCircle;
