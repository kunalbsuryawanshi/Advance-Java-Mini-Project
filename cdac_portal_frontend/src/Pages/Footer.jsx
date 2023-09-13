import React from "react";
import ReactDOM from "react-dom/client";
import Carousel from "better-react-carousel";
import "./style.css";
import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers";
import {
  FaArrowAltCircleRight,
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaPhoneSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer1() {
  return (
    <div className="row bg-secondary-subtle w-100 m-1 justify-content-center">
      <div
        className="col footer-pt aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="pb-2 mb-4 pt-3 footer_title text-uppercase">
          <h5 className="ms-4">Centers</h5>
          <hr></hr>
        </div>
        <ul className="pb-4" style={{ listStyle: "none" }}>
          <li>
            <a
              href="/index.aspx?id=BL"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Bengaluru{" "}
            </a>
          </li>
          <li>
            <a
              href="/index.aspx?id=CH"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Chennai{" "}
            </a>
          </li>
          <li>
            <a
              href="/index.aspx?id=DL"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Delhi
            </a>
          </li>
          <li>
            <a
              href="/index.aspx?id=HY"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Hyderabad{" "}
            </a>
          </li>
          <li>
            <a
              href="/index.aspx?id=KL"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Kolkata
            </a>
          </li>
          <li>
            <a
              href="/index.aspx?id=ML"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Mohali
            </a>
          </li>
          <li>
            <a
              href="/index.aspx?id=MB"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Mumbai
            </a>
          </li>
          <li>
            <a
              href="/index.aspx?id=ND"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Noida{" "}
            </a>
          </li>
          <li>
            <a
              href="/index.aspx?id=PT"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Patna{" "}
            </a>
          </li>
          <li>
            <a
              href="/index.aspx?id=PN"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Pune{" "}
            </a>
          </li>
          <li>
            <a
              href="/index.aspx?id=SL"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Silchar
            </a>
          </li>
          <li>
            <a
              href="/index.aspx?id=TVM"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Thiruvananthapuram
            </a>
          </li>
        </ul>
      </div>

      <div
        className="col footer-pt aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="pb-2 mb-4 pt-3 footer_title text-uppercase">
          <h5 className="ms-4">Links</h5>
          <hr></hr>
        </div>
        <ul className="pb-4" style={{ listStyle: "none" }}>
          <li>
            <a
              href="/aboutus"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; About Us
            </a>
          </li>
          <li>
            <a
              href="https://www.cdac.in/index.aspx?id=products_services"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Products &amp; Services
            </a>
          </li>
          <li>
            <a
              href="https://www.cdac.in/index.aspx?id=research"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; R&amp;D{" "}
            </a>
          </li>
          <li>
            <a
              href="https://www.cdac.in/index.aspx?id=career"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Careers
            </a>
          </li>
          <li>
            <a
              href="https://www.cdac.in/index.aspx?id=tenders"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Tenders
            </a>
          </li>
          <li>
            <a
              href="/index.aspx?id=news"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Press Kit
            </a>
          </li>
          <li>
            <a
              href="/index.aspx?id=audiov"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Video Gallery
            </a>
          </li>
          <li>
            <a
              href="https://www.cdac.in/index.aspx?id=events"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Events
            </a>
          </li>
          <li>
            <a
              href="https://www.cdac.in/index.aspx?id=search&search=awards&pageNo=0"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Awards
            </a>
          </li>
          <li>
            <a
              href="/index.aspx?id=download"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Downloads
            </a>
          </li>
          <li>
            <a
              href="/index.aspx?id=cdac_achievements"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Achievements
            </a>
          </li>
          <li>
            <a
              href="https://www.cdac.in/index.aspx?id=search&search=alliance&pageNo=0"
              style={{ textDecorationLine: "none" }}
              className="tab-link-text link-dark"
            >
              <FaArrowAltCircleRight /> &nbsp; Alliance
            </a>
          </li>
        </ul>
      </div>

      <div
        className="col footer-pt aos-init aos-animate "
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="pb-2 mb-4 pt-3 footer_title text-uppercase">
          <h5 className="ms-4">Contact Us</h5>
          <hr></hr>
        </div>
        <div className="pb-4">
          <a
            href="https://goo.gl/maps/Ee1Yg7QBgMSqbTat9"
            onClick="return external_link();"
            target="_blank"
          >
            <img
              src="https://www.cdac.in/img/map.jpg"
              className="img-fluid border w-100 shadow"
            />
          </a>
          <p className="py-3 bg-secondary-subtle" />{" "}
          <strong>Centre for Development of Advanced Computing</strong>
          <br />
          Sector 7, Rain Tree Marg, Next to Bharati Vidyapeeth, Near Kharghar
          Rly Stn, CBD Belapur, Navi Mumbai,
          <br />
          Maharashtra (India)
          <p className="mt-1">
            <FaPhoneAlt />
            &nbsp; 022 27565303/5308
          </p>
          <p>
            
            <Link
              className="text-primary"
              as={Link}
              to={"https://twitter.com/cdacmumbai"}
            >
              <FaTwitter />
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              className="text-danger"
              as={Link}
              to={"https://www.instagram.com/cdac_mumbai/"}
            >
              <FaInstagram />
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              className="text-primary"
              as={Link}
              to={"https://www.facebook.com/cdacmumbai/"}
            >
              <FaFacebook />
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              className="text-danger"
              as={Link}
              to={"https://www.youtube.com/@cdacmumbaiet5321"}
            >
              <FaYoutube />
            </Link>
          </p>
          <p />
          <br />
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default Footer1;
