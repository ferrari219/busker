import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MapSample from "src/assets/img/map_sample.jpg";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const mainStyle = css`
  overflow: hidden;
  position: relative;
  height: 100vh;
`;
const mapStyle = css`
  position: absolute;
  left: 0;
  top: 0;
  img {
    height: 100vh;
    object-fit: cover;
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      {/* https://projects.invisionapp.com/share/JZRMNHUH2BC */}
      <Head>
        <title>리바트몰</title>
      </Head>
      <main>
        <section css={mainStyle}>
          <div css={mapStyle}>
            <Image src={MapSample} alt="지도 샘플" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
