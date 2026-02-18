import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import Curriculum from "../components/Curriculum";
import Benefits from "../components/Benefits";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import LeadForm from "../components/LeadForm";

const FullstackQAOptin = () => {
  return (
    <>
      {/* SEO Meta */}
      <Helmet>
        <title>FullStack QA Course | Artifect Greks</title>
        <meta
          name="description"
          content="Become a FullStack QA Engineer. Master Automation, Selenium, API Testing, and Modern Testing Frameworks."
        />
      </Helmet>

      <main className="bg-gray-50">

        <Hero />
        <Benefits />
        <Curriculum />
        <Reviews />
        <FAQ />

        {/* Lead Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              Join the QA Batch Today
            </h2>

            <LeadForm
              courseName="FullStack QA"
              redirectUrl="/courses/fullstack-qa/payment"
            />
          </div>
        </section>

      </main>
    </>
  );
};

export default FullstackQAOptin;
