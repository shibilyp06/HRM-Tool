import React, { useState } from "react";

function AddCourse() {
  const [courseData, setCourseData] = useState({
    courseName: "",
    duration: "",
    description: "",
    topics: [],
    newTopic: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleAddTopic = () => {
    if (courseData.newTopic.trim() !== "") {
      setCourseData({
        ...courseData,
        topics: [...courseData.topics, courseData.newTopic],
        newTopic: ""
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center  bg-white">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-blue-300 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="lg:w-1/2 lg:pr-8">
                <h1 className="font-bold leading-snug text-5xl">
                  Add Course <br /> Here
                </h1>
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-1 gap-5 mt-5">
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    name="courseName"
                    value={courseData.courseName}
                    onChange={handleChange}
                    placeholder="Course Name*"
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    name="duration"
                    value={courseData.duration}
                    onChange={handleChange}
                    placeholder="Duration*"
                  />
                  <textarea
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    name="description"
                    value={courseData.description}
                    onChange={handleChange}
                    placeholder="Description*"
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    name="newTopic"
                    value={courseData.newTopic}
                    onChange={(e) => setCourseData({ ...courseData, newTopic: e.target.value })}
                    placeholder="Add Topic"
                  />
                  <button
                    className="w-full bg-blue-200 text-black p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    onClick={handleAddTopic}
                  >
                    Add Topic
                  </button>
                  <ul className="list-disc pl-5">
                    {courseData.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <div className="my-2">
                  <button
                    className="uppercase text-sm font-bold tracking-wide bg-blue-200 text-black p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                  >
                    Add Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCourse;
