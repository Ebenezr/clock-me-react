import React, { useState } from "react";
import Userinfo from "../components/cards/Userinfo";
import UserList from "../components/cards/UserList";
import Welcomeinfo from "../components/cards/Welcomeinfo";
import Searchbar from "../components/forms/Searchbar";

const Timecard = ({
  employees,
  currentuser,
  setCurrentUser,
  searchTerm,
  postTimeStamp,
  handleSearch,
  filterUsers,
}) => {
  const [stamps, setStamp] = useState();
  const renderUser = (id) => {
    const user = employees.filter((element) => {
      return element.id === id;
    });
    const userobj = user[0];
    setCurrentUser(userobj);
  };

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
      if (!timeIn.length < 1) {
        timeOut = new Date().toGMTString();
        let currentstamp = `${timeIn}-${timeOut}`;
        setStamp(currentstamp);
        currentuser.timestamp.push(stamps);
        //if current stamp is empty dont..
        if (!currentstamp.length < 1) {
          setCurrentUser(currentuser);
          console.log(currentuser.id);
          postTimeStamp(currentuser.id, currentuser);
        }
      }
    } else {
      alert("Please select your account!");
    }
  };

  return (
    <section className="timecard__view">
      <article className="left">
        <Welcomeinfo />
        <Searchbar searchTerm={searchTerm} handleSearch={handleSearch} />
        <div className="users-list">
          <div className="user-title">
            <h3>Employees List</h3>
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
