import React, { useState } from "react";

const faqs = [
  {
    question: "Is this Fullstack QA course suitable for beginners?",
    answer:
      "Yes, this course is designed for beginners as well as professionals. We start from fundamentals of QA and gradually move to advanced automation, testing, and fullstack QA practices.",
  },
  {
    question: "Will I get job placement assistance after completing the course?",
    answer:
      "Absolutely. We provide resume guidance, interview preparation, portfolio support, and career mentoring to help you secure a QA or Automation Testing role.",
  },
  {
    question: "Do I receive a certification after completion?",
    answer:
      "Yes, you will receive a recognized Fullstack QA certification along with practical project experience to strengthen your resume.",
  },
  {
    question: "What is the duration of the course?",
    answer:
      "The Fullstack QA course duration is 90 days, including live sessions, hands-on labs, real-world projects, and mentorship support.",
  },
  {
    question: "Is this course live or recorded?",
    answer:
      "We provide live interactive sessions with recordings available for revision at any time.",
  },
  {
    question: "Will I work on real projects?",
    answer:
      "Yes, you will work on real-world web applications and fullstack projects to gain hands-on experience in manual and automation testing.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="bg-gray-50 py-20 px-6"
      id="fullstack-qa-course-faq"
    >
      <div className="max-w-4xl mx-auto">

        {/* SEO Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Frequently Asked Questions About Our Fullstack QA Course
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Find answers to common questions about the Fullstack QA course, including course structure, certification, career support, and practical projects.
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
                  {activeIndex === index ? "-" : "+"}
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
