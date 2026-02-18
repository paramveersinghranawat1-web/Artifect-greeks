// courses/fullstack-qa/index.jsx

import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Optin from "./optin";
import Payment from "./payment";
import ThankYou from "./thankyou";
import Brochure from "./brochure";

const FullstackQAIndex = () => {
  const location = useLocation();

  // Track page visit (for analytics / debugging)
  useEffect(() => {
    console.log("Visited:", location.pathname);
  }, [location.pathname]);

  return (
    <Routes>
      {/* Main Pages */}
      <Route path="optin" element={<Optin />} />
      <Route path="payment" element={<Payment />} />
      <Route path="thankyou" element={<ThankYou />} />
      <Route path="brochure" element={<Brochure />} />

      {/* Default Redirect */}
      <Route path="/" element={<Navigate to="optin" replace />} />

      {/* Fallback Route (optional but recommended) */}
      <Route path="*" element={<Navigate to="optin" replace />} />
    </Routes>
  );
};

export default FullstackQAIndex;
