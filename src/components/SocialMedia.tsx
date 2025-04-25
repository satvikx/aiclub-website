
import { Instagram as InstagramIcon, Linkedin as LinkedinIcon, Facebook as FacebookIcon, Youtube as YoutubeIcon } from 'lucide-react';

const SocialMedia= () => {
    {/* Social Media Section */}
    return (
        <div>
      <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron text-ai-white relative inline-block">
            Connect with <span className="text-ai-green">Us</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-ai-green to-transparent"></span>
          </h2>
          <p className="text-lg text-gray-300">
            Follow us on social media to stay updated with our latest events, workshops, and announcements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <a href="https://instagram.com/aicluboist" target="_blank" rel="noopener noreferrer" 
            className="card p-8 rounded-lg flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(199,242,65,0.3)] opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
            <InstagramIcon size={40} className="text-ai-green mb-4" />
            <span className="text-ai-white font-orbitron font-medium">Instagram</span>
          </a>
          
          <a href="https://www.linkedin.com/company/103163427" target="_blank" rel="noopener noreferrer" 
            className="card p-8 rounded-lg flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(199,242,65,0.3)] opacity-0 translate-y-10 transition-all duration-700 delay-100 animate-on-scroll">
            <LinkedinIcon size={40} className="text-ai-green mb-4" />
            <span className="text-ai-white font-orbitron font-medium">LinkedIn</span>
          </a>
          
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
            className="card p-8 rounded-lg flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(199,242,65,0.3)] opacity-0 translate-y-10 transition-all duration-700 delay-200 animate-on-scroll">
            <FacebookIcon size={40} className="text-ai-green mb-4" />
            <span className="text-ai-white font-orbitron font-medium">Facebook</span>
          </a>
          
          <a href="https://youtube.com/@aicluboist" target="_blank" rel="noopener noreferrer" 
            className="card p-8 rounded-lg flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(199,242,65,0.3)] opacity-0 translate-y-10 transition-all duration-700 delay-300 animate-on-scroll">
            <YoutubeIcon size={40} className="text-ai-green mb-4" />
            <span className="text-ai-white font-orbitron font-medium">YouTube</span>
          </a>
        </div>
      </div>
    </section>
    </div>
    );
};
export default SocialMedia;
