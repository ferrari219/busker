import IconButton from "@components/02_Molecules/IconButton";
import Search from "@components/02_Molecules/Search";
import React from "react";

const FootFloat = () => {
  return (
    <div>
      <IconButton icon="IcoMenu" round="5" />
      <Search />
      <IconButton icon="IcoMenu" round="5" />
    </div>
  );
};

export default FootFloat;
