import supabase from "./Client"
import User from "./User"
import { useEffect } from "react"

const  semesterRecords = async() => {
const semesterStart='2023-8-1'
const semesterEnd= '2024-7-31'
const userID = await User();
 

async function sessions(){

    const { data: sessions, error } = await supabase
    .from('Sessions')
    .select('*') // Select all columns from the 'Sessions' table
    .eq('userID', userID)
    .gte('Date', semesterStart) // Greater than or equal to August 1, 2023
    .lte('Date', semesterEnd) // Less than or equal to July 31, 2024
    .order('Date'); // Optionally, you can order the sessions by date

  if (error) {
    console.error('Error fetching sessions:', error.message);
  } else {
    return sessions.length;
  }
}

    //classes atendance for whole semester
    const attended=async(status)=>{
        const userID = await User();
        const { data: attendance, error } =await supabase
          .from('AttendanceRecords')
          .select ('*')
          .gte('Date', semesterStart) // Greater than or equal to August 1, 2023
        .lte('Date', semesterEnd) // Less than or equal to July 31, 2024
          .eq('userID', userID)
          .eq('Status', status)
  
        if (error) {
          throw error;
        }
        return attendance.length || [];
      }

      //calculate precentile
        const precentile = async() => {
            const total = await sessions();
            const present = await attended('Present');
            const precentile = (present/total)*100;
            return precentile;

        }
    const result= await precentile();
    const present= await attended('Present');
    const absent= await attended('Absent');
    const Sessions= await sessions();

  return {result, present, absent, Sessions};

}

export default semesterRecords;