import React from "react";
import ProjectCard from "./ProjectCard";
const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Description 1",
    imgUrl: "images/projects/Calculator-project.png",
    tag: ["All", "Web"],
  },
];
const ProjectsSection = () => {
  return (
    <>
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
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
