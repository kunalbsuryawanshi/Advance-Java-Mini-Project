import Bottom1 from "./Bottom";
import Carousel from "./Carousel";
import Footer1 from "./Footer";
import NewNavbar from "./Navbar";
import Body from "./Body";
import { FaHouseUser, FaSchool } from "react-icons/fa";

function Home() {
  return (
    <>
      <NewNavbar />
      {/* <Carousel /> */}
      <div className="portion " style={{ height: "200px" }}>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-md-4 mt-3">
              <h1 className="mt-5 text-light"><FaSchool className="mb-2 text-warning me-2"/>C-DAC Centre @Mumbai</h1>
              <p className="image-aboutus-para"></p>
            </div>
          </div>
        </div>
      </div>
      <Body />
      <Footer1 />
      <Bottom1 />
    </>
  );
}
export default Home;
