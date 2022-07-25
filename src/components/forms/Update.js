import React, { useState, useEffect, useRef, useContext } from "react";

const Update = () => {
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
  return (
    <form className="addnew">
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
          value={formData.avater}
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
        Cornfirm Password
        <input
          id="cpassword"
          type="text"
          className="inputs"
          value={formData.cpassword}
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
