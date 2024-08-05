import React, { useState } from "react";
import LoginForm from "./component/login";
import SignupForm from "./component/SignUp";

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <button onClick={() => setShowLogin(true)}>Login</button>
      <button onClick={() => setShowLogin(false)}>Sign Up</button>

      {showLogin ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default App;
