import React, { useState, useEffect, useRef } from "react";

function AddNew({ postData }) {
  //hold user data
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    admin: false,
    staffid: "",
    department: "",
    avatar: "",
    timestamp: [],
  });

  const userRef = useRef(null);
  //funtion to generate staffid
  function staffIdGen() {
    const number = Math.floor(1000 + Math.random() * 9000);
    return `CM-${number}`;
  }
  //fuction to generate profile pictures
  function proPicGen() {
    let imgurl = "https://picsum.photos/";
    const number = Math.floor(100 + Math.random() * 10);
    return `${imgurl}/${number}`;
  }
  //set focus
  useEffect(() => {
    userRef.current.focus();
  }, []);
  //set focus
  useEffect(() => {
    getStaffid();
  }, [formData.department]);

  const getStaffid = () => {
    setFormData({ ...formData, staffid: staffIdGen(), avatar: proPicGen() });
  };
  //hangle change event
  const handleChange = (event) => {
    const key = event.target.id;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setFormData({ ...formData, [key]: value });
  };
  //handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    postData(formData);
    setFormData({
      username: "",
      name: "",
      password: "",
      admin: false,
      staffid: "",
      department: "",
      avatar: "",
      timestamp: [],
    });
  };
  return (
    <form className="addnew" onSubmit={handleSubmit}>
      <label className="required">Name</label>
      <input
        required
        id="name"
        type="text"
        ref={userRef}
        className="inputs"
        value={formData.name}
        onChange={handleChange}
        placeholder="Jon Doe"
      />

      <label className="required">UserName </label>
      <input
        required
        id="username"
        type="text"
        className="inputs"
        value={formData.username}
        onChange={handleChange}
        placeholder="ebbe"
      />

      <label className="required">Avatar </label>
      <input
        id="avatar"
        type="text"
        className="inputs"
        value={formData.avatar}
        onChange={handleChange}
        placeholder="https://avater.png"
      />

      <label className="required">Password </label>
      <input
        required
        id="password"
        type="text"
        className="inputs"
        value={formData.password}
        onChange={handleChange}
        placeholder="******"
      />

      <label>Department </label>
      <select
        id="department"
        className="inputs"
        value={formData.department}
        onChange={handleChange}
      >
        <option value="Sales">Sales</option>
        <option value="Support Desk">Support Desk</option>
        <option value="Human Resource">Human Resource</option>
        <option value="Hospitality">Hospitality</option>
      </select>

      <label>Staff-ID </label>
      <input
        id="staffid"
        readOnly
        disabled
        type="text"
        className="inputs"
        value={formData.staffid}
        placeholder="SD-8456"
      />

      <span className="checkbox">
        Admin ?
        <input
          id="admin"
          type="checkbox"
          value={formData.admin}
          onChange={handleChange}
        />
      </span>
      <button className="btn-submit">Create new</button>
    </form>
  );
}

export default AddNew;
