import React from 'react';
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom"
import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import About from './components/about/About';
import Login from './components/Login/Login'
import Dashboard from './components/main/Dashboard';
import Timecard from './components/main/Timecard';
import Admin from './components/main/Admin';
import Analytics from './components/main/Analytics';


import './components/scss/style.scss';

const App=()=> {
  return (
 <Login />
  );
}

export default App;
{/* <Routes>
<Route path="login" element={<Login />}/>
<Route path="about" element={<About />}/>
<Route path="home" element={<Main />}>
    <Route path="dashboard" element={<Dashboard />}/>
    <Route path="admin" element={<Admin />}/>
    <Route path="analytics" element={<Analytics />}/>
    <Route path="timecard" element={<Timecard />}/>
</Route>
</Routes> */}