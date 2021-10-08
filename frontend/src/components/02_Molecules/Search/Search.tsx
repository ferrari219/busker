import React from "react";
// import Button from "@components/01_Atom/Button/Button";

import Input from "src/components/01_Atom/Input";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Icon from "src/components/01_Atom/Icon";
import theme from "src/styles/theme";

const searchStyle = css`
  position: relative;
  max-width: 89rem;
  height: 4rem;
  background-color: white;
  border: 1px solid ${theme.color.default};
  border-radius: 0.5rem;
  input {
    width: 100%;
    border: none;
  }
  button {
    position: absolute;
    right: 0;
    top: 0;
    background-color: transparent;
    width: 4rem;
    height: 4rem;
    border: none;
    svg {
      width: 80%;
      height: auto;
    }
  }
`;

interface IsearchProps {}

const Search = ({}: IsearchProps) => {
  return (
    <div css={searchStyle}>
      <Input placeholder="검색" />
      <button type="button">
        <Icon icon="IcoSearch" />
      </button>
    </div>
  );
};

export default Search;
