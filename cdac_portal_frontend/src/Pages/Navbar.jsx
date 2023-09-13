import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import InNavbar from "./InNavbar";
import { Link, useNavigate } from "react-router-dom";

function NewNavbar() {
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/studentlogin", { replace: true });
  };

  // Assistance of LocalStorage
  // let loginStatus = localStorage.getItem("loginStatus");
  // if (!loginStatus) {
  //   return <></>;
  // }

  return (
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
          <Nav.Link className=" me-2" as={Link} to={"/home"}>
            Home
          </Nav.Link>
          <Nav.Link className=" me-2" as={Link} to={"/aboutus"}>
            About Us
          </Nav.Link>
          <Nav.Link className=" me-2" as={Link} to={"/ContactUs"}>
            ContactUs
          </Nav.Link>
          <Nav.Link className=" me-2" as={Link} to={"/courses"}>
            Courses
          </Nav.Link>
          <Nav.Link className=" me-2" as={Link} to={"/studentlogin"}>
            Student Login
          </Nav.Link>
          <Nav.Link className=" me-2" as={Link} to={"/facultylogin"}>
            Faculty Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NewNavbar;
