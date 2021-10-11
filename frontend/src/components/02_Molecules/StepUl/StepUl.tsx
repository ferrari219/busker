import React from "react";
import StepLi from "src/components/01_Atom/StepLi/StepLi";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const wrapStyle = css`
  position: relative;
  &::before {
    position: absolute;
    bottom: 0;
    content: "";
    width: 100%;
    height: 0.5rem;
    background-color: #f1f1f1;
  }
`;
const ulStyle = css`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const StepUl = ({}) => {
  return (
    <div css={wrapStyle}>
      <ul css={ulStyle}>
        <StepLi step={1} label="스토어 등록" />
        <StepLi step={2} label="위치 등록" active={true} />
        <StepLi step={3} label="메뉴 등록" />
        <StepLi step={4} label="상세정보" />
        <StepLi step={5} label="스토어 생성 완료" />
      </ul>
    </div>
  );
};

export default StepUl;
