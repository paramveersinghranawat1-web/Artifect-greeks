import React from "react";

const benefitsData = [
  {
    icon: "🧪",
    title: "Job-Ready Full Stack QA Skills",
    description:
      "Master Manual Testing, Automation Testing, API Testing, and Database Testing with real-world projects and industry-level practical training.",
    keywords: ["Manual Testing", "Automation Testing", "API Testing", "Software Testing"]
  },
  {
    icon: "💻",
    title: "Live Projects & Real-Time Testing",
    description:
      "Work on live web applications and real software products to perform functional, regression, integration, and UI testing.",
    keywords: ["Live Projects", "Regression Testing", "Functional Testing"]
  },
  {
    icon: "⚙️",
    title: "100% Practical QA Training",
    description:
      "Learn by doing with hands-on experience in writing test cases, executing test scenarios, bug reporting, and automation scripting.",
    keywords: ["Test Cases", "Bug Reporting", "Automation Scripts"]
  },
  {
    icon: "🎓",
    title: "Certification & Placement Support",
    description:
      "Receive a recognized Full Stack QA certification and get complete support with resume building, mock interviews, and job placement guidance.",
    keywords: ["QA Certification", "Interview Preparation", "Placement Assistance"]
  },
  {
    icon: "🚀",
    title: "Automation Tools & Frameworks",
    description:
      "Gain expertise in Selenium, Cypress, Playwright, Postman, JIRA, and modern automation frameworks used in the software industry.",
    keywords: ["Selenium", "Cypress", "Postman", "JIRA"]
  },
  {
    icon: "♾️",
    title: "Lifetime Access & Mentorship",
    description:
      "Get lifetime access to course materials, updated automation tools, and continuous mentorship support to grow in the QA field.",
    keywords: ["Lifetime Access", "QA Mentorship", "Tool Updates"]
  },
];

const Benefits = () => {
  return (
    <section
      className="bg-gradient-to-b from-white via-blue-50 to-white py-20 px-6"
      id="full-stack-qa-course-benefits"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-200">
            Why Choose Our Program
          </span>

          <h2 
            id="benefits-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Benefits of Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Full Stack QA Course
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our <strong>Full Stack QA Training Program</strong> is designed to help students and professionals master{" "}
            <strong>Manual Testing</strong>, <strong>Automation Testing</strong>,{" "}
            <strong>API Testing</strong>, and <strong>Database Testing</strong> with real-world software projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefitsData.map((item, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {item.description}
              </p>

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

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-10 text-white shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">90 Days</div>
              <p className="text-blue-100">Complete Full Stack QA Training</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">40+ Projects</div>
              <p className="text-blue-100">Manual & Automation Testing Practice</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100%</div>
              <p className="text-blue-100">Job & Career Support</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-10 border border-blue-100 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What You'll Master in Our Full Stack QA Program
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">

            <div className="space-y-3">
              <div><strong>Manual Testing:</strong> SDLC, STLC, Test Case Writing, Bug Life Cycle, Test Scenarios</div>
              <div><strong>Automation Testing:</strong> Selenium WebDriver, Cypress, Playwright, Automation Frameworks</div>
              <div><strong>API Testing:</strong> Postman, REST API Testing, JSON Validation, Status Codes</div>
            </div>

            <div className="space-y-3">
              <div><strong>Database Testing:</strong> SQL Queries, Data Validation, Backend Testing</div>
              <div><strong>Agile & Tools:</strong> JIRA, Git, CI/CD Basics, Scrum Methodology</div>
              <div><strong>Performance & Security Basics:</strong> Load Testing Concepts, Basic Security Testing</div>
            </div>

          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to start your Full Stack QA journey?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-10 py-4 rounded-lg text-lg hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-200 transition-all duration-300 hover:scale-105 active:scale-95">
            Enroll in Full Stack QA Course Today
          </button>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
