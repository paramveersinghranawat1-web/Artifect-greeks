import React, { useState } from "react";

const faqs = [
  {
    question: "Is this DevOps course suitable for beginners?",
    answer:
      "Yes, this course is designed for beginners as well as professionals. We start with fundamentals like Git, Agile, and CI/CD before moving to advanced DevOps practices.",
  },
  {
    question: "Will I get hands-on experience?",
    answer:
      "Absolutely! You will work on real-world projects, CI/CD pipelines, containerization with Docker, Kubernetes deployments, and cloud infrastructure setups.",
  },
  {
    question: "Do I receive certification after completion?",
    answer:
      "Yes, you will receive a recognized DevOps Certification along with practical lab experience, which enhances your resume.",
  },
  {
    question: "What is the duration of the course?",
    answer:
      "The course duration is 90 days, including live sessions, lab exercises, real-world projects, and mentorship support.",
  },
  {
    question: "Is this course live or recorded?",
    answer:
      "We provide live interactive sessions along with recorded access so you can revise anytime.",
  },
  {
    question: "Which tools and platforms will I learn?",
    answer:
      "You will learn Git, Jenkins, Docker, Kubernetes, Terraform, AWS/Azure/GCP, Prometheus, Grafana, ELK stack, and other DevOps tools used in the industry.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-6" id="devops-course-faq">
      <div className="max-w-4xl mx-auto">

        {/* SEO-Friendly Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Frequently Asked Questions About Our DevOps Course
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Find answers to common questions about our DevOps Training Program, course structure, tools, certification, and career support.
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-gray-800">
                  {faq.question}
                </span>
                <span className="text-blue-600 text-xl font-bold">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
