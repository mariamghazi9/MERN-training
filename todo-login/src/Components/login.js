import { Button } from "@mui/material";
import React, { useState } from "react";
import "./login.css";

const Login = () => {

  const [error, setError] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState("");


  const add = () => {
    setSuccess("Logged in successfully!")
  };

  const change = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.length === 0) {
        setError({ ...error, email: "this field is required" });
      } else if (event.target.value.length < 5) {
        setError({ ...error, email: "min length is 5" });
      } else {
        setError({ ...error, email: "" });
      }
    } else {
      if (event.target.value.length === 0) {
        setError({ ...error, password: "this field is required" });
      } else if (event.target.value.length < 8) {
        setError({ ...error, password: "min length is 8" });
      } else {
        setError({ ...error, password: "" });
      }
    }
  };

  return (
    <>
      <div className="header" >
        <label>Username</label><br/>
        <input
          type="text"
          name="email"
          placeholder="enter your email"
          onChange={change}
        /><br/>
        <small style={{ color: "red" }}>{error.email}</small>

        <br></br>

        <label>Password</label><br/>
        <input
          type="password"
          name="password"
          placeholder="enter your pass"
          onChange={change}
        /><br/>
        <small style={{ color: "red" }}>{error.password}</small><br/>
        <Button onClick={add} className="addBtn">Login</Button>
        <label>{success}</label>
      </div>
    </>
  );
};
export default Login;
