import { BrowserRouter, Route, Routes } from "react-router-dom";

import StaffRouter from "./router/StaffRouter";
import AdminRouter from "./router/AdminRouter";
import StudentRouter from "./router/StudentRouter";
import "./index.css";
import CommonRouter from "./router/CommonRouter";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<CommonRouter/>}></Route>
          <Route path="/admin/*" Component={AdminRouter}></Route>
          <Route path="/staff/*" Component={StaffRouter}></Route>
          <Route path="/student/*" Component={StudentRouter}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
