import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import TrendLineGraph from '@/components/TrendLineGraph';
import supabase from '@/DB/Client';
import User from '@/DB/User';

const History = () => {
  const [semesterClasses, setSemesterClasses] = useState({
    result: 0,
    present: 0,
    absent: 0,
    classes: 0,
  });
  const [attendedTodayClasses, setAttendedTodayClasses] = useState(0);
  const [absentTodayClasses, setAbsentTodayClasses] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const semesterStart = '2023-8-1';
      const semesterEnd = '2024-7-31';
      const userID = await User();

      // Fetch total classes for the semester
      async function sessions() {
        const { data: sessions, error } = await supabase
          .from('Sessions')
          .select('*')
          .eq('userID', userID)
          .gte('Date', semesterStart)
          .lte('Date', semesterEnd)
          .order('Date');

        if (error) {
          console.error('Error fetching sessions:', error.message);
          return 0;
        } else {
          return sessions.length;
        }
      }

      // Fetch attended classes for the semester
      const attended = async (status) => {
        const { data: attendance, error } = await supabase
          .from('AttendanceRecords')
          .select('*')
          .gte('Date', semesterStart)
          .lte('Date', semesterEnd)
          .eq('userID', userID)
          .eq('Status', status);

        if (error) {
          throw error;
        }
        return attendance.length || 0;
      }

      // Calculate percentages
      const total = await sessions();
      const present = await attended('Present');
      const absent = await attended('Absent');
      const result = total === 0 ? 0 : (present / total) * 100;

      setSemesterClasses({
        result: result.toFixed(1),
        present: present,
        absent: absent,
        classes: total,
      });
    };

    fetchData();

    // Fetch and set today's records
    const todayRecords = async () => {
      const userID = await User();
      const today = new Date();
      const todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

      // Fetch today's sessions
      async function TodaySessions() {
        const { data: sessions, error } = await supabase
          .from('Sessions')
          .select('*')
          .eq('userID', userID)
          .eq('Date', todayDate)
          .order('Date');

        if (error) {
          console.error('Error fetching sessions:', error.message);
          return 0;
        } else {
          return sessions.length;
        }
      }

      // Fetch today's records where status is present
      const attendedClasses = async (status) => {
        const { data: attendance, error } = await supabase
          .from('AttendanceRecords')
          .select('*')
          .eq('Date', todayDate)
          .eq('userID', userID)
          .eq('Status', status)
          .eq('Date', todayDate);

        if (error) {
          throw error;
        }
        return attendance.length || 0;
      }

      const present = await attendedClasses('Present');
      const absent = await attendedClasses('Absent');

      setAttendedTodayClasses(present);
      setAbsentTodayClasses(absent);
    };

    todayRecords();
  }, []);

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
                text={`${attendedTodayClasses.toFixed(1)}%`} // Display percentage
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
              value={attendedTodayClasses} // Set the value for progress (change as needed)
              text={`${attendedTodayClasses.toFixed(1)}%`} // Display percentage
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
            value={semesterClasses.result}
            text={`${semesterClasses.result || 0}%`}
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
      <div className="flex space-x-6">
          <div className="text-center">
            <p className="text-lg font-semibold text-purple-600">{semesterClasses.classes}</p>
            <p className="text-gray-600">Total Classes</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-purple-600">{semesterClasses.present}</p>
            <p className="text-gray-600">Days Present</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-purple-600">{semesterClasses.absent}</p>
            <p className="text-gray-600">Days Absent</p>
          </div>
        </div>
      </div>
  
      </div>
      </div>
    );
  };
  
  export default History;
  
