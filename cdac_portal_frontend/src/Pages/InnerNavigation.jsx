import { Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function InnerNavigation() {
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/studentlogin", { replace: true });
  };
  return (
    <>
      <Navbar bg="ps-3 pe-1 shadow" data-bs-theme="info-subtle" expand="lg">
        <Navbar.Brand as={Link} to={"/HomeBody"}>
          <a className="navbar-brand d-lg-block d-sm-none d-none ">
            <img
              className="img-fluid"
              src="https://www.cdac.in/img/cdac-logo.png"
              alt="cdac-logo.png"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link
              className=" me-2"
              as={Link}
              to={"/RaiseConcern"}
            >Raise Concern</Nav.Link>
            <Nav.Link className=" me-2" as={Link} to={"/LeaveStatus"}>
              Leave Status
            </Nav.Link>
            <Nav.Link className=" me-2" as={Link} to={"/ComplaintStatus"}>
              Complaint Status
            </Nav.Link>

            <Nav.Link>
              <input
                className="btn bg-danger shadow rounded-pill text-light"
                type="button"
                value="Log Out"
                onClick={logOutAction}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default InnerNavigation;
