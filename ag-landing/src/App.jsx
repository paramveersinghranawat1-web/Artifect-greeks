import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import WhatsAppCTA from "./components/common/WhatsAppCTA";
import Timer from "./components/common/Timer"; 
import ScrollToTop from "./components/common/ScrollToTop";


// Import Index.jsx for each course
import DigitalMarketingIndex from "./courses/digital-marketing/Pages/index";
import FullstackQAIndex from "./courses/fullstack-qa/Pages/index";
import DevOpsIndex from "./courses/devops/Pages/index";
import CyberSecurityIndex from "./courses/cyber-security/Pages/index";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Floating WhatsApp Button */}
      <WhatsAppCTA />

      {/* Timer Component */}
      <Timer />

      <Routes>
        {/* Default Home → Redirect to Digital Marketing */}
        <Route
          path="/"
          element={<Navigate to="/courses/digital-marketing/optin" replace />}
        />

        {/* Digital Marketing Routes */}
        <Route
          path="/courses/digital-marketing/*"
          element={<DigitalMarketingIndex />}
        />

        {/* Full Stack QA Routes */}
        <Route
          path="/courses/fullstack-qa/*"
          element={<FullstackQAIndex />}
        />

        {/* Cyber Security Routes */}
        <Route
          path="/courses/cyber-security/*"
          element={<CyberSecurityIndex />}
        />

        {/* DevOps Routes */}
        <Route
          path="/courses/devops/*"
          element={<DevOpsIndex />}
        />
      </Routes>
      <ScrollToTop /> 
      

      <Footer />
    </div>
  );
}

export default App;
