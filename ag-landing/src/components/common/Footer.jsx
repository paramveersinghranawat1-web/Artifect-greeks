import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#0f4ba6] shadow-md text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and Company Info */}
        <div className="flex flex-col space-y-4">
          <div className="text-2xl font-bold">NeoArtifact Geeks</div>
          <p className="text-sm">
            Operated by NeoArtifact Geeks Technologies Private Limited.
          </p>
          <p className="text-sm">
            Empowering students with industry-ready skills and knowledge to build successful tech careers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 cursor-pointer transition">About Us</li>
            <li className="hover:text-gray-300 cursor-pointer transition">Our Team</li>
            <li className="hover:text-gray-300 cursor-pointer transition">Careers</li>
            <li className="hover:text-gray-300 cursor-pointer transition">Blog</li>
            <li className="hover:text-gray-300 cursor-pointer transition">Success Stories</li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-semibold mb-4">Courses</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 cursor-pointer transition">Web Development</li>
            <li className="hover:text-gray-300 cursor-pointer transition">Data Science</li>
            <li className="hover:text-gray-300 cursor-pointer transition">Mobile Development</li>
            <li className="hover:text-gray-300 cursor-pointer transition">UI/UX Design</li>
            <li className="hover:text-gray-300 cursor-pointer transition">Cloud Computing</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-sm">
            2nd Floor, Khatana Tower, Ganesh Marg, Chhayadip Nagar, Surya Nagar, Gopal Pura Mode, Jaipur, Rajasthan 302015
          </p>
          <p className="text-sm mt-2">Phone: +91 9024 000740</p>
          <p className="text-sm">Email: hello@artifactgeeks.com</p>
        </div>
      </div>

      {/* Optional: Copyright */}
      <div className="text-center text-gray-300 text-sm mt-6 pb-4 border-t border-blue-700">
        &copy; {new Date().getFullYear()} NeoArtifact Geeks. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
