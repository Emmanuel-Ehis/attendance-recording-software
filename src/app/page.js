'use client'
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import ClassDetailsPage from '@/components/ClassDetails';
import History from '@/components/History';
import CalendarPage from '@/components/Calendar';
import Login from '@/components/login';
import supabase from '@/DB/Client';
import Signup from '@/components/SignUp';


const Page = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [isHistoryActive, setIsHistoryActive] = useState(false); // Track if the history button is active
  const [isCalendarActive, setIsCalendarActive] = useState(false); // Track if the calendar button is active

  const resetSelectedClass = () => {
    setSelectedClass(null);
  };

  // Login handler
  const handleLoginStatusChange = (status) => {
    setIsLoggedIn(status);
  };

  // Logout handler
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Function to handle History button click
  const handleHistoryClick = () => {
    resetSelectedClass();
    setSelectedClass('attendancereport');
    setIsHistoryActive(true);
    setIsCalendarActive(false);
  };

  // Function to handle Calendar button click
  const handleCalendarClick = () => {
    resetSelectedClass();
    setSelectedClass('calendar');
    setIsCalendarActive(true);
    setIsHistoryActive(false);
  };

  // Function to handle Dashboard button click
  const handleDashboardClick = () => {
    resetSelectedClass();
    setIsHistoryActive(false);
    setIsCalendarActive(false);
  }

  useEffect(() => {
    const token = localStorage.getItem('sb-hyaiklckhkyutgrxxyft-auth-token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-white overflow-hidden flex">
        {IsLoggedIn ? (
          <>
            <div className="z-10 w-16 hidden md:block sticky top-0">
              <Sidebar
                resetSelectedClass={resetSelectedClass}
                setSelectedClass={setSelectedClass}
                onLogout={handleLogout}
                onHistoryClick={handleHistoryClick}
                onCalendarClick={handleCalendarClick}
                onDashboardClick={handleDashboardClick}
                // Pass the functions to the Sidebar component
              />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="z-10 overflow-hidden">
                <Navbar />
              </div>
              <div className="relative z-0 flex-1 overflow-y-hidden p-8 ml-0 md:ml-[7rem]">
                <Routes>
                  <Route
                    path="/"
                    element={
                      isHistoryActive ? ( // Render History component if the history button is active
                        <History setSelectedClass={setSelectedClass} />
                      ) : isCalendarActive ? ( // Render Calendar component if the calendar button is active
                        <CalendarPage />
                      ) : (
                        <Dashboard setSelectedClass={setSelectedClass} />
                      ) // Default to Dashboard component
                    }
                  />
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Login onLoginStatusChange={handleLoginStatusChange} />}
            />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
};

export default Page;
