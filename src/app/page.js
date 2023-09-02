"use client"
import React, {useState,useEffect}from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import ClassDetailsPage from '@/components/ClassDetails';
import AttendanceReport from '@/components/History';
import Login from '@/components/login';
import PocketBase from 'pocketbase'


const Page = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

 
  const resetSelectedClass = () => {
    setSelectedClass(null);
  };
  //login handler
  const handleLoginStatusChange = (status) => {
    setIsLoggedIn(status); 
  };
  //logout handler
  const handleLogout = () => {
    setIsLoggedIn(false); 
  };
  useEffect(() => {
    const pb = new PocketBase('http://127.0.0.1:8090');
//TODO: verify the token for security purposes

    const token = localStorage.getItem('pocketbase_auth'); 
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div className="bg-white overflow-hidden flex">
        {IsLoggedIn ? (
          <>
            <div className="z-10 w-16 hidden md:block sticky top-0">
              <Sidebar resetSelectedClass={resetSelectedClass} setSelectedClass={setSelectedClass} onLogout={handleLogout} />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="z-10 overflow-hidden">
                <Navbar />
              </div>
              <div className="relative z-0 flex-1 overflow-y-hidden p-8 ml-0 md:ml-[7rem]">
                <Routes>
                  <Route path="/" element={<Dashboard setSelectedClass={setSelectedClass} />} />
                  <Route path="/History" element={<AttendanceReport />} />
                  <Route path="/classdetails/:className" element={<ClassDetailsPage resetSelectedClass={resetSelectedClass} />} />
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login onLoginStatusChange={handleLoginStatusChange}/>} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default Page;

