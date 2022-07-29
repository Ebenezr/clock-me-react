import React from "react";
//import profile from "../assets/images/ebe.png";

const Employeecard = ({ avatar, usrname, admin, department, staffid }) => {
  return (
    // <div className="emp__card">
    //   <img src={profile} alt="avatar" />
    //   <h3>{usrname}</h3>
    //   <span className="card-info">
    //     <span>Usertype</span>
    //     <small>{admin ? "Admin" : "User"}</small>
    //   </span>
    //   <span className="card-info">
    //     <span>StaffId</span>
    //     <small>{staffid}</small>
    //   </span>
    //   <span className="card-info">
    //     <span>Department</span>
    //     <small>{department}</small>
    //   </span>

    <div className="emp__card1" id="card">
      <div className="top">
        <img src={avatar} alt="avatar" />
        <h3 id="card-title">{usrname}</h3>
      </div>
      <div className="bottom">
        <h4 id="card-designation">{department}</h4>
        <small>{staffid}</small>
      </div>
    </div>
  );
};

export default Employeecard;
