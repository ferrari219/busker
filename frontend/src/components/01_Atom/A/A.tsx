import React from "react";
import Link from "next/link";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "src/styles/theme";

const aStyle = css`
  font-weight: 600;
  font-size: 1.6rem;
  &.type {
    &-solid {
      /** 중요도 1순위 */
      background-color: ${theme.color.main};
      border: none;
      color: white;
    }
    &-ghost {
      /** 중요도 2순위 */
      background-color: white;
      border: 1px solid ${theme.color.main};
      color: ${theme.color.main};
    }
    &-light {
      /** 중요도 3순위 */
      background-color: #f0f0f0;
      border: none;
      color: ${theme.color.main};
    }
    &-outline {
      /** 중요도 3순위 */
      background-color: #fff;
      border: 1px solid #ccc;
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
      padding: 0.3rem 1rem 0.2rem 1rem;
    }
    &-md {
      padding: 0.7rem 1.5rem 0.5rem 1.5rem;
    }
    &-lg {
      padding: 1rem 2rem 0.8rem 2rem;
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

interface IaProps {
  type?: "solid" | "ghost" | "light" | "outline" | "text" | "danger";
  size?: "sm" | "md" | "lg";
  round?: "0" | "5" | "10";
  flex?: boolean;
  children?: React.ReactNode;
  href?: string;
}

const A = ({
  type = "solid",
  size = "md",
  round = "10",
  flex = false,
  children = "버튼",
  href = "https://",
}: IaProps) => {
  return (
    <Link href={href}>
      <a
        css={aStyle}
        className={[
          `type-${type}`,
          `size-${size}`,
          `round-${round}`,
          flex && "flex",
        ].join(" ")}
      >
        {children}
      </a>
    </Link>
  );
};

export default A;
