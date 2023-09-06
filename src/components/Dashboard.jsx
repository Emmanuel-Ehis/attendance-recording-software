// src/app/components/Dashboard.jsx
"use client"
import React, { useEffect, useState } from 'react';
import user from '@/DB/User';
import supabase from '@/DB/Client';
import { useRouter } from 'next/router';

/**
 * TODO
 * Use a modal to show class details on click
 * mark student absent if time passes
 * 
 * 
 * 
 */


const Dashboard = ({ setSelectedClass }) => {
 
  const currentRoute = "Today's Classes";

  const [fetchedData, setFetchedData] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState('');


  async function getClassDetails(items) {
    // Create an empty array to store the results
    let results = [];
   
  
    for (let item of items) {
 
      const currentDate = new Date();
      const dateString = currentDate.toISOString().split('T')[0];
      const userId = await user();
      const attendanceData = await getAttendanceStatus(item.SubjectID, userId, dateString);

      const status = attendanceData[0]?.Status || ''; // Extract the status if available, or set an empty string if not

      console.log(status);
      let classDetail = {
        Start: item.StartTime,
        End: item.EndTime,
        Name: item.Subjects.Name,
        initals: item.Subjects.Initials,
        ClassID: item.SubjectID,
        status: status,
      }
    

  
      results.push(classDetail);
    }
  
    return results;
  }



function getCurrentDayOfWeek() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  return daysOfWeek[dayIndex];
}
async function getAttendanceStatus(ClassID, userId, dateString) {
  const { data: attendance, error } = await supabase
    .from('AttendanceRecords')
    .select('*')
    .eq('userID', userId)
    .eq('SubjectID', ClassID)
    .eq('Date', dateString);

  if (error) {
    throw error;
  }

  return attendance || [];
}
  async function obtainTodayClasses() {
    
    try {
   
      const currentDayOfWeek = getCurrentDayOfWeek();
    const userId = await  user()

  
      
    const { data: sessions, error } = await supabase
    .from('Sessions')
    .select(`*,Subjects(Name, Initials)`)
    .eq('WeekDay', currentDayOfWeek)
    .eq('userID', userId)
    

    if (error) {
      throw error;
    }
 
const results = await getClassDetails(sessions);

      setFetchedData(results); 
     
      
    } catch (error) {
      console.error('DB error', error);
      // Handle errors here
    }
  }

  async function UpdateStatus(SubjectID) {
    const userId = await user();
    const currentDate = new Date();
    const dateString = currentDate.toISOString().split('T')[0];
    const { data, error } = await supabase
    .from('AttendanceRecords')
    .insert([
      { RoleID:'1', Status: 'Present', SubjectID:SubjectID , userID: userId, Date: dateString },
    ])
    .select()
    if (error) {
      throw error;
    }

    if (data) {
      alert('Attendance marked successfully');
    }

  }

  useEffect(() => {
    obtainTodayClasses();
   
  }, []);

  const renderClassStatus = (classItem) => {
    if (classItem.status === 'Present') {
      return <p className="text-green-600">You are marked present</p>;
    } else if (classItem.status === 'Cancelled') {
      return <p className="text-red-600">Class Cancelled</p>;
    } else if (classItem.status === 'Absent') {
      return <p className="text-red-600 text-small">You were marked absent by Faculty</p>;
    } else {
      return (
        <button
          onClick={() => UpdateStatus(classItem.ClassID)} // Pass classItem.ClassID as an argument
          className="bg-green-500 text-white px-2 py-1 rounded-full hover:underline"
          disabled={classItem.status === 'Absent'}
        >
          Mark me present
        </button>
      );
    }
  };




  return (
    <div className="p-8 mt-[-4rem]">
      <div className="py-4 px-8">
        <h1 className="text-2xl font-semibold text-black">Dashboard</h1>
        <p className="text-gray-600">{currentRoute}</p>
      </div>
  
      <div className="flex flex-wrap px-8">
        {fetchedData.map((classItem, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 m-2 flex items-center space-x-4 shadow-md cursor-pointer transform hover:scale-105"
            style={{ width: '100%', maxWidth: '30rem' }}
            onClick={() => setSelectedClass(classItem.ClassID[0])}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-bold text-lg cursor-pointer">
              {classItem.initals}
            </div>
            <div className="flex flex-col flex-grow">
              <p className="font-semibold text-black">{classItem.Name}</p>
              <p className="text-gray-600 md:hidden">
                {classItem.Start} - {classItem.End}
              </p>
              {renderClassStatus(classItem.status)}
            </div>
            <div className="flex items-center mt-[-2rem]">
              <p className="text-gray-600 hidden md:block">{classItem.Start}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
        }

export default Dashboard;
