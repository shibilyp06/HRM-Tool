import { Route, Routes } from "react-router-dom";
import StaffHome from "../pages/Staff/StaffHome.jsx";
import StudentInfo from "../pages/Staff/StudentInfo.jsx";
import AddStudent from "../components/Staff/AddStudent.jsx";
import AddCourse from "../components/Staff/AddCourse.jsx";

function StaffRouter() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<StaffHome />}></Route>
        <Route path="/studentInfo" element={<StudentInfo/>}></Route>
        <Route path="/addStudent" element={<AddStudent/>}></Route>
        <Route path="/addCourse" element={<AddCourse/>}></Route>

      </Routes>
    </>
  );
}

export default StaffRouter;
