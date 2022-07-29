import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import {
  MdSpaceDashboard,
  MdAdminPanelSettings,
  MdAnalytics,
  MdOutlineAccessTimeFilled,
  MdOutlineClose,
  MdMenu,
  MdWbSunny,
  IoMoonSharp,
} from "react-icons/md";
import { IoTimer } from "react-icons/io5";
import { BsMoonFill } from "react-icons/bs";
import profile from "../assets/images/ebe.png";

const Aside = () => {
  return (
    <aside>
      <div className="top">
        <div className="logo">
          <IoTimer className="logo__icon" />
          <h2>Clock-Me</h2>
        </div>
        <div className="close">
          <MdOutlineClose />
        </div>
      </div>

      <fieldset className="side-bar" title="manage">
        <legend>MANAGE</legend>

        <NavLink
          className="nav__link"
          activeclassname="active"
          to="/home/dashboard"
        >
          <MdSpaceDashboard />
          <h3>Dashboard</h3>
        </NavLink>

        <NavLink
          className="nav__link"
          activeclassname="active"
          to="/home/admin"
        >
          <MdAdminPanelSettings />
          <h3>Admin</h3>
        </NavLink>

        <NavLink
          className="nav__link"
          activeclassname="active"
          to="/home/analytics"
        >
          <MdAnalytics />
          <h3>Analytics</h3>
        </NavLink>

        <NavLink
          className="nav__link"
          activeclassname="active"
          to="/home/timecard"
        >
          <MdOutlineAccessTimeFilled />
          <h3>Timecard</h3>
        </NavLink>
      </fieldset>
      <fieldset className="preference" title="preference">
        <legend>PREFRENCES</legend>
        <div className="content-wrapper">
          <h3>Theme</h3>
          <div className="theme-toggler">
            <span className="active">
              <MdWbSunny />
            </span>
            <span>
              <BsMoonFill />
            </span>
          </div>
        </div>
      </fieldset>

      <div className="aside__footer">
        <div className="profile">
          <div className="profile-photo">
            <img src={profile} />
          </div>
          <div className="info">
            <p>
              <b>Ebenezar</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
