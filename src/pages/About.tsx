import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
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
      <section className="pt-32 pb-16 bg-ai-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-ai-white mb-6">
              About <span className="text-ai-green">AI Club</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Fostering innovation, learning, and collaboration in the field of Artificial Intelligence at OIST.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
                <h2 className="text-3xl font-bold font-orbitron text-ai-white mb-6">
                  Our <span className="text-ai-green">Mission</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To create a collaborative environment where students can explore, learn, and innovate in 
                  the field of Artificial Intelligence and related technologies.
                </p>
                <p className="text-lg text-gray-300">
                  We aim to bridge the gap between theoretical knowledge and practical applications, 
                  enabling members to develop real-world solutions and contribute to the advancement of AI.
                </p>
              </div>
              
              <div className="lg:w-1/2 opacity-0 translate-y-10 transition-all duration-700 delay-100 animate-on-scroll">
                <h2 className="text-3xl font-bold font-orbitron text-ai-white mb-6">
                  Our <span className="text-ai-green">Vision</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To be a leading student-driven AI community that fosters innovation, technical excellence, 
                  and ethical understanding of artificial intelligence.
                </p>
                <p className="text-lg text-gray-300">
                  We envision creating a network of AI enthusiasts who will drive technological advancement 
                  and make significant contributions to the AI ecosystem, both academically and professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-ai-white mb-6">
              Our <span className="text-ai-green">History</span>
            </h2>
            <p className="text-lg text-gray-300">
              From a small group of AI enthusiasts to a thriving community of innovators.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative border-l-2 border-ai-green pl-10 ml-6">
              <div className="mb-16 opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
                <div className="absolute -left-[9px] mt-2.5 h-4 w-4 rounded-full bg-ai-green"></div>
                <h3 className="text-2xl font-bold font-orbitron text-ai-white mb-2 mx-5">2022 - Inception</h3>
                <p className="text-gray-300 mb-4">
                  The AI Club was established with a vision to create a collaborative space for students 
                  passionate about artificial intelligence and its applications.
                </p>
                <p className="text-gray-300">
                  Initial focus was on building a strong foundation through workshops and study groups.
                </p>
              </div>

              <div className="mb-16 opacity-0 translate-y-10 transition-all duration-700 delay-100 animate-on-scroll">
                <div className="absolute -left-[9px] mt-2.5 h-4 w-4 rounded-full bg-ai-green"></div>
                <h3 className="text-2xl font-bold font-orbitron text-ai-white mb-2 mx-5">2023 - Growth</h3>
                <p className="text-gray-300 mb-4">
                  Expanded activities to include industry partnerships, hackathons, and TEDx 2023 event 
                  from leading AI researchers and practitioners.
                </p>
                <p className="text-gray-300">
                  Membership quadrupled as we introduced specialized tracks in machine learning, computer vision, and NLP.
                </p>
              </div>

              <div className="mb-16 opacity-0 translate-y-10 transition-all duration-700 delay-200 animate-on-scroll">
                <div className="absolute -left-[9px] mt-2.5 h-4 w-4 rounded-full bg-ai-green"></div>
                <h3 className="text-2xl font-bold font-orbitron text-ai-white mb-2 mx-5">2024 - Innovation</h3>
                <p className="text-gray-300 mb-4">
                  Launched groundbreaking initiatives including the Ninja Quest Test Series and 
                  the annual AI Innovation Summit.
                </p>
                <p className="text-gray-300">
                  Promoted the Tech Culture in the Campus Space.
                </p>
              </div>

              <div className="opacity-0 translate-y-10 transition-all duration-700 delay-300 animate-on-scroll">
                <div className="absolute -left-[9px] mt-2.5 h-4 w-4 rounded-full bg-ai-green"></div>
                <h3 className="text-2xl font-bold font-orbitron text-ai-white mb-2 mx-5">2025 - Present</h3>
                <p className="text-gray-300 mb-4">
                  Expanding through virtual events and valuable collaborations while 
                  maintaining our commitment to cutting-edge AI education and research.
                </p>
                <p className="text-gray-300">
                  Leading initiatives in ethical AI development and sustainable technology practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="py-20 bg-gradient-to-b from-[#0f0f0f] to-[#080808]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-ai-white mb-6">
              Areas of <span className="text-ai-green">Focus</span>
            </h2>
            <p className="text-lg text-gray-300">
              Exploring various domains of Artificial Intelligence and their applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 transition-all hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
              <h3 className="text-xl font-bold font-orbitron text-ai-white mb-4">Machine Learning</h3>
              <p className="text-gray-300">
                Exploring algorithms that enable computers to learn from and make decisions based on data, 
                including supervised, unsupervised, and reinforcement learning techniques.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 transition-all hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] opacity-0 translate-y-10 transition-all duration-700 delay-100 animate-on-scroll">
              <h3 className="text-xl font-bold font-orbitron text-ai-white mb-4">Deep Learning</h3>
              <p className="text-gray-300">
                Diving into neural networks and their applications in computer vision, natural language 
                processing, and other complex pattern recognition tasks.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 transition-all hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] opacity-0 translate-y-10 transition-all duration-700 delay-200 animate-on-scroll">
              <h3 className="text-xl font-bold font-orbitron text-ai-white mb-4">Computer Vision</h3>
              <p className="text-gray-300">
                Developing systems that can process, analyze, and understand visual data from the real world, 
                enabling machines to interpret and make decisions based on visual inputs.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 transition-all hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] opacity-0 translate-y-10 transition-all duration-700 delay-100 animate-on-scroll">
              <h3 className="text-xl font-bold font-orbitron text-ai-white mb-4">Natural Language Processing</h3>
              <p className="text-gray-300">
                Working on technologies that enable computers to understand, interpret, and generate human 
                language in a way that is both meaningful and useful.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 transition-all hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] opacity-0 translate-y-10 transition-all duration-700 delay-200 animate-on-scroll">
              <h3 className="text-xl font-bold font-orbitron text-ai-white mb-4">Robotics</h3>
              <p className="text-gray-300">
                Combining AI with mechanical engineering to create intelligent machines capable of 
                performing tasks that typically require human intelligence and dexterity.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 transition-all hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] opacity-0 translate-y-10 transition-all duration-700 delay-300 animate-on-scroll">
              <h3 className="text-xl font-bold font-orbitron text-ai-white mb-4">Ethical AI</h3>
              <p className="text-gray-300">
                Addressing the ethical considerations, biases, and societal implications of AI systems 
                to ensure responsible development and deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Sponsors */}
      <section className="py-20 bg-[#080808]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-ai-white mb-6">
              Partners & <span className="text-ai-green">Sponsors</span>
            </h2>
            <p className="text-lg text-gray-300">
              Organizations that support and collaborate with the AI Club.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white bg-opacity-5 p-6 rounded-lg flex items-center justify-center opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-ai-black font-orbitron font-bold text-lg">OIST</span>
                </div>
                <p className="text-white text-sm">Oriental Institute of Science and Technology</p>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-5 p-6 rounded-lg flex items-center justify-center opacity-0 translate-y-10 transition-all duration-700 delay-100 animate-on-scroll">
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-ai-black font-orbitron font-bold text-lg">CN</span>
                </div>
                <p className="text-white text-sm">Coding Ninjas</p>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-5 p-6 rounded-lg flex items-center justify-center opacity-0 translate-y-10 transition-all duration-700 delay-200 animate-on-scroll">
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-ai-black font-orbitron font-bold text-lg">GfG</span>
                </div>
                <p className="text-white text-sm">Geeks for Geeks</p>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-5 p-6 rounded-lg flex items-center justify-center opacity-0 translate-y-10 transition-all duration-700 delay-300 animate-on-scroll">
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-ai-black font-orbitron font-bold text-lg">TED</span>
                </div>
                <p className="text-white text-sm">TEDx Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
