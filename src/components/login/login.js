import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Home from "../home/home";
import "./login.css";
function Login(props) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isInvalid, setInvalid] = useState();
  const navigate = useNavigate();
  const mockUserName = "Vy";
  const mockPassword = "12345";

  useEffect(() => {
    if (props.isLoggedIn) {
      navigate("/home");
    }
  });

  const validateUser = (event) => {
    // need an API to authenticate
    fetch(
      `http://localhost:8080/user/login?username=${userName}&password=${password}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          props.setLogInStatus(true);
        } else {
          setInvalid(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  function handleUserName(event) {
    //console.log(event.target.value);
    setUserName(event.target.value);
  }
  const handlePassword = (event) => {
    //console.log(event.target.value);
    setPassword(event.target.value);
  };
  return (
    <div className="login-wrapper">
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            //type="email"
            onChange={handleUserName}
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            onChange={handlePassword}
            //type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        {isInvalid ? <p className="red">No user found</p> : null}
        <div
          //type="submit"
          className="btn btn-primary btn-block"
          onClick={validateUser}
        >
          Submit
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
