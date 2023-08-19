// src/app/components/Navbar.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-[#A9EADA] text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-black">
        <Link href="/">ARS</Link>
      </div>
      <div className="flex items-center space-x-4">
  <div className="relative">
    <i className="fa-regular fa-bell text-black"></i>
    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
  </div>
  <div className="relative">
    <i className="fa-regular fa-message text-black"></i>
    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
  </div>
  <div className="flex items-center space-x-2">
          <Image
            src="/profile-picture.jpeg"
            alt="User Profile"
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <div className="font-semibold text-black">John Doe</div>
            <div className="text-sm text-gray-400">john.doe@example.com</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
