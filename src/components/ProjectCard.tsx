import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  status?: "Completed" | "In Progress" | "Coming Soon"; // ✅ Strongly typed
  className?: string; // optional className for height
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  image, 
  demoUrl, 
  githubUrl,
  status,
  className
}: ProjectCardProps) => {

  // ✅ Dynamic colors based on status for light & dark mode
  const getStatusClasses = (status?: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700 border-green-300 dark:bg-green-800 dark:text-green-200 dark:border-green-600';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-800 dark:text-blue-200 dark:border-blue-600';
      case 'Coming Soon':
        return 'bg-orange-100 text-orange-700 border-orange-300 dark:bg-orange-800 dark:text-orange-200 dark:border-orange-600';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600';
    }
  };

  return (
    <div
      className={`portfolio-card group bg-white dark:bg-gray-900 rounded-xl shadow-md p-5 border border-gray-200 dark:border-gray-700 transition-all flex flex-col justify-between ${className}`}
    >
      <div>
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
        </div>
      </div>

      {/* ✅ Buttons and Status Badge at the bottom */}
      <div className="flex flex-col items-center gap-2 pt-4">
        {status && (
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusClasses(status)}`}
          >
            {status}
          </span>
        )}

        <div className="flex justify-center gap-3 w-full">
          {demoUrl && (
            <Button size="sm" className="btn-primary" onClick={() => window.open(demoUrl, "_blank")}>
              <ExternalLink size={16} className="mr-2" />
              Demo
            </Button>
          )}
          {githubUrl && (
            <Button size="sm" className="btn-primary" onClick={() => window.open(githubUrl, "_blank")}>
              <Github size={16} className="mr-2" />
              View Project on GitHub
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
