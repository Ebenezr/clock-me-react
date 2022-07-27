import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Userinfo from "../components/cards/Userinfo";
import UserList from "../components/cards/UserList";
import Welcomeinfo from "../components/cards/Welcomeinfo";
import Starts from "../components/cards/Starts";
import Searchbar from "../components/forms/Searchbar";

const Admin = ({ employees, currentuser, setCurrentUser, searchFunction }) => {
  const renderUser = (id) => {
    const user = employees.filter((element) => {
      return element.id === id;
    });
    //console.log(user);
    const userobj = user[0];
    setCurrentUser(userobj);
  };

  return (
    <section className="admin__view">
      <article className="left">
        <Welcomeinfo />
        <Starts />
        <Searchbar searchFunction={searchFunction} />
        <div className="users-list">
          <div className="user-title">
            <h3>Manage Employees</h3>
            <select type="option">
              <option>Filter</option>
              <option>System Design</option>
              <option>Sales</option>
            </select>
          </div>
          <UserList employees={employees} renderUser={renderUser} />
        </div>
      </article>
      <article className="right">
        <Userinfo currentuser={currentuser} />
        <div className="right-manage">
          <NavLink className="btn-new btn" activeclassname="active" to="update">
            Update Info
          </NavLink>
          <NavLink className="btn-new btn" activeclassname="active" to="addnew">
            Add New?
          </NavLink>
        </div>
        <div className="forms-container">
          <Outlet />
        </div>
      </article>
    </section>
  );
};

export default Admin;
