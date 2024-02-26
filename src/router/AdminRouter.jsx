import { Route, Routes } from "react-router-dom";
import AdminHome from "../pages/Admin/AdminHome";
import AddStaff from "../components/Admin/AddStaff";
import EditStaff from "../pages/Admin/EditStaff";
import Login from "../pages/Admin/LoginPage";
import LandingPage from "../pages/Admin/LandingPage";
import ShowStaff from "../pages/Admin/ShowStaff";

function AdminRouter() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<AdminHome />}></Route>
        <Route path="/landingPage" element={<LandingPage/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/staffInfo" element={<ShowStaff />}></Route>
        <Route path="/addStaff" element={<AddStaff />}></Route>
        <Route path="/staffEdit/:Id" element={<EditStaff />}></Route>
      </Routes>
    </>
  );
}

export default AdminRouter;
