import React from "react";

function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">

          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-200 shadow-sm animate-pulse">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></span>
            Limited Seats • Cyber Security Batch Closing Soon
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Become a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Job-Ready Cyber Security Expert
            </span>{" "}
            in 90 Days
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            Master <strong>Ethical Hacking</strong>, <strong>Network Security</strong>, <strong>Penetration Testing</strong>, <strong>SIEM Tools</strong>, <strong>Vulnerability Assessment</strong>, <strong>Security Operations (SOC)</strong>, <strong>Cloud Security</strong>, and <strong>Incident Response</strong> with real-world labs and live attack simulations. No prior experience required.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-8">
            <button 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-10 py-4 rounded-lg text-lg hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-200 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Enroll in Cyber Security Course"
            >
              🔐 Reserve My Seat Now
            </button>

            <button 
              className="w-full sm:w-auto bg-white text-blue-700 font-semibold px-10 py-4 rounded-lg text-lg border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
              aria-label="Download Cyber Security curriculum"
            >
              📥 Download Curriculum
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold">100% Practical Security Labs</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Industry-Recognized Certification</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="font-semibold">Live Attack Simulation & SOC Training</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center md:justify-start gap-4 p-4 bg-white rounded-xl border border-blue-100 shadow-sm">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full border-3 border-white bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold"
                  aria-hidden="true"
                >
                  {i === 3 ? "😊" : ""}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-blue-700 text-lg">1,200+ Security Learners</p>
              <p className="text-sm text-gray-600">Successfully Trained & Placed</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          
          <div className="absolute top-10 left-0 bg-white p-3 rounded-lg shadow-lg border border-blue-100 z-20 animate-bounce">
            <p className="text-xs font-semibold text-gray-600">Ethical Hacking Certified</p>
            <p className="text-2xl font-bold text-blue-600">✓</p>
          </div>

          <div className="absolute bottom-20 left-5 bg-white p-3 rounded-lg shadow-lg border border-blue-100 z-20">
            <p className="text-xs font-semibold text-gray-600">Penetration Testing Expert</p>
            <p className="text-xl">🛡️</p>
          </div>

          <img 
            src="/images/cyber-security.png" 
            alt="Cyber Security Course - Learn Ethical Hacking, Network Security, Penetration Testing"
            className="relative z-10 rounded-2xl shadow-2xl border-4 border-white max-w-md w-full hover:scale-105 transition-transform duration-500"
            loading="eager"
            width="500"
            height="500"
          />

          <div className="absolute -bottom-5 right-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl shadow-xl z-20">
            <p className="text-xs font-semibold opacity-90">Average Salary Growth</p>
            <p className="text-3xl font-bold">65%</p>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6">
          <p className="text-center text-sm text-gray-600 mb-4 font-semibold">Tools & Technologies Covered</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <span className="text-xl font-bold text-gray-400">Kali Linux</span>
            <span className="text-xl font-bold text-gray-400">Metasploit</span>
            <span className="text-xl font-bold text-gray-400">Wireshark</span>
            <span className="text-xl font-bold text-gray-400">Burp Suite</span>
            <span className="text-xl font-bold text-gray-400">Splunk</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
