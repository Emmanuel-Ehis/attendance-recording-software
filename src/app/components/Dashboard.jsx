// src/app/components/Dashboard.jsx
import React from 'react';

const classes = [
  { name: 'Maths', time: '9:30 am', status: 'absent' },
  { name: 'Physics', time: '10:40 am', status: 'present' },
  { name: 'Biology', time: '11:45 am', status: 'cancelled' },
  { name: 'Geography', time: '12:10 am', status: 'absent' },
  { name: 'Chemistry', time: '12:45 pm', status: 'present' },
  { name: 'History', time: '1:00 pm', status: 'cancelled' },
  { name: 'English', time: '2:00 pm', status: 'OnTime' },
  { name: 'Hindi', time: '2:30 pm', status: 'present' },
  { name: 'Social Studies', time: '3:00 pm', status: 'present' },
  { name: 'Computer Science', time: '3:30 pm', status: 'OnTime' },
  // Add more class objects
];

const Dashboard = () => {
  const currentRoute = "Today's Classes";

  return (
    <div className="p-8 mt-[-4rem]">
      <div className="py-4 px-8">
        <h1 className="text-2xl font-semibold text-black">Dashboard</h1>
        <p className="text-gray-600">{currentRoute}</p>
      </div>

      <div className="flex flex-wrap px-8">
        {classes.map((classItem, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 m-2 flex items-center space-x-4 shadow-md"
            style={{ width: '100%', maxWidth: '30rem' }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-bold text-lg">
              {classItem.name[0]}
            </div>
            <div className="flex flex-col flex-grow">
  <p className="font-semibold text-black">{classItem.name}</p>
  {classItem.status === 'present' ? (
    <p className="text-green-600">You were marked present</p>
  ) : classItem.status === 'cancelled' ? (
    <p className="text-red-600">Class Cancelled</p>
  ) : classItem.status === 'absent' ? (
    <p className="text-red-600 text-small">You were marked absent by Faculty</p>
  ) : (
    <button className="bg-green-500 text-white px-2 py-1 rounded-full">
      Mark me present
    </button>
  )}
</div>
            <div className="flex items-center mt-[-2rem]">
              <p className="text-gray-600">{classItem.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
