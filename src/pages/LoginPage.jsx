/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Home from "./Home";
import axiosInstance from "../api/axios"
import { useDispatch } from "react-redux";
function Login() {
  const [err, setError] = useState("");
  const [home, setHome] = useState(false);

  const dispatch = useDispatch()
  
  // Submiting Login Data
  const loginSubmit = async (e) => {
    e.preventDefault();
    // Collecting data from user
    const loginData = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    // Posting data to backend
    const response = await axiosInstance.post(
      "/admin/loginPost",
      loginData
    );
    if (response.status === 200) {
      const jwtToken = response.data.token
      const token =  localStorage.setItem("jwtToken",jwtToken)
      dispatch(jwtToken)
      setHome(true);
    }
  };
  return (
    <>
      {home ? (
        <Home />
      ) : (
        <form action="" onSubmit={loginSubmit} className="main">
          <div className="inputs">
            <center>
              <h1 className="" style={{ margin: "30px" }}>
                Login
              </h1>
            </center>
            <input type="email" name="email" placeholder="Email...." />
            <br />
            <input type="password" name="password" placeholder="Password...." />
            <br />
            <center className="">
              <p style={{ color: "red", fontSize: "20px" }}> {err} </p>
              <p style={{ marginBottom: "10px", fontSize: "16px" }}>
                Don't have an account? <a href="/signup">Sign up</a>
              </p>
              <button type="submit">Login</button>
            </center>
          </div>
        </form>
      )}
    </>
  );
}

export default Login;
