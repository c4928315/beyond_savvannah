import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./getAwayForm.css";
import { useNavigate } from "react-router-dom";

function GetAwayForm({
  setServiceAndroidState,
  setServiceAndroidPaymentState,
}) {
  const navigate = useNavigate();

  const androidService = JSON.parse(localStorage.getItem("androidService"));

  const [stkSuccess, setStkSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(
    "Phone number must start with 254, 255, or 256 ."
  );

  const cost = extractNumberAsString(androidService.cost);

  function extractNumberAsString(str) {
    const match = str.match(/\d+/);  // Regex to find numbers
    if (match) {
      return match[0];  // Return the number as a string
    }
    return null;  // Return null if no number is found
  }
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const phoneRegex = /^(254|255|256)\d{9}$/; // Must start with 254, 255, or 256 and have 9 more digits
    if (!phoneRegex.test(phoneNumber)) {
      setError("Phone number must start with 254, 255, or 256 .");
      setLoading(false);
      return;
    }

    setError(""); // Clear any previous errors

    const payload = {
      phoneNumber,
      email,
      amount: cost, // Default value, adjust as necessary
      txnDate: new Date().toLocaleDateString("en-GB"), // Formats date as DD/MM/YYYY
    };

    console.log("cost11",cost);

    try {
      const response = await fetch(
        "https://efmsapi-stagingv2.azurewebsites.net/api/Transactions/StkPush",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to initiate transaction");
      }

      if (response.status === 200) {
        const data = await response.json();
      setLoading(false);
      setStkSuccess(true)
      setTimeout(() => {
        setServiceAndroidState(false)
      }, 3000)
      // handlePopUp();
      navigate("/");
      }
      
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="androidPayment">
      {stkSuccess ? (
        <div class="success-animation">
          <svg
            class="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              class="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              class="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>

          <p className="stkPush">STK Request Successful</p>
        </div>
      ) : (
        <div className="androidPaymentInner">
          <div
            className="closeServiceCard"
            onClick={() => {
              setServiceAndroidState(false);
              setServiceAndroidPaymentState(false);
            }}
          >
            <RxCross2 size={20} color="white" />
          </div>
          <img
            src="https://i.postimg.cc/0jDHqfz9/Blue-Modern-Global-Network-Company-Logo-5.png"
            alt="logo"
            className="serviceCardInnerLogo"
          />
          <div className="androidPaymentHeader">
            <div className="topH1 topH1AboutAndroid topH1ServiceCard">
              <div className="topH1Innder topH1InnderServiceCard">
                <p>Payment</p>
                <h1>How to Pay</h1>
              </div>
            </div>
          </div>
          <div className="androidPaymentInputs">
            <input type="email" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Enter your phone number" onChange={(e) => setPhoneNumber(e.target.value)}/>
          </div>
          <div className="androidPaymentButton">
            <button onClick={handleSubmit}>Submit</button>
            <button className="androidPaymentButtonBack">Back</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetAwayForm;
