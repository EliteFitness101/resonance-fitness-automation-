import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function uploadImage(file, name) {
  const { data } = await supabase.storage
    .from("assets")
    .upload(name, file);

  return data;
}