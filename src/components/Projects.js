import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Pithy",
      description:
        "Comment analysis tool that uses LLM for sorting comments based on user defined queries.",
      link: "https://github.com/orgs/Pithy-App/repositories",
    },
    {
      title: "Have You Eaten?",
      description:
        "Social platform for storing ingredients, sharing recipes, and sending anyone a culinary challenge.",
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
