import React, { useState, useEffect, useRef } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const url = "https://db-v23.herokuapp.com/users";
  const url_local = "http://localhost:8004/users";

  const [users, setUsers] = useState([]);
  const [account, setAccount] = useState({});
  const [name, setName] = useState("");
  const [loggeduser, setLoggedUser] = useState({});
  const [authenticated, setauthenticated] = useState(false);

  const userRef = useRef();
  const errRef = useRef();
  //hold user data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: true,
  });
  const [errMsg, setErrMsg] = useState("");
  const [succes, setSuccess] = useState(false);
  //fetch users
  const fetchUsers = async () => {
    try {
      await axios.get(url_local).then((responce) => {
        const allusers = responce.data;
        setUsers(allusers);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userRef.current.focus();
    fetchUsers();
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

    const useraccount = users.find(
      (user) => user.username === formData.username
    );
    if (useraccount && useraccount.password === formData.password) {
      setauthenticated(true);

      setAccount(useraccount);
      setLoggedUser(useraccount);
      localStorage.setItem("name", JSON.stringify(useraccount));
      localStorage.setItem("authenticated", JSON.stringify(true));

      alert(`Logged in successful as ${useraccount.name}`);
      navigate("/home/dashboard");

      return;
    }
    alert("Wrong Username or Password");
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
            Username
            <input
              className="inputs"
              type="text"
              placeholder="Usename"
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
