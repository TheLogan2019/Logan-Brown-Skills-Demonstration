import React from "react";
import AboutMePhoto from "../pictures/AboutMePhoto.png";
import Landingpageworkingphoto from "../pictures/Landingpageworkingphoto.png";

function LandingPage() {
  return (
    <div className="landing-main-container">
      <div className="landing-left-container">
        <img
          className="author-photo"
          src={AboutMePhoto}
          alt="VeryHandsomeAuthorPhoto"
        />
        <h2 className="AboutL">About Me:</h2>
        <p className="Me-Paragraph">
          Hi! My name is Logan. I am currently an IT professional with a passion
          for web development based in Kansas. Over the past four years, I've
          immersed myself in the dynamic world of information technology, honing
          my skills in various roles. For 3 years, I worked as an Incident
          Technology Support Specialist for the Bureau of Indian Affairs in my
          home town. Being that that was a seasonal position, I spent the off
          season pursuing other IT roles while simultaniously supporting the BIA
          with tasks such as prescribed burns.
        </p>
        <p className="Me-Paragraph">
          In the past year, I've been dedicated to a full-time help desk
          position while simultaniously pursuing my education at BloomTech, from
          which I recently graduated. My journey has equipped me with a robust
          set of skills and knowledge in web development, making me eager to
          contribute to innovative projects. As I look ahead, I'm hopeful and
          excited about the prospect of expanding my experiences with a new role
          in the near future. I invite you to explore my site and discover more
          about my professional journey. Enjoy your visit!
        </p>
      </div>
      <div className="landing-right-container">
        <img
          className="author-photo"
          src={Landingpageworkingphoto}
          alt="VeryHandsomeAuthorPhotoFromBehind"
        />
        <h2 className="AboutR">About this Project:</h2>
        <p className="Project-Paragraph">
          Welcome to my personal website and passion project! This project is
          meant to be a curated showcase of my skills and expertise tailored for
          potential employers.
        </p>
        <p className="Project-Paragraph">
          Navigating to the sidebar, you'll find dedicated pages highlighting
          various skills, each serving a comprehensive demonstration of my
          abilities. The header conveniently holds a link to my resume,
          providing a concise overview of my professional journey. The header
          also contains a login button, which will allow you to view more pages
          on the sidebar should you choose to create an account.
        </p>
        <p className="Project-Paragraph">
          This platform is not just a digital space; it's a dynamic
          representation of my dedication to personal and professional growth.
          Thank you for exploring and getting to know me through this portfolio
          — a reflection of the skills, creativity, and enthusiasm I bring to
          every endeavor.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
