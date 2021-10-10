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

interface ImenuulProps {}

const MenuUl = ({}: ImenuulProps & IconProps) => {
  return (
    <ul css={ulStyle}>
      <MenuLi icon="IcoSearch" label="검색" />
      <MenuLi icon="IcoSearch" label="검색" />
      <MenuLi icon="IcoSearch" label="검색" />
    </ul>
  );
};

export default MenuUl;
