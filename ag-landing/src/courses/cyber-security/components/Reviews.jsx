import React from "react";

const reviews = [
  {
    name: "Rohit Sharma",
    role: "IT Security Analyst",
    message:
      "The Cyber Security course transformed my career! The hands-on labs and ethical hacking projects were exactly what I needed to land my first security role.",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Sneha Verma",
    role: "Network Engineer",
    message:
      "I loved the real-world penetration testing exercises. The instructors are highly knowledgeable and supportive. Highly recommend this course for anyone starting in cyber security.",
    avatar: "https://i.pravatar.cc/100?img=6",
  },
  {
    name: "Amit Joshi",
    role: "Junior Cyber Security Specialist",
    message:
      "This course helped me understand network security, ethical hacking, and incident response. The mentorship and project guidance were invaluable.",
    avatar: "https://i.pravatar.cc/100?img=7",
  },
];

const Reviews = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-6" id="cyber-security-reviews">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Cyber Security Students Say
        </h2>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all"
            >
              <p className="text-gray-600 mb-6 leading-relaxed">{review.message}</p>
              
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border border-gray-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
