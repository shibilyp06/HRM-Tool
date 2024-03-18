import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import  AxiosInstance  from "../../api/axios";

function AddCourse() {
  const initialValues = {
    courseName: "",
    duration: "",
    description: "",
    topics: [{ topic: "", weeks: "" }],
  };

  const [courseData, setCourseData] = useState(initialValues);

  // Using Yup in validation
  const validationSchema = Yup.object().shape({
    courseName: Yup.string().required("Course name is required"),
    duration: Yup.string().required("Duration is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = async (values) => {
    setCourseData(values);
    console.log(courseData , " : course Data");
    try{
      const response = await AxiosInstance.post("/staff/addCourse",courseData)
    

    }catch(err){
      console.error(err)
    }
  };

  const handleAddTopic = (formikProps) => {
    let { topic, week } = formikProps.values;
    console.log("Topic:", topic);
    console.log("Weeks:", week);


    setCourseData((prevState) => ({
      ...prevState,
      topics: [
        ...prevState.topics,
        {
          topic: topic,
          weeks: week,
        },
      ],
      topic: "",
      weeks: "",
    }));
    formikProps.resetForm(topic ,week);
  };
  const deleteTopic = (topic) => {
    setCourseData((prevState) => {
      const updatedTopics = prevState.topics.filter((item) => item !== topic);
      return { ...prevState, topics: updatedTopics };
    });

  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form className="flex justify-center items-center bg-white">
            {/* Form Content */}
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
                      <div className="grid grid-cols-2 gap-5">
                        <div>
                          <Field
                            className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            name="topic"
                            placeholder="Topic"
                          />
                        </div>
                        <div>
                          <Field
                            className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="number"
                            name={`week`}
                            placeholder="Weeks Covered"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="w-full bg-blue-200 text-black p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        onClick={()=>{
                          handleAddTopic(formikProps)
                        }}
                      >
                        Add Topic
                      </button>
                      <ul className="list-disc pl-5">
                        {courseData.topics.map((topic, index) => (
                          <li
                            className="flex justify-center items-center gap-2 "
                            style={{ listStyle: "none" }}
                            key={index}
                          >
                            <svg
                              onClick={() => {
                                deleteTopic(topic);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-16 h-16"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>

                            <div className="grid grid-cols-2 gap-5">
                              <div>
                                <Field
                                  className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                  type="text"
                                  name="topic"
                                  value={topic.topic}
                                  placeholder="Topic"
                                />
                              </div>
                              <div>
                                <Field
                                  className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                  type="number"
                                  name={`weeks`}
                                  value={topic.weeks}
                                  placeholder="Weeks Covered"
                                />
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="my-2">
                      <button
                        type="submit"
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
        )}
      </Formik>
    </>
  );
}

export default AddCourse;
