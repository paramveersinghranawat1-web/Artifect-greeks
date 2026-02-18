// courses/cyber-security/index.jsx

import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Optin from "./optin";
import Payment from "./payment";
import ThankYou from "./thankyou";
import Brochure from "./brochure";

const CyberSecurityIndex = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log("Visited:", location.pathname);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="optin" element={<Optin />} />
      <Route path="payment" element={<Payment />} />
      <Route path="thankyou" element={<ThankYou />} />
      <Route path="brochure" element={<Brochure />} />
      
      {/* Default Redirect */}
      <Route path="/" element={<Navigate to="optin" replace />} />
    </Routes>
  );
};

export default CyberSecurityIndex;
