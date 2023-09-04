
import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import Weeklystats from '@/components/Weeklystats';
import TrendLineGraph from '@/components/TrendLineGraph';
import TotalStats from '@/components/TotalStats';
import supabase from "@/DB/Client";
import User from "@/DB/User";
import { useState } from "react";




const History = (oncall) => { 
  const [attendedClasses, setAttendedClasses] = useState(0); 
  const [attendedTodayClasses, setAttendedTodayClasses] = useState(0);
  const [absentTodayClasses, setAbsentTodayClasses] = useState(0);
  const calculateSemesterAttendance = (totalClasses, attendedClasses) => {
    return (attendedClasses / totalClasses) * 100;
  };

  


const attended=async(status)=>{
  const userID = await User();
  const { data: attendance, error } =await supabase
    .from('AttendanceRecords')
    .select (`{count:exact}`)
    .eq('userID', userID)
    .eq('Status', status)

  if (error) {
    throw error;
  }
  return attendance || [];
}

attended('Present').then((attendance) => {
  setAttendedClasses(attendance.length)
});
attended('Absent').then((report) => {
  attendedToday().then((attendanceToday) => {
    const sessions=attendanceToday.sessions.length
const percentile=report.length/sessions*100
setAbsentTodayClasses(percentile)
  })
 
  
});
const attendedToday=async()=>{
  const userID = await User();
  const currentDate = new Date();
  const dateString = currentDate.toISOString().split('T')[0];

  const { data: sessions, error } =await supabase
    .from('Sessions')
    .select (`{count:exact}`)
    .eq('userID', userID)
    .eq('Date', dateString)

  if (error) {
    throw error;
  }
  const { data: attendance, error1 } =await supabase
    .from('AttendanceRecords')
    .select (`{count:exact}`)
    .eq('userID', userID)
    .eq('Status', 'Present')
    .eq('Date', dateString)


  return {attendance:attendance,sessions:sessions};
}


attendedToday().then((attendanceToday) => {
const sessions=attendanceToday.sessions.length
const attendance=attendanceToday.attendance.length
const percentage=attendance/sessions*100
setAttendedTodayClasses(percentage)
})
 
  const totalClasses=4; // Total classes in the semester

console.log('classes',attendedClasses)
  const semesterAttendance = calculateSemesterAttendance(totalClasses, attendedClasses);
  
  console.log("semester",semesterAttendance)
    return (
      <div className="bg-white rounded-lg p-4 shadow-md md:ml-[4rem]">
        <div className="py-0 px-0 mb-10">
          <h1 className="text-2xl font-semibold text-black">History</h1>
          <p className="text-gray-600 text-sm">tc / Attendance / Attendance sheet</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Section 1: Present Today */}
        <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center space-y-2">
          <h2 className="text-green-600 text-sm font-semibold">Present | Today</h2>
          <div className="flex items-center space-x-2">
            {/* Graph */}
            <div className="w-12 h-12">
              <CircularProgressbar
                value={attendedTodayClasses} // Set the value for progress (change as needed)
                text={`${attendedTodayClasses.toFixed(2)}%`} // Display percentage
                styles={buildStyles({
                  textColor: 'green', // Color of the percentage text
                  pathColor: 'green', // Color of the progress path
                  trailColor: '#ccc', // Color of the trail (remaining path)
                })}
              />
            </div>
           
          </div>
        </div>
  
          {/* Section 2: Absent Today */}
          <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center space-y-2">
            <h2 className="text-red-600 text-sm font-semibold">Absent | Today</h2>
            <div className="flex items-center space-x-2">
            <div className="w-12 h-12">
            <CircularProgressbar
              value={absentTodayClasses} // Set the value for progress (change as needed)
              text={`${absentTodayClasses.toFixed(2)}%`} // Display percentage
              styles={buildStyles({
                textColor: 'red', // Color of the percentage text
                pathColor: 'red', // Color of the progress path
                trailColor: '#ccc', // Color of the trail (remaining path)
              })}
            />
          </div>
         
          </div>
        </div>
  
          {/* Section 3: Attendance This Month */}
          <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center space-y-2">
            <h2 className="text-blue-600 text-sm font-semibold">Attendance | This Month</h2>
            <div className="flex items-center space-x-2">
            <div className="w-12 h-12">
            <CircularProgressbar
              value={85} 
              text={`${85}%`}
              styles={buildStyles({
                textColor: 'blue', 
                pathColor: 'blue', 
                trailColor: '#ccc',
              })}
            />
          </div>
          <div className="flex-grow">
            <p className="text-black font-semibold text-lg">85%</p>
            <p className="text-blue-600">3% increase</p>
          </div>
            </div>
          </div>
        </div>
      {/* Weekly Stats Bar Graph */}
      {/* <div className="bg-gray-100 rounded-lg p-4 m-1">
      <div className="mb-6">
        <Weeklystats />
      </div>
      </div> */}
      {/* Semester Attendance Progress */}
      <div className="bg-gray-100 rounded-lg p-4 m-1">
      <div className="mb-6">
        <h2 className="text-purple-600 text-sm font-semibold mb-2 ml-[11rem]">Semester Attendance Progress</h2>
        <div className="w-24 h-24 mx-auto">
          <CircularProgressbar
            value={semesterAttendance}
            text={`${semesterAttendance.toFixed(2)}%`}
            styles={buildStyles({
              textColor: 'purple',
              pathColor: 'purple',
              trailColor: '#ccc',
            })}
          />
        </div>
      </div>
        </div>  
      {/* Trend in Student Attendance Line Graph */}
      <div className="bg-gray-100 rounded-lg p-4 m-1">
      <div className="mb-6">
        <TrendLineGraph />
      </div>

      {/* Total Classes, Days Present, Days Absent */}
      <div className="flex space-x-6">
        <TotalStats />
      </div>
  
      </div>
      </div>
    );
  };
  
  export default History;
  
