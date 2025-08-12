import React from "react";
import { Link } from "react-router-dom"; // remove if not using react-router
import  logo from '../assets/Onola-Institute-white.png'
const Footer = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#000] text-gray-300 py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo Section */}
          <div className="flex w-[150px] items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-28 object-contain"
            />

          </div>

          {/* Navigation Links */}
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap gap-4 text-sm">
              {pages.map((page) => (
                <li key={page.name}>
                  <Link
                    to={page.path}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-700 mt-4 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} MyCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
