import React, { useState, useEffect, useRef } from "react";

const Update = ({ currentuser, setCurrentuser, usrname }) => {
  //hold user data
  const [name, setName] = useState(usrname);
  const [department, setDepartment] = useState(currentuser.department);
  const [avatar, setAvatar] = useState(currentuser.avatar);
  const [admin, setAdmin] = useState(currentuser.admin);
  const [staffid, setStaffID] = useState(currentuser.staffid);
  const [password, setPassword] = useState(currentuser.password);
  // const [formData, setFormData] = useState({
  //   name: currentuser.name,
  //   password: currentuser.password,
  //   admin: currentuser.admin,
  //   staffid: currentuser.staffid,
  //   department: currentuser.department,
  //   avatar: currentuser.avatar,
  //   timestamp: currentuser.timestamp,
  // });
  //console.log(name);
  //setAdmin(currentuser.admin);

  const userRef = useRef();
  // const errRef = useRef();
  // const [errMsg, setErrMsg] = useState("");
  // const [succes, setSuccess] = useState(false);
  //set focus
  useEffect(() => {
    userRef.current.focus();
  }, []);
  //hangle change event
  // const handleChange = (event) => {
  //   const key = event.target.id;
  //   const value =
  //     event.target.type === "checkbox"
  //       ? event.target.checked
  //       : event.target.value;

  //   setAdmin({ [key]: value });
  //   console.log(admin);

  //   //console.log(formData.name);
  //   //setFormData({ ...formData, [key]: value });
  // };
  function handleChange(event) {
    if (event.target.id === "name") {
      setName(event.target.value);
    } else if (event.target.id === "department") {
      setDepartment(event.target.value);
    } else if (event.target.id === "avatar") {
      setAvatar(event.target.value);
    } else if (event.target.id === "admin") {
      setAdmin(event.target.checked);
    } else if (event.target.value === "staffid") {
      setStaffID(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //setCurrentuser(formData);
    console.log(password, admin, name, department, avatar);
  };

  return (
    <form className="addnew" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          id="name"
          type="text"
          ref={userRef}
          className="inputs"
          value={name}
          onChange={handleChange}
          placeholder="Jon Doe"
        />
      </label>
      <label>
        Avatar
        <input
          id="avatar"
          type="text"
          className="inputs"
          value={avatar}
          onChange={handleChange}
          placeholder="https://avater.png"
        />
      </label>
      <label>
        Password
        <input
          id="password"
          type="text"
          className="inputs"
          value={password}
          onChange={handleChange}
          placeholder="******"
        />
      </label>
      <label>
        Department
        <select
          id="department"
          className="inputs"
          value={department}
          onChange={handleChange}
        >
          <option value="Sales">Sales</option>
          <option value="Support Desk">Support Desk</option>
        </select>
      </label>

      <label>
        Staff-ID
        <input
          id="staffid"
          type="text"
          disabled
          className="inputs"
          value={staffid}
          placeholder="SD-8456"
        />
      </label>
      <span className="checkbox">
        Admin ?
        <input
          id="admin"
          type="checkbox"
          value={admin}
          onChange={handleChange}
        />
      </span>
      <button className="btn-submit">Update</button>
    </form>
  );
};

export default Update;
