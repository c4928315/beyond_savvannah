import React from "react";
import "./testimonials.css";
import customIcons from "../../Icons/customIcons";

function Testimonials() {
  const style = {
    width: "10px",
    height: "10px",
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide testimonaialCarousel"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-indicators testimonyActive">
        <button
          className="navBtn active"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          style={style}
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          className="navBtn"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          style={style}
          aria-label="Slide 2"
        ></button>
        <button
          className="navBtn"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          style={style}
          aria-label="Slide 3"
        ></button>
        <button
          className="navBtn"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          style={style}
          aria-label="Slide 4"
        ></button>
        <button
          className="navBtn"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          style={style}
          aria-label="Slide 5"
        ></button>
      </div>
      {/* <div className="testimonyDiv1">
        <div className="testimonyDivInner"></div>
      </div> */}
      <div className="carousel-inner">
        <div className="carousel-item active testimonyItem">
          <div className="testimonyContent">
            <div className="profilePicPosition">
              <div className="topDecor">
                <img
                  class="testimonyPic"
                  src="https://i.postimg.cc/7LZNTrp7/Whats-App-Image-2024-08-15-at-15-28-56.jpg"
                  alt="testimonyPic"
                />
              </div>
            </div>
            <p class="userTestimony">The CV revamp service was excellent.</p>
            <div className="newUserTestimonyFlex">
              <div className="nameAndPosition">
                <customIcons.waves size={22} />
                <p className="userName">Juliet</p>
                <customIcons.waves size={22} />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item testimonyItem">
          <div className="testimonyContent">
            <div className="profilePicPosition">
              <div className="topDecor">
                <img
                  class="testimonyPic"
                  src="https://i.postimg.cc/3rVb5Nzq/Whats-App-Image-2024-08-14-at-09-24-12.jpg"
                  alt="testimonyPic"
                />
              </div>
            </div>
            <p class="userTestimony">
              I'm getting noticed more now and I'm sure its only a matter of
              time before I land a good job.
            </p>
            <div className="newUserTestimonyFlex">
              <div className="nameAndPosition">
                <customIcons.waves size={22} />
                <p className="userName">Loise</p>
                <customIcons.waves size={22} />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item testimonyItem testimonyCarouselItem">
          <div className="testimonyContent">
            <div className="profilePicPosition">
              <div className="topDecor">
                <img
                  class="testimonyPic"
                  src="https://i.postimg.cc/L8MC579B/Whats-App-Image-2024-08-14-at-10-35-40.jpg"
                  alt="testimonyPic"
                />
              </div>
            </div>
            <p class="userTestimony">Timing was very fast, I loved that I got to clarify few points in my previous cv to help in revamping the new one.</p>
            <div className="newUserTestimonyFlex">
              <div className="nameAndPosition">
                <customIcons.waves size={22} />
                <p className="userName">Martha</p>
                <customIcons.waves size={22} />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item testimonyItem testimonyCarouselItem">
          <div className="testimonyContent">
            <div className="profilePicPosition">
              <div className="topDecor">
              <img class="testimonyPic" src="https://i.postimg.cc/nrDXyXBZ/Whats-App-Image-2024-08-13-at-15-51-39.jpg" alt="testimonyPic"/>
              </div>
            </div>
            <p class="userTestimony">Working with Lorraine was amazing. My Cv was literally a 0, and with the Lorraine’s help it was totally transformed gave me an idea of how a proper cV and cover letter should look and now I am even able to tailor cover letters to suit the jobs I am applying to.</p>
            <div className="newUserTestimonyFlex">
              <div className="nameAndPosition">
                <customIcons.waves size={22} />
                <p className="userName">Nanji</p>
                <customIcons.waves size={22} />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item testimonyItem testimonyCarouselItem">
          <div className="testimonyContent">
            <div className="profilePicPosition">
              <div className="topDecor"><img class="testimonyPic" src="https://i.postimg.cc/LsJ1p9cy/Whats-App-Image-2024-08-16-at-12-47-55.jpg" alt="testimonyPic"/>
              </div>
            </div>
            <p class="userTestimony">I am happy with the CV revamp services i especially like that it comes with suggestions on upskilling giving relevant courses to do in order to achieve your goals.</p>
            <div className="newUserTestimonyFlex">
              <div className="nameAndPosition">
                <customIcons.waves size={22} />
                <p className="userName">Sithembelokuhle</p>
                <customIcons.waves size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonyDiv2">
        <div className="testimonyDivInner"></div>
      </div>
      <button
        className="carousel-control-prev btnDiasabled"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next btnDiasabled"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Testimonials;
