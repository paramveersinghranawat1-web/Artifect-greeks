import React from "react";

const WhatsAppCTA = () => {
  const phoneNumber = "919876543210"; // Apna number yaha daalo (country code ke sath)
  const message = "Hello, I want to know more about your course!";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12.04 2C6.58 2 2.15 6.42 2.15 11.88c0 1.9.5 3.75 1.47 5.38L2 22l4.89-1.57a9.86 9.86 0 005.15 1.47c5.46 0 9.89-4.42 9.89-9.88S17.5 2 12.04 2zm5.71 14.29c-.24.67-1.41 1.3-1.94 1.38-.5.07-1.13.1-1.82-.12-.42-.14-.95-.31-1.63-.61-2.88-1.24-4.76-4.13-4.9-4.33-.14-.2-1.17-1.55-1.17-2.95 0-1.4.73-2.08.99-2.37.26-.29.56-.36.75-.36.19 0 .38 0 .54.01.17.01.4-.06.63.49.24.57.81 1.96.88 2.1.07.14.12.31.02.51-.1.2-.15.31-.3.47-.15.16-.32.36-.46.48-.15.12-.3.25-.13.49.17.24.75 1.24 1.61 2.01 1.11 1 2.04 1.31 2.33 1.46.29.14.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.4-.24.67-.14.27.1 1.7.8 1.99.94.29.14.48.2.55.31.07.12.07.67-.17 1.34z" />
      </svg>
    </a>
  );
};

export default WhatsAppCTA;
