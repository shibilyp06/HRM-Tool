import { useState } from "react";
import axiosInstance from "../../api/axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/adminSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [err, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roles = ["Admin", "Staff", "Student"];

  const loginSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      role: e.target.elements.role.value,
    };
    if (
      loginData.email === "" ||
      loginData.password === "" ||
      loginData.role === ""
    ) {
      toast.error("Fill in all fields");
      return;
    }
    try {
      const response = await axiosInstance.post("/loginPost", loginData);

      if (response.status === 200) {
        const jwtToken = response.data.token;
        localStorage.setItem("jwtToken", jwtToken);
        dispatch(setToken(jwtToken));
        if (response.data.role === "Admin") {
          navigate("/admin/Home");
          toast.success("Welcome admin");
        } else if (response.data.role === "Staff") {
          navigate("/staff/Home");
        } else if (response.data.role === "Student") {
          navigate("/student/Home");
        }
      }
    } catch (err) {
      if (err.response.status === 404) {
        toast.error(err.response.data.error);
      } else if (err.response.status === 401) {
        toast.error(err.response.data.error);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <h1 className="text-2xl text-blue-700 font-semibold text-center mb-6">
                Login
              </h1>
              <form onSubmit={loginSubmit} className="space-y-4">
                <input
                  autoComplete="off"
                  onClick={() => setError("")}
                  id="email"
                  name="email"
                  type="email"
                  className="w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-500"
                  placeholder="Email address"
                />
                <input
                  autoComplete="off"
                  id="password"
                  name="password"
                  type="password"
                  onClick={() => setError("")}
                  className="w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-500"
                  placeholder="Password"
                />
                <select
                  id="role"
                  name="role"
                  className="w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-500"
                >
                  <option value="">Select Role</option>
                  {roles.map((role, index) => (
                    <option key={index} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                <p className="text-red-600 text-[16px] font-normal">{err}</p>
                <button className="w-full bg-blue-500 text-white rounded-md px-2 py-1">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer style={{ width: "40%" }} />
    </>
  );
}

export default Login;
