
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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

      <section className="pt-32 pb-12 bg-ai-black">
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

      <section className="py-8 bg-[#0c0c0c]">
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
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
                        {teamByYear[year].map((member) => (
                          <div
                            key={member.id}
                            className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800 hover:shadow-[0_0_15px_rgba(199,242,65,0.3)] transition-all flex flex-col items-center py-4"
                          >
                            <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-ai-green">
                              <img
                                src={member.photo}
                                alt={member.name}
                                className="w-full h-full object-cover object-center"
                              />
                            </div>
                            <div className="px-2 text-center">
                              <h3 className="text-base font-semibold font-orbitron text-ai-white mb-1">{member.name}</h3>
                              <p className="text-ai-green text-sm font-medium">{member.position}</p>
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
