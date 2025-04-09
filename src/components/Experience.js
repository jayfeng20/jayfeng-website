import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer Intern, Applications Engineering",
      company: "Tesla",
      duration: "Sept 2024 - Nov 2024",
      description:
        "Worked on the data platform that's a part of Tesla's backend application ecosystem.",
    },
    {
      title: "Data Engineer Intern, Data Science",
      company: "Castleton Commodities International",
      duration: "Jun 2024 - Aug 2024",
      description:
        "Created infrastructure for automatic ML model (XGBoost) generation based on dataset-related parameters.",
    },
    {
      title: "Software Engineer Intern, Data Platform",
      company: "Epic Games",
      duration: "Jan 2024 - Apr 2024",
      description:
        "Worked with various key backend data services that make up the core of Epic Games' data infrastructure.",
    },
    // Add additional experiences as needed.
  ];

  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <h3>
              {exp.title} - {exp.company}
            </h3>
            <span className="duration">{exp.duration}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
