import React from 'react';
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";


const Header=()=> {
  return (
    <header>
        <button> <MdMenu/> </button>
        <span>
            <RiLogoutCircleLine />
            <h3>Logout</h3>
        </span>
    </header>
  )
}

export default Header