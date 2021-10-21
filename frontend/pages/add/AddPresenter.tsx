import React from "react";
import Heads from "@components/99_Etc/Heads";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SrOnly } from "@styles/globalStyle";
import Step from "@components/04_Templates/Step";
import StepCont from "@components/02_Molecules/StepCont";
import Image from "next/image";
import ImgHam from "src/assets/img/sample_burger.jpg";
import Header from "@components/03_Organism/Header";
import IconButton from "@components/02_Molecules/IconButton";
import Nav from "@components/04_Templates/Nav";

const mainStyle = css``;

const AddPresenter = () => {
  return (
    <section>
      <Heads title="스토어 등록" />
      <main css={mainStyle}>
        <Header
          left={
            <>
              <IconButton
                icon="IcoBack"
                bgColor="transp"
                onClick={() => history.back()}
              />
              <Nav bgColor="transp" shadow={false} />
            </>
          }
          mid="스토어등록"
          right={<IconButton icon="IcoUser" bgColor="transp" />}
        />
        <Step />
      </main>
    </section>
  );
};

export default AddPresenter;
