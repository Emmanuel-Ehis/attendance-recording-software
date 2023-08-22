"use client"

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import DashboardComponent from '@/components/Dashboard';
import ClassDetailsPage from '@/components/ClassDetails';
import AttendanceReport from '@/components/attendancereport';

const Page = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const resetSelectedClass = () => {
    setSelectedClass(null);
  };
  return(
  <div className="bg-white overflow-hidden flex">
    <div className="z-10 w-16 hidden md:block">
    <Sidebar resetSelectedClass={resetSelectedClass} setSelectedClass={setSelectedClass}/>
    </div>
    <div className="flex-1 flex flex-col">
      <div className="z-10 overflow-hidden">
        <Navbar />
      </div>
      {/* <div className="relative z-0 flex-1 overflow-y-hidden p-8 ml-0 md:ml-[7rem]"> */}
      <div className="relative z-0 flex-1 overflow-y-hidden p-8 ml-0 md:ml-[7rem]">
        {selectedClass === 'attendancereport' ? ( // Render AttendanceReportPage when selectedClass is 'attendance-report'
          <AttendanceReport/>
        ) : selectedClass ? ( // Render ClassDetailsPage when selectedClass is set
          <ClassDetailsPage className={selectedClass} resetSelectedClass={resetSelectedClass}/>
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
