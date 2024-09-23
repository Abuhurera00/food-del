import React, { useContext, useEffect } from 'react'
import "./Verify.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"
import { toast } from 'react-toastify';

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const navigate = useNavigate();

  const { url } = useContext(StoreContext);
  // console.log(success, orderId);

  // const token = localStorage.getItem("token");  // Get the token from local storage
  // console.log(token);


  const verifyPayment = async () => {
    try {
      const response = await axios.post(
        url + "/api/order/verify",
        { success, orderId }
      );
      // console.log("API response:", response.data);
      
      if (response.data.success) {
        // Show success toast
        toast.success("Payment verified! Order Placed...");
        navigate("/myorders");
      } else {
        toast.error("Payment verification failed!");
        navigate("/");
      }
    } catch (error) {
      toast.error("Error in payment verification. Please try again.");
      navigate("/");
    }
  }

  useEffect(() => {
    verifyPayment();
  }, [])


  return (
    <div className='verify'>
      <div className="spinner"></div>
    </div>
  )
}

export default Verify
