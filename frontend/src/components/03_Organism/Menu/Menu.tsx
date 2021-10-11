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
  padding: 1rem 2rem;
  border-bottom: 1px solid #ccc;
  svg {
    width: 80% !important;
  }
  span {
    margin-left: 1rem;
  }
`;
const closeStyle = css`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

interface ImenuProps {
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const Menu = ({ onClick }: ImenuProps) => {
  return (
    <section>
      <div css={menuStyle}>
        <div css={userStyle}>
          <IconButton icon="IcoUser" bgColor="add" />
          <span>graham</span>
        </div>
        <MenuUl>
          <MenuLi icon="IcoSearch" label="검색" />
          <MenuLi icon="IcoAdd" label="스토어 생성" />
          <MenuLi icon="IcoBell" label="이벤트" />
        </MenuUl>
        <div css={closeStyle}>
          <IconButton icon="IcoClose" bgColor="transp" onClick={onClick} />
        </div>
      </div>
      <div css={dimmedStyle} />
    </section>
  );
};

export default Menu;
