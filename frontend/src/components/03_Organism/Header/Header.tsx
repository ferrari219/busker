import React from "react";
import IconButton from "src/components/02_Molecules/IconButton";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const headerStyle = css`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  .divLeft {
    flex: 0 0 10rem;
    display: flex;
    flex-flow: row wrap;
  }
  .divMid {
    flex: 1;
  }
  .divRight {
    flex: 0 0 10rem;
  }
`;

const Header = () => {
  return (
    <section css={headerStyle}>
      <div className="divLeft">
        <IconButton
          icon="IcoBack"
          bgColor="transp"
          onClick={() => history.back()}
        />
        <IconButton icon="IcoMenu" bgColor="transp" />
      </div>
      <div className="divMid">
        <h2>header</h2>
      </div>
      <div className="divRight">right</div>
    </section>
  );
};

export default Header;
