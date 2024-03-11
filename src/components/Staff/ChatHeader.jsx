/* eslint-disable react/prop-types */
function ChatHeader({ data }) {
  return (
    <>
      <div className="flex bg-blue-300 rounded gap-7 m-2 transition duration-700 ease-in-out flex-row py-2 px-2 justify-center items-center border-b-2">
      
        <div className="">
          <img
            src={data.imgURL}
            className="object-cover bg-black h-16 w-20 rounded-full"
            alt=""
          />
        </div>
        <div className="w-full">
          <div className="text-lg font-semibold">{data.name}</div>
          <span className="text-gray-500">{data.role}</span>
        </div>
      </div>




    
    </>
  );
}

export default ChatHeader;
