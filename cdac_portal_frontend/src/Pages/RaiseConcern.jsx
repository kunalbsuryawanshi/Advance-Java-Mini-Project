import NewNavbar from "./Navbar";
import leave from "../Images/leave1.jpg";
import complaint from "../Images/complaint.jpg";
import Footer1 from "./Footer";
import { Link } from "react-router-dom";
import { FaMailBulk, FaReact, FaReadme } from "react-icons/fa";
import InnerNavigation from "./InnerNavigation";
function RaiseConcern() {
  return (
    <>
      <InnerNavigation />
      <div className="portion shadow-lg">
        <h1 className="d-flex p-5 text-white">
          <FaMailBulk className="mt-1 pt-1 me-2 text-danger" /> Raise Concern{" "}
        </h1>
        <br />
      </div>
      <div
        style={{ height: "600px" }}
        className="row justify-content-center align-items-center"
      >
        <div className="col-sm-12 col-md-4 d-flex justify-content-center">
          <Link
            style={{ textDecoration: "none" }}
            as={Link}
            to={"/LeaveApplication"}
          >
            <div className="card shadow" style={{ width: "20rem" }}>
              <img src={leave} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text fs-5 text-center">Leave Application</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-12 col-md-4 d-flex justify-content-center">
          <Link
            style={{ textDecoration: "none" }}
            as={Link}
            to={"/ComplaintRegistration"}
          >
            <div className="card shadow" style={{ width: "20rem" }}>
              <img src={complaint} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text fs-5 text-center">
                  Complaint Registration
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default RaiseConcern;
