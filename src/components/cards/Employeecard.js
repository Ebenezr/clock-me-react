import React from "react";
import profile from "../assets/images/ebe.png";

const Employeecard = ({ usrname, admin, department, staffid }) => {
  return (
    <div className="emp__card">
      <img src={profile} alt="avatar" />
      <h3>{usrname}</h3>
      <span className="card-info">
        <span>Usertype</span>
        <small>{admin ? "Admin" : "User"}</small>
      </span>
      <span className="card-info">
        <span>StaffId</span>
        <small>{staffid}</small>
      </span>
      <span className="card-info">
        <span>Department</span>
        <small>{department}</small>
      </span>
    </div>
  );
};

export default Employeecard;
