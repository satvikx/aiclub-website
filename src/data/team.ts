
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  photo: string;
  bio: string;
  socials: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
  year: string;
  isExecutive: boolean;
}

export const teamData: TeamMember[] = [
  // ... 2025 Team
  {
    id: 13,
    name: "Maya Chen",
    position: "President",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
    bio: "PhD candidate in AI and robotics with a focus on human-robot interaction. Led groundbreaking research in embodied intelligence.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "maya@aiclub.com"
    },
    year: "2025",
    isExecutive: true
  },
  {
    id: 14,
    name: "Zain Ahmed",
    position: "Vice President",
    photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=256&q=80",
    bio: "AI ethics researcher specializing in fairness and transparency in machine learning systems. Published author on AI governance.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "zain@aiclub.com"
    },
    year: "2025",
    isExecutive: true
  },
  {
    id: 15,
    name: "Sophia Kim",
    position: "Secretary",
    photo: "https://images.unsplash.com/photo-1563620915-8478189e41c9?auto=format&fit=crop&w=256&q=80",
    bio: "Computational linguist with expertise in multilingual NLP. Developed award-winning language models for low-resource languages.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "sophia@aiclub.com"
    },
    year: "2025",
    isExecutive: true
  },
  {
    id: 16,
    name: "Leo Martinez",
    position: "Technical Lead",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80",
    bio: "Full-stack AI engineer specializing in production ML systems. Previously worked at leading AI research laboratories.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "leo@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 17,
    name: "Amara Okafor",
    position: "Events Coordinator",
    photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=256&q=80",
    bio: "Community building expert with experience in organizing tech conferences. Passionate about creating inclusive AI education opportunities.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "amara@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  {
    id: 18,
    name: "Ravi Patel",
    position: "Content Creator",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
    bio: "Digital media specialist and AI educator. Creates accessible content explaining complex AI concepts through various media formats.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ravi@aiclub.com"
    },
    year: "2025",
    isExecutive: false
  },
  // ... 2024 Team
  {
    id: 7,
    name: "Rohan Verma",
    position: "President",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
    bio: "Machine learning researcher focusing on reinforcement learning and robotics. Previously interned at major AI research labs.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "rohan@aiclub.com"
    },
    year: "2024",
    isExecutive: true
  },
  {
    id: 8,
    name: "Ishita Jain",
    position: "Vice President",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    bio: "Computer vision specialist with experience in developing AI solutions for healthcare. Passionate about accessibility tech.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ishita@aiclub.com"
    },
    year: "2024",
    isExecutive: true
  },
  {
    id: 9,
    name: "Karthik Rao",
    position: "Secretary",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80",
    bio: "Data engineer with strong background in big data technologies. Streamlined the club's data infrastructure.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "karthik@aiclub.com"
    },
    year: "2024",
    isExecutive: true
  },
  {
    id: 10,
    name: "Aisha Khan",
    position: "Technical Lead",
    photo: "https://images.unsplash.com/photo-1560365163-3e8d64e762ef?auto=format&fit=crop&w=256&q=80",
    bio: "Backend developer specialized in scalable AI systems. Leads the development of the club's project management platform.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "aisha@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 11,
    name: "Siddharth Tiwari",
    position: "Events Coordinator",
    photo: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=256&q=80",
    bio: "Creative professional with experience in organizing tech events. Responsible for workshop series and hackathons.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "siddharth@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  {
    id: 12,
    name: "Divya Malhotra",
    position: "Content Creator",
    photo: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=256&q=80",
    bio: "Digital marketer and content strategist. Manages the club's online presence and AI Insights Magazine.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "divya@aiclub.com"
    },
    year: "2024",
    isExecutive: false
  },
  // ... 2023 Team
  {
    id: 1,
    name: "Ananya Sharma",
    position: "President",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80",
    bio: "Computer Science graduate with a passion for AI and machine learning. Led multiple research projects in computer vision.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ananya@aiclub.com"
    },
    year: "2023",
    isExecutive: true
  },
  {
    id: 2,
    name: "Rahul Patel",
    position: "Vice President",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    bio: "AI researcher specializing in natural language processing and generative models. Published in top AI conferences.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "rahul@aiclub.com"
    },
    year: "2023",
    isExecutive: true
  },
  {
    id: 3,
    name: "Priya Singh",
    position: "Secretary",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80",
    bio: "Data scientist with expertise in statistical analysis and predictive modeling. Passionate about AI ethics.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "priya@aiclub.com"
    },
    year: "2023",
    isExecutive: true
  },
  {
    id: 4,
    name: "Vikram Mehta",
    position: "Technical Lead",
    photo: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=256&q=80",
    bio: "Full-stack developer with expertise in AI-powered web applications. Led the development of the club's project management platform.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "vikram@aiclub.com"
    },
    year: "2023",
    isExecutive: false
  },
  {
    id: 5,
    name: "Neha Gupta",
    position: "Events Coordinator",
    photo: "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?auto=format&fit=crop&w=256&q=80",
    bio: "Marketing specialist with a background in event management. Organized the successful Cypher 30 Coding Contest.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "neha@aiclub.com"
    },
    year: "2023",
    isExecutive: false
  },
  {
    id: 6,
    name: "Arjun Kumar",
    position: "Content Creator",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    bio: "Digital media enthusiast and content creator. Manages the club's blog and social media channels.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "arjun@aiclub.com"
    },
    year: "2023",
    isExecutive: false
  }
];
