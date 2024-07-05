import React from "react";
import ProjectCard from "./ProjectCard";
const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Description 1",
    imgUrl: "images/projects/Calculator-project.png",
    tag: ["All", "Web"],
    gitUrl: "https://russel-t.github.io/Simple-Calculator-App/",
    previewUrl: "https://github.com/Russel-T/Simple-Calculator-App",
  },
];
const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="py-12">
        <h2 className="text-center text-4xl font-bold text-white mt-4">
          My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              tags={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
};

export default ProjectsSection;
