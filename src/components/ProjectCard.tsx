import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  image, 
  demoUrl, 
  githubUrl 
}: ProjectCardProps) => {
  return (
    <div className="portfolio-card group">
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="space-y-4">
        <h3 className="heading-md text-foreground">{title}</h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-primary-soft text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          {demoUrl && (
            <Button size="sm" className="btn-primary">
              <ExternalLink size={16} className="mr-2" />
              Demo
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm">
              <Github size={16} className="mr-2" />
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;