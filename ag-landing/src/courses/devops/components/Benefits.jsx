import React from "react";

const benefitsData = [
  {
    icon: "🚀",
    title: "Job-Ready DevOps Skills",
    description:
      "Master CI/CD pipelines, cloud deployment, containerization, and infrastructure automation with real-world DevOps projects.",
    keywords: ["CI/CD", "Docker", "Kubernetes", "Infrastructure Automation"]
  },
  {
    icon: "☁️",
    title: "Cloud & Real-Time Deployment Projects",
    description:
      "Work on live cloud environments using AWS, deploy applications, configure servers, and manage scalable infrastructure.",
    keywords: ["AWS", "Cloud Deployment", "Server Management"]
  },
  {
    icon: "⚙️",
    title: "100% Practical DevOps Training",
    description:
      "Hands-on training in Linux, Git, Jenkins, Docker, Kubernetes, and automation tools used in modern DevOps workflows.",
    keywords: ["Linux", "Git", "Jenkins", "DevOps Tools"]
  },
  {
    icon: "🎓",
    title: "Certification & Placement Support",
    description:
      "Receive industry-recognized DevOps certification along with resume building, mock interviews, and complete placement assistance.",
    keywords: ["DevOps Certification", "Interview Preparation", "Placement Assistance"]
  },
  {
    icon: "🔄",
    title: "Automation & CI/CD Pipelines",
    description:
      "Learn to build and manage CI/CD pipelines, automate deployments, integrate testing, and monitor application performance.",
    keywords: ["CI/CD Pipelines", "Automation", "Deployment", "Monitoring"]
  },
  {
    icon: "♾️",
    title: "Lifetime Access & Expert Mentorship",
    description:
      "Get lifetime access to updated DevOps tools, cloud modules, and continuous mentorship support from industry experts.",
    keywords: ["Lifetime Access", "DevOps Mentorship", "Tool Updates"]
  },
];

const Benefits = () => {
  return (
    <section
      className="bg-gradient-to-b from-white via-blue-50 to-white py-20 px-6"
      id="devops-course-benefits"
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
              DevOps Course
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our <strong>DevOps Training Program</strong> is designed to help students and professionals master{" "}
            <strong>Cloud Computing</strong>, <strong>CI/CD Pipelines</strong>,{" "}
            <strong>Containerization</strong>, and <strong>Infrastructure Automation</strong> with real-world deployment projects.
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
              <p className="text-blue-100">Complete DevOps Training</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">40+ Projects</div>
              <p className="text-blue-100">Cloud & CI/CD Implementation</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100%</div>
              <p className="text-blue-100">Placement & Career Support</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-10 border border-blue-100 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What You'll Master in Our DevOps Program
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">

            <div className="space-y-3">
              <div><strong>Linux & Networking:</strong> Linux Commands, Shell Scripting, Server Management</div>
              <div><strong>Version Control:</strong> Git, GitHub, Branching Strategies</div>
              <div><strong>CI/CD Tools:</strong> Jenkins, GitHub Actions, Automated Pipelines</div>
            </div>

            <div className="space-y-3">
              <div><strong>Containerization:</strong> Docker, Docker Compose, Kubernetes</div>
              <div><strong>Cloud Platforms:</strong> AWS EC2, S3, IAM, Load Balancer</div>
              <div><strong>Monitoring & Automation:</strong> Terraform Basics, Monitoring Tools, Log Management</div>
            </div>

          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to start your DevOps journey?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-10 py-4 rounded-lg text-lg hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-200 transition-all duration-300 hover:scale-105 active:scale-95">
            Enroll in DevOps Course Today
          </button>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
