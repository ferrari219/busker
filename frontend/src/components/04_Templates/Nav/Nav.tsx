import Menu from "src/components/03_Organism/Menu";
import React from "react";
import IconButton from "src/components/02_Molecules/IconButton/IconButton";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const wrapStyle = css`
  position: relative;
  left: 0;
  top: 0;
  z-index: 3;
`;
const navStyle = css`
  position: fixed;
  left: -100%;
  top: 0;
  z-index: 1;
  transition: left 0.2s ease-in-out;
  &.is-active {
    left: 0;
  }
`;

const handleMenuBtn = (e: React.SyntheticEvent<EventTarget>) => {
  e.preventDefault();
  // console.log("handleMenuBtn");
  const navs = document.querySelector("nav") as HTMLParagraphElement;
  // console.log(target);
  navs.classList.add("is-active");
};
const handleCloseBtn = (e: React.SyntheticEvent<EventTarget>) => {
  e.preventDefault();
  // console.log("close");
  const navs = document.querySelector("nav") as HTMLParagraphElement;
  // console.log(target);
  navs.classList.remove("is-active");
};

interface InavProps {
  bgColor?: "basic" | "pointer" | "add" | "notice" | "transp";
  shadow?: boolean;
}

const Nav = ({ bgColor = "basic", shadow = true }: InavProps) => {
  return (
    <div css={wrapStyle}>
      <IconButton
        icon="IcoMenu"
        bgColor={bgColor}
        onClick={handleMenuBtn}
        shadow
        size="4rem"
      />
      <nav css={navStyle}>
        <Menu onClick={handleCloseBtn} />
      </nav>
    </div>
  );
};

export default Nav;
