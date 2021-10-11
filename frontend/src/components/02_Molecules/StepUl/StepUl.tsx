import React from "react";
import StepLi from "src/components/01_Atom/StepLi/StepLi";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ulStyle = css`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const StepUl = ({}) => {
  return (
    <>
      <ul css={ulStyle}>
        <StepLi step={1} label="스토어 등록" />
        <StepLi step={2} label="위치 등록" active={true} />
        <StepLi step={3} label="메뉴 등록" />
        <StepLi step={4} label="상세정보" />
        <StepLi step={5} label="스토어 생성 완료" />
      </ul>
    </>
  );
};

export default StepUl;
