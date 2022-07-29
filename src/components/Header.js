import React, { useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import Aside from "../components/nav/nav";
const Header = ({ authenticated, setAuthenticated }) => {
  const [toggleNavBar, setToggle] = useState(true);
  //const toggleNav = () => {};
  return (
    <header>
      <button
        onClick={() => {
          setToggle(!toggleNavBar);
        }}
      >
        <MdMenu />
        {toggleNavBar ? <Aside /> : null}
      </button>
      <span>
        <RiLogoutCircleLine></RiLogoutCircleLine>
        <h3
          onClick={() => {
            setAuthenticated(!authenticated);
            localStorage.clear();
          }}
        >
          Logout
        </h3>
      </span>
    </header>
  );
};

export default Header;
