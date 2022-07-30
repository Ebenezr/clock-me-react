import React from "react";
import Welcomeinfo from "../components/cards/Welcomeinfo";
import Starts from "../components/cards/Starts";
import Searchbar from "../components/forms/Searchbar";
import Employeecard from "../components/cards/Employeecard";

const Dashboard = ({ searchTerm, allusers, handleSearch }) => {
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
    <section className="dashboard__view">
      <article className="left">
        <Welcomeinfo />
        <Starts employees={allusers} />
        <Searchbar searchTerm={searchTerm} handleSearch={handleSearch} />
        <div className="users-list">
          <div className="user-title">
            <h3>Employees </h3>
          </div>
        </div>
      </article>
      <article className="right">
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

export default Dashboard;
