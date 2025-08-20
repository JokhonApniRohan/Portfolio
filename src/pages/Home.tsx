import { ArrowDown, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import profilePicture from '@/assets/profile-picture.jpg';

const Home = () => {
  return (
    <div className="hero-section">
      <div className="container-max px-4">
        <div className="text-center space-y-8">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <img
                src={profilePicture}
                alt="Md Tawhidur Rahman"
                className="w-full h-full object-cover rounded-full shadow-strong ring-4 ring-primary-soft"
              />
              <div className="absolute inset-0 rounded-full bg-tech-gradient opacity-20" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="heading-xl text-foreground">
              Md Tawhidur Rahman (Rohan)
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-primary">
              AI, Machine Learning & NLP Enthusiast
            </h2>
            
            <p className="text-large max-w-2xl mx-auto leading-relaxed">
              Passionate about building impactful AI solutions that solve real-world problems 
              and teaching complex concepts in simplified ways. I believe in creating technology 
              that makes a global impact.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/projects">
              <Button className="btn-primary hover-glow">
                View My Projects
                <ArrowDown size={20} className="ml-2" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button variant="outline" className="btn-secondary">
                <Mail size={20} className="mr-2" />
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3.58</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">82%</div>
              <div className="text-sm text-muted-foreground">ML Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;