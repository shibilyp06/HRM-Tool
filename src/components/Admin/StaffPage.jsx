import React from 'react';

const AddStaffPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Add Staff</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
              placeholder="Enter name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              name="position"
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
              className="px-4 py-2 rounded-md bg-gray-700 text-white"
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
            />
          </div>
          <div className="flex justify-between items-center">
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-300">
              Add Staff
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
};

export default AddStaffPage;
