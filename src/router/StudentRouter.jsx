import { Route, Routes } from "react-router-dom";
import StudentHome from "../pages/Student/StudentHome";

function StudentRouter() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<StudentHome/>}></Route>
      </Routes>
    </>
  );
}

export default StudentRouter;
