// src/routes/AppRoutes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "@/pages/About";
import RealEstateLanding from "@/pages/LandingPage";
import Layout from "@/layout/Layout";
import ContactForm from "@/pages/ContactPage";
import Projects from "@/pages/Projects";
import Media from "@/pages/Media";
import MissionAndVision from "@/pages/MissionAndVision";
import TheFortJodhpur from "@/pages/TheFortJodhpur";
import ShubhamParadise from "@/pages/ShubhamParadise";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* COMMON LAYOUT WITH NAVBAR */}
        <Route element={<Layout />}>
          <Route path="/" element={<RealEstateLanding />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/media" element={<Media />} />
          <Route path="/mission-&-vision" element={<MissionAndVision />} />
          <Route path="/the-fort-jodhpur" element ={<TheFortJodhpur />} />
          <Route path="/Shubham-Paradise" element={<ShubhamParadise />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
