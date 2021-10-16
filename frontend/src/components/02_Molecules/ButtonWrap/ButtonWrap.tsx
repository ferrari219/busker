import React from "react";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonWrapStyle = css`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  button + button,
  button + a,
  a + button {
    margin-left: 0.5rem;
  }
`;

interface IbuttonwrapProps {
  children?: React.ReactNode;
}

const ButtonWrap = ({ children }: IbuttonwrapProps) => {
  return <div css={buttonWrapStyle}>{children}</div>;
};

export default ButtonWrap;
