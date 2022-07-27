import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const Searchbar = ({ searchFunction }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    console.log(searchValue);
    searchFunction(searchValue);
  };
  return (
    <form>
      <BiSearchAlt className="search__icon" />
      <input
        className="search"
        type="search"
        placeholder="Type away..."
        onChange={handleSearch}
      />
    </form>
  );
};

export default Searchbar;
