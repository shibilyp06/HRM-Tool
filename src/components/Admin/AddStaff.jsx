/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axiosInstance from "../../api/axios";

const AddStaffPage = () => {
  const [error, setError] = useState("");
  const [formDatas, setFormDatas] = useState({
    name: "",
    email: "",
    position: "",
    dob: "",
    phoneNumber: "",
    imgURL: "",
  });
  const getData = (e) => {
    setError("");
    const { name, value, files } = e.target;
    // If the input is a file input
    if (files) {
      setFormDatas({ ...formDatas, [name]: files[0] });
    } else {
      setFormDatas({ ...formDatas, [name]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formDatas.imgURL, " img");
    console.log(formDatas.name, " name");

    const formData = new FormData();
    formData.append("name", formDatas.name);
    formData.append("email", formDatas.email);
    formData.append("position", formDatas.position);
    formData.append("dob", formDatas.dob);
    formData.append("phoneNumber", formDatas.phoneNumber);
    formData.append("imgURL", formDatas.imgURL);
    if (formDatas.phoneNumber === "") {
      setError("Fill your form Then click submit");
    }
    try {
      const response = await axiosInstance.post("/admin/addStaff", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Add Staff</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 h-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={getData}
              name="name"
              required
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              placeholder="Enter name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={getData}
              required
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              placeholder="Enter Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              name="position"
              onChange={getData}
              required
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              placeholder="Enter position"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              onChange={getData}
              required
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              onChange={getData}
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              placeholder="Enter phone number"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="imgURL"
              name="imgURL"
              onChange={getData}
              accept="image/*"
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              required
            />
          </div>
          <p className="text-red-600 ">{error} </p>
          <div className="flex justify-between items-center">
            <button
              onSubmit={handleSubmit}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-300"
            >
              Add Staff
            </button>
            <button
              className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-md transition-colors duration-300"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStaffPage;
