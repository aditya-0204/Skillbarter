const functions = require("firebase-functions");
const { createClient } = require("@supabase/supabase-js");

// These keys will be set securely in the next step
const supabaseUrl = functions.config().supabase.url;
const serviceKey = functions.config().supabase.service_key;
const supabase = createClient(supabaseUrl, serviceKey);

exports.createSignedUploadUrl = functions.https.onCall(async (data, context) => {
  // Check if the user is authenticated with Firebase
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "The function must be called while authenticated."
    );
  }

  const { filePath } = data;
  if (!filePath) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "The function must be called with a 'filePath' argument."
    );
  }

  // Create a secure, temporary upload URL from Supabase
  const { data: signedUrlData, error } = await supabase.storage
    .from("uploads") // Make sure this is your bucket name
    .createSignedUploadUrl(filePath, 60); // URL is valid for 60 seconds

  if (error) {
    throw new functions.https.HttpsError("internal", error.message);
  }

  return { signedUrl: signedUrlData.signedURL };
});