/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../redux/adminSlice";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import AdminRouter from "../router/AdminRouter";
import StaffRouter from "../router/StaffRouter";
import StudentRouter from "../router/StudentRouter";
function AuthGuard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = useSelector((state) => state.auth.token);
  console.log(jwt, "  : web token from redux");
  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    console.log(jwtToken, " : replaced jwtToken");

    dispatch(setToken(jwtToken));


    if (jwt !== null && jwt !== undefined) {
      console.log("authenticated successfully");
      setIsAuthenticated(true);
      return;
    }
    if (!isAuthenticated) {
      console.log("not authenticated");
      navigate("/common/login");
    }
  }, [jwt]);
  return (
    <>
      {
        jwt? (
            <div> <Outlet/></div>
        ):(
            navigate('/common/login')
        )
      }
      {/* <Routes>
        <Route path="/admin/*" element={<AdminRouter />}></Route>
        <Route path="/staff/*" element={<StaffRouter />}></Route>
        <Route path="/student/*" element={<StudentRouter />}></Route>
      </Routes> */}
    </>
  );
}

export default AuthGuard;
