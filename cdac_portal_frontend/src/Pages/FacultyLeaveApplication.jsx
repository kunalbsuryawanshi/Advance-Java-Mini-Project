import axios from "axios";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import FacultyNavbar from "./FacultyNavbar";

function FacultyLeaveApplication() {
  const [leavRecord, setLeaveRecord] = useState([]);
  function search(event) {
    event.preventDefault();
    let url = "http://localhost:8181/get-all-leave-applications";
    axios.get(url).then((response) => {
      //console.log(response.data);
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
        <td>
          <a style={{ textDecoration: "none" }} href="/FacultyLeaveDelete">
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
      <FacultyNavbar />

      <div className="row justify-content-center mt-3">
        <div className="col-sm-12 col-md-2">
          <form onSubmit={search}>
            <button
              className="form-control shadow-lg bg-success text-light mt-2"
              type="submit"
              onSubmit={search}
            >
              Get Records
            </button>
          </form>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{t}</tbody>
        </table>
      </div>
    </>
  );
}
export default FacultyLeaveApplication;
