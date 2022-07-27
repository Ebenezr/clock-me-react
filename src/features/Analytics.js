import React from "react";
import Userinfo from "../components/cards/Userinfo";
import UserList from "../components/cards/UserList";
import Welcomeinfo from "../components/cards/Welcomeinfo";
import Starts from "../components/cards/Starts";
import Searchbar from "../components/forms/Searchbar";
import Employeecard from "../components/cards/Employeecard";

const Analytics = ({ employees, searchFunction }) => {
  console.log(employees);
  return (
    <section className="analytics__view">
      <article className="left">
        <Welcomeinfo />
        <Starts />
        <Searchbar searchFunction={searchFunction} />
        <div className="users-list">
          <div className="user-title">
            <h3>Employees </h3>
            <select type="option">
              <option>Filter</option>
              <option>System Design</option>
              <option>Sales</option>
            </select>
          </div>
        </div>
      </article>
      <article className="right">
        {employees.map((employee) => (
          <Employeecard
            key={employee.id}
            admin={employee.admin}
            staffid={employee.staffid}
            department={employee.department}
            usrname={employee.name}
          />
        ))}
      </article>
    </section>
  );
};

export default Analytics;
