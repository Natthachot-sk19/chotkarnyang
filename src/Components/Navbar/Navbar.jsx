import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#1e1f25] sticky top-0 z-50">
      <div className="flex justify-between items-center md:h-[100px] px-5 md:px-10 ">
        <div className="z-10">
          <a href="/">
            <img src="./img/logo.png" alt="" className="object-cover size-[100px]" />
          </a>
        </div>

        <div className="hidden md:flex text-yellow-400 gap-5">
          <a href="/" className="text-[24px] hover:text-white font-semibold">
            หน้าแรก
          </a>
          <a href="product" className="text-[24px] hover:text-white font-semibold">
            สินค้า
          </a>
          <a href="service" className="text-[24px] hover:text-white font-semibold">
            บริการของเรา
          </a>
          <a href="contact" className="text-[24px] hover:text-white font-semibold">
            ติดต่อเรา
          </a>
        </div>

        <div className="hidden md:flex items-center bg-white px-5 py-1 rounded-md">
          <div className="bg-black rounded-full flex justify-center items-center p-2">
            <FontAwesomeIcon icon={faPhone} className="text-yellow-600 text-[20px]" />
          </div>
          <div className="ml-5">
            <h1 className="font-bold text-yellow-600 text-[24px]">
              089-905-6482
            </h1>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-yellow-400 text-[24px]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#1e1f25] text-yellow-400">
          <a href="/" className="py-2 text-[24px] hover:text-white font-semibold" onClick={toggleMobileMenu}>
            หน้าแรก
          </a>
          <a href="product" className="py-2 text-[24px] hover:text-white font-semibold" onClick={toggleMobileMenu}>
            สินค้า
          </a>
          <a href="service" className="py-2 text-[24px] hover:text-white font-semibold" onClick={toggleMobileMenu}>
            บริการของเรา
          </a>
          <a href="contact" className="py-2 text-[24px] hover:text-white font-semibold" onClick={toggleMobileMenu}>
            ติดต่อเรา
          </a>
          <div className="flex flex-col items-center bg-white px-5 py-2 rounded-md mt-4 mb-2">
            <div className="bg-black rounded-full flex justify-center items-center p-2">
              <FontAwesomeIcon icon={faPhone} className="text-yellow-600 text-[20px]" />
            </div>
            <div className="mt-2">
              <h1 className="font-bold text-yellow-600 text-[24px]">
                089-905-6482
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
