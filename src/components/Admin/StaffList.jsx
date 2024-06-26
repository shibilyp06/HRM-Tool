/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";
const StaffList = () => {
  const [staffList, setStaffList] = useState([]);
  const [staff, setStaff] = useState(null);
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axiosInstance.get("/admin/getStaff");
        const staffList = response.data;
        setStaffList(staffList.allStaff);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStaff();
  }, [staff]);

  const showModal = (staffMember) => {
    setStaff(staffMember);
  };
  const closeModal = () => {
    setStaff(null);
  };
  if (staff) {
    document.body.classList.add("active-modl");
  } else {
    document.body.classList.remove("active-modl");
  }

  return (
    <div className="container mx-auto bg-gray-400 w-screen h-screen ">
    {staff && <ProfileCard data={staff} closeModal={closeModal} />}

      <h2 className="text-2xl font-bold mb-4">Staff List</h2>
      <div className="flex justify-end items-center m-5">
        {" "}
        <Link to='/admin/addStaff'>
        <button className="bg-blue-400 text-white px-2 py-2 rounded-lg hover:bg-blue-600">
          {" "}
          Add Staff
        </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {staffList.map((staffMember, index) => (
          <div key={index} className="bg-white  rounded shadow p-4">
            <h3 className="text-lg font-semibold uppercase">
              {staffMember.name}
            </h3>
            <p className="text-gray-600">{staffMember.position}</p>
            <p className="text-gray-600">{staffMember.email}</p>
            <div className="flex justify-end items-end">
              <button
                onClick={() => {
                  showModal(staffMember);
                }}
                className="bg-blue-400 text-white px-2 py-2 rounded-lg hover:bg-blue-600"
              >
                view more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffList;
