import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "../Layout/Sidebar"
import LandingPage from "../pages/landingPage";
import Resume from "../pages/resume";
import Logging from "../pages/Logging";
import NoPageFound from "../pages/NoPageFound";
import ResponsivenessDemo from "../pages/ResponsivenessDemo";
import ProfilePage from "../pages/Profile";
import FunctionDemo from "../pages/FunctionDemo";
import RESTDemo from "../pages/RestDemo";
import ReactDemo from "../pages/ReactRouteDemo";
import FormDemo from "../pages/FormDemo";
import StateDemo from "../pages/StateDemo";
import AuthenticationDemo from "../pages/AuthenticationDemo";
import HookDemo from "../pages/HooksDemo";
import ExpressDemo from "../pages/ExpressDemo";
import SQLDemo from "../pages/SQLDemo";
import KeyConcepts from "../pages/KeyConcepts";


function AppRouter() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="content-container">
      {!collapsed ? (
        <Sidebar />
      ) : (
        <div className="arrow" onClick={toggleSidebar}>
          &#9664; {/* Left arrow icon or any other icon you prefer */}
        </div>
      )}
        <div className="currentPage">
          <Routes>
            <Route path ="/" element={<LandingPage />} />
            <Route path ="/Resume" element={<Resume />} />
            <Route path ="/Logging" element={<Logging />} />
            <Route path ="/ResponseDemo" element={<ResponsivenessDemo />} />
            <Route path ="/Profile" element={<ProfilePage />} />
            <Route path ="/Functions" element={<FunctionDemo />} />
            <Route path ="/REST&Requests" element={<RESTDemo />} />
            <Route path ="/React" element={<ReactDemo />} />
            <Route path ="/Forms" element={<FormDemo />} />
            <Route path ="/State" element={<StateDemo />} />
            <Route path ="/Authentication" element={<AuthenticationDemo />} />
            <Route path ="/Hooks" element={<HookDemo />} />
            <Route path ="/Express" element={<ExpressDemo />} />
            <Route path ="/SQL" element={<SQLDemo />} />
            <Route path ="/KeyConcepts" element={<KeyConcepts />} />
            <Route path="*" element={<NoPageFound />} />
          </Routes>
        </div>
    </div>
  );
}


export { AppRouter };
