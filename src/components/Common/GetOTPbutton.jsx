/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axiosInstance from "../../api/axios";
import { useState } from "react";
import VerifyButton from "./VerifyButton";

function  GetOTPbutton({submitAction}) {
  const [page, setPage] = useState(false);
  const [Number, setNumber] = useState("");
  const [err, setErr] = useState("");
  const getNumber = (e) => {
    setErr("");
    setNumber(e.target.value);
  };

  const sendNumber = async (e, number) => {
    e.preventDefault();
    if (Number.length < 10) {
      setErr("Please enter valid phone number");
    } else {
      try {
        const newUser = submitAction()
        console.log(newUser,"new from");
        const response = await axiosInstance.post(
          "/admin/otpVerification",
          { Number }
        );
        setPage(true);
      } catch {
        console.log("error occured");
      }
    }
  };

  return (
    <>
      {" "}
      {page ? (
        <VerifyButton value={submitAction} />
      ) : (
        <>
          <input
            type="number"
            placeholder="Phone Number"
            onChange={getNumber}
          />
          <br />
          <p className="err-message">{err}</p>
          <br />
          <button style={{ margin: "10px" }} onClick={sendNumber}>
            Get OTP
          </button>
        </>
      )}
    </>
  );
}

export default GetOTPbutton;
