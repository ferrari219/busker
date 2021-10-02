import React from "react";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "src/styles/theme";

const buttonStyle = css`
  font-weight: 600;
  &.type {
    &-solid {
      /** 중요도 1순위 */
      background-color: ${theme.mainColor};
      border: none;
      color: white;
    }
    &-ghost {
      /** 중요도 2순위 */
      background-color: white;
      border: 1px solid ${theme.mainColor};
      color: ${theme.mainColor};
    }
    &-light {
      /** 중요도 3순위 */
      background-color: #f0f0f0;
      border: none;
      color: ${theme.mainColor};
    }
    &-outline {
      /** 중요도 3순위 */
    }
    &-text {
      /** 중요도 4순위 */
      background-color: transparent;
      border: none;
    }
    &-danger {
      /** 위험 */
    }
  }
  &.size {
    &-sm {
      padding: 0.5rem 1rem;
    }
    &-md {
      padding: 0.7rem 1.5rem;
    }
    &-lg {
      padding: 1rem 2rem;
    }
  }
  &.round {
    &-0 {
    }
    &-5 {
      border-radius: 0.5rem;
    }
    &-10 {
      border-radius: 2rem;
    }
  }
  &.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

interface IbuttonProps {
  type: "solid" | "ghost" | "light" | "outline" | "text" | "danger";
  size: "sm" | "md" | "lg";
  round: "0" | "5" | "10";
  flex: "flex" | "";
  children?: React.ReactNode;
}

const Button = ({
  type = "solid",
  size = "md",
  round = "5",
  flex = "",
  children = "버튼",
}: IbuttonProps) => {
  return (
    <button
      type="button"
      css={buttonStyle}
      className={`type-${type} size-${size} round-${round} ${flex}`}
    >
      {children}
    </button>
  );
};

export default Button;
