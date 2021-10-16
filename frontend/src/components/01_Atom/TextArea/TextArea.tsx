import React from "react";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "src/styles/theme";

const textareaStyle = css`
  width: 100%;
  border: 1px solid ${theme.color.default};
  resize: none;
  min-height: 1.5rem;
  outline: none;
  padding: 0.5rem;
`;

interface ItextareaProps {
  height?: string;
}

const TextArea = ({ height = "10rem" }: ItextareaProps) => {
  return <textarea css={textareaStyle} style={{ height: height }} />;
};

export default TextArea;
