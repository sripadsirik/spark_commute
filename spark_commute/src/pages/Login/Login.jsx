import React from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

<html lang="en">
  <head>    
    <title>Login</title>
  </head>
</html>

const Login = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className='icon'/>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;