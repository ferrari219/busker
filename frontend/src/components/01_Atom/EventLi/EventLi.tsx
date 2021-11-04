import React from "react";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import ImgHam from "src/assets/img/sample_burger.jpg";

const liStyle = css`
  padding: 1rem 0;
  div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
  }
  dl {
    flex: 1;
    padding: 0 2rem;
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
    border-radius: 1rem;
  }
`;

interface IeventliProps {
  id?: number;
  company?: string;
  promotion?: string | null;
  pic: string;
  lnk?: string | null;
}

const EventLi = ({ id, company, promotion, pic, lnk }: IeventliProps) => {
  // console.log(pic);
  return (
    <li css={liStyle}>
      <Link href={lnk}>
        <a>
          <div>
            <div css={imgStyle}>
              <Image src={pic} width="200" height="200" alt="" />
            </div>
            <dl>
              <dt>{company}</dt>
              <dd>{promotion}</dd>
            </dl>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default EventLi;
