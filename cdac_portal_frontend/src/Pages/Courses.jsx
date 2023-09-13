import React from "react";
import "./Courses.css";
import Bottom1 from "./Bottom";
import Footer1 from "./Footer";
import NewNavbar from "./Navbar";
import pgdac from "../Images/pgdac.jpg";
import pgdassd from "../Images/pgdassd1.jpg";
import pgdmc from "../Images/pgdmc.jpg";
import pgdai from "../Images/pgdai.jpg";
import pgdbda from "../Images/pgdbda1.jpg";
import { Link } from "react-router-dom";
import pgdesd from "../Images/pgdesd.jpg";
import pgdvlsi from "../Images/pgdvlsi.jpg";
import pgdiot from "../Images/pgdiot.jpg";
import { FaCloud, FaStackOverflow, FaStudiovinari } from "react-icons/fa";

function Courses() {
  return (
    <>
      <NewNavbar />
      <div className="portion" >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-md-4 mt-5">
              <h1 className="text-light mt-4">
                <FaStackOverflow className="mb-3 text-warning"/> Courses{" "}
              </h1>
              <p className="image-aboutus-para"></p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------First card row------------------------------------------------ */}
      <div style={{ marginTop: "100px", marginBottom: "100px" }}>
        <h3 className="text-center mt-5">
          <span className="bg-success text-light p-2 rounded-3 shadow ">
            Software Development
          </span>
        </h3>
        <div className="row m-2 justify-content-center mt-5 mb-5">
          <div className="col-sm-12 col-md-3 ">
            <Link
              style={{ textDecoration: "none" }}
              as={Link}
              to={"https://www.cdac.in/index.aspx?id=DAC&courseid=0"}
            >
              <div className="card shadow me-3" style={{ width: "18rem;" }}>
                <img src={pgdac} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">PG-DAC</h5>
                  <p className="card-text">
                    Post Graduate Diploma In Advanced Computing
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-3">
            <Link
              style={{ textDecoration: "none" }}
              as={Link}
              to={"https://www.cdac.in/index.aspx?id=DAC&courseid=40"}
            >
              <div className="card shadow me-3" style={{ width: "18rem;" }}>
                <img src={pgdassd} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">PG-DASSD</h5>
                  <p className="card-text">
                    Post Graduate Diploma in Advanced Secure Software
                    Development
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-3 ">
            <Link
              style={{ textDecoration: "none" }}
              as={Link}
              to={"https://www.cdac.in/index.aspx?id=DAC&courseid=26"}
            >
              <div className="card shadow me-3" style={{ width: "18rem;" }}>
                <img src={pgdmc} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">PG-DMC</h5>
                  <p className="card-text">
                    Post Graduate Diploma in Mobile Computing
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* ------------------------------------second card row------------------------------------------------ */}
      <div style={{ marginBottom: "100px" }}>
        <h3 className="text-center">
          <span className="bg-success text-light rounded-3 shadow p-2">
            Artificial Intelligence & Data Science
          </span>
        </h3>
        <div className="row m-2 justify-content-center mt-5 mb-5 ">
          <div className="col-sm-12 col-md-3 ">
            <Link
              style={{ textDecoration: "none" }}
              as={Link}
              to={"https://www.cdac.in/index.aspx?id=DAC&courseid=30"}
            >
              <div className="card shadow me-3" style={{ width: "18rem;" }}>
                <img src={pgdai} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">PG-DAI</h5>
                  <p className="card-text">
                    Post Graduate Diploma in Artificial Intelligence
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-3">
            <Link
              style={{ textDecoration: "none" }}
              as={Link}
              to={"https://www.cdac.in/index.aspx?id=DAC&courseid=65"}
            >
              <div className="card shadow me-3" style={{ width: "18rem;" }}>
                <img src={pgdbda} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">PG-DBDA</h5>
                  <p className="card-text">
                    Post Graduate Diploma in Big Data Analytics
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* ------------------------------------third card row------------------------------------------------ */}
      <div style={{ marginBottom: "100px" }}>
        <h3 className="text-center mt-5">
          <span className="bg-success text-light p-2 rounded-3 shadow ">
            Electronics & Software
          </span>
        </h3>
        <div className="row m-2 justify-content-center mt-5 mb-5 ">
          <div className="col-sm-12 col-md-3 ">
            <Link
              style={{ textDecoration: "none" }}
              as={Link}
              to={"https://www.cdac.in/index.aspx?id=DAC&courseid=0"}
            >
              <div className="card shadow me-3" style={{ width: "18rem;" }}>
                <img src={pgdvlsi} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">PG-DVLSI</h5>
                  <p className="card-text">
                    Post Graduate Diploma in VLSI Design
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-3">
            <Link
              style={{ textDecoration: "none" }}
              as={Link}
              to={"https://www.cdac.in/index.aspx?id=DAC&courseid=40"}
            >
              <div className="card shadow me-3" style={{ width: "18rem;" }}>
                <img src={pgdesd} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">PG-DESD</h5>
                  <p className="card-text">
                    Post Graduate Diploma in Embedded Systems Design
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-3 ">
            <Link
              style={{ textDecoration: "none" }}
              as={Link}
              to={"https://www.cdac.in/index.aspx?id=DAC&courseid=26"}
            >
              <div className="card shadow me-3" style={{ width: "18rem;" }}>
                <img src={pgdiot} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">PG-DIoT</h5>
                  <p className="card-text">
                    Post Graduate Diploma in Internet of Things
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer1 />
      <Bottom1 />
    </>
  );
}

export default Courses;
