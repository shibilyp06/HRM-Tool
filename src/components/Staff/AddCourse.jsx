/* eslint-disable no-undef */
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

function AddCourse() {
  
  const initialValues = {
    courseName: "",
    duration: "",
    description: "",
    topics: [],
    newTopic: "",
  };
  const [topics,setTopics] = useState(initialValues)

  // Using Yup in validatuin
  const validationSchema = Yup.object().shape({
    courseName: Yup.string().required("Course name is required"),
    duration: Yup.string().required("Duration is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleAddTopic = () => {
    if (courseData.newTopic.trim() !== "") {
      setTopics({
        ...topics,
        topics: [...topics.topics, topics.newTopic],
        newTopic: "",
      });
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex justify-center items-center  bg-white">
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
                    <Field
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      name="courseName"
                      placeholder="Course Name*"
                    />
                    <ErrorMessage name="courseName" />
                    <Field
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      name="duration"
                      placeholder="Duration*"
                    />
                    <ErrorMessage name="duration" />
                    <Field
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      name="description"
                      placeholder="Description*"
                    />
                    <ErrorMessage name="description" />
                    <Field
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      name="newTopic"
                      onChange={(e) =>
                        setTopics({
                          ...topics,
                          newTopic: e.target.value,
                        })
                      }
                      placeholder="Add Topic"
                    />
                    <button onClick={handleAddTopic}
                      className="w-full bg-blue-200 text-black p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    >
                      Add Topic
                    </button>
                    <ul className="list-disc pl-5">
                    {topics.topics.map((topic, index) => (
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
        </Form>
      </Formik>
    </>
  );
}

export default AddCourse;
