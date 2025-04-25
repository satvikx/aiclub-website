
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuickOverview from '../components/QuickOverview';
import FeaturedEvents from '../components/FeaturedEvents';
import SocialMedia from '../components/SocialMedia';

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

  // Parallax effect reference
  const heroRef = useRef<HTMLDivElement>(null);

  // Add parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        // Move the background at a different rate than the scroll
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-ai-black overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(18,18,18,0.8)] via-[rgba(126,105,171,0.3)] to-[rgba(18,18,18,0.9)] animate-gradient-animation z-10"></div>
        
        {/* Parallax background */}
        <div ref={heroRef} className="absolute inset-0 z-0">
          <div className="h-[120%] w-full bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="glass-panel p-8 rounded-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-ai-white mb-4 font-orbitron leading-tight">
              Welcome to <span className="text-ai-green">AI Club</span>
            </h1>
            <p className="text-xl md:text-2xl font-orbitron text-ai-green mb-8 relative inline-block">
              Rectifying Learning
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-ai-green to-transparent"></span>
            </p>
            <p className="text-lg text-ai-white max-w-3xl mx-auto mb-8 opacity-90 drop-shadow-lg">
              Discover the exciting world of Artificial Intelligence at OIST. We're a community of learners, 
              innovators, and enthusiasts exploring the frontiers of AI and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/join" className="btn-primary shadow-lg hover:shadow-[0_0_20px_rgba(199,242,65,0.4)]">Join the Club</Link>
              <Link to="/about" className="border-2 border-ai-green text-ai-green font-orbitron font-semibold px-6 py-2 rounded transition-all hover:bg-ai-green hover:text-ai-black hover:shadow-lg shadow-md">
                Explore
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
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
            className="animate-pulse"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </section>

      {/* Quick Overview */}
      <QuickOverview/>

      {/* Featured Events */}
      <FeaturedEvents/>

      {/* Annual Magazine Section */}
      <section className="py-20 bg-gradient-to-b from-ai-deep-blue via-[#111] to-[#0a0a0a] animate-gradient-animation bg-300%">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-400/20 to-pink-400/20 opacity-70 blur-xl rounded-lg animate-pulse"></div>
                  <div className="relative glass-card rounded-lg p-4">
                    <img 
                      src="https://ik.imagekit.io/satvik/AIC/Satvik.jpg" 
                      alt="AI Insights Magazine Cover" 
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 opacity-0 translate-y-10 transition-all duration-700 delay-200 animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron text-ai-white relative inline-block">
                  Annual <span className="text-ai-green">Magazine</span>
                  <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-ai-green to-transparent"></span>
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our annual publication "Edge AI" showcases the best projects, research papers, and 
                  articles from our community. Explore cutting-edge AI innovations, industry trends, and 
                  insights from leading experts in the field.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://drive.google.com/uc?export=download&id=1AouG6oSi9FJqxgCdS20J2fAw6Yk1_j0R" className="btn-primary shadow-lg hover:shadow-[0_0_20px_rgba(199,242,65,0.4)]">
                    Download
                  </a>
                  <a href="https://drive.google.com/file/d/1AouG6oSi9FJqxgCdS20J2fAw6Yk1_j0R/view" className="border-2 border-ai-green text-ai-green font-orbitron font-semibold px-6 py-2 rounded transition-all hover:bg-ai-green hover:text-ai-black shadow-md hover:shadow-lg">
                    View Online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEDx OIST Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-ai-black animate-gradient-animation bg-300%">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 order-2 lg:order-1 opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron relative inline-block">
                  <span className="text-red-600">TEDx</span><span className="text-ai-green">OIST</span>
                  <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-ai-green"></span>
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  TEDx OIST brings together creative thinkers and doers to share big ideas that inspire our campus and the world beyond.
                  Discover inspiring talks, hands-on sessions, and a celebration of innovation and curiosity at TEDx OIST.<br/>
                  Explore the TEDx 2023 and 2024 Editions!
                </p>
                <a
                  href="https://www.tedxoriental.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary shadow-lg hover:shadow-[0_0_20px_rgba(199,242,65,0.4)] inline-block"
                >
                  Visit Website
                </a>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2 opacity-0 translate-y-10 transition-all duration-700 delay-200 animate-on-scroll">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-400/20 to-red-400/20 opacity-70 blur-xl rounded-lg animate-pulse"></div>
                  <div className="relative glass-card rounded-lg p-4">
                    <img 
                      src="https://ik.imagekit.io/satvik/AIC/temp.JPG" 
                      alt="TEDx OIST" 
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialMedia/>

      <Footer />
    </div>
  );
};

export default Index;
