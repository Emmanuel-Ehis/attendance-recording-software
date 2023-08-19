"use client"

import React, { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Sidebar from '@/app/components/Sidebar';
import DashboardComponent from '@/app/components/Dashboard';
import ClassDetailsPage from '@/app/components/ClassDetails';


const Page = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const resetSelectedClass = () => {
    setSelectedClass(null);
  };
  return(
  <div className="bg-white overflow-hidden flex">
    <div className="z-10 w-16 hidden md:block">
    <Sidebar resetSelectedClass={resetSelectedClass} />
    </div>
    <div className="flex-1 flex flex-col">
      <div className="z-10 overflow-hidden">
        <Navbar />
      </div>
      <div className="relative z-0 flex-1 overflow-y-hidden p-8 ml-0 md:ml-[7rem]">
        {
          selectedClass ? (
            <ClassDetailsPage className={selectedClass} />
          ) : (
            <DashboardComponent setSelectedClass={setSelectedClass} />
          )
        }
      </div>
    </div>
  </div>
);
};

export default Page;
