import React from "react";
import ResumePDF from "../../LoganBrownResume.pdf";

const ResumeButton = () => {
  const handleDownload = async () => {
    try {
      // Fetch the PDF file as an ArrayBuffer
      const response = await fetch(ResumePDF);
      const pdfData = await response.arrayBuffer();

      // Create a Blob with the PDF data
      const blob = new Blob([pdfData], { type: "application/pdf" });

      // Create a download link
      const downloadLink = document.createElement("a");
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = "LoganBrownResume.pdf"; // Specify the desired file name

      // Append the link to the document and trigger the click event
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Clean up by removing the link from the document
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return <button onClick={handleDownload}>download it here!</button>;
};

export default ResumeButton;
