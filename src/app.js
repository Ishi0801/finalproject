import React, { useState } from "react";
import LandingPage from "./components/landing.js"; // Landing Page Component
import Map from "./components/Map.js"; // Map Component
import VenueNavigation from "./components/venue.js"; // Venue Navigation Component
import "./app.css"; // CSS for fade-in and general styles

function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  const handleStart = () => {
    if (currentPage === "landing") {
      setCurrentPage("map"); // Transition from landing to map page
    } else if (currentPage === "map") {
      setCurrentPage("venue"); // Transition from map to venue page
    } else if (currentPage === "venue") {
    //   setCurrentPage("ecg"); // Transition from venue to ECG page
    // } else if (currentPage === "ecg") {
      setCurrentPage("test2"); // Transition from ECG to Test2 page
    } else if (currentPage === "test2") {
      setCurrentPage("test_sport"); // Transition from Test2 to Test Sport page
    }
  };

  const handleBack = () => {
    if (currentPage === "map") {
      setCurrentPage("landing"); // Go back to landing page
    } else if (currentPage === "venue") {
      setCurrentPage("map"); // Go back to map page
    // } else if (currentPage === "ecg") {
    //   setCurrentPage("venue"); // Go back to venue page
    } else if (currentPage === "test2") {
      setCurrentPage("venue"); // Go back to ECG page
    } else if (currentPage === "test_sport") {
      setCurrentPage("test2"); // Go back to Test2 page
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          {currentPage === "map"
            ? "Explore Nearby Venues"
            : currentPage === "venue"
            ? "Venue Navigation"
            // : currentPage === "ecg"
            // ? "Crowd Management"
            : currentPage === "test2"
            ? "Olympics Trends"
            : currentPage === "test_sport"
            ? "Live Game Standings"
            : "Olympics Dashboard"}
        </h1>
      </header>
      <main className="app-content">
        {currentPage === "landing" && <LandingPage onStart={handleStart} />}
        {currentPage === "map" && (
          <div className="map-page fade-in">
            <Map />
            <div className="button-container">
              <button className="back-button" onClick={handleBack}>
                Go Back
              </button>
              <button className="next-button" onClick={handleStart}>
                Next
              </button>
            </div>
          </div>
        )}
        {currentPage === "venue" && (
          <div className="venue-container fade-in">
            <VenueNavigation />
            <div className="button-container">
              <button className="back-button" onClick={handleBack}>
                Go Back
              </button>
              <button className="next-button" onClick={handleStart}>
                Next
              </button>
            </div>
          </div>
        )}
        {/* {currentPage === "ecg" && (
          <div className="ecg-page fade-in">
            <iframe
              src="/crowd_heart_rate_map_with_ecg_animation.html"
              title="Crowd Heart Rate Map"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            ></iframe>
            <div className="button-container">
              <button className="back-button" onClick={handleBack}>
                Go Back
              </button>
              <button className="next-button" onClick={handleStart}>
                Next
              </button>
            </div>
          </div>
        )} */}
        {currentPage === "test2" && (
          <div className="test2-page fade-in">
            <iframe
              src="/test2 (1).html"
              title="Test Page 2"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            ></iframe>
            <div className="button-container">
              <button className="back-button" onClick={handleBack}>
                Go Back
              </button>
              <button className="next-button" onClick={handleStart}>
                Next
              </button>
            </div>
          </div>
        )}
        {currentPage === "test_sport" && (
          <div className="test-sport-page fade-in">
            <iframe
              src="/test_sport.html"
              title="Test Sport Page"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block", 
                margin: "0 auto", 
              }}
            ></iframe>
            <div className="button-container">
              <button className="back-button" onClick={handleBack}>
                Go Back
              </button>
            </div>
          </div>
        )}
      </main>
      <footer className="app-footer">
        <p>© 2024 Olympics Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;