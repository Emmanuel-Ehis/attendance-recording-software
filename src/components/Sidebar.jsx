import React, { useState } from "react";
import Link from "next/link";
import supabase from "@/DB/Client";

const Sidebar = ({
  resetSelectedClass,
  setSelectedClass,
  onLogout,
  onHistoryClick, // Add the onHistoryClick prop
  onCalendarClick, // Add the onCalendarClick prop
  onDashboardClick,
}) => {
  // Define state variables to track which button is active
  const [isHistoryActive, setIsHistoryActive] = useState(false);
  const [isCalendarActive, setIsCalendarActive] = useState(false);

  const handleHistoryClick = () => {
    resetSelectedClass();
    setSelectedClass("attendancereport");
    setIsHistoryActive(true); // Set the history button as active
    setIsCalendarActive(false); // Set the calendar button as inactive
    onHistoryClick(); // Call the onHistoryClick function passed from Page.js
  };

  const handleCalendarClick = () => {
    resetSelectedClass();
    setSelectedClass("calendar");
    setIsCalendarActive(true); // Set the calendar button as active
    setIsHistoryActive(false); // Set the history button as inactive
    onCalendarClick(); // Call the onCalendarClick function passed from Page.js
  };

  const handleDashboardClick = () => {
    resetSelectedClass();
    setSelectedClass("dashboard");
    setIsCalendarActive(false);
    setIsHistoryActive(false); 
    onDashboardClick();
  }


  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    } else {
      onLogout();
    }
  };

  return (
    <div
      className="bg-[#A9EADA] text-white h-screen w-64 py-9 mt-0 flex flex-col sticky top-0 z-10"
      style={{ position: "fixed" }}
    >
       <Link href="/">
        <div className="flex items-center space-x-9 px-4 py-2 my-0 m-1 mt-[3rem] rounded bg-white text-black hover:bg-gray-600 hover:text-white"
          onClick={handleDashboardClick}
        >
          <i className="fas fa-tachometer-alt m-1"></i> Dashboard
        </div>
      </Link>
      <Link href="/">
        <div
          className={`flex items-center space-x-9 px-4 py-2 my-2  m-1 mt-[1rem] rounded bg-white text-black hover:bg-gray-600 hover:text-white ${
            isCalendarActive ? "bg-gray-600 text-white" : ""
          }`}
          onClick={handleCalendarClick}
        >
          <i className="fas fa-tachometer-alt m-1"></i> Calendar
        </div>
      </Link>
      <Link href="/">
        <div
          className={`flex items-center space-x-2 px-4 py-2 my-2 m-1 rounded bg-white text-black hover:bg-gray-600 hover:text-white ${
            isHistoryActive ? "bg-gray-600 text-white" : ""
          }`}
          onClick={handleHistoryClick}
        >
          <i className="far fa-calendar m-1"></i> History
        </div>
      </Link>
      <Link href="/">
        <div onClick={handleLogout} className="flex items-center space-x-2 px-4 py-2 my-2 m-1 rounded bg-white text-black hover:bg-gray-600 hover:text-white">
          <i className="fas fa-sign-out m-1"></i> Logout
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
