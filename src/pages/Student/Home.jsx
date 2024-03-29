import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
function Home() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const upcomingEvents = async () => {
      try {
        const response = await axiosInstance.post("/student/getEvents");
        console.log(response.data.events, " : response from  ");

        const events = response.data.events;
        setEvents(events);
      } catch (err) {
        console.error(err);
      }
    };
    upcomingEvents();
  }, []);
  const announcements = [
    {
      title: "New Library Hours",
      description: "Updated library hours from next week. Please take note.",
    },
    {
      title: "Exam Schedule",
      description:
        "Final exam schedule for this semester has been released. Check your email for details.",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center text-blue-300 mb-6">
        Student Dashboard
      </h1>

      <div className="grid m-5  grid-cols-1 sm:grid-cols-2  gap-8">
        <div className="bg-green-100 shadow-md rounded-md p-6 transition duration-300 ease-in-out transform hover:scale-105 ">
          <h2 className="text-lg font-semibold text-green-700 mb-4">
            Upcoming Events
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
            {events.map((item, index) => (
              <li
                key={index}
                className="bg-white border border-blue-700 rounded-lg p-6 shadow-md"
              >
                <span className="block text-gray-600">
                  {item.date.slice(0, 10)}
                </span>
                <h2 className="mt-4">
                  <span className="text-green-700 text-2xl font-bold">
                    {item.eventName}
                  </span>
                </h2>
                <p className="mt-2 text-green-700">{item.eventDescription}</p>
                <div className="mt-4">
                  <h3 className="text-gray-600 text-lg font-semibold">
                    Programs:
                  </h3>
                  <ul className="list-disc ml-6 text-green-700">
                    {item.programs.map((program, index) => (
                      <li key={index}>{program}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-yellow-100 shadow-md rounded-md p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-lg font-semibold text-yellow-700 mb-4">
            Announcements
          </h2>
          <ul>
            {announcements.map((item, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-base font-semibold text-yellow-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
