// App.js

import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../../Components/Footer/footer";
import Layout from "../../Components/Layout/layout";
import Login from "../../Components/Login/login";
import Nav from "../../Components/Nav/nav";
import RequireAuth from "../../Components/RequireAuth";
import Home from "../Home/home";
import JobDetail from "../JobDetail/jobDetail";
import "./App.css";
import useFetch from "../../Hooks/useFetch";
import JobResults from "../../Components/JobSearchResults/JobResults";
import PostJob from "../../Components/Forms/PostJob/postJob";
import AddCompany from "../../Components/Admin/Forms/AddCompany/addCompany";
import EditCompany from "../../Components/Admin/Forms/EditCompany/editCompany";
import AllJobResults from "../../Components/allJobs";
import OpenJobs from "../../Components/OpenJobs/openJobs";
import ViewService from "../../Components/ViewService/viewService";
import ViewLinkedIn from "../../Components/ViewService/viewLinkedIn";
import ViewInterview from "../../Components/ViewService/viewInterview";
import ViewStudentPack from "../../Components/ViewService/viewStudentPack";
import ViewCoachingSesh from "../../Components/ViewService/viewCoachingSession";
import Companies from "../../Components/Companies/companies";
import JobResultsComp from "../../Components/JobSearchResults/jobResultsComp";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Consultation from "../../Components/ViewService/consultationView";
import RemoteMasterClass from "../../Components/ViewService/remoteMasterClass";
import IntroVideoView from "../../Components/ViewService/introVideoView";
import JobSubCategory from "../../Components/Admin/jobSubcategory/JobSubcategory";
import SignUp from "../../Components/Firebase/fireBaseSignUp";
import SignIn from "../../Components/Firebase/fireBaseSignIn";
import VerificationMessage from "../../Components/Firebase/firebaseMessageVerify";
import ProtectedRoute from "../../Components/Firebase/protectedRoute";
import ChatRoom from "../../Components/Firebase/chatRoom";
import BeforeServiceView from "../../Components/ViewService/beforeServiceView";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const handleLogin = () => {
    setIsAuthenticated(true);
    console.log("Logged");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const location = useLocation();

  const excludeNav = ["/login", "/AdminArea", "/chat"]


  const excludeFooter = ["/login", "/jobs/results", "/AdminArea", "/company/jobs/results", "/companies", "/signupFirebase", "/chat", "/purchaseservice"]

  const isExcludeNav = excludeNav.includes(location.pathname)
  const isExcludeFooter = excludeFooter.includes(location.pathname)

  return (
    <GoogleOAuthProvider clientId="549965724912-cjruqmhsblb5tet09cqf301m0aj7s3nl.apps.googleusercontent.com">
      <div className="App">
      {!isExcludeNav && <Nav/>}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<RequireAuth/>}>
          <Route path="/AdminArea" element={<PostJob />} />
          </Route>
          <Route path="/" element={<Home/>} />
          <Route path="/jobs/:id/:jobTitle" element={<JobDetail />} />
          
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          
          <Route path="/jobs/results" element={<JobResults />} />
          <Route path="/company/jobs/results" element={<JobResultsComp />} />
          <Route path="/allJobs/results" element={<AllJobResults/>} />
          <Route path="/companies" element={<Companies/>} />
          <Route path="/addCompany" element={<AddCompany />} />
          <Route path="/jobSubcategory" element={<JobSubCategory />} />
          <Route path="/editCompany/:id" element={<EditCompany />} />
          <Route path="/openJobs" element={<OpenJobs/>} />
          <Route path="/viewService" element={<ViewService/>} />
          <Route path="/viewLinkedIn" element={<ViewLinkedIn/>} />
          <Route path="/viewInterview" element={<ViewInterview/>} />
          <Route path="/viewLStudentPack" element={<ViewStudentPack/>} />
          <Route path="/viewCoachingSesh" element={<ViewCoachingSesh/>} />
          <Route path="/consult" element={<Consultation/>} />
          <Route path="/remoteMasterCL" element={<RemoteMasterClass/>} />
          <Route path="/viewIntroVideo" element={<IntroVideoView/>} />
          <Route path="/purchaseservice" element={<BeforeServiceView/>} />

          <Route path="/signupFirebase" element={<SignUp />} />
          <Route path="/signinFirebase" element={<SignIn />} />
          <Route path="/verify" element={<VerificationMessage />} />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <ChatRoom />
              </ProtectedRoute>
            }
          />


        </Route>
      </Routes>
      {!isExcludeFooter && <Footer />}
    </div>
    </GoogleOAuthProvider>
    
  );
}

export default App;
