import { useEffect, useState } from "react";

function EditStaff() {
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchStaff = async () => {
      //    const
    };
    fetchStaff();
  }, []);

  const getData = () => {};
  const handleSubmit = () => {};
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
              required
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              placeholder="Enter name"
              onChange={getData}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              placeholder="Enter Email"
              onChange={getData}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              name="position"
              required
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              placeholder="Enter position"
              onChange={getData}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              required
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              onChange={getData}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              placeholder="Enter phone number"
              required
              onChange={getData}
            />
          </div>
          <p className="text-red-600 ">{error} </p>
          <div className="flex justify-between items-center">
            <button
              onClick={handleSubmit}
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
