import React from "react";
import { NavLink } from "react-router-dom";
const nav = () => {
  return (
    <nav className="mobileNav">
      <NavLink className="nav__link" to="/home/dashboard">
        <h3>Dashboard</h3>
      </NavLink>
      <NavLink className="nav__link" to="/home/admin">
        <h3>Admin</h3>
      </NavLink>
      <NavLink className="nav__link" to="/home/analytics">
        <h3>Analytics</h3>
      </NavLink>
      <NavLink className="nav__link" to="/home/timecard">
        <h3>Timecard</h3>
      </NavLink>
    </nav>
  );
};

export default nav;
