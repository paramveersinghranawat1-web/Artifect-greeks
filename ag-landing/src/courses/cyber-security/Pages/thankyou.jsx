import React from "react";
import { Helmet } from "react-helmet";
import { courseData } from "../data/content";

const ThankYou = () => {

  const nextSteps = [
    {
      icon: "📱",
      title: "Join WhatsApp Community",
      description: "Connect with fellow students and get instant updates",
      action: "Join Now",
      link: courseData.whatsappLink,
      primary: true,
    },
    {
      icon: "📧",
      title: "Check Your Email",
      description: "Your course access details have been sent to your inbox",
      action: "Open Email",
    },
    {
      icon: "📚",
      title: "Download Course Material",
      description: "Get the complete course brochure and syllabus",
      action: "Download",
      link: "/",
    },
    {
      icon: "🎥",
      title: "Access Course Portal",
      description: "Start learning with your first lesson today",
      action: "Go to Portal",
      link: "/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      
      <Helmet>
        <title>Thank You - Enrollment Successful | {courseData.name}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="flex-grow px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto text-center">

          {/* Success Section */}
          <div className="mb-12">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🎉 Welcome Aboard!
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              You've successfully enrolled in
            </p>

            <div className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl text-2xl font-bold shadow-lg">
              {courseData.name}
            </div>
          </div>

          {/* Next Steps */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {nextSteps.map(function (step, index) {
              return (
                <div
                  key={index}
                  className={
                    step.primary
                      ? "bg-white rounded-2xl p-8 shadow-lg border border-green-400"
                      : "bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                  }
                >
                  <div className="text-3xl mb-4">{step.icon}</div>

                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  {step.link ? (
                    <a
                      href={step.link}
                      className={
                        step.primary
                          ? "inline-block px-6 py-3 rounded-xl font-semibold text-white bg-green-600"
                          : "inline-block px-6 py-3 rounded-xl font-semibold text-white bg-blue-600"
                      }
                    >
                      {step.action}
                    </a>
                  ) : (
                    <button className="px-6 py-3 bg-gray-200 rounded-xl">
                      {step.action}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Upsell Section */}
          {courseData.upsellCourses &&
            courseData.upsellCourses.length > 0 && (
              <div className="bg-white rounded-3xl p-10 shadow-xl mb-16">
                <h2 className="text-3xl font-bold mb-8">
                  Continue Your Learning Journey
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courseData.upsellCourses.map(function (course, idx) {
                    return (
                      <div
                        key={idx}
                        className="border rounded-2xl p-6 shadow"
                      >
                        <h3 className="text-xl font-bold mb-3">
                          {course.name}
                        </h3>

                        <p className="text-gray-600 mb-4">
                          {course.shortDesc}
                        </p>

                        <a
                          href={course.link}
                          className="block bg-purple-600 text-white py-3 rounded-xl font-semibold"
                        >
                          Explore Course
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          {/* Support Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              Need Help Getting Started?
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919999999999"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl"
              >
                Call Support
              </a>

              <a
                href="mailto:support@example.com"
                className="px-6 py-3 border rounded-xl"
              >
                Email Us
              </a>

              <a
                href="https://wa.me/919999999999"
                className="px-6 py-3 bg-green-600 text-white rounded-xl"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ThankYou;
