import React, { useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";

const Searchbar = ({handleSearch }) => {
  const inputEl = useRef("");
  const handleSearchFunction = () => {
    handleSearch(inputEl.current.value);
    
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <BiSearchAlt className="search__icon" />
      <input
        ref={inputEl}
        className="search"
        type="search"
        placeholder="Search by name"
        onChange={handleSearchFunction} 
      />
    </form>
  );
};

export default Searchbar;
