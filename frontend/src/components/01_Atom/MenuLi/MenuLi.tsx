import React from "react";
import Icon from "../Icon";
import Link from "next/link";
import { IconProps } from "../Icon/Icon";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const liStyle = css`
  a {
    display: flex;
    align-items: center;
  }
  svg {
    width: 2rem;
    height: auto;
    margin-right: 1rem;
  }
  span {
    color: #444;
  }
`;

interface ImenuliProps {
  icon?: string;
  label?: string;
}

const MenuLi = ({
  icon = "IcoSearch",
  label = "스토어 생성",
}: ImenuliProps & IconProps) => {
  return (
    <li css={liStyle}>
      <Link href="https://">
        <a>
          <Icon icon={icon} />
          <span>{label}</span>
        </a>
      </Link>
    </li>
  );
};

export default MenuLi;
