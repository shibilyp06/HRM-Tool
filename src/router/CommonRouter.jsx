import { Route, Routes } from "react-router-dom";
import Login from "../pages/Common/LoginPage";
import LandingPage from "../pages/Common/LandingPage";

function CommonRouter() {
  return (
    <>
      <Routes>
        <Route path="/landingpage" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default CommonRouter;
