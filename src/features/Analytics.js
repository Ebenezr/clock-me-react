import React from "react";
import Welcomeinfo from "../components/cards/Welcomeinfo";
import Starts from "../components/cards/Starts";
import Searchbar from "../components/forms/Searchbar";
import Employeecard from "../components/cards/Employeecard";

const Analytics = ({ searchTerm, allusers, handleSearch, filterUsers,accName }) => {
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
        <Welcomeinfo accName={accName}/>
        <Starts employees={allusers} />
        <Searchbar searchTerm={searchTerm} handleSearch={handleSearch} />
        <div className="users-list">
          <div className="user-title">
            <h3>Employees </h3>
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
