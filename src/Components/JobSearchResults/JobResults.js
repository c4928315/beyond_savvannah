import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LocalContext from "../../Context/contextProvider";
import customIcons from "../../Icons/customIcons";
import Loader from "../Loader/loader";
import OpeningsCard from "../OpenJobs/openingsCard/openingsCard";
import ScrollToTopButton from "../scrollToTop";
import { BsSortUp } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import "./jobResults.css";

function JobResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialPage = localStorage.getItem("currentPage")
    ? parseInt(localStorage.getItem("currentPage"), 10)
    : searchParams.get("page")
    ? parseInt(searchParams.get("page"), 10)
    : 1;

  const storedCategoryId = localStorage.getItem("jobCategoryId");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [newCategoryId, setNewCategoryId] = useState(storedCategoryId);
  const [jobCategoryId, setJobCategoryId] = useState(0);
  const [jobsPerPage, setJobsPerPage] = useState(15);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryStatus, setSearchQueryStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQueryMain, setSearchQueryMain] = useState("");
  const { filteredData, category } = useContext(LocalContext);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const url = `https://efmsapi.azurewebsites.net/api/Jobs/getAllJobsByCompany?name=${searchQuery}&jobCategoryId=${jobCategoryId}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        setIsLoading(false);
        const data = await response.json();
        setFilteredJobs(data);
      } catch (error) {
        // Handle error
      }
    };
    fetchData();
  }, [jobCategoryId, searchQuery]);

  // Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredJobsByName = currentJobs.filter((job) =>
    job.jobName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate range
  const totalJobs = filteredJobsByName.length;
  const startingIndex = indexOfFirstJob + 1;
  const endingIndex = Math.min(indexOfLastJob, totalJobs);

  const style = {
    color: "rgba(44, 85, 92, 0.6)",
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    e.preventDefault(); // Prevent default form submission behavior
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQueryMain(searchQuery);
  };

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  console.log("filteredJobs", filteredJobs);
  console.log("filteredJobsByName", filteredJobsByName);

  return (
    <>
      <div className="jobResults">
        <div className="jobResultsTop">
          <div className="jobResultsTopContainer">
            <h2 className="jobResultsTopNavTitle">Find Jobs</h2>
            <div className="jobResultsTopNav">
              <Link to="/" className="jobResultsTopNavHome">
                Home
              </Link>
              <customIcons.forwardSlash color="balck" />
              <p>Find Jobs</p>
            </div>
          </div>
        </div>

        <div className="jobResultsBottom">
          <div className="jobResultsBottomLeft">
            <div className="jobResultsBottomInputContainer">
              <div
                className="formInputResultsContainer"
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  border: "1px solid rgb(28, 54, 58)",
                  borderRadius: "0.6vh",
                  paddingLeft: "1em",
                  height: "4.5rem",
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0",
                  borderRight: "none",
                }}
              >
                <customIcons.search size={26} className="jobResultsIcon" />
                <input
                  type="text"
                  className="jobResultsBottomInput"
                  placeholder="Job Title"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
              </div>
            </div>

            <div className="jobResultsBottomInputContainer">
              <div
                className="formInputResultsContainer"
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  border: "1px solid rgb(28, 54, 58)",
                  paddingLeft: "1em",
                  height: "4.5rem",
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                  borderRight: "none",
                  borderLeft: "1.5px solid rgb(226, 219, 211)",
                }}
              >
                <customIcons.category size={26} className="jobResultsIcon" />
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ width: "90%", border: "none", fontSize: "1.0555rem", color: "#b8b8b8" }}
                  onChange={(e) => {
                    const categoryId = parseInt(e.target.value, 10);
                    localStorage.setItem("jobCategoryId", categoryId);
                    setJobCategoryId(categoryId);
                  }}
                >
                  <option selected className="selectPlaceholder" style={{fontSize: "1.0555rem", color: "#b8b8b8"}}>Select</option>
                  {category?.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="jobResultsBottomInputContainer jobResultsBottomInputContainerFilter">
              <div
                className="formInputResultsContainer formInputResultsContainerFilter"
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  border: "1px solid rgb(28, 54, 58)",
                  borderRadius: "0.6vh",
                  paddingRight: "0.5rem",
                  height: "4.5rem",
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                  borderLeft: "none",
                  gap: "1rem",
                  justifyContent: "right",
                }}
              >
                <div></div>
                <button
                  className="firstNavBtn"
                  onClick={(e) => handleSearch(e)}
                >
                  <BsSortUp size={25} color="rgb(28, 54, 58)" />
                  <span style={{ color: "rgb(28, 54, 58)" }}>Filter</span>
                </button>
                <button onClick={(e) => handleSearch(e)}>Find Job</button>
              </div>
            </div>
          </div>

          {/* <div className="popularTags popularTags2">
            <div className="popularTagsContent">
              <span>Popular Tag:</span>
              <span className="popularTagsContentTags">
                <p>Remote</p>
                <p>On site</p>
                <p>Hybrid</p>
              </span>
            </div>
          </div>
          <hr className="hrJobs" /> */}

          <div className="popularTags">
            <div className="popularTagsContent">
              <span className="popularTagsActiveFilter">Active Filter:</span>
              <span className="popularTagsContentTags">
                <div className="popularTagsContentTagsFiltered">
                  <p>Remote</p>
                  <RxCross2
                    size={24}
                    className="popularTagsContentTagsFilteredIcon"
                  />
                </div>
              </span>
            </div>
          </div>
          {/* <hr className="hrJobs" /> */}

          <>
            {isLoading ? (
              <Loader />
            ) : filteredJobsByName.length === 0 ? (
              <div className="nojobsPhrase">
                <div className="nojobsPhraseInner">
                  <div className="nojobsPhraseIconHolder">
                    <div className="nojobsPhraseIcon">
                      <customIcons.document style={style} size={54} />
                    </div>
                  </div>
                  <div>
                    <h3 className="nojobsPhraseHeader">No jobs found</h3>
                    <p className="nojobsPhraseP">
                      Try adjusting your search and or filter to find what you
                      are looking for.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="jobResultsBottomRight">
                {/* <div className="jobRangeContainer">
                  <div className="jobRange">
                    Showing {startingIndex} to {endingIndex} of {totalJobs}
                  </div>

                  <div className="jobRangeDropdown">
                    <div className="dropdown" id="byDefault">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sort By (Default)
                      </button>
                      <ul className="dropdown-menu">
                        <li>New</li>
                        <li>Old</li>
                        <li>Default</li>
                      </ul>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {`${jobsPerPage} Per Page`}
                      </button>
                      <ul className="dropdown-menu">
                        <li onClick={() => setJobsPerPage(5)}>5 Per Page</li>
                        <li onClick={() => setJobsPerPage(10)}>10 Per Page</li>
                        <li onClick={() => setJobsPerPage(15)}>15 Per Page</li>
                        <li onClick={() => setJobsPerPage(20)}>20 Per Page</li>
                        <li onClick={() => setJobsPerPage(25)}>25 Per Page</li>
                        <li onClick={() => setJobsPerPage(30)}>30 Per Page</li>
                        <li onClick={() => setJobsPerPage(filteredJobs.length)}>
                          All
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div className="jobsMainTitle">
                  <h1>Remote Jobs</h1>
                  <p>Latest Jobs</p>
                </div>
                <div className="jobCards">
                   {filteredJobsByName.map((item, i) => (
                  <OpeningsCard
                    data={item}
                    key={item.jobsId}
                    currentPage={currentPage}
                  />
                ))}
                </div>
               

                <div className="pagination">
                  {/* Previous Button */}
                  <button
                    className="pageBtnPrevNext pageBtnPrev"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>

                  {/* Page numbers */}
                  {Array.from({ length: totalPages }, (_, i) => {
                    // Display only adjacent page numbers along with current page
                    if (
                      i + 1 === currentPage ||
                      i + 2 === currentPage ||
                      i === currentPage ||
                      i - 1 === currentPage ||
                      i + 1 === currentPage
                    ) {
                      return (
                        <button
                          className={`pageBtn ${
                            currentPage === i + 1 ? "activePage" : ""
                          }`}
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                        >
                          {i + 1}
                        </button>
                      );
                    }
                    return null;
                  })}

                  {/* Next Button */}
                  <button
                    className="pageBtnPrevNext pageBtnNext"
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>

                <div className="scrollToTop">
                  <ScrollToTopButton />
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
}

export default JobResults;
