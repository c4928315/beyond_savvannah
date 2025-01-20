import React, { useEffect, useState } from "react";
import "./viewService.css";
import customIcons from "../../Icons/customIcons";
import BeforeServiceView from "./beforeServiceView";
import { useNavigate } from "react-router-dom";

function RemoteMasterClass() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [popUp, setPopUp] = useState(false);

  const handlePopUp = () => {
    setPopUp(!popUp);
  };

  const navigate = useNavigate();

  const cost = "3500"
  const service = "Remote Work Master Class"
  const duration = "2 hour"
  const description = "Ready to thrive in the world of remote work? Join our exclusive Master Class designed for professionals seeking to transition to or excel in remote roles. Whether you're a seasoned remote worker or just starting, don’t miss your chance to elevate your career—register now!"

  localStorage.setItem("cost", cost);
  localStorage.setItem("service", service);
  localStorage.setItem("duration", duration);
  localStorage.setItem("description", description);

  return (
    <div className="viewScontainer">
      <div className="viewSTop">
        <div className="viewStopImg"></div>
        <div className="viewStopText">
          <div>
            <h1>REMOTE WORK MASTER CLASS</h1>
            <p>
            Ready to thrive in the world of remote work? Join our exclusive Master Class designed for professionals seeking to transition to or excel in remote roles. Whether you're a seasoned remote worker or just starting, don’t miss your chance to elevate your career—register now!
            </p>
            <p>
              <b>
              The session will be a richly immersive two-hour experience.
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
              Gain a clear understanding of remote job basics, different employment types, key benefits, and the optimal time zones to target for job applications.  
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Explore the fastest-growing remote roles, the importance of upskilling, and the best platforms to enhance your skills.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Learn what recruiters value most and discover how to distinguish yourself from other candidates.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Find reliable remote job opportunities, effectively navigate remote job boards, and recognize red flags to avoid scams.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Learn from the industry expert with years of experience in remote work.
              </p>
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
          {/* <p>
          This is more than a call.......
          </p> */}
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

export default RemoteMasterClass;
