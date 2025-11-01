import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './firebase.js'; // Initializes Firebase
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
// 1. Import the CoinProvider
import { CoinProvider } from './store/coinStore.jsx';

const isProduction = import.meta.env.PROD;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        {/* 2. Wrap your App with the CoinProvider */}
        <CoinProvider>
          <App />
        </CoinProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);