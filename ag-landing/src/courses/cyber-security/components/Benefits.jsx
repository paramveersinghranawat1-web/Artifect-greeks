import React from "react";

const benefitsData = [
  {
    icon: "🔐",
    title: "Job-Ready Cyber Security Skills",
    description:
      "Master ethical hacking, network security, penetration testing, and vulnerability assessment with real-world cyber attack simulations.",
    keywords: ["Ethical Hacking", "Penetration Testing", "Network Security", "Vulnerability Assessment"]
  },
  {
    icon: "🛡️",
    title: "Live Hacking Labs & Real-Time Projects",
    description:
      "Work on real-world security scenarios, perform vulnerability scanning, exploit testing, and secure web applications in live lab environments.",
    keywords: ["Live Labs", "Vulnerability Scanning", "Web Security"]
  },
  {
    icon: "⚙️",
    title: "100% Practical Cyber Security Training",
    description:
      "Hands-on training in Kali Linux, security tools, firewall configuration, and real attack-defense techniques used by professionals.",
    keywords: ["Kali Linux", "Security Tools", "Firewall", "Practical Training"]
  },
  {
    icon: "🎓",
    title: "Certification & Placement Support",
    description:
      "Receive industry-recognized Cyber Security certification with complete resume building, mock interviews, and placement assistance.",
    keywords: ["Cyber Security Certification", "Placement Support", "Interview Preparation"]
  },
  {
    icon: "💻",
    title: "Advanced Security Tools & Techniques",
    description:
      "Gain expertise in tools like Nmap, Metasploit, Burp Suite, Wireshark, and learn modern cyber defense strategies.",
    keywords: ["Nmap", "Metasploit", "Burp Suite", "Wireshark"]
  },
  {
    icon: "♾️",
    title: "Lifetime Access & Expert Mentorship",
    description:
      "Get lifetime access to updated security modules, hacking labs, and continuous mentorship from cyber security experts.",
    keywords: ["Lifetime Access", "Cyber Mentorship", "Security Updates"]
  },
];

const Benefits = () => {
  return (
    <section
      className="bg-gradient-to-b from-white via-blue-50 to-white py-20 px-6"
      id="cyber-security-course-benefits"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-200">
            Why Choose Our Program
          </span>

          <h2 
            id="benefits-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Benefits of Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Cyber Security Course
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our <strong>Cyber Security Training Program</strong> is designed to help students and professionals master{" "}
            <strong>Ethical Hacking</strong>, <strong>Network Security</strong>,{" "}
            <strong>Penetration Testing</strong>, and <strong>Web Application Security</strong> with real-world attack simulations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefitsData.map((item, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {item.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-10 text-white shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">90 Days</div>
              <p className="text-blue-100">Complete Cyber Security Training</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">50+ Labs</div>
              <p className="text-blue-100">Hands-on Ethical Hacking Practice</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100%</div>
              <p className="text-blue-100">Placement & Career Support</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-10 border border-blue-100 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What You'll Master in Our Cyber Security Program
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">

            <div className="space-y-3">
              <div><strong>Ethical Hacking:</strong> Footprinting, Scanning, Enumeration, Exploitation Techniques</div>
              <div><strong>Network Security:</strong> TCP/IP, Firewalls, IDS/IPS, Secure Network Architecture</div>
              <div><strong>Web Application Security:</strong> OWASP Top 10, SQL Injection, XSS, CSRF Attacks</div>
            </div>

            <div className="space-y-3">
              <div><strong>Security Tools:</strong> Kali Linux, Nmap, Metasploit, Burp Suite, Wireshark</div>
              <div><strong>Cloud & System Security:</strong> Linux Security, Windows Hardening, Cloud Basics</div>
              <div><strong>Incident Response & SOC:</strong> Log Monitoring, Threat Detection, Basic Forensics</div>
            </div>

          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to start your Cyber Security journey?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-10 py-4 rounded-lg text-lg hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-200 transition-all duration-300 hover:scale-105 active:scale-95">
            Enroll in Cyber Security Course Today
          </button>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
