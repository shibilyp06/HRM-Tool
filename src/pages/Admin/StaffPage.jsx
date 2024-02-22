/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import { Link } from "react-router-dom";
const StaffPage = () => {
  const [staffList, setStaffList] = useState([]);
  useEffect(() => {
    const fetchStaff = async () => {
      const response = await axiosInstance.get("/admin/getStaff");
      const staffList = response.data;
      setStaffList(staffList.allStaff);
      console.log(staffList);
      console.log(response.data, " alll ");
    };
    fetchStaff();
  }, []);
  const deleteStaff = async (Id) => {
    const updatedList = staffList.filter((staff) => {
      return staff._id !== Id;
    });
    setStaffList(updatedList);
  };
  const editStaff = async (Id)=>{
    await axiosInstance.get(`/admin/editStaff/:${Id}`)
  }
  let Id;
  return (
    <>
      <div></div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Staff Management
        </h1>
        {/* Add Staff Button */}
        <div className="mb-8 flex justify-center">
          <Link to="/admin/addStaff">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
              Add Staff
            </button>
          </Link>
        </div>

        {/* Existing Staff List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {staffList.map((staff) => (
            <div
              key={staff.id}
              className="bg-white shadow-md rounded-md p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-4">{staff.name}</h2>
                <p className="text-gray-600">{staff.position}</p>
              </div>
              <div className="mt-6 flex justify-between">
                <Link to={`/admin/editStaff`}>
                  <button onClick={()=>{
                    editStaff(staff._id)
                  }} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => {
                    deleteStaff(staff._id);
                  }}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaffPage;
