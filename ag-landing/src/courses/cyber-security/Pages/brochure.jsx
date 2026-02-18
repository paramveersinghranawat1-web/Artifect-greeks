import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { courseData } from "../data/content";

const Brochure = () => {
  const [showDownloadForm, setShowDownloadForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [downloading, setDownloading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDownload = (e) => {
    e.preventDefault();
    setDownloading(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);

      const brochureUrl =
        courseData?.brochureLink ||
        "/brochures/digital-marketing-course.pdf";

      window.open(brochureUrl, "_blank");

      setDownloading(false);
      setShowDownloadForm(false);
      alert("Thank you! The brochure is downloading now.");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Helmet>
        <title>
          Course Brochure & Syllabus - {courseData?.name || "Digital Marketing"}
        </title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {courseData?.name || "Digital Marketing Course"}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Course Brochure
            </span>
          </h1>

          <button
            onClick={() => setShowDownloadForm(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold"
          >
            Download Full Brochure PDF
          </button>
        </div>

        {/* Final CTA */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Career?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <button
              onClick={() => setShowDownloadForm(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold"
            >
              Download Brochure
            </button>

            <a
              href="#enroll"
              className="inline-flex items-center gap-2 bg-white text-blue-700 border-2 border-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all"
            >
              Enroll Now
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Download Modal */}
      {showDownloadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Download Brochure
            </h3>

            <form onSubmit={handleDownload} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-xl"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-xl"
              />

              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 border rounded-xl"
              />

              <button
                type="submit"
                disabled={downloading}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold disabled:opacity-70"
              >
                {downloading ? "Downloading..." : "Download Brochure"}
              </button>

              <button
                type="button"
                onClick={() => setShowDownloadForm(false)}
                className="w-full text-gray-600 py-2 font-semibold"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Brochure;
