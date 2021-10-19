import Header from "@components/03_Organism/Header";
import Heads from "@components/99_Etc/Heads";
import React from "react";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SrOnly } from "@styles/globalStyle";

const mainStyle = css`
  h1 {
    ${SrOnly}
  }
`;

const EventPresenter = () => {
  return (
    <div>
      <Heads title="이벤트" />
      <h1>이벤트</h1>
      <main css={mainStyle}>
        <Header />
      </main>
    </div>
  );
};

export default EventPresenter;
