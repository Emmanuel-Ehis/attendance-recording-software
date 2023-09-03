// src/app/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import supabase from '@/DB/Client';

const Navbar = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const { data, error } = await supabase.auth.getUser();

        if (data) {
          const { user } = data;
          const id = user.id;
          const em = user.email;

          const { data: userdetails } = await supabase
            .from('Users')
            .select('*')
            .eq('userID', id);

          if (userdetails && userdetails.length > 0) {
            const { Name } = userdetails[0];
            setUserData({
              email: em,
              Name: Name,
            });
          }
        }

        if (error) {
          console.error("Error fetching user data:", error.message);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    }

    fetchUserData();
  }, []);

  return (
    <nav className="bg-[#A9EADA] p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold text-black">
        <Link href="/">ARS</Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative cursor-pointer transform hover:scale-105">
          <i className="fa-regular fa-bell text-black transition-colors hover:text-red-500"></i>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </div>
        <div className="relative cursor-pointer transform hover:scale-105">
          <i className="fa-regular fa-message text-black transition-colors hover:text-red-500"></i>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
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
            <div className="font-semibold text-black">
              {userData ? userData.Name : 'Loading...'}
            </div>
            <div className="text-sm text-gray-400">
              {userData ? userData.email : 'Loading...'}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
