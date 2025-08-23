import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Corporate Vitality Insight",
      description: "An advanced NLP-based company analysis system that provides comprehensive insights into corporate health, performance metrics, and market positioning using state-of-the-art machine learning models.",
      technologies: ["BERT", "RoBERTa", "LSTM", "GRU", "KNN", "SVM", "Random Forest", "pandas", "Python"],
    },
    {
      title: "Bus Route Chatbot",
      description: "Intelligent RAG-based assistant designed to help navigate Dhaka's complex public transportation system. Provides real-time route information, scheduling, and optimal path recommendations.",
      technologies: ["Python", "LangChain", "LLaMA 3.3 70B", "RAG", "NLP", "Chatbot"],
    },
    {
      title: "Next-Day Rainfall Prediction",
      description: "Advanced time-series analysis model for weather forecasting with 82% accuracy. Utilizes multiple machine learning algorithms to predict rainfall patterns and help with agricultural and urban planning.",
      technologies: ["Python", "scikit-learn", "TensorFlow", "Time Series", "Data Analysis"],
    },
    {
    title: "Imagination: Amusement Park Management Platform",
    description: "Developed a comprehensive web platform for amusement park ticketing, enabling individual ride bookings, custom package creation, and admin features for price and ride management.",
    technologies: ["HTML", "CSS", "JavaScript", "ExpressJS", "NodeJS"],
    }

  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-lg text-foreground mb-6">My Projects</h1>
          <p className="text-large max-w-2xl mx-auto leading-relaxed">
            Explore my portfolio with AI, Machine Learning and web development projects that solve real-world problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mt-20">
          <div className="portfolio-card text-center">
            <h2 className="heading-md mb-4 text-foreground">More Projects Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new and exciting projects in AI, Machine Learning, and NLP. 
              Stay tuned for more innovative solutions!
            </p>
            <div className="flex justify-center">
              <a 
                href="https://github.com/JokhonApniRohan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                View All on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;