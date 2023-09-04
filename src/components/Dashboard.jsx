// src/app/components/Dashboard.jsx
"use client"
import React, { useEffect, useState } from 'react';
import user from '@/DB/User';
import supabase from '@/DB/Client';




const Dashboard = ({ setSelectedClass }) => {
 
  const currentRoute = "Today's Classes";

  const [fetchedData, setFetchedData] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState('');
  async function getClassDetails(items) {
    // Create an empty array to store the results
    let results = [];
    let status='';
  
    for (let item of items) {
 
     
     status= await getAttendanceStatus(item.SubjectID);
  
  for (const i of status){
    status=i.Status;

  }
     
      let classDetail = {
       Start: item.StartTime,
        End: item.EndTime,
        Name: item.Subjects.Name,
        initals: item.Subjects.Initials,
        ClassID: item.SubjectID,
        status: status,


       
      };
   
      
      results.push(classDetail);
    }
   

    return results;
  }

  async function getAttendanceStatus(ClassID) {
    const userId = await user();
    const { data: attendance, error } = await supabase
      .from('AttendanceRecords')
      .select(`*`)
      .eq('userID', userId)
      .eq('SubjectID', ClassID);

    if (error) {
      throw error;
    }

    if (attendance && attendance.length > 0) {
      return attendance
    } else {
      return '';
    }
  }

function getCurrentDayOfWeek() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  return daysOfWeek[dayIndex];
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

  async function UpdateStatus() {
    const userId = await user();

    const { data, error } = await supabase
    .from('AttendanceRecords')
    .insert([
      { Role:'1', Status: 'Present', SubjectID:fetchedData.Name , userID: userId },
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
          onClick={UpdateStatus}
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
              {renderClassStatus(classItem)}
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
