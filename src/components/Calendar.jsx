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
    {/* Modal for when a user clicks on a class */}
    {isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute" onClick={closeModal}></div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Class details</h2>
          {selectedSession && (
            <div>
              <p className='Bold'>Name: {selectedSession.name}</p>
              <p>Date: {selectedSession.date}</p>
              <p>Class starts: {selectedSession.starts}</p>
              <p>Class ends: {selectedSession.ends}</p>
         
            </div>
          )}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    )}
  </div>
);
          }

export default Calendar;
