import React from "react";

const benefitsData = [
  {
    icon: "🎯",
    title: "Job-Ready Digital Marketing Skills",
    description:
      "Master SEO, Google Ads, Meta Ads, Social Media Marketing, and Performance Marketing with real-world projects and practical training.",
    keywords: ["SEO Training", "Google Ads", "Meta Ads", "Social Media Marketing"]
  },
  {
    icon: "💼",
    title: "Live Projects & Case Studies",
    description:
      "Work on live campaigns and real business case studies to gain hands-on experience in digital marketing strategies and lead generation.",
    keywords: ["Live Campaigns", "Case Studies", "Lead Generation"]
  },
  {
    icon: "⚡",
    title: "100% Practical Training",
    description:
      "No theory overload. Learn by doing with step-by-step implementation of SEO optimization, paid ads setup, and analytics tracking.",
    keywords: ["Practical Training", "SEO Optimization", "Analytics"]
  },
  {
    icon: "🎓",
    title: "Certification & Placement Assistance",
    description:
      "Receive a recognized Digital Marketing certification and get support with resume building, interview preparation, and job placement guidance.",
    keywords: ["Certification", "Job Placement", "Career Support"]
  },
  {
    icon: "💰",
    title: "Freelancing & Client Acquisition Training",
    description:
      "Learn how to find clients, close deals, and generate consistent income through freelance digital marketing services.",
    keywords: ["Freelancing", "Client Acquisition", "Income Generation"]
  },
  {
    icon: "♾️",
    title: "Lifetime Access & Mentorship Support",
    description:
      "Get lifetime access to course materials, updates, and ongoing mentorship to stay ahead in the digital marketing industry.",
    keywords: ["Lifetime Access", "Mentorship", "Course Updates"]
  },
];

const Benefits = () => {
  return (
    <section
      className="bg-gradient-to-b from-white via-blue-50 to-white py-20 px-6"
      id="digital-marketing-course-benefits"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Eyebrow text */}
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-200">
            Why Choose Our Program
          </span>

          {/* SEO Optimized Heading */}
          <h2 
            id="benefits-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Benefits of Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Digital Marketing Course
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our <strong>Digital Marketing Training Program</strong> is designed to help students,
            entrepreneurs, and professionals build high-income skills in{" "}
            <strong>SEO</strong>, <strong>Google Ads</strong>,{" "}
            <strong>Social Media Marketing</strong>, and{" "}
            <strong>Performance Marketing</strong>.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefitsData.map((item, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Keywords tags for SEO */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {item.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Additional Value Props - SEO Rich Content */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-10 text-white shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">90 Days</div>
              <p className="text-blue-100">Complete Digital Marketing Training</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">50+ Projects</div>
              <p className="text-blue-100">Hands-on Practical Experience</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100%</div>
              <p className="text-blue-100">Job & Freelancing Support</p>
            </div>
          </div>
        </div>

        {/* SEO Content Block */}
        <div className="mt-16 bg-white rounded-2xl p-10 border border-blue-100 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What You'll Master in Our Digital Marketing Program
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong>Search Engine Optimization (SEO):</strong> On-page SEO, off-page SEO, technical SEO, keyword research, and rank tracking
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong>Paid Advertising:</strong> Google Ads (Search, Display, Shopping), Meta Ads (Facebook & Instagram), LinkedIn Ads
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong>Social Media Marketing:</strong> Content strategy, community management, influencer marketing, viral campaigns
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong>Content Marketing:</strong> Copywriting, blog writing, content planning, email marketing campaigns
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong>Analytics & Tracking:</strong> Google Analytics, Google Tag Manager, conversion tracking, ROI analysis
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong>Conversion Optimization:</strong> Landing page design, A/B testing, funnel optimization, lead generation
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to start your digital marketing journey?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-10 py-4 rounded-lg text-lg hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-200 transition-all duration-300 hover:scale-105 active:scale-95">
            Enroll in Digital Marketing Course Today
          </button>
        </div>

      </div>
    </section>
  );
};

export default Benefits;