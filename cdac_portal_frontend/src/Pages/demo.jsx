import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Registration.css";
import img from "../Images/edutrain.jpeg";
import RegistrationInstructions from "./RegistrationInstructions";

import Footer1 from "./Footer";
import Bottom1 from "./Bottom";
import NewNavbar from "./Navbar";
import { FaRegistered } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentRegistration1 = () => {
  let [user, setUser] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    mobile: "",
    prnNumber: "",
  });

  let [errors, setErrors] = useState({
    nameError: "",
    passwordError: "",
    confirmPasswordError: "",
    emailError: "",
    mobileError: "",
    prnError: "",
  });

  let handlerPrnAction = (e) => {
    let newuser = { ...user, prnNumber: e.target.value };
    setUser(newuser);
    setErrors({ ...errors, prnError: "" });
  };

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, name: e.target.value };
    setUser(newuser);
    setErrors({ ...errors, nameError: "" });
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
    setErrors({ ...errors, passwordError: "" });
  };

  let handlerConfirmPasswordAction = (e) => {
    let newuser = { ...user, confirmPassword: e.target.value };
    setUser(newuser);
    setErrors({ ...errors, confirmPasswordError: "" });
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
    setErrors({ ...errors, emailError: "" });
  };

  let handlerMobileAction = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
    setErrors({ ...errors, mobileError: "" });
  };

  let validateForm = () => {
    let isValid = true;
    let newErrors = {
      nameError: "",
      passwordError: "",
      confirmPasswordError: "",
      emailError: "",
      mobileError: "",
      prnError: "",
    };

    if (user.name.trim() === "") {
      newErrors.nameError = "Name is required";
      isValid = false;
    } else if (!isValidName(user.name)) {
      newErrors.nameError =
        "Name should contain only alphabets and be less than 50 characters";
      isValid = false;
    }

    if (user.password.trim() === "") {
      newErrors.passwordError = "Password is required";
      isValid = false;
    } else if (!isValidPassword(user.password)) {
      newErrors.passwordError =
        "Password must be 6-20 characters with special characters";
      isValid = false;
    }

    if (user.confirmPassword.trim() === "") {
      newErrors.confirmPasswordError = "Confirm Password is required";
      isValid = false;
    } else if (user.password !== user.confirmPassword) {
      newErrors.confirmPasswordError = "Passwords do not match";
      isValid = false;
    }

    if (user.email.trim() === "") {
      newErrors.emailError = "Email is required";
      isValid = false;
    } else if (!isValidEmail(user.email)) {
      newErrors.emailError = "Invalid email format";
      isValid = false;
    }

    if (user.mobile.trim() === "") {
      newErrors.mobileError = "Mobile number is required";
      isValid = false;
    } else if (!isValidMobile(user.mobile)) {
      newErrors.mobileError = "Invalid mobile number format";
      isValid = false;
    }

    if (user.prnNumber.trim() === "") {
      newErrors.prnError = "PRN number is required";
      isValid = false;
    } else if (!isValidPRN(user.prnNumber)) {
      newErrors.prnError = "Invalid PRN number format";
      isValid = false;
    }

    setErrors(newErrors);
    setShowPopup(true);
    return isValid;
  };

  let isValidName = (name) => {
    // Name should contain only alphabets and be less than 50 characters
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  };

  let isValidPassword = (password) => {
    // Password should be 6-20 characters and contain at least one special character
    const passwordRegex = /^(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,20}$/;
    return passwordRegex.test(password);
  };

  let isValidEmail = (email) => {
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  let isValidMobile = (mobile) => {
    // Indian mobile number validation
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
  };

  let isValidPRN = (prn) => {
    // PRN should start with "230340" and be 12 digits long
    const prnRegex = /^230340\d{6}$/;
    return prnRegex.test(prn);
  };

  let [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  let registerAction = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // BACKEND
      console.log(user);
      let url = "http://localhost:8181/add-student-registration-info";
      axios.post(url, user).then((response) => {
        console.log(response.data);
      });

      let newuser = {
        name: "",
        password: "",
        confirmPassword: "",
        email: "",
        mobile: "",
        prnNumber: "",
      };
      setUser(newuser);
      setErrors({
        nameError: "",
        passwordError: "",
        confirmPasswordError: "",
        emailError: "",
        mobileError: "",
        prnError: "",
      });
      alert("Registration successful!");
      setShowPopup(false);
      setTimeout(() => {
        navigate("/studentlogin", { replace: true });
      }, 1000);
    }
  };

  // function sendStudentRegistrationInfo(event) {
  //   event.preventDefault();
  //   console.log(user);
  //   let url = "http://localhost:8181/add-student-registration-info";
  //   axios.post(url, user).then((response) => {
  //     console.log(response.data);
  //   });
  // }

  return (
    <>
      <NewNavbar />
      <div>
        <div className="portion shadow-lg container-fluid">
          <h1 className="d-flex p-5 text-white">
            <FaRegistered className="mt-1 me-1 text-warning" /> Student
            Registration Page
          </h1>
        </div>

        <div className="registration-page col-sm-12 col-md-8 shadow-lg p-3 mt-5 bg-white rounded p-3 mb-5">
          <div className="row" style={{ marginBottom: "20px" }}>
            <img className="img-fluid" src={img} alt="" />
          </div>
          <h2 className="text-center">Registration Page</h2>
          <hr></hr>
          <form className="needs-validation " novalidate>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="text-secondary ms-1" htmlFor="name">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control shadow-sm"
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handlerUsernameAction}
                    placeholder="Enter name . . ."
                    required
                  />
                  {errors.nameError && (
                    <div style={{ fontSize: "13px" }} className="error ms-1">
                      {errors.nameError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="text-secondary ms-1" htmlFor="email">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control shadow-sm"
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handlerEmailAction}
                    placeholder="Enter email . . ."
                    required
                  />
                  {errors.emailError && (
                    <div style={{ fontSize: "13px" }} className="error ms-1">
                      {errors.emailError}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="text-secondary ms-1" htmlFor="mobile">
                    Mobile Number <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control shadow-sm"
                    type="tel"
                    id="mobile"
                    name="mobile"
                    pattern="[0-9]{10}"
                    value={user.mobile}
                    onChange={handlerMobileAction}
                    placeholder="Enter mobile number . . ."
                    required
                  />
                  {errors.mobileError && (
                    <div style={{ fontSize: "13px" }} className="error ms-1">
                      {errors.mobileError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="text-secondary ms-1" htmlFor="prn">
                    PRN Number <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control shadow-sm"
                    type="text"
                    id="prn"
                    name="prn"
                    value={user.prnNumber}
                    onChange={handlerPrnAction}
                    pattern="[0-9]{12}"
                    title="Please enter a 12-digit PRN number"
                    placeholder="Enter PRN number . . ."
                    required
                  />
                  {errors.prnError && (
                    <div style={{ fontSize: "13px" }} className="error ms-1">
                      {errors.prnError}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="text-secondary ms-1" htmlFor="password">
                    Password <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control shadow-sm"
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handlerPasswordAction}
                    placeholder="Enter password . . ."
                    required
                  />
                  {errors.passwordError && (
                    <div style={{ fontSize: "13px" }} className="error ms-1">
                      {errors.passwordError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label
                    className="text-secondary ms-1"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control shadow-sm"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handlerConfirmPasswordAction}
                    autoComplete="new-password"
                    placeholder="Enter confirm password . . ."
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center mt-4">
                <div className="form-group">
                  <button
                    className="btn btn-success shadow-sm "
                    type="submit"
                    onClick={registerAction}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>

          <RegistrationInstructions></RegistrationInstructions>
        </div>
        <Footer1 />
        <Bottom1 />
      </div>
    </>
  );
};

export default StudentRegistration1;
