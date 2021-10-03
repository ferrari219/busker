import React from "react";

interface IinputProps {
  disable?: boolean;
}

const Input = ({ disable }: IinputProps) => {
  return <input type="text" disabled={disable} />;
};

export default Input;
