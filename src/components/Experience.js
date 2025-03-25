import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Job Title 1",
      company: "Company Name",
      duration: "Jan 2020 - Present",
      description:
        "Worked on developing scalable web applications and improving user experience.",
    },
    {
      title: "Job Title 2",
      company: "Company Name",
      duration: "May 2018 - Dec 2019",
      description:
        "Contributed to multiple projects in agile teams and optimized code for performance.",
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
