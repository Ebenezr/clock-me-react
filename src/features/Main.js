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
  const [stamp, setTimeStamp] = useState([]);
  const [currentuser, setCurrentUser] = useState({});
  const [users, setUsers] = useState([]);
  const url = "http://localhost:8004/users";

  const fetchUsers = async () => {
    try {
      await axios.get(url).then((responce) => {
        const allusers = responce.data;
        setUsers(allusers);
      });
    } catch (err) {
      console.log(err);
    }
  };
  //delete user
  const deleteUser = async (id) => {
    try {
      let deluser = users.filter((user) => user.id !== id);
      setUsers(deluser);
      await axios.delete(`${url}/${id}`);
    } catch (err) {
      console.error(err);
    }
  };
  // const functionName = async (param) => {
  //   try {
  //     //code
  //     //api request
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  //post data to db
  const postData = async (formData) => {
    try {
      await axios.post(url, formData);
      setUsers([...users, formData]);
    } catch (err) {
      console.log(err);
    }
  };
  //update front end list
  const addNewUser = () => {};
  //add new employee
  useEffect(() => {
    fetchUsers();
  }, []);
  //search function

  function getSearch(str) {
    console.log(users);
    const newvalue = users.filter((user) => {
      return user.name.toLowerCase().includes(str.toLowerCase());
    });
    setUsers(newvalue);
  }
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
                deleteUser={deleteUser}
                employees={users}
                currentuser={currentuser}
                setCurrentUser={setCurrentUser}
                searchFunction={getSearch}
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
              element={
                <Update
                  setCurrentuser={setCurrentUser}
                  currentuser={currentuser}
                />
              }
            />
          </Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="analytics"
            element={<Analytics employees={users} />}
          />
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
                setTimeStamp={setTimeStamp}
                stamp={stamp}
                searchFunction={getSearch}
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
