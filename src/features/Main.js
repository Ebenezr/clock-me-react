import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dashboard from "./Dashboard";
import Admin from "./Admin";
import Analytics from "./Analytics";
import Timecard from "./Timecard";
import axios from "../api/axios";

const Main = () => {
  const [users, setUsers] = useState([]);
  const url = "http://localhost:8004/users";

  // const fetchUsers = () => {
  //   axios.get(url).then((responce) => (allusers = responce.data));
  //   setUsers(allusers);
  // };

  return (
    <section className="container__main">
      <Header />
      <div className="view__main">
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
        <Routes>
          <Route exact path="analytics" element={<Analytics />} />
        </Routes>
        <Routes>
          <Route exact path="timecard" element={<Timecard />} />
        </Routes>
      </div>
      <Footer />
    </section>
  );
};

export default Main;
