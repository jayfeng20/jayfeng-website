import React from "react";
import "../styles/Projects.css";

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
    link: "https://www.notion.so/Project-HYE-Have-You-Eaten-ReadME-1d3a0cf3ac30807985d6ccdd17ee9fb7?pvs=4",
  },
];

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((proj, idx) => (
        <div className="project-card" key={idx}>
          <h3 className="project-title">{proj.title}</h3>
          <div className="project-details">
            <p className="project-description">{proj.description}</p>
            <div className="project-link">
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
