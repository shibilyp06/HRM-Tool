import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import CommonRouter from "./router/CommonRouter";
import AuthGuard from "./routeGuard/AuthGuard";
// import ProtectedRoute from "./components/Common/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<CommonRouter />}></Route>
          <Route path="/*" element={<AuthGuard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
