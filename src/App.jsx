import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

// Import Pages
import Home from './Pages/home.jsx';
import Login from './Pages/login.jsx';
import Signup from './Pages/Signup.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Browse from './Pages/Browse.jsx';
import Profile from './Pages/Profile.jsx';
import MySwap from './Pages/MySwap.jsx'; 

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-slate-900 text-slate-900 dark:text-slate-200">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/browse" element={<Browse />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          {/* UPDATED: This route now renders your MySwap component correctly */}
          <Route path="/requests" element={<ProtectedRoute><MySwap /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;