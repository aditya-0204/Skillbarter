import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './firebase.js'; // Initializes Firebase
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';

// This special variable from Vite is TRUE for "npm run build"
// and FALSE for "npm run dev"
const isProduction = import.meta.env.PROD;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*
      This line now automatically chooses the correct path:
      - For "npm run dev" (local): basename will be "/"
      - For "npm run build" (online): basename will be "/Skillbarter"
    */}
    <BrowserRouter basename={isProduction ? "/Skillbarter" : "/"}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
