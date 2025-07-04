import React, { useState } from "react";
import { LuMoveUpRight } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";

const Heading = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        {/* description */}
        <div className="">
          <div className="flex items-center justify-center gap-2 p-2 sm:p-3 text-xs sm:text-sm md:text-base">
            <p className="text-center px-2">
              Subscribe to our Newsletter For New & latest Blogs and Resources
            </p>
            <LuMoveUpRight className="text-yellow-500 size-4 sm:size-5" />
          </div>

          {/* title or navigation */}
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3  bg-gray-900/50">
            {/* logo */}
            <div className="logo flex items-center gap-1 sm:gap-2">
              <img src="logo.png" alt="logo" className="w-6 h-6 sm:w-8 sm:h-8" />
              <p className="font-extrabold text-sm sm:text-base lg:text-lg">FutureTech</p>
            </div>

            {/* desktop navigation */}
            <div className="hidden md:flex items-center gap-2">
              <ul className="flex items-center gap-2 lg:gap-5">
                <li className="transition-all duration-300 px-2 sm:px-3 lg:px-4 py-2 lg:py-4 rounded-xl hover:bg-yellow-500 hover:text-black text-sm lg:text-base">Home</li>
                <li className="transition-all duration-300 border-2 px-2 sm:px-3 lg:px-4 py-2 lg:py-4 rounded-xl bg-black text-white hover:bg-yellow-500 hover:text-black text-sm lg:text-base">News</li>
                <li className="transition-all duration-300 px-2 sm:px-3 lg:px-4 py-2 lg:py-4 rounded-xl hover:bg-yellow-500 hover:text-black text-sm lg:text-base">Services</li>
                <li className="transition-all duration-300 px-2 sm:px-3 lg:px-4 py-2 lg:py-4 rounded-xl hover:bg-yellow-500 hover:text-black text-sm lg:text-base">Contact</li>
              </ul>
            </div>

            {/* desktop contact button */}
            <div className="hidden md:block">
              <button className="transition-all duration-300 px-3 sm:px-4 lg:px-4 py-2 lg:py-4 rounded-xl bg-yellow-500 hover:text-black font-extrabold text-sm lg:text-base">Contact Us</button>
            </div>

            {/* mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-white hover:text-yellow-500 transition-colors"
              >
                {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* mobile navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-900/95 border-b">
              <ul className="flex flex-col items-center py-4 space-y-2">
                <li className="transition-all duration-300 px-4 py-3 rounded-xl hover:bg-yellow-500 hover:text-black w-full text-center">Home</li>
                <li className="transition-all duration-300 border-2 px-4 py-3 rounded-xl bg-black text-white hover:bg-yellow-500 hover:text-black w-full text-center">News</li>
                <li className="transition-all duration-300 px-4 py-3 rounded-xl hover:bg-yellow-500 hover:text-black w-full text-center">Services</li>
                <li className="transition-all duration-300 px-4 py-3 rounded-xl hover:bg-yellow-500 hover:text-black w-full text-center">Contact</li>
                <li className="transition-all duration-300 px-4 py-3 rounded-xl bg-yellow-500 hover:text-black w-full text-center font-extrabold">Contact Us</li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Heading;
