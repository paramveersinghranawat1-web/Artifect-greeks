import React from "react";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "SEO Executive",
    review:
      "This Digital Marketing course completely transformed my career. I learned SEO, Google Ads, and Meta Ads with real projects. Within 2 months of completion, I got placed as an SEO Executive.",
  },
  {
    name: "Priya Mehta",
    role: "Freelance Digital Marketer",
    review:
      "The performance marketing training was very practical. I now run Facebook and Google Ads campaigns for clients and generate consistent leads. Highly recommended for beginners and professionals.",
  },
  {
    name: "Amit Verma",
    role: "Social Media Manager",
    review:
      "The live mentorship and real client projects helped me build confidence. This is one of the best Digital Marketing training programs for job-ready skills.",
  },
];

const Reviews = () => {
  return (
    <section
      className="bg-white py-20 px-6"
      id="digital-marketing-course-reviews"
    >
      <div className="max-w-6xl mx-auto">

        {/* SEO Optimized Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Digital Marketing Course Reviews & Student Testimonials
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          See how our Digital Marketing Training Program has helped students
          master SEO, Google Ads, and Social Media Marketing to build successful
          careers.
        </p>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100"
            >
              {/* Stars */}
              <div className="text-yellow-400 mb-4 text-lg">
                ★★★★★
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                “{item.review}”
              </p>

              {/* Reviewer Info */}
              <div>
                <h3 className="font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-sm text-blue-600">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
