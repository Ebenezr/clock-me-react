import React from 'react'
import {
    BsFillCalendarDateFill,
    BsPieChartFill,
    BsServer,
  } from "react-icons/bs";

const Starts=()=> {
  return (
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
  )
}

export default Starts