import React from 'react';
import './Signup.css';
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
        <h1>Registration</h1>
        <div className="input-box">
          <input type="text" placeholder="Email" required />
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className='icon'/>
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirm Password" required />
          <FaLock className='icon'/>
        </div>

        <button type="submit">Register</button>

        <div className="register-link">
          <p>Already have an account? <a href="#">Login</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;