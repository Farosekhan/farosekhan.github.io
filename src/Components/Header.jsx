import React, { useState } from "react";

const Header = () => {
  // State for toggling the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="absolute inset-0"></div>

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <p className="text-2xl font-bold text-red-400 font-serif">
                    PORTFOLIO
                  </p>
                </a>
              </div>

              <div className="hidden lg:flex lg:items-center lg:space-x-10">
                <a
                  href="#"
                  title=""
                  className="text-base font-medium text-white"
                >
                  About
                </a>

                <a
                  href="#skills"
                  title=""
                  className="text-base font-medium text-white"
                >
                  Skills
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base font-medium text-white"
                >
                  Project
                </a>

                <a
                  href="#contact"
                  title=""
                  className="text-base font-medium text-white"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } flex-col justify-between w-full max-w-xs min-h-screen px-4 py-10 bg-black sm:px-6 lg:hidden`}
      >
        <button
          type="button"
          className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
          onClick={closeMobileMenu} // Close the mobile menu
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col flex-grow h-full">
          <nav className="flex flex-col flex-1 mt-10 space-y-2">
            <a
              href="#"
              title=""
              className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              About
            </a>

            <a
              href="#"
              title=""
              className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              Solutions
            </a>

            <a
              href="#"
              title=""
              className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              Resources
            </a>

            <a
              href="#"
              title=""
              className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              Pricing
            </a>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Header;
