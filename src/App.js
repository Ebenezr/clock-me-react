import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Aside from "./components/nav/Aside";
import Main from "./features/Main";
import Login from "./features/Login";

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
<Route path="home" element={<Main />}>
</Route>
</Routes> */
}
