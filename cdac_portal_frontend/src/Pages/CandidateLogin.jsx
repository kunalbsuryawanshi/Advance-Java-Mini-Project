import React, { useRef, useState } from "react";
import "./candidateLogin1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../Images/edutrain.jpeg";
import Footer1 from "./Footer";
import Bottom1 from "./Bottom";
import { useNavigate } from "react-router-dom";
import NewNavbar from "./Navbar";
import { FaAddressBook, FaBlog, FaCheck, FaExclamationCircle, FaInbox } from "react-icons/fa";
import axios from "axios";

function CandidateLogin() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let loginAction = async () => {
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      return;
    }

    // BACKEND :: ...
    console.log(user);
    let url = "http://localhost:8181/student-login";
    axios.post(url, user).then((response) => {
      if (response.data == 500) {
        console.log(response.data);
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 2000);
      } else {
        localStorage.setItem("loginStatuscan", "true");
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          navigate("/RaiseConcern", { replace: true });
        }, 2000);
      }
    });
    
  };

  return (
    <>
      <NewNavbar />
      <div className="App">
        <div className="portion shadow-lg">
          <h1 className="d-flex p-5 text-white">
            {" "}
            <FaAddressBook className="mt-1 me-2 text-warning" />
            Student Login
          </h1>
        </div>
        <div className="container ">
          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-sm-12 col-md-6 shadow-lg  bg-white rounded p-3">
              <img src={img} alt="Student" className="img-fluid" />

              <form ref={formRef} className="needs-validation">
                <div
                  className="row justify-content-center"
                  style={{ marginTop: "40px" }}
                >
                  <div className="col-sm-12 col-md-8 form-group mt-4">
                    <label htmlFor="text">
                      <h5>Email Id:</h5>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="PRNid"
                      placeholder=" Enter email . . ."
                      value={user.email}
                      onChange={handlerEmailAction}
                      required
                    />
                  </div>
                  <div className="col-sm-12 col-md-8 form-group mt-4">
                    <label htmlFor="password">
                      {" "}
                      <h5>Password:</h5>{" "}
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder=" Enter password . . ."
                      value={user.password}
                      onChange={handlerPasswordAction}
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <input
                      type="button"
                      value="Login"
                      className="custom-btn btn-1 m-2"
                      onClick={loginAction}
                    />
                  </div>
                  {isSuccess && (
                    <div className="text-success">Login succesful<FaCheck className="ms-1 mb-1"/></div>
                  )}
                  {isError && (
                    <div className="text-danger">Invalid email or password<FaExclamationCircle className="ms-1 mb-1"/></div>
                  )}
                  <div style={{ paddingLeft: "70px" }}>
                    <div className="row justify-content-center">
                      <div className="col-12 col-md-6 mr-5 text-secondary my-2 ">
                        <a
                          style={{ textDecoration: "none" }}
                          href="/CandidateForgotPassword"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <div className="col-12 col-md-6 mr-5 text-secondary ">
                        Not yet Registered?
                        <a
                          style={{ textDecoration: "none" }}
                          href="/StudentRgistration"
                        >
                          Register
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="form-group col-md-12 col-sm-12 col-xs-12">
                <div
                  className="alert alert-warning"
                  style={{ marginTop: "50px" }}
                >
                  <div className="panel-heading" style={{ color: "#7a1212" }}>
                    <h4 className="panel-title" style={{ fontWeight: "bold" }}>
                      <i class="bi bi-megaphone"> </i> Instructions
                    </h4>
                    <ul style={{ textAlign: "justify" }}>
                      <li style={{ margin: "5px 0px 0px 0px" }}>
                        Please use Firefox, Chrome, and Edge browsers on desktop
                        only.
                      </li>
                      <li style={{ margin: "5px 0px 0px 0px" }}>
                        Please use Firefox, Chrome, and Edge browsers on desktop
                        only. Govt issued ID Card.
                      </li>
                      <li style={{ margin: "5px 0px 0px 0px" }}>
                        Please use the Form No and Password sent to your
                        registered email.
                      </li>
                      <li style={{ margin: "5px 0px 0px 0px" }}>
                        In case you are found ineligible during any stage of the
                        admission process or course delivery, your admission
                        will be canceled with immediate effect. The penalty
                        clauses as given in the Cancellation and Refund section
                        of the Admission Booklet will be applied.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
      <Bottom1 />
    </>
  );
}

export default CandidateLogin;
