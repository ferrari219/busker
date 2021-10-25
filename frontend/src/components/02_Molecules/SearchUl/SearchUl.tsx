import React from "react";

interface IsearchulProps {
  children?: React.ReactNode;
}

const SearchUl = ({ children }: IsearchulProps) => {
  return <div>{children}</div>;
};

export default SearchUl;
