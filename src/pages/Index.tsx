
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  // Add fade-in effect on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.add('translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-ai-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-ai-black via-transparent to-ai-black" />
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-ai-white mb-4 font-orbitron leading-tight">
            Welcome to <span className="text-ai-green">AI Club</span>
          </h1>
          <p className="text-xl md:text-2xl font-orbitron text-ai-green mb-8">Rectifying Learning</p>
          <p className="text-lg text-ai-white max-w-3xl mx-auto mb-8 opacity-90">
            Discover the exciting world of Artificial Intelligence at OIST. We're a community of learners, 
            innovators, and enthusiasts exploring the frontiers of AI and machine learning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/join" className="btn-primary">Join the Club</Link>
            <Link to="/about" className="border-2 border-ai-green text-ai-green font-orbitron font-semibold px-6 py-2 rounded transition-all hover:bg-ai-green hover:text-ai-black">
              Explore
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#C7F241" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </section>

      {/* Quick Overview */}
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
              <h3 className="text-xl font-orbitron font-bold mb-2 text-ai-white">100+ Members</h3>
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
              <h3 className="text-xl font-orbitron font-bold mb-2 text-ai-white">20+ Events</h3>
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

      {/* Featured Events */}
      <section className="py-20 bg-[#111]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron text-ai-white">
              Featured <span className="text-ai-green">Events</span>
            </h2>
            <p className="text-lg text-gray-300">
              Explore our key events that bring together technology enthusiasts, industry experts, and beginners alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80" 
                  alt="Cypher 30 Coding Contest" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ai-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-ai-green text-ai-black px-2 py-1 text-xs font-bold rounded">2023</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-orbitron text-xl font-bold mb-2 text-ai-white">Cypher 30 Coding Contest</h3>
                <p className="text-gray-400 mb-4">A fast-paced coding competition testing algorithmic skills and problem-solving abilities.</p>
                <Link to="/events" className="text-ai-green font-medium hover:underline inline-flex items-center">
                  View Details
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="card opacity-0 translate-y-10 transition-all duration-700 delay-100 animate-on-scroll">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" 
                  alt="Logo Designing Contest TEDx" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ai-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-ai-green text-ai-black px-2 py-1 text-xs font-bold rounded">2023</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-orbitron text-xl font-bold mb-2 text-ai-white">Logo Designing Contest TEDx</h3>
                <p className="text-gray-400 mb-4">Creative design challenge focused on creating impactful visual identities for TEDx events.</p>
                <Link to="/events" className="text-ai-green font-medium hover:underline inline-flex items-center">
                  View Details
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="card opacity-0 translate-y-10 transition-all duration-700 delay-200 animate-on-scroll">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" 
                  alt="AI Workshop Series" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ai-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-ai-green text-ai-black px-2 py-1 text-xs font-bold rounded">2024</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-orbitron text-xl font-bold mb-2 text-ai-white">AI Workshop Series</h3>
                <p className="text-gray-400 mb-4">Hands-on sessions exploring machine learning, deep learning, and practical AI applications.</p>
                <Link to="/events" className="text-ai-green font-medium hover:underline inline-flex items-center">
                  View Details
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
            <Link to="/events" className="btn-primary">View All Events</Link>
          </div>
        </div>
      </section>

      {/* Annual Magazine Section */}
      <section className="py-20 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
                <div className="relative">
                  <div className="absolute -inset-1 bg-ai-green opacity-20 blur-lg rounded-lg"></div>
                  <div className="relative bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                    <img 
                      src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&q=80" 
                      alt="AI Insights Magazine Cover" 
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 opacity-0 translate-y-10 transition-all duration-700 delay-200 animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron text-ai-white">
                  Annual <span className="text-ai-green">Magazine</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our annual publication "AI Insights" showcases the best projects, research papers, and 
                  articles from our community. Explore cutting-edge AI innovations, industry trends, and 
                  insights from leading experts in the field.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#" className="btn-primary">
                    Download
                  </a>
                  <a href="#" className="border-2 border-ai-green text-ai-green font-orbitron font-semibold px-6 py-2 rounded transition-all hover:bg-ai-green hover:text-ai-black">
                    View Online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron text-ai-white">
              Connect with <span className="text-ai-green">Us</span>
            </h2>
            <p className="text-lg text-gray-300">
              Follow us on social media to stay updated with our latest events, workshops, and announcements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
              className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
              <Instagram size={40} className="text-ai-green mb-4" />
              <span className="text-ai-white font-orbitron font-medium">Instagram</span>
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
              className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] opacity-0 translate-y-10 transition-all duration-700 delay-100 animate-on-scroll">
              <Linkedin size={40} className="text-ai-green mb-4" />
              <span className="text-ai-white font-orbitron font-medium">LinkedIn</span>
            </a>
            
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
              className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] opacity-0 translate-y-10 transition-all duration-700 delay-200 animate-on-scroll">
              <Facebook size={40} className="text-ai-green mb-4" />
              <span className="text-ai-white font-orbitron font-medium">Facebook</span>
            </a>
            
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
              className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] opacity-0 translate-y-10 transition-all duration-700 delay-300 animate-on-scroll">
              <Youtube size={40} className="text-ai-green mb-4" />
              <span className="text-ai-white font-orbitron font-medium">YouTube</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
