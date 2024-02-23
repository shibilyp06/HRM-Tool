/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axiosInstance from "../../api/axios";

const AddStaffPage = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    dob: "",
    phoneNumber: "",
  });
  const getData = (e) => {
    setError("");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phoneNumber === "") {
      setError("Fill your form Then click submit");
    }

    const response = await axiosInstance.post("/admin/addStaff", formData);
  };
  return (
    // <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
    //   <h1 className="text-3xl font-bold mb-8">Add Staff</h1>
    //   <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 h-auto">
    //     <form className="space-y-4" onSubmit={handleSubmit}>
    //       <div className="flex flex-col">
    //         <label htmlFor="name">Name</label>
    //         <input
    //           type="text"
    //           id="name"
    //           name="name"
    //           required
    //           className="px-4 py-2 rounded-md bg-gray-700 text-white"
    //           placeholder="Enter name"
    //           onChange={getData}
    //         />
    //       </div>
    //       <div className="flex flex-col">
    //         <label htmlFor="email">Email</label>
    //         <input
    //           type="text"
    //           id="email"
    //           name="email"
    //           required
    //           className="px-4 py-2 rounded-md bg-gray-700 text-white"
    //           placeholder="Enter Email"
    //           onChange={getData}
    //         />
    //       </div>
    //       <div className="flex flex-col">
    //         <label htmlFor="position">Position</label>
    //         <input
    //           type="text"
    //           id="position"
    //           name="position"
    //           required
    //           className="px-4 py-2 rounded-md bg-gray-700 text-white"
    //           placeholder="Enter position"
    //           onChange={getData}
    //         />
    //       </div>
    //       <div className="flex flex-col">
    //         <label htmlFor="dob">Date of Birth</label>
    //         <input
    //           type="date"
    //           id="dob"
    //           name="dob"
    //           required
    //           className="px-4 py-2 rounded-md bg-gray-700 text-white"
    //           onChange={getData}
    //         />
    //       </div>
    //       <div className="flex flex-col">
    //         <label htmlFor="phoneNumber">Phone Number</label>
    //         <input
    //           type="tel"
    //           id="phoneNumber"
    //           name="phoneNumber"
    //           className="px-4 py-2 rounded-md bg-gray-700 text-white"
    //           placeholder="Enter phone number"
    //           required
    //           onChange={getData}
    //         />
    //       </div>
    //       <p className="text-red-600 ">{error} </p>
    //       <div className="flex justify-between items-center">
    //         <button
    //           onClick={handleSubmit}
    //           className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-300"
    //         >
    //           Add Staff
    //         </button>
    //         <button
    //           className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-md transition-colors duration-300"
    //           onClick={() => window.history.back()}
    //         >
    //           Go Back
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <React.Fragment>
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">Account settings</h1>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="username">Username</label>
              <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
              <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="password">Password</label>
              <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Password Confirmation</label>
              <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            
            {/* Add more form fields here */}
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
          </div>
        </form>
      </section>

      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>
        
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
              <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
              <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
              <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Password Confirmation</label>
              <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
          </div>
        </form>
      </section>
    </React.Fragment>

  );
};

export default AddStaffPage;
