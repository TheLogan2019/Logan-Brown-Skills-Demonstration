import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../Layout/Sidebar"
import LandingPage from "../pages/landingPage";
import Resume from "../pages/resume";
import Logging from "../pages/Logging";
import NoPageFound from "../pages/NoPageFound";


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
          <Route path="*" element={<NoPageFound />} />
          </Routes>
        </div>
    </div>
  );
}


export { AppRouter };
