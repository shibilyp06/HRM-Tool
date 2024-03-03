import { Route, Routes } from "react-router-dom";
import AdminHome from "../pages/Admin/AdminHome";
import AddStaff from "../components/Admin/AddStaff";
import LandingPage from "../pages/Common/LandingPage";
import ShowStaff from "../pages/Admin/ShowStaff";
import EditStaff from "../components/Admin/EditStaff";
import ShowStudentPage from "../pages/Admin/ShowStudentPage";
import ChatPage from "../components/Admin/ChatPage";

function AdminRouter() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<AdminHome />}></Route>
        <Route path="/landingPage" element={<LandingPage/>}></Route>
        <Route path="/studentsInfo" element={<ShowStudentPage/>}></Route>
        <Route path="/staffInfo" element={<ShowStaff />}></Route>
        <Route path="/addStaff" element={<AddStaff />}></Route>
        <Route path="/staffEdit/:Id" element={<EditStaff />}></Route>
        <Route path="/StaffChat/:Id" element={<ChatPage/>}></Route>
      </Routes>
    </>
  );
}

export default AdminRouter;
