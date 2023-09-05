import User from "./User";
import supabase from "./Client";

const todayRecords = async() => {
    const userID = await User();
    const today = new Date();
    const todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


    async function TodaySessions(){
          const { data: sessions, error } = await supabase
            .from('Sessions')
            .select('*')
            .eq('userID', userID)
            .eq('Date', todayDate)
            .order('Date');

          if (error) {
            console.error('Error fetching sessions:', error.message);
          } else {
            return sessions.length;
          }

    }
    //fetch todays records where status is present
    const attendedClasses=async(status)=>{
 
        const { data: attendance, error } =await supabase
          .from('AttendanceRecords')
          .select ('*')
          .eq('Date', todayDate)
          .eq('userID', userID)
          .eq('Status', status)
          .eq('Date', todayDate)
  
        if (error) {
          throw error;
        }
        return attendance.length || [];
      }

        //calculate precentile
        const precentilePresent = async() => {
            const total = await TodaySessions();
            const present = await attendedClasses('Present');
            const precentile = (present/total)*100;
            return precentile;

        }

        const precentileAbsent = async() => {
            const total = await TodaySessions();
            const Absent = await attendedClasses('Absent');
            const precentile = (Absent/total)*100;
            return precentile;

        }


       const present= await precentilePresent();
         const absent= await precentileAbsent();

        return {present, absent};
    
}

export default todayRecords;