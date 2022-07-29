import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Aside from "./components/nav/Aside";
import Main from "./features/Main";

import "./components/scss/style.scss";

const App = () => {
  const navigate = useNavigate();
  //protect app component
  const [authenticated, setauthenticated] = useState(false);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  console.log(authenticated);
  if (!authenticated) {
    // Redirect
    return navigate("/login");
  } else {
    return (
      <main className="App">
        <Aside />
        <Main
          authenticated={authenticated}
          setAuthenticated={setauthenticated}
        />
      </main>
    );
  }
};
export default App;
{
  /* <Routes>
<Route path="login" element={<Login />}/>
<Route path="home" element={<Main />}>
</Route>
</Routes> */
}
