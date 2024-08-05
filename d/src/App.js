import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginForm from "../../d/src/component/login";
import SignupForm from "../../d/src/component/SignUp";
import Home from "../../d/src/component/Home";
import OTPVerification from "./component/OTPVerification";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/verify-otp" element={<OTPVerification />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
