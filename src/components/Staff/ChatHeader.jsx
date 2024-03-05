/* eslint-disable react/prop-types */
import React from "react";

function ChatHeader({ data }) {
  console.log(data.name, "profile");
  return (
    <>
      <div className="flex bg-blue-300 rounded m-2 transition duration-700 ease-in-out flex-row py-4 px-2 justify-center items-center border-b-2">
        <div className="w-1/4">
          <img
            src={data.imgURL}
            className="object-cover bg-black h-12 w-12 rounded-full"
            alt=""
          />
        </div>
        <div className="w-full">
          <div className="text-lg font-semibold">{data.name}</div>
          <span className="text-gray-500">online</span>
        </div>
      </div>

      {/* ------------------>>           Chat messages          <<------------------ */}

      <div className="flex justify-end mb-4">
        <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
          Welcome to group everyone !
        </div>
        <img
          src={data.imgURL}
          className="object-cover h-8 w-8 rounded-full"
          alt=""
        />
      </div>
      <div className="flex justify-start mb-4">
        <img
          src={data.imgURL}
          className="object-cover h-8 w-8 rounded-full"
          alt=""
        />
        <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. saepe,
          consequatur quas?
        </div>
      </div>
    </>
  );
}

export default ChatHeader;
