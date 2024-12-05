import React from "react";
import "./venue.css"; // CSS for VenueNavigation layout

function VenueNavigation() {
  return (
    <div className="venue-grid">
      <div className="venue-section indoor-navigation">
        <h2>Indoor Navigation</h2>
        <iframe
          src="https://storage.googleapis.com/mi-hwp/index.html?appUserRoles=football,hwp&venue=SOFI_STADIUM"
          title="Indoor Navigation"
          style={{ width: "100%", height: "100%", border: "none" }}
        ></iframe>
      </div>
      <div className="venue-section foot-traffic">
        <h2>Foot Traffic</h2>
        <iframe
          src="/foottraffic.html"
          title="Foot Traffic"
          style={{ width: "100%", height: "100%", border: "none" }}
        ></iframe>
      </div>
      <div className="venue-section live-feed">
        <h2>Live Camera Feed</h2>
        <video
          src="/data/livefeed.mov" // Replace with your video path
          autoPlay
          muted
          playsInline
          loop
          className="responsive-video"
        ></video>
      </div>
      <div className="venue-section crowd-density">
        <h2>Crowd Density & Management</h2>
        <iframe
          src="/crowd_heart_rate_map_with_ecg_animation.html"
          title="Crowd Density & Management"
          style={{ width: "100%", height: "100%", border: "none" }}
        ></iframe>
      </div>
    </div>
  );
}

export default VenueNavigation;