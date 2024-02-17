/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "../styles/signup.css";
import { useState } from "react";
import OTPVerification from "./OTP";
import axiosInstance from "../api/axios";
function Signup() {
  const [error, setError] = useState("");
  const [ShowOTP, setshowOtp] = useState(false);
  const removeError = (e) => {
    setError("");
  };

  const submitAction = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      rePassword: e.target.elements.rePassword.value,
    };
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const test = regex.test(formData.password);
    const pass = formData.password;
    if (pass == "") {
      setError("Fill your form then submit");
    } else {
      if (test) {
        setError("");
        const valRepass = formData.password == formData.rePassword;
        if (valRepass) {
          setError("");
          try {
            const response = await axiosInstance.post(
              "/admin/signupPost",
              formData
            );
            setshowOtp(true);
            console.log(response.data, "data");
            const newAdmin = response.data.newAdmin;
            console.log(newAdmin, "frontend");
            return newAdmin;
          } catch (error) {
            setError();
          }
        } else {
          setError("password does not match");
        }
      } else {
        setError(
          "Password must be at least 8 characters long and contain at least"
        );
      }
    }
  };

  return (
    <>
      {!ShowOTP ? (
        <form onSubmit={submitAction} className="main">
          <div className="inputs">
            <center>
              <h1 className="" style={{ margin: "30px" }}>
                Sign Up
              </h1>
            </center>
            <input
              type="text"
              onClick={removeError}
              name="name"
              placeholder=" Name...."
            />{" "}
            <br />
            <input
              type="text"
              onClick={removeError}
              name="email"
              placeholder=" Email...."
            />
            <br />
            <input
              name="password"
              onClick={removeError}
              type="password"
              placeholder="Password...."
            />
            <br />
            <input
              type="rePassword"
              name="rePassword"
              onClick={removeError}
              placeholder="Confirm Password...."
            />
            <center className="">
              <br />
              <p style={{ color: "red", width: "300px" }}>{error}</p>
              <p style={{ marginBottom: "10px", fontSize: "16px" }}>
                {" "}
                Alredy have an account ?{" "}
                <Link to="/login" href="">
                  login
                </Link>
              </p>{" "}
              <button>Sign Up</button>
            </center>{" "}
          </div>
        </form>
      ) : (
        <OTPVerification newUser={submitAction} />
      )}
    </>
  );
}
export default Signup;
