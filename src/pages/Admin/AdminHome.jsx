import AdminHeader from "../../components/Admin/AdminHeader";
import Home from "../../components/Admin/Home";
// import ProfileCard from "../../components/Admin/ProfileCard";

function AdminHome() {
  return (
    <>
      <div className="w-screen"><AdminHeader/></div>
      <div><Home/></div>

    </>
  );
}

export default AdminHome;
