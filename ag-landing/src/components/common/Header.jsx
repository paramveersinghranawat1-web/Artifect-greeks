import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Navigation items with routes
  const navItems = [
    { name: "Digital Marketing", path: "/courses/digital-marketing/optin" },
    { name: "DevOps", path: "/courses/devops/optin" },
    { name: "Cyber-security", path: "/courses/cyber-security/optin" },
    { name: "Full Stack", path: "/courses/fullstack-qa/optin" },
  ];

  return (
    <>
      <header className="w-full bg-[#0f4ba6]/95 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <Link to="/" onClick={closeMenu}>
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-white font-medium">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative list-none group cursor-pointer"
              >
                <Link
                  to={item.path}
                  className="transition-colors duration-300 hover:text-gray-200"
                >
                  {item.name}
                </Link>

                {/* Hover underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden px-6 pb-4 space-y-4 text-white font-medium bg-[#0f4ba6]">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className="block transition duration-300 hover:text-gray-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
}

export default Header;
