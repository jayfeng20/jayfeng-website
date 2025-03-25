import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description:
        "A brief description of project one that highlights its features and the technologies used.",
      link: "#",
    },
    {
      title: "Project Two",
      description:
        "A brief description of project two with details about what makes it unique.",
      link: "#",
    },
    // Add additional projects as needed.
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
