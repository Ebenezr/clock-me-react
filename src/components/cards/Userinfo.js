import React from "react";
import profile from "../assets/images/ebe.png";

const Userinfo = ({ currentuser }) => {
  return (currentuser.map(user => (
    <div className="card" key={user.id}>
      <img src={profile} alt="avatar"/>
      <h3>{user.name}</h3>
      <span className="card-info">
        <span>Usertype</span>
        <p>{user.admin ? "Admin" : "User"}</p>
      </span>
      <span className="card-info">
        <span>StaffId</span>
        <p>{user.staffid}</p>
      </span>
      <span className="card-info">
        <span>Department</span>
        <p>{user.department}</p>
      </span>
    </div>
  )))
};

export default Userinfo;
