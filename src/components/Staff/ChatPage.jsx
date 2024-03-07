/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import ChatHeader from "./ChatHeader";
import back from "../../assets/images/backButton.png";
import io from "socket.io-client";
function AllChatPage() {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [list, setList] = useState([]);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    async function fetchUser() {
      const response = await axiosInstance.get("/staff/getStudents");
      const students = response.data.students;
      const admin = await (
        await axiosInstance.get("/staff/getAdmin")
      ).data.admin;
      console.log(response, " response from caht");

      //   console.log("students", students, "staff", staffs);
      const allChatList = admin.concat(students);
      setList(allChatList);
    }
    fetchUser();
  }, []);
  useEffect(() => {
    const socketIo = io("http://localhost:3000", { transports: ["websocket"] });
    setSocket(socketIo);
  }, []);
  const sendData = (Id) => {
    setProfile(Id);
  };
  const sendMessage = () => {};
  const getData = (e) => {
    const message = e.target.value;
    setMessage(message);
  };
  return (
    <>
      <div className="container mx-auto shadow-lg rounded-lg">
        <div className="px-5 py-5 flex justify-between  items-center bg-white border-b-2">
          <button
            onClick={() => {
              window.history.back();
            }}
          >
            <div>
              <img
                src={back}
                className="w-16 h-14 hover:scale-110 transition duration-700 ease-in-out"
                alt=""
              />
            </div>
          </button>
          <div className="font-semibold text-2xl">Chat</div>
          <div className="w-1/2">
            <input
              type="text"
              name=""
              id=""
              placeholder="search IRL"
              className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
            />
          </div>
          <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
            RA
          </div>
        </div>
        <div className="flex flex-row justify-between h-[100vh] bg-white">
          <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
            <div className="border-b-2 py-4 px-2">
              <input
                type="text"
                placeholder="search chatting"
                className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
              />
            </div>
            {list.map((staff, index) => {
              return (
                <div
                  onClick={() => {
                    sendData(staff);
                  }}
                  key={index}
                  className="flex hover:bg-blue-300 transition duration-700 ease-in-out flex-row py-4 px-2 justify-center items-center border-b-2"
                >
                  <div className="w-1/4">
                    <img
                      src={staff.imgURL}
                      className="object-cover h-12 w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div className="text-lg font-semibold">{staff.name}</div>
                    <span className="text-gray-500">{staff.role}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full h-[75%] px-5 flex flex-col justify-between relative">
            <div className="flex flex-col m-1  ">
              {<ChatHeader data={profile} />}
            </div>

            <div className="relative  w-[98%]">
              <input
                onChange={getData}
                className="bg-gray-300 py-5 px-3 rounded-xl w-full pr-12" // Add pr-12 for padding on the right side
                type="text"
                placeholder="Type your message here..."
              />
              <button
                onClick={sendMessage}
                className="absolute right-3 bottom-2 bg-blue-500 text-white py-3 px-6 rounded-lg transition duration-300 hover:bg-blue-600 hover:shadow-md"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllChatPage;
