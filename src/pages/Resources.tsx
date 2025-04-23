import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search } from 'lucide-react';
import { resourcesData, Resource } from '../data/resources';

const Resources = () => {
  const [resources, setResources] = useState<Resource[]>(resourcesData);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [isFullArticleView, setIsFullArticleView] = useState<boolean>(false);

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

  useEffect(() => {
    let filtered = [...resourcesData];
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(resource => 
        resource.title.toLowerCase().includes(term) || 
        resource.description.toLowerCase().includes(term) ||
        resource.author.toLowerCase().includes(term)
      );
    }
    
    if (selectedTags.length > 0) {
      filtered = filtered.filter(resource => 
        selectedTags.some(tag => resource.tags.includes(tag))
      );
    }
    
    if (selectedType) {
      filtered = filtered.filter(resource => resource.type === selectedType);
    }
    
    setResources(filtered);
  }, [searchTerm, selectedTags, selectedType]);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const viewFullArticle = (resource: Resource) => {
    setSelectedResource(resource);
    setIsFullArticleView(true);
    window.scrollTo(0, 0);
  };

  const backToResourceList = () => {
    setSelectedResource(null);
    setIsFullArticleView(false);
  };

  const allTags = Array.from(new Set(resourcesData.flatMap(resource => resource.tags)));
  
  const allTypes = Array.from(new Set(resourcesData.map(resource => resource.type)));

  return (
    <div className="min-h-screen bg-ai-black">
      <Navbar />

      <section className="pt-32 pb-16 bg-ai-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-ai-white mb-6">
              <span className="text-ai-green">Resources</span> & Learning
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Explore tutorials, articles, and solutions to enhance your AI knowledge.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {!isFullArticleView ? (
              <>
                <div className="mb-12 opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-grow">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-[#1a1a1a] border border-gray-800 text-white pl-10 pr-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-ai-green"
                        placeholder="Search resources..."
                      />
                    </div>
                    
                    <div className="min-w-[200px]">
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="bg-[#1a1a1a] border border-gray-800 text-white py-3 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-ai-green appearance-none"
                      >
                        <option value="">All Types</option>
                        {allTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          selectedTags.includes(tag)
                            ? 'bg-ai-green text-ai-black'
                            : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {resources.map((resource, index) => (
                    <div 
                      key={resource.id}
                      className="card opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll cursor-pointer"
                      style={{ transitionDelay: `${(index % 6) * 100}ms` }}
                      onClick={() => viewFullArticle(resource)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={resource.image} 
                          alt={resource.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ai-black to-transparent opacity-70"></div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-ai-green text-ai-black px-2 py-1 text-xs font-bold rounded">
                            {resource.type}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-orbitron text-xl font-bold mb-2 text-ai-white">
                          {resource.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">
                          By {resource.author} • {resource.date}
                        </p>
                        <p className="text-gray-400 mb-4">{resource.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {resource.tags.map(tag => (
                            <span 
                              key={`${resource.id}-${tag}`}
                              className="bg-[#2a2a2a] text-gray-300 px-2 py-1 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="text-ai-green font-medium hover:underline inline-flex items-center">
                          Read More
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
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {resources.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-gray-400 text-lg">No resources found matching your criteria.</p>
                    <button 
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedTags([]);
                        setSelectedType('');
                      }}
                      className="text-ai-green hover:underline mt-2"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </>
            ) : (
              selectedResource && (
                <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800 animate-fade-in">
                  <div className="relative h-64">
                    <img 
                      src={selectedResource.image} 
                      alt={selectedResource.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ai-black to-transparent opacity-70"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-ai-green text-ai-black px-2 py-1 text-xs font-bold rounded">
                        {selectedResource.type}
                      </span>
                    </div>
                    <button 
                      onClick={backToResourceList}
                      className="absolute top-4 left-4 bg-ai-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M19 12H5"></path>
                        <path d="m12 19-7-7 7-7"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="p-8">
                    <h2 className="font-orbitron text-3xl font-bold mb-4 text-ai-white">
                      {selectedResource.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedResource.tags.map(tag => (
                        <span 
                          key={`${selectedResource.id}-${tag}`}
                          className="bg-[#2a2a2a] text-gray-300 px-2 py-1 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm mb-6">
                      By {selectedResource.author} • {selectedResource.date}
                    </p>
                    <div 
                      className="text-gray-300 leading-relaxed article-content" 
                      dangerouslySetInnerHTML={{ __html: selectedResource.content || selectedResource.description }}
                    />
                    <div className="mt-8 pt-6 border-t border-gray-800">
                      <button 
                        onClick={backToResourceList}
                        className="text-ai-green font-medium hover:underline inline-flex items-center"
                      >
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
                          className="mr-1"
                        >
                          <path d="M19 12H5"></path>
                          <path d="m12 19-7-7 7-7"></path>
                        </svg>
                        Back to Resources
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
