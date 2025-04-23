
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { eventsData, Event } from '../data/events';

const Events = () => {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(eventsData);
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

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
    if (selectedYear === "all") {
      setFilteredEvents(eventsData);
    } else {
      setFilteredEvents(eventsData.filter(event => event.year === selectedYear));
    }
  }, [selectedYear]);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  const openEventModal = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeEventModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-ai-black">
      <Navbar />

      <section className="pt-32 pb-16 bg-ai-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-ai-white mb-6">
              <span className="text-ai-green">Events</span> & Activities
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Explore our workshops, competitions, hackathons, and other exciting events.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-end mb-10 opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll">
              <div className="relative">
                <select 
                  value={selectedYear}
                  onChange={handleYearChange}
                  className="appearance-none bg-[#1a1a1a] border border-gray-800 text-ai-white py-2 px-4 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-ai-green"
                >
                  <option value="all">All Years</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-ai-white">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <div 
                  key={event.id} 
                  className="card opacity-0 translate-y-10 transition-all duration-700 animate-on-scroll"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ai-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-ai-green text-ai-black px-2 py-1 text-xs font-bold rounded">{event.year}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-orbitron text-xl font-bold mb-2 text-ai-white">{event.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{event.date}</p>
                    <p className="text-gray-400 mb-4">{event.description}</p>
                    <button 
                      onClick={() => openEventModal(event)}
                      className="text-ai-green font-medium hover:underline inline-flex items-center"
                    >
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
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No events found for the selected year.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Event Modal using Shadcn Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogOverlay />
        <DialogContent className="bg-[#1a1a1a] text-white border border-gray-800 p-0 max-w-2xl w-full rounded-lg overflow-hidden">
          {selectedEvent && (
            <>
              <div className="h-56 overflow-hidden">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-orbitron text-2xl font-bold text-ai-white">{selectedEvent.title}</h3>
                  <span className="bg-ai-green text-ai-black px-2 py-1 text-xs font-bold rounded">{selectedEvent.year}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{selectedEvent.date}</p>
                <p className="text-gray-300 mb-6">{selectedEvent.longDescription}</p>
                <div className="flex justify-end">
                  <button 
                    onClick={closeEventModal}
                    className="text-gray-400 hover:text-ai-green"
                  >
                    Close
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Events;
