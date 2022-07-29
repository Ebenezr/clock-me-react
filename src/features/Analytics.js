import React from "react";
import Welcomeinfo from "../components/cards/Welcomeinfo";
import Starts from "../components/cards/Starts";
import Searchbar from "../components/forms/Searchbar";
import Employeecard from "../components/cards/Employeecard";

const Analytics = ({ searchFunction, allusers }) => {
  // function zip() {
  //   let args = [].slice.call(arguments);
  //   let longest = args.reduce(function (profile, employees) {
  //     return profile.length > employees.length ? profile : employees;
  //   }, []);

  //   return longest.map(function (_, i) {
  //     return args.map(function (array) {
  //       return array[i];
  //     });
  //   });
  // }

  return (
    <section className="analytics__view">
      <article className="left">
        <Welcomeinfo />
        <Starts employees={allusers} />
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
        {/* {employees.map((employee) => (
          <Employeecard
            key={employee.id}
            admin={employee.admin}
            staffid={employee.staffid}
            department={employee.department}
            usrname={employee.name}
          />
        ))} */}
        {allusers.map((profile, index) => (
          <Employeecard
            key={index}
            avatar={profile.picture.medium}
            usrname={profile.name.first}
            staffid={profile.cell}
            department={profile.email}
          />
        ))}
      </article>
    </section>
  );
};

export default Analytics;
