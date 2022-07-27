import React from "react";
import profile from "../assets/images/ebe.png";

const Employeecard = ({ usrname, admin, department, staffid }) => {
  return (
    <div className="emp__card">
      <img src={profile} alt="avatar" />
      <h3>{usrname}</h3>
      <span className="card-info">
        <span>Usertype</span>
        <p>{admin ? "Admin" : "User"}</p>
      </span>
      <span className="card-info">
        <span>StaffId</span>
        <p>{staffid}</p>
      </span>
      <span className="card-info">
        <span>Department</span>
        <p>{department}</p>
      </span>
    </div>
  );
};

export default Employeecard;
