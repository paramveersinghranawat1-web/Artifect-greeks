import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Optin from "./optin";
import Payment from "./payment";
import ThankYou from "./thankyou";
import Brochure from "./brochure";

const DevOpsIndex = () => {
  return (
    <Routes>
      <Route path="optin" element={<Optin />} />
      <Route path="payment" element={<Payment />} />
      <Route path="thankyou" element={<ThankYou />} />
      <Route path="brochure" element={<Brochure />} />
      <Route path="/" element={<Navigate to="optin" replace />} />
    </Routes>
  );
};

export default DevOpsIndex;
