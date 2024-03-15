import { Route, Routes } from "react-router-dom";
import StudentHome from "../pages/Student/StudentHome";
import StudentChatPage from "../pages/Student/StudentChatPage";
import AttentdancePage from "../pages/Student/AttentdancePage";

function StudentRouter() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<StudentHome />}></Route>
        <Route path="/chat" element={<StudentChatPage />}></Route>
        <Route path="/attendance" element={<AttentdancePage />}></Route>
      </Routes>
    </>
  );
}

export default StudentRouter;
