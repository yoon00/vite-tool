import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types';

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
export const supabase = createClient<Database>(supabaseURL, supabaseKey);