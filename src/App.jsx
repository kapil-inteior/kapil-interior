import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ServicesSection from "./components/ServicesSection";
import Contact from "./components/Contact";
import AllProjects from "./components/AllProjects";
import Navbar from "./components/Navbar";
import RecentProjects from "./components/RecentProjects";
import Testimonial from "./components/Testimonial";
import Bathroom from "./components/Services/Bathroom";
import Crockery from "./components/Services/Crockery";
import FalseCeiling from "./components/Services/FalseCeiling";
import Light from "./components/Services/Light";
import ModularKitchen from "./components/Services/ModularKitchen";
import SpaceSaving from "./components/Services/SpaceSaving";
import Storage from "./components/Services/Storage";
import StudyTable from "./components/Services/StudyTable";
import TvUnits from "./components/Services/TvUnits";
import WallPaint from "./components/Services/WallPaint";
import Wallpaper from "./components/Services/Wallpaper";

function App() {
  return (
    <Router>
      <Navbar />
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

        <Route path="/projects" element={<AllProjects />} />
        <Route path="/services/bathroom" element={<Bathroom />} />
        <Route path="/services/crockery-units" element={<Crockery />} />
        <Route path="/services/false-ceiling" element={<FalseCeiling />} />
        <Route path="/services/light" element={<Light />} />
        <Route path="/services/modular-kitchen" element={<ModularKitchen />} />
        <Route
          path="/services/space-saving-furniture"
          element={<SpaceSaving />}
        />
        <Route path="/services/storage-&-wardrobe" element={<Storage />} />
        <Route path="/services/study-tables" element={<StudyTable />} />
        <Route path="/services/tv-units" element={<TvUnits />} />
        <Route path="/services/wall-paint" element={<WallPaint />} />
        <Route path="/services/wallpaper" element={<Wallpaper />} />
      </Routes>
    </Router>
  );
}

export default App;
