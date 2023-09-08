import React from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, getDay } from 'date-fns';
import User from '@/DB/User';
import supabase from '@/DB/Client';
import  { useEffect, useState } from 'react';
/**
 * TODO
 * Update modal correctly
 * update modal UI
 * 
 */
const Calendar = ({ classes }) => {
  const [dummyClasses, setDummyClasses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  async function fetchSessions() {
    try {
      const userID = await User();
      const currentDate = new Date();
      const startDate = format(startOfMonth(currentDate), 'yyyy-MM-dd');
      const endDate = format(endOfMonth(currentDate), 'yyyy-MM-dd');
      const { data, error } = await supabase
        .from('Sessions')
        .select(`*,Subjects(Name, Initials)`)
        .eq('userID', userID)
        .gte('Date', startDate)
        .lte('Date', endDate);

      if (error) {
        console.error(error);
      } else {
        const sessions = data.map((session) => ({
          date: session.Date,
          name: session.Subjects.Name,
          starts: session.StartTime,
          ends: session.EndTime,



        }));
        setDummyClasses(sessions);
       
      }
    } catch (error) {
      console.error(error);
    }
  }
//handle when a user clicks on a class
const handleSessionClick = (session) => {
  setIsModalOpen(true);
  const selected = dummyClasses.find((sessionItem) => sessionItem.name === session);

  setSelectedSession(selected);
};


  //close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSession('');
  };



  useEffect(() => {
    fetchSessions();
  }, []);


  // Generate an array of days for the current month
  const currentDate = new Date();
  const startOfMonthDate = startOfMonth(currentDate);
  const endOfMonthDate = endOfMonth(currentDate);
  const daysOfMonth = eachDayOfInterval({ start:startOfMonthDate, end:endOfMonthDate });

  // Organize classes by day
  const classesByDay = {};
  dummyClasses.forEach((classItem) => {
    const classDate = new Date(classItem.date);
    const formattedDate = format(classDate, "yyyy-MM-dd");

    if (!classesByDay[formattedDate]) {
      classesByDay[formattedDate] = [];
    }

    classesByDay[formattedDate].push(classItem);
  });

  // Days of the week headers, starting with Monday
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Calculate the day of the week for the first day of the month (0 for Sunday, 1 for Monday, etc.)
  const firstDayOfWeek = getDay(startOfMonthDate);



return (
  <div className="container">
  <div className="grid grid-cols-7 gap-4 p-8 shadow-md md:ml-[4rem]">
    {/* Render days of the week headers */}
    {weekdays.map((day) => (
      <div key={day} className="bg-gray-200 text-gray-800 p-2 text-center font-bold">
        {day}
      </div>
    ))}
    {/* Add empty cells before the first day of the month */}
    {[...Array(firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1)].map((_, index) => (
      <div key={`empty-${index}`} className="p-2 text-center border border-gray-300" />
    ))}
    {/* Fill in the calendar cells with class data */}
    {daysOfMonth.map((day) => {
      const formattedDay = format(day, "yyyy-MM-dd");
      const dayClasses = classesByDay[formattedDay] || [];
      const dayOfWeek = getDay(day); // Get the day of the week directly from the date

      // Highlight current day
      const isToday = formattedDay === format(new Date(), "yyyy-MM-dd");
      const cellBgColor = isToday ? "bg-green-100" : "";

      // Render only weekdays (exclude weekends)
      if (dayOfWeek > 0 && dayOfWeek < 6) {
        return (
          <div key={formattedDay} className={`p-2 text-center border ${cellBgColor}`}>
            <div className="text-xs text-gray-400">{format(day, "d")}</div>
            {dayClasses.map((classItem) => (
              <button  onClick={() => handleSessionClick(classItem.name)} key={classItem.name} className="text-xs font-semibold bg-blue-100 rounded-full px-2 py-1 my-1">
                {classItem.name}
              </button>
            ))}
          </div>
        );
      } else {
        return <div key={formattedDay} className={`p-2 text-center border ${cellBgColor}`} />;
      }
    })}
  </div>
      {isModalOpen && (
<div className="bg-green-100 p-4 rounded-lg shadow-md flex flex-col items-center space-y-4 md:ml-[4rem]">
<div className="flex justify-center">
  <p className="text-green-600 text-center">
  Name: {selectedSession.name}
</p>
</div>
<div className="flex justify-center">
  <p className="text-green-600 text-center">
  Date: {selectedSession.date}
</p>
</div>
<div className="flex justify-center">
  <p className="text-green-600 text-center">
  Class starts: {selectedSession.starts}
</p>
</div>
<div className="flex justify-center">
  <p className="text-green-600 text-center">
  Class ends: {selectedSession.ends}
</p>
</div>
<div className="flex justify-center">
  <button className="text-black hover:underline bg-green-500 px-5 py-2 rounded-full cursor-pointer transform hover:scale-105" onClick={closeModal}>Close</button>
</div>
</div>
      )}
  </div>
);
          }

export default Calendar;