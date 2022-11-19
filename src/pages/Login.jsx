import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo heading-login"> N Chat </span>
        <span className="title heading-login">Login</span>

        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign in</button>
        </form>
        <p>You don't' have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
