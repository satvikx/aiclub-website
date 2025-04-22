
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useToast } from "@/hooks/use-toast";
import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Web3Forms would be implemented here in a real application
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-ai-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-ai-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-ai-white mb-6">
              Get in <span className="text-ai-green">Touch</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Have questions or want to collaborate? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold font-orbitron text-ai-white mb-6">
                  Send Us a <span className="text-ai-green">Message</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1a1a1a] border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ai-green"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1a1a1a] border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ai-green"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1a1a1a] border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ai-green"
                      placeholder="Subject of your message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-[#1a1a1a] border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ai-green resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex justify-center items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-ai-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold font-orbitron text-ai-white mb-6">
                  Contact <span className="text-ai-green">Information</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800">
                    <h3 className="font-orbitron text-lg font-medium text-ai-white mb-4">Location</h3>
                    <p className="text-gray-300 mb-2">Oriental Institute of Science and Technology</p>
                    <p className="text-gray-300 mb-2">Raisen Road, Bhopal</p>
                    <p className="text-gray-300">Madhya Pradesh, India</p>
                  </div>
                  
                  <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800">
                    <h3 className="font-orbitron text-lg font-medium text-ai-white mb-4">Email</h3>
                    <a href="mailto:aiclub@oist.edu.in" className="text-gray-300 hover:text-ai-green transition-colors">
                      aiclub@oist.edu.in
                    </a>
                  </div>
                  
                  <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800">
                    <h3 className="font-orbitron text-lg font-medium text-ai-white mb-4">Social Media</h3>
                    <div className="flex space-x-4">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-ai-green transition-colors">
                        <Instagram size={24} />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:text-ai-green transition-colors">
                        <Linkedin size={24} />
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:text-ai-green transition-colors">
                        <Facebook size={24} />
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:text-ai-green transition-colors">
                        <Youtube size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder for an actual map */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800 overflow-hidden h-[400px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 mb-2">Map would be displayed here in a real implementation.</p>
                <p className="text-gray-500 text-sm">Oriental Institute of Science and Technology, Bhopal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
