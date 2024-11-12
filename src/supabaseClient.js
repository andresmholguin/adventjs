
// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wzasnxrysmamteuojyoj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6YXNueHJ5c21hbXRldW9qeW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzNzY4MjMsImV4cCI6MjA0Njk1MjgyM30.KnX8EJlS45drQrQJVZfR00pKuV7pDCg0jafgcJHym8E';


export const supabase = createClient(supabaseUrl, supabaseAnonKey);
