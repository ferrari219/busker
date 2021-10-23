import React from "react";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const sectionStyle = css`
  padding: 2rem;
  border-top: 1px solid #ddd;
`;
const ulStyle = css`
  list-style: none;
  margin: 0;
  padding: 0;
`;

interface IeventulProps {
  children?: React.ReactNode;
}

const EventUl = ({ children }: IeventulProps) => {
  return (
    <section css={sectionStyle}>
      <ul css={ulStyle}>{children}</ul>
    </section>
  );
};

export default EventUl;
