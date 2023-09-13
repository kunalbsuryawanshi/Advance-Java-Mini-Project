import axios from "axios";
import { useNavigate } from "react-router-dom";
import InnerNavigation from "./InnerNavigation";

function DeleteComplaintRecord() {
  const navigate = useNavigate();
  let id = "";
  function readId(event) {
    id = event.target.value;
  }

  function deleteRecord(event) {
    event.preventDefault();
    let url = `http://localhost:8181/delete-complaint-record?id=${id}`;
    axios.get(url).then((response) => {
      localStorage.setItem("loginStatuscan", "true");
      navigate("/ComplaintStatus", { replace: true });
    });
  }
  return (
    <>
      <InnerNavigation />
      <div className="row justify-content-center mt-5">
        <div className="col-sm-12 col-md-4 shadow p-4">
          <form onSubmit={deleteRecord}>
            <input
              className="form-control shadow-sm"
              type="number"
              onChange={readId}
              placeholder="Enter id . . ."
            />{" "}
            <button
              className="form-control shadow bg-danger text-light mt-2"
              type="submit"
            >
              Delete Record
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default DeleteComplaintRecord;
