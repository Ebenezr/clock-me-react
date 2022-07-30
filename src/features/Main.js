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

const Main = ({ authenticated, setAuthenticated }) => {
  const [currentuser, setCurrentUser] = useState({
    name: "",
    username: "",
    password: "",
    admin: false,
    staffid: "",
    department: "",
    avatar: "",
    timestamp: [],
  });
  const [users, setUsers] = useState([]);
  const [avatar, setAvater] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //local api link
  const url = "https://db-v23.herokuapp.com/users";
  //fetch users
  const fetchUsers = async () => {
    try {
      await axios.get(url).then((responce) => {
        const allusers = responce.data;
        setUsers(allusers);
      });
    } catch (err) {
      console.log(err);
      alert("Couldn't Fetch Data :(");
    }
  };
  //randomuser api fetch
  async function getAvatar() {
    const users = await fetch("https://randomuser.me/api/?results=46");
    return users.json();
  }
  useEffect(() => {
    fetchUsers();
    getAvatar().then((data) => {
      setAvater(data.results);
    });
  }, []);

  //delete user
  const deleteUser = async (id) => {
    try {
      let deluser = users.filter((user) => user.id !== id);
      setUsers(deluser);
      await axios.delete(`${url}/${id}`);
      setCurrentUser("");
      alert("User Deleted succesfully :)");
    } catch (err) {
      console.error(err);
      alert("Task Failed :(");
    }
  };

  //post data to db
  const postData = async (formData) => {
    try {
      await axios.post(url, formData);
      setUsers([...users, formData]);
      alert("User Added succesfully :)");
    } catch (err) {
      console.log(err);
      alert("Task Failed :(");
    }
  };
  //patch timestamp to db
  const postTimeStamp = async (id, formData) => {
    try {
      await axios.patch(`${url}/${id}`, formData);
      setUsers([...users, formData]);
    } catch (err) {
      console.log(err);
      alert("Task Failed :(");
    }
  };

  //update user details request
  const updateUser = async (id, formData) => {
    try {
      await axios.patch(`${url}/${id}`, formData);
      setUsers(users);
      alert("User Updated succesfully :)");
    } catch (err) {
      console.log(err);
      alert("Task Failed :(");
    }
  };
  //add new employee

  //search function
  function handleSearch(str) {
    setSearchTerm(str);
    
    if (searchTerm !== "") {
      const newList =(users.filter((user) =>Object.values(user).join(" ").toLowerCase().includes(searchTerm.toLowerCase())))
      setSearchResult(newList);
      
      return searchResult;
      
    }
    setSearchResult(users);
  
  }
 
  //filter function
  function filterUsers(str) {
    setSearchTerm(str);
   
    if (searchTerm !== "all") {
      const newList =(users.filter((user) =>Object.values(user).join(" ").toLowerCase().includes(searchTerm.toLowerCase())))
      setSearchResult(newList);
      
      return searchResult;
      
    }
    setSearchResult(users);
  }
  return (
    <section className="container__main">
      <Header
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <div className="view__main">
        <Routes>
          <Route
            exact
            path="dashboard"
            element={
              <Dashboard
                employees={searchTerm.length < 1 ? users : searchResult}
                filterUsers={filterUsers}
                allusers={avatar}
                searchTerm={searchTerm}
                handleSearch={handleSearch}
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="admin"
            element={
              <Admin
                deleteUser={deleteUser}
                employees={searchTerm.length < 1 ? users : searchResult}
                currentuser={currentuser}
                setCurrentUser={setCurrentUser}
                allusers={avatar}
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                filterUsers={filterUsers}
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
                  updateUser={updateUser}
                  setUsers={setUsers}
                  users={users}
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
                employees={searchTerm.length < 1 ? users : searchResult}
                allusers={avatar}
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                filterUsers={filterUsers}
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
                employees={searchTerm.length < 1 ? users : searchResult}
                currentuser={currentuser}
                setCurrentUser={setCurrentUser}
                postTimeStamp={postTimeStamp}
                allusers={users}
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                filterUsers={filterUsers}
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
