import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import logo from "../assets/logo1.png";
import RequestDemoModal from "./RequestDemoModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-10 left-0 w-full z-50 bg-[#1B1F23] shadow-md px-[5%] py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="text-white font-semibold hover:text-[#00C48C]">Home</Link>
          <Link to="/about" className="text-white font-semibold hover:text-[#00C48C]">About Us</Link>
          <Link to="/contact" className="text-white font-semibold hover:text-[#00C48C]">Contact Us</Link>
        </nav>

        {/* Request Demo Button (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#00C48C] hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-md transition"
          >
            Request Demo
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl">
            {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-[#1B1F23] z-40 flex flex-col items-center gap-4 py-6 shadow-md">
          <Link to="/" className="text-white font-semibold hover:text-[#00C48C]" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-white font-semibold hover:text-[#00C48C]" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className="text-white font-semibold hover:text-[#00C48C]" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsMenuOpen(false);
            }}
            className="bg-[#00C48C] hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-md transition"
          >
            Request Demo
          </button>
        </div>
      )}

      {/* Request Demo Modal */}
      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
