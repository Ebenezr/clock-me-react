import React from "react";
import Userinfo from "../components/cards/Userinfo";
import UserList from "../components/cards/UserList";
import Welcomeinfo from "../components/cards/Welcomeinfo";
import Searchbar from "../components/forms/Searchbar";

const Timecard = ({ employees, currentuser, setCurrentUser }) => {
  const renderUser = (id) => {
    const user = employees.filter((element) => {
      return element.id === id;
    });
    setCurrentUser(user);
  };
  return (
    <section className="timecard__view">
      <article className="left">
        <Welcomeinfo />
        <Searchbar />
        <div className="users-list">
          <div className="user-title">
            <h3>Employees List</h3>
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
          <button className="btn-out btn">Clock-In</button>
          <button className="btn-in btn">Clock-Out</button>
        </div>
        <div className="forms-container">
          My Timestamps
          <div className="timestamp-container"></div>
        </div>
      </article>
    </section>
  );
};

export default Timecard;
