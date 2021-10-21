import React from "react";
import IconButton from "src/components/02_Molecules/IconButton";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Nav from "@components/04_Templates/Nav";

const headerStyle = css`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 1rem 2rem;
  .divLeft {
    flex: 0 0 10rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }
  .divMid {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .divRight {
    flex: 0 0 10rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
  }
`;

interface IheaderProps {
  left?: React.ReactNode;
  mid?: React.ReactNode;
  right?: React.ReactNode;
}

const Header = ({ left, mid, right }: IheaderProps) => {
  return (
    <section css={headerStyle}>
      <div className="divLeft">{left}</div>
      <div className="divMid">
        <h1>{mid}</h1>
      </div>
      <div className="divRight">{right}</div>
    </section>
  );
};

export default Header;
