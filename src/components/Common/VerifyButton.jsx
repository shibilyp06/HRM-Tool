/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axiosInstance from "../../api/axios";
import { useEffect, useState } from "react";


function VerifyButton({submitAction}) {
  const [err, setErr] = useState("");
  const [otp, setOTP] = useState([]);
  //   const handleInput = (event, index) => {
  //     const inputLength = event.target.value.length;
  //     if (inputLength === 1 && index < 5) {
  //       document.getElementById(`otp-input-${index + 1}`).focus();
  //     } else if (index != 0 && index != 5) {
  //       document.getElementById(`otp-input-${index - 1}`).focus();
  //     }
  //   };
  const getOTPnumber = (e) => {
    setOTP(e.target.value);
  };
  const verifyOTP = async () => {
    const newUser = submitAction
    if (otp.length == 6) {
      const response = await axiosInstance.post(
        "/admin/otpVerification",
        { otp,newUser }
      );
      console.log(response.data, "response");
    } else {
      setErr("Please fill all the columns");
    }
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input type="text" placeholder="Enater your 6 digit OTP" onChange={getOTPnumber} />
        {/* {[0, 1, 2, 3, 4, 5].map((index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength={1}
            placeholder=""
            onChange={getOTP}
            style={{ width: "40px", marginRight: "12px" }}
            onInput={(event) => handleInput(event, index)}
          />
        ))} */}
      </div>
      <br />
      <p className="err-message">{err} </p>
      <br />
      <p style={{ marginBottom: "10px", fontSize: "16px" }}>
        Didn't receive OTP? <a href="#">Resend OTP</a>
      </p>
      <button onClick={verifyOTP}>Verify OTP</button>
    </>
  );
}

export default VerifyButton;
