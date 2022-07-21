import React from 'react';
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Admin from './Admin';
import Analytics from './Analytics';
import Timecard from './Timecard';

const Main=()=> {
  return (
    <section className='container__main'>
    <Header />
    <div className="view__main">
      <Timecard /> 
     {/* <Route path="dashboard" element={<Dashboard />}/> */}
    </div>
    <Footer />
    </section>
  )
}

export default Main