// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bohdcwuwdnazaoqbnmsk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvaGRjd3V3ZG5hemFvcWJubXNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDUzMjMsImV4cCI6MjA2MTc4MTMyM30.NC83XFmJVWbK3oIMUdwVbIyjWqAgzq8qo-CH0rEherI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
