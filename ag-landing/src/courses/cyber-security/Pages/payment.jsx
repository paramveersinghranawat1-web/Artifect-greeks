import React, { useState } from "react";
import { courseData } from "../data/content";

// ── Icons ─────────────────────────────────────────────────────────────────────
const IconLock = ({ cls = "w-5 h-5" }) => (
  <svg className={cls} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
  </svg>
);
const IconTag = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3z" clipRule="evenodd" />
  </svg>
);
const IconArrow = () => (
  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);
const IconSpinner = () => (
  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
);
const IconShield = () => (
  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0117.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

// ── Constants ─────────────────────────────────────────────────────────────────
const INCLUDES = [
  "Industry-Recognised Certificate",
  "Lifetime Course Access",
  "Live Mentorship Sessions",
  "100% Placement Assistance",
  "Hands-on Projects & Assessments",
];

const TRUST_BADGES = [
  { label: "Secure Payment", icon: <IconShield /> },
  {
    label: "Razorpay Powered",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Instant Confirmation",
    icon: (
      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3z" clipRule="evenodd" />
      </svg>
    ),
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const Payment = () => {
  const [coupon,   setCoupon]   = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponStatus, setCouponStatus] = useState(null);
  const [loading,  setLoading]  = useState(false);

  const finalPrice = (courseData.price || 9999) - discount;

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SAVE500") {
      setDiscount(500);
      setCouponStatus("success");
    } else {
      setDiscount(0);
      setCouponStatus("error");
    }
  };

  const handlePayment = () => {
    setLoading(true);
    const options = {
      key: "YOUR_KEY_ID",
      amount: finalPrice * 100,
      currency: "INR",
      name: courseData.name,
      description: "Course Payment",
      handler: function (response) {
        setLoading(false);
        window.location.href = "/courses/cyber-security/thankyou";
      },
      modal: { ondismiss: () => setLoading(false) },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <main className="max-w-6xl mx-auto px-4 py-10 md:py-16">

        {/* ── Page heading ── */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 mb-3 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-200">
            🎯 Final Step — Complete Your Enrollment
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Secure Your Seat in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              {courseData.name}
            </span>
          </h1>
        </div>

        {/* ── Two-column grid ── */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* ─── LEFT: Order summary ─── */}
          <div className="space-y-6">

            {/* Course card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <p className="text-xs font-semibold text-blue-100 uppercase tracking-widest mb-1">You're enrolling in</p>
                <h2 className="text-xl font-bold text-white">{courseData.name}</h2>
              </div>
              <div className="px-6 py-5 space-y-3">
                {INCLUDES.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <IconCheck />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price breakdown */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5 space-y-3">
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Order Summary</h3>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Course Fee</span>
                <span className="font-medium text-gray-800">₹{courseData.price || 9999}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-sm text-green-600 font-medium">
                  <span>Coupon Discount (SAVE500)</span>
                  <span>− ₹{discount}</span>
                </div>
              )}
              <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900">
                <span>Total Payable</span>
                <span className="text-2xl text-blue-700">₹{finalPrice}</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {TRUST_BADGES.map((b) => (
                <div key={b.label} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  {b.icon}
                  <span className="text-sm font-semibold text-gray-700">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── RIGHT: Payment form ─── */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-gray-100">

              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  💳
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Complete Registration</h3>
                <p className="text-gray-500 text-sm">{courseData.name} Certification</p>
              </div>

              {/* Amount display */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl px-6 py-5 text-center mb-6 border border-blue-200">
                {discount > 0 && (
                  <p className="text-sm text-gray-400 line-through mb-1">₹{courseData.price || 9999}</p>
                )}
                <p className="text-5xl font-extrabold text-blue-700 tracking-tight">
                  ₹{finalPrice}
                </p>
                {discount > 0 && (
                  <span className="inline-block mt-2 text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                    🎉 ₹{discount} saved with coupon
                  </span>
                )}
              </div>

              {/* Coupon */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <span className="flex items-center gap-1.5">
                    <IconTag />
                    Have a Coupon Code?
                  </span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. SAVE500"
                    value={coupon}
                    onChange={(e) => { setCoupon(e.target.value); setCouponStatus(null); }}
                    className={`flex-1 px-4 py-3 border-2 rounded-xl text-sm font-medium focus:outline-none transition-all ${
                      couponStatus === "success"
                        ? "border-green-400 bg-green-50 text-green-800"
                        : couponStatus === "error"
                        ? "border-red-300 bg-red-50 text-red-700"
                        : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    }`}
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-5 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-sm hover:from-green-600 hover:to-green-700 transition-all shadow-sm hover:shadow-md"
                  >
                    Apply
                  </button>
                </div>
                {couponStatus === "success" && (
                  <p className="mt-2 text-sm text-green-600 font-medium flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3z" clipRule="evenodd" />
                    </svg>
                    Coupon applied! ₹500 discount added.
                  </p>
                )}
                {couponStatus === "error" && (
                  <p className="mt-2 text-sm text-red-600 font-medium flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Invalid coupon code. Please try again.
                  </p>
                )}
              </div>

              {/* Pay button */}
              <button
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group mb-4"
              >
                {loading ? (
                  <><IconSpinner /> Processing Payment…</>
                ) : (
                  <>
                    <IconLock cls="w-5 h-5" />
                    Pay ₹{finalPrice} Securely
                    <IconArrow />
                  </>
                )}
              </button>

              {/* Security note */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-gray-500">
                <IconLock cls="w-4 h-4 text-green-600" />
                🔒 256-bit SSL encrypted · 100% secure checkout
              </div>
            </div>

            {/* Help */}
            <div className="mt-5 text-center">
              <p className="text-sm text-gray-500 mb-2">Need help with payment?</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="tel:+91XXXXXXXXXX" className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Us
                </a>
                <span className="text-gray-300">•</span>
                <a href="https://wa.me/91XXXXXXXXXX" className="inline-flex items-center gap-1.5 text-green-600 hover:text-green-700 font-semibold text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Payment;