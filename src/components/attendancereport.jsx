
import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AttendanceReport = () => {
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
                value={70} // Set the value for progress (change as needed)
                text={`${70}%`} // Display percentage
                styles={buildStyles({
                  textColor: 'green', // Color of the percentage text
                  pathColor: 'green', // Color of the progress path
                  trailColor: '#ccc', // Color of the trail (remaining path)
                })}
              />
            </div>
            <div className="flex-grow">
              <p className="text-black font-semibold text-lg">10</p>
              <p className="text-green-600">12% increase</p>
            </div>
          </div>
        </div>
  
          {/* Section 2: Absent Today */}
          <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center space-y-2">
            <h2 className="text-red-600 text-sm font-semibold">Absent | Today</h2>
            <div className="flex items-center space-x-2">
            <div className="w-12 h-12">
            <CircularProgressbar
              value={5} // Set the value for progress (change as needed)
              text={`${5}%`} // Display percentage
              styles={buildStyles({
                textColor: 'red', // Color of the percentage text
                pathColor: 'red', // Color of the progress path
                trailColor: '#ccc', // Color of the trail (remaining path)
              })}
            />
          </div>
          <div className="flex-grow">
            <p className="text-black font-semibold text-lg">5</p>
            <p className="text-red-600">5% decrease</p>
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
  
      </div>
    );
  };
  
  export default AttendanceReport;
  
