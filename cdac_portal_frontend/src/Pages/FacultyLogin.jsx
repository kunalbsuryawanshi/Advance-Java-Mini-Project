import React, { useRef, useState } from "react";
import "./candidateLogin1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../Images/edutrain.jpeg";
import Footer1 from "./Footer";
import Bottom1 from "./Bottom";
import { useNavigate } from "react-router-dom";
import NewNavbar from "./Navbar";
import { FaAddressBook, FaCheck, FaExclamationCircle } from "react-icons/fa";
import axios from "axios";

function FacultyLogin() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [errorFields, setErrorFields] = useState([]);

  let [user, setUser] = useState({
    username: "",
    password: "",
  });

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

  let loginAction = async () => {
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      return;
    }

    // BACKEND :: ...
    let url = "http://localhost:8181/faculty-login";
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
          navigate("/Enquiries", { replace: true });
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
            <h1 className="d-flex p-5 text-white">
              <FaAddressBook className="mt-1 me-2 text-warning" />
              Faculty Login
            </h1>
            <br />
          </div>
          <div className="container ">
            <div className="row justify-content-center mt-5 mb-5">
              <div className="col-sm-12 col-md-6 shadow-lg p-3 bg-white rounded p-3">
                <img src={img} alt="Student" className="img-fluid" />

                <form ref={formRef} className="needs-validation">
                  <div
                    className="row justify-content-center"
                    style={{ marginTop: "40px" }}
                  >
                    <div className="col-sm-12 col-md-8 form-group mt-4">
                      <label htmlFor="username">
                        <h5>Faculty username:</h5>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="username"
                        placeholder=" Enter username . . . "
                        value={user.username}
                        onChange={handlerEmailAction}
                        required
                      />
                      {errorFields.includes("username") && (
                        <div className="invalid-feedback">
                          Please enter a valid username.
                        </div>
                      )}
                    </div>
                    <div className="col-sm-12 col-md-8 form-group mt-4">
                      <label htmlFor="password">
                        <h5>Password:</h5>
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
                      {errorFields.includes("password") && (
                        <div className="invalid-feedback">
                          Please enter a password.
                        </div>
                      )}
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
                      <div className="text-success">Login successful<FaCheck className="ms-1 mb-1"/></div>
                    )}
                    {isError && (
                      <div className="text-danger">
                        Invalid username or password<FaExclamationCircle className="ms-1 mb-1"/>
                      </div>
                    )}
                    <div style={{ paddingLeft: "70px" }}>
                      <div className="row justify-content-center mt-1">
                        <div className="col-12 col-md-5 mr-5 text-secondary">
                          <a
                            style={{ textDecoration: "none" }}
                            href="/FacultyForgetPass"
                          >
                            Forgot Password?{" "}
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
                          registered username.
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

export default FacultyLogin;
