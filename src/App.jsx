import { BrowserRouter } from "react-router-dom";

import CommonRouter from "./router/CommonRouter";
import StaffRouter from "./router/StaffRouter";
import AdminRouter from "./router/AdminRouter";
import StudentRouter from "./router/StudentRouter";
import "./index.css";

// import {  Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <CommonRouter />
        <StaffRouter />
        <AdminRouter />
        <StudentRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
