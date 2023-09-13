import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import InnerNavigation from "./InnerNavigation";
import { FaCheck } from "react-icons/fa";

function ComplaintRegistration() {
  const navigate = useNavigate();
  let formRef = useRef();

  let [isSuccess, setIsSuccess] = useState(false);

  let [user, setUser] = useState({
    toEmail: "cdacmumbai@gmail.com",
    studentEmail: "",
    describedComplaint: "",
  });

  let handlerdescribedComplaint = (e) => {
    let newuser = { ...user, describedComplaint: e.target.value };
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
    let url = "http://localhost:8181/complaint-registration";
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
              <strong>Complaint</strong>
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
            <label className="ms-1 text-secondary text-center">From : </label>
            <input
              className="form-control mb-4 shadow-sm p-1"
              type="email"
              placeholder="Enter email . . ."
              value={user.studentEmail}
              onChange={handlerEmailAction}
              required
            />
            <label className="ms-1 text-secondary text-center">
              Describe Complaint :{" "}
            </label>
            <textarea
              rows="5"
              className="form-control mb-4 shadow-sm"
              placeholder="Describe complaint . . ."
              value={user.describedComplaint}
              onChange={handlerdescribedComplaint}
              required
            ></textarea>
            <input
              className="form-control bg-primary text-light"
              type="button"
              value="Submit"
              onClick={submitAction}
            />
            {isSuccess && (
              <div className="text-success text-center mt-3">
                Complaint registered
                <FaCheck className="ms-1 mb-1" />
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
export default ComplaintRegistration;
