import React, { useState, useEffect, useRef, useContext } from "react";

function AddNew({ postData }) {
  //hold user data
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    admin: false,
    staffid: "",
    department: "",
    avatar: "",
    timestamp: [],
  });
  const userRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [succes, setSuccess] = useState(false);

  //function to generate staffid
  function staffIdGen() {
    //get first letter
    // const firstLetters = str
    //   .split(" ")
    //   .map((word) => word[0])
    //   .join("")
    //   .toUpperCase();

    const number = Math.floor(1000 + Math.random() * 9000);
    return `CM-${number}`;
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
    setFormData({ ...formData, staffid: staffIdGen() });
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
    console.log(formData);
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
          readOnly
          disabled
          type="text"
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
      <button className="btn-submit">Create new</button>
    </form>
  );
}

export default AddNew;
