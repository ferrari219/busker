import React from "react";
import IconButton from "../../02_Molecules/IconButton/IconButton";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "src/styles/theme";

// const navStyle = css`
//   position: relative;
// `;
const menuStyle = css`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 25rem;
  height: 100vh;
  background-color: white;
  box-shadow: ${theme.shadow[7]};
`;
const dimmedStyle = css`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

interface InavProps {}

const Nav = ({}: InavProps) => {
  return (
    <>
      <IconButton icon="IcoMenu" onClick={() => {}} shadow size="4rem" />
      <div css={menuStyle}>menu</div>
      <div css={dimmedStyle} />
    </>
  );
};

export default Nav;
