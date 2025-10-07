import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold text-slate-800">Foodie</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {/* Use `to` if you want react-router navigation, or <a> for section links */}
            <a href="#menu" className="text-slate-600 hover:text-amber-600 transition-colors font-medium">
              Menu
            </a>
            <a href="#about" className="text-slate-600 hover:text-amber-600 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-slate-600 hover:text-amber-600 transition-colors font-medium">
              Contact
            </a>
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-amber-200 transition-all duration-200">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
