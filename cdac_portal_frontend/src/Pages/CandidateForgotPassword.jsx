import "./candidateLogin1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import img from "../Images/edutrain.jpeg";
import { useNavigate } from "react-router-dom";
import Footer1 from "./Footer";
import Bottom1 from "./Bottom";
import NewNavbar from "./Navbar";
import axios from "axios";
import { FaCheck, FaExclamationCircle } from "react-icons/fa";

function CandidateForgotPassword() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };
  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let loginAction = async () => {
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      return;
    }

    // BACKEND :: ...
    let url = "http://localhost:8181/student-forgot-password";
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
          navigate("/studentlogin", { replace: true });
        }, 2000);
      }
    });
  };

  return (
    <>
      <NewNavbar />
      <div>
        <div className="App">
          <div className="portion shadow-lg">
            <h1 className="d-flex p-5 text-white">Student Forgot Password</h1>
            <br />
          </div>
          <div className="container ">
            <div className="row justify-content-center mt-3">
              <div className="col-sm-12 col-md-6 shadow-lg mt-5 bg-white rounded ">
                <img src={img} alt="Student" className="img-fluid mt-3" />

                <form ref={formRef} className="needs-validation">
                  <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-8 form-group mt-4">
                      <label htmlFor="text">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="PRNid"
                        placeholder="Enter email . . ."
                        value={user.email}
                        onChange={handlerEmailAction}
                        required
                      />
                      <label className="mt-3" htmlFor="text">
                        Change Password:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="PRNid"
                        placeholder="Enter password . . ."
                        value={user.password}
                        onChange={handlerPasswordAction}
                        required
                      />
                      <input
                        className="custom-btn btn-1 mt-4"
                        type="button"
                        value="Change password"
                        onClick={loginAction}
                      />
                      {isSuccess && (
                        <div className="text-success">Password changed<FaCheck className="ms-1 mb-1"/></div>
                      )}
                      {isError && (
                        <div className="text-danger">Invalid email<FaExclamationCircle className="ms-1 mb-1"/></div>
                      )}
                      <div className="mt-3">
                        Not yet Registered?
                        <a
                          style={{ textDecoration: "none" }}
                          href="/StudentRgistration"
                        >
                          {" "}
                          Register
                        </a>
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
                      <h4
                        className="panel-title"
                        style={{ fontWeight: "bold" }}
                      >
                        <i className="bi bi-megaphone"> </i> Instructions
                      </h4>
                      <ul style={{ textAlign: "justify" }}>
                        <li style={{ margin: "5px 0px 0px 0px" }}>
                          Please use Firefox, Chrome, and Edge browsers on
                          desktop only.
                        </li>
                        <li style={{ margin: "5px 0px 0px 0px" }}>
                          Please use Firefox, Chrome, and Edge browsers on
                          desktop only. Govt issued ID Card.
                        </li>
                        <li style={{ margin: "5px 0px 0px 0px" }}>
                          Please use the Form No and Password sent to your
                          registered email.
                        </li>
                        <li style={{ margin: "5px 0px 0px 0px" }}>
                          In case you are found ineligible during any stage of
                          the admission process or course delivery, your
                          admission will be canceled with immediate effect. The
                          penalty clauses as given in the Cancellation and
                          Refund section of the Admission Booklet will be
                          applied.
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
      </div>
    </>
  );
}

export default CandidateForgotPassword;
