import IconButton from "src/components/02_Molecules/IconButton";
import IconA from "src/components/02_Molecules/IconA";
import SearchComp from "src/components/02_Molecules/SearchComp";
// import React from "react";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const footFloatStyle = css`
  display: flex;
  flex-flow: row wrap;
  max-width: 89rem;
  .btn {
    flex-basis: 5rem;
    display: flex;
    justify-content: center;
  }
  .sch {
    flex: 1;
    /* display: flex;
    justify-content: center; */
  }
`;

interface IfootfloatProps {
  iptClick?: () => void;
}

const FootFloat = ({ iptClick }: IfootfloatProps) => {
  return (
    <div id="dev_footFloat" css={footFloatStyle}>
      <div className="btn">
        <IconA icon="IcoAdd" bgColor="add" round="5" href="/add" />
      </div>
      <div className="sch">
        <SearchComp iptClick={iptClick} />
      </div>
      <div className="btn">
        <IconA icon="IcoBell" bgColor="notice" round="5" href="/event" />
      </div>
    </div>
  );
};

export default FootFloat;
