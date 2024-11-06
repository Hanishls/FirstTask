/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Header from "../com/Header";
import Footer from "../com/Footer";
import { useNavigate } from "react-router-dom";
import Assets from "../assets/Assets";
import "../Css/Form.css";
const FormLayout = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const nav = useNavigate();
  const [error, setError] = useState({
    errorEmail: false,
    namecheck: false,
    errorName: false,
    lengthError: false,
    passwordMismatch: false,
    alldataError: false,
    contactError: false,
  });
  const [eyeControl, setEyeControl] = useState({
    eyeimg: Assets.eyeClose,
    eyeimgConfirm: Assets.eyeClose,
    showPass: false,
    showConfirmpass: false,
  });
  // const [eyeimg, setEyeImg] = useState(Assets.eyeClose);
  // const [showPass,setshowPass] = useState(false)
  // const [eyeimgConfirm, setEyeImgconfirm] = useState(Assets.eyeClose);
  // const [showConfirmpass,setshowConfirmpass] = useState(false)
  function handleChanges(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  }
  const handleSubmit = () => {
    const { name, email, password, confirmPassword, mobileNumber } = form;
    const updatedErrors = {
      errorName: name && name[0] !== name[0].toUpperCase(),
      errorEmail: !email.includes("@"),
      lengthError: password.length < 8,
      passwordMismatch: password !== confirmPassword,
      alldataError: !name || !email || !password || !confirmPassword,
      namecheck: name.length < 1,
      contactError: mobileNumber.length !== 10,
    };
    setError(updatedErrors);
    if (
      name &&
      email.includes("@") &&
      password.length >= 8 &&
      password === confirmPassword
    ) {
      localStorage.setItem("user", JSON.stringify(form));
      nav("/login");
    } else {
      nav("/register");
    }
    console.log(error);
  };
  function handleShowPassword() {
    setEyeControl(prevState=>({...prevState,showPass:(!prevState.showPass)}))
    // setshowPass(!showPass);
    // setEyeImg((prevImg) =>
    //   prevImg === Assets.eyeClose ? Assets.eyeOpen : Assets.eyeClose
    // );
    setEyeControl(prevState=>({...prevState,eyeimg:(prevState.eyeimg?Assets.eyeClose:Assets.eyeOpen)}))
  }

  function handleShowConfirmPassword() {
    // setshowConfirmpass(!showConfirmpass);
    // setEyeImgconfirm((prevImg) =>
    //   prevImg === Assets.eyeClose ? Assets.eyeOpen : Assets.eyeClose
    // );
    setEyeControl(prevState=>({...prevState,showConfirmpass:(!prevState.showConfirmpass)}))
    setEyeControl(prevState=>({...prevState,eyeimgConfirm:(prevState.eyeimgConfirm?Assets.eyeClose:Assets.eyeOpen)}))
  }
  
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center">
        <div style={{ width: "50%" }}>
          {error.alldataError ? (
            <p className="text-danger">All Fields Are Required </p>
          ) : (
            <></>
          )}
          <div>
            <label>Name</label>
            <br />
            <input
              name="name"
              type="text"
              placeholder="Name"
              onChange={(e) => handleChanges(e)}
              className="form-control"
            />
            {error.errorName ? (
              <p className="text-danger">
                Name must start with a capital letter
              </p>
            ) : (
              <></>
            )}
            {error.namecheck ? (
              <p className="text-danger">Please fill your Name</p>
            ) : (
              <p></p>
            )}
            <label>Email</label>
            <br />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => handleChanges(e)}
              className="form-control"
            />
            {error.errorEmail ? (
              <p className="text-danger">Enter a valid e-mail id </p>
            ) : (
              <></>
            )}
            <label>Mobile Number</label>
            <br />
            <input
              name="mobileNumber"
              type="number"
              placeholder="Contact Number"
              onChange={(e) => handleChanges(e)}
              className="form-control"
            />
            {error.contactError ? (
              <p className="text-danger">Please Enter a valid MobileNumber</p>
            ) : (
              <></>
            )}
            <div>
              <label>Password</label>
              <br />
              <div className="password">
                <input
                  name="password"
                  type={eyeControl.showPass ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => handleChanges(e)}
                  className="form-control"
                />
                <img src={eyeControl.eyeimg} onClick={handleShowPassword}  className="my-2"></img>
              </div>
              {error.lengthError ? (
                <p className="text-danger">
                  Password must be at least 8 characters
                </p>
              ) : (
                <></>
              )}
            </div>
            <div>
              <label>Confirm Password</label>
              <br />
              <div className="password">
                <input
                  name="confirmPassword"
                  className="form-control"
                  type={eyeControl.showConfirmpass ? "text" : "password"}
                  placeholder="Confirm Password"
                  onChange={(e) => handleChanges(e)}
                />
                {error.passwordMismatch ? (
                  <p className="text-danger">Password Mismatch</p>
                ) : (
                  <></>
                )}
                <img
                  src={eyeControl.eyeimgConfirm}
                  onClick={handleShowConfirmPassword}
                  className="my-2"
                ></img>
              </div>
            </div>
            <button className="mt-4 btn btn-success" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FormLayout;
