import { Brain, Code, Database, MessageSquare, TrendingUp, Lightbulb } from 'lucide-react';
import SkillCard from '@/components/SkillCard';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Brain size={32} />,
      title: "Artificial Intelligence",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision", "Reinforcement Learning"],

    },
    {
      icon: <MessageSquare size={32} />,
      title: "Natural Language Processing",
      skills: ["BERT", "RoBERTa", "Transformers", "Text Analysis", "Sentiment Analysis", "Language Models"],

    },
    {
      icon: <Code size={32} />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "SQL", "HTML", "CSS", "C++"],

    },
    {
      icon: <Database size={32} />,
      title: "Data Science & Analytics",
      skills: ["pandas", "NumPy", "scikit-learn", "TensorFlow", "PyTorch", "Data Visualization"],

    },
    {
      icon: <TrendingUp size={32} />,
      title: "Machine Learning Models",
      skills: ["LSTM", "GRU", "KNN", "SVM", "Random Forest", "Time Series Analysis"],

    },
    {
      icon: <Lightbulb size={32} />,
      title: "Specialized Tools",
      skills: ["LangChain", "RAG Systems", "Chatbot Development", "API Integration", "Cloud Platforms"],

    }
  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-lg text-foreground mb-6">Skills & Expertise</h1>
          <p className="text-large max-w-2xl mx-auto leading-relaxed">
            My technical skills and expertise across various domains of AI, Machine Learning, and Data Science
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
              level={skill.level}
            />
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="portfolio-card">
          <h2 className="heading-md mb-6 text-foreground text-center">Additional Competencies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Development & Tools</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>• Git & Version Control</div>
                <div>• REST API Development</div>
                <div>• Jupyter Notebooks</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Soft Skills & Teaching</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>• Complex Concept Simplification</div>
                <div>• Technical Writing & Documentation</div>
                <div>• Problem-Solving & Critical Thinking</div>
                <div>• Team Collaboration</div>
                <div>• Knowledge Sharing & Mentoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;