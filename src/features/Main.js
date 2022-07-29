import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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
  const [currentuser, setCurrentUser] = useState({
    name: "",
    password: "",
    admin: false,
    staffid: "",
    department: "",
    avatar: "",
    timestamp: [],
  });
  const [users, setUsers] = useState([]);
  const [avatar, setAvater] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  //local api link
  const url = "http://localhost:8004/users";
  //fetch users
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
  //randomuser api fetch
  async function getAvatar() {
    const users = await fetch("https://randomuser.me/api/?results=46");
    return users.json();
  }

  //delete user
  const deleteUser = async (id) => {
    try {
      let deluser = users.filter((user) => user.id !== id);
      setUsers(deluser);
      await axios.delete(`${url}/${id}`);
      setCurrentUser("");
    } catch (err) {
      console.error(err);
    }
  };
  //filter function
  function filterUsers(str) {
    //setFilteredUsers(users);
    // users.filter((user) => {
    //   if (str === "all" || str === "") {
    //     setUsers(user);
    //   } else {
    //     const newvalue = users.filter((user) =>
    //       user.department.toLowerCase().includes(str.toLowerCase())
    //     );
    //     setUsers(newvalue);
    //   }
    // });
  }

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
    getAvatar().then((data) => {
      setAvater(data.results);
    });
  }, []);
  //search function

  console.log(avatar);

  function getSearch(str) {
    setFilteredUsers(
      users.filter((user) => user.name.match(new RegExp(str, "i")))
    );
    console.log(filteredUsers);
    setUsers(filteredUsers);
  }
  return (
    <section className="container__main">
      <Header />
      <div className="view__main">
        <Routes>
          <Route
            exact
            path="/dashboard"
            element={
              <Dashboard
                employees={users}
                filterUsers={filterUsers}
                allusers={avatar}
              />
            }
          />
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
                filterUsers={filterUsers}
                allusers={avatar}
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
            element={
              <Analytics
                employees={users}
                filterUsers={filterUsers}
                allusers={avatar}
              />
            }
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
                allusers={avatar}
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
