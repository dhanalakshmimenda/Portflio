import React, { useEffect } from "react";
import { FaUniversity, FaSchool } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const educationDetails = [
  {
    title: "Bachelor of Technology in Computer Science",
    institute: "Dr.B.R.Ambedkar University College Of Engineering, Srikakulam",
    duration: "2020 - 2024",
    grade: "A (CGPA: 8.0)",
    icon: <FaUniversity />,
  },
  {
    title: "Higher Secondary Education (Class XII)",
    institute: "A.P Model Govt. Jr. College Edulavalasa Polaki",
    duration: "2018 - 2020",
    grade: "A+ (Percentage: 98%)",
    icon: <GiGraduateCap />,
  },
  {
    title: "Secondary Education (Class X)",
    institute: "A.P Residential (G) School Vommaravalli, Srikakulam",
    duration: "2017 - 2018",
    grade: "A+ (Percentage: 98%)",
    icon: <FaSchool />,
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <style>{`
        .education-section {
          background-color: #000;
          padding: 3rem 1rem;
          color: #fff;
          position: relative;
        }

        .education-title {
          text-align: center;
          font-size: 2.8rem;
          color: #00bfff;
          margin-bottom: 4rem;
          font-weight: bold;
        }

        .timeline-container {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: linear-gradient(135deg, #00bfff, #00ffcc);
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.4);
          z-index: 0;
        }

        .timeline-item {
          position: relative;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          margin-bottom: 3rem;
        }

        .timeline-item.right {
          justify-content: flex-end;
        }

        .education-card {
          background: linear-gradient(135deg, #111, #1c1c1c);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 255, 255, 0.15);
          max-width: 380px;
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .education-card:hover {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
          transform: translateY(-4px);
        }

        .timeline-dot {
          position: absolute;
          top: 1.4rem;
          width: 14px;
          height: 14px;
          background: #00bfff;
          border: 2px solid #000;
          border-radius: 50%;
          z-index: 2;
        }

        .connector-line {
          position: absolute;
          top: 1.8rem;
          width: 25px;
          height: 3px;
          background: #00bfff;
          z-index: 1;
        }

        .timeline-item.left .timeline-dot {
          left: 50%;
          transform: translateX(-8px);
        }

        .timeline-item.left .connector-line {
          left: 50%;
          transform: translateX(-100%);
        }

        .timeline-item.right .timeline-dot {
          right: 50%;
          transform: translateX(8px);
        }

        .timeline-item.right .connector-line {
          right: 50%;
          transform: translateX(100%);
        }

        .timeline-item.left .education-card {
          margin-left: 120px;
        }

        .timeline-item.right .education-card {
          margin-right: 120px;
        }

        .education-header {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          font-weight: bold;
          color: #00bfff;
          margin-bottom: 0.5rem;
        }

        .education-header .icon {
          margin-right: 0.75rem;
          font-size: 1.5rem;
        }

        .education-details p {
          color: #ddd;
          font-size: 1.05rem;
          margin: 0.4rem 0;
        }

        .education-details p strong {
          color: #00bfff;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .timeline-item,
          .timeline-item.right {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .timeline-dot {
            left: 50% !important;
            transform: translateX(-50%);
          }

          .connector-line {
            display: none;
          }

          .timeline-line {
            display: none;
          }

          .education-card {
            margin-top: 1rem;
          }
        }
      `}</style>

      <div id="education" className="education-section">
        <h1 className="education-title">Education</h1>

        <div className="timeline-container">
          <div className="timeline-line" />
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="timeline-dot" />
              <div className="connector-line" />
              <div className="education-card">
                <div className="education-header">
                  <span className="icon">{edu.icon}</span>
                  {edu.title}
                </div>
                <div className="education-details">
                  <p>{edu.institute}</p>
                  <p>{edu.duration}</p>
                  <p>
                    <strong>Grade:</strong> {edu.grade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
