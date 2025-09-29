import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qafckdndszkfternmkh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhZmNra25kYXprZ2Z0ZXJybWtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNDE0MDksImV4cCI6MjA3NDYxNzQwOX0.5u_w9ahP9U6nnfCbu9c-J9sG1DNQ9EdrTLRd3lc-E5s'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)