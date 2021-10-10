import React from "react";
import MenuLi from "src/components/01_Atom/MenuLi";
import { IconProps } from "@components/01_Atom/Icon/Icon";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ulStyle = css`
  list-style: none;
  li {
    padding: 0.5rem 0;
  }
`;

interface ImenuulProps {
  children: React.ReactNode;
}

const MenuUl = ({ children }: ImenuulProps) => {
  return <ul css={ulStyle}>{children}</ul>;
};

export default MenuUl;
