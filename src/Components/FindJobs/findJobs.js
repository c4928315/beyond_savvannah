import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import customIcons from "../../Icons/customIcons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { BsFillInfoCircleFill } from "react-icons/bs";

import "./findJobs.css";

function FindJobs({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    const filteredResults = data.filter(
      (job) =>
        job?.jobName?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        job?.companyName?.toLowerCase().includes(searchTerm?.toLowerCase())
    );

    await setFilteredJobs(filteredResults);

    // The state has been updated, now navigate and store in localStorage
    navigate(`/jobs/results?search=${encodeURIComponent(searchTerm)}`);
  };

  useEffect(() => {
    // Use the effect to store filteredJobs in localStorage
    localStorage.setItem("filteredJobs", JSON.stringify(filteredJobs));
  }, [filteredJobs]);

  console.log(data);

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        <button
          disabled={currentSlide === 0}
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => previous()}
        >
          <IoChevronBack size={20} color="white" />
        </button>
        <button
          onClick={() => next()}
          className={currentSlide === 7 ? "disable" : ""}
        >
          <IoChevronForward size={20} color="white" />
        </button>
      </div>
    );
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [serviceAndroidState, setServiceAndroidState] = useState(false);

  return (
    <>
      <div className="findJobsContainer">
        <div className="findJobsInner">
          <div className="topH1">
            <div className="topH1Innder">
              <p> Our services</p>
              <h1>How we can help you</h1>
            </div>
          </div>
          <section className="webSection">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="cover item-a">
                    <h1>
                      CV
                      <br />
                      Revamp
                    </h1>
                    <span className="price"> Ksh 8000</span>
                    <div className="card-back">
                      <Link to="/viewService">View</Link>
                      <Link to="">services</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="cover item-b">
                    <h1>
                      Student's Package
                      <br />
                      CV Revamp
                    </h1>
                    <span className="price">Ksh 5000</span>
                    <div className="card-back">
                      <Link to="/viewLStudentPack">View</Link>
                      <Link to="">services</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="cover item-c">
                    <h1>
                      Linkedin
                      <br />
                      Optimisation
                    </h1>
                    <span className="price">Ksh 15000</span>
                    <div className="card-back">
                      <Link to="/viewLinkedIn">View</Link>
                      <Link to="">services</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="cover item-d">
                    <h1>
                      Coaching
                      <br />
                      Session
                    </h1>
                    <span className="price">Ksh 7000</span>
                    <div className="card-back">
                      <Link to="/viewCoachingSesh">View</Link>
                      <Link to="">services</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="cover item-e">
                    <h1>
                      Interview
                      <br />
                      Prep
                    </h1>
                    <span className="price">Ksh 12000</span>
                    <div className="card-back">
                      <Link to="/viewInterview">View</Link>
                      <Link to="">services</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="cover item-g">
                    <h1>
                      Consultation call /
                      <br />
                      <i>Pick my Brain</i>
                    </h1>
                    <span className="price">Ksh 4000</span>
                    <div className="card-back">
                      <Link to="/consult">View</Link>
                      <Link to="">services</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="cover item-f">
                    <h1>
                      REMOTE WORK
                      <br />
                      MASTER CLASS
                    </h1>
                    <span className="price">Ksh 3500</span>
                    <div className="card-back">
                      <Link to="/remoteMasterCL">View</Link>
                      <Link to="">services</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="cover item-h">
                    <h1>Introductory video</h1>
                    <span className="price">Ksh 3000</span>
                    <div className="card-back">
                      <Link to="/viewIntroVideo">View</Link>
                      <Link to="">services</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="servicesAndroid">
            <Carousel
              responsive={responsive}
              customButtonGroup={<ButtonGroup />}
            >
              <div className="one androidOne">
                <div className="androidH1Container">
                  <BsFillInfoCircleFill
                    size={23}
                    className="androidH1ContainerIcon"
                    onClick={() => setServiceAndroidState(true)}
                  />
                  <h1>CV Revamp</h1>
                </div>
              </div>
              <div className="one androidTwo">
                <div className="androidH1Container">
                  <BsFillInfoCircleFill
                    size={23}
                    className="androidH1ContainerIcon"
                    onClick={() => setServiceAndroidState(true)}
                  />
                  <h1>Student's Package CV Revamp</h1>
                </div>
              </div>
              <div className="one androidThree">
                <div className="androidH1Container">
                  <BsFillInfoCircleFill
                    size={23}
                    className="androidH1ContainerIcon"
                    onClick={() => setServiceAndroidState(true)}
                  />
                  <h1>Linkedin Optimisation</h1>
                </div>
              </div>
              <div className="one androidFour">
                <div className="androidH1Container">
                  <BsFillInfoCircleFill
                    size={23}
                    className="androidH1ContainerIcon"
                    onClick={() => setServiceAndroidState(true)}
                  />
                  <h1>Coaching Session</h1>
                </div>
              </div>
              <div className="one androidFive">
                <div className="androidH1Container">
                  <BsFillInfoCircleFill
                    size={23}
                    className="androidH1ContainerIcon"
                    onClick={() => setServiceAndroidState(true)}
                  />
                  <h1>Interview Prep</h1>
                </div>
              </div>
              <div className="one androidSix">
                <div className="androidH1Container">
                  <BsFillInfoCircleFill
                    size={23}
                    className="androidH1ContainerIcon"
                    onClick={() => setServiceAndroidState(true)}
                  />
                  <h1>
                    Consultation call / <i>Pick my Brain</i>
                  </h1>
                </div>
              </div>
              <div className="one androidSeven">
                <div className="androidH1Container">
                  <BsFillInfoCircleFill
                    size={23}
                    className="androidH1ContainerIcon"
                    onClick={() => setServiceAndroidState(true)}
                  />
                  <h1>REMOTE WORK MASTER CLASS</h1>
                </div>
              </div>
              <div className="one androidEight">
                <div className="androidH1Container">
                  <BsFillInfoCircleFill
                    size={23}
                    className="androidH1ContainerIcon"
                    onClick={() => setServiceAndroidState(true)}
                  />
                  <h1>Introductory video</h1>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      {serviceAndroidState && (
        <div className="serviceBlurAndroid">
          <div className="serviceBlurAndroidCard">
            <div className="serviceCard">
              <div className="serviceCardInner">
                <div
                  className="closeServiceCard"
                  onClick={() => setServiceAndroidState(false)}
                >
                  <RxCross2 size={20} color="white" />
                </div>
                <div className="timeCostServiceCard">
                  <span>
                    <p>Duration:</p> <b>2 hours</b>
                  </span>
                  <span>
                    <p>Cost:</p> <b>ksh. 3000</b>
                  </span>
                </div>
                <img
                  src="https://i.postimg.cc/0jDHqfz9/Blue-Modern-Global-Network-Company-Logo-5.png"
                  alt="logo"
                  className="serviceCardInnerLogo"
                />
                <div className="serviceCardInnerContent">
                  <div className="topH1 topH1AboutAndroid topH1ServiceCard">
                    <div className="topH1Innder topH1InnderServiceCard">
                      <p>Service</p>
                      <h1>CV Revamp</h1>
                    </div>
                  </div>

                  <div className="viewSBottomPs">
                    <span className="viewSBottomSpans">
                      <span>🎯</span>
                      <p className="serviceCardInnerContentPtag">
                        Unlock the full potential of your job search with our
                        tailored CV review and cover letter services. This
                        package is designed to empower you in your career
                        journey by ensuring your application materials stand out
                        to potential employers.
                      </p>
                    </span>
                    <span className="viewSBottomSpans">
                      <span>🎯</span>
                      <p className="serviceCardInnerContentPtag">
                        Cover Letter: Craft a compelling cover letter that
                        highlights your strengths and showcases your motivation.
                        We'll help you create a personalized cover letter that
                        makes a strong impression.
                      </p>
                    </span>
                    <span className="viewSBottomSpans">
                      <span>🎯</span>
                      <p className="serviceCardInnerContentPtag">
                        Bonus: As a special bonus, we're offering insights into
                        three job openings currently available, giving you a
                        head start in your job search.
                      </p>
                    </span>
                  </div>

                  <div className="serviceCardButtons">
                    <button className="serviceCardButtonsPurchase">Buy</button>
                    {/* <button></button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FindJobs;
