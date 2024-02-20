import { Route, Routes } from "react-router-dom";
import AdminHome from "../pages/Admin/AdminHome";
import AddStaff from "../components/Admin/AddStaff";

function AdminRouter() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<AdminHome/>}></Route>
        <Route path="/addStaff" element={<AddStaff/>}></Route>
      </Routes>
    </>
  );
}

export default AdminRouter;
