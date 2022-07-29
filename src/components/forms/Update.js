import React, { useState, useEffect, useRef } from "react";

const Update = ({ currentuser, setCurrentuser, usrname }) => {
  //hold user data
  const [formData, setFormData] = useState({
    name: currentuser.name,
    password: currentuser.password,
    admin: currentuser.admin,
    staffid: currentuser.staffid,
    department: currentuser.department,
    avatar: currentuser.avatar,
    timestamp: currentuser.timestamp,
  });
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
  const handleChange = (event) => {
    const key = event.target.id;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setCurrentuser(formData);
    console.log(formData);
    setCurrentuser(formData);
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
          value={formData.name}
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
          value={formData.avatar}
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
          value={formData.password}
          onChange={handleChange}
          placeholder="******"
        />
      </label>
      <label>
        Department
        <select
          id="department"
          className="inputs"
          value={formData.department}
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
          value={formData.staffid}
          placeholder="SD-8456"
        />
      </label>
      <span className="checkbox">
        Admin ?
        <input
          id="admin"
          type="checkbox"
          value={formData.admin}
          onChange={handleChange}
        />
      </span>
      <button className="btn-submit">Update</button>
    </form>
  );
};

export default Update;
