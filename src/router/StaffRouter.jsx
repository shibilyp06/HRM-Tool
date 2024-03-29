import { Route, Routes } from "react-router-dom";
import StaffHome from "../pages/Staff/StaffHome.jsx";
import StudentInfo from "../pages/Staff/StudentInfo.jsx";
import AddStudent from "../components/Staff/AddStudent.jsx";
import AdminChatPage from "../components/Staff/AdminChat.jsx";
import EditStudent from "../components/Staff/EditStudent.jsx";
import ChatStaff from "../pages/Staff/ChatStaff.jsx";
import AddCoursePage from "../pages/Staff/AddCoursePage.jsx";
import EventPage from "../pages/Staff/EventPage.jsx";

function StaffRouter() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<AuthGuard />}> */}
        <Route path="/Home" element={<StaffHome />}></Route>
        <Route path="/studentInfo" element={<StudentInfo />}></Route>
        <Route path="/addStudent" element={<AddStudent />}></Route>
        <Route path="/addCourse" element={<AddCoursePage />}></Route>
        <Route path="/adminChat" element={<AdminChatPage />}></Route>
        <Route path="/editStudent/:Id" element={<EditStudent />}></Route>
        <Route path="/chat" element={<ChatStaff />}></Route>
        <Route path="/addEvents" element={<EventPage />}></Route>
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default StaffRouter;
