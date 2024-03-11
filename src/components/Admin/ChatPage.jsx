import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import axiosInstance from "../../api/axios";

function ChatPage() {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [profile, setProfile] = useState({});
  const [messages, setMessages] = useState([]);
  const { Id } = useParams();

  useEffect(() => {
    const socketIo = io("http://localhost:3000", {
      transports: ["websocket"],
    });
    setSocket(socketIo);
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.put(`/admin/editStaff/${Id}`);
        const staff = response.data.editingStaff;
        const adminEmail = response.data.adminEmail;
        staff.adminEmail = adminEmail;
        setProfile(staff);
        socketIo.emit("adminConnection", { adminEmail });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [Id]);

  // useEffect(() => {
  //   // return () => {
  //   //   socketIo.disconnect(); // Disconnect the socket when the component unmounts
  //   // };
  // }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("message", ({ message, sender }) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: message, sender },
      ]);
    });
  }, [socket]);

  const handleMessageSend = () => {
    if (!socket || !message.trim()) return;

    socket.emit("message", {
      sender: profile.adminEmail,
      receiver: profile.email,
      message: message.trim(),
    });

    setMessages((prevMessages) => [
      ...prevMessages,
      { content: message.trim(), sender: profile.adminEmail },
    ]);

    setMessage(""); // Clear the input field after sending the message
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
      <div className="flex flex-col flex-grow w-full max-w-xl bg-fixed bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex w-screen bg-blue-400 h-16 gap-3 items-center">
          <button
            className="flex justify-center items-center duration-700 hover:rounded-3xl rounded-sm w-20 hover:bg-slate-500 hover:text-white bg-slate-200"
            onClick={() => window.history.back()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <img src={profile.imgURL} className="w-16 h-16 rounded-full" alt="" />
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl text-gray-100 font-normal">{profile.name}</p>
            <p className="text-sm text-gray-100 font-semibold">
              {profile.position}
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="messages-container flex flex-col flex-grow h-0 p-4 overflow-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.sender === profile.adminEmail ? "sent" : "received"
              }`}
            >
              <div className="flex w-full mt-2 space-x-3 max-w-xs">
                
                {message.sender !== profile.adminEmail && (
                  <img
                    src={profile.imgURL}
                    className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"
                    alt=""
                  />
                )}
                <div
                  className={`bg-${
                    message.sender === profile.adminEmail ? "blue" : "gray"
                  }-600 text-white p-3 rounded-l-lg rounded-br-lg`}
                >
                  <p className="text-lg">{message.content}</p>
                </div>
                <span className="text-xs text-gray-500 leading-none">now</span>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="mt-auto">
          <div className="relative bg-gray-300 p-4">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex items-center h-10 w-full rounded px-3 text-sm"
              type="text"
              placeholder="Type your message…"
            />
            <button
              onClick={handleMessageSend}
              className="absolute top-0 right-0 mt-5 mr-5 bg-blue-200 hover:bg-blue-300 text-blue-800 hover:text-blue-900 rounded-md px-4 py-1"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
