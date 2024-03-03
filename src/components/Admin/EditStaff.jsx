/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import { useParams } from "react-router-dom";
function EditStaff() {
  const [error, setError] = useState("");
  const [staff, setStaff] = useState({});
  const { Id } = useParams();

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axiosInstance.put(`/admin/editStaff/${Id}`);
        const editingStaff = response.data.editingStaff;
        setStaff(editingStaff);
      } catch (err) {
        console.error(err, "from err");
      }
    };
    fetchStaff();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const updatedData = {
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        position: e.target.elements.position.value,
        dob: e.target.elements.dob.value,
        phoneNumber: e.target.elements.phoneNumber.value,
      };
      console.log(updatedData, "updat");
      const response = await axiosInstance.put(
        "/admin/updateStaff",
        updatedData
      );
      if(response.status===200){
        alert("--->Updated<---")
        window.history.back()
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Update Staff</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 h-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={staff.name}
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
              defaultValue={staff.email}
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
              defaultValue={staff.position}
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
              defaultValue={staff.dob}
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
              defaultValue={staff.phoneNumber}
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              placeholder="Enter phone number"
              required
            />
          </div>
          <p className="text-red-600 ">{error} </p>
          <div className="flex justify-between items-center">
            <button
              onSubmit={handleSubmit}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-300"
            >
              Update
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
}

export default EditStaff;
