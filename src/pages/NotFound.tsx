
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-ai-black">
      <Navbar />
      
      <div className="h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-7xl md:text-9xl font-bold font-orbitron text-ai-green mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-orbitron text-ai-white mb-8">Page Not Found</h2>
        <p className="text-gray-400 text-center max-w-md mb-10">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="btn-primary"
        >
          Return to Homepage
        </Link>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
