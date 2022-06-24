import React,{useState} from 'react'
import { BrowserRouter as Router,Routes, Route, Link, Navigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import "./login.css"

export default function Login() {
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const userData = [
        {
          username: "Riya",
          password: "1234"
        },
        {
          username: "Repos",
          password: "4567"
        }
      ];
    
    const errorData = {
        uname: "invalid username",
        password: "invalid password"
      };
    
      const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { uname, pass } = document.forms[0];
    
        // Find user login info
        const user = userData.find((user) => user.username === uname.value);
    
        // Compare user info
        if (user) {
          if (user.password !== pass.value) {
            // Invalid password
            setErrors({ name: "pass", message: errorData.password });
          } else {
            setIsSubmitted(true);
          }
        } else {
          // Username not found
          setErrors({ name: "uname", message: errorData.uname });
        }

      };
      const PrintErrorMessage = (name) =>
            name === errors.name && (
            <div className="error">{errors.message}</div>
         );

      const LoginForm = (
        <div className='Main'>
        <div className="login-form">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              {PrintErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {PrintErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
        </div>
        </div>
      );

  return (
    <>
        {isSubmitted ? (
          <Navigate to="/dashboard" replace={true} />
        ) : LoginForm}
    </>
  )
}
