import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
dotenv.config()


    const supabaseUrl = "https://hyaiklckhkyutgrxxyft.supabase.co"
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5YWlrbGNraGt5dXRncnh4eWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM3NDk5NTYsImV4cCI6MjAwOTMyNTk1Nn0.bJQrDpr4KBFksNUAip1njpfAuhzqpfgk97Pvbwbe6Bg"
    const supabase = createClient(supabaseUrl, supabaseKey)
 



export default supabase