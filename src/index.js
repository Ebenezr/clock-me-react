import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthProvider } from "./context-API/AuthProvider";
import App from "./App";
import Login from "./features/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const [authenticated, setauthenticated] = useState(null);
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/home/*" element={<App />} />
    </Routes>
  </Router>
);
