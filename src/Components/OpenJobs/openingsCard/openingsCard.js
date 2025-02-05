import React from "react";
import "./openingsCard.css";
import customIcons from "../../../Icons/customIcons";
import { LuTimer } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function OpeningsCard({ data, currentPage }) {
  const navigate = useNavigate();

  console.log(data);

  const handleTitleClick = () => {
    localStorage.setItem("clickedJob", safeStringify(data));
    localStorage.setItem("currentPage", safeStringify(currentPage));
    navigate(`/jobs/${data.jobsId}/${encodeURIComponent(data.jobTitle)}?page=${currentPage}`);
  };

  const duration = () => {
    if (data.perYear) return <>Year</>;
    if (data.perMonth) return <>Month</>;
    if (data.perDay) return <>Day</>;
    if (data.perHour) return <>Hour</>;
  };

  const titlleJob = data?.jobName?.toLowerCase()

  console.log("data",data)

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  };

  const endData = formatDate(data?.endDate)

  const calculateDaysRemaining = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    // Calculate the difference in milliseconds
    const differenceInMs = end.getTime() - start.getTime();
  
    // Convert milliseconds to days
    return Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
  };
  
  

  return (
    <div className="openingCardContainer">
      <div className="leftOpeningCard">
        <div className="titleDaysRemainder">
           <h2 className="openingCardTitle" onClick={handleTitleClick}>
          {titlleJob}
        </h2>
        <p>{calculateDaysRemaining(data?.dateCreated, data?.endDate)} D</p>
        </div>
       
        <div
        className="companyLogo"
        style={{
          backgroundImage: `url(${data.imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
        <div className="leftOpeningCardIcon">
          <span>
            <LuTimer size={20} style={{ color: "#767676" }} />
          </span>
          <span className="openingCardCompany">
            <p>{endData}</p>
          </span>
        </div>
        {/* <div className="leftOpeningCardIcon openingCardCompany">
          <span>
            <customIcons.case size={17} style={{ color: "#767676" }} />
          </span>
          <span className="leftOpeningCardTitle">
            <p>{data.jobCategory}</p>
          </span>
        </div> */}
        <div className="leftOpeningCardIcon leftOpeningCardButton">
          <button className="applyNow">Apply Now</button>
          <button className="viewDetails">Details</button>
        </div>
      </div>
      {/* <div className="jobDuration">
        <button onClick={() => navigate("/login")}>{data.jobCategory}</button>
      </div> */}
    </div>
  );
}

function safeStringify(obj, replacer = null, spaces = 2) {
  const cache = new Set();
  const result = JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (cache.has(value)) {
        return;
      }
      cache.add(value);
    }
    return replacer ? replacer(key, value) : value;
  }, spaces);
  cache.clear();
  return result;
}

export default OpeningsCard;
