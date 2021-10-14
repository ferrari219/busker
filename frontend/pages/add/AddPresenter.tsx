import React from "react";
import Heads from "@components/99_Etc/Heads";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SrOnly } from "@styles/globalStyle";
import Step from "@components/04_Templates/Step";
import StepCont from "@components/02_Molecules/StepCont";
import Image from "next/image";
import ImgHam from "src/assets/img/sample_burger.jpg";

const mainStyle = css`
  h1 {
    ${SrOnly}
  }
`;

const AddPresenter = () => {
  return (
    <section>
      <Heads title="스토어 등록" />
      <main css={mainStyle}>
        <h1>스토어 등록</h1>
        <Step />
      </main>
    </section>
  );
};

export default AddPresenter;
