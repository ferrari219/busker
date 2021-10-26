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
  placeholder?: string;
}

const TextArea = ({
  height = "10rem",
  placeholder = "여기에 적어주세요.",
}: ItextareaProps) => {
  return (
    <textarea
      css={textareaStyle}
      style={{ height: height }}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
