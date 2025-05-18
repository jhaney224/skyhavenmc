// components/Navbar.jsx
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md fixed z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo/Brand */}
        <a href="/" className="justify-between">
          <img src={logo} className="logo" alt="SkyHavenMC logo" />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="#features" className="hover:text-blue-600">Features</a></li>
          <li><a href="#meet-the-team" className="hover:text-blue-600">Team</a></li>
          <li><a href="#gallery" className="hover:text-blue-600">Gallery</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl text-blue-600"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li><a href="#features" onClick={toggleMenu}>Features</a></li>
            <li><a href="#meet-the-team" onClick={toggleMenu}>Team</a></li>
            <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
