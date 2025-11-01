// In your React component file (e.g., FileUpload.jsx)
import React, { useState } from 'react';

function FileUpload() {
    const [sending, setSending] = useState(false);
    const [error, setError] = useState('');
    
    // 1. Create a state to hold the URL of the uploaded file
    const [uploadedFileUrl, setUploadedFileUrl] = useState('');

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setSending(true);
        setError('');
        setUploadedFileUrl(''); // Clear previous image

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Server upload failed.');
            }

            const data = await response.json();
            const filename = data.filename;
            
            console.log('Upload successful! Filename:', filename);

            // 2. Build the full URL and save it to your state
            setUploadedFileUrl(`http://localhost:5000/files/${filename}`);

        } catch (err) {
            setError("Upload failed. Please try again.");
            console.error(err);
        } finally {
            setSending(false);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>MongoDB File Upload</h2>
            <p>Select a file to upload. It will be displayed below after a successful upload.</p>
            
            <input 
                type="file" 
                onChange={handleFileUpload} 
                disabled={sending} 
            />

            {sending && <p>Uploading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            {/* 3. Conditionally render the image using the URL from your state */}
            {uploadedFileUrl && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Upload Successful!</h3>
                    <img 
                        src={uploadedFileUrl} 
                        alt="Uploaded content" 
                        style={{ maxWidth: '400px', marginTop: '10px', border: '1px solid #ccc' }} 
                    />
                </div>
            )}
        </div>
    );
}

export default FileUpload;