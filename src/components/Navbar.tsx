
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[rgba(18,18,18,0.9)] backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-ai-green font-orbitron text-xl font-bold">AI CLUB</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/resources" className="nav-link">Resources</Link>
            <Link to="/team" className="nav-link">Team</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/join" className="btn-primary ml-4">Join the Club</Link>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-ai-white hover:text-ai-green transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-ai-black bg-opacity-95 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-8 space-y-5">
            <Link 
              to="/" 
              className="block font-orbitron font-medium text-ai-white hover:text-ai-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block font-orbitron font-medium text-ai-white hover:text-ai-green"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/events" 
              className="block font-orbitron font-medium text-ai-white hover:text-ai-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/resources" 
              className="block font-orbitron font-medium text-ai-white hover:text-ai-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/team" 
              className="block font-orbitron font-medium text-ai-white hover:text-ai-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className="block font-orbitron font-medium text-ai-white hover:text-ai-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/join" 
              className="inline-block btn-primary mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Join the Club
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
