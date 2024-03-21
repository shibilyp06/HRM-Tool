/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import useRazorpay from "react-razorpay";
import { Link } from "react-router-dom";
// importing  Toastify
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Dashboard() {
  const [order, setOrder] = useState(null);
  const [Razorpay] = useRazorpay();
  const [student,setStudent] = useState(null)
  useEffect(()=>{
    async function fetchStudent(){
      const response = await axiosInstance.get("/student/getCurrentStudent")
      const student = response.data.student
      setStudent(student)
      toast.success(`Welcome ${student.name}`)
    }
    fetchStudent()
  },[])

  const paymentModal = async () => {
    try {
      async function fetchOrder() {
        const response = await axiosInstance.post("/student/createOrder");
        const order = response.data.order;
        setOrder(order);
      }
      fetchOrder();
    } catch (err) {

      console.error(err);
    }
    if (!order) return;
    if (!window.Razorpay) {
      console.error("Razorpay is not initialized.");
      return;
    }
    const options = {
      key: "rzp_test_mmi9eA0WzjdLyQ",
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      name: "HRM",
      description: "Description of the purchase",
      handler: function (response) {
        console.log("Payment successful:", response);
        // Handle successful payment
      },
      prefill: {
        name: "shibily",
        email: "shibilyp06@example.com",
        contact: "9207656755",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };
  return (
    <>
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
          <div className="bg-gray-900 px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
            <nav className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
              <a
                className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </a>

              {/* Message icon */}
              <Link to="/student/chat">
                <a
                  className="hover:bg-gray-800 text-white p-4 inline-flex justify-center rounded-md"
                  href="#"
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
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                </a>
              </Link>

              {/* Payment icon */}
              <a
                onClick={paymentModal}
                className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
                href="#"
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
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  />
                </svg>
              </a>
            </nav>
            <div className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
              {/* Attentdance */}
              <Link to="/student/attendance">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white m-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
              </Link>
              <a
                className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex-1 px-2 sm:px-0">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-extralight text-white/50">Groups</h3>
              <div className="inline-flex items-center space-x-2">
                <a
                  className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </a>
                <a
                  className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer style={{width:"40%"}} />
    </>
  );
}

export default Dashboard;
