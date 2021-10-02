// import { ReactComponent as Colors } from '../assets/colors.svg';
import React from "react";
import * as icons from "./svg";

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[]; // 스토리에서 불러오기 위함
// console.log(iconTypes); //배열화로 바꾼 형태

export type IconProps = {
  /** 사용 할 아이콘 타입 */
  icon: IconType;
  /** 아이콘 색상 */
  color?: string;
  /** 아이콘 크기 */
  size?: string | number;
  className?: string;
};

const Icon = ({ icon, color, size, className }: IconProps) => {
  const SVGIcon = icons[icon];
  console.log(SVGIcon);
  return (
    <SVGIcon
      // css={{ fill: color || 'currentColor', width: size, height: 'auto' }}
      className={className}
    />
  );
};

export default Icon;
