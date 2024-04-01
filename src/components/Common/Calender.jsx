import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyApp() {
  const [date, setDate] = useState(new Date());

  const customTileClassName = ({ date, view }) => {
    // Example: Highlight weekends with a different background color
    if (view === "month" && (date.getDay() === 0 || date.getDay() === 6)) {
      return "bg-blue-100";
    }
    return "";
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        My Calendar
      </h1>
      <div className="mx-auto max-w-md">
        <Calendar
          onChange={setDate}
          value={date}
          tileClassName={customTileClassName}
          className="shadow-md border border-gray-200 rounded-md p-4"
        />
      </div>
    </div>
  );
}

export default MyApp;
