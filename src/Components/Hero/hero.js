import React, { useEffect, useRef, useState } from "react";
import "./hero.css";
import customIcons from "../../Icons/customIcons";
import { Link, useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import emailjs from '@emailjs/browser';

function Hero({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const navigate = useNavigate();

  const form = useRef();


  const user = JSON.parse(localStorage.getItem('auth'))

  console.log(user)

  // useEffect(() => {
  //   // Check if user is platinum before sending email
  //   if (user?.email) {
  //     emailjs
  //       .sendForm(
  //         "service_4rwp7hk",  // Replace with actual EmailJS Service ID
  //         "template_ajo41bp", // Replace with actual EmailJS Template ID
  //         form.current,
  //         "yXCn-l9s2PXS6VZjt"   // Replace with actual EmailJS Public Key
  //       )
  //       .then(
  //         (result) => {
  //           console.log("Email sent:", result.text);
  //           alert("Email sent successfully!");
  //         },
  //         (error) => {
  //           console.error("Error sending email:", error);
  //           alert("Failed to send email.");
  //         }
  //       );
  //   }
  // }, [user]);

  const handleSearch = async () => {
    const filteredResults = data.filter(
      (job) =>
        job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
    );

    await setFilteredJobs(filteredResults);

    // The state has been updated, now navigate and store in localStorage
    navigate(`/jobs/results?search=${encodeURIComponent(searchTerm)}`);
  };

  useEffect(() => {
    // Use the effect to store filteredJobs in localStorage
    localStorage.setItem("filteredJobs", JSON.stringify(filteredJobs));
  }, [filteredJobs]);

  console.log(filteredJobs);

  return (
    <div className="heroHolder">
      <div className="heroContainer">
        <div className="heroLeft">
          <div className="heroMainP">
            <p>
              Seamless connections, soaring careers. Elevate yours with Beyond The Savannah!
            </p>
          </div>
          <div className="heroMainH">
            <h1>
              Empowering Your Career Journey Through Seamless{" "}
              <span className="connectionsHeroContainer">
                <customIcons.connection size={35} className="connectionsHero" />
              </span>{" "}
              Connections.
            </h1>
          </div>

          <div className="heroMainBtn">
            <button
              onClick={() => navigate("/allJobs/results?search=allJobs")}
              className="getStartedBtn"
            >
              try out our services
            </button>
            <span>
              <customIcons.rightArrow size={18} />
            </span>
          </div>

          <h5 className="faqs">FAQS watch along</h5>
          <div className="heroMainSecBtn" onClick={() => navigate("/signupFirebase")}>
            <FaPlay size={45} color="red"/>
            {/* <div className="heroGlobe">
              <customIcons.globe size={20} />
            </div>

            <div className="heroTalk">
              <p>
                Seize new opportunities and find your ideal remote job anytime,
                anywhere
              </p>
              <h6>
                Seamless connections, soaring careers. Elevate yours with
                Beyond The Savannah!
              </h6>
            </div>

            <div className="heroTalkBtnContainer">
              <Link>Remote</Link>
              <Link>Hybrid</Link>
              <Link>On Site</Link>
            </div> */}
          </div>
        </div>
        

        <div className="grid-container">
          <img src="https://i.postimg.cc/V6JsZmXH/DSC-0811-copyk-removebg-preview.png" alt="heroImg" className="img-responsive" />
        </div>
      </div>
      <div className="hereContainerAndroid">
        <div className="androidHeroImg">
          <img className="hero-image" src="https://i.postimg.cc/13fdQS2V/DSC-0760-copy-removebg-preview.png" alt="hero-image"/>
        </div>
        <div className="androidHeroCircle">
          <div className="androidHeroCircleContent">
            <p>SEAMLESS CONNECTIONS, SOARING CAREERS. ELEVATE YOURS WITH BEYOND THE SAVANNAH!</p>
            <h6>Empowering Your Career Journey Through Seamless Connections.</h6>
            <button>FAQ Video</button>
          </div>
        </div>
      </div>
      <form ref={form} style={{display: "none"}}>
      {/* Hidden fields with email values */}
      <input type="hidden" name="to_email" value={user.email} />
      <input type="hidden" name="subject" value="Exclusive Offer for Platinum Members!" />
      <input type="hidden" name="message" value="Hello, Platinum User!" />
    </form>

    </div>
  );
}

export default Hero;
