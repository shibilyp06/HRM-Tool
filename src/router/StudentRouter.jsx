import { Route, Routes } from "react-router-dom";
import StudentHome from "../pages/Student/StudentHome";
import StudentChatPage from "../pages/Student/StudentChatPage";

function StudentRouter() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<StudentHome/>}></Route>
        <Route path="/chat" element={<StudentChatPage/>}></Route>
      </Routes>
    </>
  );
}

export default StudentRouter;
