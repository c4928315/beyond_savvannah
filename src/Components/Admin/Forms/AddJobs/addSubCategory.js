import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import useFetch from "../../../../Hooks/useFetch";
import "./addJobs.css";

function AddSubCat({ close }) {

    const [jobCategoryId, setJobCategoryId] = useState(0);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [createdBy, setCreatedBy] = useState('Juliet'); 
    const [modifiedBy, setModifiedBy] = useState('Juliet'); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  const [endDate, setEndDate] = useState(new Date());
  const [formData, setFormData] = useState({
    jobCategoryId: 0,
    name: "",
    description: "",
    createdBy: "Juliet",
    modifiedBy: "Juliet",
  });

  const { data: subCategoryDropDown } = useFetch(
    "https://efmsapi.azurewebsites.net/api/JobSubCategory/getJobsCategoriesDropDown"
  );

  const { data: jobCategoryDropdown } = useFetch(
    "https://efmsapi.azurewebsites.net/api/JobsCategory/getJobsCategoriesDropDown"
  );

  const { data: jobTypes } = useFetch(
    "https://efmsapi.azurewebsites.net/api/JobTypes/getJobTypesDropDown"
  );

  const addSection = () => {
    setFormData((prevData) => ({
      ...prevData,
      jobsAndSections: [
        ...prevData.jobsAndSections,
        {
          id: 0,
          sectionName: "",
          sectionDescription: "",
          jobTypesId: 0,
          modifiedBy: "",
        },
      ],
    }));
  };

  const handleInputChange = (e, sectionIndex) => {
    const { name, value } = e.target;
    if (
      name === "jobName" ||
      name === "jobDescription" ||
      name === "companyId" ||
      name === "jobUrl" ||
      name === "jobCategoriesId"
    ) {
      // Update the jobs object
      setFormData((prevData) => ({
        ...prevData,
        jobs: {
          ...prevData.jobs,
          [name]:
            name === "companyId" || name === "jobCategoriesId"
              ? parseInt(value, 10)
              : value,
        },
      }));
    } else {
      // Update the jobsAndSections array
      setFormData((prevData) => ({
        ...prevData,
        jobsAndSections: prevData.jobsAndSections.map((section, index) =>
          index === sectionIndex
            ? {
                id: section.id,
                sectionName:
                  name === "sectionName" ? value : section.sectionName,
                sectionDescription:
                  name === "sectionDescription"
                    ? value
                    : section.sectionDescription,
                jobTypesId:
                  name === "jobTypesId"
                    ? parseInt(value, 10)
                    : section.jobTypesId,
                jobsId: section.jobsId,
                createdBy: section.createdBy,
                modifiedBy: section.modifiedBy,
              }
            : section
        ),
      }));
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // The data to be posted to the API
    const jobSubCategoryData = {
      jobCategoryId: parseInt(jobCategoryId),
      name,
      description,
      createdBy,
      modifiedBy,
    };

    try {
      setLoading(true);
      const response = await fetch('https://efmsapi.azurewebsites.net/api/JobSubCategory/addJobsCategories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobSubCategoryData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Data submitted successfully:', result);
      alert('Job sub-category added successfully');
      
    } catch (error) {
      setError(error.message);
      console.error('Error submitting data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="postForm addCompanyLabel">
      <h3 className="sectionH3">Add Sub-Category</h3>
      <div className="input-group-array">
        <div className="postFormInputContainer">
          <label>Sub-Category Name</label>
          <input
            type="text"
            className="postFormInput"
            placeholder="Input Value"
            value={name}
            name="jobName" // Added name attribute
            onChange={(e) => setName(e.target.value)}// Passing true to indicate it's a job field
            // Assuming this is the first section
          />
        </div>
        <div className="postFormInputContainer">
          <label>Description</label>
          <textarea
            className="postFormInput postFormInputTextarea"
            name="jobDescription" // Added name attribute
            value={description}
            onChange={(e) => setDescription(e.target.value)}
 // Passing true to indicate it's a job field
            // Assuming this is the first section
          ></textarea>
        </div>
      </div>
      {/* <div className="input-group-array">
        <div className="postFormInputContainer">
          <label>Company</label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="companyId"
            onChange={(e) => handleInputChange(e, 0, true)} // Passing true to indicate it's a job field
          >
            <option value="" selected disabled>
              Select
            </option>
            {subCategoryDropDown.map((item, i) => (
              <option key={i} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="postFormInputContainer">
          <label>Job Url</label>
          <input
            className="postFormInput"
            name="jobUrl"
            placeholder="Input Url"
            onChange={(e) => handleInputChange(e, 0, true)} // Passing true to indicate it's a job field
          />
        </div>
      </div> */}
      <div className="input-group-array">
        <div className="postFormInputContainer50">
          <label className="allLabelsInForm">Job Category</label>
          {/* <select
            className="form-select"
            aria-label="Default select example"
            name="jobCategoriesId"
            onChange={(e) => handleInputChange(e, 0, true)} // Passing true to indicate it's a job field
          >
            <option value="" selected disabled>
              Select
            </option>
            {jobCategoryDropdown.map((item, i) => (
              <option key={i} value={item.value}>
                {item.label}
              </option>
            ))}
          </select> */}
          <select
            value={jobCategoryId}
            onChange={(e) => setJobCategoryId(e.target.value)}
            required
          >
            <option value="">Select a Category</option>
            {jobCategoryDropdown.map((item, i) => (
              <option key={i} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        {/* <div className="datepicker postFormInputContainer50">
        <label className="allLabelsInForm">End Date</label>
          <DatePicker
            className="inputDatePicker"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div> */}
      </div>
      <hr />
      {/* {formData.jobsAndSections.map((section, index) => (
        <div key={index} className="sectionContainer">
          <h3 className="sectionH3">Sections</h3>
          <div className="postFormInputContainer">
            <div className="input-group-array">
              <div className="input-group-block">
                <label>Section Name</label>
                <input
                  type="text"
                  className="postFormInput"
                  placeholder="Input Value"
                  name="sectionName"
                  onChange={(e) => handleInputChange(e, index)}
                />
              </div>
              <div className="input-group-block">
                <label>Section Description</label>
                <textarea
                  className="postFormInput postFormInputTextarea"
                  name="sectionDescription"
                  onChange={(e) => handleInputChange(e, index)}
                ></textarea>
              </div>
            </div>
            <label>Section Type</label>
            <select
              type="text"
              className="postFormInput"
              placeholder="Input Value"
              name="jobTypesId"
              onChange={(e) => handleInputChange(e, index)}
            >
               <option value="" selected disabled>
              Select
            </option>
            {jobTypes.map((item, i) => (
              <option key={i} value={item.value}>
                {item.label}
              </option>
            ))}
            </select>
          </div>
        </div>
      ))} */}
      {/* <div className="btnContainerSection">
        <button className="addCompanyBTN" onClick={addSection}>
          Add Section
        </button>
      </div> */}
      <div className="allFormBtnContainers">
        <button onClick={submitForm}>Add Company</button>
        <button onClick={close}>Cancel</button>
      </div>
    </div>
  );
}

export default AddSubCat;
