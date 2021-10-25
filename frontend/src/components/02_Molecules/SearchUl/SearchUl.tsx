import React from "react";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ulStyle = css`
  list-stlye: none;
`;

interface IsearchulProps {
  children?: React.ReactNode;
}

const SearchUl = ({ children }: IsearchulProps) => {
  return <ul css={ulStyle}>{children}</ul>;
};

export default SearchUl;
