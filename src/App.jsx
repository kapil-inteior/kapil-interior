import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ServicesSection from './components/ServicesSection';
import RecentProjects from './components/RecentProjects';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import AllProjects from './components/AllProjects';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <LandingPage />
            <RecentProjects />
            <ServicesSection />
            <Testimonial />
            <Contact />
          </>
        }
      />
      <Route path="/all-projects" element={<AllProjects />} />
    </Routes>
  );
}

export default App;