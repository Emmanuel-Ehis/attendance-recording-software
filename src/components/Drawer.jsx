import React from 'react';
import Image from 'next/image';

const Drawer = ({ resetSelectedClass, setSelectedClass }) => {
  const handleHistoryClick = () => {
    resetSelectedClass(); // Reset the selectedClass state
    setSelectedClass('attendancereport'); // Set selectedClass to 'attendance-report' to display the AttendanceReportPage
  };

  return (
    <div className="w-64 py-9 mt-0 flex flex-col">
      {/* User Profile Display */}
      <div className="flex items-center space-x-2 p-4 bg-white">
        <Image
          src="/profile-picture.jpeg"
          alt="User Profile"
          className="w-10 h-10 rounded-full"
          width={40}
          height={40}
        />
        <div className="flex flex-col">
          <div className="font-semibold text-black">Emmanuel Oriazowan</div>
          <div className="text-sm text-gray-400">2523224@dundee.ac.uk</div>
        </div>
      </div>
      {/* Sidebar Items */}
      <div className="bg-[#A9EADA] text-white h-screen flex flex-col">
        <div className="flex items-center space-x-9 px-4 py-2 my-2 m-1 mt-[3rem] rounded bg-white text-black hover:bg-gray-600 hover:text-white"
          onClick={resetSelectedClass}
        >
          <i className="fas fa-tachometer-alt m-1" /> Dashboard
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 my-2 m-1 rounded bg-white text-black hover:bg-gray-600 hover:text-white">
          <i className="far fa-calendar m-1" /> Calendar
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 my-2 m-1 rounded bg-white text-black hover:bg-gray-600 hover:text-white"
          onClick={handleHistoryClick}
        >
          <i className="fa-solid fa-user-graduate m-1" /> History
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 my-2 m-1 rounded bg-white text-black hover:bg-gray-600 hover:text-white">
          <i className="fas fa-sign-out m-1" /> Logout
        </div>
      </div>
    </div>
  );
};

export default Drawer;

