import axios from "axios";
import { useState } from "react";
import FacultyNavbar from "./FacultyNavbar";
import { FaTrashAlt } from "react-icons/fa";

function FacultyComplaint() {
  const [complaintRecord, setComplaintRecord] = useState([]);

  function search(event) {
    event.preventDefault();
    let url =" http://localhost:8181/get-all-complaints";
    axios.get(url).then((response) => {
      //console.log(response.data);
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
        <td>
          <a style={{ textDecoration: "none" }} href="/FacultyComplaintDelete">
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
            >
              Get Complaints
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
              <th>Complaint</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{t}</tbody>
        </table>
      </div>
    </>
  );
}
export default FacultyComplaint;
