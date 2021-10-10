import React from "react";
import MenuUl from "src/components/02_Molecules/MenuUl";
import MenuLi from "src/components/01_Atom/MenuLi";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "src/styles/theme";
import IconButton from "src/components/02_Molecules/IconButton";

// const navStyle = css`
//   position: relative;
// `;
const menuStyle = css`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 25rem;
  height: 100vh;
  background-color: white;
  box-shadow: ${theme.shadow[7]};
`;
const dimmedStyle = css`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
const userStyle = css`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: 6rem;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

interface ImenuProps {}

const Menu = ({}: ImenuProps) => {
  return (
    <section>
      <div css={menuStyle}>
        <div css={userStyle}>
          <IconButton icon="IcoUser" bgColor="add" />
          <span>graham</span>
        </div>
        <MenuUl>
          <MenuLi icon="IcoSearch" label="검색" />
          <MenuLi icon="IcoSearch" label="검색" />
          <MenuLi icon="IcoSearch" label="검색" />
        </MenuUl>
      </div>
      <div css={dimmedStyle} />
    </section>
  );
};

export default Menu;
