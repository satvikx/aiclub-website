import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const getLinkClassName = (sectionId: string) => {
    const baseClasses = "nav-link transition-all duration-300";
    return `${baseClasses} ${activeSection === sectionId ? 'text-ai-green' : 'text-ai-white hover:text-ai-green'}`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[rgba(18,18,18,0.9)] backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('home')} className="flex items-center">
              <span className="text-ai-green font-orbitron text-xl font-bold">AI CLUB</span>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className={getLinkClassName('home')}>Home</button>
            <button onClick={() => scrollToSection('overview')} className={getLinkClassName('overview')}>Overview</button>
            <button onClick={() => scrollToSection('events')} className={getLinkClassName('events')}>Events</button>
            <button onClick={() => scrollToSection('magazine')} className={getLinkClassName('magazine')}>Magazine</button>
            <button onClick={() => scrollToSection('tedx')} className={getLinkClassName('tedx')}>TEDx</button>
            <button onClick={() => scrollToSection('social')} className={getLinkClassName('social')}>Social</button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            <button 
              onClick={() => scrollToSection('home')}
              className={`block font-orbitron font-medium ${getLinkClassName('home')}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('overview')}
              className={`block font-orbitron font-medium ${getLinkClassName('overview')}`}
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className={`block font-orbitron font-medium ${getLinkClassName('events')}`}
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection('magazine')}
              className={`block font-orbitron font-medium ${getLinkClassName('magazine')}`}
            >
              Magazine
            </button>
            <button
              onClick={() => scrollToSection('tedx')}
              className={`block font-orbitron font-medium ${getLinkClassName('tedx')}`}
            >
              TEDx
            </button>
            <button
              onClick={() => scrollToSection('social')}
              className={`block font-orbitron font-medium ${getLinkClassName('social')}`}
            >
              Social
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
