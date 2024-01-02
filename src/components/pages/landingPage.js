import React from "react";
import AboutMePhoto from "../pictures/AboutMePhoto.png";

function LandingPage() {
  return (
    <div className="landing-main-container">
      <div className="landing-left-container">
        <img
          className="author-photo"
          src={AboutMePhoto}
          alt="VeryHandsomeAuthorPhoto"
        />
        <p className="About">About Me</p>
      </div>
      <div className="landing-right-container">
        <p>placeholder</p>
      </div>
    </div>
  );
}

export default LandingPage;
