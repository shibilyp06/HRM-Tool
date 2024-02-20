/* eslint-disable no-unused-vars */
import "../styles/landingpage.css";
import { Link } from "react-router-dom";
import image from "../assets/images/office.webp";
import StaffPage from "../components/Admin/StaffPage";
function LandingPage() {

  return (
    <>
      {/* <div className="landingPage">
        <div className="header">
          <h2
            style={{
              fontFamily: "sans-serif",
            }}
          >
            Attentder
          </h2>
          <ul className="menu-list">
            <li>Home</li>
            <li>Info</li>
            <li>About</li>
          </ul>
          <button className="login-btn">Login</button>
        </div>
        <div className="body">
          <div className="content">
            <h1 className="slogan">
              Managing People,
              <br /> Elevating Performance{" "}
            </h1>
          </div>
          <img className="img" src={image} alt="" />
        </div>
        <center>
          <Link to="/Signup" className="getStarted-btn">
            <button>Register</button>
          </Link>
        </center>
      </div> */}
    </>
  );
}

export default LandingPage;
