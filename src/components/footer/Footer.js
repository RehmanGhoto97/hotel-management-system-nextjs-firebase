import Link from "next/link";
import "./index.scss";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-1 ftr-left">
            <div className="footer-intro">
              <Link style={{ color: "#6da300" }} className="logo" href={"/"}>
                soft
                <span className="fw-bold">inn</span>
              </Link>
              <h4>Make hotelier work easier</h4>
              <div className="row footer-intro__social-media">
                <a href={"/"} className="col-2">
                  <FaFacebookF />
                </a>
                <a href="#" className="col-2">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="col-2">
                  <FaTwitter />
                </a>
                <a href="#" className="col-2">
                  <FaYoutube />
                </a>
              </div>
              <p>
                Softinn builds the next-generation hotel management system for
                boutique hotels in Asia Pacific.
              </p>
              <p>
                <a href="#" target="blank">
                  Term & Services
                </a>
                <span> | </span>
                <a href="#" target="blank">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
          <div className="col-2 ftr-right">
            <div className="ftr-right-col-1 col-2-row">
              {/* ----features------- */}
              <div className="col-6">
                <h5>Features </h5>
                <div className="ftr-right-submenu">
                  <p>
                    <a href="#">Property Management System</a>
                  </p>
                  <p>
                    <a href="#">Property Management System</a>
                  </p>
                  <p>
                    <a href="#">Property Management System</a>
                  </p>
                  <p>
                    <a href="#">Property Management System</a>
                  </p>
                </div>
              </div>
              {/* ----segments------- */}
              <div className="col-6">
                <h5>Features Segments</h5>
                <div className="ftr-right-submenu">
                  <p>
                    <a href="#">Property Management System</a>
                  </p>
                  <p>
                    <a href="#">Property Management System</a>
                  </p>
                  <p>
                    <a href="#">Property Management System</a>
                  </p>
                  <p>
                    <a href="#">Property Management System</a>
                  </p>
                </div>
              </div>
        
            </div>
               <div className="ftr-right-col-1 col-2-row">
              {/* ----features------- */}
              <div className="col-6">
                <h5>Features </h5>
                <div className="ftr-right-submenu">
                  <p>
                    <a href="#">Property Management System</a>
                  </p>
                  <p>
                    <a href="#">Property Management System</a>
                  </p>
                  <p>
                    <a href="#">Property Management System</a>
                  </p>
                  <p>
                    <a href="#">Property Management System</a>
                  </p>
                </div>
              </div>
              {/* ----segments------- */}
              <div className="col-6">
                <h5>Features Segments</h5>
                <div className="ftr-right-submenu">
                  <p>
                    <a href="#">Property Management System</a>
                  </p>
                  <p>
                    <a href="#">Property Management System</a>
                  </p>
                  <p>
                    <a href="#">Property Management System</a>
                  </p>
                  <p>
                    <a href="#">Property Management System</a>
                  </p>
                </div>
              </div>
        
            </div>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
