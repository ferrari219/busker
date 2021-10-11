import React from "react";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SrOnly } from "src/styles/globalStyle";
import theme from "src/styles/theme";

const stepLiStyle = css`
  border-bottom: 0.5rem solid #f1f1f1;
  button {
    padding: 2rem 1rem;
    background-color: transparent;
    border: none;
    h2 {
      ${SrOnly};
    }
    span {
      padding: 0.5rem 1rem;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
    }
    strong {
      display: none;
    }
  }
  &.is-active {
    border-bottom: 0.5rem solid ${theme.color.main};
    button {
      padding: 2rem 3rem;
      span {
        background-color: ${theme.color.main};
        color: white;
      }
      strong {
        display: inline-block;
        padding-left: 0.5rem;
        color: #777;
      }
    }
  }
`;

interface IstepliProps {
  step: number;
  label?: string;
  active?: boolean;
  onClick?: () => void;
}

const StepLi = ({ step, label, active = false, onClick }: IstepliProps) => {
  return (
    <li css={stepLiStyle} className={[active && "is-active"].join(" ")}>
      <button type="button" onClick={onClick}>
        <h2>{step}단계 중 탭꾸밈: StepLi</h2>
        <span>{step}</span>
        <strong>{label}</strong>
      </button>
    </li>
  );
};

export default StepLi;
