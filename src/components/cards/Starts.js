import React from "react";
import {
  BsFillCalendarDateFill,
  BsPieChartFill,
  BsServer,
} from "react-icons/bs";

const Starts = ({ employees, users }) => {
  //get total number of departments
  const unique = [...new Set(employees.map((item) => item.department))];

  return (
    <div className="starts">
      <div className="starts__card">
        <BsFillCalendarDateFill />
        <h3>{employees.length}</h3>
        <small>Employees working today</small>
      </div>
      <div className="starts__card">
        <BsFillCalendarDateFill />
        <h3>{unique.length}</h3>
        <small>Active Employees</small>
      </div>
      <div className="starts__card">
        <BsPieChartFill />
        <h3>{unique.length}</h3>
        <small>Total Departments</small>
      </div>
      <div className="starts__card">
        <BsServer />
        <h4>{employees.length}</h4>
        <small>Total Employees</small>
      </div>
    </div>
  );
};

export default Starts;
