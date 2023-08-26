import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PocketBase from 'pocketbase';

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const pb = new PocketBase('http://127.0.0.1:8090');

  useEffect(() => {
   
    async function fetchUserData() {
    
      const data = pb.authStore.model;
   
      const imageURL=`http://127.0.0.1:8090/api/files/${data.collectionId}/${data.id}/${data.avatar}?token=${pb.authStore.token}`
      setUserData({
        ...data,
        avatarUrl: imageURL,
      });
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
        {/* if no user data display login button otherwise userdata */}
        {!userData ? (
          <Link href="/login">
            <button className="bg-black text-white px-4 py-2 rounded">
              Login
            </button>
          </Link>
        ) : (
          <div className="flex items-center space-x-2">
            <div className="relative cursor-pointer transform hover:scale-105">
              <Image
                src={userData.avatarUrl}
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="font-semibold">{userData.name}</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

