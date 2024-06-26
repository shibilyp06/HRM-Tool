import { useState } from "react";
import axiosInstance from "../../api/axios";
const AnnouncementForm = () => {
  const [announcement, setAnnouncement] = useState({
    title: "",
    content: "",
    expiryTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnnouncement({ ...announcement, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(
        "/staff/addAnnouncement",
        announcement
      );
    } catch (err) {
      console.error(err);
    }
    setAnnouncement({ title: "", content: "", expiryTime: "" });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Add Announcement
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={announcement.title}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            value={announcement.content}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter announcement content"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="expiryTime"
            className="block text-gray-700 font-bold mb-2"
          >
            Expiry Time:
          </label>
          <input
            type="datetime-local"
            id="expiryTime"
            name="expiryTime"
            value={announcement.expiryTime}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Announcement
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnnouncementForm;
