import { useState } from "react";
import axiosInstance from "../../api/axios"

const AddEvents = () => {
  const [event, setEvent] = useState({
    date: "",
    eventName: "",
    eventDescription: "",
  });
  const [programs, setPrograms] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleAddProgram = () => {
    if (event.programs.trim() !== "") {
      setPrograms([...programs, event.programs]);
      setEvent({ ...event, programs: "" });
    }
  };

  const handleAddEvent = async() => {
    const eventData = { ...event, programs: programs };
    console.log("Event Data:", eventData);
    setEvent({ date: "", eventName: "", eventDescription: "", programs: "" });
    setPrograms([]);
    const response = await axiosInstance.post("/staff/addEvents",eventData)
    console.log(response.data , " : data ffron ");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full transition duration-500 ease-in-out transform hover:scale-105">
        <h2 className="text-xl font-semibold mb-4 text-center">Add Event</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:scale-105"
            id="date"
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="eventName"
          >
            Event Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:scale-105"
            id="eventName"
            type="text"
            name="eventName"
            placeholder="Enter event name"
            value={event.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="eventDescription"
          >
            Event Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:scale-105"
            id="eventDescription"
            type="text"
            name="eventDescription"
            placeholder="Enter event description"
            value={event.eventDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="program"
          >
            Programs
          </label>
          <div className="flex">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:scale-105"
              id="programs"
              type="text"
              name="programs"
              placeholder="Enter program"
              value={event.programs}
              onChange={handleChange}
              required
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:scale-105"
              type="button"
              onClick={handleAddProgram}
            >
              Add Program
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:scale-105"
            type="button"
            onClick={handleAddEvent}
          >
            Add Event
          </button>
        </div>
      </form>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2 text-center">
          Programs Added
        </h3>
        <ul className="list-disc ml-6">
          {programs.map((program, index) => (
            <li key={index}>{program}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddEvents;
