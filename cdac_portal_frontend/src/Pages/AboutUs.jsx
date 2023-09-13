import React from "react";
import "./AboutusStyle.css";
import Bottom1 from "./Bottom";
import Footer1 from "./Footer";
import NewNavbar from "./Navbar";
import abhinav from "../Images/Abhinav Verma.jpg";
import kunal from "../Images/Kunal1.jpg";
import abhishek from "../Images/Abhishek.jpg";
import vision from "../Images/aboutus9.1.jpg";
import aboutus4 from "../Images/aboutus4.jpg";
import { FaUser } from "react-icons/fa";
function Aboutus() {
  let textAlign = { textAlign: "justify" };
  let border = { border: "none" };
  return (
    <>
      <NewNavbar />
      <div className="portion " style={{ height: "300px" }}>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-md-4 mt-5 pt-3">
              <h1 className="mt-5 text-light">
                <FaUser className="mb-2 me-2 text-warning"/>About C-DAC
              </h1>
              <p className="image-aboutus-para"></p>
            </div>
          </div>
        </div>
      </div>
      <h2 class="ms-5 mt-4 mb-0 text-center">
        <span>
          About <span className="text-success">Us</span>
        </span>
      </h2>
      <div style={border} className="card mb-5 mt-5 shadow">
        <div className="row g-0">
          <div className="col-md-6 d-flex align-items-center">
            <div className="card-body">
              <p style={textAlign} className="card-text">
                Centre for Development of Advanced Computing (C-DAC) is the
                premier R&D organization of the Ministry of Electronics and
                Information Technology (MeitY) for carrying out R&D in IT,
                Electronics and associated areas. Different areas of C-DAC, had
                originated at different times, many of which came out as a
                result of identification of opportunities. The setting up of
                C-DAC in 1988 itself was to built Supercomputers in context of
                denial of import of Supercomputers by USA. Since then C-DAC has
                been undertaking building of multiple generations of
                Supercomputer starting from PARAM with 1 GF in 1988. Almost at
                the same time, C-DAC started building Indian Language Computing
                Solutions with setting up of GIST group (Graphics and
                Intelligence based Script Technology); National Centre for
                Software Technology (NCST) set up in 1985 had also initiated
                work in Indian Language Computing around the same period.
                Electronic Research and Development Centre of India (ER&DCI)
                with various constituents starting as adjunct entities of
                various State Electronic Corporations, had been brought under
                the hold of Department of Electronics and Telecommunications
                (now MeitY) in around 1988. They were focusing on various
                aspects of applied electronics, technology and applications.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={aboutus4} className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
      <div className="row m-3 mb-5 justify-content-center align-items-center">
        <h2 className="text-center mt-5 mb-5">
          Our<span className="text-success"> Team</span>
        </h2>
        <div className="col-sm-12 col-md-3 d-flex justify-content-center">
          <div class="card" style={{ width: "18rem" }}>
            <img src={abhinav} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">Abhinav Verma</h4>
              <p class="card-text">
                Pursuing post graduation diploma in advanced Computing from CDAC
                Mumbai
              </p>
              <p>
                <a style={{ textDecoration: "none" }} href="#">
                  abhinaverma1495@gmail.com
                </a>
              </p>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/in/abhinav-verma-648555101/"
              >
                <button className="form-control bg-primary text-light">
                  Contact
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 d-flex justify-content-center">
          <div class="card" style={{ width: "18rem" }}>
            <img src={kunal} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">Kunal Suryawanshi</h4>
              <p class="card-text">
                Pursuing post graduation diploma in advanced Computing from CDAC
                Mumbai
              </p>
              <p>
                <a style={{ textDecoration: "none" }} href="#">
                  kunalbsuryawanshi@gmail.com
                </a>
              </p>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/in/kunal-suryawanshi-3758ab138/"
              >
                <button className="form-control bg-primary text-light">
                  Contact
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 d-flex justify-content-center">
          <div class="card" style={{ width: "18rem" }}>
            <img src={abhishek} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">Abhishek Kumar</h4>
              <p class="card-text">
                Pursuing post graduation diploma in advanced Computing from CDAC
                Mumbai
              </p>
              <p>
                <a style={{ textDecoration: "none" }} href="#">
                  abhimn135@gmail.com
                </a>
              </p>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav"
              >
                <button className="form-control bg-primary text-light">
                  Contact
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2 className="ms-5 mt-5 mb-5 text-center">
        <span>
          Our <span className="text-success">Vision</span>
        </span>
      </h2>
      <div style={border} class="card mb-5 mt-5 shadow">
        <div className="row g-0">
          <div className="col-md-6 d-flex align-items-center">
            <div className="card-body">
              <p style={textAlign} className="card-text">
                To emerge as the premier R&D institution for the design,
                development and deployment of world class electronic and IT
                solutions for economic and human advancement. C-DAC has today
                emerged as a premier R&D organization in IT&E (Information
                Technologies and Electronics) in the country working on
                strengthening national technological capabilities in the context
                of global developments in the field and responding to change in
                the market need in selected foundation areas. In that process,
                C-DAC represents a unique facet working in close junction with
                MeitY to realize nation’s policy and pragmatic interventions and
                initiatives in Information Technology. As an institution for
                high-end Research and Development (R&D), C-DAC has been at the
                forefront of the Information Technology (IT) revolution,
                constantly building capacities in emerging/enabling technologies
                and innovating and leveraging its expertise, caliber, skill sets
                to develop and deploy IT products and solutions for different
                sectors of the economy, as per the mandate of its parent, the
                Ministry of Electronics and Information Technology, Ministry of
                Communications and Information Technology, Government of India
                and other stakeholders including funding agencies,
                collaborators, users and the market-place.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={vision} className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
      <Footer1 />
      <Bottom1 />
    </>
  );
}
export default Aboutus;
