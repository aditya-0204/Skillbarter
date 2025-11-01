import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ehsxgivnhvoxkzyllavz.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
console.log("Initializing Supabase with Key:", supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);

// Upload file
// In supabaseService.js

export const uploadFile = async (file, sessionId, firebaseToken) => { // <-- 2. Add firebaseToken here
  // 3. This whole block is new - it tells Supabase who you are
  const { error: authError } = await supabase.auth.setSession({
    access_token: firebaseToken,
  });

  if (authError) {
    throw authError;
  }
  // ---

  const filePath = `chats/${sessionId}/${Date.now()}-${file.name}`;

  const { error: uploadError } = await supabase.storage
    .from('UPLOADS') // <-- 1. FIX: Must be uppercase 'UPLOADS' to match Supabase
    .upload(filePath, file);

  if (uploadError) {
    // This will now stop the function if the upload fails for any reason
    throw uploadError;
  }

  const { data } = supabase.storage
    .from('UPLOADS') // <-- 1. FIX: And also uppercase here
    .getPublicUrl(filePath);

  return data.publicUrl;
};

// Upload audio
// In supabaseService.js

export const uploadAudio = async (blob, sessionId, firebaseToken) => {
  // Add authentication
  const { error: authError } = await supabase.auth.setSession({
    access_token: firebaseToken,
  });

  if (authError) {
    throw authError;
  }

  const filePath = `chats/${sessionId}/${Date.now()}.webm`;

  const { error: uploadError } = await supabase.storage
    .from('UPLOADS') // Use correct uppercase name
    .upload(filePath, blob);

  if (uploadError) {
    throw uploadError; // Throw the error
  }

  const { data } = supabase.storage
    .from('UPLOADS') // Use correct uppercase name
    .getPublicUrl(filePath);

  return data.publicUrl;
};