import React from 'react';
import Navbar from '@/app/components/Navbar';
import Sidebar from '@/app/components/Sidebar';

// import { About, Explore, GetStarted, Hero } from '../sections';

const Page = () => (
  <div className="bg-white overflow-hidden">
    <div className="z-10 position-sticky">
      <Navbar />
    </div>
     <div className="relative z-0">
      <Sidebar />
    </div>
    {/*
    <div className="relative z-0">
      <About />
      <div className="gradient-03 z-10" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
    </div>
    <Footer /> */}
  </div>
  );

export default Page;