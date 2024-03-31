import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyApp() {
  const [date, setDate] = useState(new Date());
  const [attendanceData, setAttendanceData] = useState({}); // Object to store attendance data

  // Function to update attendance data for a specific date
  const handleAttendanceChange = (newDate) => {
    setAttendanceData((prevData) => ({
      ...prevData,
      [newDate.toLocaleDateString("en-US")]: !prevData[newDate.toLocaleDateString("en-US")], // Toggle attendance
    }));
  };

  const customTileClassName = ({ date, view }) => {
    // Highlight weekends with a different background color
    const className = view === "month" && (date.getDay() === 0 || date.getDay() === 6)
      ? "bg-blue-100"
      : "";

    // Add tick mark class for attended dates
    if (attendanceData[date.toLocaleDateString("en-US")]) {
      return `${className} attended`; // Combine classes if needed
    }

    return className;
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        My Attendance
      </h1>
      <div className="mx-auto max-w-md">
        <Calendar
          onChange={setDate}
          value={date}
          tileClassName={customTileClassName}
          className="shadow-md border border-gray-200 rounded-md p-4"
          onClick={handleAttendanceChange} // Handle attendance clicks on dates
        />
      </div>
    </div>
  );
}

export default MyApp;
