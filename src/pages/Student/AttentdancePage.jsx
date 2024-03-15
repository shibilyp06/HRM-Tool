/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useState } from "react";
import Webcam from "react-webcam";

function AttentdancePage() {
  const webcamRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const capturePhoto = () => {
    if (webcamRef.current) {
      const imgSrc = webcamRef.current.getScreenshot();
      const base64ImageData = imgSrc.split(",")[1]; // Remove the data URL prefix
      const byteArray = atob(base64ImageData); // Decode base64 image data
      const blob = new Blob([byteArray], { type: "image/jpeg" }); // Create a Blob object
      const file = new File([blob], "photo.jpg", { type: "image/jpeg" }); // Create a File object with a file name and type
      // Now you can use the 'file' object for further processing or upload
      console.log(file, "  : File");
    //   const studentImg = file.name;
      setCapturedPhoto(imgSrc);
    } else {
      console.error("Webcam reference is not initialized.");
    }
  };
  const retakePhoto = () => {
    setCapturedPhoto(false);
  };

  return (
    <>
      {capturedPhoto ? (
        <>
          <img src={capturedPhoto} alt="" />
          <button onClick={retakePhoto}> Retake photo</button>
        </>
      ) : (
        <>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          <button onClick={capturePhoto}> take photo</button>
        </>
      )}
    </>
  );
}

export default AttentdancePage;
