import { useState } from "react";
import InnerNavigation from "./InnerNavigation";
import axios from "axios";
import {
  FaCheck,
  FaExclamationCircle,
  FaPen,
  FaTrashAlt,
} from "react-icons/fa";

function ComplaintStatus() {
  const [complaintRecord, setComplaintRecord] = useState([]);
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
    let url = `http://localhost:8181/get-complaint-record?email=${email}`;
    axios.get(url).then((response) => {
      if (response.data.length <= 0) {
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 2000);
      }
      setComplaintRecord(response.data);
    });
  }
  let t = [];
  for (let complaints of complaintRecord) {
    t.push(
      <tr>
        <td>{complaints.id}</td>
        <td>{complaints.toEmail}</td>
        <td>{complaints.studentEmail}</td>
        <td>{complaints.describedComplaint}</td>
        <td className="text-success">
          <FaCheck className="mb-1 me-1" />
          Submitted...
        </td>
        <td>
          <a style={{ textDecoration: "none" }} href="/UpdateComplaint">
            <span className="bg-warning p-2 rounded-3 shadow me-2">
              <FaPen className="fs-5 text-light" />
            </span>
          </a>
        </td>
        <td>
          <a style={{ textDecoration: "none" }} href="/DeleteComplaintRecord">
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
              style={{ backgroundColor: "#009879" }}
              className="form-control shadow text-light mt-2"
              type="submit"
            >
              Get Complaints
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
              <th>Complaint</th>
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
export default ComplaintStatus;
