import NewNavbar from "./Navbar";
import "./LeaveApplication.css";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import InnerNavigation from "./InnerNavigation";
import { FaCheck } from "react-icons/fa";



function LeaveApplication() {
  const navigate = useNavigate();
  let formRef = useRef();

  let [isSuccess, setIsSuccess] = useState(false);

  
  let [user, setUser] = useState({
    toEmail: "cdacmumbai@gmail.com",
    studentEmail: "",
    describedIssue: "",
  });

  let handlerdescribedIssue = (e) => {
    let newuser = { ...user, describedIssue: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, studentEmail: e.target.value };
    setUser(newuser);
  };
  let submitAction = async () => {
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      return;
    }
    console.log(user);
    let url = "http://localhost:8181/leave-application";
    axios.post(url, user).then((response) => {
      localStorage.setItem("loginStatuscan", "true");
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        navigate("/RaiseConcern", { replace: true });
      }, 2000);
    });
  };
  return (
    <>
      <InnerNavigation />
      <div className="row justify-content-center vh-100 align-items-center">
        <div className="col-sm-12 col-md-5 p-5 shadow">
          <div className="leav-portion mt-2 mb-5">
            <h3 className="text-center pt-4 text-light">
              <strong>Leave Application</strong>
            </h3>
          </div>
          <form ref={formRef} className="needs-validation">
            <label className="ms-1 text-secondary text-center">To : </label>
            <input
              id="city"
              className="form-control mb-4 shadow-sm"
              type="email"
              value="cdacmumbai@gmail.com"
              disabled
              readonly
            />
            <label className="ms-1 text-secondary text-center">
              Enter email :{" "}
            </label>
            <input
              className="form-control mb-4 shadow-sm p-1"
              type="email"
              placeholder="Enter email . . ."
              value={user.studentEmail}
              onChange={handlerEmailAction}
              required
            />
            <label className="ms-1 text-secondary text-center">
              Describe Issue :{" "}
            </label>
            <textarea
              rows="5"
              className="form-control mb-4 shadow-sm"
              placeholder="Describe Issue . . ."
              value={user.describedIssue}
              onChange={handlerdescribedIssue}
              required
            ></textarea>
            <input
              className="form-control bg-primary text-light"
              type="button"
              value="Submit"
              onClick={submitAction}
            />
          </form>
          {isSuccess && (
              <div className="text-success text-center mt-3">
                Application registered
                <FaCheck className="ms-1 mb-1" />
              </div>
            )}
        </div>
      </div>
    </>
  );
}
export default LeaveApplication;
