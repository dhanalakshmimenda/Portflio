import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaJava,
  FaCode,
  FaNodeJs,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiPostman, SiSpring, SiOracle } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

const skillsData = [
  {
    title: "Frontend",
    icon: <FaReact color="#61DBFB" />,
    skills: [
      { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
      { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
      { name: "React", icon: <FaReact color="#61DBFB" /> },
      { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaJava color="#f89820" />,
    skills: [
      { name: "Java", icon: <FaJava color="#f89820" /> },
      { name: "C", icon: <FaCode color="#00758f" /> },
      { name: "Spring", icon: <SiSpring color="#6db33f" /> },
      { name: "Node.js", icon: <FaNodeJs color="#68a063" /> },
    ],
  },
  {
    title: "Database",
    icon: <FaDatabase color="#4682B4" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb color="#4db33d" /> },
      { name: "Oracle", icon: <SiOracle color="#f80000" /> },
      { name: "PL/SQL", icon: <TbSql color="#00758f" /> },
      { name: "SQL", icon: <FaDatabase color="#4682B4" /> },
    ],
  },
  {
    title: "Tech Tools",
    icon: <FaGithub color="#fff" />,
    skills: [
      { name: "GitHub", icon: <FaGithub color="#fff" /> },
      { name: "Postman", icon: <SiPostman color="#ff6c37" /> },
      { name: "JDBC", icon: <FaDatabase color="#3E8EDE" /> },
      { name: "Servlet", icon: <FaCode color="#4caf50" /> },
      { name: "JSP", icon: <FaCode color="#ff5722" /> },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleTabClick = (index) => {
    setFade(false);
    setTimeout(() => {
      setActiveTab(index);
      setFade(true);
    }, 200);
  };

  return (
    <>
      <style>{`
        .skills-section {
          background-color: #000;
          color: #fff;
          padding: 4rem 1rem;
          font-family: 'Segoe UI', sans-serif;
        }

        .skills-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #00bfff;
        }

        .tabs {
          display: flex;
          justify-content: center;
          flex-wrap: nowrap;
          overflow-x: auto;
          padding: 0.5rem;
          margin: 0 auto 2rem;
          max-width: 100%;
          gap: 1rem;
          scrollbar-width: none; /* Firefox */
        }

        .tabs::-webkit-scrollbar {
          display: none; /* Chrome */
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
          padding: 0.6rem 1.2rem;
          font-size: 1rem;
          border: 2px solid #00bfff;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          color: #00bfff;
          flex-shrink: 0;
        }

        .tab svg {
          font-size: 1.2rem;
        }

        .tab:hover {
          background-color: #00bfff;
          color: #000;
        }

        .tab.active {
          background-color: #00bfff;
          color: #000;
        }

        .skill-category {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2rem;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .skill-category.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100px;
          padding: 1rem;
          background-color: #222;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(255,255,255,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(255,255,255,0.1);
        }

        .skill-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-size: 0.9rem;
          color: #00bfff;
        }

        @media (max-width: 768px) {
          .skills-title {
            font-size: 2rem;
          }

          .tab {
            font-size: 0.9rem;
            padding: 0.5rem 1rem;
          }

          .tab svg {
            font-size: 1rem;
          }
        }
      `}</style>

      <div id="skills" className="skills-section">
        <h1 className="skills-title">My Skills</h1>

        {/* Tabs */}
        <div className="tabs">
          {skillsData.map((category, index) => (
            <div
              key={category.title}
              className={`tab ${activeTab === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {category.icon}
              <span>{category.title}</span>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div
          className={`skill-category ${fade ? "fade-in" : ""}`}
          data-aos="fade-up"
        >
          {skillsData[activeTab].skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
