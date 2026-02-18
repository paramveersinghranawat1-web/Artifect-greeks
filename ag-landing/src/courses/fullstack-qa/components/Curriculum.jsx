import React, { useState } from "react";

const modules = [
  {
    icon: "🧪",
    title: "Software Testing Fundamentals",
    duration: "2 Weeks",
    level: "Beginner",
    topics: [
      "SDLC & STLC Concepts",
      "Types of Testing (Manual & Automation)",
      "Bug Life Cycle & Defect Reporting",
      "Test Case Writing & Execution",
      "Agile & Scrum Methodology"
    ],
    skills: ["Manual Testing", "Test Cases", "Bug Reporting"],
  },
  {
    icon: "📋",
    title: "Manual Testing & QA Documentation",
    duration: "2 Weeks",
    level: "Beginner to Intermediate",
    topics: [
      "Requirement Analysis",
      "Test Plan & Test Scenario Writing",
      "Functional & Regression Testing",
      "Smoke & Sanity Testing",
      "JIRA for Bug Tracking"
    ],
    skills: ["JIRA", "Test Planning", "Functional Testing"],
  },
  {
    icon: "🤖",
    title: "Automation Testing with Selenium",
    duration: "3 Weeks",
    level: "Intermediate",
    topics: [
      "Java Basics for Automation",
      "Selenium WebDriver Architecture",
      "Locators & XPath",
      "TestNG Framework",
      "Data-Driven Testing"
    ],
    skills: ["Selenium", "TestNG", "Automation Framework"],
  },
  {
    icon: "🌐",
    title: "API Testing & Postman",
    duration: "2 Weeks",
    level: "Intermediate",
    topics: [
      "API Basics (REST & JSON)",
      "Postman Tool Usage",
      "Request & Response Validation",
      "Status Codes & Authentication",
      "API Automation Basics"
    ],
    skills: ["API Testing", "Postman", "REST APIs"],
  },
  {
    icon: "⚡",
    title: "Performance & Security Testing",
    duration: "2 Weeks",
    level: "Intermediate",
    topics: [
      "JMeter Basics",
      "Load & Stress Testing",
      "Performance Test Reports",
      "Basic Security Testing Concepts",
      "Vulnerability Basics"
    ],
    skills: ["JMeter", "Load Testing", "Performance Analysis"],
  },
  {
    icon: "🚀",
    title: "Live Projects & Interview Preparation",
    duration: "2 Weeks",
    level: "Advanced",
    topics: [
      "Real-Time Project Testing",
      "Automation Framework Creation",
      "Resume & LinkedIn Optimization",
      "Mock Interviews",
      "Placement Preparation"
    ],
    skills: ["Framework Design", "Interview Prep", "Real Project Experience"],
  },
];

const Curriculum = () => {
  const [activeModule, setActiveModule] = useState(null);

  return (
    <section
      className="bg-gradient-to-b from-gray-50 via-white to-blue-50 py-20 px-6"
      id="fullstack-qa-course-curriculum"
      aria-labelledby="curriculum-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-200">
            Complete Learning Path
          </span>

          <h2 
            id="curriculum-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Full Stack QA Course{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Curriculum
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Our comprehensive <strong>Full Stack QA Training Program</strong> covers{" "}
            <strong>Manual Testing</strong>, <strong>Automation Testing</strong>,{" "}
            <strong>API Testing</strong>, <strong>Performance Testing</strong>, and real-world live projects.
            This industry-focused curriculum is designed to make you{" "}
            <strong>job-ready QA Engineer within 90 days</strong>.
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
              <div className="text-sm text-gray-600">Hands-on Exercises</div>
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

              <div className="p-6">
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

                <button
                  onClick={() => setActiveModule(activeModule === index ? null : index)}
                  className="mt-4 w-full text-center text-sm font-semibold text-blue-600 hover:text-blue-700 py-2 hover:bg-blue-50 rounded-lg transition-colors"
                  aria-expanded={activeModule === index}
                >
                  {activeModule === index ? "Show Less ↑" : "View Details →"}
                </button>

                {activeModule === index && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100 animate-fadeIn">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      This module includes live instructor-led sessions, hands-on assignments,
                      real-time project practice, and interview-focused preparation.
                      You'll receive personalized feedback and access to recorded sessions.
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to become a Full Stack QA Engineer?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-10 py-4 rounded-lg text-lg hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-200 transition-all duration-300 hover:scale-105 active:scale-95">
            Download Full Curriculum PDF
          </button>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Curriculum;
