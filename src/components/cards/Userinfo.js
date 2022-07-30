import React from "react";

const Userinfo = ({ currentuser }) => {


  return (
    <div className="card">
      <img src={currentuser.avatar} alt="avatar" />
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
