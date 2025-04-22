import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: string;
  tags: string[];
  author: string;
  date: string;
  image: string;
  url: string;
  content?: string;
}

const resourcesData: Resource[] = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    description: "A comprehensive guide to the fundamentals of machine learning algorithms and techniques.",
    type: "Tutorial",
    tags: ["ML", "Beginner", "Algorithms"],
    author: "Rahul Patel",
    date: "November 15, 2023",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    url: "#",
    content: `
      <h2>What is Machine Learning?</h2>
      <p>Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to "learn" from data, without being explicitly programmed.</p>
      
      <h2>Key Concepts in Machine Learning</h2>
      <p>There are several key concepts in machine learning that form the foundation of most algorithms and techniques:</p>
      <ul>
        <li><strong>Supervised Learning:</strong> The algorithm is trained on labeled data, learning to map inputs to known outputs.</li>
        <li><strong>Unsupervised Learning:</strong> The algorithm works with unlabeled data, identifying patterns and relationships independently.</li>
        <li><strong>Reinforcement Learning:</strong> The algorithm learns by interacting with an environment, receiving feedback in the form of rewards or penalties.</li>
      </ul>
      
      <h2>Common Machine Learning Algorithms</h2>
      <p>Some popular machine learning algorithms include:</p>
      <ul>
        <li>Linear Regression</li>
        <li>Logistic Regression</li>
        <li>Decision Trees</li>
        <li>Random Forests</li>
        <li>Support Vector Machines</li>
        <li>Neural Networks</li>
        <li>K-Means Clustering</li>
      </ul>
      
      <h2>Steps in a Machine Learning Project</h2>
      <ol>
        <li>Data Collection and Preparation</li>
        <li>Feature Selection and Engineering</li>
        <li>Model Selection and Training</li>
        <li>Model Evaluation</li>
        <li>Model Deployment and Monitoring</li>
      </ol>
      
      <p>This introduction just scratches the surface of machine learning. As you explore more, you'll discover the incredible potential of these techniques to solve complex problems across various domains.</p>
    `
  },
  {
    id: 2,
    title: "Advanced Computer Vision Techniques",
    description: "Explore cutting-edge techniques in computer vision including object detection and image segmentation.",
    type: "Tutorial",
    tags: ["CV", "Advanced", "Deep Learning"],
    author: "Ananya Sharma",
    date: "January 22, 2024",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    url: "#"
  },
  {
    id: 3,
    title: "Ethical Considerations in AI",
    description: "An exploration of ethical issues in AI development and deployment, including bias and transparency.",
    type: "Article",
    tags: ["Ethics", "AI", "Society"],
    author: "Priya Singh",
    date: "March 7, 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    url: "#"
  },
  {
    id: 4,
    title: "Natural Language Processing with BERT",
    description: "Learn how to implement and fine-tune BERT models for various NLP tasks.",
    type: "Tutorial",
    tags: ["NLP", "Deep Learning", "BERT"],
    author: "Vikram Mehta",
    date: "December 5, 2023",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    url: "#"
  },
  {
    id: 5,
    title: "Cypher 30 Contest: Problem Solutions",
    description: "Detailed solutions to all problems from the Cypher 30 Coding Contest with explanations.",
    type: "Solution",
    tags: ["Coding", "Algorithms", "Contest"],
    author: "Arjun Kumar",
    date: "April 2, 2023",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    url: "#"
  },
  {
    id: 6,
    title: "The Future of AI in Healthcare",
    description: "An analysis of how AI is transforming healthcare and the potential future developments.",
    type: "Article",
    tags: ["Healthcare", "AI", "Trends"],
    author: "Neha Gupta",
    date: "February 18, 2024",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
    url: "#"
  },
  {
    id: 7,
    title: "Building a Recommendation System",
    description: "Step-by-step guide to creating a collaborative filtering recommendation system.",
    type: "Tutorial",
    tags: ["ML", "Recommendation", "Intermediate"],
    author: "Rohan Verma",
    date: "May 10, 2024",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    url: "#"
  },
  {
    id: 8,
    title: "AI Club Workshop Recap: Deep Learning Fundamentals",
    description: "A summary of key takeaways from our recent workshop on deep learning fundamentals.",
    type: "Recap",
    tags: ["Workshop", "Deep Learning", "Event"],
    author: "Ishita Jain",
    date: "January 30, 2024",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&q=80",
    url: "#"
  }
];

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
