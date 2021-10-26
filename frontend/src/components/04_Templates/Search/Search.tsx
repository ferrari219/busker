import React from "react";
import FootFloat from "src/components/03_Organism/FootFloat";
import SearchResult from "src/components/03_Organism/SearchResult";

interface IsearchProps {
  iptClick?: () => void;
}

const Search = ({ iptClick }: IsearchProps) => {
  return (
    <div>
      <FootFloat iptClick={iptClick} />
      <SearchResult />
    </div>
  );
};

export default Search;
