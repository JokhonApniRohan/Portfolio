import { ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  skills: string[];
  level?: number;
}

const SkillCard = ({ icon, title, skills, level }: SkillCardProps) => {
  return (
    <div className="portfolio-card text-center">
      <div className="mb-4 flex justify-center">
        <div className="p-3 bg-primary-soft rounded-xl text-primary">
          {icon}
        </div>
      </div>
      
      <h3 className="heading-md mb-3 text-foreground">{title}</h3>
      
      <div className="space-y-2">
        {skills.map((skill) => (
          <div key={skill} className="text-sm text-muted-foreground">
            {skill}
          </div>
        ))}
      </div>
      
      {level && (
        <div className="mt-4">
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-1000"
              style={{ width: `${level}%` }}
            />
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {level}% Proficiency
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillCard;