/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";
function EditStudent() {
  const [error, setError] = useState("");
  const [student, setStudent] = useState({});
  const { Id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        console.log("hellow");
        const response = await axiosInstance.get(`/staff/editStudent/${Id}`);
        const student = response.data.editingStudent;
        setStudent(student);
      } catch (err) {
        console.error(err, "from err");
      }
    };
    fetchStaff();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = {
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        course: e.target.elements.course.value,
        dob: e.target.elements.dob.value,
        phoneNumber: e.target.elements.phoneNumber.value,
      };
      //   formData.append("imgURL", e.target.elements.imgURL.files[0]);
      //   console.log(formData.get("imgURL"), "jii");
      const response = await axiosInstance.put(
        "/staff/updateStudent",
        formData
      );
      if (response.status == 200) {
        alert(" Student added successfully");
        navigate("/staff/studentInfo");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Edit Student</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 h-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={student.name}
              required
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              placeholder="Enter name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={student.email}
              required
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              placeholder="Enter Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="batchCourse"> Course</label>
            <input
              type="text"
              id="course"
              name="course"
              defaultValue={student.course}
              required
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              placeholder="Enter  course"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              defaultValue={student.dob}
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
              defaultValue={student.phoneNumber}
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              placeholder="Enter phone number"
              required
            />
          </div>
          {/* <div className="flex flex-col">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="imgURL"
              name="imgURL"
              defaultValue={student.imgURL}
              accept="image/*"
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              required
            />
          </div> */}
          <p className="text-red-600 ">{error} </p>
          <div className="flex justify-between items-center">
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-300">
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

export default EditStudent;
