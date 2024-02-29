/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import { Link } from "react-router-dom";
import StudentCard from "./StudentCard";

const StudentsList = () => {
  const [students, setStudents] = useState([]);
    const [student, setStudent] = useState(null);
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axiosInstance.get("/staff/getStudents");
        const students = response.data.students;
        console.log(students , " lpopo");
        setStudents(students);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStaff();
  }, [student]);
    const showModal = (student) => {
      setStudent(student);
    };

    const closeModal = () => {
      setStudent(null);
    };

//   You cannot access document.body directly in a functional component
    useEffect(() => {
      if (student) {
        document.body.classList.add("active-modl");
      } else {
        document.body.classList.remove("active-modl");
      }
      // Cleanup function to remove the class when component unmounts or when staff is null
      return () => {
        document.body.classList.remove("active-modl");
      };
    }, [student]);

  return (
    <div className="container mx-auto ">
      {student && <StudentCard data={student} closeModal={closeModal} />}

      <h2 className="text-2xl font-bold mb-4">Student List</h2>
      <div className="flex justify-end items-center m-5">
        {" "}
        <Link to={"/staff/addStudent"}>
          <button className="bg-blue-400 text-white px-2 py-2 rounded-lg hover:bg-blue-600">
            {" "}
            Add Student
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student, index) => (
          <div key={index} className="bg-white  rounded shadow p-4">
            <h3 className="text-lg font-semibold uppercase">{student.name}</h3>
            <p className="text-gray-600">{student.position}</p>
            <p className="text-gray-600">{student.email}</p>
            <p className="text-gray-600">{student.course}</p>

            <div className="flex justify-end items-end">
              <button
                onClick={() => {
                  showModal(student);
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

export default StudentsList;
