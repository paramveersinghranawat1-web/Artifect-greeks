import React from "react";

const reviews = [
  {
    name: "Alice Johnson",
    role: "QA Engineer at TechCorp",
    message:
      "This Fullstack QA course completely transformed my career. The mix of manual and automation testing, along with real projects, made me job-ready within months!",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Michael Lee",
    role: "Software Tester at InnovateX",
    message:
      "I loved the hands-on approach. Learning Selenium, Cypress, and API testing with real-world examples was invaluable. Highly recommended!",
    avatar: "https://i.pravatar.cc/100?img=6",
  },
  {
    name: "Sara Patel",
    role: "QA Analyst Freelance",
    message:
      "The instructors were extremely knowledgeable and supportive. I now confidently handle end-to-end testing and automation for multiple clients.",
    avatar: "https://i.pravatar.cc/100?img=7",
  },
];

const Reviews = () => {
  return (
    <section className="bg-gray-50 py-20 px-6" id="fullstack-qa-reviews">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Our Fullstack QA Students Say
        </h2>

        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Hear from professionals who have completed our Fullstack QA course and boosted their careers with hands-on learning and practical skills.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-100"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">{review.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
