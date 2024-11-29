import React, { useState, useEffect } from "react";

const AthleteSection = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // Fetch the content of test2.html
    fetch("/workspaces/dsci554-hw/PROJECT/public/test2.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load HTML file: ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => {
        setHtmlContent(data); // Set the fetched HTML content
      })
      .catch((error) => console.error("Error fetching HTML file:", error));
  }, []);

  return (
    <section className="athlete-section" style={{ background: "#f4f4f9" }}>
      <h3 style={{ textAlign: "center", color: "#4CAF50" }}>Athlete Highlights</h3>
      <div
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "auto",
          overflow: "hidden",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Render the HTML content */}
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>
    </section>
  );
};

export default AthleteSection;