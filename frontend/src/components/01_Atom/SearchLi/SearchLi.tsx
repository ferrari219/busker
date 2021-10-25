import React from "react";
import Image from "next/image";
import ImgHam from "src/assets/img/sample_burger.jpg";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "src/styles/theme";

const searchliStyle = css`
  div {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }
  dl {
    flex: 1;
    dt {
      margin: 0;
      padding: 0 2rem 0 0;
      font-size: ${theme.size.lg};
    }
    dd {
      margin: 0;
      padding: 0;
      font-size: ${theme.size.base};
      &.price {
        color: ${theme.color.main};
      }
    }
  }
  p {
    flex: 0 0 10rem;
    img {
      width: 100%;
    }
  }
`;

const SearchLi = ({}) => {
  return (
    <li css={searchliStyle}>
      <div>
        <dl>
          <dt>뉴욕 칠리핫도그</dt>
          <dd>10m | 정통한정식</dd>
          <dd className="price">4.52 ★★★☆☆ (56)</dd>
        </dl>
        <p>
          <Image src={ImgHam} width="200" height="200" alt="sample" />
        </p>
      </div>
    </li>
  );
};

export default SearchLi;
