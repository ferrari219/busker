import React from "react";
// import Button from "@components/01_Atom/Button/Button";
import Button from "src/components/01_Atom/Button";
import Input from "src/components/01_Atom/Input";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const searchStyle = css`
  input + button {
    margin-left: 0.3rem;
  }
`;

interface IsearchProps {}

const Search = ({}: IsearchProps) => {
  return (
    <div css={searchStyle}>
      <Input placeholder="검색" />
      <Button size="sm">검색</Button>
    </div>
  );
};

export default Search;
