import React, { useEffect, useState } from "react";
import "./viewService.css";
import "./payGetAway.css";
import { TiDelete } from "react-icons/ti";
import { IoInformationCircleOutline } from "react-icons/io5";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { RxScissors } from "react-icons/rx";
import Loader from "../Loader/loader";
import { useNavigate } from "react-router-dom";

function BeforeServiceView() {
  // const handlePopUp = () => {
  //   popUpState(false);
  // };

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(
    "Phone number must start with 254, 255, or 256 ."
  );
  const cost = localStorage.getItem("cost");
  const service = localStorage.getItem("service");
  const duration = localStorage.getItem("duration");
  const description = localStorage.getItem("description");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // if (!email){

    // }

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

    console.log(cost);

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

      if (!response.ok) {
        throw new Error("Failed to initiate transaction");
      }

      const data = await response.json();
      setLoading(false);
      // handlePopUp();
      navigate("/");
      console.log("Transaction Successful:", data);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    // <div className="beforeServiceViewMainOuter">
    //   <div className="beforeServiceViewMainInner">
    //     <div className="beforeServiceViewMainContent">
    //       <div className="popUpUnSetContainer">
    //         <TiDelete className="popUpUnSet" style={{color: "#d6bbaf"}} size={33} onClick={() => navigate("/purchaseservice")} />
    //       </div>
    //       <div className="beforeServiceViewMainContentLeft">
    //         <div className="beforeServiceLogo2">
    //           <div className="navbar-brand2">
    //             <div className="logoBox2">
    //               <h3>B</h3>
    //               <div className="logoDivider"></div>
    //               <h3>S</h3>
    //               <div className="logoBox2PTag">
    //                 <p>BEYOND THE SAVANNAH</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <hr />
    //         <div className="beforeServiceViewMainContentLeftPtag">
    //           <p>
    //             "Please use the M-Pesa details provided for payments at this
    //             time, while we work on implementing an automated payment method.
    //             We appreciate your patience!"
    //           </p>
    //         </div>
    //       </div>
    //       <div className="beforeServiceViewMainContentRight">
    //         <div className="beforeServiceViewMainContentRightContent">
    //           <div>
    //             <div className="beforeServiceViewMainContentRightContentTop">
    //               <h2>Payment Process</h2>
    //             </div>

    //             <div className="paymentSetContainer">
    //               <div className="paymentSet">
    //                 <div className="paymentSetInner">
    //                   <span className="paymentSetInner1Span">
    //                     Paybill Number :{" "}
    //                   </span>
    //                   <span>4139143</span>
    //                 </div>
    //               </div>
    //               <div className="paymentSet">
    //                 <div className="paymentSetInner">
    //                   <span className="paymentSetInner1Span">Account: </span>
    //                   <span>Your name as it appears in your ID card</span>
    //                 </div>
    //               </div>
    //               <div className="paymentSet">
    //                 <div className="paymentSetInner">
    //                   <span className="paymentSetInner1Span">
    //                     Amount To Be Paid:{" "}
    //                   </span>
    //                   <span>{cost}</span>
    //                 </div>
    //               </div>
    //               <div className="paymentSet">
    //                 <div className="paymentSetInner">
    //                   <span className="paymentSetInner1Span">Recipient: </span>
    //                   <span>
    //                     [ Beyond Annah Consulting Limited ] should appear as the
    //                     recipient
    //                   </span>
    //                 </div>
    //               </div>
    //             </div>

    //             <div className="paymentSet paymentSetNote">
    //               <div className="paymentSetInner paymentSetInnerNote">
    //                 <span className="paymentSetInner1Span">NOTE: </span>
    //                 <span>
    //                   Remember to send an email before and after the payment is
    //                   made.
    //                 </span>
    //               </div>
    //               <div className="paymentSetInner paymentSetInnerNote">
    //                 <span className="paymentSetInner1Span">NOTE: </span>
    //                 <span>
    //                 If you’re unable to use M-Pesa services, please email us for alternative payment options.
    //                 </span>
    //               </div>
    //               <div class="paymentSetInner paymentSetInnerNote">
    //                 <span class="paymentSetInner1Span">Email: </span>
    //                   <span style={{textTransform: "lowercase", textDecoration: "underline"}}>
    //                     info@beyondthesavannah.co.ke
    //                   </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="paymentGateAway">
      <div className="paymentGateAwayInner1">
        <h1>Checkout</h1>
      <div className="norefund">
        <p>
          Please note that once a service is purchased, it is non-refundable.
        </p>
      </div>
      <div className="paymentGateAwayInner">
        <div className="paymentGateAwayInnerLeft">
          <div className="paymentGateAwayInnerLeftTop">
            <h2 className="mainHeader">{service}</h2>
            <p>{description}</p>
            <hr />
            <div className="details">
              <div className="detailsInner">
                <h6>Cost</h6>
                <p>Ksh. {cost}</p>
              </div>
              <div className="detailsInner">
                <h6>Duration</h6>
                <p>{duration}</p>
              </div>
              <div className="detailsInner">
                <h6>Recurrence</h6>
                <p>One Time Service</p>
              </div>
            </div>
          </div>
          <div className="paymentGateAwayInnerLeftBottom">
            <div>
              <h2 className="mainHeader">Payment Details</h2>
              <p>Please fill out the form bellow</p>
              <hr />
              <div className="paymentGateAwayInnerLeftBottomForm">
                <div className="fields">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="fields">
                  <div className="phoneInputPurchase">
                    <label>Phone Number</label>
                    {/* <p className="error">*{error}</p> */}
                    <p className="error">
                      <IoInformationCircleOutline size={25} color="red" />
                      <span className="tooltip">
                      Phone number must start with 254, 255, or 256 (e.g., 254701234567).
                      </span>
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder="phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="paymentGateAwayInnerRight">
          <div className="paymentGateAwayInnerRightTop">
            <div className="paymentGateAwayInnerRightContent">
              <h2 className="mainHeader">Summary</h2>
              <hr />
              <div className="summaryInner">
                <p>Service</p>
                <p>{service}</p>
              </div>
              <div className="summaryInner">
                <p>Phone Number</p>
                <p>{phoneNumber}</p>
              </div>
              <div className="summaryInner">
                <p>Email</p>
                <p>{email}</p>
              </div>
              <hr />
            </div>
            <div className="paymentGateAwayInnerRightContent">
              <h2 className="mainHeader">Price Details</h2>

              <div className="summaryInner">
                <p>Cost</p>
                <p className="pNamea">{cost}</p>
              </div>
              <div className="summaryInner">
                <p>Duration</p>
                <p className="pNamea">{duration}</p>
              </div>
              <div className="summaryInner">
                <p>Discount</p>
                <p className="pNamea">N/A</p>
              </div>
            </div>
            <div className="paymentGateAwayInnerRightContent">
              <div className="summaryInner totalCostSI">
                <p className="totalCost">Total Cost</p>
                <p className="totalCost">{cost}</p>
              </div>
            </div>
          </div>
          <hr />
          <button className="submitBtn" onClick={handleSubmit}>
            {loading ? "Submitting" : "Pay For Service"}
          </button>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default BeforeServiceView;
