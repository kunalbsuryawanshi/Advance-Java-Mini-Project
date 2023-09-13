import { FaCopyright, FaRegCopyright } from "react-icons/fa";

function Bottom1 ()
{
   return(
    <div className="container-fluid border-top bg-dark">

            <div className="row pb-2">
              <div className="text-center text-light"> <small>
                  <div className="my-3">
                   <a href="/index.aspx?id=help" className="tab-link-text link-dark text-light">Help</a> |
                  <a href="/index.aspx?id=website_policies" className="tab-link-text link-dark text-light"> Website Policies</a> |
                    <a href="/index.aspx?id=legal_notice#2" className="tab-link-text link-dark text-light "> Copyright Policy</a> |
                    <a href="/index.aspx?id=terms_conditions" className="tab-link-text link-dark text-light"> Terms &amp; Conditions</a> |
                  <a href="/index.aspx?id=reach_us" className="tab-link-text link-dark text-light"> Reach Us</a>
                  </div>

                  Website owned &amp; maintained by: Centre for Development of Advanced Computing (C-DAC)<br/>
                  <FaRegCopyright className="me-2 mb-1"/>
                  <script>                      document.write(new Date().getFullYear())</script>2023 C-DAC. All
                  rights reserved, Last Updated:
                  <span id="lblLastUpdated" class="copyrights"> Monday, August 15, 2022</span>
                </small>
              </div>
            </div>


          </div>

   );
}
 export default Bottom1;