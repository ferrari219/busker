// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "src/styles/theme";

const inputStyle = css`
  padding: 0.3rem 0.2rem 0.2rem 0.2rem;
  background-color: white;
  border: 1px solid ${theme.color.default};
  border-radius: 0.4rem;
  &:focus,
  &.active {
    outline: none;
    border: 1px solid ${theme.color.active};
  }
`;

interface IinputProps {
  value?: string;
  placeholder?: string;
  disable?: boolean;
}

// https://brunch.co.kr/@chulhochoiucj0/20

const Input = ({
  value = "",
  placeholder = "플레이스 홀더",
  disable,
}: IinputProps) => {
  return (
    <input
      css={inputStyle}
      type="text"
      value={value}
      placeholder={placeholder}
      disabled={disable}
    />
  );
};

export default Input;
