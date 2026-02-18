import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const testimonialsData = [
  {
    id: 1,
    name: "Rohit Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    role: "Performance Marketing Executive",
    before: "Working as a sales executive earning ₹18,000/month.",
    after:
      "Placed as a Performance Marketing Executive at a leading agency with ₹6.5 LPA package within 3 months.",
    image: "/images/students/rohit-sharma.webp",
    salary: "₹6.5 LPA",
    duration: "3 months",
    category: "career-switch",
  },
  {
    id: 2,
    name: "Priya Verma",
    location: "Delhi, India",
    rating: 4.9,
    role: "Digital Marketing Executive",
    before: "Final-year B.Com student with no practical digital skills.",
    after:
      "Secured a Digital Marketing Internship and converted to full-time role at ₹4.8 LPA.",
    image: "/images/students/priya-verma.webp",
    salary: "₹4.8 LPA",
    duration: "4 months",
    category: "fresher",
  },
  {
    id: 3,
    name: "Arjun Reddy",
    location: "Hyderabad, Telangana",
    rating: 5,
    role: "Business Owner",
    before: "Running a small offline retail store with declining sales.",
    after:
      "Scaled his business online using Facebook & Google Ads, increasing revenue by 220% in 6 months.",
    image: "/images/students/arjun-reddy.webp",
    salary: "220% Revenue Growth",
    duration: "6 months",
    category: "entrepreneur",
  },
];

function Testimonials({
  courseName = "Digital Marketing",
  courseCategory = "digital-marketing",
}) {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Calculate average rating (simple way)
  var total = 0;
  for (var i = 0; i < testimonialsData.length; i++) {
    total += testimonialsData[i].rating;
  }
  var averageRating = total / testimonialsData.length;

  // Simple categories
  var categories = ["all", "career-switch", "fresher", "entrepreneur"];

  // Simple filtering
  var filteredTestimonials = [];
  if (filter === "all") {
    filteredTestimonials = testimonialsData;
  } else {
    for (var j = 0; j < testimonialsData.length; j++) {
      if (testimonialsData[j].category === filter) {
        filteredTestimonials.push(testimonialsData[j]);
      }
    }
  }

  // Show all or first 6
  var displayedTestimonials = showAll
    ? filteredTestimonials
    : filteredTestimonials.slice(0, 6);

  // Reset showAll when filter changes
  useEffect(function () {
    setShowAll(false);
  }, [filter]);

  var schemaData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: courseName + " Course in India",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: testimonialsData.length,
    },
  };

  return (
    <section
      className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-6"
      id={courseCategory + "-testimonials"}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Student Success Stories –{" "}
            <span className="text-blue-600">{courseName}</span>
          </h2>

          <div className="mt-6 text-xl font-semibold text-gray-700">
            ⭐ {averageRating.toFixed(1)} / 5 | {testimonialsData.length} Reviews
          </div>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map(function (cat) {
            return (
              <button
                key={cat}
                onClick={function () {
                  setFilter(cat);
                }}
                className={
                  "px-6 py-2 rounded-full font-semibold " +
                  (filter === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-gray-300")
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedTestimonials.map(function (t) {
            return (
              <div
                key={t.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>

                <div className="text-yellow-500 mb-2">
                  {"★".repeat(Math.floor(t.rating))}
                </div>

                <p className="text-sm mb-2">
                  <strong>Before:</strong> {t.before}
                </p>

                <p className="text-sm mb-4">
                  <strong>After:</strong> {t.after}
                </p>

                <div className="text-green-600 font-bold text-lg">
                  {t.salary}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-10 shadow-xl border">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Become Our Next Success Story?
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a
              href="#enroll-now"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Enroll Now
            </a>

            <a
              href="#download-brochure"
              className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Download Brochure
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
