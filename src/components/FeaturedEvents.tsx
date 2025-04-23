import { Link } from 'react-router-dom';


const FeaturedEvents = () => {
return (
    <div>
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
      </div>
);

};
export default FeaturedEvents;