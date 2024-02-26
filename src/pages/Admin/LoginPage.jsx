/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axiosInstance from "../../api/axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/adminSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [err, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Submiting Login Data
  const loginSubmit = async (e) => {
    e.preventDefault();
    // Collecting data from user
    const loginData = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    // Validating email regex
    // const testEmail = emailRegex.test(loginData.email);
    // console.log(testEmail);
    // Posting data to backend

    // if (!testEmail) {
    if (loginData.email === "" && loginData.password === "") {
      return setError(" Fill your form");
    }
    //   return setError("Enter valid data");
    // }
    try {
      const response = await axiosInstance.post("/admin/loginPost", loginData);
      if (response.status === 200) {
        const jwtToken = response.data.token;
        const token = localStorage.setItem("jwtToken", jwtToken);
        dispatch(setToken(jwtToken));
        navigate("/admin/Home");
      }
    } catch (err) {
      console.error(err);
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
                        onClick={() => {
                          setError("");
                        }}
                        id="email"
                        name="email"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
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
                        onClick={() => {
                          setError("");
                        }}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                    </div>
                    <p className="text-red-600 text-[16px] font-normal ">
                      {err}
                    </p>
                    <div className="relative">
                      <button className="bg-blue-500  text-white rounded-md px-2 py-1">
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
