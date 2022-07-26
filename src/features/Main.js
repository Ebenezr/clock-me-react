import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dashboard from "./Dashboard";
import Admin from "./Admin";
import Analytics from "./Analytics";
import Timecard from "./Timecard";
import axios from "../api/axios";
import AddNew from "../components/forms/AddNew";
import Update from "../components/forms/Update";

const Main = () => {
  const [currentuser, setCurrentUser] = useState([
    {
      id: 1,
      name: "",
      password: "",
      admin: false,
      staffid: "",
      department: "",
      avatar: "",
      timestamp: [],
    },
  ]);
  const [users, setUsers] = useState([]);
  const url = "http://localhost:8004/users";

  const fetchUsers = () => {
    axios.get(url).then((responce) => {
      const allusers = responce.data;
      setUsers(allusers);
    });
  };
  //post data to db
  const postData = (formData) => {
    axios.post(url, formData);
  };
  //add new employee

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="container__main">
      <Header />
      <div className="view__main">
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route
            exact
            path="/admin"
            element={
              <Admin
                employees={users}
                currentuser={currentuser}
                setCurrentUser={setCurrentUser}
              />
            }
          >
            <Route
              exact
              path="Addnew"
              element={<AddNew postData={postData} />}
            />
            <Route
              exact
              path="update"
              element={<Update currentuser={currentuser} />}
            />
          </Route>
        </Routes>
        <Routes>
          <Route exact path="analytics" element={<Analytics />} />
        </Routes>
        <Routes>
          <Route
            exact
            path="timecard"
            element={
              <Timecard
                employees={users}
                currentuser={currentuser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </section>
  );
};

export default Main;
