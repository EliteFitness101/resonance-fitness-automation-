import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Fail-safe for deployment monitoring
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("ResoFlex™ Warning: Supabase credentials missing from environment.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
