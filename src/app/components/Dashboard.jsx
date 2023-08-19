// src/app/components/Dashboard.jsx
"use client"

import React from 'react';
import { classes } from '@/app/constants';

const Dashboard = ({ setSelectedClass }) => {
  const currentRoute = "Today's Classes";

  return (
    <div className="p-8 mt-[-4rem]">
      <div className="py-4 px-8">
        <h1 className="text-2xl font-semibold text-black">Dashboard</h1>
        <p className="text-gray-600">{currentRoute}</p>
      </div>

      <div className="flex flex-wrap px-8">
        {classes.map((classItem, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 m-2 flex items-center space-x-4 shadow-md cursor-pointer transform hover:scale-105"
            style={{ width: '100%', maxWidth: '30rem' }}
            onClick={() => setSelectedClass(classItem.name)}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-bold text-lg cursor-pointer">
              {classItem.name[0]}
            </div>
            <div className="flex flex-col flex-grow">
  <p className="font-semibold text-black">{classItem.name}</p>
  <p className="text-gray-600 md:hidden">09:00 am</p>
  {classItem.status === 'present' ? (
    <p className="text-green-600">You were marked present</p>
  ) : classItem.status === 'cancelled' ? (
    <p className="text-red-600">Class Cancelled</p>
  ) : classItem.status === 'absent' ? (
    <p className="text-red-600 text-small">You were marked absent by Faculty</p>
  ) : (
    <button className="bg-green-500 text-white px-2 py-1 rounded-full hover:underline">
      Mark me present
    </button>
  )}
</div>
            <div className="flex items-center mt-[-2rem]">
              <p className="text-gray-600 hidden md:block">{classItem.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;