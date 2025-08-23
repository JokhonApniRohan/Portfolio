import { ArrowDown, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import profilePicture from '@/assets/profile-picture.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4, // delay between children
      },
    },
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="hero-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container-max px-4 text-center space-y-8">
        
        {/* Profile Picture */}
        <motion.div variants={fadeInVariant} className="w-48 h-48 mx-auto mb-8 relative">
          <img
            src={profilePicture}
            alt="Md Tawhidur Rahman"
            className="w-full h-full object-cover rounded-full shadow-strong ring-4 ring-primary-soft"
          />
          <div className="absolute inset-0 rounded-full bg-tech-gradient opacity-20" />
        </motion.div>

        {/* Hero Content */}
        <motion.div variants={fadeInVariant} className="space-y-6 max-w-4xl mx-auto">
          <h1 className="heading-xl text-foreground">Md Tawhidur Rahman (Rohan)</h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-primary">
            AI, Machine Learning & NLP Enthusiast
          </h2>
          <p className="text-large max-w-2xl mx-auto leading-relaxed">
            Passionate about building impactful AI solutions that solve real-world problems 
            and teaching complex concepts in simplified ways. I believe in creating technology 
            that makes a global impact.
          </p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div variants={fadeInVariant} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link to="/projects">
            <Button className="btn-primary hover-glow">View My Projects</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="btn-secondary">
              <Mail size={20} className="mr-2" />
              Get In Touch
            </Button>
          </Link>
        </motion.div>

        {/* Quick Stats */}
        <motion.div variants={fadeInVariant} className="flex justify-center pt-5">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Home;
