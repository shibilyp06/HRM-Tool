/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../api/axios";
const ProfileCard = ({ data, closeModal }) => {
  const navigate = useNavigate();
  const deleteStaff = async (Id) => {
    try {
      const response = await axiosInstance.post(`/admin/deleteStaff/${Id}`);
      closeModal();
    } catch (err) {
      console.error(err);
    }
  };
  const editStaff = async (_id) => {
    try {
      // const response = await axiosInstance.put(`/admin/editStaff/${Id}`);
      // const editingStaff = response.data.editingStaff;
      // console.log(editingStaff, "ish");
      navigate(`/admin/staffEdit/${_id}`);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className=" absolute justify-center items-center w-[90%]  h-screen bg-gray-400 bg-opacity-20 ">
        <div className="fixed w-screen h-screen right-10  top-60 ">
          <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 max-w-sm mx-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 mt-2 mr-2 text-white hover:text-red-500"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button
              className="absolute top-0 left-0 mt-2 ml-2 text-white hover:text-red-500"
              onClick={() => {
                deleteStaff(data._id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
            <img
              className="rounded-full border border-teal-500 p-1 mx-auto"
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="user"
            />
            <h3 className="text-xl font-semibold mt-2 uppercase">
              {data.name}{" "}
            </h3>
            <h6 className="text-sm uppercase mt-1">{data.position} </h6>

            <div className="mt-4">
              <button className="bg-teal-500 hover:bg-teal-600 text-gray-900 font-semibold py-2 px-4 rounded mr-2">
                Message
              </button>
              <button
                onClick={() => {
                  editStaff(data._id);
                }}
                className="bg-transparent text-teal-500 font-semibold py-2 px-4 rounded border border-teal-500"
              >
                Edit Profile
              </button>
            </div>
            <div className="mt-6">
              <h6 className="text-sm font-semibold uppercase">Roles</h6>
              <ul className="mt-2">
                <li className="inline-block bg-gray-800 border border-gray-700 rounded px-3 py-1 text-xs font-semibold mr-2 mb-2">
                  UI / UX
                </li>
                <li className="inline-block bg-gray-800 border border-gray-700 rounded px-3 py-1 text-xs font-semibold mr-2 mb-2">
                  Front End Development
                </li>
                <li className="inline-block bg-gray-800 border border-gray-700 rounded px-3 py-1 text-xs font-semibold mr-2 mb-2">
                  HTML
                </li>
                <li className="inline-block bg-gray-800 border border-gray-700 rounded px-3 py-1 text-xs font-semibold mr-2 mb-2">
                  CSS
                </li>
                <li className="inline-block bg-gray-800 border border-gray-700 rounded px-3 py-1 text-xs font-semibold mr-2 mb-2">
                  JavaScript
                </li>
                <li className="inline-block bg-gray-800 border border-gray-700 rounded px-3 py-1 text-xs font-semibold mr-2 mb-2">
                  React
                </li>
                <li className="inline-block bg-gray-800 border border-gray-700 rounded px-3 py-1 text-xs font-semibold mr-2 mb-2">
                  Node
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
