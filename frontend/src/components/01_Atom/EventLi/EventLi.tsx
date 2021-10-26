import React from "react";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import ImgHam from "src/assets/img/sample_burger.jpg";

const liStyle = css`
  div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
  }
  dl {
    flex: 1;
    padding: 2rem;
    dt {
      margin: 0;
      padding: 0;
      font-weight: bold;
    }
    dd {
      margin: 0;
      padding: 0;
    }
  }
`;
const imgStyle = css`
  flex: 0 0 30%;
  margin: 0;
  padding: 0;
  /* background-color: red; */
  img {
    width: 100%;
  }
`;

const EventLi = ({}) => {
  return (
    <li css={liStyle}>
      <Link href="https://">
        <a>
          <div>
            <div css={imgStyle}>
              <Image src={ImgHam} width="200" height="200" alt="" />
            </div>
            <dl>
              <dt>뉴욕 정통 치즈버거</dt>
              <dd>오후 8시까지 전메뉴 3천원 할인</dd>
            </dl>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default EventLi;
