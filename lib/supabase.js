import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sikajkfxdyhxahbchfre.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpa2Fqa2Z4ZHloeGFoYmNoZnJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MzMxNTksImV4cCI6MjA2OTQwOTE1OX0.3g9EooezYA48d7EN3YNduStwjh3ZZSUXz5nsox4wOVo'

export const supabase = createClient(supabaseUrl, supabaseKey)