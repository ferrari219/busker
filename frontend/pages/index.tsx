import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MapSample from "@assets/img/map_sample.jpg";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Search from "@components/04_Templates/Search";
import IconButton from "@components/02_Molecules/IconButton";
import { SrOnly } from "@styles/globalStyle";
import Header from "@components/03_Organism/Header";
import Nav from "@components/04_Templates/Nav";

const h1Style = css`
  ${SrOnly}
`;
const mainStyle = css`
  overflow: hidden;
  position: relative;
  height: 100vh;
`;
const mapStyle = css`
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  img {
    height: 100vh;
    object-fit: cover;
  }
  // 포인터
  .pointer {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
    transition: top ease-in-out 0.2s;
    &.is-active {
      top: 35%;
    }
  }
  svg {
    transform: rotate(-45deg);
  }
`;
const searchStyle = css`
  position: absolute;
  left: 0;
  bottom: 2rem;
  z-index: 2;
  width: 100%;
  padding: 0 1rem;
  transition: bottom ease-in 0.2s;
  &.is-active {
    /* bottom: 80%; */
  }
`;

const handleIptClick = () => {
  const tgt = document.querySelector("#dev_search") as HTMLElement;
  const tgt2 = document.querySelector("#dev_pointer") as HTMLElement;
  // console.log(tgt);
  tgt.classList.add("is-active");
  tgt2.classList.add("is-active");
};

const Home: NextPage = () => {
  return (
    <section>
      {/* https://projects.invisionapp.com/share/JZRMNHUH2BC */}
      <Head>
        <title>리바트몰</title>
      </Head>
      <main>
        <h1 css={h1Style}>메인 페이지</h1>
        <section css={mainStyle}>
          <Header
            left={
              <>
                <Nav />
              </>
            }
          />
          <div css={mapStyle}>
            <div id="dev_pointer" className="pointer">
              <IconButton icon="IcoPointer" bgColor="pointer" shadow={true} />
            </div>
            <Image src={MapSample} alt="지도 샘플" />
          </div>
          <section id="dev_search" css={searchStyle}>
            <Search iptClick={handleIptClick} />
          </section>
        </section>
      </main>
    </section>
  );
};

export default Home;
