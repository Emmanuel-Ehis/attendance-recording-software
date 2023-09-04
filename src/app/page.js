
'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import DashboardComponent from '@/components/Dashboard';
import ClassDetailsPage from '@/components/ClassDetails';
import AttendanceReport from '@/components/attendancereport';
import Calendar from '@/components/Calendar';

const Page = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const openCalendar = () => {
    setSelectedClass(null);
    setIsCalendarOpen(true);
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false);
  };

  const resetSelectedClass = () => {
    setSelectedClass(null);
    setIsCalendarOpen(false);
  };

  return (
    <div className="bg-white overflow-hidden flex">
      <div className="z-10 w-16 hidden md:block sticky top-0">
        <Sidebar
          resetSelectedClass={resetSelectedClass}
          setSelectedClass={setSelectedClass}
          openCalendar={openCalendar}
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="z-10 overflow-hidden">
          <Navbar />
        </div>
        <div className="relative z-0 flex-1 overflow-y-hidden p-8 ml-0 md:ml-[7rem]">
          {selectedClass === 'attendancereport' ? (
            <AttendanceReport />
          ) : selectedClass ? (
            <ClassDetailsPage className={selectedClass} resetSelectedClass={resetSelectedClass} />
          ) : isCalendarOpen ? (
            <Calendar />
          ) : (
            <DashboardComponent setSelectedClass={setSelectedClass} closeCalendar={closeCalendar} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
