import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pmybcnjxmmfjfdzmcmon.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBteWJjbmp4bW1mamZkem1jbW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwOTMyNzgsImV4cCI6MjA2ODY2OTI3OH0.8TeZlyUr_QXTKZAzQ-6bW4ftKcaiVgkTsKtUW5-e33w'

export const supabase = createClient(supabaseUrl, supabaseKey)