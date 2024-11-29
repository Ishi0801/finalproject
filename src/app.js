import React from 'react';
import './app.css';
import Header from './components/header';
import MainBanner from './components/main';
import HealthSafetyMonitor from './components/4';
import VenueNavigation from './components/3';
import AthleteSection from './components/2';
import CrowdManagement from './components/1';
import Footer from './components/footer';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <MainBanner />
      <div className="container my-4">
        {/* <section id="health-safety">
          <HealthSafetyMonitor />
        </section> */}
        <section id="venues">
          <VenueNavigation />
        </section>
        <section id="athletes">
          <AthleteSection />
        </section>
        {/* <section id="crowd-management">
          <CrowdManagement />
        </section> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;