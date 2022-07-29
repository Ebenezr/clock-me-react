import React from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdMenu } from "react-icons/md";

const Header = ({ authenticated, setAuthenticated }) => {
  return (
    <header>
      <button>
        <MdMenu />
      </button>
      <span>
        <RiLogoutCircleLine />
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
