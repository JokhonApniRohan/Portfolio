import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import ProjectCard from "@/components/ProjectCard";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  status: "Completed" | "In Progress" | "Coming Soon";
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("./projects.xlsx");
      const arrayBuffer = await response.arrayBuffer();

      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData: any[] = XLSX.utils.sheet_to_json(sheet);

      const formattedProjects: Project[] = jsonData.map((row) => ({
        title: row.title || "Untitled Project",
        description: row.description || "No description available.",
        technologies: row.technologies
          ? row.technologies.split(",").map((tech: string) => tech.trim())
          : [],
        githubUrl: row.githubUrl || "",
        status: row.status || "Coming Soon",
      }));

      setProjects(formattedProjects);
    };

    fetchProjects();
  }, []);

  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-lg text-foreground mb-6">My Projects</h1>
          <p className="text-large max-w-2xl mx-auto leading-relaxed">
            Explore my portfolio with AI, Machine Learning and web development projects that solve real-world problems.
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
              status={project.status}
              className="h-[500px]" // ✅ taller card
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
