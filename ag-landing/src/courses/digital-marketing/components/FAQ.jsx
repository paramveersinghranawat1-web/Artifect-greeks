import React, { useState } from "react";
import { Helmet } from "react-helmet";

const faqs = [
  {
    category: "Course Basics",
    question: "Is this Digital Marketing course suitable for beginners?",
    answer:
      "Yes, this course is designed for beginners, students, business owners, and working professionals. We start from digital marketing fundamentals and gradually move to advanced strategies like SEO, paid ads, funnel building, and marketing automation.",
  },
  {
    category: "Career Support",
    question: "Will I get job placement assistance after completing the course?",
    answer:
      "Yes, we provide complete placement assistance including resume building, LinkedIn optimization, interview preparation, and access to hiring partners to help you secure a digital marketing job.",
  },
  {
    category: "Certification",
    question: "Do I receive a certification after completion?",
    answer:
      "Yes, you will receive an industry-recognized Digital Marketing Certification along with hands-on campaign experience, which strengthens your portfolio and resume.",
  },
  {
    category: "Course Details",
    question: "What is the duration of the course?",
    answer:
      "The course duration is 90 days, including live sessions, practical assignments, real ad campaign execution, and mentorship support.",
  },
  {
    category: "Learning Format",
    question: "Is this course live or recorded?",
    answer:
      "We provide live interactive sessions for real-time learning along with lifetime access to recorded sessions so you can revise anytime.",
  },
  {
    category: "Practical Training",
    question: "Will I work on real marketing campaigns?",
    answer:
      "Yes, you will run real Google Ads and Meta Ads campaigns, work on SEO projects, create content strategies, and analyze live campaign data to gain hands-on experience.",
  },
  {
    category: "Prerequisites",
    question: "What are the prerequisites for this course?",
    answer:
      "No prior experience required. Basic computer skills and internet knowledge are sufficient. We provide foundational training on all digital marketing concepts from scratch.",
  },
  {
    category: "Course Fees",
    question: "What is the course fee and payment options?",
    answer:
      "Our course offers flexible payment plans including EMI options. Contact our admissions team for current pricing and special offers. We also provide scholarships for deserving candidates.",
  },
];

const FAQ = ({ courseName = "Digital Marketing", courseCategory = "digital-marketing" }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      className="bg-gradient-to-b from-white via-blue-50 to-white py-20 px-6"
      id={`${courseCategory}-faq`}
      aria-labelledby="faq-heading"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto">

        <header className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-200">
            Got Questions? We Have Answers
          </span>

          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Frequently Asked Questions
          </h2>

          <p className="text-lg text-gray-600">
            Get answers about our <strong>{courseName}</strong> training,
            certification, projects, and placement support.
          </p>
        </header>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-sm border-2 border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-6 flex justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full mb-2">
                    {faq.category}
                  </span>
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                </div>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-3xl p-10 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="mb-8">
            Our admissions team is here to help you choose the right path.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl"
            >
              Talk to an Advisor
            </a>

            <a
              href="#schedule-demo"
              className="border-2 border-white px-8 py-4 rounded-xl"
            >
              Book Free Demo
            </a>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <a href="#curriculum" className="bg-white p-6 rounded-xl text-center shadow">
            📚
            <h4 className="font-bold mt-2">View Curriculum</h4>
          </a>

          <a href="#testimonials" className="bg-white p-6 rounded-xl text-center shadow">
            ⭐
            <h4 className="font-bold mt-2">Success Stories</h4>
          </a>

          <a href="#brochure" className="bg-white p-6 rounded-xl text-center shadow">
            📄
            <h4 className="font-bold mt-2">Download Brochure</h4>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
