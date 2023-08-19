import React from 'react';
import Navbar from '@/app/components/Navbar';
import Sidebar from '@/app/components/Sidebar';
import DashboardComponent from '@/app/components/Dashboard';


const Page = () => (
  <div className="bg-white overflow-hidden flex">
    <div className="z-10 w-16 hidden md:block">
      <Sidebar />
    </div>
    <div className="flex-1 flex flex-col">
    <div className="z-10 overflow-hidden">
        <Navbar />
      </div>
      <div className="relative z-0 flex-1 overflow-y-hidden p-8 ml-0 md:ml-[7rem]">
        <DashboardComponent />
      </div>
    </div>
  </div>
);

export default Page;