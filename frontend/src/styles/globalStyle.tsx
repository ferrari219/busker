import React from "react";
// /** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";

const global = (
  <Global
    styles={css`
      * {
        background: black;
        color: #fff;
      }
    `}
  />
);

export default global;
