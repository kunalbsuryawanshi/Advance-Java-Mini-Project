import axios from "axios";
import { useNavigate } from "react-router-dom";
import InnerNavigation from "./InnerNavigation";

function UpdateComplaint() {
  const navigate = useNavigate();
  let describedComplaint = "";
  let id = "";

  function readId(event) {
    id = event.target.value;
  }
  function readDescribedIsuue(event) {
    describedComplaint = event.target.value;
  }
  function UpdateRecord(event) {
    event.preventDefault();
    let url = `http://localhost:8181/update-complaint?describedComplaint=${describedComplaint}&id=${id}`;
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
          <form onSubmit={UpdateRecord}>
            <input
              className="form-control shadow-sm mb-2"
              type="number"
              onChange={readId}
              placeholder="Enter id . . ."
            />
            <textarea
              rows="5"
              className="form-control shadow-sm"
              placeholder="Update Complaint . . ."
              onChange={readDescribedIsuue}
              required
            ></textarea>
            <button
              className="form-control shadow bg-warning text-light mt-2"
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default UpdateComplaint;
