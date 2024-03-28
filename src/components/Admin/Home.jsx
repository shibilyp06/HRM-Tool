import React from "react";

function Home() {
  // Dummy data for demonstration purposes
  const attendanceData = [
    { title: "Presents", attendance: 85 },
    { title: "Absents", attendance: 9 },
    { title: "Total", attendance: 94 },
    // Add more data as needed
  ];

  const upcomingEvents = [
    { date: "2024-04-05", event: "Annual Sports Day" },
    { date: "2024-04-15", event: "Science Exhibition" },
    // Add more events as needed
  ];

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
    // Add more announcements as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Attendance Section */}
        <div className="bg-blue-100 shadow-md rounded-md p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-lg font-semibold text-blue-700 mb-4">Current Attendance</h2>
          <ul>
            {attendanceData.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span className="text-gray-600">{item.title}</span>
                <span className="text-blue-700">{item.attendance}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming Events Section */}
        <div className="bg-green-100 shadow-md rounded-md p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-lg font-semibold text-green-700 mb-4">Upcoming Events</h2>
          <ul>
            {upcomingEvents.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="text-gray-600">{item.date}</span>: <span className="text-green-700">{item.event}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Announcements Section */}
        <div className="bg-yellow-100 shadow-md rounded-md p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-lg font-semibold text-yellow-700 mb-4">Announcements</h2>
          <ul>
            {announcements.map((item, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-base font-semibold text-yellow-800 mb-2">{item.title}</h3>
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
