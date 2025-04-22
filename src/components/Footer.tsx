
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-ai-green font-orbitron text-xl font-bold mb-4">AI CLUB</h3>
            <p className="text-gray-400 mb-4">
              Oriental Institute of Science and Technology, Bhopal
            </p>
            <p className="text-gray-400">
              Rectifying Learning
            </p>
          </div>
          
          <div>
            <h4 className="font-orbitron text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-ai-green transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-ai-green transition-colors">About Us</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-ai-green transition-colors">Events</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-ai-green transition-colors">Resources</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-ai-green transition-colors">Our Team</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-orbitron text-white text-lg mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">OIST, Raisen Road</p>
            <p className="text-gray-400 mb-2">Bhopal, MP, India</p>
            <p className="text-gray-400">aiclub@oriental.ac.in</p>
          </div>
          
          <div>
            <h4 className="font-orbitron text-white text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com/aicluboist" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-ai-green transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/103163427" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-ai-green transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-ai-green transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://youtube.com/@aicluboist" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-ai-green transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AI Club OIST. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-gray-400">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 text-sm hover:text-gray-400">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
