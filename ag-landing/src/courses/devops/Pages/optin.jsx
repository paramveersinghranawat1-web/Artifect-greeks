import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import Curriculum from "../components/Curriculum";
import Benefits from "../components/Benefits";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import LeadForm from "../components/LeadForm";

const DevOpsOptin = () => {
  return (
    <>
      {/* SEO Meta */}
      <Helmet>
        <title>DevOps Course | Artifect Greks</title>
        <meta
          name="description"
          content="Master DevOps, Docker, Kubernetes, CI/CD and Cloud Deployment with our industry-ready DevOps program."
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
              Start Your DevOps Journey Today
            </h2>

            <LeadForm
              courseName="DevOps"
              redirectUrl="/courses/devops/payment"
            />
          </div>
        </section>

      </main>
    </>
  );
};

export default DevOpsOptin;
