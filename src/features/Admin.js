import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import profile from "../components/assets/images/ebe.png";

const Admin = () => {
  return (
    <section className="admin__view">
      <div className="left">
        <form>
          <BiSearchAlt className="search__icon" />
          <input className="search" type="search" placeholder="Type away..." />
        </form>
        <div className="welcome-info">
          <h2>Hello Ebenezar</h2>
          <span>Welcome back!</span>
        </div>
        <div className="users-list">
          <div className="user-title">
            <h3>Manage Employees</h3>
            <select type="option">
              <option>Filter</option>
              <option>System Design</option>
              <option>Sales</option>
            </select>
          </div>
          <span>
            <h4>Jon Doe</h4>
            <small>Sales</small>
          </span>
          <span>
            <h4>Mac Lui</h4>
            <small>Sales</small>
          </span>
          <span>
            <h4>Jasmin Iloe</h4>
            <small>Support</small>
          </span>
          <span>
            <h4>React ni Ngumu</h4>
            <small>HR</small>
          </span>
        </div>
      </div>
      <div className="right">
        <div className="card">
          <img src={profile} />
          <h3>Jon Doe</h3>
          <span className="card-info">
            <span>Usertype</span>
            <p>Admin</p>
          </span>
          <span className="card-info">
            <span>StaffId</span>
            <p>SD-456</p>
          </span>
          <span className="card-info">
            <span>Department</span>
            <p>Support Desk</p>
          </span>
        </div>
        <div className="right-manage">
          <button className="btn-update">Update Info</button>
          <button className="btn-new">Add New?</button>
        </div>
      </div>
    </section>
  );
};

export default Admin;
