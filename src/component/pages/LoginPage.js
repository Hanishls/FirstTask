/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Header from "../com/Header";
import Footer from "../com/Footer";
import { useNavigate } from "react-router-dom";
import Assets from "../assets/Assets";
import '../Css/Form.css'
const LoginPage = () => {
  const nav = useNavigate();
  const [mailid, setmailId] = useState("");
  const [mailpass, setpass] = useState("");
  const [error, setError] = useState();
  function handleLogin() {
    const loginData = JSON.parse(localStorage.getItem("user"));
    if (loginData) {
      if (loginData.email === mailid && loginData.password === mailpass) {
        nav("/landing");
      } else {
        setError(true);
      }
    }
  }
  return (
    <div>
      <Header />
      <h1 className="container-fluid text-center">Login Page</h1>
      <br />
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <div>
            <label>E-Mail</label>
            <br />
            <input
              type="email"
              placeholder="Enter a email"
              onChange={(e) => setmailId(e.target.value)}
               className="form-control"
            ></input>
            <br />
            <label>Password</label>
            <br />
            <div className="passwords">
            <img src={Assets.eyeClose} className="my-2"></img>
            <input
            className="form-control"
              type="password"
              placeholder="Enter a password"
              onChange={(e) => setpass(e.target.value)}
            ></input>
           
            </div>
            <br />
            <button className="btn btn-success mt-2 " onClick={handleLogin}>
              login
            </button>
            {error ? <p>Please chech the UserName And Password</p> : <p></p>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
