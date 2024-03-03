/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import axiosInstance from "../../api/axios";
function AdminChatPage() {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [profile, setProfile] = useState({});
  const { Id } = useParams();
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axiosInstance.put(`/admin/editStaff/${Id}`);
      const staff = response.data.editingStaff;
      console.log(staff, "staff");
      setProfile(staff);
    };
    fetchUser();
    const socket = io("http://localhost:3000", { transports: ["websocket"] });
    socket.on("sendMessage", (message) => {
      console.log(message, "ehti mone");
    });
    setSocket(socket);
  }, []);
  useEffect(() => {
    if (!socket) return;
    const handleConnect = () => {
      console.log("Socket server connected");
    };
    const handleDisconnect = () => {
      console.log("Disconnected from server");
    };
    const handleMessage = (data) => {
      console.log("Received data from server:", data);
    };
    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("message", handleMessage);
  }, [message]);
  const getMesasge = (e) => {
    const inputMessage = e.target.value;
    setMessage(inputMessage);
    console.log(inputMessage);
  };
  const sendMessage = () => {
    if (!socket) return;
    socket.emit("message", message);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
        <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
            <div className="flex w-full mt-2 space-x-3 max-w-xs"></div>

            <div className="flex w-full mt-2 space-x-3 max-w-xs">
              <img src={profile.imgURL} className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"/>
              <div>
                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p className="text-lg">{`Hellow ${profile.name}`}</p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            {message && (
              <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div>
                  <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p className="text-lg"></p>
                  </div>
                  <span className="text-xs text-gray-500 leading-none">
                    2 min ago
                  </span>
                </div>
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              </div>
            )}
          </div>

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
    </>
  );
}

export default AdminChatPage;
