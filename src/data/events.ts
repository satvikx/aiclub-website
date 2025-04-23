
export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  longDescription: string;
  year: string;
}

export const eventsData: Event[] = [
  {
    id: 1,
    title: "Cypher 30 Coding Contest",
    date: "March 15, 2023",
    description: "A fast-paced coding competition testing algorithmic skills and problem-solving abilities.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    longDescription: "Cypher 30 was a unique coding challenge where participants had just 30 minutes to solve each problem before moving on to the next one. The competition featured a mix of algorithmic challenges, data structure problems, and optimization tasks. Over 100 students participated, with prizes awarded to the top performers in different categories. The event helped identify talented coders and promoted healthy competition among students.",
    year: "2023"
  },
  {
    id: 2,
    title: "Logo Designing Contest TEDx",
    date: "May 20, 2023",
    description: "Creative design challenge focused on creating impactful visual identities for TEDx events.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    longDescription: "In collaboration with TEDx OIST, the AI Club organized a logo design contest that challenged participants to create innovative visual identities that captured the essence of ideas worth spreading. The contest received over 50 submissions, with designs judged on creativity, relevance, and technical execution. The winning logo was adopted for the TEDx OIST event and the designer received recognition and prizes including design software subscriptions.",
    year: "2023"
  },
  {
    id: 3,
    title: "AI Workshop Series",
    date: "February 10, 2024",
    description: "Hands-on sessions exploring machine learning, deep learning, and practical AI applications.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    longDescription: "The AI Workshop Series consisted of six weekly sessions covering different aspects of artificial intelligence. Topics included introduction to machine learning, deep learning with TensorFlow, computer vision applications, natural language processing, reinforcement learning, and ethical considerations in AI. Each workshop combined theoretical foundations with practical hands-on exercises, allowing participants to build real working models. Industry experts were invited as guest instructors for specialized topics.",
    year: "2024"
  },
  {
    id: 4,
    title: "AI in Healthcare Symposium",
    date: "April 5, 2024",
    description: "A collaborative event exploring the applications of AI in modern healthcare systems.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    longDescription: "The AI in Healthcare Symposium brought together students, faculty, and healthcare professionals to discuss and showcase the transformative potential of AI in medical diagnostics, patient care, and healthcare administration. The event featured keynote speeches from leading researchers, panel discussions on ethical implications, and demonstrations of AI-powered healthcare solutions developed by students. The symposium highlighted the interdisciplinary nature of AI applications and encouraged collaboration between technical and medical domains.",
    year: "2024"
  },
  {
    id: 5,
    title: "AI Project Showcase",
    date: "November 12, 2023",
    description: "Exhibition of innovative AI projects developed by club members throughout the year.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    longDescription: "The AI Project Showcase was the culmination of months of work by club members on various AI initiatives. Projects ranged from smart home automation systems and computer vision applications to natural language processing tools and predictive analytics solutions. Each team presented their work through demonstrations, posters, and short presentations. The event was attended by students, faculty, and industry representatives, providing valuable networking opportunities and feedback for the participants.",
    year: "2023"
  },
  {
    id: 6,
    title: "Future of AI Panel Discussion",
    date: "September 8, 2024",
    description: "Engaging dialogue on emerging trends and ethical considerations in artificial intelligence.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
    longDescription: "The Future of AI Panel Discussion featured experts from academia and industry discussing emerging trends, potential challenges, and ethical considerations in the rapidly evolving field of artificial intelligence. Topics included the impact of AI on employment, privacy concerns, bias in AI systems, and regulatory frameworks. The interactive format allowed audience members to ask questions and engage with panelists, fostering a rich exchange of ideas and perspectives on how AI might shape our future society.",
    year: "2024"
  }
];
