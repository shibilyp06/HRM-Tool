import { useRef, useState } from "react";
import Webcam from "react-webcam";
// import axiosInstance from "../../api/axios";

function AttentdancePage() {
  const webcamRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [file, setFile] = useState(null);
  const [location, setLocation] = useState(null);
  const [distance, setDistance] = useState(null);

  // Capturing student's photo
  const capturePhoto = () => {
    getCurrentLocation();
    if (webcamRef.current) {
      const imgSrc = webcamRef.current.getScreenshot();
      const base64ImageData = imgSrc.split(",")[1]; // Remove the data URL prefix
      const byteArray = atob(base64ImageData); // Decode base64 image data
      const blob = new Blob([byteArray], { type: "image/jpeg" }); // Create a Blob object
      const file = new File([blob], "photo.jpg", { type: "image/jpeg" });
      setFile(file);
      setCapturedPhoto(imgSrc);
    } else {
      console.error("Webcam reference is not initialized.");
    }
  };

  // Function for current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          console.log("kooi");
        },
        (error) => {
          console.error("error in fetching current posistion", error);
        }
      );
    } else {
      console.error(" geolocation is not work in this browser");
    }
  };

  // Retake photo funtion
  const retakePhoto = () => {
    setCapturedPhoto(null);
  };

  // Fuction for uploading photo
  const uploadPhoto = (file) => {
    console.log("kkoii");
    calculateDistance(
      defaultOfficeLocation.latitude,
      defaultOfficeLocation.longitude,
      location.latitude,
      location.longitude
    );
    console.log(" llo");
    // const formData = new FormData();
    // formData.append("photo", file);
    // console.log(formData.get("photo"));
    // const response = await axiosInstance.post("/student/attendance")
  };

  const defaultOfficeLocation = {
    latitude: 11.247947030374792, //  latitude of office location
    longitude: 75.83430255755917, //  longitude of office location
  };

  function calculateDistance(latOffice, lonOffice, latCurrent, lonCurrent) {
    const earthRadiusKm = 6371; // Radius of the Earth in kilometers
    const dLat = degreesToRadians(latCurrent - latOffice);
    const dLon = degreesToRadians(lonCurrent - lonOffice);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degreesToRadians(latOffice)) *
        Math.cos(degreesToRadians(latCurrent)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadiusKm * c; // Distance in kilometers
    console.log(distance, " : distance");
    return distance;
  }
  function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {capturedPhoto ? (
        <div className="relative">
          {location && (
            <div>
              <div>Latitude: {location.latitude}</div>
              <div>Longitude: {location.longitude}</div>
            </div>
          )}

          <img
            src={capturedPhoto}
            alt="Captured Photo"
            className="rounded-lg shadow-lg mb-4"
          />
          <button
            onClick={retakePhoto}
            className="absolute bottom-4 left-2/3 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Retake Photo
          </button>
          <button
            onClick={() => {
              uploadPhoto(file);
            }}
            className="absolute bottom-4 left-1/3 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Upload Photo
          </button>
          {/* {console.log(location.latitude, " layyyttude")} */}

          {/* <button
            onClick={getCurrentLocation}
            className="absolute bottom-4 left-3/3 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            location
          </button> */}
        </div>
      ) : (
        <div className="relative">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="rounded-lg shadow-lg"
          />
          <button
            onClick={capturePhoto}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Take Photo
          </button>
        </div>
      )}
    </div>
  );
}

export default AttentdancePage;
