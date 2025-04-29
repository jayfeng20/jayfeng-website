/* Skills.tsx / Skills.jsx (with TS) */
import React from "react";
import {
  FaServer,
  FaMobileAlt,
  FaCubes,
  FaDatabase,
  FaTools,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiScala,
  SiKotlin,
  SiSwift,
  SiApachekafka,
  SiApacheflink,
} from "react-icons/si";
import "../styles/Skills.css";

/* ----------  Strict typing  ---------- */
interface Skill {
  name: string;
  icon?: JSX.Element;
  link?: string;
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: Skill[];
}

/* ----------  Data  ---------- */
const skillCategories: SkillCategory[] = [
  {
    title: "Back-End",
    icon: <FaServer />,
    skills: [
      { name: "Python", icon: <FaPython />, link: "https://www.python.org" },
      { name: "Scala", icon: <SiScala />, link: "https://www.scala-lang.org" },
      { name: "Java", icon: <FaJava />, link: "https://openjdk.org/" },
      { name: "Kotlin", icon: <SiKotlin />, link: "https://kotlinlang.org" },
      { name: "SQL" },
    ],
  },
  {
    title: "Front-End",
    icon: <FaMobileAlt />,
    skills: [{ name: "Swift", icon: <SiSwift />, link: "https://swift.org" }],
  },
  {
    title: "Big Data",
    icon: <FaCubes />,
    skills: [
      { name: "Flink", icon: <SiApacheflink /> },
      { name: "Kafka", icon: <SiApachekafka /> },
      { name: "Spark", link: "https://spark.apache.org" },
      { name: "Airflow", link: "https://airflow.apache.org" },
      { name: "Iceberg", link: "https://iceberg.apache.org" },
    ],
  },
  {
    title: "Database & Cloud",
    icon: <FaDatabase />,
    skills: [
      { name: "AWS", icon: <FaAws />, link: "https://aws.amazon.com" },
      { name: "PostgreSQL", link: "https://www.postgresql.org" },
      { name: "Snowflake", link: "https://www.snowflake.com" },
      { name: "Databricks", link: "https://www.databricks.com" },
      { name: "MongoDB", link: "https://www.mongodb.com" },
      { name: "MySQL", link: "https://www.mysql.com" },
      { name: "Vertica", link: "https://www.vertica.com" },
      { name: "Grafana", link: "https://grafana.com" },
    ],
  },
  {
    title: "OS & DevOps",
    icon: <FaTools />,
    skills: [
      { name: "Docker", icon: <FaDocker />, link: "https://www.docker.com" },
      { name: "Terraform", link: "https://www.terraform.io" },
      { name: "sbt", link: "https://www.scala-sbt.org" },
      { name: "Gradle", link: "https://gradle.org" },
      { name: "Git", icon: <FaGitAlt />, link: "https://git-scm.com" },
      { name: "Linux / Unix / Bash" },
      { name: "Jira" },
    ],
  },
];

/* ----------  Component  ---------- */
const Skills: React.FC = () => (
  <section className="skills" id="skills">
    <h2>Skills</h2>

    <div className="skills-list">
      {skillCategories.map((cat) => (
        <div className="skills-item" key={cat.title}>
          <div className="skills-summary">
            <span className="skills-icon">{cat.icon}</span>
            <span className="skills-title">{cat.title}</span>
          </div>

          {/* reveal on hover */}
          <div className="skills-details">
            {cat.skills.map((s) => (
              <a
                key={s.name}
                className="skill-pill"
                href={s.link ?? "#"}
                target={s.link ? "_blank" : undefined}
                rel={s.link ? "noopener noreferrer" : undefined}
              >
                {s.icon && <span className="pill-icon">{s.icon}</span>}
                {s.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
