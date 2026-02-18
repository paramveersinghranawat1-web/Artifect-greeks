import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import Curriculum from "../components/Curriculum";
import Benefits from "../components/Benefits";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import LeadForm from "../components/LeadForm";

const CyberOptin = () => {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Cyber Security Course | Artifect Greks</title>
        <meta
          name="description"
          content="Become a Certified Cyber Security Professional. Learn Ethical Hacking, Network Security, and Penetration Testing with real-world labs."
        />
      </Helmet>

      {/* ================= MAIN PAGE ================= */}
      <main className="bg-gray-50">

        {/* Hero Section */}
        <Hero />

        {/* Benefits Section */}
        <Benefits />

        {/* Curriculum Section */}
        <Curriculum />

        {/* Reviews Section */}
        <Reviews />

        {/* FAQ Section */}
        <FAQ />

        {/* ================= LEAD CAPTURE SECTION ================= */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-3xl font-bold text-center mb-6">
              Secure Your Seat Now
            </h2>

            <LeadForm
              courseName="Cyber Security"
              redirectUrl="/courses/cyber-security/payment"
            />

          </div>
        </section>

      </main>
    </>
  );
};

export default CyberOptin;
