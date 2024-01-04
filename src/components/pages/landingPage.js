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
        <p className="About">About this Project:</p>
        <p className="Project-Paragraph">
          Welcome to my personal website and passion project! This project is
          meant to be a curated showcase of my skills and expertise tailored for
          potential employers. Navigating to the sidebar, you'll find dedicated
          pages highlighting various skills, each serving a comprehensive
          demonstration of my abilities. The header conveniently holds a link to
          my resume, providing a concise overview of my professional journey.
          The header also contains a login button, which will allow you to view
          more pages on the sidebar should you choose to create an account. This
          platform is not just a digital space; it's a dynamic representation of
          my dedication to personal and professional growth. Thank you for
          exploring and getting to know me through this portfolio — a reflection
          of the skills, creativity, and enthusiasm I bring to every endeavor.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
