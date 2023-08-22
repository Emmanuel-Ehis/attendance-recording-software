import React from 'react';

const TotalStats = () => {
  const totalClasses = Math.floor(Math.random() * 50) + 10; // Random value for demonstration
  const daysPresent = Math.floor(Math.random() * totalClasses);
  const daysAbsent = totalClasses - daysPresent;

  return (
    <div className="flex space-x-6">
      <div className="text-center">
        <p className="text-lg font-semibold text-purple-600">{totalClasses}</p>
        <p className="text-gray-600">Total Classes</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold text-purple-600">{daysPresent}</p>
        <p className="text-gray-600">Days Present</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold text-purple-600">{daysAbsent}</p>
        <p className="text-gray-600">Days Absent</p>
      </div>
    </div>
  );
};

export default TotalStats;
