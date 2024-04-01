import { useState } from "react";
import { Link } from "react-router-dom";

function AdminHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header className="bg-gray-800 py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/admin/Home"
            className="text-white text-xl font-semibold hover:text-gray-300"
          >
            Attender
          </Link>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
          />
        </div>
        <div className="md:hidden  flex items-center">
          <button
            onClick={toggleMenu}
            className="ml-4 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "hidden" : ""}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipPath="evenodd"
              ></path>
            </svg>
          </button>
          {isMenuOpen && (
            <svg
              onClick={toggleMenu}
              className={`w-6 h-6 ml-4 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipPath="evenodd"
              ></path>
            </svg>
          )}
        </div>
        <nav className="hidden md:flex md:items-center">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/admin/Home"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/admin/staffInfo"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Staff
              </Link>
            </li>
            <li>
              <Link
                to="/admin/studentsInfo"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Student
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Payment
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-md mt-2 rounded-md">
          <ul className="py-2">
            <li>
              <Link
                to="/admin/Home"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/admin/staffInfo"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition duration-300"
                onClick={toggleMenu}
              >
                Staff
              </Link>
            </li>
            <li>
              <Link
                to="/admin/studentsInfo"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition duration-300"
                onClick={toggleMenu}
              >
                Student
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition duration-300"
                onClick={toggleMenu}
              >
                Payment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default AdminHeader;
