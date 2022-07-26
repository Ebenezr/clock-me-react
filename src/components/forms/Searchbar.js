import React from 'react';
import { BiSearchAlt } from "react-icons/bi";

const Searchbar=()=> {
  return (
    <form>
    <BiSearchAlt className="search__icon" />
    <input className="search" type="search" placeholder="Type away..." />
  </form>
  )
}

export default Searchbar