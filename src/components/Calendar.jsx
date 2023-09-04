
// Calendar.jsx
import React, { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  // You can replace this with your data source for classes
  const classesData = [
    { date: '2023-09-05', className: 'Class A' },
    { date: '2023-09-10', className: 'Class B' },
    // Add more class data here
  ];

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Personal calendar</h1>
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 30 }, (_, i) => {
          const currentDate = new Date();
          currentDate.setDate(currentDate.getDate() + i);
          const dateString = currentDate.toISOString().split('T')[0];

          return (
            <div
              key={i}
              className={`p-2 text-center cursor-pointer hover:bg-gray-200 ${
                dateString === selectedDate ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => handleDateClick(dateString)}
            >
              {currentDate.getDate()}
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Classes on {selectedDate}</h2>
          <ul>
            {classesData
              .filter((classItem) => classItem.date === selectedDate)
              .map((classItem, index) => (
                <li key={index}>{classItem.className}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Calendar;