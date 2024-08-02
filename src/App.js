import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginForm from "./component/login";
import SignupForm from "./component/SignUp";
import Home from "./component/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
