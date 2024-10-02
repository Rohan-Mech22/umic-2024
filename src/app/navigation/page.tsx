"use client";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import umic_logo from '../public/aerove logo white-01 (1).png'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#000000] p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <h1 className="text-white font-bold text-xl">
          <Link href="/">
            <Image 
              src={umic_logo}
              width={150}
              height={150}  
              alt="umic image"
            />
          </Link>
        </h1>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            {/* Icon for Hamburger Menu */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex text-white space-x-4">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/#achievements" className="hover:text-gray-400">Achievements</Link>
          <Link href="/team" className="hover:text-gray-400">Team</Link>
          <Link href="#contact" className="hover:text-gray-400">Contact Us</Link>
        </div>
      </div>

      {/* Mobile Menu (conditionally shown) */}
      {menuOpen && (
        <div className="md:hidden bg-[#000000] text-white mt-2 space-y-2 p-4">
          <Link href="/" className="block hover:text-gray-400">Home</Link>
          <Link href="/#achievements" className="block hover:text-gray-400">Achievements</Link>
          <Link href="/team" className="block hover:text-gray-400">Team</Link>
          <Link href="#contact" className="block hover:text-gray-400">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
