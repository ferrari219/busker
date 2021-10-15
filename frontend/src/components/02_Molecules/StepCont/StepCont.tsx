import React from "react";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const stepContStyle = css`
  padding: 2rem;
`;

interface IstepCont {
  children: React.ReactNode;
}

const StepCont = ({ children }: IstepCont) => {
  return <div css={stepContStyle}>{children}</div>;
};

export default StepCont;
