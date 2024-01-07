import React from "react";
import ResumeButton from "../common/ResumeButton";

function Resume() {
  return (
    <div className="Resume-Main-container">
      <p>Thank you for your interest in my Resume!</p>
      <p>You can {<ResumeButton />}</p>
    </div>
  );
}

export default Resume;
