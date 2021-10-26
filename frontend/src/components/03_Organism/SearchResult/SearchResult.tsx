import SearchLi from "src/components/01_Atom/SearchLi";
import SearchUl from "src/components/02_Molecules/SearchUl";
import React from "react";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ButtonWrap from "src/components/02_Molecules/ButtonWrap";
import Button from "src/components/01_Atom/Button";

const wrapStyle = css`
  padding: 2rem;
  background-color: #fff;
  border-radius: 1rem;
  h2 {
    margin: 0;
    padding: 0;
  }
`;

interface IsearchresultProps {
  schName?: string;
}

const SearchResult = ({ schName = "검색어" }: IsearchresultProps) => {
  return (
    <section css={wrapStyle}>
      <h2>{schName}</h2>
      <SearchUl>
        <SearchLi />
        <SearchLi />
      </SearchUl>
      <ButtonWrap>
        <Button flex={true} children="더보기" />
      </ButtonWrap>
    </section>
  );
};

export default SearchResult;
