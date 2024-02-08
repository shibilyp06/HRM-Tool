/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useState } from "react";

function OTPVerification() {
  const [number, setNumber] = useState("");
  const handleInput = (event, index) => {
    const inputLength = event.target.value.length;
    if (inputLength === 1 && index <= 3) {
      // If a character is typed and it's not the last input field,
      // focus on the next input field
      document.getElementById(`otp-input-${index + 1}`).focus();
    } else {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };
  const getNumber = (e) => {
    setNumber(e.target.value);
  };
 
  return (
    <>
      <form className="main">
        <div className="inputs">
          <center>
            <h1 className="" style={{ margin: "30px" }}>
              OTP Verification
            </h1>
          </center>
          <input
            type="number"
            placeholder="Phone Number"
            onChange={getNumber}
          />{" "}
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength={1}
                placeholder=""
                style={{ width: "40px", marginRight: "12px" }}
                onInput={(event) => handleInput(event, index)}
              />
            ))}
          </div>
          <br />
          <center className="">
            {" "}
           
            <p style={{ marginBottom: "10px", fontSize: "16px" }}>
              Didn't receive OTP? <a href="#">Resend OTP</a>
            </p>
            <button>Verify OTP</button>
          </center>
        </div>
      </form>
    </>
  );
}

export default OTPVerification;
