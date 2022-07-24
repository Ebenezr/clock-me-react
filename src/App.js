import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Aside from "./components/nav/Aside";
import Main from "./features/Main";
import Login from "./features/Login";
import Dashboard from "./features/Dashboard";
import Timecard from "./features/Timecard";
import Admin from "./features/Admin";
import Analytics from "./features/Analytics";

import "./components/scss/style.scss";

const App = () => {
  return (
    <main className="App">
      <Aside />
      <Main />
    </main>
  );
};

export default App;
{
  /* <Routes>
<Route path="login" element={<Login />}/>
<Route path="about" element={<About />}/>
<Route path="home" element={<Main />}>
    <Route path="dashboard" element={<Dashboard />}/>
    <Route path="admin" element={<Admin />}/>
    <Route path="analytics" element={<Analytics />}/>
    <Route path="timecard" element={<Timecard />}/>
</Route>
</Routes> */
}
