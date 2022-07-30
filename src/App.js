import React, { useState, useEffect } from "react";
import {
  useNavigate,
} from "react-router-dom";
import Aside from "./components/nav/Aside";
import Main from "./features/Main";

import "./components/scss/style.scss";

const App = () => {
  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const navigate = useNavigate();
  //protect app component
  const [authenticated, setauthenticated] = useState(()=>{
    // getting stored value
    const saved = localStorage.getItem("authenticated");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    if (authenticated) {   
      setauthenticated(authenticated);
    }else{
      navigate("/");
      // Redirect if not loggedin
    }
  }, []);
  if(!authenticated){
    navigate("/");
  }
 
    return (
      <main className="App">
        <Aside accName={name.name} admin={name.admin} />
        <Main
        acc={name}
        accImg={name.avatar}
        accName={name.name}
          authenticated={authenticated}
          setAuthenticated={setauthenticated}
        />
      </main>
    );
  }

export default App;
