import { Link } from 'react-router-dom';

const QuickOverview = () => { 
return (
    <section className="py-20 bg-gradient-to-b from-ai-black to-[#111]">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron text-ai-white">
                  Innovating with <span className="text-ai-green">Artificial Intelligence</span>
                </h2>
                <p className="text-lg text-gray-300">
                  At AI Club, we're passionate about learning, exploring, and implementing AI technologies.
                  Our community brings together students, faculty, and industry experts to create a collaborative 
                  environment for innovation and growth.
                </p>
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 transform hover:scale-105 transition-all duration-300 opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
                  <div className="inline-block bg-[#222] p-3 rounded-lg mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="28" 
                      height="28" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#C7F241" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-2 text-ai-white">1000+ Members</h3>
                  <p className="text-gray-400">
                    Our club consists of diverse students passionate about AI from various disciplines.
                  </p>
                </div>
    
                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 transform hover:scale-105 transition-all duration-300 opacity-0 translate-y-10 transition-all duration-700 delay-100 animate-on-scroll">
                  <div className="inline-block bg-[#222] p-3 rounded-lg mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="28" 
                      height="28" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#C7F241" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M12 8v4l3 3"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-2 text-ai-white">10+ Events</h3>
                  <p className="text-gray-400">
                    We organize workshops, hackathons, and coding contests throughout the academic year.
                  </p>
                </div>
    
                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 transform hover:scale-105 transition-all duration-300 opacity-0 translate-y-10 transition-all duration-700 delay-200 animate-on-scroll">
                  <div className="inline-block bg-[#222] p-3 rounded-lg mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="28" 
                      height="28" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#C7F241" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-2 text-ai-white">15+ Projects</h3>
                  <p className="text-gray-400">
                    Our members collaborate on innovative AI projects addressing real-world challenges.
                  </p>
                </div>
              </div>
    
              <div className="text-center mt-12 opacity-0 translate-y-10 transition-all duration-700 delay-300 animate-on-scroll">
                <Link to="/about" className="text-ai-green font-orbitron font-medium hover:underline text-lg inline-flex items-center">
                  Learn More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
);
};

export default QuickOverview;