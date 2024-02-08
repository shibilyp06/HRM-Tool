import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Signup from "../pages/Signup"
import Login from "../pages/LoginPage";
import OTPVerification from "../pages/OTP";

function CommonRouter() {
  return (
  <>
   <Routes>
    <Route path="/" Component={LandingPage}></Route>
    <Route path="/signup" Component={Signup}></Route>
    <Route path="/login" Component={Login}></Route>
    <Route path="/otpverification" Component={OTPVerification}></Route>
   </Routes>
  </>
  );
}

export default CommonRouter;
