
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Linkedin, Github, Mail, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { teamData, TeamMember } from '../data/team';

const Team = () => {
  const [teamByYear, setTeamByYear] = useState<{ [key: string]: TeamMember[] }>({});

  useEffect(() => {
    const grouped = teamData.reduce((acc, member) => {
      if (!acc[member.year]) {
        acc[member.year] = [];
      }
      acc[member.year].push(member);
      return acc;
    }, {} as { [key: string]: TeamMember[] });

    setTeamByYear(grouped);
  }, []);

  return (
    <div className="min-h-screen bg-ai-black">
      <Navbar />

      <section className="pt-32 pb-16 bg-ai-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-ai-white mb-6">
              Meet Our <span className="text-ai-green">Team</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              The passionate individuals behind the AI Club who make everything possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Accordion type="single" collapsible>
              {Object.keys(teamByYear)
                .sort((a, b) => Number(b) - Number(a))
                .map((year) => (
                  <AccordionItem key={year} value={year}>
                    <AccordionTrigger className="text-2xl font-bold font-orbitron text-ai-white">
                      {year} Team
                    </AccordionTrigger>
                    <AccordionContent>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-8">                        {teamByYear[year].map((member) => (
                          <div
                            key={member.id}
                            className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800 hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] transition-all"
                          >
                            <div className="h-52 overflow-hidden">
                              <img
                                src={member.photo}
                                alt={member.name}
                                className="w-full h-full object-cover object-center"
                              />
                            </div>
                            <div className="p-6">
                               <h3 className="text-xl font-bold font-orbitron text-ai-white mb-1">{member.name}</h3>
                               <p className="text-ai-green font-medium mb-4">{member.position}</p>
                               {/* <p className="text-gray-400 mb-4">{member.bio}</p> */}
                               <div className="flex space-x-3">
                                 {member.socials.linkedin && (
                                   <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-ai-green transition-colors">
                                     <Linkedin size={16} />
                                   </a>
                                 )}
                                 {member.socials.github && (
                                   <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-ai-green transition-colors">
                                     <Github size={16} />
                                   </a>
                                 )}
                                 {member.socials.email && (
                                   <a href={`mailto:${member.socials.email}`} className="text-gray-400 hover:text-ai-green transition-colors">
                                     <Mail size={16} />
                                   </a>
                                 )}
                               </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
