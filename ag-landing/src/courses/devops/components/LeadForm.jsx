import React, { useEffect, useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzPo8CnnX0yRXVQndiL9_S0i-0QN0pZkskXyNm4vVWHv072szNE-jUhXqBLDa2XyNYsGw/exec";

const BENEFITS = [
  { icon: "🎓", text: "Industry-Recognised Certification" },
  { icon: "💼", text: "100% Job Placement Assistance" },
  { icon: "🚀", text: "Live Projects & Hands-on Training" },
  { icon: "♾️", text: "Lifetime Access & Mentorship Support" },
];

const STATS = [
  { value: "95%",   label: "Placement Rate" },
  { value: "₹5.8L", label: "Avg. Package"   },
  { value: "4.9⭐",  label: "Student Rating" },
];

const TRUST_PILLS = [
  {
    label: "Secure Payment", color: "text-green-600",
    d: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    rule: "evenodd",
  },
  {
    label: "Certified Course", color: "text-blue-600",
    d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    rule: "evenodd",
  },
  {
    label: "2000+ Students", color: "text-purple-600",
    d: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z",
    rule: undefined,
  },
];

const FIELDS = [
  {
    id: "name", label: "Full Name", type: "text",
    placeholder: "Enter your full name", maxLength: undefined,
    iconD: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", iconRule: "evenodd",
  },
  {
    id: "phone", label: "Phone Number", type: "tel",
    placeholder: "Enter 10-digit mobile number", maxLength: 10,
    iconD: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z",
    iconRule: undefined,
  },
  {
    id: "email", label: "Email Address", type: "email",
    placeholder: "your.email@example.com", maxLength: undefined,
    iconD: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z",
    iconRule: undefined,
  },
];

const LeadForm = ({
  course = "DevOps Course",
  courseCategory = "devops",
  showBenefits = true,
}) => {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", course,
    utm_source: "", utm_campaign: "", utm_medium: "",
  });
  const [loading,  setLoading]  = useState(false);
  const [success,  setSuccess]  = useState(false);
  const [errors,   setErrors]   = useState({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    const p = new URLSearchParams(window.location.search);
    setFormData((prev) => ({
      ...prev,
      utm_source:   p.get("utm_source")   || "",
      utm_campaign: p.get("utm_campaign") || "",
      utm_medium:   p.get("utm_medium")   || "",
    }));
  }, []);

  const validateForm = () => {
    const e = {};
    if (!formData.name.trim() || formData.name.length < 3)
      e.name = "Please enter your full name (min 3 characters)";
    if (!/^[6-9]\d{9}$/.test(formData.phone))
      e.phone = "Please enter a valid 10-digit Indian phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Please enter a valid email address";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    const data = new FormData();
    Object.entries(formData).forEach(([k, v]) => data.append(k, v));
    try {
      await fetch(SCRIPT_URL, { method: "POST", body: data, mode: "no-cors" });
      setSuccess(true);
      setTimeout(() => { window.location.href = `/courses/${courseCategory}/payment`; }, 2000);
    } catch {
      alert("Something went wrong. Please try again or contact support.");
      setLoading(false);
    }
  };

  /* ── Success ── */
  if (success) {
    return (
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen flex items-center justify-center py-16 px-6">
        <div className="max-w-2xl w-full mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-green-200">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">🎉 Enrollment Successful!</h3>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for enrolling in <strong>{course}</strong>. Redirecting you to secure payment...
            </p>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-ping" />
              <span className="font-semibold">Processing...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ── Main ── */
  return (
    <section
      className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 px-6"
      id={`${courseCategory}-enrollment`}
      aria-labelledby="enrollment-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ─── LEFT: Benefits panel ─── */}
          {showBenefits && (
            <div className="space-y-8">
              {/* Urgency + headline */}
              <div>
                <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-200">
                  🎯 Limited Seats Available
                </span>
                <h2
                  id="enrollment-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                >
                  Enroll in Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                    {course}
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Start your career transformation today. Fill the form to secure your seat and get access to{" "}
                  <strong>industry-recognised certification</strong> and{" "}
                  <strong>guaranteed placement support</strong>.
                </p>
              </div>

              {/* Benefit rows */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">What You'll Get:</h3>
                {BENEFITS.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {b.icon}
                    </div>
                    <span className="font-semibold text-gray-800">{b.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats block */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Join 2,000+ Successful Students</h3>
                <div className="grid grid-cols-3 gap-6 text-center">
                  {STATS.map((s) => (
                    <div key={s.label}>
                      <div className="text-3xl font-bold mb-1">{s.value}</div>
                      <div className="text-sm text-blue-100">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap items-center gap-3">
                {TRUST_PILLS.map((pill) => (
                  <div
                    key={pill.label}
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100"
                  >
                    <svg className={`w-5 h-5 ${pill.color}`} fill="currentColor" viewBox="0 0 20 20">
                      {pill.rule
                        ? <path fillRule={pill.rule} clipRule={pill.rule} d={pill.d} />
                        : <path d={pill.d} />}
                    </svg>
                    <span className="text-sm font-semibold text-gray-700">{pill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── RIGHT: Form ─── */}
          <div className="lg:sticky lg:top-24">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-gray-100"
            >
              {/* Form header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  📝
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Secure Your Seat Now</h3>
                <p className="text-gray-600">Fill in your details to proceed to payment</p>
              </div>

              <div className="space-y-5">
                {/* Dynamic fields */}
                {FIELDS.map(({ id, label, type, placeholder, maxLength, iconD, iconRule }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block mb-2 text-sm font-semibold text-gray-700">
                      {label} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          {iconD.includes(" M")
                            ? iconD.split(" M").map((seg, i) => (
                                <path key={i} d={(i === 0 ? "" : "M") + seg} />
                              ))
                            : iconRule
                            ? <path fillRule={iconRule} clipRule={iconRule} d={iconD} />
                            : <path d={iconD} />}
                        </svg>
                      </div>
                      <input
                        id={id} name={id} type={type} required
                        value={formData[id]} onChange={handleChange}
                        placeholder={placeholder}
                        maxLength={maxLength}
                        className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl focus:outline-none transition-all ${
                          errors[id]
                            ? "border-red-300 focus:border-red-500 bg-red-50"
                            : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        }`}
                      />
                    </div>
                    {errors[id] && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors[id]}
                      </p>
                    )}
                  </div>
                ))}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <span>Proceed to Secure Payment</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Lock note */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  🔒 Your information is safe &amp; secure
                </div>
              </div>
            </form>

            {/* Help links */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-3">Need help? Contact our admissions team</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="tel:+91XXXXXXXXXX" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Us
                </a>
                <span className="text-gray-300">•</span>
                <a href="https://wa.me/91XXXXXXXXXX" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );Q
};

export default LeadForm;