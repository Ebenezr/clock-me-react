import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Userinfo from "../components/cards/Userinfo";
import UserList from "../components/cards/UserList";
import Welcomeinfo from "../components/cards/Welcomeinfo";
import Starts from "../components/cards/Starts";
import Searchbar from "../components/forms/Searchbar";

const Admin = ({
  deleteUser,
  employees,
  currentuser,
  setCurrentUser,
  filterUsers,
  searchTerm,
  handleSearch,
}) => {
  const renderUser = (id) => {
    const user = employees.filter((element) => {
      return element.id === id;
    });
    //console.log(user);
    const userobj = user[0];
    setCurrentUser(userobj);
  };
  //delete user
  const delUser = () => {
    deleteUser(currentuser.id);
  };

  return (
    <section className="admin__view">
      <article className="left">
        <Welcomeinfo />
        <Starts employees={employees} />
        <Searchbar searchTerm={searchTerm} handleSearch={handleSearch} />
        <div className="users-list">
          <div className="user-title">
            <h3>Manage Employees</h3>
            <select
              type="option"
              onChange={(e) => {
                filterUsers(e.target.value);
              }}
            >
              <option value="all">Filter</option>
              <option value="System Design">System Design</option>
              <option value="sales">Sales</option>
              <option value="hospitality">Hospitality</option>
            </select>
          </div>
          <UserList
            employees={employees.length > 0 ? employees : "No user available"}
            renderUser={renderUser}
          />
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
          <button className="btn-del btn" onClick={delUser}>
            Remove user
          </button>
        </div>
        <div className="forms-container">
          <Outlet />
        </div>
      </article>
    </section>
  );
};

export default Admin;
