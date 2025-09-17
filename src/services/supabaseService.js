import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ehsxgivnhvoxkzyllavz.supabase.co'; 
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Upload file
export const uploadFile = async (file, sessionId) => {
  const filePath = `chats/${sessionId}/${Date.now()}-${file.name}`;
  
  const { error } = await supabase.storage
    .from('uploads')
    .upload(filePath, file);

  if (error) {
    console.error("Error uploading to Supabase:", error);
    return null;
  }

  const { data } = supabase.storage
    .from('uploads')
    .getPublicUrl(filePath);
    
  return data.publicUrl;
};

// Upload audio
export const uploadAudio = async (blob, sessionId) => {
  const filePath = `chats/${sessionId}/${Date.now()}.webm`;

  const { error } = await supabase.storage
    .from('uploads')
    .upload(filePath, blob);

  if (error) {
    console.error("Error uploading audio to Supabase:", error);
    return null;
  }

  const { data } = supabase.storage
    .from('uploads')
    .getPublicUrl(filePath);
    
  return data.publicUrl;
};
