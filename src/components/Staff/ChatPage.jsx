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
  const [staffEmail, setStaffEmail] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    const socketIo = io("http://localhost:3000", {
      transports: ["websocket"],
    });

    async function fetchUser() {
      // fetching staff from database
      const response = await axiosInstance.get("/staff/getStudents");
      const students = response.data.students;
      const staffEmail = response.data.staffEmail.payload;

      // fetching Admin from database
      setStaffEmail(staffEmail);
      const admin = (await axiosInstance.get("/staff/getAdmin")).data.admin;
      const allChatList = admin.concat(students);
      setList(allChatList);
 
      // Fetching current staff from database
      

      socketIo.emit("staffConnection", { staffEmail });
      setSocket(socketIo);
    }

    fetchUser();

    // return () => {
    //   socketIo.disconnect(); // Disconnect the socket when the component unmounts
    // };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("message", ({ message, sender }) => {
      setReceivedMessages((previousMessages) => [
        ...previousMessages,
        { content: message.trim(), sender },
      ]);
    });
  }, [socket]);

  const selectProfile = (selectedProfile) => {
    setProfile(selectedProfile);
  };

  const sendMessage = () => {
    if (!socket || !profile.email || !message.trim()) return;

    socket.emit("message", {
      sender: staffEmail,
      receiver: profile.email,
      message: message.trim(),
    });

    // Add the sent message to the list of received messages for display
    setReceivedMessages((previousMessages) => [
      ...previousMessages,
      { content: message.trim(), sender: staffEmail },
    ]);

    // Clear the message input after sending
    setMessage("");
  };

  return (
    <>
      <div className="container mx-auto shadow-lg rounded-lg">
        <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
          <button onClick={() => window.history.back()}>
            <img
              src={back}
              className="w-16 h-14 hover:scale-110 transition duration-700 ease-in-out"
              alt=""
            />
          </button>
          <div className="font-semibold text-2xl">Chat</div>
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Search IRL"
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
                placeholder="Search chatting"
                className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
              />
            </div>
            {list.map((staff, index) => (
              <div
                key={index}
                onClick={() => selectProfile(staff)}
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
            ))}
          </div>

          <div className="w-full h-[75%] px-5 flex flex-col justify-between relative">
            <div className="flex flex-col m-1">
              <ChatHeader data={profile} />
            </div>

            {/* Chat messages */}
            {receivedMessages.map((message, index) => (
              <div
                key={index}
                className={`flex mb-4 ${
                  message.sender === staffEmail
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`${
                    message.sender === staffEmail
                      ? "bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                      : "bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                  } py-3 px-4 mr-2`}
                >
                  {message.content}
                </div>
                <img
                  src={profile.imgURL}
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
              </div>
            ))}

            <div className="relative w-[98%]">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-gray-300 py-5 px-3 rounded-xl w-full pr-12"
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
