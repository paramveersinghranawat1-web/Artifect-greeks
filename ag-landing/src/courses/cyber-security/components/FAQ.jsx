import React, { useState } from "react";

const faqs = [
  {
    question: "Is this Cyber Security course suitable for beginners?",
    answer:
      "Yes, this course is designed for both beginners and professionals. We cover fundamentals and gradually move to advanced cybersecurity topics like ethical hacking, network security, and penetration testing.",
  },
  {
    question: "Will I get job placement assistance after completing the course?",
    answer:
      "Yes, we provide placement assistance, resume guidance, interview preparation, and hands-on projects to help you secure a cyber security job.",
  },
  {
    question: "Do I receive a certification after completion?",
    answer:
      "Yes, you will receive a recognized Cyber Security Certification along with practical lab experience, which strengthens your resume.",
  },
  {
    question: "What is the duration of the course?",
    answer:
      "The course duration is 90 days, including live sessions, hands-on labs, real-world projects, and mentorship support.",
  },
  {
    question: "Is this course live or recorded?",
    answer:
      "We provide live interactive sessions along with recorded access so you can revise anytime.",
  },
  {
    question: "Will I work on real projects?",
    answer:
      "Yes, you will work on lab simulations, real-world cyber security scenarios, and penetration testing projects to gain hands-on experience.",
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
      id="cyber-security-course-faq"
    >
      <div className="max-w-4xl mx-auto">

        {/* SEO Optimized Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Frequently Asked Questions About Our Cyber Security Course
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Get answers to the most common questions about our Cyber Security Training Program, course structure, certification, and career support.
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
