import React from "react";
import profile from "../assets/images/ebe.png";

const Userinfo = ({ currentuser }) => {
  // console.log(currentuser.name);

  return (
    <div className="card">
      <img src={profile} alt="avatar" />
      <h3>{currentuser.name}</h3>
      <span className="card-info">
        <span>Usertype</span>
        <p>{currentuser.admin ? "Admin" : "User"}</p>
      </span>
      <span className="card-info">
        <span>StaffId</span>
        <p>{currentuser.staffid}</p>
      </span>
      <span className="card-info">
        <span>Department</span>
        <p>{currentuser.department}</p>
      </span>
    </div>
  );
};

export default Userinfo;
