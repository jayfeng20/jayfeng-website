/* src/components/Experience.jsx */
import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    title: "Data Engineer Intern",
    team: "Applications Engineering",
    company: "Tesla",
    companyLink: "https://www.tesla.com",
    duration: "Sept 2024 - Nov 2024",
    description:
      "Optimized data platform components integral to Tesla’s backend application ecosystem.",
  },
  {
    title: "Data Engineer Intern",
    team: "Data Science",
    company: "CCI",
    companyLink: "https://www.cci.com",
    duration: "Jun 2024 - Aug 2024",
    description:
      "Created infrastructure for automatic ML model (XGBoost) generation based on dataset-related parameters.",
  },
  {
    title: "Software Engineer Intern",
    team: "Data Platform",
    company: "Epic Games",
    companyLink: "https://www.epicgames.com",
    duration: "Jan 2024 - Apr 2024",
    description:
      "Worked with various key backend data services that make up the core of Epic Games' data infrastructure.",
  },
];

const Experience = () => (
  <section className="experience" id="experience">
    <h2>Experience</h2>
    <div className="experience-list">
      {experiences.map((exp, idx) => (
        <div className="experience-item" key={idx}>
          <span className="experience-company">
            <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">
              {exp.company}
            </a>
          </span>
          <span className="duration">{exp.duration}</span>
          <div className="experience-details">
            <h3 className="experience-title">{exp.title}</h3>
            {exp.team && <span className="experience-team">{exp.team}</span>}
            <p className="experience-description">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
