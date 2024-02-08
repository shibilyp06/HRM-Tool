import axios from "axios";
function GetOTPbutton() {
    const sendNumber = () => {
        axios.post("http://localhost:5000/admin/otpVerification", { number });
     };
  return <>
   <button style={{ margin: "10px" }} onClick={sendNumber}>
              Get OTP
            </button>
  </>;
}

export default GetOTPbutton;
