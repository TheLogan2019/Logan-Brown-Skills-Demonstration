import React, { useState } from "react";
import Sidebar from "./Sidebar";
import LandingPage from "../pages/landingPage";

function CurrentContent() {
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
      <LandingPage />
    </div>
  );
}

export default CurrentContent;
