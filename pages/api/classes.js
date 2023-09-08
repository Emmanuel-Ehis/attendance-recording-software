// pages/api/classes.js
import supabase from '@/DB/Client';
import user from '@/DB/User';
import { format, startOfMonth, endOfMonth } from 'date-fns';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const userId = await user(); // Get the user's ID

    // Calculate the start and end dates for the current month
    const currentDate = new Date();
    const startOfMonthDate = startOfMonth(currentDate);
    const endOfMonthDate = endOfMonth(currentDate);

    // Fetch classes for the user based on the current day of the week
    const { data: sessions, error: sessionserror} = await supabase
      .from('Sessions')
      .select('*, Subjects(Name, Initials)')
      .eq('userID', userId)
      .gte('date', format(startOfMonthDate, 'yyyy-MM-dd'))
      .lte('date', format(endOfMonthDate, 'yyyy-MM-dd'));

    if (sessionserror) {
      console.log('An error occured while fetching classes: ', sessionserror)
    }

    // Process the fetched data as needed
    const results = await getClassDetails(sessions);
    console.log("Results",results)

    res.status(200).json(results);
  } catch (error) {
    console.error('DB error:\n', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
