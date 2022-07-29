import React, { useState } from "react";
import Userinfo from "../components/cards/Userinfo";
import UserList from "../components/cards/UserList";
import Welcomeinfo from "../components/cards/Welcomeinfo";
import Searchbar from "../components/forms/Searchbar";

const Timecard = ({
  employees,
  currentuser,
  setCurrentUser,
  setTimeStamp,
  searchFunction,
}) => {
  const [stamps, setStamp] = useState("");
  const renderUser = (id) => {
    const user = employees.filter((element) => {
      return element.id === id;
    });
    const userobj = user[0];
    setCurrentUser(userobj);
  };
  //setStamp(currentuser.timestamp);
  //console.log(currentuser.timestamp);
  //console.log(stamps);
  //currentuser.map((time) => console.log(time.timestamp));
  //clock in function
  //function retuns clock in timestamp
  let timeIn;
  let timeOut;
  const clockInTime = () => {
    timeIn = new Date().toGMTString();
    return timeIn;
  };
  //function clock-out and return day's timestamp
  const clockOutTime = () => {
    //chech if user acccount is selected
    if (!(currentuser.name == "")) {
      timeOut = new Date().toGMTString();
      let currentstamp = `${timeIn}-${timeOut}`;
      setStamp(currentstamp);
      currentuser.timestamp.push(stamps);
      setCurrentUser(currentuser);
    } else {
      alert("select your account!");
    }
  };

  return (
    <section className="timecard__view">
      <article className="left">
        <Welcomeinfo />
        <Searchbar searchFunction={searchFunction} />
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
          <button className="btn-out btn" onClick={clockInTime}>
            Clock-In
          </button>
          <button className="btn-in btn" onClick={clockOutTime}>
            Clock-Out
          </button>
        </div>
        <div className="forms-container">
          <h3>My Timestamps</h3>
          <div className="timestamp-container">
            {currentuser.timestamp.map((times, index) => (
              <span key={index}>{times}</span>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Timecard;
