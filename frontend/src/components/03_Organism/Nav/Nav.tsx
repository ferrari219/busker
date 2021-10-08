import React from "react";
import IconButton from "../../02_Molecules/IconButton/IconButton";

interface InavProps {}

const Nav = ({}: InavProps) => {
  return (
    <>
      <IconButton icon="IcoMenu" onClick={() => {}} shadow size="4rem" />
      <div>menu</div>
    </>
  );
};

export default Nav;
