import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jsvvgrdqssyhxfigextf.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzdnZncmRxc3N5aHhmaWdleHRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxMjYwNTAsImV4cCI6MjA5NDcwMjA1MH0.gynLp5ylDGb6rU78SZ1-mZEVCZPod_xzMAYkEuFmkU8";

export const supabase = createClient(supabaseUrl, supabaseKey);