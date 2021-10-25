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
    height: 3.5rem;
    border: none;
    &.active {
      background-color: 1px solid red;
    }
  }
  button {
    position: absolute;
    right: 0;
    top: 0;
    background-color: transparent;
    width: 3.8rem;
    height: 4rem;
    border: none;
    svg {
      width: 80%;
      height: auto;
    }
  }
`;

interface IsearchcompProps {
  iptClick?: () => void;
}

const SearchComp = ({ iptClick }: IsearchcompProps) => {
  return (
    <form>
      <div css={searchStyle}>
        <Input placeholder="검색" onClick={iptClick} />
        <button type="button">
          <Icon icon="IcoSearch" />
        </button>
      </div>
    </form>
  );
};

export default SearchComp;
