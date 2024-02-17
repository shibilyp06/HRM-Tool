/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import GetOTPbutton from "../components/GetOTPbutton";
import "../styles/OTP.css";

function OTPVerification({ submitAction }) {
  return (
    <>
      <form className="main">
        <div className="inputs">
          <center>
            <h1 className="" style={{ margin: "30px" }}>
              OTP Verification
            </h1>
          </center>
          <center className="">
            <GetOTPbutton value={submitAction} />
          </center>
        </div>
      </form>
    </>
  );
}

export default OTPVerification;
