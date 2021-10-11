import React from "react";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const wrapStyle = css`
  position: relative;
  &::before {
    position: absolute;
    bottom: 0;
    content: "";
    width: 100%;
    height: 0.5rem;
    background-color: #f1f1f1;
  }
`;
const ulStyle = css`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

interface IstepulProps {
  children?: React.ReactNode;
}

const StepUl = ({ children = "children" }: IstepulProps) => {
  return (
    <div css={wrapStyle}>
      <ul css={ulStyle}>{children}</ul>
    </div>
  );
};

export default StepUl;
