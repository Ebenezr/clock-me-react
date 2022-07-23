import React, { useState, useEffect, useRef } from "react";
import { MdCheckBox } from "react-icons/md";

function Login() {
  const userRef = useRef();
  const errRef = useRef();
  //hold user data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: true,
  });
  const [errMsg, setErrMsg] = useState("");
  const [succes, setSucces] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);
  //empty out pass and user field
  useEffect(() => {
    setErrMsg("");
  }, [formData.username, formData.password]);
  //hangle change event
  const handleChange = (event) => {
    const key = event.target.id;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg("Login Succes");
    setSucces(true);
  };

  return (
    <section id="login">
      <div className="container__login">
        <h2>
          Clock-Me<span>System</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <h4>Sign in to start your session</h4>
          <label>
            Email
            <input
              className="inputs"
              type="text"
              placeholder="Ebbe"
              id="username"
              ref={userRef}
              autoComplete="off"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password
            <input
              className="inputs"
              type="password"
              placeholder="******"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <div className="nav">
            <span>
              <input
                type="checkbox"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <h3>
                <strong>Remeber Me</strong>
              </h3>
            </span>
            <button className="btn-pry" type="submit">
              Sign In
            </button>
          </div>
          <span className="misc">
            <a href="#">I forgot my password</a>
          </span>
        </form>
      </div>
    </section>
  );
}

export default Login;
