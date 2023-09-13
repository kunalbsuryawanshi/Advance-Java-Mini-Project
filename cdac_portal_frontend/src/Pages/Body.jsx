import React from "react";
import "./Body.css";
import home from "../Images/home.jpg";
import { Link } from "react-router-dom";
import product from "../Images/product.jpg";
import service from "../Images/service.jpg";
import project from "../Images/projects.jpg";
import event from "../Images/events.jpg";
import contactus from "../Images/contact us.jpg";
const Body = () => {
  let textAlign = { textAlign: "justify" };
  let border = { border: "none" };
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div style={border} className="card mb-5 mt-5 shadow">
          <div className="row g-0">
            <div className="col-md-6 d-flex align-items-center">
              <div className="card-body">
                <p style={textAlign} className="card-text">
                  C-DAC Mumbai, earlier known as NCST, started operations in the
                  Juhu campus in 1985. There are two campuses in Mumbai, at Juhu
                  and at Kharghar. It has a rich history of cutting edge R&D in
                  areas of Computer Graphics, Computer Networks, Language
                  Translation, Educational Applications of AI, Resource
                  Scheduling, etc. It was among the pioneers in bringing
                  Internet to India through the ERNET project, and also in
                  multi-lingual technologies.First virtual trade fair system
                  developed for Common Wealth. A series of vehicle scheduling
                  applications for Air India, Oil Coordination Committee, and
                  Indian oil. Customs Valuation project for Indian Customs,
                  Kenya and Ethiopia. National and State level e-Governance
                  Service Delivery Gateway. Biometrics solutions for
                  Fingerprint, Iris, and Face Recognition. A collection of
                  virtual lab experiments for schools (Olabs) ILO compliant
                  seafarer identification solution for DG Shipping. Providing
                  the entire software solution for the GATE examination spanning
                  from candidate registration to score report and counselling.
                  Mobile Seva project. Long Range Identification and Tracking
                  for DG Shipping. Currently the centre is working in areas like
                  Authentication Technologies, Disaster Recovery, Microservice
                  based application development, Deep Learning applications,
                  Mobile Computing, Blockchain Solutions, Virtual Labs,
                  Educational games, Robotics, Accessibility, Online Assessment,
                  etc. The Centre runs the PG-DAC and PG-DBDA 6-month diploma
                  programmes at both the campuses, with excellent placement
                  records so far.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={home} className="img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="row m-2 justify-content-center">
        <div className="col-sm-12 col-md-3 me-3 mt-3">
          <Link style={{textDecoration :'none'}}
            as={Link}
            to={"https://www.cdac.in/index.aspx?id=products&centre=MB"}
          >
            <div className="card shadow" style={{ width: "18rem;" }}>
              <img src={product} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center fs-5">
                  Products
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-12 col-md-3 me-3 mt-3">
          <Link style={{textDecoration :'none'}}
            as={Link}
            to={"https://www.cdac.in/index.aspx?id=services&centre=MB"}
          >
            <div className="card shadow" style={{ width: "18rem;" }}>
              <img src={service} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center fs-5">
                  Services
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-12 col-md-3 me-3 mt-3">
          <Link style={{textDecoration :'none'}}
            as={Link}
            to={"https://www.cdac.in/index.aspx?id=projects&centre=MB"}
          >
            <div className="card shadow" style={{ width: "18rem;" }}>
              <img src={project} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center fs-5">
                  Projects
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-12 col-md-3 me-3 mt-3 mb-5">
          <Link style={{textDecoration :'none'}}
            as={Link}
            to={"https://www.cdac.in/index.aspx?id=events"}
          >
            <div className="card shadow" style={{ width: "18rem;" }}>
              <img src={event} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center fs-5">
                  Events
                </p>
              </div>
            </div>
          </Link>
        </div>  
        <div className="col-sm-12 col-md-3 me-3 mt-3">
          <Link style={{textDecoration :'none'}}
            as={Link}
            to={"/contactus"}
          >
            <div className="card shadow" style={{ width: "18rem;" }}>
              <img src={contactus} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center fs-5">
                  Contact Us
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Body;
