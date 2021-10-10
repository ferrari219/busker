import React from "react";
import Head from "next/head";

interface IheadsProps {
  title?: string;
}

const Heads = ({ title }: IheadsProps) => {
  return (
    <Head>
      <title>버스커: {title}</title>
      <meta name="referrer" content="origin" />
      {/* <meta charset="utf-8" /> */}
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />
      <meta name="format-detection" content="telephone=no" />
    </Head>
  );
};

Heads.defaultProps = {
  title: "우리 동네 길거리 음식은 어디? - 버거,스테이크,커리",
};

export default Heads;
