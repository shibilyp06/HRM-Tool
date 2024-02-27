import { useState } from "react";
import axiosInstance from "../../api/axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/adminSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [err, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roles = ["Admin", "Staff", "Student"]; // Define roles array

  const loginSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      role: e.target.elements.role.value, // Get selected role from dropdown
    };
    if (
      loginData.email === "" ||
      loginData.password === "" ||
      loginData.role === ""
    ) {
      return setError("Fill in all fields");
    }
    try {
      const response = await axiosInstance.post("/loginPost", loginData);

      if (response.status === 200) {
        const jwtToken = response.data.token;
        localStorage.setItem("jwtToken", jwtToken);
        dispatch(setToken(jwtToken));
        if (response.data.role == "Admin") {
          navigate("/admin/Home");
        } else if (response.data.role == "Staff") {
          navigate("/staff/Home");
        } else if (response.data.role == "Student") {
          navigate("/student/Home");
        }
      }
    } catch (err) {
      if (err.response.status === 404) {
        setError(err.response.data.err);
      } else if (err.response.status === 401) {
        setError(err.response.data.err);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl text-blue-700 w-72 font-semibold">
                  Login
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form onSubmit={loginSubmit}>
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        onClick={() => setError("")}
                        id="email"
                        name="email"
                        type="email"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-500"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email Address
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="password"
                        name="password"
                        type="password"
                        onClick={() => setError("")}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-500"
                        placeholder="Password"
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <select
                        id="role"
                        name="role"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-500"
                      >
                        <option value="">Select Role</option>
                        {roles.map((role, index) => (
                          <option key={index} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </div>
                    <p className="text-red-600 text-[16px] font-normal">
                      {err}
                    </p>
                    <div className="relative">
                      <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
