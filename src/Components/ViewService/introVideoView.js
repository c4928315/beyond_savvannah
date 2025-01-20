import React, { useEffect, useState } from "react";
import "./viewService.css";
import customIcons from "../../Icons/customIcons";
import BeforeServiceView from "./beforeServiceView";
import { useNavigate } from "react-router-dom";

function IntroVideoView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [popUp, setPopUp] = useState(false);

  const handlePopUp = () => {
    setPopUp(!popUp);
  };

  const navigate = useNavigate();

  const cost = "3000"
  const service = "Introductory video"
  const duration = "15 minutes"
  const description = "In the dynamic landscape of remote work, establishing a personal connection can be challenging. This is why most if not all companies, require a 1 minute introductory video. This package will give you pointers and how to address yourself  to your future employer!"

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
            <h1>Introductory video</h1>
            <p>
            In the dynamic landscape of remote work, establishing a personal connection can be challenging. This is why most if not all companies, require a 1 minute introductory video. This package will give you pointers and how to address yourself  to your future employer!
            </p>
            <p>
              <b>
              Duration 15 minutes.
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
              1. Creating a Personal Connection: Get help in introducing yourself —through tone, body language, and expression. This is essential in the remote world where face-to-face interactions are limited.   
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Establishing Credibility:In the absence of in-person meetings, a video provides a platform to showcase professionalism, expertise, and personality. This package covers this from end to end.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Clear Communication of Expectations: Get a how to  introductory video that will allow you to  clearly articulate their roles, work styles, and expectations.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Engagement and Accessibility: Get a 15 minutes consultation call for pointers and one round of review.
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
          <p>
          An introductory video is more than just a welcome—it’s an essential tool for remote workers to establish rapport, communicate effectively, and set the tone for a productive working relationship.
          </p>
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

export default IntroVideoView;
