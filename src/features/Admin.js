import React, { useState, useRef, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import {
  BsFillCalendarDateFill,
  BsPieChartFill,
  BsServer,
} from "react-icons/bs";
import profile from "../components/assets/images/ebe.png";

const Admin = ({ employees }) => {
  const cardRef = useRef();

  const [currentuser, setCurrentUser] = useState({});
  const renderUser = (id) => {
    const user = employees.filter((element) => {
      return element.id === id;
    });
    //console.log(user);
    setCurrentUser(user);
  };
  // useEffect(() => {
  //   cardRef.forceUpdate();
  // }, [currentuser]);

  console.log(currentuser);
  return (
    <section className="admin__view">
      <div className="left">
        <div className="welcome-info">
          <h2>Hello Ebenezar</h2>
          <span>Welcome back!</span>
        </div>
        <div className="starts">
          <div className="starts__card">
            <BsFillCalendarDateFill />
            <h3>7</h3>
            <small>Emmployees working today</small>
          </div>
          <div className="starts__card">
            <BsFillCalendarDateFill />
            <h3>7</h3>
            <small>Emmployees working today</small>
          </div>
          <div className="starts__card">
            <BsPieChartFill />
            <h3>4</h3>
            <small>Total Departments</small>
          </div>
          <div className="starts__card">
            <BsServer />
            <h4>34</h4>
            <small>Total Employees</small>
          </div>
        </div>
        <form>
          <BiSearchAlt className="search__icon" />
          <input className="search" type="search" placeholder="Type away..." />
        </form>
        <div className="users-list">
          <div className="user-title">
            <h3>Manage Employees</h3>
            <select type="option">
              <option>Filter</option>
              <option>System Design</option>
              <option>Sales</option>
            </select>
          </div>
          <div className="results">
            {employees.map((users) => (
              <span
                key={users.id}
                onClick={() => {
                  renderUser(users.id);
                }}
              >
                <h4>{users.name}</h4>
                <small>{users.department}</small>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="right">
        <div className="card" ref={cardRef}>
          <img src={profile} />
          <h3>{currentuser.name}</h3>
          <span className="card-info">
            <span>Usertype</span>
            <p>Admin</p>
          </span>
          <span className="card-info">
            <span>StaffId</span>
            <p>{currentuser.staffid}</p>
          </span>
          <span className="card-info">
            <span>Department</span>
            <p>{currentuser.department}</p>
          </span>
        </div>
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
      </div>
    </section>
  );
};

export default Admin;
