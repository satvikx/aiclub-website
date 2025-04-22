
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Join = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    semester: '',
    branch: '',
    whyJoin: '',
    experience: '',
    expectations: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataObj = new FormData(e.target as HTMLFormElement);
      
      // Add the web3forms access key
      formDataObj.append("access_key", "bd1c7ebc-830b-4d5d-950b-3f1d5124ec97");
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Application Submitted!",
          description: "We'll review your application and get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          semester: '',
          branch: '',
          whyJoin: '',
          experience: '',
          expectations: ''
        });
      } else {
        console.log("Error", data);
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit your application. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-ai-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-ai-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-ai-white mb-6">
              Join the <span className="text-ai-green">AI Club</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Become part of our community and explore the exciting world of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-orbitron text-ai-white mb-12 text-center">
              Why <span className="text-ai-green">Join Us?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] transition-all">
                <div className="bg-[#222] h-12 w-12 flex items-center justify-center rounded-lg mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#C7F241" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M9 18V5l12-2v13"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-orbitron text-ai-white mb-3">Learning Opportunities</h3>
                <p className="text-gray-400">
                  Access workshops, tutorials, and hands-on sessions led by experienced members and industry professionals.
                </p>
              </div>
              
              <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] transition-all">
                <div className="bg-[#222] h-12 w-12 flex items-center justify-center rounded-lg mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#C7F241" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-orbitron text-ai-white mb-3">Networking</h3>
                <p className="text-gray-400">
                  Connect with like-minded students, faculty members, and industry professionals who share your interest in AI.
                </p>
              </div>
              
              <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] transition-all">
                <div className="bg-[#222] h-12 w-12 flex items-center justify-center rounded-lg mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#C7F241" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-orbitron text-ai-white mb-3">Project Experience</h3>
                <p className="text-gray-400">
                  Collaborate on real-world AI projects that enhance your portfolio and prepare you for your future career.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] transition-all">
                <div className="bg-[#222] h-12 w-12 flex items-center justify-center rounded-lg mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#C7F241" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-orbitron text-ai-white mb-3">Skill Development</h3>
                <p className="text-gray-400">
                  Develop technical skills in programming, data analysis, and AI algorithms, as well as soft skills like 
                  teamwork, communication, and problem-solving that are valued by employers.
                </p>
              </div>
              
              <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] transition-all">
                <div className="bg-[#222] h-12 w-12 flex items-center justify-center rounded-lg mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#C7F241" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M12 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v1a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-1a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-3m-4-1V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2m-6-1h6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-orbitron text-ai-white mb-3">Career Opportunities</h3>
                <p className="text-gray-400">
                  Gain exposure to potential internships, job opportunities, and research positions through our network of 
                  industry partners and alumni connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-orbitron text-ai-white mb-12 text-center">
              Membership <span className="text-ai-green">Application</span>
            </h2>
            
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#222] border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ai-green"
                      placeholder="Your full name"
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
                      className="w-full bg-[#222] border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ai-green"
                      placeholder="Your email address"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#222] border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ai-green"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="semester" className="block text-gray-300 mb-2">Semester</label>
                    <select
                      id="semester"
                      name="semester"
                      value={formData.semester}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#222] border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ai-green appearance-none"
                    >
                      <option value="">Select your semester</option>
                      <option value="1">1st Semester</option>
                      <option value="2">2nd Semester</option>
                      <option value="3">3rd Semester</option>
                      <option value="4">4th Semester</option>
                      <option value="5">5th Semester</option>
                      <option value="6">6th Semester</option>
                      <option value="7">7th Semester</option>
                      <option value="8">8th Semester</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="branch" className="block text-gray-300 mb-2">Branch/Department</label>
                  <select
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#222] border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ai-green appearance-none"
                  >
                    <option value="">Select your branch</option>
                    <option value="Computer Science">CSE AIML</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Electronics">Electronics</option>
                    {/* <option value="Electrical">Electrical</option> */}
                    <option value="Mechanical">Mechanical</option>
                    <option value="Civil">Civil</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="whyJoin" className="block text-gray-300 mb-2">Why do you want to join the AI Club?</label>
                  <textarea
                    id="whyJoin"
                    name="whyJoin"
                    value={formData.whyJoin}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full bg-[#222] border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ai-green resize-none"
                    placeholder="Tell us why you're interested in joining the AI Club"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-gray-300 mb-2">Previous Experience with AI/ML (if any)</label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-[#222] border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ai-green resize-none"
                    placeholder="Describe any previous experience with AI/ML technologies (No experience is also fine!)"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="expectations" className="block text-gray-300 mb-2">What do you hope to gain from the AI Club?</label>
                  <textarea
                    id="expectations"
                    name="expectations"
                    value={formData.expectations}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full bg-[#222] border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ai-green resize-none"
                    placeholder="What are your expectations from joining the AI Club?"
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
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;
