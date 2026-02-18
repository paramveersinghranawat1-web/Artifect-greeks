import React from "react";

const reviews = [
  {
    name: "Alice Johnson",
    role: "Cloud Engineer",
    message:
      "This DevOps course completely transformed my career! The hands-on labs with Docker, Kubernetes, and CI/CD pipelines made learning extremely practical.",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Ravi Kumar",
    role: "Software Developer",
    message:
      "I loved the real-world projects. From Terraform infrastructure to Jenkins automation, everything was covered in a step-by-step manner. Highly recommend!",
    avatar: "https://i.pravatar.cc/100?img=6",
  },
  {
    name: "Sara Lee",
    role: "System Administrator",
    message:
      "The mentorship support was amazing. Instructors guided me through complex cloud deployments and helped me build confidence to work on real projects.",
    avatar: "https://i.pravatar.cc/100?img=7",
  },
  {
    name: "Mohit Sharma",
    role: "DevOps Engineer",
    message:
      "I got a job within 2 months after completing this course. The CI/CD and Kubernetes modules were particularly strong. Great practical learning experience.",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
];

const Reviews = () => {
  return (
    <section className="bg-gray-50 py-20 px-6" id="devops-course-reviews">
      <div className="max-w-6xl mx-auto text-center">

        {/* SEO Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Our DevOps Students Say
        </h2>

        <p className="text-gray-600 mb-14 max-w-3xl mx-auto">
          Hear from our students who transformed their careers through our hands-on DevOps training program.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-200"
                />
                <div className="text-left">
                  <h4 className="font-bold text-gray-800">{review.name}</h4>
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
