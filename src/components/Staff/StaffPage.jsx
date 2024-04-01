/* eslint-disable no-constant-condition */
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import MyApp from "../Common/Calender";

function StaffPage() {
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.post("/student/getEvents");
        const { events, announcements } = response.data;
        setEvents(events);
        setAnnouncements(announcements);

        announcements.map((item) => {
          const expiryDate = new Date(item.expiryTime);
          const today = new Date();
          if (expiryDate < today) {
            handleDeleteEvent(item._id); // You can handle deletion here if needed
            return null; // Skip rendering if the announcement has expired
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteEvent = async (Id) => {
    try {
      console.log(Id);
      const response = await axiosInstance.delete(`/staff/deleteEvent/${Id}`);
      setEvents(response.data.events);
      setAnnouncements(response.data.announcements)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Staff Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {/* Attendance Section */}
        <div className="bg-blue-100 shadow-md rounded-md p-6 h-full ">
          <h2 className="text-lg font-semibold text-blue-700 mb-4">
            Current Students Attendance
          </h2>
          <ul>
            <MyApp />
          </ul>
        </div>

        {/* Upcoming Events Section */}
        <div className="bg-green-100 shadow-md rounded-md p-6">
          <h2 className="text-lg font-semibold text-green-700 mb-4">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {events.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-blue-700 rounded-lg p-4 shadow-md"
              >
                <span className="block text-gray-600 mb-2">
                  {item.date.slice(0, 10)}
                </span>
                <h2 className="text-xl font-semibold text-green-700 mb-2">
                  {item.eventName}
                </h2>
                <p className="text-green-700 mb-4">{item.eventDescription}</p>
                <h3 className="text-gray-600 text-lg font-semibold mb-2">
                  Programs:
                </h3>
                <ul className="list-disc ml-6 text-green-700">
                  {item.programs.map((program, index) => (
                    <li key={index}>{program}</li>
                  ))}
                </ul>
                <div className="flex justify-end mt-4">
                  {/* Delete button */}
                  <button
                    className="text-red-600 hover:text-red-800 font-semibold"
                    onClick={() => {
                      handleDeleteEvent(item._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements Section */}
        <div className="bg-yellow-100 shadow-md rounded-md p-6">
          <h2 className="text-lg font-semibold text-yellow-700 mb-4">
            Announcements
          </h2>
          <ul>
            {announcements.map((item, index) => {
              return (
                <li key={index} className="mb-4">
                  <h3 className="text-base font-semibold text-yellow-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StaffPage;
