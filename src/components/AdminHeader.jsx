import { Link } from "react-router-dom";

function AdminHeader() {
  return (
    <>
      <div className="bg-black text-white flex items-center justify-around ">
        <div className=" w-1/2 text-2xl font-bold text-gray-500">Attentder</div>
        <ul className=" w-1/2 flex justify-around gap-5 text-xl p-6 ">
          <button> Home</button>
          <Link to="/satffDetails">
            {" "}
            <button> Staff</button>
          </Link>
          <button> Student</button>
          <button> Payments</button>
          <button> About</button>
        </ul>
      </div>
    </>
  );
}

export default AdminHeader;
