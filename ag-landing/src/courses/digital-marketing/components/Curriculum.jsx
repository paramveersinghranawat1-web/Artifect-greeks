import React, { useState } from "react";

const modules = [
  {
    icon: "🔍",
    title: "Search Engine Optimization (SEO) Training",
    duration: "3 Weeks",
    level: "Beginner to Advanced",
    topics: [
      "On-Page SEO Optimization",
      "Technical SEO Fundamentals",
      "Keyword Research & Competitor Analysis",
      "Google Search Console & Analytics",
      "SEO Strategy for Ranking Websites"
    ],
    skills: ["SEO Audit", "Link Building", "Local SEO"],
  },
  {
    icon: "📊",
    title: "Google Ads & Performance Marketing",
    duration: "3 Weeks",
    level: "Intermediate",
    topics: [
      "Google Search & Display Campaign Setup",
      "Conversion Tracking & Pixel Setup",
      "Keyword Bidding Strategy",
      "Ad Copywriting for High CTR",
      "Campaign Optimization Techniques"
    ],
    skills: ["PPC Management", "A/B Testing", "ROI Analysis"],
  },
  {
    icon: "📱",
    title: "Social Media Marketing & Meta Ads",
    duration: "2 Weeks",
    level: "Beginner to Advanced",
    topics: [
      "Facebook & Instagram Ads Strategy",
      "Audience Targeting & Retargeting",
      "Creative Ad Funnel Structure",
      "Lead Generation Campaigns",
      "Scaling Profitable Campaigns"
    ],
    skills: ["Meta Business Suite", "Social Analytics", "Community Management"],
  },
  {
    icon: "✍️",
    title: "Content Marketing & Branding",
    duration: "2 Weeks",
    level: "Beginner",
    topics: [
      "Content Strategy Planning",
      "Reels & Short Video Strategy",
      "Personal Branding Framework",
      "Copywriting for Conversions",
      "Organic Growth Techniques"
    ],
    skills: ["Content Calendar", "Brand Voice", "Storytelling"],
  },
  {
    icon: "💼",
    title: "Email Marketing & Automation",
    duration: "1 Week",
    level: "Intermediate",
    topics: [
      "Email Campaign Strategy",
      "Marketing Automation Workflows",
      "List Building & Segmentation",
      "Email Copywriting & Design",
      "Performance Tracking & Optimization"
    ],
    skills: ["Mailchimp", "Drip Campaigns", "Newsletter Design"],
  },
  {
    icon: "🚀",
    title: "Real Client Projects & Internship",
    duration: "2 Weeks",
    level: "Advanced",
    topics: [
      "Live Campaign Execution",
      "Portfolio Building",
      "Client Communication Skills",
      "Freelancing & Agency Model",
      "Job Placement Preparation"
    ],
    skills: ["Project Management", "Client Pitching", "Case Studies"],
  },
];

const Curriculum = () => {
  const [activeModule, setActiveModule] = useState(null);

  return (
    <section
      className="bg-gradient-to-b from-gray-50 via-white to-blue-50 py-20 px-6"
      id="digital-marketing-course-curriculum"
      aria-labelledby="curriculum-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Eyebrow Badge */}
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-200">
            Complete Learning Path
          </span>

          {/* SEO Optimized Heading */}
          <h2 
            id="curriculum-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Digital Marketing Course{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Curriculum
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Our comprehensive <strong>Digital Marketing Training Program</strong> covers{" "}
            <strong>SEO</strong>, <strong>Google Ads</strong>,{" "}
            <strong>Social Media Marketing</strong>, and real-world client projects.
            This industry-focused curriculum is designed to make you{" "}
            <strong>job-ready within 90 days</strong>.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">6</div>
              <div className="text-sm text-gray-600">Core Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">30+</div>
              <div className="text-sm text-gray-600">Topics Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">Hands-on Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">90</div>
              <div className="text-sm text-gray-600">Days Duration</div>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {modules.map((module, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
            >
              {/* Module Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-14 h-14 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-3xl backdrop-blur-sm">
                    {module.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-semibold bg-white bg-opacity-20 px-3 py-1 rounded-full backdrop-blur-sm inline-block mb-1">
                      Module {index + 1}
                    </div>
                    <div className="text-sm opacity-90">{module.duration}</div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                  {module.title}
                </h3>
                <div className="mt-2 text-sm opacity-90">
                  📚 {module.level}
                </div>
              </div>

              {/* Module Content */}
              <div className="p-6">
                {/* Topics List */}
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
                  What You'll Learn
                </h4>
                <ul className="space-y-3 mb-6">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-tight">{topic}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Tags */}
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {module.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => setActiveModule(activeModule === index ? null : index)}
                  className="mt-4 w-full text-center text-sm font-semibold text-blue-600 hover:text-blue-700 py-2 hover:bg-blue-50 rounded-lg transition-colors"
                  aria-expanded={activeModule === index}
                >
                  {activeModule === index ? "Show Less ↑" : "View Details →"}
                </button>

                {/* Expanded Content */}
                {activeModule === index && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100 animate-fadeIn">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      This module includes live instructor-led sessions, hands-on assignments, 
                      practical exercises, and real-world case studies. You'll receive personalized 
                      feedback and have access to recorded sessions for review.
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Comprehensive Topics List for SEO */}
        <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Complete Digital Marketing Skills You'll Master
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-sm">🔍</span>
                SEO Mastery
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• On-page & Off-page SEO</li>
                <li>• Technical SEO Audits</li>
                <li>• Keyword Research Tools</li>
                <li>• Link Building Strategies</li>
                <li>• Local SEO Optimization</li>
                <li>• SEO Content Writing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-sm">📊</span>
                Paid Advertising
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Google Ads Campaigns</li>
                <li>• Facebook & Instagram Ads</li>
                <li>• LinkedIn Advertising</li>
                <li>• Display & Video Ads</li>
                <li>• Remarketing Strategies</li>
                <li>• Conversion Optimization</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-sm">📱</span>
                Social & Content
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Social Media Strategy</li>
                <li>• Content Marketing Plans</li>
                <li>• Email Marketing Automation</li>
                <li>• Video Marketing & Reels</li>
                <li>• Influencer Marketing</li>
                <li>• Analytics & Reporting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Learning Path Timeline */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-10 text-white">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Your 90-Day Learning Journey
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 backdrop-blur-sm">
                📚
              </div>
              <div className="font-bold text-lg mb-2">Weeks 1-3</div>
              <p className="text-sm text-blue-100">Foundation Building<br/>SEO & Fundamentals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 backdrop-blur-sm">
                🎯
              </div>
              <div className="font-bold text-lg mb-2">Weeks 4-6</div>
              <p className="text-sm text-blue-100">Paid Advertising<br/>Google & Meta Ads</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 backdrop-blur-sm">
                ✍️
              </div>
              <div className="font-bold text-lg mb-2">Weeks 7-10</div>
              <p className="text-sm text-blue-100">Content & Social<br/>Brand Building</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 backdrop-blur-sm">
                🚀
              </div>
              <div className="font-bold text-lg mb-2">Weeks 11-13</div>
              <p className="text-sm text-blue-100">Live Projects<br/>Portfolio Building</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to master digital marketing?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-10 py-4 rounded-lg text-lg hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-200 transition-all duration-300 hover:scale-105 active:scale-95">
              Download Full Curriculum PDF
            </button>
            <button className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-lg text-lg border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300">
              Schedule a Free Demo Class
            </button>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Curriculum;