import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import CommonRouter from "./router/CommonRouter";
import AuthGuard from "./routeGuard/AuthGuard";
import AdminRouter from "./router/AdminRouter";
import StaffRouter from "./router/StaffRouter";
import StudentRouter from "./router/StudentRouter";
// import ProtectedRoute from "./components/Common/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/common/*" element={<CommonRouter />}></Route>
            <Route path="/admin/*" element={<AdminRouter />}></Route>
            <Route path="/staff/*" element={<StaffRouter />}></Route>
            <Route path="/student/*" element={<StudentRouter />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
