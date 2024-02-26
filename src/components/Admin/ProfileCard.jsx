/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */


const ProfileCard = ({ data, closeModal }) => {
  console.log(data, "hre staff");
  return (
    <>
      <div className="fixed w-screen h-screen bg-transparent  ">
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
          <img
            className="rounded-full border border-teal-500 p-1 mx-auto"
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="user"
          />
          <h3 className="text-xl font-semibold mt-2 uppercase">{data.name} </h3>
          <h6 className="text-sm uppercase mt-1">{data.position} </h6>

          <div className="mt-4">
            <button className="bg-teal-500 hover:bg-teal-600 text-gray-900 font-semibold py-2 px-4 rounded mr-2">
              Message
            </button>
            <button className="bg-transparent text-teal-500 font-semibold py-2 px-4 rounded border border-teal-500">
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
    </>
  );
};

export default ProfileCard;
