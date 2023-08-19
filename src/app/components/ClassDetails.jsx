import React from 'react';

const ClassDetails = ({ className }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md md:ml-[4rem]">
      <div className="py-0 px-0 mb-10">
        <h1 className="text-2xl font-semibold text-black">Dashboard</h1>
        <p className="text-gray-600 text-sm">tc / Attendance</p>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex-grow">
          <p className="text-gray-600">Hi, Emmanuel</p>
            <p className="text-green-600 text-xl">Welcome to {className}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 flex items-center space-x-4 shadow-md">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-bold text-lg mt-[-5rem]">
            {className[0]}
          </div>
          <div className="flex flex-col flex-grow">
            <p className="font-semibold text-black">{className}</p>
            {/* time */}
            <p className="text-gray-600 md:hidden">09:00 am - 10:00 am</p>
            <p className="text-gray-600">Lesson: 12/20</p>
            <p className="text-gray-600">Attendance: 80%</p>
            <p className="text-gray-600">Faculty: Mr. John Doe</p>
            <div className="flex space-x-4">
              <button className="bg-green-500 text-white px-2 py-1 rounded cursor-pointer transform hover:scale-105">
                Mark me present
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer transform hover:scale-105">
                Mark me absent
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-gray-600 mt-[-3rem] hidden md:block">09:00 am - 10:00 am</p>
          </div>
        </div>
        <div className="bg-green-100 p-4 flex items-center justify-center">
          <div className="bg-green-500 text-white rounded-full p-2">
            <i className="fas fa-check-circle text-2xl"></i>
          </div>
        </div>
        <p className="text-green-600 text-center">
          Your attendance has been recorded successfully
        </p>
        <div className="flex justify-center">
          <button className="text-black hover:underline bg-green-500 px-5 py-2 rounded-full cursor-pointer transform hover:scale-105">Alright</button>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;

