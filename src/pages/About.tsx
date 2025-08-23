import { GraduationCap, Calendar, Award, Download } from 'lucide-react';

const About = () => {
  const education = [
    {
      institution: "BRAC University",
      degree: "BSc in Computer Science & Engineering",
      period: "2021 - 2025",
      grade: "CGPA 3.58",
      status: "completed"
    },
    {
      institution: "Dhaka Imperial College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2018 - 2020",
      grade: "GPA 5.00",
      status: "completed"
    },
    {
      institution: "Ali Ahmed High School and College",
      degree: "Secondary School Certificate (SSC)",
      period: "2010 - 2018",
      grade: "GPA 4.72",
      status: "completed"
    }
  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="heading-lg text-foreground mb-6">About Me</h1>
            <p className="text-large leading-relaxed">
              Get to know more about my journey, passion, and educational background
            </p>
          </div>

          {/* Bio Section */}
          <div className="portfolio-card mb-12">
            <h2 className="heading-md mb-6 text-foreground">My Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-primary font-semibold">Md Tawhidur Rahman</span>, 
                a Computer Science & Engineering graduate from BRAC University with a CGPA of 3.58. 
                I am a passionate AI and Machine Learning enthusiast, driven by a deep fascination 
                with artificial intelligence and its potential to solve complex real-world problems.

              </p>
              
              <p>
                What sets me apart is not just my technical expertise in AI, Machine Learning, 
                and Natural Language Processing, but also my passion for teaching and 
                knowledge sharing. I believe that complex concepts can be made accessible 
                to everyone through simplified explanations and hands-on demonstrations.
              </p>
              
              <p>
                My goal is to build innovative solutions that create a positive global impact 
                while contributing to the advancement of AI technology. Whether it's developing 
                NLP-based analysis tools, creating intelligent chatbots, or building predictive 
                models, I approach every project with enthusiasm and a commitment to excellence.
              </p>

              {/* Download CV Button */}
              <div className="pt-6 flex justify-center">
                <a
                  href="./Md_Tawhidur_Rahman_(CV)_20-08-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg shadow hover:bg-primary/90 transition-all"
                >
                  <Download size={18} />
                  CV
                </a>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="portfolio-card">
            <h2 className="heading-md mb-8 text-foreground flex items-center">
              <GraduationCap className="mr-3 text-primary" size={28} />
              Educational Journey
            </h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-border" />
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        edu.status === 'current' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {edu.status === 'current' ? <Calendar size={20} /> : <Award size={20} />}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {edu.institution}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {edu.period}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-1">
                        {edu.degree}
                      </p>
                      
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-primary">
                          {edu.grade}
                        </span>
                        {edu.status === 'current' && (
                          <span className="ml-3 px-2 py-1 text-xs bg-primary-soft text-primary rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
