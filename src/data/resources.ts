
export interface Resource {
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

export const resourcesData: Resource[] = [
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
