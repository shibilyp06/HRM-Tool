/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import axiosInstance from "../../api/axios";

function ChatPage() {
  const [message, setMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [profile, setProfile] = useState({});
  const { Id } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {3
    try {
      const socketIo = io("http://localhost:3000", {
        transports: ["websocket"],
      });
      const fetchUser = async () => {
        // fetching Staff from dataBase
        const response = await axiosInstance.put(`/admin/editStaff/${Id}`);
        const staff = response.data.editingStaff;
        const adminEmail = response.data.adminEmail;
        staff.adminEmail = adminEmail
        console.log(adminEmail, " : Admin Email");
        console.log(staff, "staff");
        setProfile(staff);
        setSocket(socketIo);
      };
      fetchUser();
      socket.emit("adminConnection", { adminEmail: profile.adminEmail });
      // socketIo.on("receivedMessage", ({ message, senderId }) => {
      //   console.log(message , " : Message from backend");
      //   console.log(senderId , " : sende id  from backend ");
      // });
    } catch (err) {
      console.error(err);
    }
  }, [message]);

  useEffect(() => {
    if (!socket) return;
    // const handleConnect = () => {
    //   console.log("Socket server connected");
    // };
    // const handleDisconnect = () => {
    //   console.log("Disconnected from server");
    // };
    // const handleMessage = (data) => {
    //   console.log("Received data from server:", data);
    //   setMessages((prevMessages) => [...prevMessages, data]);
    // };
    // socket.on("message", (message) => {
    //   console.log(message, "messalll");
    // });
    // socket.on("connect", handleConnect);
    // socket.on("disconnect", handleDisconnect);
    // socket.on("message", handleMessage);
    socket.on("sendMessage", (message) => {
      setMessage(message);
    });
  }, [message]);

  const getMesasge = (e) => {
    const inputMessage = e.target.value;
    setMessage(inputMessage);
    // console.log(inputMessage);
  };

  const sendMessage = () => {
    try {
      if (!socket) return;
      console.log(message, "message here");
      socket.emit("message", { message });
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: message, sentByCurrentUser: true }, // Add sentByCurrentUser flag to the message
      ]);
      setMessage(""); // Clear the input field after sending the message
    } catch (err) {
      console.error({ error: err });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
        <div className="flex flex-col flex-grow w-full max-w-xl bg-fixed bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex w-screen bg-blue-400 h-16 gap-3">
            <button
              className="flex justify-center items-center duration-700  hover:rounded-3xl rounded-sm w-20 hover:bg-slate-500 hover:text-white  bg-slate-200"
              onClick={() => {
                window.history.back();
              }}
            >
              <div className="">
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
              </div>
            </button>
            <img src={profile.imgURL} className="w-16 h-16 rounded-full" />
            <div className=" flex flex-col justify-center items-center">
              <p className="text-xl text-gray-100 font-normal">
                {profile.name}
              </p>
              <p className="text-sm text-gray-100 font-semibold">
                {profile.position}
              </p>
            </div>
          </div>

          <div className="messages-container flex flex-col flex-grow h-0 p-4 overflow-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message${
                  message.sentByCurrentUser ? "sent" : "received"
                }`}
              >
                <div className="flex w-full mt-2 space-x-3 max-w-xs">
                  <img
                    src={profile.imgURL}
                    className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"
                  />
                  <div>
                    <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                      <p className="text-lg">{messages.content}</p>
                    </div>
                    <span className="text-xs text-gray-500 leading-none">
                      now
                    </span>
                  </div>
                </div>
                <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                  <div>
                    <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                      <p className="text-lg h-2 flex justify-center items-center">
                        {message.content}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 leading-none">
                      now
                    </span>
                  </div>
                  <img
                    src={profile.imgURL}
                    className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"
                  />
                </div>{" "}
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <div className="relative bg-gray-300 p-4">
              <input
                onChange={getMesasge}
                className="flex items-center h-10 w-full rounded px-3 text-sm"
                type="text"
                placeholder="Type your message…"
              />
              <button
                onClick={sendMessage}
                className="absolute top-0 right-0 mt-5 mr-5 bg-blue-200 hover:bg-blue-300 text-blue-800 hover:text-blue-900 rounded-md px-4 py-1"
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

export default ChatPage;
