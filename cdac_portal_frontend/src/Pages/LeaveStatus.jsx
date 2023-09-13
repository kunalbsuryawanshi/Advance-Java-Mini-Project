import {
  FaCheck,
  FaExclamationCircle,
  FaPencilAlt,
  FaTrashAlt,
} from "react-icons/fa";
import InnerNavigation from "./InnerNavigation";
import "./Table.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function LeaveStatus() {
  const [leavRecord, setLeaveRecord] = useState([]);
  let [isError, setIsError] = useState(false);
  let email = "";
  function readEmail(event) {
    email = event.target.value;
  }
  //   useEffect(() => {
  //     getAllUserAction();
  //   }, []);

  function search(event) {
    event.preventDefault();
    let url = `http://localhost:8181/get-leave-application-record?email=${email}`;
    axios.get(url).then((response) => {
      if (response.data.length <= 0) {
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 2000);

      }

      setLeaveRecord(response.data);
    });
  }
  let t = [];
  for (let leaveApplication of leavRecord) {
    t.push(
      <tr>
        <td>{leaveApplication.id}</td>
        <td>{leaveApplication.toEmail}</td>
        <td>{leaveApplication.studentEmail}</td>
        <td>{leaveApplication.describedIssue}</td>
        <td className="text-success">
          <FaCheck className="mb-1 me-1" />
          Submitted...
        </td>
        <td>
          <a style={{ textDecoration: "none" }} href="/UpdateLeaveApplication">
            <span className="bg-warning p-2 rounded-3 shadow me-2">
              <FaPencilAlt className="fs-5 text-light" />
            </span>
          </a>
        </td>
        <td>
          <a style={{ textDecoration: "none" }} href="/DeleteLeaveRecord">
            <span className="bg-danger p-2 rounded-3 shadow ">
              <FaTrashAlt className="fs-5 text-light" />
            </span>
          </a>
        </td>
      </tr>
    );
  }
  return (
    <>
      <InnerNavigation />
      <div className="row justify-content-center mt-4">
        <div className="col-sm-12 col-md-4 shadow p-4">
          <form onSubmit={search}>
            <input
              className="form-control shadow-sm"
              type="email"
              onChange={readEmail}
              placeholder="Enter email . . ."
            />{" "}
            <button
              className="form-control shadow bg-success text-light mt-2"
              type="submit"
            >
              Get Records
            </button>
          </form>
          {isError && (
            <div className="text-danger text-center mt-2">
              Invalid email
              <FaExclamationCircle className="ms-1 mb-1" />
            </div>
          )}
        </div>
      </div>
      <div className="row justify-content-center  p-5">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Application Id</th>
              <th>To</th>
              <th>From</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{t}</tbody>
        </table>
      </div>
    </>
  );
}
export default LeaveStatus;
