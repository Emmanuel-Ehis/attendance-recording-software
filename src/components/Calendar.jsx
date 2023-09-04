import React from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, getDay } from 'date-fns';

const Calendar = ({ classes }) => {
  // Dummy data for demonstration (replace with your actual data)
  const dummyClasses = [


{ date: '2023-09-04', name: 'Class A_MON' },
{ date: '2023-09-04', name: 'Class B_MON' },
{ date: '2023-09-04', name: 'Class C_MON' },
{ date: '2023-09-04', name: 'Class D_MON' },
{ date: '2023-09-05', name: 'Class A_TUE' },
{ date: '2023-09-05', name: 'Class B_TUE' },
{ date: '2023-09-05', name: 'Class C_TUE' },
{ date: '2023-09-06', name: 'Class A_WED' },
{ date: '2023-09-06', name: 'Class B_WED' },
{ date: '2023-09-07', name: 'Class A_THUR' },
{ date: '2023-09-08', name: 'Class A_FRI' },
{ date: '2023-09-08', name: 'Class B_FRI' },
{ date: '2023-09-11', name: 'Class A_MON' },
{ date: '2023-09-11', name: 'Class B_MON' },
{ date: '2023-09-11', name: 'Class C_MON' },
{ date: '2023-09-11', name: 'Class D_MON' },
{ date: '2023-09-12', name: 'Class A_TUE' },
{ date: '2023-09-12', name: 'Class B_TUE' },
{ date: '2023-09-12', name: 'Class C_TUE' },
{ date: '2023-09-13', name: 'Class A_WED' },
{ date: '2023-09-13', name: 'Class B_WED' },
{ date: '2023-09-14', name: 'Class A_THUR' },
{ date: '2023-09-15', name: 'Class A_FRI' },
{ date: '2023-09-15', name: 'Class B_FRI' },
{ date: '2023-09-18', name: 'Class A_MON' },
{ date: '2023-09-18', name: 'Class B_MON' },
{ date: '2023-09-18', name: 'Class C_MON' },
{ date: '2023-09-18', name: 'Class D_MON' },
{ date: '2023-09-19', name: 'Class A_TUE' },
{ date: '2023-09-19', name: 'Class B_TUE' },
{ date: '2023-09-19', name: 'Class C_TUE' },
{ date: '2023-09-20', name: 'Class A_WED' },
{ date: '2023-09-20', name: 'Class B_WED' },
{ date: '2023-09-21', name: 'Class A_THUR' },
  ];

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
                <div key={classItem.name} className="text-xs font-semibold bg-blue-100 rounded-full px-2 py-1 my-1">
                  {classItem.name}
                </div>
              ))}
            </div>
          );
        } else {
          return <div key={formattedDay} className={`p-2 text-center border ${cellBgColor}`} />;
        }
      })}
    </div>
  );
};

export default Calendar;




// { date: '2023-09-04', name: 'Class A_MON' },
// { date: '2023-09-04', name: 'Class B_MON' },
// { date: '2023-09-04', name: 'Class C_MON' },
// { date: '2023-09-04', name: 'Class D_MON' },
// { date: '2023-09-05', name: 'Class A_TUE' },
// { date: '2023-09-05', name: 'Class B_TUE' },
// { date: '2023-09-05', name: 'Class C_TUE' },
// { date: '2023-09-06', name: 'Class A_WED' },
// { date: '2023-09-06', name: 'Class B_WED' },
// { date: '2023-09-07', name: 'Class A_THUR' },
// { date: '2023-09-08', name: 'Class A_FRI' },
// { date: '2023-09-08', name: 'Class B_FRI' },
// { date: '2023-09-11', name: 'Class A_MON' },
// { date: '2023-09-11', name: 'Class B_MON' },
// { date: '2023-09-11', name: 'Class C_MON' },
// { date: '2023-09-11', name: 'Class D_MON' },
// { date: '2023-09-12', name: 'Class A_TUE' },
// { date: '2023-09-12', name: 'Class B_TUE' },
// { date: '2023-09-12', name: 'Class C_TUE' },
// { date: '2023-09-13', name: 'Class A_WED' },
// { date: '2023-09-13', name: 'Class B_WED' },
// { date: '2023-09-14', name: 'Class A_THUR' },
// { date: '2023-09-15', name: 'Class A_FRI' },
// { date: '2023-09-15', name: 'Class B_FRI' },
// { date: '2023-09-18', name: 'Class A_MON' },
// { date: '2023-09-18', name: 'Class B_MON' },
// { date: '2023-09-18', name: 'Class C_MON' },
// { date: '2023-09-18', name: 'Class D_MON' },
// { date: '2023-09-19', name: 'Class A_TUE' },
// { date: '2023-09-19', name: 'Class B_TUE' },
// { date: '2023-09-19', name: 'Class C_TUE' },
// { date: '2023-09-20', name: 'Class A_WED' },
// { date: '2023-09-20', name: 'Class B_WED' },
// { date: '2023-09-21', name: 'Class A_THUR' },