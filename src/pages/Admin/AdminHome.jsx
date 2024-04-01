import AdminHeader from "../../components/Admin/AdminHeader";
import Home from "../../components/Admin/Home";
// import ProfileCard from "../../components/Admin/ProfileCard";

function AdminHome() {
  return (
    <>
      <div ><AdminHeader/></div>
      <div className=" bg-gray-400 h-screen "><Home/></div>

    </>
  );
}

export default AdminHome;
