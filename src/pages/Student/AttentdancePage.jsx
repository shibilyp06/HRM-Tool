/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Webcam from "react-webcam";
import axiosInstance from "../../api/axios";
// importing  Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function AttentdancePage() {
  const webcamRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [file, setFile] = useState(null);
  const [location, setLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const navigate = useNavigate();
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

  // Function for finding current latitude and longitude

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log;
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting geolocation:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Retake photo funtion
  const retakePhoto = () => {
    setCapturedPhoto(null);
  };

  // Fuction for uploading photo
  const uploadPhoto = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const attendanceData = {
        file: file,
        location,
      };
      const response = await axiosInstance.post("/student/attendance", {
        attendanceData,
      });
      const attendance = response.data.nearbyOffices;
      console.log(attendance, "  : attentDance");
      if (attendance[0]?.locationName) {
        toast.success("Attendance added successfully");
        setTimeout(() => {
          navigate("/student/Home");
        }, 3000);
      } else {
        toast.error("Attendanc adding failed ");
      }
    } catch (err) {
      console.error(err);
    }
  };

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
