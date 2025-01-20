import React, { useEffect, useState } from "react";
import "./viewService.css";
import customIcons from "../../Icons/customIcons";
import BeforeServiceView from "./beforeServiceView";
import { useNavigate } from "react-router-dom";

function Consultation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [popUp, setPopUp] = useState(false);

  const handlePopUp = () => {
    setPopUp(!popUp);
  };

  const navigate = useNavigate();


  useEffect(() => {
    localStorage.setItem("cost", cost);
    localStorage.setItem("service", service);
    localStorage.setItem("duration", duration);
    localStorage.setItem("description", description);
  }, []);

  const cost = "4000";
  const service = "Consultation call / Pick my Brain";
  const duration = "30 minutes";
  const description =
    "Are you feeling stuck in your career or looking for tailored guidance to elevate your professional journey? this is more than a call—it's your opportunity to invest in yourself and get expert-level guidance. Ready to take the next step? Let’s talk!";

    console.log("cost", cost);

  return (
    <div className="viewScontainer">
      <div className="viewSTop">
        <div className="viewStopImg"></div>
        <div className="viewStopText">
          <div>
            <h1>Consultation call / Pick my Brain</h1>
            <p>
              Are you feeling stuck in your career or looking for tailored
              guidance to elevate your professional journey? this is more than a
              call—it's your opportunity to invest in yourself and get
              expert-level guidance. Ready to take the next step? Let’s talk!
            </p>
            <p>
              <b>
                This package includes 30 minutes consultation call on remote
                work and navigating the remote work landscape
              </b>
            </p>
          </div>
        </div>
      </div>

      <div className="viewSBottom">
        <h1>Benefits</h1>
        <div className="viewSBottomFlex">
          <div className="viewSBottomPs">
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
                Receive a personalized plan that aligns with your remote work
                goals—whether you're transitioning into remote work, seeking a
                new remote role, or aiming to excel in your current position.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
                Gain access to expert tips on how to effectively search for and
                secure remote job opportunities that fit your skill set and
                lifestyle. Learn how to stand out in the competitive remote work
                market.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
                Learn the essential skills needed to succeed in a virtual
                environment, from managing time zones and more.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
                Receive expert guidance on why it is important to improve your
                LinkedIn profile and other professional platforms to attract
                remote work opportunities and showcase your skills to potential
                employers.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
                Stay ahead with the latest trends and changes in the remote work
                sector, so you can adapt to new technologies, industries, and
                opportunities that emerge in the evolving remote workforce.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>Ask questions and seek guidance on anything remote working.</p>
            </span>
          </div>

          <div className="viewSBottomBtns">
            <button className="viewSBottomBtnsPurchase" onClick={() => navigate("/purchaseservice")}>
              Purchase
            </button>
            <button onClick={() => navigate("/purchaseservice")}>More</button>
          </div>
        </div>
        <div className="viewSBottomNB">
          <p>This is more than a call.......</p>
        </div>
        <hr />
      </div>

      <div className="viewServiceMedia">
        <h1>For Tutorials Visit</h1>
        <div className="containerzz">
          <div className="cardzz">
            <div className="image">
              <img
                href="#"
                src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
            <div className="contentzz">
              <p>
                <span>
                  <customIcons.tiktok className="contentzzIcon2" size={30} />
                </span>
              </p>
            </div>
          </div>
          <div className="cardzz">
            <div className="image">
              <img
                href="#"
                src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
            <div className="contentzz">
              <p>
                <span>
                  <customIcons.youtube className="contentzzIcon1" size={55} />
                </span>
              </p>
            </div>
          </div>
          <div className="cardzz">
            <div className="image">
              <img
                href="#"
                src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
            <div className="contentzz">
              <p>
                <span>
                  <customIcons.instagram
                    className="contentzzIcon2 contentzzIconInsta"
                    size={30}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Consultation;
