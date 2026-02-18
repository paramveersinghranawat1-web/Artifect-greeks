import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import Curriculum from "../components/Curriculum";
import Benefits from "../components/Benefits";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import LeadForm from "../components/LeadForm";

const DigitalOptin = () => {
  return (
    <>
      {/* SEO Meta */}
      <Helmet>
        <title>Digital Marketing Course | Artifect Greks</title>
        <meta
          name="description"
          content="Join our Digital Marketing Course and master SEO, Google Ads, and Social Media Marketing. Limited seats available."
        />
      </Helmet>

      <main className="bg-gray-50">

        <Hero />
        <Benefits />
        <Curriculum />
        <Reviews />
        <FAQ />

        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              Secure Your Seat Now
            </h2>
            <LeadForm/>
          </div>
        </section>

      </main>
    </>
  );
};

export default DigitalOptin;
