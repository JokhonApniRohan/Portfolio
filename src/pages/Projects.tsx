import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    // {
    //   title: "",
    //   description:
    //     "Coming Soon"
      
    // },
    
    {
      title: "NLP-Based Company State Analysis",
      description:
        "Developed a system to evaluate company performance using NLP by analyzing financial reports, stock market trends, news articles, and public reviews. Built as part of my undergraduate thesis project.",
      technologies: ["Python", "Node.js", "React.js", "NLP", "Data Analysis"],
      githubUrl: ""
    },

    {
      title: "Bus Route Chatbot",
      description:
        "Intelligent RAG-based assistant designed to help navigate Dhaka's complex public transportation system. Provides real-time route information, scheduling, and optimal path recommendations.",
      technologies: ["Python", "LangChain", "LLaMA 3.3 70B", "RAG", "NLP", "Chatbot"],
      githubUrl: "https://github.com/JokhonApniRohan/BusRouteChatbot"
    },
    {
      title: "Next-Day Rainfall Prediction",
      description:
        "Advanced time-series analysis model for weather forecasting with 82% accuracy. Utilizes multiple machine learning algorithms to predict rainfall patterns and help with agricultural and urban planning.",
      technologies: ["Python", "scikit-learn", "TensorFlow", "Time Series", "Data Analysis"],
      githubUrl: "https://github.com/JokhonApniRohan/next_day_rain_prediction"
    },
    {
      title: "Housing Price Prediction Model",
      description:
        "Created a regression-based model to predict housing prices based on location, room count, and amenities, using scikit-learn and pandas.",
      technologies: ["Python", "scikit-learn", "pandas"],
      githubUrl: "https://github.com/JokhonApniRohan/Housing-Price-Prediction"
    },
    {
      title: "Pandemic Tweet Sentiment Analysis",
      description:
        "Designed an NLP pipeline to classify Twitter sentiments during the pandemic using deep learning models like LSTM, GRU, and BERT.",
      technologies: ["Python", "LSTM", "GRU", "BERT"],
      githubUrl: "https://github.com/JokhonApniRohan/Categorising_Sentiments_of_Pandemic_Tweet-NLP"
    },
    {
      title: "Car Price Prediction System",
      description:
        "Implemented a machine learning model to estimate car prices based on brand, model, year, and specifications using multiple algorithms in scikit-learn.",
      technologies: ["Python", "scikit-learn", "pandas"],
      githubUrl: "https://github.com/JokhonApniRohan/car_price_prediction"
    },
    {
      title: "GoNuts: Concert Management System",
      description:
        "Engineered a web application for concert ticketing and management, featuring venue details, ticket purchasing, and merchandise options, built with HTML, CSS, and ExpressJS for a seamless user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "ExpressJS"],
      githubUrl: "https://github.com/JokhonApniRohan/GoNuts"
    },
    {
      title: "Imagination: Amusement Park Management Platform",
      description:
        "Developed a comprehensive web platform for amusement park ticketing, enabling individual ride bookings, custom package creation, and admin features for price and ride management.",
      technologies: ["HTML", "CSS", "JavaScript", "ExpressJS", "NodeJS"],
      githubUrl: "https://github.com/JokhonApniRohan/Amusement-Park-Management-System"
    },
    {
      title: "Speech Transription + Sentiment Analysis",
      description:
        "",
      technologies: ['Coming Soon'],
      githubUrl: ""
    },

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
              githubUrl={project.githubUrl}
              className="h-[420px]" // uniform height
            />
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mt-20 text-center">
          <h2 className="heading-md mb-4 text-foreground">More Projects Coming Soon</h2>
          <p className="text-muted-foreground mb-6">
            I'm constantly working on new and exciting projects in AI, Machine Learning, and NLP. 
            Stay tuned for more innovative solutions!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
