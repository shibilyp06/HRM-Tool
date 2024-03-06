/* eslint-disable react/prop-types */
import React from "react";
import back from '../../assets/images/backButton.png'
function ChatHeader({ data }) {
  console.log(data.name, "profile");
  return (
    <>
      <div className="flex bg-blue-300 rounded gap-7 m-2 transition duration-700 ease-in-out flex-row py-2 px-2 justify-center items-center border-b-2">
        <button onClick={()=>{
            window.history.back()
        }}>

        <div>
          <img src={back} className="w-20 h-14 hover:scale-110 transition duration-700 ease-in-out" alt="" />

        </div>
        </button>
        <div className="">
          <img
            src={data.imgURL}
            className="object-cover bg-black h-16 w-20 rounded-full"
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
