import React from "react";

const projectData = [
  {
    name: "E-Agri-Website",
    description: `E-Agri Website is a web-based platform built using HTML, CSS, JavaScript, and PHP to support farmers by providing access to crop information, expert advice, and market updates. It aims to digitize agriculture services and improve communication between farmers, consumers, and agricultural professionals.`,
    link: "https://eagri-2024.netlify.app/",
  },
  {
    name: "Student Attendance Management System",
    description: `This project is about maintaining student attendance based on the daily report. This project reduces paper work and is useful to keep data for a longer time. Data is secured. Technologies used in this project are PHP, Python, JavaScript, CSS, HTML, and MySQL.`,
    link: "http://localhost:8000/",
  },
  {
    name: "Password-Generator",
    description: `The Password Generator is built using HTML, CSS, and JavaScript. It lets users create strong, random passwords instantly. Users can customize the length and choose character types like letters, numbers, and symbols. JavaScript handles the logic to generate secure passwords dynamically. The UI is clean, responsive, and user-friendly.`,
    link: "https://dhanapwd.netlify.app/",
  },
  {
    name: "Notes-App",
    description: `The Notes App built with HTML, CSS, and JavaScript allows users to create, edit, and delete personal notes. It features a simple and intuitive interface where notes are displayed with a clean design. JavaScript enables functionality like adding new notes and removing them. The app stores the notes in the browser's local storage, ensuring they persist between sessions. CSS enhances the app’s appearance with a user-friendly, responsive layout.`,
    link: "https://dhana1-notes.netlify.app/",
  },
  {
    name: "Portfolio Website",
    description: `A personal portfolio website created using React.js, CSS, and modern web design practices. It showcases my projects, skills, education, and contact information. The layout includes interactive animations, a responsive design, and seamless navigation using React Router.`,
    link: "https://portflio2024.netlify.app/", 
  },
];

const Projects = () => {
  return (
    <>
      <style>{`
        .projects-section {
          background-color: #000;
          color: #fff;
          padding: 2rem;
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
          max-width: 1200px;
          margin: 0 auto;
        }

        .projects-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #00bfff;
        }

        .projects-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 3rem;
          padding: 0 1rem;
        }

        .project-card {
          background-color: #111;
          padding: 1.5rem;
          border-radius: 12px;
          width: 350px;
          height: 280px;
          box-shadow: 0 4px 12px rgba(255,255,255,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: fadeInUp 0.8s ease forwards;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(255,255,255,0.15);
        }

        .project-title {
          font-size: 1.5rem;
          color: #00bfff;
          margin-bottom: 0.5rem;
        }

        .project-description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 1rem;
          max-height: 140px;
          overflow-y: auto;
          padding-right: 8px;
          flex: 1;
        }

        .project-description::-webkit-scrollbar {
          width: 6px;
        }

        .project-description::-webkit-scrollbar-track {
          background: #222;
        }

        .project-description::-webkit-scrollbar-thumb {
          background: #555;
          border-radius: 10px;
        }

        .project-link {
          color: #ff1493;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
          transition: color 0.3s ease;
          margin-top: auto;
        }

        .project-link:hover {
          color: #00bfff;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .projects-container + .projects-container {
          margin-top: 2rem;
        }
      `}</style>

      <div id="projects" className="projects-section">
        <h1 className="projects-title">My Projects</h1>

        <div className="projects-container">
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              <h2 className="project-title">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
